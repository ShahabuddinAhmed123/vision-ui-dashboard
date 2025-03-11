import React from 'react'
import DashFirstComponent from "@/dashboardComponents/DashFirstComponent";
import DashLastComponent from "@/dashboardComponents/DashLastComponent";
import DashSecondComponent from "@/dashboardComponents/DashSecondComponent";
import DashThirdComponent from "@/dashboardComponents/DashThirdComponent";

const RTLComponent = () => {
  return (
    <div className="dashboard w-full h-auto p-6 relative overflow-y-auto z-0 pt-[110px] ">
    <DashFirstComponent/>
    <DashSecondComponent/>
    <DashThirdComponent/>
    <DashLastComponent/>
  </div>
  )
}

export default RTLComponent
