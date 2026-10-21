/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REACT_APP_CLIENT_ID: string;
  readonly VITE_REACT_APP_REDIRECT_URI?: string;
  readonly VITE_REACT_APP_SCOPES?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
