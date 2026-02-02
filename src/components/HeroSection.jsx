import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Divider
} from '@mui/material';
import image from "../assets/herosection.jpg"
const HeroSection = () => {
    return (
        <Box
            sx={{
                background: 'linear-gradient( #3FB8AF, #3FB8AF 100%)',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background Pattern */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '50%',
                    height: '100%',
                    background: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',
                    clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)',
                    display: { xs: 'none', md: 'block', sm: 'block' },
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
                <Grid container spacing={4} alignItems="center">
                    {/* Left Content */}
                    <Grid size={{xs:12, md:6}} >
                        <Box>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: '2.8rem', md: '3.5rem', lg: '4.2rem' },
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
                                    fontSize: '1.1rem',
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
                                sx={{
                                    backgroundColor: '#2022bd',
                                    color: 'white',
                                    px: 6,
                                    py: 1.8,
                                    fontSize: '1.1rem',
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

                    {/* Right Side - Empty for background image */}
                    <Grid size={{xs:12, md:6}}>
                        {/* Background image handled by absolute positioned box */}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HeroSection;