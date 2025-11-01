import React from 'react';
import { Box, Typography, Container, Grid, Link, IconButton, Divider, Avatar } from '@mui/material';
import { 
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon
} from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  const itSolutions = [
    'Application Development',
    'Cloud Solutions',
    'Data Analytics',
    'AI/ML Training',
    'QA & Testing',
    'DevOps Services',
  ];

  const consultingServices = [
    'IT Staff Augmentation',
    'IT Healthcare',
    'Master Vendor Program',
    'Talent Acquisition',
    'Project Management',
    'Technology Consulting',
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'grey.900',
        color: 'white',
        py: { xs: 4, md: 6 },
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
               <Avatar
                 src="/logo.png"
                 alt="Innovait Global Logo"
                 sx={{
                   width: { xs: 120, sm: 150 },
                   height: 'auto',
                   mr: 2,
                   borderRadius: 2,
                 }}
               />
              {/* <Typography variant="h5" component="h3" sx={{ fontWeight: 700 }}>
                Innovait Global
              </Typography> */}
            </Box>
            <Typography variant="body2" paragraph sx={{ mb: 3, opacity: 0.8, lineHeight: 1.6 }}>
              Empowering businesses through innovative technology solutions. We deliver excellence in IT consulting,
              cloud services, and digital transformation to help organizations thrive in the digital era.
            </Typography>
            
            {/* Contact Info */}
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <EmailIcon sx={{ fontSize: 20, color: 'primary.light' }} />
                <Typography variant="body2" sx={{ color: 'grey.300' }}>
                  admin@innovaitglobal.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <PhoneIcon sx={{ fontSize: 20, color: 'primary.light' }} />
                <Typography variant="body2" sx={{ color: 'grey.300' }}>
                  (+1) 732 985 5100
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <LocationIcon sx={{ fontSize: 20, color: 'primary.light', mt: 0.5 }} />
                <Typography variant="body2" sx={{ color: 'grey.300' }}>
                  100 Metroplex Drive, Suite #207<br />
                  Edison, NJ 08817, USA
                </Typography>
              </Box>
            </Box>

            {/* Social Media */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton sx={{ color: 'white', '&:hover': { color: 'primary.light' } }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton sx={{ color: 'white', '&:hover': { color: 'primary.light' } }}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: 'white', '&:hover': { color: 'primary.light' } }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: 'white', '&:hover': { color: 'primary.light' } }}>
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  sx={{
                    color: 'grey.300',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    '&:hover': {
                      color: 'primary.light',
                      textDecoration: 'underline',
                    },
                    transition: 'color 0.3s ease',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* IT Solutions */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              IT Solutions
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {itSolutions.map((solution) => (
                <Typography
                  key={solution}
                  variant="body2"
                  sx={{
                    color: 'grey.300',
                    fontSize: '0.9rem',
                    '&:hover': {
                      color: 'primary.light',
                      cursor: 'pointer',
                    },
                    transition: 'color 0.3s ease',
                  }}
                >
                  {solution}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Consulting Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Consulting Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {consultingServices.map((service) => (
                <Typography
                  key={service}
                  variant="body2"
                  sx={{
                    color: 'grey.300',
                    fontSize: '0.9rem',
                    '&:hover': {
                      color: 'primary.light',
                      cursor: 'pointer',
                    },
                    transition: 'color 0.3s ease',
                  }}
                >
                  {service}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'grey.700', my: 4 }} />

        {/* Bottom Bar */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: 'grey.400' }}>
            © {currentYear} Innovait Global, Inc. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link
              href="/privacy"
              sx={{
                color: 'grey.400',
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': { color: 'primary.light' },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              sx={{
                color: 'grey.400',
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': { color: 'primary.light' },
              }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;