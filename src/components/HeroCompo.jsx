import { Box, Typography } from "@mui/material";
import React from "react";

const HeroCompo = () => {
  return (
    <>
      <Box style={{ height: '80vh',  }}>
        <Typography style={{ textAlign: "center" }}>

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
          <Typography style={{ fontSize: 50, fontWeight: 700 }}> Our Blogs</Typography>

          <Typography  style={{ fontSize: 65, fontWeight: 600 }}> First-Rate Acoustics <br /> for Your Home</Typography>
        </Box>
      </Box>
    </>
  );
};

export default HeroCompo;
