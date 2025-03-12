import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { IoPerson, IoPersonCircle } from "react-icons/io5";
import { MdDonutLarge, MdVpnKey } from "react-icons/md";

const AuthPagesNavbar = () => {
  return (
    <div className="h-[75px] bg-transparent z-50 w-[60%] max-[1440px]:w-[80%] mx-auto mt-3 rounded-2xl mx-5 border border-gray-500 backdrop-blur-xl fixed top-1 py-4 px-6 left-1/2 transform translate-x-[-50%] flex items-center justify-between">
      <a href="/">
        <img src="/vision-ui-logo.png" alt="logo" className=" w-[129px]" />
      </a>
      <div 
      className="w-auto flex items-center max-[1024px]:hidden"
      >
        <Link href="/" className="flex items-center p-2 mx-2 gap-1">
          <MdDonutLarge style={{ marginBottom: "2px" }} />
          <Typography
            sx={{
              fontSize: "14px",
            }}
          >
            Dashboard
          </Typography>
        </Link>
        <Link href="/profile" className="flex items-center p-2 mx-2 gap-1">
          <IoPerson style={{ marginBottom: "2px" }} />
          <Typography
            sx={{
              fontSize: "14px",
            }}
          >
            Profile
          </Typography>
        </Link>
        <Link href="/sign-up" className="flex items-center p-2 mx-2 gap-1">
          <IoPersonCircle style={{ marginBottom: "2px" }} />
          <Typography
            sx={{
              fontSize: "14px",
            }}
          >
            Sign Up
          </Typography>
        </Link>
        <Link href="/sign-in" className="flex items-center p-2 mx-2 gap-1">
          <MdVpnKey style={{ marginBottom: "2px" }} />
          <Typography
            sx={{
              fontSize: "14px",
            }}
          >
            Sign In
          </Typography>
        </Link>
      </div>
      <button className="text-[12px] font-semibold bg-[#0075ff] py-3 px-6 rounded-[10px] max-[1024px]:hidden">
        BUY NOW
      </button>
      <div>
<label className="relative w-5 h-4 cursor-pointer block" htmlFor="burger">
  <input type="checkbox" id="burger" className="hidden peer" />
  <span className="absolute h-[3px] w-full bg-white rounded-lg left-0 transition-all duration-300 ease-in-out peer-checked:-rotate-40 peer-checked:top-2 peer-checked:left-0"></span>
  <span className="absolute h-[3px] w-full bg-white rounded-lg left-0 top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out peer-checked:w-0 peer-checked:opacity-0"></span>
  <span className="absolute h-[3px] w-full bg-white rounded-lg left-0 top-full -translate-y-full transition-all duration-300 ease-in-out peer-checked:rotate-34 peer-checked:top-[10px] peer-checked:left-0"></span>
</label>

      </div>
    </div>
  );
};

export default AuthPagesNavbar;
