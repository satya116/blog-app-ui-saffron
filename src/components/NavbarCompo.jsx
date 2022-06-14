import React from 'react';

import logo from '../images/logo.png'
import profile from '../images/profile.png'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';

import { AppBar, Box, Toolbar, Typography} from '@mui/material'

const NavbarCompo = () => {
  return (
    <>
    <AppBar style={{ position: 'static', backgroundColor: '#00046E' }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', textTransform: 'uppercase', }}>
          <img height='38px' src={logo} alt='logo' />
          <Typography> Designs  <KeyboardArrowDownIcon /> </Typography>
          <Typography style={{ padding: '5px 11px', borderRadius: 5, backgroundColor: '#DD4B00', color: 'white' }}> Design Studio  </Typography>
          <Typography> Poster <KeyboardArrowDownIcon />  </Typography>
          <Typography> Epicenter  </Typography>
          <Typography> Home theater  </Typography>
          <Typography> About Us  <KeyboardArrowDownIcon /> </Typography>

           <SearchIcon style={{ borderRadius: 5, backgroundColor: '#82F0E6', color: 'black' }} />
          <Typography style={{ padding: '5px 11px', borderRadius: 5, backgroundColor: '#82F0E6', color: 'black' }} >Shop  </Typography>
          <FavoriteBorderIcon  />
          <ShoppingCartOutlinedIcon />

          <img src={profile} alt="" />


        </Toolbar>

    </AppBar>

    <Box style={{ backgroundColor: '#82F0E6', height: 20, width: '100%' }} >


    </Box>



    </>
  )
}

export default NavbarCompo