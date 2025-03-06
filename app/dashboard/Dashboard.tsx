"use client";
import DashFirstComponent from "@/components/DashFirstComponent";
import DashSecondComponent from "@/components/DashSecondComponent";
// import { IoWallet } from "react-icons/io5";
// import { Box, Paper, Typography } from "@mui/material";
// import { styled } from "@mui/material";
import React from "react";


export default function Dashboard() {
  return (
    <div className="w-full h-auto p-6 relative overflow-y-auto mt-[110px] ">
      <DashFirstComponent/>
      <DashSecondComponent/>
    </div>
  );
}
