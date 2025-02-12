import { useAppContext } from "../contexts/AppContext";
import { Link } from "react-router-dom";
import LogOutButton from "./LogOutButton";

const Navbar = () => {
  const { isLoggedIn } = useAppContext();
  // console.log(isLoggedIn);

  return (
    <div className="container mx-auto bg-transparent px-6 py-4 z-10">
      <div className=" mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold">
          <Link
            to="/"
            className="flex items-center text-orange-500 px-3 font-bold"
          >
            HOTel
          </Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-sm text-orange-500 px-3 font-bold transition-all hover:bg-orange-500/10 active:bg-orange-500/10 rounded-md"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center text-sm text-orange-500 px-3 font-bold transition-all hover:bg-orange-500/10 active:bg-orange-500/10 rounded-md"
                to="/my-hotels"
              >
                My Hotels
              </Link>

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
        </span>
      </div>
    </div>
  );
};

export default Navbar;
