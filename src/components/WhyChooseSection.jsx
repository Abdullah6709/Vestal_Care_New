import React from "react";
import {
    Box,
    Grid,
    Typography,
    Paper,
    Stack,
} from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import image from "../assets/portrait-of-multi-cultural-medical-team-standing-in-hospital-corridor-e1714026415808.jpg"

const features = [
    {
        title: "Affordable & Transparent Pricing",
        desc: "High-quality nursing care delivered with clear, honest, and family-friendly pricing.",
    },
    {
        title: "Certified & Experienced Nurses",
        desc: "Our skilled nurses are professionally trained to provide safe, reliable, and compassionate care.",
    },
    {
        title: "Patient-Centered Care",
        desc: "We focus on comfort, dignity, and personalized care tailored to each patient's needs.",
    },
    {
        title: "24/7 Care & Support",
        desc: "Round-the-clock nursing assistance and support whenever you need it.",
    },
];

const WhyChooseUsSection = () => {
    return (
        <Box
            sx={{
                py: { xs: 4, sm: 5, md: 6 },
                px: { xs: 2, sm: 3, md: 4, lg: 5 },
                backgroundColor: "#fff",
            }}
        >
            <Grid
                container
                spacing={{ xs: 4, md: 6 }}
                alignItems="center"
            >
                {/* LEFT IMAGE - Show on all screens but adjust order */}
                <Grid size={{xs:12, md:6}} order={{ xs: 2, md: 1 }}>
                    <Box
                        component="img"
                        src={image}
                        alt="Vestal Nursing Care Team"
                        sx={{
                            width: "100%",
                            height: { xs: "auto", sm: "400px", md: "500px", lg: "600px" },
                            maxHeight: { xs: "300px", sm: "400px", md: "500px", lg: "600px" },
                            borderRadius: "20px",
                            boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
                            objectFit: "cover",
                            display: "block"
                        }}
                    />
                </Grid>

                {/* RIGHT TEXT SECTION */}
                <Grid size={{xs:12, md:6}} order={{ xs: 1, md: 2 }}>
                    <Box sx={{ px: { xs: 0, sm: 1, md: 2 } }}>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: "#E91E63",
                                fontWeight: "bold",
                                textTransform: "uppercase",
                                fontSize: { xs: "0.875rem", sm: "1rem" },
                                letterSpacing: { xs: 0.5, sm: 1 },
                                mb: 1
                            }}
                        >
                            Why Choose Vestal Healthcare
                        </Typography>

                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: "bold",
                                py: { xs: 2, sm: 3 },
                                color: "#111",
                                fontSize: {
                                    xs: "1.75rem",
                                    sm: "2rem",
                                    md: "2.5rem",
                                    lg: "2.75rem"
                                },
                                lineHeight: {
                                    xs: 1.2,
                                    sm: 1.3,
                                    md: 1.4
                                }
                            }}
                        >
                            Better care begins <br /> with the right support
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                color: "#555",
                                fontSize: {
                                    xs: "0.95rem",
                                    sm: "1rem",
                                    md: "1.1rem"
                                },
                                lineHeight: 1.6,
                                mb: { xs: 3, sm: 4 }
                            }}
                        >
                            Vestal Nursing Care is committed to delivering professional, compassionate, and dependable home nursing services.
                            Our focus is on patient safety, comfort, and dignity while supporting families with trusted healthcare at home.
                        </Typography>

                        {/* FEATURES */}
                        <Grid container spacing={{ xs: 2, sm: 3 }}>
                            {features.map((feature, index) => (
                                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: { xs: 1.5, sm: 2 },
                                            backgroundColor: "transparent",
                                            boxShadow: "none",
                                            mb: { xs: 2, sm: 0 }
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: { xs: 40, sm: 50 },
                                                height: { xs: 40, sm: 50 },
                                                borderRadius: "10px",
                                                backgroundColor: "#D5EFEC",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                flexShrink: 0,
                                                mt: { xs: 0.5, sm: 0 }
                                            }}
                                        >
                                            <CheckBoxIcon sx={{ 
                                                color: "#3FB8AF", 
                                                fontSize: { xs: 22, sm: 28 } 
                                            }} />
                                        </Box>
                                        <Stack spacing={0.5}>
                                            <Typography 
                                                variant="subtitle1" 
                                                sx={{ 
                                                    fontSize: { 
                                                        xs: '1rem', 
                                                        sm: '1.125rem', 
                                                        md: '1.25rem' 
                                                    }, 
                                                    fontWeight: 'bold',
                                                    lineHeight: 1.3
                                                }}
                                            >
                                                {feature.title}
                                            </Typography>
                                            <Typography 
                                                variant="body2" 
                                                sx={{ 
                                                    fontSize: { 
                                                        xs: '0.875rem', 
                                                        sm: '0.95rem', 
                                                        md: '1rem' 
                                                    }, 
                                                    color: "#666",
                                                    lineHeight: 1.5
                                                }}
                                            >
                                                {feature.desc}
                                            </Typography>
                                        </Stack>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default WhyChooseUsSection;