import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Grid, 
  Card,
  CardContent,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  Work as WorkIcon,
  Public as PublicIcon,
  School as SchoolIcon,
  AttachMoney as AttachMoneyIcon,
  Home as HomeIcon,
  People as PeopleIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Careers = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const benefits = [
    {
      icon: <PublicIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Opportunities with Global Clients'
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 40, color: 'secondary.main' }} />,
      title: 'Continuous Learning & Certification Programs'
    },
    {
      icon: <AttachMoneyIcon sx={{ fontSize: 40, color: 'success.main' }} />,
      title: 'Competitive Salary Packages'
    },
    {
      icon: <HomeIcon sx={{ fontSize: 40, color: 'info.main' }} />,
      title: 'Hybrid & Remote Work Options'
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 40, color: 'warning.main' }} />,
      title: 'Inclusive and Collaborative Work Culture'
    }
  ];

  const openings = [
    'Software Developer (Full Stack / Backend / Frontend)',
    'Cloud Engineer',
    'IT Recruiter',
    'Data Analyst',
    'Project Manager'
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 8 } }}>
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom 
          sx={{ 
            mb: 3, 
            fontWeight: 800, 
            color: 'primary.main',
            fontSize: { xs: '1.8rem', md: '2.8rem' },
            lineHeight: 1.2
          }}
        >
          Join the Innovators. Build What's Next.
        </Typography>
        <Typography 
          variant="h5" 
          component="p" 
          sx={{ 
            mb: 3, 
            fontWeight: 400, 
            color: 'text.secondary',
            fontSize: { xs: '1.1rem', md: '1.4rem' },
            maxWidth: '900px',
            mx: 'auto',
            lineHeight: 1.7
          }}
        >
          At <strong>InnovaIT Global</strong>, we're always on the lookout for talented professionals who are ready to make an impact in the world of technology.
        </Typography>
        <Typography 
          variant="h6" 
          component="p" 
          sx={{ 
            fontWeight: 500, 
            color: 'text.primary',
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            maxWidth: '900px',
            mx: 'auto',
            lineHeight: 1.7
          }}
        >
          If you're passionate about innovation, collaboration, and growth — you belong here.
        </Typography>
      </Box>

      {/* Why Work With Us */}
      <Paper 
        elevation={3} 
        sx={{ 
          p: { xs: 2.5, md: 6 }, 
          mb: { xs: 4, md: 8 },
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 245, 255, 0.95) 100%)',
          border: '1px solid rgba(30, 58, 138, 0.15)',
          borderRadius: 5,
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 5, justifyContent: 'center' }}>
          <WorkIcon sx={{ fontSize: 45, color: 'primary.main', mr: 2.5 }} />
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              fontWeight: 800,
              fontSize: { xs: '1.6rem', md: '2.4rem' },
              background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Why Work With Us
          </Typography>
        </Box>
        
        {/* Enhanced Benefits Layout - 5 Column Responsive Grid */}
        <Grid 
          container 
          spacing={{ xs: 2, sm: 3, md: 4 }}
          sx={{ 
            mb: { xs: 3, md: 4 }
          }}
        >
          {benefits.map((benefit, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={2.4} 
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              <Box 
                sx={{ 
                  mb: { xs: 2, md: 2.5 },
                  width: { xs: 60, sm: 65, md: 70 },
                  height: { xs: 60, sm: 65, md: 70 },
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
                  boxShadow: '0 6px 15px rgba(30, 58, 138, 0.12)',
                  border: '1px solid rgba(30, 58, 138, 0.15)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    boxShadow: '0 8px 20px rgba(30, 58, 138, 0.2)',
                  }
                }}
              >
                {benefit.icon}
              </Box>
              <Typography 
                variant="body2"
                sx={{ 
                  fontWeight: 600, 
                  mb: 1,
                  fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                  color: 'primary.main',
                  lineHeight: 1.3
                }}
              >
                {benefit.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Current Openings */}
      <Paper 
        elevation={2} 
        sx={{ 
          p: { xs: 3, md: 7 }, 
          mb: { xs: 5, md: 10 },
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(245, 245, 255, 0.9) 100%)',
          border: '1px solid rgba(245, 158, 11, 0.1)',
          borderRadius: 5,
          boxShadow: '0 15px 50px rgba(0, 0, 0, 0.1)'
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h2" 
            component="h2" 
            gutterBottom 
            sx={{ 
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: '1.9rem', md: '2.8rem' },
              background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Current Openings
          </Typography>
        </Box>
        
        <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: 6 }}>
          {openings.map((opening, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  p: 3,
                  borderRadius: 3,
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.06)',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s ease-in-out',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 12px 30px rgba(245, 158, 11, 0.3)',
                    border: '1px solid rgba(245, 158, 11, 0.4)',
                  }
                }}
              >
                <CardContent sx={{ p: 0, textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 65,
                      height: 65,
                      borderRadius: '50%',
                      backgroundColor: 'primary.light',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2.5
                    }}
                  >
                    <WorkIcon sx={{ color: 'primary.main', fontSize: 32 }} />
                  </Box>
                  <Typography 
                    variant="h6" 
                    component="h3"
                    sx={{ 
                      fontWeight: 600,
                      fontSize: { xs: '1rem', sm: '1.1rem' },
                      lineHeight: 1.5,
                      color: 'text.primary'
                    }}
                  >
                    {opening}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ textAlign: 'center', mt: 5, p: { xs: 3, md: 5 }, background: 'rgba(30, 58, 138, 0.05)', borderRadius: 4 }}>
          <Typography 
            variant="h3" 
            component="p" 
            gutterBottom 
            sx={{ 
              fontWeight: 800,
              mb: 3,
              fontSize: { xs: '1.4rem', md: '2rem' },
              color: 'primary.main'
            }}
          >
            💼 Didn't find your role?
          </Typography>
          <Typography 
            variant="h6" 
            paragraph 
            sx={{ 
              mb: 4,
              fontSize: '1.2rem',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.8,
              color: 'text.primary'
            }}
          >
            We're always open to meeting new talent! Fill out the form on our Contact page 
            and submit your details — our recruitment team will get in touch with you when a suitable position opens.
            {/* <Button 
              onClick={() => navigate('/contact')}
              sx={{ 
                mx: 1,
                textTransform: 'none', 
                fontWeight: 700,
                textDecoration: 'underline',
                fontSize: '1.2rem',
                color: 'primary.main',
                '&:hover': {
                  color: 'secondary.main'
                }
              }}
            >
              Contact Page
            </Button>  */}
             
          </Typography>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate('/contact')}
            sx={{
              px: { xs: 6, md: 8 },
              py: 2,
              fontSize: { xs: '1.2rem', md: '1.3rem' },
              fontWeight: 700,
              borderRadius: 3,
              background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #f59e0b 100%)',
              boxShadow: '0 10px 30px rgba(30, 58, 138, 0.4)',
              '&:hover': {
                background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #d97706 100%)',
                transform: 'translateY(-5px)',
                boxShadow: '0 15px 40px rgba(30, 58, 138, 0.5)',
              },
              transition: 'all 0.4s ease-in-out',
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Careers;