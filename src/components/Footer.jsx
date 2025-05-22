import React from "react";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="py-5">
      <div className=" bg-pink-100 flex flex-col items-center py-12">
        <div className="py-5">
          <h2 className="text-lg font-bold py-5 capitalize">
            Subscribe to get offers in your inbox
          </h2>
          <div className="flex items-center">
            <input
              type="email"
              autoComplete="off"
              placeholder="example@example.com"
              className="outline-none bg-transparent w-full rounded-l-2xl border-slate-400 border-2 h-8 px-3 text-sm"
            />
            <button className="w-4/12 bg-slate-400 rounded-2xl h-8 flex justify-center items-center -ml-4">
              <BiSearchAlt2 className="text-lg text-black" />
            </button>
          </div>
        </div>
        <div className="py-5">
          <NavItem />
        </div>
        <div className="py-5">
          <ul className="flex items-center space-x-4">
            <li>
              <Link>
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link>
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link>
                <FaInstagram />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-black py-10 ">
        <p className="text-white text-center text-sm">
          Copyright © 2024 T-Shirts Store | Developed by Nazmul Hossen
        </p>
      </div>
    </div>
  );
};

export default Footer;
