import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Avatar
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

const Navbar = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ py: 1 }}>
           <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
             <Box
               component={Link}
               to="/"
               sx={{
                 display: 'flex',
                 alignItems: 'center',
                 textDecoration: 'none',
                 '&:hover': {
                   transform: 'scale(1.03)',
                   transition: 'transform 0.3s ease-in-out',
                 }
               }}
             >
               <Box
                 component="img"
                 src="/logo.jpg"
                 alt="InnovaIT Logo"
                 sx={{
                   height: { xs: 60, sm: 65, md: 70 },
                   width: 'auto',
                   objectFit: 'contain',
                   mr: 2,
                   
                   
                 }}
               />
               {!isMobile && (
                 <Typography
                   variant="h5"
                   sx={{
                     fontWeight: 800,
                     color: '#1e3a8a',
                     fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
                     letterSpacing: '-0.03em',
                     background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
                     backgroundClip: 'text',
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent',
                     textShadow: '0 2px 4px rgba(30, 58, 138, 0.1)',
                     '&:hover': {
                       background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)',
                       backgroundClip: 'text',
                       WebkitBackgroundClip: 'text',
                       WebkitTextFillColor: 'transparent',
                       textShadow: '0 3px 6px rgba(30, 58, 138, 0.2)',
                     },
                     transition: 'all 0.3s ease-in-out',
                   }}
                 >
                   {/* InnovaIT */}
                 </Typography>
               )}
             </Box>
           </Box>

          {isMobile ? (
            <IconButton
              edge="end"
              color="primary"
              onClick={handleMobileMenuToggle}
              sx={{ ml: 2 }}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                    fontWeight: location.pathname === item.path ? 600 : 500,
                    px: { sm: 2, md: 3 },
                    py: 1,
                    borderRadius: 2,
                    backgroundColor: location.pathname === item.path ? 'rgba(30, 58, 138, 0.1)' : 'transparent',
                    fontSize: { sm: '0.9rem', md: '1rem' },
                    '&:hover': {
                      backgroundColor: 'rgba(30, 58, 138, 0.1)',
                      color: 'primary.main',
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>

        {isMobile && mobileMenuOpen && (
          <Box sx={{ pb: 2 }}>
            {navItems.map((item) => (
              <MenuItem
                key={item.path}
                component={Link}
                to={item.path}
                onClick={handleMobileMenuToggle}
                sx={{
                  color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                  fontWeight: location.pathname === item.path ? 600 : 500,
                  py: 1.5,
                  px: 3,
                  backgroundColor: location.pathname === item.path ? 'rgba(30, 58, 138, 0.1)' : 'transparent',
                }}
              >
                {item.label}
              </MenuItem>
            ))}
          </Box>
        )}
      </Container>
    </AppBar>
  );
};

export default Navbar;