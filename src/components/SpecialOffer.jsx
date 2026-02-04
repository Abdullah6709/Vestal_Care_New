import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Container } from "@mui/material";
import image from "../assets/stethoscope.jpg"

const SpecialOfferSection = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate("/contact");
    };

    return (
        <Box
            sx={{
                position: "relative",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                py: { xs: 4, sm: 5, md: 6 },
                px: { xs: 2, sm: 3 },
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
                minHeight: { xs: "400px", sm: "450px", md: "300px" },
            }}
        >
            {/* Overlay for dark effect */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.45)",
                }}
            />

            <Container
                sx={{
                    position: "relative",
                    zIndex: 2,
                    textAlign: { xs: "center", md: "left" },
                    maxWidth: "700px",
                    px: { xs: 0, sm: 2 },
                }}
            >
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: "#f06292",
                        fontWeight: 'bold',
                        letterSpacing: { xs: 0.5, sm: 1 },
                        mb: { xs: 1.5, sm: 2 },
                        textTransform: "uppercase",
                        fontSize: {
                            xs: "0.875rem",
                            sm: "1rem",
                            md: "1.125rem"
                        }
                    }}
                >
                    Special Care Services
                </Typography>

                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 800,
                        mb: { xs: 2, sm: 3 },
                        lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 },
                        fontSize: {
                            xs: "1.75rem",
                            sm: "2.25rem",
                            md: "2.75rem",
                            lg: "3rem"
                        },
                        px: { xs: 1, sm: 0 }
                    }}
                >
                    We Protect your health with this simple exam
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        mb: { xs: 3, sm: 4 },
                        color: "#e0e0e0",
                        maxWidth: { xs: "100%", md: "500px" },
                        fontSize: {
                            xs: "0.95rem",
                            sm: "1rem",
                            md: "1.1rem"
                        },
                        lineHeight: 1.6,
                        px: { xs: 1, sm: 0 },
                        mx: { xs: "auto", md: 0 },
                        textAlign: { xs: "center", md: "left" }
                    }}
                >
                    Vestal Healthcare provides trusted, professional home nursing services focused on comfort,
                    safety, and personalized medical support for you and your loved ones.
                </Typography>

                <Box sx={{ 
                    textAlign: { xs: "center", md: "left" },
                    px: { xs: 1, sm: 0 }
                }}>
                    <Button
                        variant="contained"
                        onClick={handleContactClick}
                        sx={{
                            backgroundColor: "#e91e63",
                            color: "#fff",
                            borderRadius: "10px",
                            textTransform: "none",
                            px: { xs: 2.5, sm: 3 },
                            py: { xs: 0.75, sm: 1 },
                            fontWeight: 600,
                            fontSize: {
                                xs: "0.875rem",
                                sm: "0.95rem",
                                md: "1rem"
                            },
                            minWidth: { xs: "220px", sm: "240px" },
                            "&:hover": {
                                backgroundColor: "#d81b60",
                            },
                        }}
                    >
                        Contact Vestal Healthcare
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default SpecialOfferSection;