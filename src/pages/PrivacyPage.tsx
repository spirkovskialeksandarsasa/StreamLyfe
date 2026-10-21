function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-stone-300">
      <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>

      <h2 className="text-xl font-semibold text-white mt-6 mb-2">
        What data StreamLyfe uses
      </h2>
      <p>
        When you sign in with Spotify, StreamLyfe asks Spotify for permission
        to read your profile name and picture, your top artists and tracks,
        the artists you follow, and to control playback in the browser player.
        This data is only used to show you your own statistics inside the app.
      </p>

      <h2 className="text-xl font-semibold text-white mt-6 mb-2">
        Where your data is stored
      </h2>
      <p>
        StreamLyfe has no server and no database. Your Spotify data is loaded
        directly from Spotify into your browser and is never sent anywhere
        else. The only thing saved is your Spotify login token, which is kept
        in your browser's local storage and removed when you log out.
      </p>

      <h2 className="text-xl font-semibold text-white mt-6 mb-2">
        Removing access
      </h2>
      <p>
        You can log out at any time from the menu under your profile picture.
        To fully revoke StreamLyfe's access to your Spotify account, remove it
        from the apps list on your{" "}
        <a
          href="https://www.spotify.com/account/apps/"
          target="_blank"
          rel="noreferrer"
          className="text-green-300 hover:underline"
        >
          Spotify account page
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold text-white mt-6 mb-2">Contact</h2>
      <p>
        Questions about this policy can be sent to{" "}
        <a
          href="mailto:sasespirkovski@yahoo.com"
          className="text-green-300 hover:underline"
        >
          sasespirkovski@yahoo.com
        </a>
        .
      </p>
    </div>
  );
}

export default PrivacyPage;
