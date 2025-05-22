import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useAuthContext } from "../context/AuthContext";

const NavItem = ({ isNavExtanded, setIsNavExtanded }) => {
  const { isLoggedIn } = useAuthContext();

  return (
    <>
      <ul className="flex flex-col items-center lg:space-x-5 lg:flex-row ">
        <li
          className={
            isNavExtanded
              ? "bg-pink-100 w-full text-center py-5 border-b-[1px] hover:bg-white"
              : ""
          }
        >
          <Link
            to={"/"}
            onClick={() => isNavExtanded && setIsNavExtanded(false)}
            className="text-sm uppercase font-semibold "
          >
            home
          </Link>
        </li>
        <li
          className={
            isNavExtanded
              ? "bg-pink-100 w-full text-center py-5 border-b-[1px] hover:bg-white"
              : ""
          }
        >
          <Link
            to={"/shop"}
            onClick={() => isNavExtanded && setIsNavExtanded(false)}
            className="text-sm uppercase font-semibold"
          >
            buy t-shirt
          </Link>
        </li>
        <li
          className={
            isNavExtanded
              ? "bg-pink-100 w-full text-center py-5 border-b-[1px] hover:bg-white"
              : ""
          }
        >
          <Link
            to={"/shop?category=man"}
            onClick={() => isNavExtanded && setIsNavExtanded(false)}
            className="text-sm uppercase font-semibold"
          >
            man
          </Link>
        </li>
        <li
          className={
            isNavExtanded
              ? "bg-pink-100 w-full text-center py-5 border-b-[1px] hover:bg-white"
              : ""
          }
        >
          <Link
            to={"/shop?category=women"}
            onClick={() => isNavExtanded && setIsNavExtanded(false)}
            className="text-sm uppercase font-semibold"
          >
            women
          </Link>
        </li>
        <li
          className={
            isNavExtanded
              ? "bg-pink-100 w-full text-center py-5 border-b-[1px] hover:bg-white"
              : ""
          }
        >
          <Link
            to={"/about"}
            onClick={() => isNavExtanded && setIsNavExtanded(false)}
            className="text-sm uppercase font-semibold"
          >
            about
          </Link>
        </li>
        <li
          className={
            isNavExtanded
              ? "bg-pink-100 w-full text-center py-5 border-b-[1px] hover:bg-white"
              : ""
          }
        >
          <Link
            to={"/contact"}
            onClick={() => isNavExtanded && setIsNavExtanded(false)}
            className="text-sm uppercase font-semibold"
          >
            contact
          </Link>
        </li>
        {isLoggedIn ? (
          <li>
            <button
              onClick={() => {
                signOut(auth);
              }}
              className="text-sm uppercase font-semibold"
            >
              logout
            </button>
          </li>
        ) : (
          <li>
            <Link to={"/login"} className="text-sm uppercase font-semibold">
              log in
            </Link>
          </li>
        )}
      </ul>
    </>
  );
};

export default NavItem;
