import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import image from "../assets/stethoscope.jpg"

const SpecialOfferSection = () => {
    return (
        <Box
            sx={{
                position: "relative",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                py: 5,
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
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
                    textAlign: "left",
                    maxWidth: "700px",
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        color: "#f06292",
                        fontWeight: 'bold',
                        letterSpacing: 1,
                        mb: 2,
                        textTransform: "uppercase",
                    }}
                >
                    Special Care Services
                </Typography>

                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 800,
                        mb: 2,
                        lineHeight: 1.3,
                    }}
                >
                    We Protect your health with this simple exam
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        mb: 4,
                        color: "#e0e0e0",
                        maxWidth: 500,
                    }}
                >
                    Vestal Nursing Care provides trusted, professional home nursing services focused on comfort,
                    safety, and personalized medical support for you and your loved ones.
                </Typography>

                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#e91e63",
                        color: "#fff",
                        borderRadius: "10px",
                        textTransform: "none",
                        px: 3,
                        py: 1,
                        fontWeight: 600,
                        fontSize: "1rem",
                        "&:hover": {
                            backgroundColor: "#d81b60",
                        },
                    }}
                >
                    Contact Vestal Nursing Care
                </Button>
            </Container>
        </Box>
    );
};

export default SpecialOfferSection;
