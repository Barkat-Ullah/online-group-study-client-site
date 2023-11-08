import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // const { toggleTheme } = useContext(AuthContext);
  
    const [loggedIn, setLoggedIn] = useState("");
  
    useEffect(() => {
      if (user) {
        setLoggedIn(user);
      } else {
        setLoggedIn(null);
      }
    }, [user]);
  
    const handleSignOut = () => {
      logOut().then().catch();
    };
    const links = (
      <>

        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#5eb6c5]" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/allAssignment"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#5eb6c5]" : ""
            }
          >
           Assignments
          </NavLink>
        </li>

        {
            user?.email ? <>
            
            <li className="">
                <NavLink
                to="/create"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#5eb6c5]  " : ""
                }
                >
                Create Assignment
                </NavLink>
            </li>

            <li className="">
                <NavLink
                to="/myAssignment"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#5eb6c5] " : ""
                }
                >
                My Assignment
                </NavLink>
            </li>

            <li className="">
                <NavLink
                to="/submitted"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#5eb6c5] " : ""
                }
                >
                Submitted Assignment
                </NavLink>
            </li>
            
            </> : ''
        }
  

      </>
    );
  
    return (
      <div className="relative">
        <nav className="navbar bg-slate-800 fixed top-0 right-0 left-0 ">
   
            <div className="navbar-start ">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-warning lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {links}
                </ul>
              </div>
              <div className="sm:ml-2 flex justify-center items-center gap-3">
                <img
                  className="w-10 h-10 sm:pl-16 md:w-28 md:h-12"
                  src="https://i.ibb.co/0QppzSv/PS.png"
                  alt=""
                />
                <span className="text-sm md:text-2xl font-bold text-pink">PLURALSIGHT</span>
                
  
                {/* <input
                  onClick={toggleTheme}
                  type="checkbox"
                  className="toggle toggle-warning "
                /> */}
              </div>
            </div>
            <div className="navbar-end hidden lg:flex">
              <ul className="flex gap-5  text-slate-400">{links}</ul>
            </div>
            <div className="navbar-end">
              {loggedIn && (
                <div className=" mr-6 ">
                  <img className="w-12 rounded-full " src={loggedIn?.photoURL} />
                  <h2 className="text-pink">{loggedIn?.displayName}</h2>
                </div>
              )}
  
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="btn bg-gradient-to-r from-sky-400 to-blue-500 hover:from-blue-500 hover:to-sky-500 transition delay-150, duration-700, ease-in-out text-white"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="btn bg-gradient-to-r from-sky-400 to-blue-500 hover:from-blue-500 hover:to-sky-500 transition delay-150, duration-700, ease-in-out text-white"
                >
                  Login
                </Link>
              )}
            </div>
          </nav>
        </div>
    );
  };

export default Navbar;