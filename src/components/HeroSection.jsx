import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Divider,
    Modal,
    TextField,
    IconButton,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextareaAutosize
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import image from "../assets/herosection.jpg"

const HeroSection = () => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData);
        // Reset form and close modal
        setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: ''
        });
        handleClose();
        alert('Thank you for your inquiry! We will contact you soon.');
    };

    return (
        <Box
            sx={{
                background: 'linear-gradient(#3FB8AF, #3FB8AF 100%)',
                minHeight: { xs: '100vh', md: '82vh' },
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background Image Container for all screen sizes */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: { xs: '100%', md: '50%' },
                    height: '100%',
                    background: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: { xs: 'center', md: 'right' },
                    clipPath: {
                        xs: 'none',
                        md: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)'
                    },
                    opacity: { xs: 0.5, md: 1 },
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: {
                            xs: 'linear-gradient(to bottom, rgba(63, 184, 175, 0.4), rgba(63, 184, 175, 0.6))',
                            md: 'none'
                        }
                    }
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                <Grid container spacing={4} alignItems="center">
                    {/* Left Content */}
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: '2.5rem', sm: '2.8rem', md: '3.5rem', lg: '4.2rem' },
                                    fontWeight: 700,
                                    lineHeight: 1.1,
                                    color: 'white',
                                    mb: 3,
                                    fontFamily: '"Georgia", serif',
                                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                                }}
                            >
                                Living With Heart,<br />
                                <Box
                                    component="span"
                                    sx={{
                                        color: '#FFD700',
                                        fontStyle: 'italic',
                                    }}
                                >
                                    Loving With Care
                                </Box>
                            </Typography>

                            <Typography
                                variant="h6"
                                sx={{
                                    color: 'rgba(255,255,255,0.9)',
                                    fontSize: { xs: '1rem', sm: '1.1rem' },
                                    lineHeight: 1.6,
                                    mb: 4,
                                    fontWeight: 400,
                                    fontFamily: '"Arial", sans-serif',
                                    maxWidth: '500px',
                                }}
                            >
                                We provide professional home nursing care with compassion, comfort
                                and reliability, Our trained caregivers ensure quality healthcare services in the comfort of your home.
                            </Typography>

                            <Divider
                                sx={{
                                    my: 4,
                                    borderColor: 'rgba(255,255,255,0.3)',
                                    borderWidth: 2,
                                    width: '60px',
                                }}
                            />

                            <Button
                                variant="contained"
                                size="large"
                                onClick={handleOpen}
                                sx={{
                                    backgroundColor: '#2022bd',
                                    color: 'white',
                                    px: { xs: 4, sm: 6 },
                                    py: 1.8,
                                    fontSize: { xs: '1rem', sm: '1.1rem' },
                                    fontWeight: 600,
                                    borderRadius: '30px',
                                    textTransform: 'none',
                                    fontFamily: '"Arial", sans-serif',
                                    boxShadow: '0 4px 15px rgba(18, 53, 150, 0.4)',
                                    '&:hover': {
                                        backgroundColor: '#4f51ff',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 6px 20px rgba(18, 53, 150, 0.4)',
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                Get Started
                            </Button>
                        </Box>
                    </Grid>

                    {/* Right Side - Empty for background image on desktop */}
                    <Grid item xs={12} md={6}>
                        {/* Background image handled by absolute positioned box */}
                    </Grid>
                </Grid>
            </Container>

            {/* Inquiry Form Modal */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="inquiry-form-modal"
                aria-describedby="inquiry-form-for-home-nursing-services"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: { xs: '90%', sm: '80%', md: 600 },
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        boxShadow: 24,
                        p: { xs: 3, sm: 4 },
                        maxHeight: '90vh',
                        overflow: 'auto',
                    }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                        <Typography id="inquiry-form-modal" variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                            Request Vestal Health Care Services
                        </Typography>
                        <IconButton onClick={handleClose} size="small">
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid size={{xs:12, md:6}} >
                                <TextField
                                    required
                                    fullWidth
                                    label="Full Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid size={{xs:12, md:6}}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid size={{xs:12, md:6}}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Phone Number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid size={{xs:12, md:6}}>
                                <FormControl fullWidth required>
                                    <InputLabel>Service Required</InputLabel>
                                    <Select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        label="Service Required"
                                    >
                                        <MenuItem value="elderly-care">Elderly Care</MenuItem>
                                        <MenuItem value="post-operative">Post-operative Care</MenuItem>
                                        <MenuItem value="chronic-care">Chronic Disease Care</MenuItem>
                                        <MenuItem value="palliative">Palliative Care</MenuItem>
                                        <MenuItem value="nursing-visits">Nursing Visits</MenuItem>
                                        <MenuItem value="not-sure">Not Sure / Need Advice</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid size={{xs:12}}>
                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                    Message (Optional)
                                </Typography>
                                <TextareaAutosize
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    minRows={4}
                                    style={{
                                        width: '100%',
                                        padding: '16.5px 14px',
                                        border: '1px solid rgba(0, 0, 0, 0.23)',
                                        borderRadius: '4px',
                                        fontFamily: 'Roboto, sans-serif',
                                        fontSize: '1rem',
                                        resize: 'vertical'
                                    }}
                                    placeholder="Please provide any additional details about the care needed..."
                                />
                            </Grid>

                            <Grid size={{xs:12}}>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                    We'll contact you within 24 hours to discuss your needs and schedule a free consultation.
                                </Typography>
                            </Grid>

                            <Grid size={{xs:12}}>
                                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                                    <Button
                                        onClick={handleClose}
                                        variant="outlined"
                                        sx={{
                                            borderRadius: '30px',
                                            px: 4,
                                            textTransform: 'none'
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{
                                            backgroundColor: '#2022bd',
                                            borderRadius: '30px',
                                            px: 4,
                                            textTransform: 'none',
                                            '&:hover': {
                                                backgroundColor: '#4f51ff',
                                            }
                                        }}
                                    >
                                        Submit Inquiry
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Modal>
        </Box>
    );
};

export default HeroSection;