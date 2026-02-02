import React from "react";
import {
    Box,
    Grid,
    Typography,
    TextField,
    Button,
    IconButton,
    Paper,
    Container,
} from "@mui/material";
import {
    LocationOn,
    Email,
    Phone,
    AccessTime,
    Facebook,
    WhatsApp,
    LinkedIn,
} from "@mui/icons-material";

const Contact = () => {
    return (
        <>
            {/* Banner Section */}
            <Box
                sx={{
                    backgroundColor: "#f0f7ff",
                    width: "100%",
                    py: { xs: 6, md: 10 },
                    display: "flex",
                    alignItems: "center",
                    color: "#2c3e50",
                    overflow: "hidden",
                    textAlign: "center",
                    justifyContent: "center",
                }}
            >
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            maxWidth: 800,
                            mx: "auto",
                            p: { xs: 2, md: 0 },
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 700,
                                mb: 2,
                                color: "#2c3e50",
                            }}
                        >
                            Get in Touch with Vestal Nursing Care
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{
                                color: "#E91E63",
                                fontWeight: 600,
                                mb: 3,
                                maxWidth: 600,
                                mx: "auto",
                            }}
                        >
                            Trusted Home Nursing Support, Just a Call Away
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                maxWidth: 700,
                                mt: 2,
                                mb: 4,
                                mx: "auto",
                                fontSize: "1.1rem",
                                lineHeight: 1.6,
                                color: "#555",
                            }}
                        >
                            At Vestal Nursing Care, we understand that every patient’s needs are unique.
                            Whether you require 24/7 nursing assistance, post-surgical care, elderly support,
                            or chronic condition management, our experienced nursing team is here to help.
                            Contact us today to receive personalized home healthcare in a safe and comfortable environment.
                        </Typography>

                        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#E91E63",
                                    color: "#fff",
                                    "&:hover": { backgroundColor: "#C2185B" },
                                    borderRadius: "25px",
                                    px: 4,
                                    py: 1.5,
                                }}
                            >
                                Call Now : 01204099066
                            </Button>

                            <Button
                                variant="outlined"
                                sx={{
                                    borderColor: "#E91E63",
                                    color: "#E91E63",
                                    "&:hover": {
                                        borderColor: "#C2185B",
                                        backgroundColor: "rgba(233, 30, 99, 0.1)",
                                    },
                                    borderRadius: "25px",
                                    px: 4,
                                    py: 1.5,
                                }}
                            >
                                Book a Free Consultation
                            </Button>
                        </Box>

                        {/* Quick Contact Info */}
                        <Grid container spacing={2} sx={{ mt: 4, maxWidth: 600, mx: "auto" }}>
                            {[
                                { icon: <Phone sx={{ color: "#E91E63" }} />, text: "24/7 Nursing Assistance" },
                                { icon: <Email sx={{ color: "#E91E63" }} />, text: "Fast Response Support" },
                                { icon: <AccessTime sx={{ color: "#E91E63" }} />, text: "Flexible Care Schedules" },
                            ].map((item, index) => (
                                <Grid size={{ xs: 12, sm: 4 }} key={index}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: 1,
                                        }}
                                    >
                                        {item.icon}
                                        <Typography variant="body2" sx={{ color: "#555", fontWeight: 500 }}>
                                            {item.text}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </Box>

            {/* Contact Details & Form */}
            <Box
                sx={{
                    backgroundColor: "#f9fafb",
                    py: 8,
                    px: { xs: 2, md: 6 },
                    minHeight: "100vh",
                }}
            >
                <Grid
                    container
                    spacing={4}
                    sx={{ maxWidth: 1200, mx: "auto" }}
                    alignItems="flex-start"
                >
                    {/* LEFT SIDE */}
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: "#E91E63",
                                fontWeight: 600,
                                textTransform: "uppercase",
                                mb: 1,
                            }}
                        >
                            Contact Vestal Nursing Care
                        </Typography>

                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 700,
                                mb: 2,
                                color: "#000",
                            }}
                        >
                            We are here to support your care needs
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                color: "text.secondary",
                                mb: 4,
                                maxWidth: 450,
                            }}
                        >
                            Reach out to Vestal Nursing Care for reliable, professional,
                            and compassionate home nursing services tailored to your family’s needs.
                        </Typography>

                        {/* Contact Info */}
                        <Grid container spacing={2} mb={4}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: 2,
                                        borderRadius: 2,
                                        boxShadow: "none",
                                        backgroundColor: "#E0F7F5",
                                    }}
                                >
                                    <LocationOn sx={{ color: "#3FB8AF", fontSize: 28 }} />
                                    <Box>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                            Head Office
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            B-38, Sector 64, Noida, Uttar Pradesh, India
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>

                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: 2,
                                        borderRadius: 2,
                                        boxShadow: "none",
                                        backgroundColor: "#E0F7F5",
                                    }}
                                >
                                    <Email sx={{ color: "#3FB8AF", fontSize: 28 }} />
                                    <Box>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                            Email Support
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            info@vestalhealth.in
                                            <br />
                                            deepak@vestalhealth.in
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>

                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: 2,
                                        borderRadius: 2,
                                        boxShadow: "none",
                                        backgroundColor: "#E0F7F5",
                                    }}
                                >
                                    <Phone sx={{ color: "#3FB8AF", fontSize: 28 }} />
                                    <Box>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                            Call Us
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Phone: +91 9599062557
                                            <br />
                                            Telephone: 01204099066
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>

                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: 2,
                                        borderRadius: 2,
                                        boxShadow: "none",
                                        backgroundColor: "#E0F7F5",
                                    }}
                                >
                                    <AccessTime sx={{ color: "#3FB8AF", fontSize: 28 }} />
                                    <Box>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                            Working Hours
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Mon - Fri: 09:00 - 17:00
                                            <br />
                                            Sat - Sun: Closed
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                        </Grid>

                        {/* Social Icons */}
                        <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                                Connect with us on social media
                            </Typography>
                            <Box>
                                {[Facebook, WhatsApp, LinkedIn].map((Icon, i) => (
                                    <IconButton
                                        key={i}
                                        sx={{
                                            color: "#3FB8AF",
                                            backgroundColor: "#E0F7F5",
                                            mr: 1,
                                            "&:hover": {
                                                backgroundColor: "#3FB8AF",
                                                color: "#fff",
                                            },
                                        }}
                                    >
                                        <Icon />
                                    </IconButton>
                                ))}
                            </Box>
                        </Box>
                    </Grid>

                    {/* RIGHT SIDE - CONTACT FORM */}
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Paper
                            sx={{
                                p: 4,
                                borderRadius: 3,
                                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                                backgroundColor: "#fff",
                            }}
                        >
                            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                                Send Us a Message
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary", mb: 4 }}>
                                Fill out the form below and our Vestal Nursing Care team will get back to you shortly.
                            </Typography>

                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField fullWidth label="Your Name" variant="outlined" />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField fullWidth label="Phone Number" variant="outlined" />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField fullWidth label="Email Address" variant="outlined" />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField fullWidth label="Subject" variant="outlined" />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={4}
                                        label="Message"
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>

                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    mt: 3,
                                    py: 1.5,
                                    borderRadius: "30px",
                                    fontWeight: 600,
                                    backgroundColor: "#E91E63",
                                    "&:hover": {
                                        backgroundColor: "#C2185B",
                                    },
                                }}
                            >
                                Send Message
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>

            {/* Map */}
            <Box
                sx={{
                    position: "relative",
                    height: { xs: "300px", md: "450px" },
                    overflow: "hidden",
                }}
            >
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.064925037047!2d-122.41941568468218!3d37.7749297797595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b68bff3%3A0x5a2b25ef02b5d742!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1701234567890!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </Box>
        </>
    );
};

export default Contact;
