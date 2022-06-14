import {
  Card,
  Box,
  CardContent,
  Typography,

} from "@mui/material";
import React from "react";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CONSTANT from "../constant";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MultiCarouselCompo = () => {
  return (
    <>
      <Carousel responsive={responsive}>

{
  CONSTANT.multiCarousel.map(item => {
    return (
      <Card key={item.carId} style={{ margin: '0 21px', backgroundColor: '#E6F8F6' }}>
          <CardContent>
            <img src={CONSTANT.multiCarousel[0].url} alt="" />
            <Typography style={{fontSize: 14,}}> {item.time}</Typography>
            <Typography style={{ fontSize: 18, fontWeight: 700 }}> {item.header} </Typography>
            <Typography> {item.details} </Typography>

            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography> {item.timeToRead} </Typography>
              <Typography> Read more <ArrowForwardIcon />  </Typography>
            </Box>
          </CardContent>
        </Card>

    )
  })
}






      </Carousel>
      ;
    </>
  );
};

export default MultiCarouselCompo;
