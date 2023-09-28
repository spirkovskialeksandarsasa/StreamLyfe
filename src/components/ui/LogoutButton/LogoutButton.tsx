
function LogoutButton() {
  function logout(){
    window.localStorage.removeItem('token');
  }

  return (
    <div className="w-24 h-6 absolute mt-16 bg-stone-600 hover:bg-gray-600 text-white text-left px-1 rounded">
      <button
        onClick={logout}
      >
        Sign out
      </button>
    </div>
  );
}

export default LogoutButton;
