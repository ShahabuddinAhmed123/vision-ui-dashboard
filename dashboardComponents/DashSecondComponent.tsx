"use client";

import React from "react";
import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material";
import { IoArrowForward } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
import { FaFaceSmile } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

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

interface DashComponentProps {
  route: string;
}


const DashSecondComponent: React.FC<DashComponentProps> = ({ route }) => {

   const { t, i18n } = useTranslation();
    
      React.useEffect(() => {
        if (route === '/rtl') {
          i18n.changeLanguage('ar'); 
        } else {
          i18n.changeLanguage('en'); 
        }
      }, [route, i18n]);

  return (
    <Component className="DashSecond">
      <Paper
        sx={{
          backgroundImage: "url(/card-one-background.png)",
          borderRadius: "20px",
          backgroundRepeat: "no-repeat"
        }}
        className="w-[648px] h-[340px] max-[1440px]:w-full max-[1440px]:bg-cover max-[1440px]:bg-center"
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
             {t ("Welcome back,")}
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
             {t("Glad to see you again! Ask me anything.")}
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
            {t("Tap to record")}
            <IoArrowForward />
          </Box>
        </Box>
      </Paper>
      {/* //// */}
      <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "30px"
      }}>
      <Paper
      className="secondBoxTwo w-[382px] h-[340px] max-[1440px]:w-full"
        sx={{
          borderRadius: "20px",
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
            {t("Satisfaction Rate")}
          </Typography>

          <Typography
            sx={{
              fontSize: "14px",
              color: "#a0aec0",
            }}
          >
            {t("From all projects")}
          </Typography>

          <Box sx={{
              position: "relative",
              width: "100%",
              height: "auto"
          }}>
            <Box
            sx={{
              marginX: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
          <CircularProgress
            variant="determinate"
            value={70}
            size={170}
            style={{
              rotate: "30deg",
            border: "2px solid linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box",
            }}
            />
            </Box>
            <Box sx={{
              width: "50px",
              height: "50px",
              borderRadius: "100%",
              justifyContent: "center",
              alignItems: "center",
              background: "#0075ff",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "12px",
              color: "white",
              fontSize: "28px"
            }}>
              <FaFaceSmile/>
            </Box>
          <Box
            sx={{
              width: "100%",
              height: "82px",
              position: "absolute",
              background:
                "linear-gradient(126.97deg, rgb(6, 11, 40) 28.26%, rgb(10, 14, 35) 91.2%)",
              borderRadius: "20px",
              bottom: "-35px",
              left: "0px",
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
                {t("Based on likes")}
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
        </Box>
      </Paper>
      {/* //////////// */}

      <Paper
      className="w-[515px] h-[340px] max-[1440px]:w-full  max-[768px]:h-auto"
        sx={{
          borderRadius: "20px",
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
            {t("Refferal Tracking")}
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
            alignItems: "center",
            justifyContent: "space-between"
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
                {t("Invited")}
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                145 {t("people")}
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
                {t("Bonus")}
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
          <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        value={100}
        size={200}
        thickness={4}
        sx={{ color: "rgba(10, 10, 10, 0.1)"}}
      />
      <CircularProgress
        variant="determinate"
        value={65}
        size={200}
        thickness={4}
        sx={{
          position: "absolute",
          left: 0,
          top: "0",
          color: "transparent",
          "& .MuiCircularProgress-circle": {
            stroke: "url(#progressGradient)",
          },
          rotate: "30deg"
        }}
      />
      <svg width={0} height={0} >
        <defs>
          <linearGradient id="progressGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#06b189" />
            <stop offset="130%" stopColor="rgba(7, 138, 94, 0.11)" />
          </linearGradient>
        </defs>
      </svg>
    </Box>
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
                {t("Safety")}
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
                {t("Total score")}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
      </Box>
    </Component>
  );
};

export default DashSecondComponent;
