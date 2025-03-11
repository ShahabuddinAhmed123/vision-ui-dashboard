'use client'

import { Box, Typography } from '@mui/material';
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { AiFillHome } from 'react-icons/ai';
import { FaBell, FaSearch } from 'react-icons/fa';
import { HiMiniSlash } from 'react-icons/hi2';
import { IoPersonCircleSharp, IoSettingsSharp } from 'react-icons/io5';

const Navbar = () => {
  const pathName = usePathname();
const [nameOfPath, setNameOfPath] = useState("");

useEffect(() => {
  if (pathName === "/tables") {
    setNameOfPath("Tables");
  } else if (pathName === "/billing") {
    setNameOfPath("Billing");
  } else if (pathName === "/rtl") {
    setNameOfPath("RTL");
  } else if (pathName === "/profile") {
    setNameOfPath("Profile");
  } else {
    setNameOfPath("Dashboard");
  }
}, [pathName]);

  return (
    <>
    {
      pathName !== "/sign-in" && pathName !== "/sign-up" &&(
    <div className='h-[75px] absolute bg-transparent z-50 w-[83.5%] backdrop-blur-xl py-2 top-3 rounded-2xl mx-5 border left-[270px]'>
      <Box sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingY: "4px",
        paddingX: "16px"
      }}>
        <Box>
        <Box sx={{
          display: "flex",
          alignItems: "center",
          color: "#a0aec0"
        }}>
          <AiFillHome/>
          <HiMiniSlash/>
          <p className='text-[14px] text-white'>{nameOfPath}</p>
          
        </Box>
        <Typography sx={{fontWeight: "600"}}>{nameOfPath}</Typography>
      </Box>

      <Box sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        paddingRight: "6px"
      }}>
        <Box sx={{
          width: "220px",
          height: "38px",
          display: "flex",
          alignItems: "center",
          borderRadius: "15px",
          border: "0.0625rem solid rgba(226, 232, 240, 0.3)",
          background: "rgb(15, 21, 53)"
        }}>
          <div className='mx-[10px] text-[#718096]'>
          <FaSearch/>
          </div>
          <input type="text" className='text-[12px] placeholder:text-[12px]' placeholder='Type here...' />
        </Box>
        <Box sx={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          fontSize: "30px"
        }}>
          <IoPersonCircleSharp/>
          <p className='text-[14px] font-semibold'>Sign in</p>
        </Box>
        <IoSettingsSharp/>
        <FaBell/>
      </Box>
        </Box>
    </div>
      )
    }
    </>
  )
}

export default Navbar
