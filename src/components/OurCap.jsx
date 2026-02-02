
import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import image from "../assets/covid-19-social-distancing-and-coronavirus-pandemic-concept-smiling-asian-female-nurse-intern-of-e1713876700157.jpg";

const OurCapabilities = () => {
    const progressData = [
        { label: "Home Care", value: 90 },
        { label: "Senior Care", value: 94 },
        { label: "Intensive Care", value: 86 },
    ];

    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height: { xs: "auto", sm: "70vh", md: "80vh" },
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center top",
                display: "flex",
                alignItems: "center",
                py: 2,
            }}
        >
            {/* Text + Progress Section */}
            <Box
                sx={{
                    position: "relative",
                    zIndex: 2,
                    maxWidth: { xs: "90%", sm: "600px", md: "750px" },
                    mx: { xs: "auto", md: "8%" },
                    textAlign: { xs: "center", md: "left" },
                }}
            >
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: "#E91E63",
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        mb: 1,
                    }}
                >
                    Our Capabilities
                </Typography>

                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        lineHeight: 1.3,
                        mb: 2,
                        fontSize: { xs: "1.7rem", sm: "2rem", md: "2.3rem" },
                    }}
                >
                    We provide the care, you enjoy the peace of mind
                </Typography>

                <Typography
                    sx={{
                        color: "#f5f5f5",
                        mb: 4,
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                    }}
                >
                    Euismod auctor diam metus parturient lacinia lacus vehicula nibh velit.
                    Porttitor ipsum nisl viverra est donec amet bibendum.
                </Typography>

                {/* Animated Progress Bars */}
                {progressData.map((item, i) => (
                    <Box key={i} sx={{ mb: 3 }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                mb: 0.5,
                                fontSize: { xs: "0.9rem", sm: "1rem" },
                            }}
                        >
                            <Typography sx={{ fontWeight: 600 }}>{item.label}</Typography>
                            <Typography sx={{ fontWeight: 600 }}>{item.value}%</Typography>
                        </Box>

                        <Box
                            sx={{
                                height: 8,
                                backgroundColor: "rgba(255, 255, 255, 0.3)",
                                borderRadius: 4,
                                overflow: "hidden",
                            }}
                        >
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${item.value}%` }}
                                transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                                viewport={{ once: true }}
                                style={{
                                    height: "100%",
                                    backgroundColor: "#E91E63",
                                    borderRadius: 4,
                                }}
                            />
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default OurCapabilities;