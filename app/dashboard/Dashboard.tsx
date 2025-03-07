"use client";
import Footer from "@/components/Footer";
import DashFirstComponent from "@/dashboardComponents/DashFirstComponent";
import DashLastComponent from "@/dashboardComponents/DashLastComponent";
import DashSecondComponent from "@/dashboardComponents/DashSecondComponent";
import DashThirdComponent from "@/dashboardComponents/DashThirdComponent";
import React from "react";


export default function Dashboard() {
  return (
    <div className="dashboard w-full h-auto p-6 relative overflow-y-auto mt-[110px] ">
      <DashFirstComponent/>
      <DashSecondComponent/>
      <DashThirdComponent/>
      <DashLastComponent/>
      <Footer/>
    </div>
  );
}
