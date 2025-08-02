const Navbar = () => {
  return (
    <>
      <div className="w-full sticky top-0 z-50 bg-white">
        <div className="navbar bg-green-100 shadow-sm">
          {/* 1400px inner container */}
          <div className="w-full max-w-[1400px] mx-auto flex justify-between items-center">
            <div className="flex-1">
              <a className="text-xl font-bold">React Setup</a>
            </div>

            <input
              type="text"
              placeholder="Search"
              className="border rounded border-gray-300 mr-2 flex text-center w-24 md:w-auto outline-none text-base p-1"
            />

            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content rounded-box z-10 mt-3 w-52 p-2 shadow bg-red-50"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
