import { useAppContext } from "../contexts/AppContext";
import { Link } from "react-router-dom";
import LogOutButton from "./LogOutButton";
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import { SiSlint } from "react-icons/si";
import { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { isLoggedIn } = useAppContext();
  console.log(isLoggedIn);

  return (
    <div className="container mx-auto bg-transparent z-10">
      <div className="md:flex justify-between px-3 md:px-8 mx-auto lg:max-w-7xl md:items-center">
        {/* <div> */}
        <div className="flex items-center justify-between md:py-5 md:block">
          <Link to="/">
            <h2 className="flex justify-center items-center md:text-xl font-bold text-orange-500">
              <span className="inline-flex items-center">
                Hotel
                <SiSlint />
                tun22222
              </span>
            </h2>
          </Link>
          <div className="md:hidden">
            <button
              className="p-2 text-orange-500 rounded-md outline-none focus:border-orange-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <RxCross2></RxCross2> : <FaBars></FaBars>}
            </button>
          </div>
        </div>
        {/* </div> */}

        <div>
          <div
            className={`flex-1 justify-self-start mt-2 mb-12 md:block md:pb-0 md:mb-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <span className="md:flex gap-4">
              {isLoggedIn ? (
                <>
                  <Link
                    className="flex items-center text-sm text-orange-400 md:px-3 font-bold transition-all hover:text-orange-600 active:bg-orange-500/10 rounded-md mb-2"
                    to="/my-bookings"
                  >
                    My Bookings
                  </Link>
                  <Link
                    className="flex items-center text-sm text-orange-400 md:px-3 font-bold transition-all hover:text-orange-600 active:bg-orange-500/10 rounded-md mb-2"
                    to="/my-hotels"
                  >
                    My Hotels
                  </Link>
                  <Link
                    className="flex items-center text-sm text-orange-400 md:px-3 font-bold transition-all hover:text-orange-600 active:bg-orange-500/10 rounded-md mb-2"
                    to="/admin"
                  >
                    Admin
                  </Link>

                  <LogOutButton />
                </>
              ) : (
                <Link
                  to="/login"
                  className="uppercase text-xs font-semibold p-2 md:p-3 rounded-lg border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white hover:border-transparent"
                >
                  Sign In
                </Link>
              )}
            </span>
          </div>
        </div>
      </div>

      <div className="hidden items-center">
        {isLoggedIn ? (
          <>
            <LogOutButton />
          </>
        ) : (
          <Link
            to="/login"
            className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100"
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
