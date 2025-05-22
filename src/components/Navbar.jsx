import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";
import NavIcon from "./NavIcon";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  const [isNavExtanded, setIsNavExtanded] = useState(false);

  return (
    <>
      <div className=" py-3 border-b-2 border-pink-50 sticky top-0 bg-white z-50 ">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <NavLink to={"/"} className="text-2xl font-bold">
              <img className="w-20" src="./logo.png" alt="logo" />
            </NavLink>
          </div>
          <div className="hidden lg:block">
            <NavItem />
          </div>
          <NavIcon setIsNavExtanded={setIsNavExtanded} />
        </div>
        <div
          className={
            isNavExtanded
              ? "lg:hidden fixed top-0 right-0 left-10 overflow-hidden h-screen bg-white"
              : "hidden"
          }
        >
          <div className="flex justify-end p-5 ">
            <FaBarsStaggered
              onClick={() => setIsNavExtanded((prevState) => !prevState)}
            />
          </div>
          <NavItem
            isNavExtanded={isNavExtanded}
            setIsNavExtanded={setIsNavExtanded}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
