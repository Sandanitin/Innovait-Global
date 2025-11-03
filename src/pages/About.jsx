import React from 'react';
import { Container, Typography, Box, Paper, Grid, Card, CardContent, CardMedia, Avatar, Chip } from '@mui/material';
import { 
  Business as BusinessIcon,
  Timeline as TimelineIcon,
  Psychology as PsychologyIcon,
  Public as PublicIcon,
  Star as StarIcon,
  Group as GroupIcon,
  CheckCircle as CheckCircleIcon,
  TrendingUp as TrendingUpIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon
} from '@mui/icons-material';

const About = () => {
  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: <TrendingUpIcon sx={{ fontSize: 30 }} /> },
    { number: '99.9%', label: 'Client Satisfaction', icon: <StarIcon sx={{ fontSize: 30 }} /> },
    { number: '24/7', label: 'Support Available', icon: <SpeedIcon sx={{ fontSize: 30 }} /> },
    { number: '15+', label: 'Years Experience', icon: <SecurityIcon sx={{ fontSize: 30 }} /> },
  ];

  const differentiators = [
    'Tailored engagement models — from project-based to managed services.',
    'Deep vertical expertise in healthcare, BFSI, manufacturing, retail, and public sector.',
    'Strategic alliances with major technology vendors (Microsoft, AWS, Oracle, etc.).',
    'Continuous innovation through R&D and emerging tech labs.'
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ 
          mb: 2, 
          fontWeight: 800, 
          color: 'primary.main',
          fontSize: { xs: '2rem', md: '3rem' }
        }}>
          About InnovaIT
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom sx={{ 
          mb: 4, 
          fontWeight: 500, 
          color: 'text.secondary',
          fontSize: { xs: '1.1rem', md: '1.3rem' },
          maxWidth: '800px',
          mx: 'auto'
        }}>
          Empowering businesses through innovative technology solutions and strategic consulting
        </Typography>
      </Box>

      {/* Stats Section */}
      <Grid container spacing={3} sx={{ mb: { xs: 6, md: 8 } }}>
        {stats.map((stat, index) => (
          <Grid item xs={6} md={3} key={index}>
            <Card 
              sx={{ 
                textAlign: 'center', 
                p: 3,
                background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.05) 0%, rgba(245, 158, 11, 0.05) 100%)',
                border: '1px solid rgba(30, 58, 138, 0.1)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 25px rgba(30, 58, 138, 0.15)',
                }
              }}
            >
              <CardContent>
                <Box sx={{ color: 'primary.main', mb: 1 }}>
                  {stat.icon}
                </Box>
                <Typography variant="h4" component="div" sx={{ fontWeight: 700, color: 'primary.main', mb: 0.5 }}>
                  {stat.number}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                  {stat.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Who We Are Section */}
      <Paper elevation={0} sx={{ 
        p: { xs: 4, md: 6 }, 
        mb: { xs: 6, md: 8 },
        background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.02) 0%, rgba(245, 158, 11, 0.02) 100%)',
        border: '1px solid rgba(30, 58, 138, 0.1)',
        borderRadius: 4,
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <BusinessIcon sx={{ fontSize: 50, color: 'primary.main', mr: 2 }} />
          <Typography variant="h4" component="h2" sx={{ fontWeight: 700 }}>
            Who We Are
          </Typography>
        </Box>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              <strong>InnovaIT</strong> is a global IT consulting and technology services firm delivering comprehensive business and digital transformation solutions.
              With a strong foundation in innovation and technical excellence, we help organizations streamline operations, enhance customer experiences, and drive digital growth.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, fontWeight: 'bold', color: 'primary.main' }}>
              Our team brings together technologists, strategists, engineers, and consultants — united by a shared vision: <strong>to create intelligent solutions that simplify complexity and fuel progress.</strong>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              height="300"
              image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Innovait Global Team"
              sx={{ borderRadius: 3, objectFit: 'cover' }}
            />
          </Grid>
        </Grid>
      </Paper>

      {/* Our Journey Section */}
      <Paper elevation={0} sx={{ 
        p: { xs: 4, md: 6 }, 
        mb: { xs: 6, md: 8 },
        background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.02) 0%, rgba(30, 58, 138, 0.02) 100%)',
        border: '1px solid rgba(245, 158, 11, 0.1)',
        borderRadius: 4,
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <TimelineIcon sx={{ fontSize: 50, color: 'secondary.main', mr: 2 }} />
          <Typography variant="h4" component="h2" sx={{ fontWeight: 700 }}>
            Our Journey
          </Typography>
        </Box>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              height="300"
              image="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Our Journey"
              sx={{ borderRadius: 3, objectFit: 'cover' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              What started as a small consulting firm with a handful of passionate engineers has evolved into a full-fledged technology partner serving clients across North America, Europe, and Asia.
              Our steady growth is built on consistent delivery, client trust, and an unrelenting pursuit of excellence.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Over the years, we've expanded our capabilities across software development, IT infrastructure, cloud computing, cybersecurity, and workforce solutions — helping clients achieve operational excellence and sustainable growth.
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Our Philosophy Section */}
      <Paper elevation={0} sx={{ 
        p: { xs: 4, md: 6 }, 
        mb: { xs: 6, md: 8 },
        background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.02) 0%, rgba(245, 158, 11, 0.02) 100%)',
        border: '1px solid rgba(30, 58, 138, 0.1)',
        borderRadius: 4,
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <PsychologyIcon sx={{ fontSize: 50, color: 'primary.main', mr: 2 }} />
          <Typography variant="h4" component="h2" sx={{ fontWeight: 700 }}>
            Our Philosophy
          </Typography>
        </Box>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              We believe technology is not just about systems — it's about <strong>people, purpose, and progress</strong>.
              Every engagement is guided by a deep understanding of your business needs, ensuring we design and deliver solutions that add tangible value.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              We focus on long-term partnerships rather than one-time projects, enabling us to evolve alongside our clients as their needs and industries change.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              height="300"
              image="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Our Philosophy"
              sx={{ borderRadius: 3, objectFit: 'cover' }}
            />
          </Grid>
        </Grid>
      </Paper>

      {/* Global Presence Section */}
      <Paper elevation={0} sx={{ 
        p: { xs: 4, md: 6 }, 
        mb: { xs: 6, md: 8 },
        background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.02) 0%, rgba(30, 58, 138, 0.02) 100%)',
        border: '1px solid rgba(245, 158, 11, 0.1)',
        borderRadius: 4,
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <PublicIcon sx={{ fontSize: 50, color: 'secondary.main', mr: 2 }} />
          <Typography variant="h4" component="h2" sx={{ fontWeight: 700 }}>
            Our Global Presence
          </Typography>
        </Box>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              height="300"
              image="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Global Presence"
              sx={{ borderRadius: 3, objectFit: 'cover' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              With delivery centers and partners across the United States, India, and Europe, we bring the agility of a boutique firm and the capability of a global enterprise.
              Our global network enables 24/7 support, faster deployment, and a diverse talent pool that drives innovation.
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 3 }}>
              <Chip label="United States" color="primary" variant="outlined" />
              <Chip label="India" color="secondary" variant="outlined" />
              <Chip label="Europe" color="primary" variant="outlined" />
              <Chip label="24/7 Support" color="secondary" variant="outlined" />
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* What Makes Us Different Section */}
      <Paper elevation={0} sx={{ 
        p: { xs: 4, md: 6 }, 
        background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.02) 0%, rgba(245, 158, 11, 0.02) 100%)',
        border: '1px solid rgba(30, 58, 138, 0.1)',
        borderRadius: 4,
      }}>
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4, fontWeight: 700 }}>
          What Makes Us Different
        </Typography>
        <Grid container spacing={3}>
          {differentiators.map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: 2, 
                p: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                borderRadius: 3,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  transform: 'translateY(-2px)',
                }
              }}>
                <CheckCircleIcon sx={{ color: 'primary.main', fontSize: 24, mt: 0.5 }} />
                <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
                  {item}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default About;