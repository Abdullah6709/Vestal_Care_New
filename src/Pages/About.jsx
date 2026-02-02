import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import image1 from "../assets/get-started-1.jpg";
import AboutSection from "../components/AboutCare";
import StatsBar from "../components/StatsBar.jsx";
import EasyStepsSection from "../components/EasyStepsSection";
import OurCapabilities from "../components/OurCap";

const AboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ fontFamily: "Poppins, sans-serif", overflowX: "hidden" }}>
      {/* Banner Section */}
      <Box
        sx={{
          backgroundColor: "#f8f9fa",
          width: "100%",
          py: { xs: 6, sm: 8, md: 10, lg: 12 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: "center",
              maxWidth: 800,
              mx: "auto",
            }}
          >
            <Typography
              variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
              fontWeight="bold"
              sx={{
                color: "#2c3e50",
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              Compassionate Home Care Nursing
            </Typography>

            <Typography
              variant={isMobile ? "body1" : "h6"}
              sx={{
                color: "#ECA3C3",
                fontWeight: 600,
                mb: 3,
              }}
            >
              Your Trusted Home Healthcare Partner
            </Typography>

            <Typography
              variant="body1"
              sx={{
                py: 2,
                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                lineHeight: 1.6,
                color: "#555",
                mb: 4,
                px: { xs: 1, sm: 0 },
              }}
            >
              We provide reliable and compassionate home nursing care services.
              Your comfort, safety, and well-being are our top priorities. We
              are dedicated to supporting patients and families with
              professional healthcare services in the comfort of their homes.
              Our experienced nurses and caregivers deliver personalized care to
              ensure quality treatment, emotional support, and peace of mind. We
              focus on trust, affordability, and excellence in every service we
              provide
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexWrap: "wrap",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Button
                variant="contained"
                size={isMobile ? "medium" : "large"}
                sx={{
                  backgroundColor: "#ECA3C3",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#e68bb2" },
                  borderRadius: "25px",
                  px: { xs: 3, sm: 4 },
                  py: { xs: 1, sm: 1.5 },
                  minWidth: { xs: "100%", sm: "auto" },
                }}
              >
                Schedule Consultation
              </Button>

              <Button
                variant="outlined"
                size={isMobile ? "medium" : "large"}
                sx={{
                  borderColor: "#ECA3C3",
                  color: "#ECA3C3",
                  "&:hover": {
                    borderColor: "#e68bb2",
                    backgroundColor: "rgba(236, 163, 195, 0.1)",
                  },
                  borderRadius: "25px",
                  px: { xs: 3, sm: 4 },
                  py: { xs: 1, sm: 1.5 },
                  minWidth: { xs: "100%", sm: "auto" },
                }}
              >
                View Services
              </Button>
            </Box>
          </Box>

          {/* Key Features */}
          <Grid container spacing={3} sx={{ mt: { xs: 4, sm: 5, md: 6 } }}>
            {[
              {
                title: "24/7 Care",
                description: "Round-the-clock medical supervision",
                color: "#4CAF50",
              },
              {
                title: "Personalized Plans",
                description: "Tailored to health needs",
                color: "#2196F3",
              },
              {
                title: "Medication Management",
                description: "Professional administration",
                color: "#FF9800",
              },
              {
                title: "Recovery Support",
                description: "Post-hospitalization care",
                color: "#9C27B0",
              },
            ].map((feature, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Box
                  sx={{
                    textAlign: "center",
                    p: { xs: 1.5, sm: 2 },
                    bgcolor: "white",
                    borderRadius: 2,
                    boxShadow: 1,
                    height: "100%",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 3,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 50, sm: 60 },
                      height: { xs: 50, sm: 60 },
                      borderRadius: "50%",
                      bgcolor: `${feature.color}15`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: feature.color,
                        fontSize: { xs: 25, sm: 30 },
                      }}
                    />
                  </Box>
                  <Typography
                    variant={isMobile ? "subtitle1" : "h6"}
                    sx={{ color: "#2c3e50", mb: 1, fontWeight: 600 }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#666",
                      fontSize: { xs: "0.85rem", sm: "0.9rem" },
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 4, sm: 6 } }}>
        <AboutSection />
      </Box>

      <Box sx={{ py: { xs: 4, sm: 6 } }}>
        <StatsBar />
      </Box>

      {/* Our Value Section */}
      <Box
        sx={{
          backgroundImage: `url(${image1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: { xs: "scroll", md: "fixed" },
          color: "#fff",
          py: { xs: 6, sm: 8, md: 10 },
          px: { xs: 2, sm: 3, md: 4 },
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              maxWidth: 500,
              bgcolor: "rgba(0, 0, 0, 0.7)",
              p: { xs: 3, sm: 4, md: 5 },
              borderRadius: 3,
              position: "relative",
              zIndex: 1,
              mx: { xs: "auto", md: 0 },
            }}
          >
            <Typography
              variant={isMobile ? "subtitle1" : "h6"}
              sx={{
                color: "#ECA3C3",
                textTransform: "uppercase",
                mb: 1,
                fontWeight: 600,
              }}
            >
              Our Nursing Philosophy
            </Typography>
            <Typography
              variant={isMobile ? "h5" : "h4"}
              sx={{ fontWeight: 700, mb: 4, lineHeight: 1.2 }}
            >
              Excellence in Home Healthcare
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Box>
                <Typography
                  variant={isMobile ? "subtitle1" : "h6"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    fontWeight: 600,
                  }}
                >
                  <CheckCircleIcon
                    sx={{ color: "#ECA3C3", fontSize: { xs: 20, sm: 24 } }}
                  />
                  Our Vision
                </Typography>
                <Typography
                  sx={{
                    ml: { xs: 3, sm: 4 },
                    mt: 1,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                  }}
                >
                  Leading provider of compassionate home nursing care.
                  Empowering patients to thrive at home.
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant={isMobile ? "subtitle1" : "h6"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    fontWeight: 600,
                  }}
                >
                  <CheckCircleIcon
                    sx={{ color: "#ECA3C3", fontSize: { xs: 20, sm: 24 } }}
                  />
                  Our Mission
                </Typography>
                <Typography
                  sx={{
                    ml: { xs: 3, sm: 4 },
                    mt: 1,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                  }}
                >
                  Deliver evidence-based nursing care with dignity and respect.
                  Ensure optimal health outcomes.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Services Section */}
      <Box
        sx={{
          textAlign: "center",
          py: { xs: 6, sm: 8, md: 10 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant={isMobile ? "h5" : isTablet ? "h4" : "h3"}
            sx={{ fontWeight: 700, mb: 2 }}
          >
            Home Nursing Services
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "gray",
              mb: 5,
              maxWidth: 600,
              mx: "auto",
              fontSize: { xs: "0.95rem", sm: "1rem" },
            }}
          >
            Our registered nurses provide medical and supportive services for
            your healthcare needs.
          </Typography>

          <Grid
            container
            spacing={{ xs: 2, sm: 3, md: 4 }}
            justifyContent="center"
          >
            {[
              {
                title: "Skilled Nursing",
                text: "Wound care, IV therapy, injections, and vital signs monitoring by licensed nurses.",
                icon: "💉",
              },
              {
                title: "Chronic Care",
                text: "Specialized care for diabetes, hypertension, heart conditions with monitoring.",
                icon: "❤️",
              },
              {
                title: "Post-Surgery Care",
                text: "Recovery support including dressing changes, pain management, mobility help.",
                icon: "🩹",
              },
            ].map((service, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                <Card
                  elevation={2}
                  sx={{
                    borderRadius: 3,
                    py: { xs: 3, sm: 4 },
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: 6,
                    },
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h3"
                      sx={{
                        color: "#3FB8AF",
                        fontSize: { xs: "2.5rem", sm: "3rem" },
                      }}
                    >
                      {service.icon}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        mt: 2,
                        fontWeight: 600,
                        fontSize: { xs: "1.1rem", sm: "1.25rem" },
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      sx={{
                        mt: 1,
                        color: "text.secondary",
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                      }}
                    >
                      {service.text}
                    </Typography>
                    <Button
                      variant="contained"
                      size={isMobile ? "small" : "medium"}
                      sx={{
                        mt: 3,
                        backgroundColor: "#ECA3C3",
                        borderRadius: 5,
                        px: { xs: 3, sm: 4 },
                        "&:hover": { backgroundColor: "#E68BB2" },
                      }}
                    >
                      Learn More →
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 4, sm: 6 } }}>
        <EasyStepsSection />
      </Box>

      <Box sx={{ py: { xs: 4, sm: 6 } }}>
        <OurCapabilities />
      </Box>
    </Box>
  );
};

export default AboutUs;
