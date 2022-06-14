import { Box, Typography } from "@mui/material";
import React from "react";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const HeroCompo = () => {
  return (
    <>
      <Box style={{ height: "80vh" }}>
        <Typography
          style={{ textAlign: "center", fontWeight: 700, padding: 6 }}
        >
          This week only! Get 25% off with code “SUMMER”{" "}
        </Typography>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Typography
            style={{ fontSize: 50, fontWeight: 700, color: "#88E3DB" }}
          >
            {" "}
            Our Blogs
          </Typography>

          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-around",
            }}
          >
            <Typography
              style={{ fontSize: 20, fontWeight: 700, color: "#88E3DB" }}
            >
              {" "}
              Acoustic Kreationz
            </Typography>

            <Typography style={{ fontSize: 55, fontWeight: 700, color: "red" }}>
              {" "}
              First-Rate Acoustics <br /> for Your Home
            </Typography>
            <Typography style={{ fontWeight: 600, color: "red" }}>
              {" "}
              Scroll down <ArrowDownwardIcon />{" "}
            </Typography>
          </Box>
        </Box>
        

      </Box>
    </>
  );
};

export default HeroCompo;
