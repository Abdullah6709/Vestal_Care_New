import React from "react";
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Avatar,
    Stack,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const testimonials = [
    {
        name: "Dave Miller",
        designation: "Patient Family Member",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
        review:
            "Vestal Nursing Care provided outstanding support for my family. The nurses were professional and always attentive to needs.",
    },
    {
        name: "Evelyn Moses",
        designation: "Home Care Patient",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
        review:
            "The care I received at home was exceptional. The nursing team made me feel safe, comfortable, and truly cared for every day.",
    },
    {
        name: "Mike Smith",
        designation: "Patient Relative",
        img: "https://randomuser.me/api/portraits/men/50.jpg",
        review:
            "Reliable and compassionate service from start to finish. Vestal Nursing Care exceeded our expectations in every way.",
    },
];

const TestimonialSection = () => {
    return (
        <Box sx={{ py: 5, px: { xs: 5, sm: 7, md: 10 }, backgroundColor: "#fff" }}>
            <Typography
                variant="h6"
                sx={{ color: "#E91E63", fontWeight: 'bold', textAlign: "center" }}
            >
                TESTIMONIALS
            </Typography>

            <Typography
                variant="h4"
                sx={{
                    fontWeight: 800,
                    textAlign: "center",
                    mt: 1,
                }}
            >
                What Our Clients Say About Us
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    textAlign: "center",
                    mt: 2,
                    mb: 6,
                    color: "#666",
                    maxWidth: 700,
                    mx: "auto",
                }}
            >
                Families trust Vestal Nursing Care for professional, compassionate,
                and dependable home nursing services that truly make a difference.
            </Typography>

            <Grid container spacing={4}>
                {testimonials.map((t, i) => (
                    <Grid size={{ xs: 12, md: 4 }} key={i}>
                        <Card
                            sx={{
                                p: 3,
                                borderRadius: "20px",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                            }}
                        >
                            <CardContent>
                                <Stack direction="row" spacing={0.5} sx={{ mb: 2 }}>
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i} sx={{ color: "#FFC107", fontSize: 20 }} />
                                    ))}
                                </Stack>

                                <Typography variant="body1" sx={{ color: "#555", mb: 3 }}>
                                    {t.review}
                                </Typography>

                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <Avatar src={t.img} sx={{ width: 60, height: 60 }} />
                                    <Box>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                                            {t.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: "#777" }}>
                                            {t.designation}
                                        </Typography>
                                    </Box>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default TestimonialSection;
