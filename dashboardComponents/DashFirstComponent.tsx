"use client";
import React from 'react'
import {  IoWallet } from "react-icons/io5";
import { Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoDocumentText } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
import { useTranslation } from 'react-i18next';

const MyComponent = styled("div")({
    display: "flex",
    alignItems: "center",
    gap: "4px",
  });
  const Component = styled("div")({
    width: "100%",
    height: "auto",
    display: "flex",
    gap: "30px",
    background: "transparent",
    border: "none",
    marginTop: "20px"
  })

  interface DashFirstComponentProps {
    route: string;
  }
  
  const DashFirstComponent: React.FC<DashFirstComponentProps> = ({ route }) => {
    const { t, i18n } = useTranslation();
  
    React.useEffect(() => {
      if (route === '/rtl') {
        i18n.changeLanguage('ar'); 
      } else {
        i18n.changeLanguage('en'); 
      }
    }, [route, i18n]);

  return (
    <Component id='dashFirstDiv'>
    <Paper
      sx={{
        padding: "17px",
        height: 87,
        display: "flex",
        justifyContent: "space-between",
        background:
          "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box",
        borderRadius: "20px",
      }}
      className='w-[377px] max-[1440px]:w-full '
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            color: "#a0aec0",
          }}
        >
          {t("Today's Money")}
        </Typography>
        <MyComponent>
          <Typography
            sx={{
              fontSize: "20px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            $53,000
          </Typography>
          <Typography
            sx={{
              color: "#01b574",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            +55%
          </Typography>
        </MyComponent>
      </Box>
      <Box
        sx={{
          width: "48px",
          height: "48px",
          background: "#0075ff",
          borderRadius: "15px",
          color: "white",
          fontSize: "24px ",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <IoWallet/>
      </Box>
    </Paper>
    <Paper
      sx={{
        padding: "17px",
        height: 87,
        display: "flex",
        justifyContent: "space-between",
        background:
          "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box",
        borderRadius: "20px",
      }}
     className='w-[377px] max-[1440px]:w-full'
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            color: "#a0aec0",
          }}
        >
          {t("Today's Users")}
        </Typography>
        <MyComponent>
          <Typography
            sx={{
              fontSize: "20px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            23,000
          </Typography>
          <Typography
            sx={{
              color: "#01b574",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            +3%
          </Typography>
        </MyComponent>
      </Box>
      <Box
        sx={{
          width: "48px",
          height: "48px",
          background: "#0075ff",
          borderRadius: "15px",
          color: "white",
          fontSize: "24px ",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <AiOutlineGlobal/>
      </Box>
    </Paper>
    <Paper
      sx={{
        padding: "17px",
        height: 87,
        display: "flex",
        justifyContent: "space-between",
        background:
          "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box",
        borderRadius: "20px",
      }}
      className='w-[377px] max-[1440px]:w-full'
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            color: "#a0aec0",
          }}
        >
        {t("New Clients")}
        </Typography>
        <MyComponent>
          <Typography
            sx={{
              fontSize: "20px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            +3,462
          </Typography>
          <Typography
            sx={{
              color: "#e31a1a",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            -2%
          </Typography>
        </MyComponent>
      </Box>
      <Box
        sx={{
          width: "48px",
          height: "48px",
          background: "#0075ff",
          borderRadius: "15px",
          color: "white",
          fontSize: "24px ",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <IoDocumentText/>
      </Box>
    </Paper>
    <Paper
      sx={{
        padding: "17px",
        height: 87,
        display: "flex",
        justifyContent: "space-between",
        background:
          "linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%) border-box",
        borderRadius: "20px",
      }}
      className='w-[377px] max-[1440px]:w-full'
      >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            color: "#a0aec0",
          }}
        >
          {t("Total Sales")}
        </Typography>
        <MyComponent>
          <Typography
            sx={{
              fontSize: "20px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            $103,430
          </Typography>
          <Typography
            sx={{
              color: "#01b574",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            +5%
          </Typography>
        </MyComponent>
      </Box>
      <Box
        sx={{
          width: "48px",
          height: "48px",
          background: "#0075ff",
          borderRadius: "15px",
          color: "white",
          fontSize: "24px ",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <IoCart/>
      </Box>
    </Paper>
    </Component>
  )
}

export default DashFirstComponent
