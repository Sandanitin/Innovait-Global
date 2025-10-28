import React from 'react';
import { Container, Typography, Box, Card, CardContent, Grid, Button, Paper, Chip, Avatar, CardMedia } from '@mui/material';
import { 
  Transform as TransformIcon, 
  Cloud as CloudIcon, 
  People as PeopleIcon,
  Engineering as EngineeringIcon,
  CheckCircle as CheckCircleIcon,
  Rocket as RocketIcon,
  TrendingUp as TrendingUpIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
  Star as StarIcon,
  Business as BusinessIcon,
  Psychology as PsychologyIcon,
  Public as PublicIcon,
  School as SchoolIcon,
  BugReport as BugReportIcon,
  Code as CodeIcon
} from '@mui/icons-material';

const Home = () => {
  const services = [
    {
      icon: <CloudIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: 'Cloud Solutions',
      description: 'Leverage cloud technologies for streamlined solutions that excel. Our consulting firm ensures your data\'s story we\'ll tell.',
      color: '#4285f4',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 50, color: 'secondary.main' }} />,
      title: 'Education Services',
      description: 'The IT industry demands its professionals to not only master their specializations but also stay updated with latest technologies.',
      color: '#34a853',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <CodeIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: 'Application Development',
      description: 'Majority of the companies require applications in a wide range of usabilities. We develop scalable and efficient solutions.',
      color: '#fbbc04',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <PublicIcon sx={{ fontSize: 50, color: 'secondary.main' }} />,
      title: 'Public Sector Projects',
      description: 'From optimizing infrastructure to modernizing digital services and unlocking the full potential of technology.',
      color: '#ea4335',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <EngineeringIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: 'AI/ML Training',
      description: 'Unlock the potential of Artificial Intelligence and Machine Learning with our comprehensive training programs.',
      color: '#9c27b0',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <BugReportIcon sx={{ fontSize: 50, color: 'secondary.main' }} />,
      title: 'QA & Testing',
      description: 'Enterprises have a responsibility of developing technologies that are efficient, reliable, and thoroughly tested.',
      color: '#ff9800',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: <TrendingUpIcon /> },
    { number: '99.9%', label: 'Client Satisfaction', icon: <StarIcon /> },
    { number: '24/7', label: 'Support Available', icon: <SpeedIcon /> },
    { number: '15+', label: 'Years Experience', icon: <SecurityIcon /> },
  ];

  const visionMissionValues = [
    {
      icon: <RocketIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      title: 'Our Vision',
      description: 'We have a vision in being the solution-partner for our clients that can appropriately comprehend the requirements of the project and redistribute the suitable methods for its timely execution.',
      bgColor: 'linear-gradient(135deg, rgba(30, 58, 138, 0.05) 0%, rgba(30, 58, 138, 0.1) 100%)',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <BusinessIcon sx={{ fontSize: 60, color: 'secondary.main' }} />,
      title: 'Our Mission',
      description: 'We work in giving optimum quality to the clients by shrinking the gap between exemplary technology and efficient implementing methods. Our talented professionals work with every client as a true partner.',
      bgColor: 'linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, rgba(245, 158, 11, 0.1) 100%)',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <PsychologyIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      title: 'Core Values',
      description: 'We keep the values learnt back home alive. These represent in our daily endeavours and reflects well in the delivering of service to our clients.',
      bgColor: 'linear-gradient(135deg, rgba(30, 58, 138, 0.05) 0%, rgba(30, 58, 138, 0.1) 100%)',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const whyChooseUs = [
    {
      icon: <TrendingUpIcon sx={{ fontSize: 30, color: 'primary.main' }} />,
      title: 'Proven Management Strategies',
      description: 'Innovait Global\'s client-centric strategy combines deep business insight as well as technology impact on various industries and business models.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <StarIcon sx={{ fontSize: 30, color: 'secondary.main' }} />,
      title: 'Excellent Skills & Proficiency',
      description: 'Our passionate employees and consultants go beyond traditional methods to develop bold innovations and new partnerships.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const clients = [
    { name: 'TechCorp', logo: 'TC', image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
    { name: 'DataFlow', logo: 'DF', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
    { name: 'CloudSync', logo: 'CS', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
    { name: 'InnovateLab', logo: 'IL', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
    { name: 'DigitalFirst', logo: 'DF', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
    { name: 'NextGen', logo: 'NG', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Stats Section */}
      <Grid container spacing={3} sx={{ mb: 8 }}>
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

      {/* Innovation Quote Section */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: 6, 
          mb: 8,
          background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.02) 0%, rgba(245, 158, 11, 0.02) 100%)',
          border: '1px solid rgba(30, 58, 138, 0.1)',
          borderRadius: 4,
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3, fontWeight: 700, fontStyle: 'italic' }}>
          "For an advanced world for you and me, Innovation holds the key"
        </Typography>
        <Typography variant="h6" paragraph sx={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'text.secondary' }}>
          Innovation: The driving force behind a smarter, more advanced world for all. Unlocking new possibilities, and shaping the future with relentless dedication. We lead the way in progress at Innovait Global—seamlessly and boldly.
        </Typography>
      </Paper>

      {/* Our Services Section */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h2" component="h2" gutterBottom sx={{ mb: 2, fontWeight: 800, color: 'primary.main' }}>
          Our Services
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom sx={{ mb: 6, fontWeight: 500, color: 'text.secondary', maxWidth: '600px', mx: 'auto' }}>
          Comprehensive IT solutions tailored to accelerate your business growth and digital transformation
        </Typography>
      </Box>
      
      <Grid container spacing={6} sx={{ mb: 8 }}>
        {services.map((service, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card 
              sx={{ 
                height: '100%', 
                overflow: 'hidden',
                borderRadius: 4,
                position: 'relative',
                transition: 'all 0.4s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-12px) scale(1.02)',
                  boxShadow: '0 20px 60px rgba(30, 58, 138, 0.2)',
                  '& .service-image': {
                    transform: 'scale(1.1)',
                  },
                  '& .service-content': {
                    backgroundColor: 'rgba(30, 58, 138, 0.05)',
                  }
                }
              }}
            >
              <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={service.image}
                  alt={service.title}
                  className="service-image"
                  sx={{ 
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease-in-out',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${service.color}20 0%, ${service.color}40 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box sx={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                    borderRadius: '50%', 
                    p: 2,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                  }}>
                    {service.icon}
                  </Box>
                </Box>
              </Box>
              
              <CardContent 
                className="service-content"
                sx={{ 
                  p: 4,
                  transition: 'background-color 0.3s ease-in-out',
                }}
              >
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                  {service.title}
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.7 }}>
                  {service.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: service.color,
                      color: 'white',
                      borderRadius: 3,
                      px: 3,
                      py: 1.5,
                      fontWeight: 600,
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: service.color,
                        transform: 'translateY(-2px)',
                        boxShadow: `0 8px 25px ${service.color}40`,
                      },
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    Explore Service
                  </Button>
                  <Typography variant="body2" sx={{ color: service.color, fontWeight: 600 }}>
                    Learn More →
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Why Choose Us Section */}
      <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 2, fontWeight: 700 }}>
        WHY INNOVAIT GLOBAL?
      </Typography>
      <Typography variant="h4" component="h3" gutterBottom align="center" sx={{ mb: 6, fontWeight: 600, color: 'text.secondary' }}>
        Your vision. Our innovation: IT solutions.
      </Typography>
      
      <Typography variant="body1" paragraph align="center" sx={{ mb: 6, fontSize: '1.1rem', lineHeight: 1.8 }}>
        Innovait Global focuses on delivering quality work with maintaining a cordial relationship with its clients. Our excellent record of innovative Staffing and Consulting solutions make us reliable partners for all your IT needs.
      </Typography>

      <Grid container spacing={4} sx={{ mb: 8 }}>
        {whyChooseUs.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ height: '100%', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                height="250"
                image={item.image}
                alt={item.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                  <Box sx={{ mt: 1 }}>
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.6, color: 'text.secondary' }}>
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Vision Mission Values Section */}
      <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6, fontWeight: 700 }}>
        Experience and innovation in a single touch.
      </Typography>
      <Typography variant="body1" paragraph align="center" sx={{ mb: 6, fontSize: '1.1rem', lineHeight: 1.8 }}>
        Innovait Global has structured itself strategically to provide some of the most cutting-edge solutions for its clients.
      </Typography>

      <Grid container spacing={4} sx={{ mb: 8 }}>
        {visionMissionValues.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: '100%', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ textAlign: 'center', p: 4, background: item.bgColor }}>
                <Box sx={{ mb: 3 }}>
                  {item.icon}
                </Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.6, color: 'text.secondary' }}>
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Trusted Partnership Section */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: 6, 
          mb: 8,
          background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.05) 0%, rgba(245, 158, 11, 0.05) 100%)',
          border: '1px solid rgba(30, 58, 138, 0.1)',
          borderRadius: 4,
        }}
      >
        <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 2, fontWeight: 700 }}>
          TRUSTED PARTNERSHIP
        </Typography>
        <Typography variant="h4" component="h3" gutterBottom align="center" sx={{ mb: 4, fontWeight: 600, color: 'text.secondary' }}>
          Build Beneficial Partnership With Us
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}>
          Build beneficial partnership with us and gain access to the best IT talent across USA. Innovait Global has strategically aligned itself to develop some of the most innovative solutions for its clients. From providing turnkey project-based solutions to on-demand staff augmentation to application development services, Innovait Global can be your long-term strategic partner.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              px: 6,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: 3,
            }}
          >
            Join Us
          </Button>
        </Box>
      </Paper>

      {/* Our Clients Section */}
      <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 2, fontWeight: 700 }}>
        OUR CLIENTS
      </Typography>
      <Typography variant="h4" component="h3" gutterBottom align="center" sx={{ mb: 6, fontWeight: 600, color: 'text.secondary' }}>
        We strive to work with the best.
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 8 }}>
        {clients.map((client, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <Card sx={{ textAlign: 'center', overflow: 'hidden' }}>
              <CardMedia
                component="img"
                height="120"
                image={client.image}
                alt={client.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ p: 2 }}>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {client.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Call to Action Section */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: 6, 
          textAlign: 'center', 
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #f59e0b 100%)',
          color: 'white',
          borderRadius: 4,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          },
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
            Managed I.T. solutions tailored to your business.
          </Typography>
          <Typography variant="h5" paragraph sx={{ mb: 4, opacity: 0.9 }}>
            Businesses are in need of tailored applications to overcome stringent budgets and aggressive timelines. Adopting path-breaking strategies is the way for enterprises to stay ahead of competition.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: 'white',
              color: 'primary.main',
              px: 6,
              py: 2,
              fontSize: '1.2rem',
              fontWeight: 600,
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.95)',
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.25)',
              },
              transition: 'all 0.3s ease-in-out',
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Home;
