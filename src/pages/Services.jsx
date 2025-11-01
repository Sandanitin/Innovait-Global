import React from 'react';
import { Container, Typography, Box, Card, CardContent, Grid, Chip, Paper, List, ListItem, ListItemIcon, ListItemText, CardMedia, Button } from '@mui/material';
import { 
  Business as BusinessIcon, 
  Code as CodeIcon, 
  Cloud as CloudIcon,
  Analytics as AnalyticsIcon,
  BugReport as BugReportIcon,
  People as PeopleIcon,
  Domain as DomainIcon,
  Science as ScienceIcon,
  CheckCircle as CheckCircleIcon,
  Star as StarIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      icon: <BusinessIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: 'IT Consulting & Strategy',
      description: 'We provide strategic IT consulting that aligns technology with your business objectives. Our experts evaluate your current infrastructure, identify inefficiencies, and craft a roadmap to future-proof your operations.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: '#4285f4',
      offerings: [
        'IT strategy and governance',
        'Enterprise architecture design',
        'Digital transformation roadmap',
        'Risk management and compliance',
        'Cloud and data strategy'
      ]
    },
    {
      icon: <CodeIcon sx={{ fontSize: 50, color: 'secondary.main' }} />,
      title: 'Application Development & Modernization',
      description: 'Build smarter, faster, and more scalable digital products. We design, develop, and maintain applications that enhance performance, user experience, and ROI.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: '#34a853',
      offerings: [
        'Custom software & enterprise app development',
        'Mobile & web solutions',
        'API integration and system modernization',
        'Legacy migration and platform upgrades',
        'Continuous maintenance & technical support'
      ]
    },
    {
      icon: <CloudIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: 'Cloud & Infrastructure Solutions',
      description: 'Accelerate innovation with secure and cost-effective cloud ecosystems. We partner with leading platforms (AWS, Azure, Google Cloud) to design optimized hybrid and multi-cloud environments.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: '#fbbc04',
      offerings: [
        'Cloud strategy, migration & management',
        'Infrastructure automation (IaC)',
        'Disaster recovery & business continuity',
        'Cloud security & cost optimization',
        'Managed cloud operations'
      ]
    },
    {
      icon: <AnalyticsIcon sx={{ fontSize: 50, color: 'secondary.main' }} />,
      title: 'Data Engineering & Analytics',
      description: 'Transform raw data into actionable insights. We help organizations harness big data, analytics, and AI/ML to make informed business decisions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: '#ea4335',
      offerings: [
        'Data warehousing & ETL',
        'Predictive analytics & machine learning',
        'BI dashboards & visualization',
        'Data governance & quality management',
        'Advanced reporting & forecasting'
      ]
    },
    {
      icon: <BugReportIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
      title: 'QA, DevOps & Automation',
      description: 'Deliver quality and speed at scale. Our QA and DevOps experts streamline testing, deployment, and delivery pipelines for efficiency and reliability.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: '#9c27b0',
      offerings: [
        'Functional, regression, and performance testing',
        'CI/CD pipeline setup and automation',
        'Infrastructure as Code (IaC)',
        'Continuous monitoring & feedback systems'
      ]
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 50, color: 'secondary.main' }} />,
      title: 'IT Staffing & Talent Solutions',
      description: 'Empower your team with the right talent, right when you need it. We provide on-demand access to certified IT professionals across a wide range of technologies and domains.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: '#ff9800',
      offerings: [
        'Contract, contract-to-hire, and permanent staffing',
        'Project-based resource augmentation',
        'Managed workforce solutions',
        'Offshore development teams',
        'Executive and niche skill recruitment'
      ]
    }
  ];

  const industries = [
    { name: 'Healthcare & Life Sciences', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Banking, Financial Services & Insurance', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Manufacturing & Supply Chain', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Retail & E-commerce', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Government & Public Sector', image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
  ];

  const emergingTech = [
    { name: 'Artificial Intelligence & Machine Learning', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Robotic Process Automation (RPA)', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Internet of Things (IoT)', image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Blockchain Solutions', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Cybersecurity & Risk Management', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
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
          Our Services
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom sx={{ 
          mb: 4, 
          fontWeight: 500, 
          color: 'text.secondary',
          fontSize: { xs: '1.1rem', md: '1.3rem' },
          maxWidth: '800px',
          mx: 'auto'
        }}>
          Comprehensive IT solutions tailored to accelerate your business growth and digital transformation
        </Typography>
      </Box>

      {/* Main Services */}
      <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: { xs: 6, md: 8 } }}>
        {services.map((service, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ 
              height: '100%', 
              overflow: 'hidden',
              borderRadius: 4,
              transition: 'all 0.4s ease-in-out',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: `0 20px 40px ${service.color}20`,
                '& .service-image': {
                  transform: 'scale(1.05)',
                },
                '& .service-icon': {
                  transform: 'scale(1.1) rotate(5deg)',
                }
              }
            }}>
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
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    borderRadius: '50%', 
                    p: 2,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.3s ease-in-out',
                  }} className="service-icon">
                    {service.icon}
                  </Box>
                </Box>
              </Box>
              
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" component="h3" gutterBottom sx={{ 
                  fontWeight: 700, 
                  mb: 2, 
                  color: 'primary.main',
                  fontSize: { xs: '1.3rem', md: '1.5rem' }
                }}>
                  {service.title}
                </Typography>
                <Typography variant="body1" paragraph sx={{ 
                  mb: 3, 
                  color: 'text.secondary', 
                  lineHeight: 1.7,
                  fontSize: { xs: '0.95rem', md: '1rem' }
                }}>
                  {service.description}
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
                  Our offerings include:
                </Typography>
                <List dense>
                  {service.offerings.map((offering, offeringIndex) => (
                    <ListItem key={offeringIndex} sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <CheckCircleIcon sx={{ fontSize: 16, color: service.color }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={offering}
                        primaryTypographyProps={{ 
                          variant: 'body2',
                          fontSize: { xs: '0.85rem', md: '0.9rem' }
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
                <Box sx={{ mt: 3, textAlign: 'center' }}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => navigate('/contact')}
                    sx={{
                      backgroundColor: service.color,
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      fontWeight: 600,
                      textTransform: 'none',
                      borderRadius: 3,
                      '&:hover': {
                        backgroundColor: service.color,
                        transform: 'translateY(-2px)',
                        boxShadow: `0 8px 25px ${service.color}40`,
                      },
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Industry Solutions */}
      <Paper elevation={0} sx={{ 
        p: { xs: 4, md: 6 }, 
        mb: { xs: 6, md: 8 },
        background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.02) 0%, rgba(245, 158, 11, 0.02) 100%)',
        border: '1px solid rgba(30, 58, 138, 0.1)',
        borderRadius: 4,
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <DomainIcon sx={{ fontSize: 50, color: 'primary.main', mr: 2 }} />
          <Typography variant="h4" component="h2" sx={{ fontWeight: 700 }}>
            Industry Solutions
          </Typography>
        </Box>
        <Typography variant="body1" paragraph sx={{ 
          fontSize: '1.1rem', 
          lineHeight: 1.8,
          mb: 4
        }}>
          We bring specialized knowledge to every engagement — understanding industry-specific challenges and delivering tailored technology that drives results.
        </Typography>
        
        <Grid container spacing={3}>
          {industries.map((industry, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ 
                height: '100%',
                overflow: 'hidden',
                borderRadius: 3,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 30px rgba(30, 58, 138, 0.15)',
                }
              }}>
                <CardMedia
                  component="img"
                  height="150"
                  image={industry.image}
                  alt={industry.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, textAlign: 'center' }}>
                    {industry.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Emerging Technologies */}
      <Paper elevation={0} sx={{ 
        p: { xs: 4, md: 6 }, 
        mb: { xs: 6, md: 8 },
        background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.02) 0%, rgba(30, 58, 138, 0.02) 100%)',
        border: '1px solid rgba(245, 158, 11, 0.1)',
        borderRadius: 4,
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <ScienceIcon sx={{ fontSize: 50, color: 'secondary.main', mr: 2 }} />
          <Typography variant="h4" component="h2" sx={{ fontWeight: 700 }}>
            Emerging Technologies
          </Typography>
        </Box>
        <Typography variant="body1" paragraph sx={{ 
          fontSize: '1.1rem', 
          lineHeight: 1.8,
          mb: 4
        }}>
          Stay ahead of the curve with our expertise in next-gen technologies:
        </Typography>
        
        <Grid container spacing={3}>
          {emergingTech.map((tech, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ 
                height: '100%',
                overflow: 'hidden',
                borderRadius: 3,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 30px rgba(245, 158, 11, 0.15)',
                }
              }}>
                <CardMedia
                  component="img"
                  height="150"
                  image={tech.image}
                  alt={tech.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, textAlign: 'center' }}>
                    {tech.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Partnership Promise */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: { xs: 4, md: 6 }, 
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
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
            Partnership Promise
          </Typography>
          <Typography variant="h6" paragraph sx={{ mb: 3, opacity: 0.9 }}>
            At <strong>Innovait Global</strong>, we measure our success by your success.
          </Typography>
          <Typography variant="body1" paragraph sx={{ 
            fontSize: '1.1rem', 
            lineHeight: 1.8,
            mb: 4,
            opacity: 0.9
          }}>
            Our client relationships are built on trust, transparency, and performance. Whether you're a startup or a Fortune 500 enterprise, we bring the same dedication to excellence — every time.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/contact')}
            sx={{
              backgroundColor: 'white',
              color: 'primary.main',
              px: 6,
              py: 2,
              fontSize: '1.1rem',
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
            Get Started Today
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Services;
