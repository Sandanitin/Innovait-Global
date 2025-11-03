import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  IconButton,
  Divider,
  Tooltip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  ArrowUpward as ArrowUpwardIcon
} from '@mui/icons-material';

const ProfessionalFooter = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [showScroll, setShowScroll] = useState(false);
  const currentYear = new Date().getFullYear();

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Footer data
  const companyInfo = {
    name: "",
    description: "Delivering innovative technology solutions to drive your business forward in the digital age.",
    logo: "/logo.png" // Using actual logo image
  };

  const quickLinks = [
    { title: "About Us", url: "/about" },
    { title: "Services", url: "/services" },
    { title: "Contact", url: "/contact" }
  ];

  const services = [
    { title: "IT Consulting & Strategy", url: "/services" },
    { title: "Application Development & Modernization", url: "/services" },
    { title: "Cloud & Infrastructure Solutions", url: "/services" },
    { title: "Data Engineering & Analytics", url: "/services" },
    { title: "QA, DevOps & Automation", url: "/services" },
    { title: "IT Staffing & Talent Solutions", url: "/services" }
  ];

  const contactInfo = [
    // { icon: <EmailIcon fontSize="small" />, text: "contact@techsolutions.com", type: "email" },
    { icon: <LocationIcon fontSize="small" />, text: "Contact form to reach us", type: "form" }
  ];

  const socialLinks = [
    { icon: <LinkedInIcon />, name: "LinkedIn", url: "https://linkedin.com" },
    { icon: <TwitterIcon />, name: "Twitter", url: "https://twitter.com" },
    { icon: <FacebookIcon />, name: "Facebook", url: "https://facebook.com" },
    { icon: <GitHubIcon />, name: "GitHub", url: "https://github.com" }
  ];

  const handleContactClick = (type, value) => {
    switch (type) {
      case 'email':
        window.location.href = `mailto:${value}`;
        break;
      case 'form':
        window.location.href = '/contact';
        break;
      default:
        break;
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        pt: 8,
        pb: 4,
        position: 'relative',
        borderTop: `1px solid ${theme.palette.divider}`
      }}
    >
      {/* Scroll to top button */}
      {showScroll && (
        <Tooltip title="Back to top" arrow>
          <IconButton
            onClick={scrollToTop}
            sx={{
              position: 'fixed',
              bottom: 32,
              right: 32,
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
              },
              boxShadow: 3,
              zIndex: 1000,
              width: 48,
              height: 48,
            }}
          >
            <ArrowUpwardIcon />
          </IconButton>
        </Tooltip>
      )}

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box
                component="a"
                href="/"
                sx={{
                  display: 'block',
                  width: { xs: 100, sm: 130, md: 150 },
                  height: { xs: 50, sm: 65, md: 75 },
                  borderRadius: 2,
                  overflow: 'hidden',
                  mr: 2,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 3,
                  },
                  textDecoration: 'none',
                }}
              >
                <Box
                  component="img"
                  src={companyInfo.logo}
                  alt="InnovaIT Logo"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    console.log('Logo failed to load');
                  }}
                />
              </Box>
              <Typography 
                variant="h6" 
                component="div" 
                sx={{ 
                  fontWeight: 700,
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' }
                }}
              >
                {companyInfo.name}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
              {companyInfo.description}
            </Typography>
            
            {/* Social Media */}
            <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
              {socialLinks.map((social, index) => (
                <Tooltip key={index} title={social.name} arrow>
                  <IconButton
                    component="a"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: theme.palette.text.secondary,
                      backgroundColor: theme.palette.action.hover,
                      '&:hover': {
                        color: theme.palette.primary.main,
                        backgroundColor: theme.palette.action.selected
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {social.icon}
                  </IconButton>
                </Tooltip>
              ))}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography 
              variant="subtitle1" 
              component="h3" 
              sx={{ 
                fontWeight: 600, 
                mb: 3,
                color: theme.palette.text.primary,
                fontSize: '1.1rem',
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: -8,
                  width: 40,
                  height: 3,
                  backgroundColor: theme.palette.primary.main,
                }
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  color="text.secondary"
                  underline="hover"
                  sx={{
                    fontSize: '0.9rem',
                    '&:hover': { 
                      color: theme.palette.primary.main,
                      transform: 'translateX(4px)'
                    },
                    transition: 'all 0.3s ease',
                    display: 'inline-block'
                  }}
                >
                  {link.title}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography 
              variant="subtitle1" 
              component="h3" 
              sx={{ 
                fontWeight: 600, 
                mb: 3,
                color: theme.palette.text.primary,
                fontSize: '1.1rem',
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: -8,
                  width: 40,
                  height: 3,
                  backgroundColor: theme.palette.primary.main,
                }
              }}
            >
              Our Services
            </Typography>
            <Box 
              sx={{ 
                display: 'grid', 
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
                gap: 1.5 
              }}
            >
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.url}
                  underline="none"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': {
                      '& .service-icon': {
                        backgroundColor: theme.palette.primary.light,
                        color: theme.palette.primary.contrastText
                      }
                    }
                  }}
                >
                  <Box
                    className="service-icon"
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '4px',
                      backgroundColor: theme.palette.action.hover,
                      color: theme.palette.primary.main,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 1.5,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Box component="span" sx={{ fontSize: '0.7rem', fontWeight: 'bold' }}>→</Box>
                  </Box>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{
                      fontSize: '0.9rem',
                      '&:hover': {
                        color: theme.palette.primary.main,
                        cursor: 'pointer'
                      },
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {service.title}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={3}>
            <Typography 
              variant="subtitle1" 
              component="h3" 
              sx={{ 
                fontWeight: 600, 
                mb: 3,
                color: theme.palette.text.primary,
                fontSize: '1.1rem',
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: -8,
                  width: 40,
                  height: 3,
                  backgroundColor: theme.palette.primary.main,
                }
              }}
            >
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {contactInfo.map((contact, index) => (
                <Box
                  key={index}
                  onClick={() => handleContactClick(contact.type, contact.text)}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1.5,
                    cursor: 'pointer',
                    '&:hover': { 
                      '& .contact-icon': {
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText
                      },
                      '& .contact-text': {
                        color: theme.palette.primary.main
                      }
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box
                    className="contact-icon"
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      backgroundColor: theme.palette.action.hover,
                      color: theme.palette.primary.main,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {contact.icon}
                  </Box>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    className="contact-text"
                    sx={{
                      transition: 'color 0.3s ease',
                      lineHeight: 1.5
                    }}
                  >
                    {contact.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'divider' }} />

        {/* Copyright */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            textAlign: { xs: 'center', sm: 'left' }
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {currentYear} InnovaIT. All rights reserved.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Designed and developed by{' '}
            <Link 
              href="https://www.vikrin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{
                color: theme.palette.primary.main,
                textDecoration: 'none',
                fontWeight: 500,
                '&:hover': {
                  textDecoration: 'underline',
                  color: theme.palette.primary.dark,
                }
              }}
            >
              Vikrin
            </Link>
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: { xs: 'center', sm: 'flex-end' } }}>
            <Link
              href="/privacy"
              color="text.secondary"
              variant="body2"
              underline="hover"
              sx={{ '&:hover': { color: 'primary.main' } }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              color="text.secondary"
              variant="body2"
              underline="hover"
              sx={{ '&:hover': { color: 'primary.main' } }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProfessionalFooter;