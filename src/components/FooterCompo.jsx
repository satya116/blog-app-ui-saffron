import { Box, Typography } from '@mui/material'
import React from 'react';

import logo from '../images/logo.png'


const FooterCompo = () => {
  return (
    <Box style={{ backgroundColor: '#00046E', color: 'white', display: 'flex', height: '50vh', justifyContent: 'space-around', alignItems: 'center' }}>


     <Box style={{ flex: 1  }}>
      <img src={logo} alt="logo" />

     </Box>

     <Box style={{ flex: 2 }}>
      <Typography> Design </Typography>
      <Box style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>

        <Box><Typography> Acoustic Kreationz </Typography>
      <Typography> Customer Creation </Typography>
      <Typography> Best Selling </Typography>
      <Typography> New & trending </Typography> </Box>


<Box>
<Typography> Design STUDIO </Typography>
      <Typography> Posters </Typography>
      <Typography> EpiCenter  </Typography>
      <Typography> home theater </Typography>

</Box>



      <Box> <Typography> FAQ </Typography>
      <Typography> Privecy Policy </Typography>
      <Typography> Tearms and conditions </Typography>

      <Typography>   Return and Exchanges </Typography></Box>

      </Box>



     </Box>
     <Box style={{ flex: 1 }}>
     <Typography>   About  </Typography>
     <Typography>   Acoustic Technology </Typography>
     <Typography>   Blogs </Typography>
     <Typography>   Contact us </Typography>

     </Box>



    </Box>
  )
}

export default FooterCompo