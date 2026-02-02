import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

// Importing unique icons
import VerifiedIcon from "@mui/icons-material/Verified";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const Features = () => {
    const items = [
        {
            title: "Satisfaction Guarantee",
            text: "Your comfort and well-being are our top priorities. We ensure high-quality nursing care with complete satisfaction and trust.",
            icon: <VerifiedIcon sx={{ fontSize: 36, color: "#083a36ff", }} />,
        },
        {
            title: "Professional Nurse",
            text: "Our experienced and certified nurses provide personalized medical care with compassion and professionalism at your home.",
            icon: <LocalHospitalIcon sx={{ fontSize: 36, color: "#083a36ff" }} />,
        },
        {
            title: "Low Cost Service",
            text: "We offer high-quality home nursing care services at affordable and transparent prices for every family nationwide.",
            icon: <MonetizationOnIcon sx={{ fontSize: 36, color: "#083a36ff" }} />,
        },
    ];

    // Card animation
    const cardVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.3,
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };

    // Text animation inside card
    const textContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const textItem = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <Box
            sx={{
                backgroundColor: "#fff",
                py: 4,
                px: { xs: 2, sm: 3, md: 5 },
                mx: "auto"
            }}
        >
            <Grid
                container
                spacing={2}
                sx={{ maxWidth: 1200, mx: "auto" }}
                justifyContent="center"
            >
                {items.map((item, index) => (
                    <Grid size={{ xs: 12, md: 4 }} key={index}>
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={index}

                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    backgroundColor: "#f8fafa",

                                    borderRadius: 3,
                                    textAlign: "center",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                                        transform: "translateY(-6px)",
                                    },
                                }}
                            >
                                {/* Icon with gradient circle background */}
                                <Box
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: "50%",
                                        background: "linear-gradient(135deg, #3FB8AF, #0e5c59)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        mb: 2,
                                        mx: "auto"
                                    }}
                                >
                                    {item.icon}
                                </Box>

                                <motion.div
                                    variants={textContainer}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <motion.div variants={textItem}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: "bold",
                                                mb: 1,
                                                color: "#0e5c59",
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                    </motion.div>
                                    <motion.div variants={textItem}>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "#555",
                                                lineHeight: 1.4,
                                            }}
                                        >
                                            {item.text}
                                        </Typography>
                                    </motion.div>
                                </motion.div>
                            </Paper>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Features;
