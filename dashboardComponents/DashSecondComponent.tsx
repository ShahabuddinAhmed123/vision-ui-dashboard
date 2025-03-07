"use client";

import React from "react";
import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material";
import { IoArrowForward } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";

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
          width: "648px",
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
      {/* //// */}
      <Paper
        sx={{
          borderRadius: "20px",
          width: "382px",
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
            variant="determinate"
            value={70}
            size={170}
            style={{
              marginLeft: "70px",
              marginTop: " 20px",
              rotate: "35deg",
              position: "relative",
            }}
          />
          <Box
            sx={{
              width: "297px",
              height: "82px",
              position: "absolute",
              background:
                "linear-gradient(126.97deg, rgb(6, 11, 40) 28.26%, rgb(10, 14, 35) 91.2%)",
              borderRadius: "20px",
              top: "350px",
              marginLeft: "20px",
              paddingY: "18px",
              paddingX: "22px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: "#a0aec0",
              }}
            >
              0%
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "30px",
                  color: "white",
                  lineHeight: "30px",
                  fontWeight: "600",
                }}
              >
                95%
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#a0aec0",
                }}
              >
                Based on likes
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "12px",
                color: "#a0aec0",
              }}
            >
              100%
            </Typography>
          </Box>
        </Box>
      </Paper>
      {/* //////////// */}

      <Paper
        sx={{
          borderRadius: "20px",
          width: "515px",
          height: "340px",
          background:
            "linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)",
          padding: "22px",
          boxShadow: "rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem",
        }}
      >
        <Box
          sx={{
            marginBottom: "40px",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            gap: "20px",
            marginRight: "20px",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "600",
              color: "white",
            }}
          >
            Refferal Tracking
          </Typography>
          <Box
            sx={{
              background: "#22234b",
              width: "37px",
              height: "37px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "#0075ff",
              }}
            >
              <SlOptions />
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              width: "235px",
              height: "210px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                paddingY: "20px",
                paddingX: "22px",
                marginBottom: "20px",
                background: "#070c26",
                borderRadius: "20px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#a0aec0",
                }}
              >
                Invited
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                145 people
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                paddingY: "20px",
                paddingX: "22px",
                marginBottom: "20px",
                background: "#070c26",
                borderRadius: "20px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#a0aec0",
                }}
              >
                Bonus
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                1,465
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <CircularProgress
              variant="determinate"
              value={65}
              size={200}
              sx={{
                color: "#06b189",
                rotate: "25deg",
              }}
            />
            <Box
            sx={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "200px",
              height: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <Typography
              sx={{
                color: "#a0aec0",
                fontSize: "14px",
                fontWeight: "600"
              }}>
                Safety
              </Typography>
              <Typography
              sx={{
                color: "white",
                fontSize: "48px",
                fontWeight: "600"
              }}>
                9.3
              </Typography>
              <Typography
              sx={{
                color: "#a0aec0",
                fontSize: "14px",
                fontWeight: "600"
              }}>
                Total score
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Component>
  );
};

export default DashSecondComponent;
