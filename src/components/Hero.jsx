import React from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardContent } from '@mui/material';
import { 
  ArrowForward as ArrowForwardIcon,
  TrendingUp as TrendingUpIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
  Star as StarIcon
} from '@mui/icons-material';

const Hero = () => {
  const stats = [
    { 
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />, 
      number: '500+', 
      label: 'Projects Delivered',
      color: '#4285f4',
      bgColor: 'rgba(66, 133, 244, 0.2)'
    },
    { 
      icon: <StarIcon sx={{ fontSize: 40 }} />, 
      number: '99.9%', 
      label: 'Client Satisfaction',
      color: '#34a853',
      bgColor: 'rgba(52, 168, 83, 0.2)'
    },
    { 
      icon: <SpeedIcon sx={{ fontSize: 40 }} />, 
      number: '24/7', 
      label: 'Support Available',
      color: '#fbbc04',
      bgColor: 'rgba(251, 188, 4, 0.2)'
    },
    { 
      icon: <SecurityIcon sx={{ fontSize: 40 }} />, 
      number: '15+', 
      label: 'Years Experience',
      color: '#ea4335',
      bgColor: 'rgba(234, 67, 53, 0.2)'
    },
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
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
          background: 'linear-gradient(135deg, rgba(68, 45, 45, 0.8) 0%, rgba(113, 127, 151, 0.7) 10%, rgba(0, 0, 0, 0.8) 100%)',
          zIndex: 1,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          animation: 'float 20s ease-in-out infinite',
          zIndex: 2,
        },
        '@keyframes float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
      }}
    >
              <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3, py: { xs: 4, md: 6, lg: 8 } }}>
                <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
                  {/* Main Content */}
                  <Grid item xs={12} lg={7}>
                    <Box sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
                      <Typography 
                        variant="h1" 
                        component="h1" 
                        gutterBottom 
                        sx={{ 
                          fontWeight: 800,
                          mb: { xs: 2, md: 3 },
                          color: 'white',
                          fontSize: { xs: '1.8rem', sm: '2.2rem', md: '3rem', lg: '3.5rem' },
                          lineHeight: { xs: 1.2, md: 1.1 },
                          textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                        }}
                      >
                        Empowering Innovation.
                        <br />
                        <span style={{ color: '#fbbf24' }}>Delivering Excellence.</span>
                      </Typography>
                      
                      <Typography 
                        variant="h5" 
                        component="h2" 
                        sx={{ 
                          mb: { xs: 3, md: 4 }, 
                          color: 'rgba(255, 255, 255, 0.95)',
                          lineHeight: { xs: 1.5, md: 1.6 },
                          fontWeight: 400,
                          fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                          textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                        }}
                      >
                        We provide comprehensive IT solutions, consulting services, and training programs to help businesses thrive in the digital era.
                      </Typography>
              
                      <Box sx={{ 
                        display: 'flex', 
                        gap: { xs: 1.5, md: 2 }, 
                        flexWrap: 'wrap', 
                        justifyContent: { xs: 'center', lg: 'flex-start' }, 
                        mb: { xs: 4, md: 6 },
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: 'center'
                      }}>
                        <Button
                          variant="contained"
                          size="large"
                          endIcon={<ArrowForwardIcon />}
                          sx={{
                            backgroundColor: 'white',
                            color: 'primary.main',
                            px: { xs: 3, md: 4 },
                            py: { xs: 1.5, md: 2 },
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            fontWeight: 600,
                            borderRadius: 3,
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                            width: { xs: '100%', sm: 'auto' },
                            maxWidth: { xs: '280px', sm: 'none' },
                            '&:hover': {
                              backgroundColor: 'rgba(255,255,255,0.95)',
                              transform: 'translateY(-3px)',
                              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
                            },
                            transition: 'all 0.3s ease-in-out',
                          }}
                        >
                          Get Started Today
                        </Button>
                        
                        <Button
                          variant="outlined"
                          size="large"
                          sx={{
                            borderColor: 'white',
                            color: 'white',
                            px: { xs: 3, md: 4 },
                            py: { xs: 1.5, md: 2 },
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            fontWeight: 600,
                            borderRadius: 3,
                            borderWidth: 2,
                            width: { xs: '100%', sm: 'auto' },
                            maxWidth: { xs: '280px', sm: 'none' },
                            '&:hover': {
                              backgroundColor: 'rgba(255,255,255,0.1)',
                              borderColor: 'white',
                              transform: 'translateY(-3px)',
                            },
                            transition: 'all 0.3s ease-in-out',
                          }}
                        >
                          Learn More
                        </Button>
                      </Box>
            </Box>
          </Grid>
          
          {/* Stats Cards */}
          <Grid item xs={12} lg={5}>
            <Grid container spacing={{ xs: 1.5, md: 2 }}>
              {stats.map((stat, index) => (
                <Grid item xs={6} key={index}>
                  <Card
                    sx={{
                      backgroundColor: stat.bgColor,
                      backdropFilter: 'blur(20px)',
                      border: `2px solid ${stat.color}`,
                      borderRadius: { xs: 3, md: 4 },
                      textAlign: 'center',
                      p: { xs: 1.5, md: 2 },
                      transition: 'all 0.4s ease-in-out',
                      position: 'relative',
                      overflow: 'hidden',
                      minHeight: { xs: '120px', md: '140px' },
                      '&:hover': {
                        backgroundColor: `${stat.color}30`,
                        transform: 'translateY(-8px) scale(1.05)',
                        boxShadow: `0 20px 40px ${stat.color}40`,
                        '& .stat-icon': {
                          transform: 'scale(1.2) rotate(5deg)',
                        },
                        '& .stat-number': {
                          color: stat.color,
                        }
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(135deg, ${stat.color}10 0%, ${stat.color}20 100%)`,
                        opacity: 0,
                        transition: 'opacity 0.3s ease-in-out',
                      },
                      '&:hover::before': {
                        opacity: 1,
                      }
                    }}
                  >
                    <CardContent sx={{ py: { xs: 2, md: 3 }, position: 'relative', zIndex: 1 }}>
                      <Box 
                        className="stat-icon"
                        sx={{ 
                          mb: { xs: 1, md: 2 },
                          color: stat.color,
                          transition: 'all 0.3s ease-in-out',
                        }}
                      >
                        {stat.icon}
                      </Box>
                      <Typography 
                        className="stat-number"
                        variant="h3" 
                        component="div" 
                        sx={{ 
                          fontWeight: 800, 
                          mb: { xs: 0.5, md: 1 }, 
                          color: 'white',
                          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                          transition: 'color 0.3s ease-in-out',
                          fontSize: { xs: '1.5rem', md: '2rem' },
                        }}
                      >
                        {stat.number}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'rgba(255, 255, 255, 0.95)', 
                          fontWeight: 600,
                          fontSize: { xs: '0.75rem', md: '0.9rem' },
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          lineHeight: 1.2,
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
