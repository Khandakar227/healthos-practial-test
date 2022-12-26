import React, { useState, useEffect } from "react";
import Drawer from "react-modern-drawer";
import Link from "next/link";
import { FaOpencart, FaBars } from "react-icons/fa";
import Searchbar from "./Search";
import "react-modern-drawer/dist/index.css";

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    setIsDrawerOpen(false);
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav className="flex justify-between items-center py-4 gap-4 px-3">
        {/* NavBrand */}
        <Link href="/">
          <img className="w-12 h-12" src="/assets/favicon.jpg" alt="Logo" />
        </Link>
        {/* SearchBar */}
        <div className="hidden md:block">
          <Searchbar />
        </div>
        {/* Hamburger for mobile screen */}
        <button className="block md:hidden scale-150" onClick={toggleDrawer}>
          <FaBars />
        </button>
        
        <div className="md:flex gap-8 hidden">
          <Link href="/cart" className="flex gap-4 items-center mx-4">
            <FaOpencart /> <span className="font-bold"> Cart </span>
          </Link>
          <div className="flex">
            <Link href="/login" className="flex gap-4 items-center mx-4">
              <span className="font-bold"> Login </span>
            </Link>
            <Link href="/register" className="flex gap-4 items-center mx-4">
              <span className="font-bold"> Register </span>
            </Link>
          </div>
        </div>
      </nav>
      {/* Search bar for mobile screen */}
      <div className="md:hidden block mx-2 my-2 py-2 px-2 rounded-md shadow">
        <Searchbar />
      </div>

      {/* For mobile screen */}
      <Drawer
        open={isDrawerOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bg-black"
      >
        <div className="py-4">
          <Link
            href="/cart"
            className="flex gap-4 items-center px-4 text-center py-4 border"
          >
            <FaOpencart /> <span className="font-bold"> Cart </span>
          </Link>
          <Link
            href="/login"
            className="flex gap-4 items-center px-4 text-center py-4 border"
          >
            <span className="font-bold"> Login </span>
          </Link>
          <Link
            href="/register"
            className="flex gap-4 items-center px-4 text-center py-4 border"
          >
            <span className="font-bold"> Register </span>
          </Link>
        </div>
      </Drawer>
    </>
  );
}

export default Navbar;
