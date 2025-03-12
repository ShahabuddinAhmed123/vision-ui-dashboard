"use client";
import Footer from "@/components/Footer";
import DashFirstComponent from "@/dashboardComponents/DashFirstComponent";
import DashLastComponent from "@/dashboardComponents/DashLastComponent";
import DashSecondComponent from "@/dashboardComponents/DashSecondComponent";
import DashThirdComponent from "@/dashboardComponents/DashThirdComponent";
import React from "react";


export default function Dashboard() {
  return (
    <div className="dashboard w-full h-auto p-6 relative overflow-y-auto z-0 pt-[110px] ml-[17.125rem] max-[1440px]:ml-0"
    style={{
      transition: "margin-left 300ms cubic-bezier(0.4, 0, 0.2, 1), margin-right 300ms cubic-bezier(0.4, 0, 0.2, 1)",
    }}>
      <DashFirstComponent/>
      <DashSecondComponent/>
      <DashThirdComponent/>
      <DashLastComponent/>
      <Footer/>
    </div>
  );
}
