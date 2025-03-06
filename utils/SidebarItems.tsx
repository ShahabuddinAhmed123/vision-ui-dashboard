import Image from "next/image";
import React from "react";
import { FaHome } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";
import { BsCreditCardFill } from "react-icons/bs";
import { HiWrench } from "react-icons/hi2";
import { IoPerson } from "react-icons/io5";
import { IoDocument } from "react-icons/io5";
import { IoRocketSharp } from "react-icons/io5";


const SidebarItems = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-4 py-[10px] pr-3 pl-4 w-full bg-[#1a1f37] hover:bg-[#1a1f37] cursor-pointer rounded-2xl">
        <div className="w-8 h-8 flex items-center justify-center bg-[#0075ff] rounded-xl text-white">
        <FaHome />
        </div>
        <p className="text-sm font-normal">Dashboard</p>
      </div>
      <div className="flex items-center gap-4 py-[10px] pr-3 pl-4 w-full rounded-2xl cursor-pointer">
        <div className="w-8 h-8 flex items-center justify-center bg-[#1a1f37] text-[#0075ff]  rounded-xl">
           <MdBarChart/>
        </div>
        <p className="text-sm font-normal">Tables</p>
      </div>
      <div className="flex items-center gap-4 py-[10px] pr-3 pl-4 w-full  rounded-2xl cursor-pointer">
        <div className="w-8 h-8 flex items-center justify-center bg-[#1a1f37] text-[#0075ff] rounded-xl">
            <BsCreditCardFill/>
        </div>
        <p className="text-sm font-normal">Billing</p>
      </div>
      <div className="flex items-center gap-4 py-[10px] pr-3 pl-4 w-full  rounded-2xl cursor-pointer">
        <div className="w-8 h-8 flex items-center justify-center bg-[#1a1f37] text-[#0075ff] rounded-xl">
            <HiWrench/>
        </div>
        <p className="text-sm font-normal">RTL</p>
      </div>
      <h1 className="uppercase text-xs font-semibold mx-4 mt-3">Account pages</h1>
      <div className="flex items-center gap-4 py-[10px] pr-3 pl-4 w-full  rounded-2xl cursor-pointer">
        <div className="w-8 h-8 flex items-center justify-center bg-[#1a1f37] text-[#0075ff] rounded-xl">
            <IoPerson/>
        </div>
        <p className="text-sm font-normal">Profile</p>
      </div>
      <div className="flex items-center gap-4 py-[10px] pr-3 pl-4 w-full  rounded-2xl cursor-pointer">
        <div className="w-8 h-8 flex items-center justify-center bg-[#1a1f37] text-[#0075ff] rounded-xl">
            <IoDocument/>
        </div>
        <p className="text-sm font-normal">SignIn</p>
      </div>
      <div className="flex items-center gap-4 py-[10px] pr-3 pl-4 w-full  rounded-2xl cursor-pointer">
        <div className="w-8 h-8 flex items-center justify-center bg-[#1a1f37] text-[#0075ff] rounded-xl">
            <IoRocketSharp/>
        </div>
        <p className="text-sm font-normal">SignUp</p>
      </div>
    </div>
  );
};

export default SidebarItems;
