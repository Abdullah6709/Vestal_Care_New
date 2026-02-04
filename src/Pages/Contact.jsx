import React, { useState } from "react";
import {
    Box,
    Grid,
    Typography,
    TextField,
    Button,
    IconButton,
    Paper,
    Container,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Avatar,
    Chip,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from "@mui/material";
import {
    LocationOn,
    Email,
    Phone,
    AccessTime,
    Facebook,
    WhatsApp,
    LinkedIn,
    Close,
    MedicalServices,
    Person,
} from "@mui/icons-material";

// Service options for consultation
const serviceOptions = [
    "Elderly Care",
    "Post-Surgical Care",
    "Chronic Condition Management",
    "Physiotherapy",
    "Nursing Care",
    "Attendant Services",
    "Cancer Care",
    "Mother & Newborn Care",
    "Paralysis Care",
    "Orthopedic Care"
];

const Contact = () => {
    const [openConsultationDialog, setOpenConsultationDialog] = useState(false);
    const [consultationForm, setConsultationForm] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        patientAge: "",
        patientCondition: "",
        preferredTime: "",
        message: "",
    });

    const handleConsultationClick = () => {
        setOpenConsultationDialog(true);
    };

    const handleCloseConsultation = () => {
        setOpenConsultationDialog(false);
        setConsultationForm({
            name: "",
            phone: "",
            email: "",
            service: "",
            patientAge: "",
            patientCondition: "",
            preferredTime: "",
            message: "",
        });
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setConsultationForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmitConsultation = (e) => {
        e.preventDefault();
        console.log("Consultation submitted:", consultationForm);
        alert("Thank you for your consultation request! Our team will contact you within 2 hours.");
        handleCloseConsultation();
    };

    return (
        <>
            {/* Banner Section */}
            <Box
                sx={{
                    backgroundColor: "#f0f7ff",
                    width: "100%",
                    py: { xs: 4, sm: 6, md: 10 },
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
                                mb: { xs: 1.5, md: 2 },
                                color: "#2c3e50",
                                fontSize: { 
                                    xs: "1.75rem", 
                                    sm: "2.25rem", 
                                    md: "2.75rem", 
                                    lg: "3rem" 
                                },
                                lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },
                            }}
                        >
                            Get in Touch with Vestal Healthcare
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{
                                color: "#E91E63",
                                fontWeight: 600,
                                mb: { xs: 2, md: 3 },
                                maxWidth: 600,
                                mx: "auto",
                                fontSize: { 
                                    xs: "1rem", 
                                    sm: "1.125rem", 
                                    md: "1.25rem" 
                                },
                                lineHeight: { xs: 1.4, md: 1.6 },
                            }}
                        >
                            Trusted Home Healthcare Support, Just a Call Away
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                maxWidth: 700,
                                mt: { xs: 1, md: 2 },
                                mb: { xs: 3, md: 4 },
                                mx: "auto",
                                fontSize: { 
                                    xs: "0.875rem", 
                                    sm: "0.95rem", 
                                    md: "1.1rem" 
                                },
                                lineHeight: 1.6,
                                color: "#555",
                            }}
                        >
                            At Vestal Healthcare, we understand that every patient's needs are unique.
                            Whether you require 24/7 nursing assistance, post-surgical care, elderly support,
                            or chronic condition management, our experienced nursing team is here to help.
                            Contact us today to receive personalized home healthcare in a safe and comfortable environment.
                        </Typography>

                        <Box sx={{ 
                            display: "flex", 
                            gap: { xs: 1, sm: 2 }, 
                            justifyContent: "center", 
                            flexWrap: "wrap",
                            flexDirection: { xs: "column", sm: "row" }
                        }}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#E91E63",
                                    color: "#fff",
                                    "&:hover": { backgroundColor: "#C2185B" },
                                    borderRadius: "25px",
                                    px: { xs: 3, sm: 4 },
                                    py: { xs: 1, sm: 1.5 },
                                    fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" },
                                    minWidth: { xs: "100%", sm: "auto" }
                                }}
                            >
                                Call Now : 0120-409-9066
                            </Button>

                            <Button
                                variant="outlined"
                                onClick={handleConsultationClick}
                                sx={{
                                    borderColor: "#E91E63",
                                    color: "#E91E63",
                                    "&:hover": {
                                        borderColor: "#C2185B",
                                        backgroundColor: "rgba(233, 30, 99, 0.1)",
                                    },
                                    borderRadius: "25px",
                                    px: { xs: 3, sm: 4 },
                                    py: { xs: 1, sm: 1.5 },
                                    fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" },
                                    minWidth: { xs: "100%", sm: "auto" }
                                }}
                            >
                                Book a Free Consultation
                            </Button>
                        </Box>

                        {/* Quick Contact Info */}
                        <Grid container spacing={2} sx={{ 
                            mt: { xs: 3, md: 4 }, 
                            maxWidth: 600, 
                            mx: "auto" 
                        }}>
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
                                            justifyContent: { xs: "flex-start", sm: "center" },
                                            gap: 1,
                                            p: { xs: 1, sm: 0 }
                                        }}
                                    >
                                        {item.icon}
                                        <Typography variant="body2" sx={{ 
                                            color: "#555", 
                                            fontWeight: 500,
                                            fontSize: { 
                                                xs: "0.75rem", 
                                                sm: "0.8125rem", 
                                                md: "0.875rem" 
                                            }
                                        }}>
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
                    py: { xs: 4, sm: 6, md: 8 },
                    px: { xs: 2, sm: 3, md: 6 },
                    minHeight: { xs: "auto", md: "100vh" },
                }}
            >
                <Container maxWidth="lg">
                    <Grid
                        container
                        spacing={{ xs: 3, md: 4 }}
                        alignItems="flex-start"
                    >
                        {/* LEFT SIDE */}
                        <Grid size={{ xs: 12, lg: 6 }}>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: "#E91E63",
                                    fontWeight: 600,
                                    textTransform: "uppercase",
                                    mb: 1,
                                    fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" }
                                }}
                            >
                                Contact Vestal Healthcare
                            </Typography>

                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    mb: { xs: 1.5, md: 2 },
                                    color: "#000",
                                    fontSize: { 
                                        xs: "1.5rem", 
                                        sm: "1.75rem", 
                                        md: "2rem", 
                                        lg: "2.25rem" 
                                    },
                                    lineHeight: { xs: 1.3, md: 1.4 }
                                }}
                            >
                                We are here to support your care needs
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    color: "text.secondary",
                                    mb: { xs: 3, md: 4 },
                                    maxWidth: 450,
                                    fontSize: { 
                                        xs: "0.875rem", 
                                        sm: "0.95rem", 
                                        md: "1rem" 
                                    },
                                    lineHeight: 1.6
                                }}
                            >
                                Reach out to Vestal Healthcare for reliable, professional,
                                and compassionate home nursing services tailored to your family's needs.
                            </Typography>

                            {/* Contact Info */}
                            <Grid container spacing={{ xs: 1.5, md: 2 }} mb={{ xs: 3, md: 4 }}>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <Paper
                                        sx={{
                                            p: { xs: 1.5, sm: 2 },
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: { xs: 1, sm: 2 },
                                            borderRadius: 2,
                                            boxShadow: "none",
                                            backgroundColor: "#E0F7F5",
                                            height: "100%",
                                        }}
                                    >
                                        <LocationOn sx={{ 
                                            color: "#3FB8AF", 
                                            fontSize: { xs: 24, sm: 28 } 
                                        }} />
                                        <Box>
                                            <Typography variant="subtitle1" sx={{ 
                                                fontWeight: 600,
                                                fontSize: { xs: "0.875rem", sm: "1rem" }
                                            }}>
                                                Head Office
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{
                                                fontSize: { 
                                                    xs: "0.75rem", 
                                                    sm: "0.8125rem", 
                                                    md: "0.875rem" 
                                                },
                                                lineHeight: 1.4
                                            }}>
                                                B-38, Sector 64, Noida, Uttar Pradesh, India
                                            </Typography>
                                        </Box>
                                    </Paper>
                                </Grid>

                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <Paper
                                        sx={{
                                            p: { xs: 1.5, sm: 2 },
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: { xs: 1, sm: 2 },
                                            borderRadius: 2,
                                            boxShadow: "none",
                                            backgroundColor: "#E0F7F5",
                                            height: "100%",
                                        }}
                                    >
                                        <Email sx={{ 
                                            color: "#3FB8AF", 
                                            fontSize: { xs: 24, sm: 28 } 
                                        }} />
                                        <Box>
                                            <Typography variant="subtitle1" sx={{ 
                                                fontWeight: 600,
                                                fontSize: { xs: "0.875rem", sm: "1rem" }
                                            }}>
                                                Email Support
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{
                                                fontSize: { 
                                                    xs: "0.75rem", 
                                                    sm: "0.8125rem", 
                                                    md: "0.875rem" 
                                                },
                                                lineHeight: 1.4
                                            }}>
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
                                            p: { xs: 1.5, sm: 2 },
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: { xs: 1, sm: 2 },
                                            borderRadius: 2,
                                            boxShadow: "none",
                                            backgroundColor: "#E0F7F5",
                                            height: "100%",
                                        }}
                                    >
                                        <Phone sx={{ 
                                            color: "#3FB8AF", 
                                            fontSize: { xs: 24, sm: 28 } 
                                        }} />
                                        <Box>
                                            <Typography variant="subtitle1" sx={{ 
                                                fontWeight: 600,
                                                fontSize: { xs: "0.875rem", sm: "1rem" }
                                            }}>
                                                Call Us
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{
                                                fontSize: { 
                                                    xs: "0.75rem", 
                                                    sm: "0.8125rem", 
                                                    md: "0.875rem" 
                                                },
                                                lineHeight: 1.4
                                            }}>
                                                Phone: 09599062557
                                                <br />
                                                Telephone: 0120-409-9066
                                            </Typography>
                                        </Box>
                                    </Paper>
                                </Grid>

                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <Paper
                                        sx={{
                                            p: { xs: 1.5, sm: 2 },
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: { xs: 1, sm: 2 },
                                            borderRadius: 2,
                                            boxShadow: "none",
                                            backgroundColor: "#E0F7F5",
                                            height: "100%",
                                        }}
                                    >
                                        <AccessTime sx={{ 
                                            color: "#3FB8AF", 
                                            fontSize: { xs: 24, sm: 28 } 
                                        }} />
                                        <Box>
                                            <Typography variant="subtitle1" sx={{ 
                                                fontWeight: 600,
                                                fontSize: { xs: "0.875rem", sm: "1rem" }
                                            }}>
                                                Working Hours
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{
                                                fontSize: { 
                                                    xs: "0.75rem", 
                                                    sm: "0.8125rem", 
                                                    md: "0.875rem" 
                                                },
                                                lineHeight: 1.4
                                            }}>
                                               
                                                24*7
                                            </Typography>
                                        </Box>
                                    </Paper>
                                </Grid>
                            </Grid>

                            {/* Social Icons */}
                            
                        </Grid>

                        {/* RIGHT SIDE - CONTACT FORM */}
                        <Grid size={{ xs: 12, lg: 6 }}>
                            <Paper
                                sx={{
                                    p: { xs: 3, sm: 4 },
                                    borderRadius: 3,
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                                    backgroundColor: "#fff",
                                    height: "100%",
                                }}
                            >
                                <Typography variant="h5" sx={{ 
                                    fontWeight: 700, 
                                    mb: 1,
                                    fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" }
                                }}>
                                    Send Us a Message
                                </Typography>
                                <Typography variant="body2" sx={{ 
                                    color: "text.secondary", 
                                    mb: { xs: 3, md: 4 },
                                    fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" }
                                }}>
                                    Fill out the form below and our Vestal Nursing Care team will get back to you shortly.
                                </Typography>

                                <Grid container spacing={{ xs: 2, sm: 2 }}>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField 
                                            fullWidth 
                                            label="Your Name" 
                                            variant="outlined" 
                                            size="medium"
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField 
                                            fullWidth 
                                            label="Phone Number" 
                                            variant="outlined" 
                                            size="medium"
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField 
                                            fullWidth 
                                            label="Email Address" 
                                            variant="outlined" 
                                            size="medium"
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField 
                                            fullWidth 
                                            label="Subject" 
                                            variant="outlined" 
                                            size="medium"
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <TextField
                                            fullWidth
                                            multiline
                                            rows={4}
                                            label="Message"
                                            variant="outlined"
                                            size="medium"
                                        />
                                    </Grid>
                                </Grid>

                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        mt: { xs: 2.5, md: 3 },
                                        py: { xs: 1, sm: 1.5 },
                                        borderRadius: "30px",
                                        fontWeight: 600,
                                        backgroundColor: "#E91E63",
                                        "&:hover": {
                                            backgroundColor: "#C2185B",
                                        },
                                        fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" }
                                    }}
                                >
                                    Send Message
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Map */}
            <Box
                sx={{
                    position: "relative",
                    height: { xs: "250px", sm: "350px", md: "450px" },
                    overflow: "hidden",
                }}
            >
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.064925037047!2d-122.41941568468218!3d37.7749297797595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b68bff3%3A05a2b25ef02b5d742!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1701234567890!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </Box>

            {/* Consultation Dialog - SIMPLE ONE-STEP FORM */}
            <Dialog
                open={openConsultationDialog}
                onClose={handleCloseConsultation}
                maxWidth="sm"
                fullWidth
                sx={{
                    "& .MuiDialog-paper": {
                        borderRadius: "12px",
                        overflow: "hidden",
                        maxWidth: "600px",
                    },
                }}
            >
                <DialogTitle sx={{ 
                    m: 0, 
                    p: 3,
                    backgroundColor: "#1A5F7A",
                    color: "white",
                }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <Avatar sx={{ bgcolor: "#E91E63", width: 48, height: 48 }}>
                                <MedicalServices />
                            </Avatar>
                            <Box>
                                <Typography
                                    variant="h5"
                                    component="div"
                                    fontWeight="bold"
                                    sx={{ fontSize: { xs: "1.25rem", sm: "1.5rem" } }}
                                >
                                    Free Consultation Request
                                </Typography>
                                <Typography variant="body2" sx={{ opacity: 0.9, mt: 0.5 }}>
                                    Get personalized healthcare advice from our experts
                                </Typography>
                            </Box>
                        </Box>
                        <IconButton
                            onClick={handleCloseConsultation}
                            sx={{
                                color: "white",
                                backgroundColor: "rgba(255,255,255,0.1)",
                                "&:hover": {
                                    backgroundColor: "rgba(255,255,255,0.2)",
                                },
                            }}
                        >
                            <Close />
                        </IconButton>
                    </Box>
                </DialogTitle>

                <DialogContent sx={{ p: { xs: 3, sm: 4 } }}>
                    <Box sx={{ mb: 3 }}>
                        <Chip 
                            label="100% Free • No Obligation"
                            color="success" 
                            variant="outlined"
                            sx={{ mb: 2 }}
                        />
                        <Typography variant="body2" color="text.secondary">
                            Fill out this simple form and our healthcare expert will call you within 2 hours to discuss your needs.
                        </Typography>
                    </Box>

                    <form onSubmit={handleSubmitConsultation}>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    fullWidth
                                    label="Your Name *"
                                    name="name"
                                    value={consultationForm.name}
                                    onChange={handleFormChange}
                                    required
                                    size="medium"
                                    sx={{ mb: 2 }}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    fullWidth
                                    label="Mobile Number *"
                                    name="phone"
                                    value={consultationForm.phone}
                                    onChange={handleFormChange}
                                    required
                                    size="medium"
                                    sx={{ mb: 2 }}
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    value={consultationForm.email}
                                    onChange={handleFormChange}
                                    size="medium"
                                    sx={{ mb: 2 }}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <FormControl fullWidth sx={{ mb: 2 }}>
                                    <InputLabel>Select Service *</InputLabel>
                                    <Select
                                        label="Select Service *"
                                        name="service"
                                        value={consultationForm.service}
                                        onChange={handleFormChange}
                                        required
                                    >
                                        <MenuItem value="">Select a service</MenuItem>
                                        {serviceOptions.map((service, index) => (
                                            <MenuItem key={index} value={service}>
                                                {service}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    fullWidth
                                    label="Patient Age"
                                    name="patientAge"
                                    value={consultationForm.patientAge}
                                    onChange={handleFormChange}
                                    size="medium"
                                    sx={{ mb: 2 }}
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    fullWidth
                                    label="Patient Condition"
                                    name="patientCondition"
                                    value={consultationForm.patientCondition}
                                    onChange={handleFormChange}
                                    size="medium"
                                    placeholder="e.g., Post-surgery, Diabetes, Hypertension, etc."
                                    sx={{ mb: 2 }}
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    fullWidth
                                    label="Preferred Consultation Time"
                                    name="preferredTime"
                                    value={consultationForm.preferredTime}
                                    onChange={handleFormChange}
                                    size="medium"
                                    placeholder="e.g., Morning, Evening, Weekend"
                                    sx={{ mb: 2 }}
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={3}
                                    label="Additional Details"
                                    name="message"
                                    value={consultationForm.message}
                                    onChange={handleFormChange}
                                    size="medium"
                                    placeholder="Please share any specific concerns, symptoms, or requirements..."
                                    sx={{ mb: 3 }}
                                />
                            </Grid>
                        </Grid>

                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            size="large"
                            sx={{
                                py: 1.5,
                                borderRadius: "8px",
                                fontWeight: "bold",
                                backgroundColor: "#E91E63",
                                "&:hover": {
                                    backgroundColor: "#C2185B",
                                },
                                fontSize: "1rem"
                            }}
                        >
                            Submit Consultation Request
                        </Button>
                    </form>

                    <Box sx={{ mt: 3, textAlign: "center" }}>
                        <Typography variant="body2" color="text.secondary">
                            By submitting, you agree to our Terms & Privacy Policy
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
                            <Button
                                startIcon={<Phone />}
                                variant="text"
                                size="small"
                                onClick={() => window.location.href = "tel:0120-409-9066"}
                                sx={{ color: "#1A5F7A" }}
                            >
                                Call: 0120-409-9066
                            </Button>
                            <Button
                                startIcon={<WhatsApp />}
                                variant="text"
                                size="small"
                                onClick={() => window.open("https://wa.me/919876543210", "_blank")}
                                sx={{ color: "#25D366" }}
                            >
                                WhatsApp
                            </Button>
                        </Box>
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Contact;