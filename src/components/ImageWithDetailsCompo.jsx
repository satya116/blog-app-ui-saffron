import React from 'react';

import { Box, Typography} from '@mui/material'

import rect1 from '../images/rect1.png'

import styles from './ImageWithDetailsCompo.module.css';


const ImageWithDetailsCompo = () => {
  return (
    <>

    <Box style={{ height: 333,  display: 'flex', alignItems: 'center' }}>
      <Box  style={{ flex: 1, height:"100%"}}>
        <img width="100%"  src={rect1} alt="" />
      </Box>

      <Box className={styles.box} style= {{ flex: 1, height: '100%', width: '100%' }}>
        <Typography> 1 month ago </Typography>
        <Typography> Acoustic Kreationz Acoustic Solutions</Typography>
        <Typography> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu dolor efficitur, ullamcorper lectus id, consectetur purus. Cras consequat dapibus aliquam. </Typography>
 <Typography> 12 Min Read</Typography>
 <Typography> Read more </Typography>
      </Box>
    </Box>

    </>
  )
}

export default ImageWithDetailsCompo