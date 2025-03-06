"use client";

import React from "react";
import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material";
import { IoArrowForward } from "react-icons/io5";

const Component = styled("div")({
  width: "100%",
  height: "auto",
  display: "flex",
  gap: "20px",
  background: "transparent",
  border: "none",
  paddingTop: "18px",
  fontFamily: "Plus Jakarta Sans",
});
const DashSecondComponent = () => {
  return (
    <Component className="DashSecond">
      <Paper
        sx={{
          width: "636px",
          height: "340px",
          backgroundImage: "url(/card-one-background.png)",
          borderRadius: "20px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            paddingX: "22px",
            paddingY: "32px",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{}}>
            <Typography
              sx={{
                color: "#a0a3c0",
                fontSize: "14px",
              }}
            >
              Welcome back,
            </Typography>
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "600",
                color: "white",
                marginBottom: "18px",
              }}
            >
              Mark Johnson
            </Typography>
            <Typography
              sx={{
                color: "#a0a3c0",
                width: "180px",
              }}
            >
              Glad to see you again! Ask me anything.
            </Typography>
          </Box>
          <Box
            sx={{
              fontSize: "14px",
              color: "white",
              display: "flex",
              gap: "4px",
              alignItems: "center",
            }}
          >
            Tap to record
            <IoArrowForward />
          </Box>
        </Box>
      </Paper>
      <Paper
        sx={{
          borderRadius: "20px",
          width: "374px",
          height: "340px",
          background:
            "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box;",
          padding: "22px",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "18px",
              color: "white",
              fontWeight: "600",
              marginBottom: "4px",
            }}
          >
            Satisfaction Rate
          </Typography>

          <Typography
            sx={{
              fontSize: "14px",
              color: "#a0aec0",
            }}
          >
            From all projects
          </Typography>

          <CircularProgress 
          variant="determinate" value={75}
          size={170} 
          style={{
            marginLeft: "70px",
            marginTop: " 20px",
            position: "relative"
          }}
          />
          <Box
          sx={{
            width: "297px",
            height: "82px",
            position: "absolute",
            background: "linear-gradient(126.97deg, rgb(6, 11, 40) 28.26%, rgb(10, 14, 35) 91.2%)",
            borderRadius: "20px",
            top:"350px",
            marginLeft: "20px"
          }}>

          </Box>
        </Box>
      </Paper>

      <Paper
        sx={{
          borderRadius: "20px",
          width: "505px",
          height: "340px",
          background:
            "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box;",
        }}
      ></Paper>
    </Component>
  );
};

export default DashSecondComponent;
