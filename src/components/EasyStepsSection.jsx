import React from "react";
import { Box, Grid, Typography, Stack, Divider } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import image from "../assets/portrait-of-young-asian-smiling-female-nurse-working-on-laptop-in-private-clinic-positive-emotional-3.jpg"
import image2 from "../assets/health-insurance-service-young-asian-caregiver-nurse-examine-senior-man-or-woman-patient-at-home-1-e1714026481357.jpg"

const steps = [
    {
        title: "Book an Appointment",
        desc: "Schedule your home nursing service easily with Vestal Nursing Care at a time that suits your needs.",
    },
    {
        title: "Receive Expert Consultation",
        desc: "Our healthcare team understands your requirements and recommends the right nursing support.",
    },
    {
        title: "Meet Your Dedicated Nurse",
        desc: "A qualified and compassionate nurse is assigned to provide personalized care at home.",
    },
    {
        title: "Experience Quality Home Care",
        desc: "Enjoy professional, safe, and reliable nursing care focused on comfort and recovery.",
    },
];

const EasyStepsSection = () => {
    return (
        <Box
            sx={{
                py: 5,
                px: { xs: 2, sm: 3, md: 5 },
                backgroundColor: "#fff"
            }}
        >
            <Grid container spacing={6} alignItems="center">
                {/* LEFT TEXT SECTION */}
                <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                    <Typography
                        variant="h6"
                        sx={{
                            color: "#E91E63",
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            mb: 1,
                        }}
                    >
                        How It Works
                    </Typography>

                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 800,
                            mb: 2,
                            color: "#111",
                        }}
                    >
                        Simple steps to receive trusted home nursing care
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: "#666",
                            mb: 5,
                            maxWidth: 600,
                            lineHeight: 1.7,
                        }}
                    >
                        Vestal Health Care makes it easy to access professional nursing services at home,
                        ensuring comfort, safety, and personalized healthcare support for every patient.
                    </Typography>

                    {/* STEPS LIST */}
                    <Stack spacing={3}>
                        {steps.map((step, index) => (
                            <Box key={index}>
                                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                                    <Box
                                        sx={{
                                            width: 48,
                                            height: 48,
                                            borderRadius: "8px",
                                            backgroundColor:
                                                index === 0 ? "#3FB8AF" : "rgba(63,184,175,0.2)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <CheckBoxIcon
                                            sx={{
                                                color: index === 0 ? "#fff" : "#3FB8AF",
                                                fontSize: 28,
                                            }}
                                        />
                                    </Box>
                                    <Box>
                                        <Typography
                                            variant="h6"
                                            sx={{ fontWeight: "bold", color: "#111", mb: 0.5 }}
                                        >
                                            {step.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: "#666", lineHeight: 1.6 }}
                                        >
                                            {step.desc}
                                        </Typography>
                                    </Box>
                                </Box>
                                {/* Divider between steps */}
                                {index < steps.length - 1 && (
                                    <Divider sx={{ mt: 3, opacity: 0.3 }} />
                                )}
                            </Box>
                        ))}
                    </Stack>
                </Grid>

                {/* RIGHT IMAGE SECTION */}
                <Grid size={{ xs: 12, sm: 6, md: 6 }} px={{ xs: 1, sm: 2, md: 3 }}>
                    <Box sx={{ position: "relative", display: "flex", justifyContent: "center" }}>
                        {/* BACKGROUND IMAGE */}
                        <Box
                            component="img"
                            src={image}
                            alt="Vestal Nursing Care professional nurse"
                            sx={{
                                width: "100%",
                                height: '90vh',
                                borderRadius: "20px",
                                boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                                display: { xs: 'none', sm: 'flex', md: 'flex' }
                            }}
                        />

                        {/* SMALL OVERLAPPING IMAGE */}
                        <Box
                            component="img"
                            src={image2}
                            alt="Vestal Nursing Care home patient support"
                            sx={{
                                position: "absolute",
                                bottom: "-30px",
                                left: "-20px",
                                width: "50%",
                                height: '40vh',
                                borderRadius: "16px",
                                boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                                display: { xs: 'none', sm: 'flex', md: 'flex' }
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default EasyStepsSection;
