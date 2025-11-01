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
  Avatar,
  Snackbar,
  Alert,
  CircularProgress,
  InputAdornment
} from '@mui/material';
import { 
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Send as SendIcon,
  Business as BusinessIcon,
  Schedule as ScheduleIcon,
  Support as SupportIcon,
  CheckCircle as CheckCircleIcon,
  Person as PersonIcon,
  CorporateFare as CorporateFareIcon,
  Subject as SubjectIcon,
  Message as MessageIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Handle form submission here
      console.log('Form submitted:', formData);
      
      setSnackbarMessage('Thank you for your message! We will get back to you soon.');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSnackbarMessage('Failed to send message. Please try again.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 24, color: 'primary.main' }} />,
      title: 'Email Us',
      details: 'admin@innovaitglobal.com',
      description: 'Send us an email anytime',
      color: '#4285f4'
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 24, color: 'secondary.main' }} />,
      title: 'Call Us',
      details: '(+1) 732 985 5100',
      description: 'Mon-Fri from 9am to 6pm',
      color: '#34a853'
    },
    {
      icon: <LocationIcon sx={{ fontSize: 24, color: 'primary.main' }} />,
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
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ 
          mb: 1.5, 
          fontWeight: 800, 
          color: 'primary.main',
          fontSize: { xs: '1.8rem', md: '2.5rem' }
        }}>
          Get In Touch
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom sx={{ 
          mb: 3, 
          fontWeight: 500, 
          color: 'text.secondary',
          fontSize: { xs: '1rem', md: '1.1rem' },
          maxWidth: '700px',
          mx: 'auto'
        }}>
          Ready to transform your business with innovative technology solutions? Let's discuss your project.
        </Typography>
      </Box>

      <Grid container spacing={{ xs: 3, md: 5 }}>
        {/* Contact Information - Enhanced UI */}
        <Grid item xs={12} lg={5}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {/* Contact Cards - Enhanced styling */}
            {contactInfo.map((info, index) => (
              <Card key={index} sx={{ 
                borderRadius: 3,
                transition: 'all 0.3s ease-in-out',
                display: 'flex',
                alignItems: 'center',
                p: 2.5,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: `0 6px 15px ${info.color}20`,
                }
              }}>
                <Box sx={{ 
                  width: 56, 
                  height: 56, 
                  borderRadius: '50%', 
                  backgroundColor: `${info.color}10`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2
                }}>
                  {info.icon}
                </Box>
                <Box>
                  <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600, fontSize: '1.1rem', mb: 0.5 }}>
                    {info.title}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500, mb: 0.3, fontSize: '0.95rem' }}>
                    {info.details}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                    {info.description}
                  </Typography>
                </Box>
              </Card>
            ))}

            {/* Business Hours - Enhanced styling */}
            <Card sx={{ 
              borderRadius: 3, 
              p: 2.5,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(0, 0, 0, 0.05)'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box sx={{ 
                  width: 56, 
                  height: 56, 
                  borderRadius: '50%', 
                  backgroundColor: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2
                }}>
                  <ScheduleIcon sx={{ fontSize: 24, color: 'white' }} />
                </Box>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 600, fontSize: '1.1rem' }}>
                  Business Hours
                </Typography>
              </Box>
              <Box sx={{ pl: 7 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1, borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
                  <Typography variant="body1">Monday - Friday</Typography>
                  <Typography variant="body1" fontWeight={500}>9:00 AM - 6:00 PM</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1, borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
                  <Typography variant="body1">Saturday</Typography>
                  <Typography variant="body1" fontWeight={500}>10:00 AM - 4:00 PM</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
                  <Typography variant="body1">Sunday</Typography>
                  <Typography variant="body1" fontWeight={500} color="error.main">Closed</Typography>
                </Box>
              </Box>
            </Card>
          </Box>
        </Grid>

        {/* Contact Form - Enhanced UI */}
        <Grid item xs={12} lg={7}>
          <Paper elevation={0} sx={{ 
            p: { xs: 3, md: 4 },
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.8) 100%)',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: 3,
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 3, md: 4 } }}>
              <Box sx={{ 
                width: 60, 
                height: 60, 
                borderRadius: '50%', 
                backgroundColor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 2
              }}>
                <SendIcon sx={{ fontSize: 28, color: 'white' }} />
              </Box>
              <Typography variant="h5" component="h2" sx={{ 
                fontWeight: 700,
                fontSize: { xs: '1.4rem', md: '1.8rem' }
              }}>
                Send Us a Message
              </Typography>
            </Box>
            
            <form onSubmit={handleSubmit}>
              <Grid container spacing={{ xs: 2, md: 2.5 }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    error={!!errors.name}
                    helperText={errors.name}
                    variant="outlined"
                    size="medium"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon sx={{ color: 'primary.main', fontSize: '1.1rem' }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        '& fieldset': {
                          borderColor: 'rgba(0, 0, 0, 0.1)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'primary.main',
                        }
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
                    error={!!errors.email}
                    helperText={errors.email}
                    variant="outlined"
                    size="medium"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon sx={{ color: 'primary.main', fontSize: '1.1rem' }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        '& fieldset': {
                          borderColor: 'rgba(0, 0, 0, 0.1)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'primary.main',
                        }
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
                    size="medium"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CorporateFareIcon sx={{ color: 'primary.main', fontSize: '1.1rem' }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        '& fieldset': {
                          borderColor: 'rgba(0, 0, 0, 0.1)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'primary.main',
                        }
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
                    size="medium"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIcon sx={{ color: 'primary.main', fontSize: '1.1rem' }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        '& fieldset': {
                          borderColor: 'rgba(0, 0, 0, 0.1)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'primary.main',
                        }
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
                    error={!!errors.subject}
                    helperText={errors.subject}
                    variant="outlined"
                    size="medium"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SubjectIcon sx={{ color: 'primary.main', fontSize: '1.1rem' }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        '& fieldset': {
                          borderColor: 'rgba(0, 0, 0, 0.1)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'primary.main',
                        }
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
                    error={!!errors.message}
                    helperText={errors.message}
                    multiline
                    rows={5}
                    variant="outlined"
                    size="medium"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1.5 }}>
                          <MessageIcon sx={{ color: 'primary.main', fontSize: '1.1rem' }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        '& fieldset': {
                          borderColor: 'rgba(0, 0, 0, 0.1)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'primary.main',
                        }
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={isSubmitting}
                    endIcon={isSubmitting ? <CircularProgress size={20} /> : <SendIcon />}
                    sx={{
                      px: { xs: 4, md: 6 },
                      py: 1.5,
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      fontWeight: 600,
                      borderRadius: 2,
                      width: { xs: '100%', sm: 'auto' },
                      background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #f59e0b 100%)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #d97706 100%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(30, 58, 138, 0.3)',
                      },
                      transition: 'all 0.3s ease-in-out',
                      '&.Mui-disabled': {
                        background: 'rgba(0, 0, 0, 0.12)',
                      }
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>

      {/* Services Section */}
      <Paper elevation={0} sx={{ 
        p: { xs: 3, md: 5 }, 
        mt: { xs: 4, md: 6 },
        background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.02) 0%, rgba(30, 58, 138, 0.02) 100%)',
        border: '1px solid rgba(245, 158, 11, 0.1)',
        borderRadius: 3,
      }}>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <BusinessIcon sx={{ fontSize: 40, color: 'secondary.main', mb: 1.5 }} />
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 700, fontSize: '1.5rem' }}>
            Our Services
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '1rem', color: 'text.secondary' }}>
            We offer comprehensive IT solutions to help your business thrive
          </Typography>
        </Box>
        
        <Grid container spacing={1.5} sx={{ mb: 3 }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Chip
                label={service}
                variant="outlined"
                size="small"
                sx={{
                  width: '100%',
                  py: 1,
                  fontSize: '0.75rem',
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
        p: { xs: 3, md: 5 }, 
        mt: { xs: 3, md: 4 },
        background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.02) 0%, rgba(245, 158, 11, 0.02) 100%)',
        border: '1px solid rgba(30, 58, 138, 0.1)',
        borderRadius: 3,
      }}>
        <Typography variant="h5" component="h2" gutterBottom align="center" sx={{ mb: 3, fontWeight: 700, fontSize: '1.5rem' }}>
          Why Choose Innovait Global?
        </Typography>
        
        <Grid container spacing={1.5}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1, 
                p: 1.5,
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                borderRadius: 1.5,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  transform: 'translateY(-1px)',
                }
              }}>
                <CheckCircleIcon sx={{ color: 'primary.main', fontSize: 18 }} />
                <Typography variant="body2" sx={{ fontWeight: 500, fontSize: '0.8rem' }}>
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
          p: { xs: 3, md: 5 }, 
          mt: { xs: 3, md: 4 },
          textAlign: 'center', 
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #f59e0b 100%)',
          color: 'white',
          borderRadius: 3,
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
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 700, mb: 1.5, fontSize: '1.5rem' }}>
            Ready to Get Started?
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 3, opacity: 0.9, fontSize: '1rem' }}>
            Let's discuss how we can help transform your business with innovative technology solutions.
          </Typography>
          <Button
            variant="contained"
            size="small"
            onClick={() => navigate('/contact')}
            sx={{
              backgroundColor: 'white',
              color: 'primary.main',
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: 2,
              boxShadow: '0 6px 25px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.95)',
                transform: 'translateY(-1px)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
              },
              transition: 'all 0.3s ease-in-out',
            }}
          >
            Schedule a Consultation
          </Button>
        </Box>
      </Paper>
      
      {/* Snackbar for notifications */}
      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbarSeverity} 
          sx={{ width: '100%' }}
          elevation={6}
          variant="filled"
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;