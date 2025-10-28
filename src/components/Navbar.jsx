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
              component="img"
              src="/src/images/logo.png"
              alt="Innovait Global Logo"
              sx={{
                width: { xs: 280, sm: 350, md: 400 },
                height: { xs: 42, sm: 52, md: 60 },
                mr: 3,
                objectFit: 'contain',
              }}
            />
            <Typography
              variant="h5"
              component={Link}
              to="/"
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                textDecoration: 'none',
                background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                '&:hover': {
                  background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }
              }}
            >
           
            </Typography>
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
