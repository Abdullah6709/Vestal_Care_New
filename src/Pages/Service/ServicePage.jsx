import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Chip,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Schedule,
  VerifiedUser,
  HealthAndSafety,
} from "@mui/icons-material";

// Import components
import ServiceCard from "./components/ServiceCard";
import BookingDialog from "./components/BookingDialog";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQSection";
import ContactCTA from "./components/ContactCTA";

// Import data
import { services } from "./data/servicesData.jsx";
import { testimonials } from "./data/testimonialsData.jsx";
import { faqs } from "./data/faqsData.jsx";
import { tollFreeNumber } from "./data/constants.jsx";

const ServicePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedService, setSelectedService] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedService(null);
  };

  return (
    <Box sx={{ backgroundColor: "#f0f7ff" }}>
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 3, sm: 4, md: 6 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {/* Hero Section */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 4, sm: 6, md: 8 },
            p: { xs: 3, sm: 4, md: 5 },
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              background: "#2c3e50",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: {
                xs: "1.75rem",
                sm: "2.5rem",
                md: "3rem",
                lg: "3.5rem",
              },
              lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },
            }}
          >
            Home Healthcare Services in India
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            paragraph
            sx={{
              maxWidth: 800,
              mx: "auto",
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
              px: { xs: 1, sm: 2 },
              color: "#5D6D7E",
              mt: 2,
            }}
          >
            Professional Health Care at Your Doorstep
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 800,
              mx: "auto",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              px: { xs: 1, sm: 2 },
              color: "#7F8C8D",
              mb: 3,
            }}
          >
            Certified doctors, nurses, and caregivers providing personalized
            healthcare services in the comfort of your home across India.
          </Typography>
          <Box
            sx={{
              mt: { xs: 3, sm: 4, md: 5 },
              display: "flex",
              gap: { xs: 1, sm: 1.5, md: 2 },
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Chip
              icon={<Schedule sx={{ fontSize: { xs: "small", sm: "medium" } }} />}
              label="24/7 Emergency Service"
              color="primary"
              sx={{
                backgroundColor: "#E8F5E9",
                color: "#2E7D32",
                fontWeight: 500,
              }}
              size={isMobile ? "small" : "medium"}
            />
            <Chip
              icon={
                <VerifiedUser sx={{ fontSize: { xs: "small", sm: "medium" } }} />
              }
              label="Licensed Professionals"
              color="primary"
              sx={{
                backgroundColor: "#E3F2FD",
                color: "#1A5F7A",
                fontWeight: 500,
              }}
              size={isMobile ? "small" : "medium"}
            />
            <Chip
              icon={
                <HealthAndSafety
                  sx={{ fontSize: { xs: "small", sm: "medium" } }}
                />
              }
              label="All Medical Services"
              color="primary"
              sx={{
                backgroundColor: "#FCE4EC",
                color: "#C2185B",
                fontWeight: 500,
              }}
              size={isMobile ? "small" : "medium"}
            />
          </Box>
        </Box>

        {/* Services Section */}
        <Box sx={{ mb: { xs: 4, sm: 6, md: 8 } }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            align="center"
            fontWeight="bold"
            sx={{
              mb: { xs: 3, sm: 4, md: 6 },
              fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
              color: "#1A5F7A",
              position: "relative",
              "&:after": {
                content: '""',
                display: "block",
                width: "100px",
                height: "4px",
                backgroundColor: "#2E7D32",
                margin: "16px auto 0",
                borderRadius: "2px",
              },
            }}
          >
            Our Healthcare Services
          </Typography>
          <Grid container spacing={{ xs: 3, sm: 4, md: 4 }}>
            {services.map((service) => (
              <Grid size={{xs:12, sm:6, md:4}} key={service.id}>
                <ServiceCard
                  service={service}
                  onServiceClick={handleServiceClick}
                  isMobile={isMobile}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Why Choose Us Section */}
        <WhyChooseUs tollFreeNumber={tollFreeNumber} />

        {/* Testimonials Section */}
        <Testimonials testimonials={testimonials} isMobile={isMobile} />

        {/* FAQ Section */}
        <FAQSection faqs={faqs} />

        {/* Contact CTA */}
        <ContactCTA tollFreeNumber={tollFreeNumber} isMobile={isMobile} />

        {/* Booking Dialog */}
        <BookingDialog
          open={openDialog}
          onClose={handleCloseDialog}
          selectedService={selectedService}
        />
      </Container>
    </Box>
  );
};

export default ServicePage;