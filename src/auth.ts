const CLIENT_ID = import.meta.env.VITE_REACT_APP_CLIENT_ID;
const REDIRECT_URI =
  import.meta.env.VITE_REACT_APP_REDIRECT_URI ||
  `${window.location.origin}/callback`;
const SCOPES =
  import.meta.env.VITE_REACT_APP_SCOPES ||
  [
    "streaming",
    "user-read-email",
    "user-read-private",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-top-read",
    "user-follow-read",
    "user-follow-modify",
  ].join(" ");

const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

const TOKEN_KEY = "token";
const REFRESH_TOKEN_KEY = "refresh_token";
const EXPIRES_AT_KEY = "token_expires_at";
const VERIFIER_KEY = "code_verifier";
const STATE_KEY = "auth_state";

// Refresh a minute before the token actually expires.
const EXPIRY_MARGIN_MS = 60 * 1000;

interface TokenResponse {
  access_token: string;
  refresh_token?: string;
  expires_in: number;
}

function randomString(length: number) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const values = crypto.getRandomValues(new Uint8Array(length));
  return Array.from(values, (value) => chars[value % chars.length]).join("");
}

async function codeChallenge(verifier: string) {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(verifier)
  );
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function saveTokens(data: TokenResponse) {
  window.localStorage.setItem(TOKEN_KEY, data.access_token);
  window.localStorage.setItem(
    EXPIRES_AT_KEY,
    String(Date.now() + data.expires_in * 1000)
  );
  if (data.refresh_token) {
    window.localStorage.setItem(REFRESH_TOKEN_KEY, data.refresh_token);
  }
}

async function requestToken(params: Record<string, string>) {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ client_id: CLIENT_ID, ...params }),
  });
  if (!response.ok) {
    throw new Error(`Token request failed with status ${response.status}`);
  }
  const data = (await response.json()) as TokenResponse;
  saveTokens(data);
  return data.access_token;
}

export async function redirectToSpotifyLogin() {
  const verifier = randomString(64);
  const state = randomString(16);
  window.localStorage.setItem(VERIFIER_KEY, verifier);
  window.localStorage.setItem(STATE_KEY, state);

  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    response_type: "code",
    redirect_uri: REDIRECT_URI,
    scope: SCOPES,
    state,
    code_challenge_method: "S256",
    code_challenge: await codeChallenge(verifier),
  });
  window.location.assign(`${AUTH_ENDPOINT}?${params.toString()}`);
}

export async function exchangeCodeForToken(code: string, state: string | null) {
  const verifier = window.localStorage.getItem(VERIFIER_KEY);
  const expectedState = window.localStorage.getItem(STATE_KEY);
  window.localStorage.removeItem(VERIFIER_KEY);
  window.localStorage.removeItem(STATE_KEY);

  if (!verifier || !state || state !== expectedState) {
    throw new Error("Invalid login state");
  }

  return requestToken({
    grant_type: "authorization_code",
    code,
    redirect_uri: REDIRECT_URI,
    code_verifier: verifier,
  });
}

let refreshing: Promise<string> | null = null;

function refreshAccessToken(refreshToken: string) {
  refreshing ??= requestToken({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  }).finally(() => {
    refreshing = null;
  });
  return refreshing;
}

export function getStoredToken() {
  return window.localStorage.getItem(TOKEN_KEY);
}

export function isTokenExpired() {
  const expiresAt = Number(window.localStorage.getItem(EXPIRES_AT_KEY));
  return !expiresAt || Date.now() > expiresAt - EXPIRY_MARGIN_MS;
}

// Returns a valid access token, refreshing it when needed.
// Returns null when the user has to log in again.
export async function getAccessToken() {
  const token = getStoredToken();
  if (!token) return null;
  if (!isTokenExpired()) return token;

  const refreshToken = window.localStorage.getItem(REFRESH_TOKEN_KEY);
  if (!refreshToken) return null;
  try {
    return await refreshAccessToken(refreshToken);
  } catch (error) {
    console.error("Error refreshing token:", error);
    return null;
  }
}

export function clearTokens() {
  window.localStorage.removeItem(TOKEN_KEY);
  window.localStorage.removeItem(REFRESH_TOKEN_KEY);
  window.localStorage.removeItem(EXPIRES_AT_KEY);
}
