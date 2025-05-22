import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaBarsStaggered } from "react-icons/fa6";
import { useAuthContext } from "../context/AuthContext";
import { useGetCartItemsQuery } from "../features/CartApi";

const NavIcon = ({ setIsNavExtanded }) => {
  const { isLoggedIn, currentLoggedUser } = useAuthContext();

  const { data } = useGetCartItemsQuery(currentLoggedUser.id);
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center justify-end shadow-inner rounded-lg px-2 py-1 ">
        <input
          type="text"
          placeholder="Search..."
          className="outline-none bg-transparent text-sm"
        />
        <BiSearchAlt2 className="text-sm cursor-pointer" />
      </div>
      <NavLink
        to={
          !isLoggedIn
            ? "/login"
            : (currentLoggedUser.role === "admin" && "/admin_dashboard") ||
              (currentLoggedUser.role === "user" && "/user_dashboard")
        }
      >
        <FaUser className="text-xl font-semibold" />
      </NavLink>
      <NavLink to={isLoggedIn ? "/cart" : "/login"} className="relative">
        <FaShoppingCart className="text-xl font-semibold " />
        {data?.length > 0 && (
          <span className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center  text-xs font-semibold text-white bg-pink-500 rounded-full">
            {data?.length}
          </span>
        )}
      </NavLink>
      <button className="lg:hidden">
        <FaBarsStaggered
          onClick={() => setIsNavExtanded((prevState) => !prevState)}
        />
      </button>
    </div>
  );
};

export default NavIcon;
