import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  TextField, 
  Button, 
  Paper,
  CardMedia,
  Chip,
  Avatar
} from '@mui/material';
import { 
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Send as SendIcon,
  Business as BusinessIcon,
  Schedule as ScheduleIcon,
  Support as SupportIcon,
  CheckCircle as CheckCircleIcon
} from '@mui/icons-material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Email Us',
      details: 'admin@innovaitglobal.com',
      description: 'Send us an email anytime',
      color: '#4285f4'
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40, color: 'secondary.main' }} />,
      title: 'Call Us',
      details: '(+1) 732 985 5100',
      description: 'Mon-Fri from 9am to 6pm',
      color: '#34a853'
    },
    {
      icon: <LocationIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Visit Us',
      details: '100 Metroplex Drive, Suite #207',
      description: 'Edison, NJ 08817, USA',
      color: '#fbbc04'
    }
  ];

  const services = [
    'IT Consulting & Strategy',
    'Application Development',
    'Cloud Solutions',
    'Data Analytics',
    'AI/ML Training',
    'QA & Testing',
    'DevOps Services',
    'IT Staffing'
  ];

  const benefits = [
    'Free initial consultation',
    '24/7 technical support',
    'Customized solutions',
    'Proven track record',
    'Expert team',
    'Competitive pricing'
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
          Get In Touch
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom sx={{ 
          mb: 4, 
          fontWeight: 500, 
          color: 'text.secondary',
          fontSize: { xs: '1.1rem', md: '1.3rem' },
          maxWidth: '800px',
          mx: 'auto'
        }}>
          Ready to transform your business with innovative technology solutions? Let's discuss your project.
        </Typography>
      </Box>

      <Grid container spacing={{ xs: 4, md: 6 }}>
        {/* Contact Form */}
        <Grid item xs={12} lg={8}>
          <Paper elevation={0} sx={{ 
            p: { xs: 4, md: 6 },
            background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.02) 0%, rgba(245, 158, 11, 0.02) 100%)',
            border: '1px solid rgba(30, 58, 138, 0.1)',
            borderRadius: 4,
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
              <SendIcon sx={{ fontSize: 50, color: 'primary.main', mr: 2 }} />
              <Typography variant="h4" component="h2" sx={{ fontWeight: 700 }}>
                Send Us a Message
              </Typography>
            </Box>
            
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Company Name"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={6}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<SendIcon />}
                    sx={{
                      px: 6,
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderRadius: 3,
                      background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #f59e0b 100%)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #d97706 100%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 40px rgba(30, 58, 138, 0.3)',
                      },
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} lg={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <Card key={index} sx={{ 
                borderRadius: 4,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: `0 12px 30px ${info.color}20`,
                }
              }}>
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>
                    {info.icon}
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    {info.title}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500, mb: 1 }}>
                    {info.details}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {info.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}

            {/* Business Hours */}
            <Card sx={{ borderRadius: 4 }}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <ScheduleIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                    Business Hours
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2">Monday - Friday</Typography>
                    <Typography variant="body2" fontWeight={500}>9:00 AM - 6:00 PM</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2">Saturday</Typography>
                    <Typography variant="body2" fontWeight={500}>10:00 AM - 4:00 PM</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2">Sunday</Typography>
                    <Typography variant="body2" fontWeight={500}>Closed</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            {/* Emergency Support */}
            <Card sx={{ 
              borderRadius: 4,
              background: 'linear-gradient(135deg, rgba(234, 67, 53, 0.05) 0%, rgba(234, 67, 53, 0.1) 100%)',
              border: '1px solid rgba(234, 67, 53, 0.2)',
            }}>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <SupportIcon sx={{ fontSize: 40, color: '#ea4335', mb: 2 }} />
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                  Emergency Support
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Need immediate assistance? Our 24/7 support team is here to help.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#ea4335',
                    color: 'white',
                    px: 3,
                    py: 1.5,
                    borderRadius: 3,
                    '&:hover': {
                      backgroundColor: '#d33b2c',
                    }
                  }}
                >
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>

      {/* Services Section */}
      <Paper elevation={0} sx={{ 
        p: { xs: 4, md: 6 }, 
        mt: { xs: 6, md: 8 },
        background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.02) 0%, rgba(30, 58, 138, 0.02) 100%)',
        border: '1px solid rgba(245, 158, 11, 0.1)',
        borderRadius: 4,
      }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <BusinessIcon sx={{ fontSize: 50, color: 'secondary.main', mb: 2 }} />
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
            Our Services
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
            We offer comprehensive IT solutions to help your business thrive
          </Typography>
        </Box>
        
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Chip
                label={service}
                variant="outlined"
                sx={{
                  width: '100%',
                  py: 2,
                  fontSize: '0.9rem',
                  '&:hover': {
                    backgroundColor: 'primary.light',
                    color: 'white',
                  }
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Why Choose Us */}
      <Paper elevation={0} sx={{ 
        p: { xs: 4, md: 6 }, 
        mt: { xs: 4, md: 6 },
        background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.02) 0%, rgba(245, 158, 11, 0.02) 100%)',
        border: '1px solid rgba(30, 58, 138, 0.1)',
        borderRadius: 4,
      }}>
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4, fontWeight: 700 }}>
          Why Choose Innovait Global?
        </Typography>
        
        <Grid container spacing={3}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
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
                <CheckCircleIcon sx={{ color: 'primary.main', fontSize: 24 }} />
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {benefit}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Call to Action */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: { xs: 4, md: 6 }, 
          mt: { xs: 4, md: 6 },
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
            Ready to Get Started?
          </Typography>
          <Typography variant="h6" paragraph sx={{ mb: 4, opacity: 0.9 }}>
            Let's discuss how we can help transform your business with innovative technology solutions.
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
            Schedule a Consultation
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Contact;
