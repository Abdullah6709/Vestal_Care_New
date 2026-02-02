import React from "react";
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
} from "@mui/material";

const services = [
    {
        title: "Home Nursing Care",
        desc: "Professional home nursing services providing medical support, comfort, and personalized care in the safety of your home.",
        icon: "https://cdn-icons-png.flaticon.com/512/4320/4320337.png",
    },
    {
        title: "Elderly & Senior Care",
        desc: "Compassionate senior care focused on daily assistance, health monitoring, and improving quality of life.",
        icon: "https://cdn-icons-png.flaticon.com/512/2966/2966484.png",
    },
    {
        title: "Critical & ICU Care at Home",
        desc: "Advanced nursing and critical care services for patients requiring intensive medical attention at home.",
        icon: "https://cdn-icons-png.flaticon.com/512/3209/3209265.png",
    },
];

const OurServiceSection = () => {
    return (
        <Box sx={{ py: 5, backgroundColor: "#fff", px: { xs: 5, sm: 7, md: 10 }, textAlign: "center" }}>
            <Typography variant="h6" sx={{ color: "#E91E63", mb: 1, fontWeight: "bold" }}>
                OUR SERVICES
            </Typography>

            <Typography
                variant="h4"
                sx={{
                    fontWeight: "bold",
                    mb: 2,
                }}
            >
                Compassionate nursing care<br /> you can trust at home
            </Typography>

            <Typography
                variant="body1"
                sx={{ color: "#666", maxWidth: 700, mx: "auto", mb: 6 }}
            >
                Vestal Nursing Care delivers reliable, professional, and personalized healthcare services at home, ensuring comfort, dignity, and peace of mind for every patient.
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {services.map((service, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                        <Card
                            sx={{
                                p: 4,
                                borderRadius: "20px",
                                boxShadow: "0px 6px 10px rgba(0,0,0,0.1)",
                                transition: "0.3s",
                                "&:hover": { transform: "translateY(-10px)" },
                            }}
                        >
                            <CardContent>
                                <Box
                                    component="img"
                                    src={service.icon}
                                    alt={service.title}
                                    sx={{
                                        width: 50,
                                        height: 50,
                                        mb: 2,
                                        border: "2px solid #3FB8AF",
                                        p: 1,
                                        borderRadius: "10px",
                                    }}
                                />
                                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                                    {service.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: "#555", mb: 3, minHeight: 60 }}
                                >
                                    {service.desc}
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#E91E63",
                                        borderRadius: "25px",
                                        px: 4,
                                        textTransform: "none",
                                        fontWeight: "bold",
                                        "&:hover": { backgroundColor: "#d81b60" },
                                    }}
                                >
                                    Learn More
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default OurServiceSection;
