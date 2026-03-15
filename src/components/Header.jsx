import { NavLink } from "react-router-dom";
import ThemeController from "./ThemeController";
import { useGlobalContext } from "../context/MoviesContext";
import Logo from "../components/Logo";

const Header = () => {
  const { favmovies } = useGlobalContext();
  const closeDrawer = () => {
    document.getElementById("my-drawer-2").checked = false;
  };
  return (
    <>
      {/* Navbar */}
      <div className="navbar bg-base-300 w-full p-5 fixed top-0 z-50 left-0 right-0">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-2"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2">
              <Logo />
            </div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal flex items-center gap-2 lg:gap-4 font-semibold">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/movies"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    Movies
                  </NavLink>
                </li>

               
                <li>
                  <NavLink to="/favorite" className="relative">
                    <span>Favorite</span>
                    {favmovies.length > 0 && (
                      <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-white shadow-lg shadow-primary/30 animate-in fade-in zoom-in duration-300">
                        {favmovies.length}
                      </span>
                    )}
                  </NavLink>
                </li>

                
                <li className="ml-2 pl-2 border-l border-base-300">
                  <ThemeController />
                </li>
              </ul>
            </div>
          </div>
      <div className="drawer">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-6 space-y-2 text-lg font-medium">
            <li className="mb-4 pointer-events-none">
              <span className="text-2xl font-black text-primary tracking-tighter">
                MOVIE FINDER
              </span>
            </li>

            <li onClick={closeDrawer}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "bg-primary/10 text-primary" : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li onClick={closeDrawer}>
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  isActive ? "bg-primary/10 text-primary" : ""
                }
              >
                Movies
              </NavLink>
            </li>

            <li onClick={closeDrawer}>
              <NavLink
                to="/favorite"
                className="flex justify-between items-center"
              >
                <span>Favorite</span>
                {favmovies.length > 0 && (
                  <span className="badge badge-primary font-bold px-3 py-3">
                    {favmovies.length}
                  </span>
                )}
              </NavLink>
            </li>

            <div className="divider opacity-20">Settings</div>

            <li className="flex flex-row items-center justify-between">
              <span className="text-sm opacity-70">Dark Mode</span>
              <ThemeController />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
