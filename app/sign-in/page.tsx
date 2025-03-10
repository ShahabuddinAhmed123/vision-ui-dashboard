import AuthPagesFooter from "@/components/AuthPagesFooter";
import AuthPagesNavbar from "@/components/AuthPagesNavbar";
import { Box, Typography } from "@mui/material";
import React from "react";

const SignIn = () => {
  return (
    <div className="w-full h-full flex items-center gap-0">
      <AuthPagesNavbar />
      <Box
        sx={{
          width: "50%",
          height: "100%",
          backgroundImage: "url(/sign-in-background.webp)",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              color: "white",
              letterSpacing: "8px",
              marginBottom: "8px",
            }}
          >
            INSPIRED BY THE FUTURE:
          </Typography>
          <Typography
            sx={{
              fontSize: "36px",
              fontWeight: "600",
              color: "white",
              letterSpacing: "8px",
              marginBottom: "8px",
            }}
          >
            THE VISION UI DASHB
            <span className="opacity-[0.7]">O</span>
            <span className="opacity-[0.5]">ARD</span>
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "50%",
          height: "100%",
          background:
            "linear-gradient(159.02deg, rgb(15, 18, 59) 14.25%, rgb(9, 13, 46) 56.45%, rgb(2, 5, 21) 86.14%) transparent",
        }}
      >
        <Box
          sx={{
            marginRight: "100px",
            width: "450px",
            height: "100%",
            marginTop: "160px",
            marginLeft: "65px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              paddingTop: "24px",
              paddingX: "24px",
              marginX: "50px",
              width: "auto",
              marginBottom: "35px",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              Nice to see you!
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Enter your email and password to sign in
            </Typography>
          </Box>

          <Box
            sx={{
              marginBottom: "50px",
              paddingX: "24px",
              width: "auto",
              marginX: "50px",
              height: "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label
                htmlFor="emailInput"
                className="text-sm font-semibold mb-2 ml-1 h-8 pt-1"
              >
                Email
              </label>
              <input
                type="email"
                id="emailInput"
                className="w-[300px] h-10 rounded-[15px] bg-[rgb(15, 21, 53)] py-2 px-3 text-sm active:outline-[1px] outline-blue-400 placeholder:text-xs"
                style={{
                  border: "2px solid rgb(74, 85, 104)",
                }}
                placeholder="Your email..."
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "24px",
              }}
            >
              <label
                htmlFor="emailInput"
                className="text-sm font-semibold mb-2 ml-1 h-8 pt-1"
              >
                Password
              </label>
              <input
                type="password"
                id="emailInput"
                className="w-[300px] h-10 rounded-[15px] bg-[rgb(15, 21, 53)] py-2 px-3 text-sm active:outline-[1px] outline-blue-400 placeholder:text-xs"
                style={{
                  border: "2px solid rgb(74, 85, 104)",
                }}
                placeholder="Your password..."
              />
            </Box>

            <Box
              sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}
            >
              <div className="relative inline-block w-10 h-5 mr-2">
                <input
                  type="checkbox"
                  id="toggle"
                  className="sr-only peer"
                  defaultChecked
                />
                <label
                  htmlFor="toggle"
                  className="block w-10 h-5 bg-transparent border border-gray-700 rounded-full cursor-pointer transition-colors duration-300 peer-checked:bg-blue-500 peer-checked:border-none"
                ></label>
                <div className="absolute w-4 h-4 bg-white rounded-full top-0.5 left-0.5 shadow-md transition-transform duration-300 peer-checked:translate-x-5"></div>
              </div>
              <Typography sx={{ fontSize: "12px", fontWeight: "600" }}>
                Remember me
              </Typography>
            </Box>
            <button className="text-xs font-semibold bg-[#0075ff] w-full py-3 px-6 rounded-[10px] hover:scale-[1.02] transition-all duration-300 my-8">
              SIGN IN
            </button>
            <Typography
              sx={{ fontSize: "14px", color: "#a0aec0", textAlign: "center" }}
            >
              Don't have an account?{" "}
              <a href="/" className="text-white font-semibold">
                Sign up
              </a>
            </Typography>
          </Box>
          <AuthPagesFooter />
        </Box>
      </Box>
    </div>
  );
};

export default SignIn;
