import React from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const news = [
    {
        img: "https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg",
        date: "April 25, 2024",
        category: "Home Nursing",
        title: "Essential Home Nursing Services for Comfortable Recovery",
        desc: "Learn how professional home nursing care supports recovery, comfort, and independence at home.",
    },
    {
        img: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg",
        date: "April 25, 2024",
        category: "Patient Care",
        title: "Why Home Nursing Care Benefits Patients of All Ages",
        desc: "Discover how personalized nursing care at home improves health outcomes for patients and families.",
    },
    {
        img: "https://images.pexels.com/photos/7551672/pexels-photo-7551672.jpeg",
        date: "April 25, 2024",
        category: "Wellness",
        title: "The Role of Professional Nursing in Long-Term Care",
        desc: "Understand the importance of skilled nursing support in managing long-term health conditions.",
    },
    {
        img: "https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg",
        date: "April 25, 2024",
        category: "Care Support",
        title: "How Families Can Choose the Right Home Nursing Service",
        desc: "A simple guide to selecting trusted, reliable, and compassionate home nursing care providers.",
    },
];

const LatestNewsSection = () => {
    return (
        <Box sx={{ py: 5, px: { xs: 5, sm: 7, md: 10 }, backgroundColor: "#fff" }}>
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 800,
                    mb: 4,
                    textAlign: "left",
                    borderBottom: "3px solid #000",
                    display: "inline-block",
                }}
            >
                Latest News & Updates
            </Typography>

            <Grid container spacing={4}>
                {news.map((n, i) => (
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
                        <Card sx={{ boxShadow: "none" }}>
                            <CardMedia
                                component="img"
                                image={n.img}
                                alt={n.title}
                                sx={{
                                    borderRadius: "12px",
                                    height: 220,
                                    objectFit: "cover",
                                }}
                            />
                            <CardContent sx={{ mt: 2 }}>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        color: "#999",
                                        mb: 1,
                                    }}
                                >
                                    <CalendarMonthIcon sx={{ fontSize: 16, mr: 0.5 }} /> {n.date}
                                    &nbsp; • &nbsp;
                                    <Typography component="span" sx={{ color: "#E91E63" }}>
                                        {n.category}
                                    </Typography>
                                </Typography>

                                <Typography
                                    variant="subtitle1"
                                    sx={{ fontWeight: 700, mb: 1, lineHeight: 1.3 }}
                                >
                                    {n.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#666" }}>
                                    {n.desc}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default LatestNewsSection;
