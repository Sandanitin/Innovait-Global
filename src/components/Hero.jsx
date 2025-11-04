import React from 'react';
import { Box, Typography, Button, Container, Grid, Chip } from '@mui/material';
import { 
  ArrowForward as ArrowForwardIcon,
  FlashOn as FlashOnIcon,
  CheckCircle as CheckCircleIcon
} from '@mui/icons-material';

const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url("https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(18, 24, 43, 0.7) 0%, rgba(18, 24, 43, 0.65) 100%)',
          zIndex: 1,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          animation: 'float 20s ease-in-out infinite',
          zIndex: 2,
        },
        '@keyframes float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        '@keyframes fadeInUp': {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        '@keyframes pulse': {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '50%': { transform: 'scale(1.05)', opacity: 0.8 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3, py: { xs: 4, md: 6, lg: 8 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center">
          <Grid item xs={12} lg={10}>
            <Box sx={{ textAlign: 'center' }}>
              <Chip 
                icon={<FlashOnIcon />} 
                label="Trusted by Industry Leaders" 
                sx={{ 
                  mb: 3, 
                  backgroundColor: 'rgba(33, 150, 243, 0.2)',
                  color: '#2196F3',
                  fontWeight: 600,
                  fontSize: { xs: '0.8rem', sm: '0.85rem' },
                  height: '32px',
                  animation: 'fadeInUp 0.5s ease-out',
                  '& .MuiChip-icon': {
                    color: '#2196F3',
                    fontSize: '1.2rem',
                  }
                }} 
              />
              
              <Typography 
                variant="h1" 
                component="h1" 
                gutterBottom 
                sx={{ 
                  fontWeight: 900,
                  mb: { xs: 2, md: 3 },
                  color: 'white',
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '4.2rem' },
                  lineHeight: { xs: 1.15, md: 1.1 },
                  animation: 'fadeInUp 0.8s ease-out',
                  '& > span': {
                    display: 'block',
                    marginTop: { xs: '6px', sm: '10px' },
                  },
                  textAlign: 'center',
                  px: { xs: 2, sm: 0 }
                }}
              >
                Empowering Innovation.
                <span style={{ 
                  background: 'linear-gradient(45deg, #2196F3, #03A9F4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 900,
                  fontFamily: 'inherit',
                }}>
                  Delivering Excellence.
                </span>
              </Typography>
              
              <Typography 
                variant="h5" 
                component="p" 
                sx={{ 
                  mb: { xs: 3, md: 5 }, 
                  color: 'rgba(255, 255, 255, 0.95)',
                  lineHeight: { xs: 1.5, md: 1.7 },
                  fontWeight: 400,
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                  maxWidth: { xs: '100%', sm: '90%', md: '70%' },
                  mx: 'auto',
                  animation: 'fadeInUp 1.1s ease-out',
                  textAlign: 'center',
                  px: { xs: 2, sm: 0 }
                }}
              >
                We provide comprehensive IT solutions, consulting services, and training programs to help businesses thrive in the digital era.
              </Typography>
              
              {/* Key Benefits - Hidden on desktop view */}
              <Grid 
                container 
                spacing={{ xs: 1.5, sm: 2, md: 3 }} 
                sx={{ 
                  mb: { xs: 4, sm: 5 }, 
                  maxWidth: { xs: '100%', sm: '90%', md: '70%' }, 
                  mx: 'auto',
                  px: { xs: 2, sm: 0 },
                  display: { xs: 'flex', sm: 'flex', md: 'none' }
                }}
              >
                <Grid item xs={12} sm={4}>
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      p: { xs: 1.5, sm: 2 },
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: 2,
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      minHeight: { xs: '50px', sm: '60px' }
                    }}
                  >
                    <CheckCircleIcon 
                      sx={{ 
                        color: '#fbbf24', 
                        mr: { xs: 0.8, sm: 1 },
                        fontSize: { xs: '1.2rem', sm: '1.5rem' }
                      }} 
                    />
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.95)', 
                        fontWeight: 600,
                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem' },
                        textAlign: 'center',
                        lineHeight: 1.3
                      }}
                    >
                      Expert Team
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      p: { xs: 1.5, sm: 2 },
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: 2,
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      minHeight: { xs: '50px', sm: '60px' }
                    }}
                  >
                    <CheckCircleIcon 
                      sx={{ 
                        color: '#fbbf24', 
                        mr: { xs: 0.8, sm: 1 },
                        fontSize: { xs: '1.2rem', sm: '1.5rem' }
                      }} 
                    />
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.95)', 
                        fontWeight: 600,
                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem' },
                        textAlign: 'center',
                        lineHeight: 1.3
                      }}
                    >
                      24/7 Support
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      p: { xs: 1.5, sm: 2 },
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: 2,
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      minHeight: { xs: '50px', sm: '60px' }
                    }}
                  >
                    <CheckCircleIcon 
                      sx={{ 
                        color: '#fbbf24', 
                        mr: { xs: 0.8, sm: 1 },
                        fontSize: { xs: '1.2rem', sm: '1.5rem' }
                      }} 
                    />
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.95)', 
                        fontWeight: 600,
                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem' },
                        textAlign: 'center',
                        lineHeight: 1.3
                      }}
                    >
                      Proven Results
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              
              <Box sx={{ 
                display: 'flex', 
                gap: { xs: 2, md: 3 }, 
                flexWrap: 'wrap', 
                justifyContent: 'center', 
                animation: 'fadeInUp 1.4s ease-out',
                flexDirection: { xs: 'column', sm: 'row' },
                mx: 'auto',
                maxWidth: { xs: '100%', sm: '80%', md: '60%' },
                px: { xs: 2, sm: 0 }
              }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    backgroundColor: '#2196F3',
                    color: 'white',
                    px: { xs: 3, sm: 4, md: 6 },
                    py: { xs: 1.5, sm: 1.8, md: 2.2 },
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                    fontWeight: 700,
                    borderRadius: 3,
                    boxShadow: '0 12px 30px rgba(33, 150, 243, 0.4)',
                    width: { xs: '100%', sm: 'auto' },
                    maxWidth: { xs: '100%', sm: 'none' },
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: '#03A9F4',
                      transform: 'translateY(-5px)',
                      boxShadow: '0 16px 40px rgba(33, 150, 243, 0.5)',
                    },
                    transition: 'all 0.4s ease-in-out',
                    animation: 'pulse 2s infinite',
                  }}
                >
                  Get Started Today
                </Button>
                
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    color: 'white',
                    px: { xs: 3, sm: 4, md: 6 },
                    py: { xs: 1.5, sm: 1.8, md: 2.2 },
                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                    fontWeight: 700,
                    borderRadius: 3,
                    borderWidth: 2,
                    width: { xs: '100%', sm: 'auto' },
                    maxWidth: { xs: '100%', sm: 'none' },
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      borderColor: 'rgba(255, 255, 255, 0.8)',
                      transform: 'translateY(-5px)',
                    },
                    transition: 'all 0.4s ease-in-out',
                  }}
                >
                  View Our Work
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;