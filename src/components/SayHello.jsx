import React from "react";
import { Box, Typography, Button } from "@mui/material";

const SayHello = () => {
  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          height: 333,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Typography style={{ fontSize: 24, fontWeight: 800 }}>
          Have a question about{" "}
          <Box style={{ color: "#FE6E6E" }} component="span">
            {" "}
            Acoustic Kreationz?
          </Box>
        </Typography>
        <Typography>
          Click on the link below to get in touch today. We’ll respond in no
          time, so let’s chat.
        </Typography>
        <Typography
          style={{
            padding: "11px 22px",
            borderRadius: 5,
            backgroundColor: "#87E2DA",
            color: "#00046E",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          Say Hello
        </Typography>

        <Typography> +2500 users have already subscribed</Typography>

        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 44, }}> <input style={{ borderRadius: 5, outline: "none", border: 'none', height: 44, width: 300 , paddingLeft: 11, boxShadow: '1px 1px 22px black' }} type="text" placeholder="info@jordiespinosa.com" />
        <Button style={{ backgroundColor: "#87E2DA", height: 44, color: '#00046E', textTransform: 'capitalize' }}> Subscribe Now</Button></Box>
      </Box>
    </>
  );
};

export default SayHello;
