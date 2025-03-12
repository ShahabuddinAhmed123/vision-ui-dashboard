"use client";
import { Box, LinearProgress, Paper, Typography } from "@mui/material";
import { IoWallet } from "react-icons/io5";
import { HiWrench } from "react-icons/hi2";
import { IoRocketSharp } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
import { BarChart } from "@mui/x-charts";
import { LineChart } from "@mui/x-charts/LineChart";
import React from "react";

const DashThirdComponent = () => {
  return (
    <div className="flex gap-1 mt-[25px] gap-6 max-[1024px]:flex-col">
        <Paper
        className="thirdBoxOne w-[69%] h-[447px] max-[1440px]:w-full"
          sx={{
            padding: "22px",
            background:
              "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
            borderRadius: "20px",
            color: "white",
          }}
        >
          <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
            Sales Overview
          </Typography>
          <Typography
            sx={{
              color: "#01b574",
              fontSize: "14px",
              marginBottom: "20px",
            }}
          >
            +5% more <span style={{ color: "#aea0c0" }}>in 2021</span>
          </Typography>

          {/* Line Chart */}
          <LineChart
            className="cursor-crosshair"
            height={310}
            grid={{ horizontal: true }}
            series={[
              {
                data: [
                  500, 250, 300, 220, 500, 250, 300, 230, 300, 350, 250, 550,
                ],
                color: "#2cd9ff",
                area: true,
                curve: "monotoneX",
                label: "Mobile apps:",
              },
              {
                data: [
                  200, 230, 300, 340, 370, 420, 550, 350, 400, 500, 330, 400,
                ],
                color: "#1099ff",
                area: true,
                curve: "monotoneX",
                label: "Websites:",
              },
            ]}
            xAxis={[
              {
                scaleType: "point",
                data: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                tickLabelStyle: { fill: "white" },
              },
            ]}
            yAxis={[
              {
                min: 0,
                max: 600,
                tickMinStep: 100,
                valueFormatter: (value: number) =>
                  [0, 100, 200, 300, 400, 500, 600].includes(value)
                    ? `${value}`
                    : "",
                tickLabelStyle: { fill: "white" },
              },
            ]}
            sx={{
              backgroundColor: "transparent",
              ".MuiLineElement-root": { strokeWidth: 3 },
              ".MuiAreaElement-root": {
                fillOpacity: 0.2,
              },
              ".MuiMarkElement-root": {
                r: 5,
                stroke: "transparent",
                strokeWidth: 2,
              },
              ".MuiTooltip-root": {
                backgroundColor: "#1E1E2D",
                color: "#fff",
                fontSize: "30px",
              },
              ".MuiGrid-line": {
                stroke: "rgba(253, 253, 255, 0.2)",
                strokeDasharray: "4",
              },
              width: "100%",
            }}
          />
        </Paper>

      {/* Another Card for Future Widgets */}

      <Paper
      className="w-[41%] h-[448px] max-[1440px]:w-full h-auto"
        sx={{
          padding: "22px",
          background:
            "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)",
          borderRadius: "20px",
        }}
      >
        <BarChart
          height={230}
          series={[
            {
              data: [300, 500, 400, 350, 300, 200, 100, 450, 500],
              color: "#D3D3D3",
              label: "Sales",
            },
          ]}
          xAxis={[
            {
              scaleType: "band",
              data: [
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
            },
          ]}
          yAxis={[
            {
              min: 0,
              max: 600,
              tickMinStep: 100,
              tickLabelStyle: { fill: "white" },
            },
          ]}
          sx={{
            ".MuiBarElement-root": {
              borderRadius: "20px",
            },
            ".MuiGrid-line": {
              stroke: "rgba(255,255,255,0.2)",
              strokeDasharray: "4",
            },
            width: "100%",
          }}
        />
        <Box
          sx={{
            marginTop: "30px",
          }}
        >
          <Typography
            sx={{ fontWeight: "600" }}
            className="text-[18px] text-white"
          >
            Active Users
          </Typography>
          <Typography
            className="text-[#01b574] "
            sx={{
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            (+23) <span className="text-[#a0aec0]">than last week</span>
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "20px",
              gap: "50px",
              flexWrap: "wrap"
            }}
          >
            <Box
              sx={{
                width: "112px",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="text-white bg-[#0075ff] w-[25px] h-[25px] rounded-[6px] text-sm flex items-center justify-center">
                  <IoWallet />
                </div>
                <p className="text-[#a0aec0] text-sm font-semibold">Users</p>
              </div>
              <Box>
                <Typography
                  sx={{ fontWeight: "600" }}
                  className=" text-white"
                >
                  32,984
                </Typography>
                <LinearProgress
                  sx={{
                    borderRadius: "20px",
                    background: "#2d2e5f",
                    height: "6px",
                  }}
                  variant="determinate"
                  value={55}
                />
              </Box>
            </Box>
            {/* ////////////////// */}
            <Box
              sx={{
                width: "112px",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="text-white bg-[#0075ff] w-[25px] h-[25px] rounded-[6px] text-sm flex items-center justify-center">
                  <IoRocketSharp />
                </div>
                <p className="text-[#a0aec0] text-sm font-semibold">Clicks</p>
              </div>
              <Box>
                <Typography
                  sx={{ fontWeight: "600" , fontSize: "18px"}}
                  className=" text-white"
                >
                  2,42M
                </Typography>
                <LinearProgress
                  sx={{
                    borderRadius: "20px",
                    background: "#2d2e5f",
                    height: "6px",
                  }}
                  variant="determinate"
                  value={55}
                />
              </Box>
            </Box>
            {/* ////////////////////////// */}
            <Box
              sx={{
                width: "112px",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="text-white bg-[#0075ff] w-[25px] h-[25px] rounded-[6px] text-sm flex items-center justify-center">
                  <IoCart />
                </div>
                <p className="text-[#a0aec0] text-sm font-semibold">Sales</p>
              </div>
              <Box>
                <Typography
                  sx={{ fontWeight: "600", fontSize: "18px" }}
                  className=" text-white"
                >
                  2,400$
                </Typography>
                <LinearProgress
                  sx={{
                    borderRadius: "20px",
                    background: "#2d2e5f",
                    height: "6px",
                  }}
                  variant="determinate"
                  value={55}
                />
              </Box>
            </Box>
            {/* ///////////////// */}
            <Box
              sx={{
                width: "112px",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="text-white bg-[#0075ff] w-[25px] h-[25px] rounded-[6px] text-sm flex items-center justify-center">
                  <HiWrench />
                </div>
                <p className="text-[#a0aec0] text-sm font-semibold">Items</p>
              </div>
              <Box>
                <Typography
                  sx={{ fontWeight: "600", fontSize: "18px" }}
                  className=" text-white"
                >
                  320
                </Typography>
                <LinearProgress
                  sx={{
                    borderRadius: "20px",
                    background: "#2d2e5f",
                    height: "6px",
                  }}
                  variant="determinate"
                  value={55}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </div>
  );
};

export default DashThirdComponent;
