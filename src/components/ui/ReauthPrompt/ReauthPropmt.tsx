function ReauthPropmt() {
  function deleteToken() {
    window.localStorage.removeItem("token");
  }
  return (
    <div className="animate-fade animate-duration-[1500ms] z-10 animate-delay-[1500ms] fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80">
      <div className="bg-black p-6 rounded shadow-lg">
        <button onClick={deleteToken}>
          <a href="/">Your session has expired. Please log in again.</a>
        </button>
      </div>
    </div>
  );
}

export default ReauthPropmt;
