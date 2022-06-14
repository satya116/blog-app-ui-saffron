import {
  Card,
  Box,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
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
        <Card style={{ margin: '0 21px', backgroundColor: '#E6F8F6' }}>
          <CardContent>
            <img src={CONSTANT.multiCarousel[0].url} alt="" />
            <Typography style={{fontSize: 14,}}> 2 years ago</Typography>
            <Typography style={{ fontSize: 18, fontWeight: 700 }}> Soundproofing a Home Theater </Typography>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu dolor efficitur, ullamcorper lectus id, consectetur purus. Cras consequat dapibus aliquam.
            </Typography>

            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography> 12 min </Typography>
              <Typography> Read more <ArrowForwardIcon />  </Typography>
            </Box>
          </CardContent>
        </Card>


        {/* Map lagaunga */}

        <Card>
          <CardContent>
            <img src={CONSTANT.multiCarousel[0].url} alt="" />
            <Typography> 2 years ago</Typography>
            <Typography> Header </Typography>
            <Typography>
              {" "}
              egfhhghegfhegfeigrfiegfuiegiurgfi eihfgeugfyu ejgfuhegfhbe eugfueg
            </Typography>
            <Typography> 12 min </Typography>
          </CardContent>
          <CardActionArea>
            <CardActions> </CardActions>
          </CardActionArea>
        </Card>

        <Card>
          <CardContent>
            <img src={CONSTANT.multiCarousel[0].url} alt="" />
            <Typography> 2 years ago</Typography>
            <Typography> Header </Typography>
            <Typography>
              {" "}
              egfhhghegfhegfeigrfiegfuiegiurgfi eihfgeugfyu ejgfuhegfhbe eugfueg
            </Typography>
            <Typography> 12 min </Typography>
          </CardContent>
          <CardActionArea>
            <CardActions> </CardActions>
          </CardActionArea>
        </Card>

        <Card>
          <CardContent>
            <img src={CONSTANT.multiCarousel[0].url} alt="" />
            <Typography> 2 years ago</Typography>
            <Typography> Header </Typography>
            <Typography>
              {" "}
              egfhhghegfhegfeigrfiegfuiegiurgfi eihfgeugfyu ejgfuhegfhbe eugfueg
            </Typography>
            <Typography> 12 min </Typography>
          </CardContent>
          <CardActionArea>
            <CardActions> </CardActions>
          </CardActionArea>
        </Card>

        <Card>
          <CardContent>
            <img src={CONSTANT.multiCarousel[0].url} alt="" />
            <Typography> 2 years ago</Typography>
            <Typography> Header </Typography>
            <Typography>
              {" "}
              egfhhghegfhegfeigrfiegfuiegiurgfi eihfgeugfyu ejgfuhegfhbe eugfueg
            </Typography>
            <Typography> 12 min </Typography>
          </CardContent>
          <CardActionArea>
            <CardActions> </CardActions>
          </CardActionArea>
        </Card>

        <Card>
          <CardContent>
            <img src={CONSTANT.multiCarousel[0].url} alt="" />
            <Typography> 2 years ago</Typography>
            <Typography> Header </Typography>
            <Typography>
              {" "}
              egfhhghegfhegfeigrfiegfuiegiurgfi eihfgeugfyu ejgfuhegfhbe eugfueg
            </Typography>
            <Typography> 12 min </Typography>
          </CardContent>
          <CardActionArea>
            <CardActions> </CardActions>
          </CardActionArea>
        </Card>
      </Carousel>
      ;
    </>
  );
};

export default MultiCarouselCompo;
