import React from "react";
import { NavLink } from "react-router-dom";

import { RiDashboardHorizontalLine } from "react-icons/ri";
import { LuShoppingBag } from "react-icons/lu";
import { IoPricetagOutline } from "react-icons/io5";
import { PiUsers } from "react-icons/pi";

const AdminDashboardSidebar = ({ isOpen }) => {
  return (
    <>
      <ul
        className={`flex flex-col gap-10 pt-10 border-t-[1px] ${
          isOpen ? "justify-start pl-5 " : "items-center"
        }`}
      >
        <li>
          <NavLink
            to={"/admin_dashboard"}
            className={`flex items-center   ${isOpen && "space-x-2"}`}
          >
            <span>
              <RiDashboardHorizontalLine />
            </span>
            <span>{isOpen && "dashboard"}</span>
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to={"/admin_dashboard/products"}
            className={`flex items-center   ${isOpen && "space-x-2"}`}
          >
            <span>
              <IoPricetagOutline />
            </span>
            <span>{isOpen && "products"}</span>
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink className={`flex items-center   ${isOpen && "space-x-2"}`}>
            <span>
              <LuShoppingBag />
            </span>
            <span>{isOpen && "orders"}</span>
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink className={`flex items-center   ${isOpen && "space-x-2"}`}>
            <span>
              <PiUsers />
            </span>
            <span>{isOpen && "users"}</span>
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink className="flex items-center  space-x-1">
            <span>{isOpen && "dashboard"}</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default AdminDashboardSidebar;
