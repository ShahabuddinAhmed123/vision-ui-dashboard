"use client";
import { Avatar, AvatarGroup, Box, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { PROFILE_BOXES_DATA } from "@/constants/ProfileBoxesData";
import Image from "next/image";


const ProfileComponent = () => {
  const boxData = PROFILE_BOXES_DATA;

  const [toggleStates, setToggleStates] = useState(() =>
    Object.entries(boxData.categories).reduce((acc, [key, items]) => {
      acc[key] = items.map((item) => item.inverse);
      return acc;
    }, {} as Record<string, boolean[]>)
  );

  const handleToggle = (category: string, index: number) => {
    setToggleStates((prev) => ({
      ...prev,
      [category]: prev[category].map((val, i) => (i === index ? !val : val)),
    }));
  };

  return (
    <div className="flex gap-6 w-full">
      <Paper
        sx={{
          padding: "22px",
          width: "23.5%",
          background:
            "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box",
          borderRadius: "20px",
          color: "white",
        }}
      >
        <Typography
          sx={{ fontSize: "18px", fontWeight: "600", marginBottom: "30px" }}
        >
          Platform Settings
        </Typography>
        <Box sx={{ width: "100%", height: "auto" }}>
          <Typography
            sx={{
              fontSize: "10px",
              color: "#a0aec0",
              fontWeight: "600",
              marginBottom: "6px",
            }}
          >
            ACCOUNT
          </Typography>
          {boxData.categories.BoxOneDataOne.map((item, index) => (
            <Box
              key={index}
              sx={{
                marginBottom: "18px",
                display: "flex",
                alignItems: "center",
                height: "31.7px",
              }}
            >
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={toggleStates.BoxOneDataOne[index]}
                  onChange={() => handleToggle("BoxOneDataOne", index)}
                />
                <div className="w-10 h-5 bg-[#1b1f36] rounded-full peer-checked:bg-blue-500 relative transition-all">
                  <div
                    className={`absolute w-4 h-4 bg-white rounded-full top-[2px] transition-all ${
                      toggleStates.BoxOneDataOne[index]
                        ? "translate-x-5"
                        : "translate-x-1"
                    }`}
                  ></div>
                </div>
              </label>
              <Typography
                sx={{ fontSize: "14px", color: "#a0aec0", marginLeft: "16px" }}
              >
                {item.description}
              </Typography>
            </Box>
          ))}
          <Typography
            sx={{
              fontSize: "10px",
              color: "#a0aec0",
              fontWeight: "600",
              marginBottom: "6px",
              marginTop: "6px",
            }}
          >
            APPLICATION
          </Typography>
          {boxData.categories.BoxOneDataTwo.map((item, index) => (
            <Box
              key={index}
              sx={{
                marginBottom: "18px",
                display: "flex",
                alignItems: "center",
                height: "31.7px",
              }}
            >
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={toggleStates.BoxOneDataTwo[index]}
                  onChange={() => handleToggle("BoxOneDataTwo", index)}
                />
                <div className="w-10 h-5 bg-[#1b1f36] rounded-full peer-checked:bg-blue-500 relative transition-all">
                  <div
                    className={`absolute w-4 h-4 bg-white rounded-full top-[2px] transition-all ${
                      toggleStates.BoxOneDataTwo[index]
                        ? "translate-x-5"
                        : "translate-x-1"
                    }`}
                  ></div>
                </div>
              </label>
              <Typography
                sx={{ fontSize: "14px", color: "#a0aec0", marginLeft: "16px" }}
              >
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Paper>
      <Paper
        sx={{
          width: "75%",
          height: "auto",
          background:
            "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box",
          borderRadius: "20px",
          color: "white",
          padding: "22px",
        }}
      >
        <Box sx={{ marginBottom: "24px" }}>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "6px",
            }}
          >
            Projects
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "#a0aec0",
            }}
          >
            Architects design houses
          </Typography>
        </Box>
        
        <div className="w-full flex flex-wrap gap-6">
          {boxData.categories.BoxTwoData.map((item, index) => (
            <Box key={index} sx={{ width: "31.8%", height: "auto" }}>
              <Image
                src={item.image}
                alt={item.title}
                className="rounded-[15px] mb-2 w-full h-[200px] object-cover"
              />
              <Box sx={{ marginBottom: "24px" }}>
                <Typography sx={{ fontSize: "10px", color: "#a0aec0" , height: "32px", paddingTop: "6px"}}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: "20px", fontWeight: "600", marginBottom: "8px" }}>
                  {item.heading}
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#a0aec0" }}>
                  {item.description}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <button className="w-[121px] h-[34px] text-white text-[12px] hover:scale-[1.03] hover:text-gray-300 font-semibold border border-[rgba(255, 255, 255, 0.75)] border-1 rounded-[10px]">
                  VIEW ALL
                </button>
                <AvatarGroup>
                  <Avatar sx={{ width: "20px", height: "20px" , border: "none"}} alt="Remy" src="/avatar1.webp" />
                  <Avatar sx={{ width: "20px", height: "20px" }} alt="Cindy" src="/avatar2.webp" />
                  <Avatar sx={{ width: "20px", height: "20px" }} alt="Alex" src="/avatar3.webp" />
                  <Avatar sx={{ width: "20px", height: "20px" }} alt="Jordan" src="/avatar4.webp" />
                </AvatarGroup>
              </Box>
            </Box>
          ))}
        </div>
      </Paper>
    </div>
  );
};

export default ProfileComponent;
