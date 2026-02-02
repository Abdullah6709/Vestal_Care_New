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
        desc: "We focus on comfort, dignity, and personalized care tailored to each patient’s needs.",
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
                py: 5,
                px: { xs: 2, sm: 3, md: 5 },
                backgroundColor: "#fff",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Grid
                container
                spacing={1}
                alignItems="center"
                justifyContent="center"
            >
                {/* LEFT IMAGE */}
                <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                    <Box
                        component="img"
                        src={image}
                        alt="Vestal Nursing Care Team"
                        sx={{
                            width: "95%",
                            height: "85vh",
                            borderRadius: "20px",
                            boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
                            display: { xs: 'none', sm: 'flex', md: 'flex' }
                        }}
                    />
                </Grid>

                {/* RIGHT TEXT SECTION */}
                <Grid size={{ xs: 12, sm: 6, md: 6 }} px={{ xs: 1, sm: 2, md: 3 }}>
                    <Typography
                        variant="h6"
                        sx={{
                            color: "#E91E63",
                            fontWeight: "bold",
                            textTransform: "uppercase",
                        }}
                    >
                        Why Choose Vestal Nursing Care
                    </Typography>

                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: "bold",
                            py: 3,
                            color: "#111",
                        }}
                    >
                        Better care begins <br /> with the right support
                    </Typography>

                    <Typography
                        variant="p"
                        sx={{
                            color: "#555",
                        }}
                    >
                        Vestal Nursing Care is committed to delivering professional, compassionate, and dependable home nursing services.
                        Our focus is on patient safety, comfort, and dignity while supporting families with trusted healthcare at home.
                    </Typography>

                    {/* FEATURES */}
                    <Grid container spacing={3} py={3}>
                        {features.map((feature, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: 2,
                                        backgroundColor: "transparent",
                                        boxShadow: "none",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: "10px",
                                            backgroundColor: "#D5EFEC",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <CheckBoxIcon sx={{ color: "#3FB8AF", fontSize: 28 }} />
                                    </Box>
                                    <Stack spacing={0.5}>
                                        <Typography variant="subtitle1" sx={{ fontSize: '18px', fontWeight: 'bold' }}>
                                            {feature.title}
                                        </Typography>
                                        <Typography variant="p" sx={{ fontSize: '18px', color: "#666" }}>
                                            {feature.desc}
                                        </Typography>
                                    </Stack>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default WhyChooseUsSection;
