import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full shadow-lg h-30 bg-white fixed  z-100 ">
      <div className=" gap-3 absolute right-20 px-16 py-2 xs:w-[full]  hidden md:flex">
        <h2 className="font-bold text-gray-600 text-xl  ">
          Contact: (562) 498-4600{" "}
        </h2>
        <h3 className="font-bold text-gray-600 text-xl  ">
          Email: xyz@carrental.com
        </h3>
      </div>
      <div className="flex justify-between py-10 ">
        <div className=" items-center text-left px-2 w-full ">
          <div className="flex flex-col ">
            <h2 className=" font-semibold text-2xl text-gray-600   ">
              CAR RENTAL
            </h2>
            <h2 className=" font-bold text-xl text-gray-600  ">
              TOP CAR RENTAL DEALS
            </h2>
          </div>
        </div>
        <div className=" items-center text-center justify-center w-full">
          <ul className="text-2xl uppercase  gap-10 items-center text-center justify-center py-5 mr-5 hidden md:flex font-bold text-gray-600 ">
            <Link href="/">
              <li className="hover:text-pink-400">HOME</li>
            </Link>
            <Link href="/#about">
              <li>ABOUT</li>
            </Link>
            <Link href="/#contact">
              <li>CONTACT</li>
            </Link>
            <Link href="/#vehicle">
              <li>VEHICLE</li>
            </Link>
            <li>MODELS</li>
            <Link href="/#testimonials">
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
