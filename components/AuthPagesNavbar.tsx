import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { IoPerson, IoPersonCircle } from "react-icons/io5";
import { MdDonutLarge, MdVpnKey } from "react-icons/md";

const AuthPagesNavbar = () => {
  return (
    <div className="h-[75px] bg-transparent z-50 w-[60%] mx-auto mt-3 rounded-2xl mx-5 border border-gray-500 backdrop-blur-md fixed top-1 py-4 px-6 left-1/2 transform translate-x-[-50%] flex items-center justify-between">
      <a href="/">
        <img src="/vision-ui-logo.png" alt="logo" className=" w-[129px]" />
      </a>
      <Box
        sx={{
          width: "auto",
          display: "flex",
          alignItems: "center",
        }}
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
        <Link href="/" className="flex items-center p-2 mx-2 gap-1">
          <IoPerson style={{ marginBottom: "2px" }} />
          <Typography
            sx={{
              fontSize: "14px",
            }}
          >
            Profile
          </Typography>
        </Link>
        <Link href="/" className="flex items-center p-2 mx-2 gap-1">
          <IoPersonCircle style={{ marginBottom: "2px" }} />
          <Typography
            sx={{
              fontSize: "14px",
            }}
          >
            Sign Up
          </Typography>
        </Link>
        <Link href="/" className="flex items-center p-2 mx-2 gap-1">
          <MdVpnKey style={{ marginBottom: "2px" }} />
          <Typography
            sx={{
              fontSize: "14px",
            }}
          >
            Sign In
          </Typography>
        </Link>
      </Box>
      <button className="text-[12px] font-semibold bg-[#0075ff] py-3 px-6 rounded-[10px]">
        BUY NOW
      </button>
    </div>
  );
};

export default AuthPagesNavbar;
