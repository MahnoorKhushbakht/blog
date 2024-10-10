'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function SocialNav() {
  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/neskomedia', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/neskomedia.pk/', '_blank');
  };
  
  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/company/nesko-media', '_blank');
  };

  const handleMailClick = () => {
    window.location.href = 'mailto:neskomedia01@gmail.com';
  };

  return (
    <Box data-aos="fade-up" sx={{ '& > :not(style)': { m: 2 } }}>
      <Fab
       data-aos="fade-down"
        size="small"
        sx={{
          width: {  sm: '32px' ,md:'40px'},
          height: {  sm: '32px' ,md:'40px'},
          '& svg': { fontSize: { xs: '20px', sm: '30px' } }
        }}
        style={{ backgroundColor: "#f87171", color: '#fef2f2' }}
        aria-label="Facebook"
        onClick={handleFacebookClick}
      >
        <FacebookIcon />
      </Fab>
      <Fab
       data-aos="fade-down"
        size="small"
        sx={{
          width: {  sm: '32px' ,md:'40px'},
          height: {  sm: '32px' ,md:'40px'},
          '& svg': { fontSize: { xs: '20px', sm: '30px' } }
        }}
        style={{ backgroundColor: "#f87171", color: '#fef2f2' }}
        aria-label="Instagram"
        onClick={handleInstagramClick}
      >
        <InstagramIcon />
      </Fab>
      <Fab
       data-aos="fade-down"
        size="small"
        sx={{
          width: {  sm: '32px' ,md:'40px'},
          height: {  sm: '32px' ,md:'40px'},
          '& svg': { fontSize: { xs: '20px', sm: '30px' } }
        }}
        style={{ backgroundColor: "#f87171", color: '#fef2f2' }}
        aria-label="Linkedin"
        onClick={handleLinkedinClick}
      >
        <LinkedInIcon />
      </Fab>
      <Fab
       data-aos="fade-down"
        size="small"
        sx={{
          width: {  sm: '32px' ,md:'40px'},
          height: {  sm: '32px' ,md:'40px'},
          '& svg': { fontSize: { xs: '20px', sm: '30px' } }
        }}
        style={{ backgroundColor: "#f87171", color: '#fef2f2' }}
        aria-label="Mail"
        onClick={handleMailClick}
      >
        <MailOutlineIcon />
      </Fab>
    </Box>
  );
}
