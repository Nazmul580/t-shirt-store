import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  HiMiniArrowRightEndOnRectangle,
  HiMiniArrowLeftOnRectangle,
} from "react-icons/hi2";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { LuShoppingBag } from "react-icons/lu";
import { IoPricetagOutline } from "react-icons/io5";
import { PiUsers } from "react-icons/pi";
import AdminDashboardSidebar from "../../components/AdminDashboardSidebar";
const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex  min-h-screen">
      <aside
        className={`${
          isOpen ? "w-44  " : "w-10"
        }  fixed transition-all delay-75   left-0`}
      >
        <div className="bg-pink-100 h-screen">
          <div
            className={`flex py-3  ${
              isOpen ? "justify-end " : "justify-center"
            }`}
          >
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <HiMiniArrowLeftOnRectangle />
              ) : (
                <HiMiniArrowRightEndOnRectangle />
              )}
            </button>
          </div>
          <AdminDashboardSidebar isOpen={isOpen} />
        </div>
      </aside>
      <div
        className={` ${
          isOpen ? "ml-44" : "ml-10"
        } flex-1  transition-all delay-75 `}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
