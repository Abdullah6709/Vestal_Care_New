import React from "react";
import { Paper, Typography, Button, Box } from "@mui/material";
import { Phone, WhatsApp, Email } from "@mui/icons-material";

const ContactCTA = ({ tollFreeNumber, isMobile }) => {
  return (
    <Paper
      sx={{
        p: { xs: 4, sm: 5, md: 6 },
        textAlign: "center",
        background: "linear-gradient(135deg, #1A5F7A 0%, #2E7D32 100%)",
        color: "white",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(26, 95, 122, 0.2)",
        mb: { xs: 3, sm: 4, md: 6 },
        position: "relative",
        overflow: "hidden",
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)",
        },
      }}
    >
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        fontWeight="bold"
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          position: "relative",
          zIndex: 1,
        }}
      >
        Need Healthcare at Home?
      </Typography>
      <Typography
        variant="h5"
        paragraph
        sx={{
          mb: { xs: 4, sm: 5 },
          opacity: 0.9,
          fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
          position: "relative",
          zIndex: 1,
        }}
      >
        Get Free Consultation with Our Healthcare Experts
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: { xs: 2, sm: 3, md: 4 },
          justifyContent: "center",
          flexWrap: "wrap",
          flexDirection: { xs: "column", sm: "row" },
          position: "relative",
          zIndex: 1,
        }}
      >
        <Button
          variant="contained"
          size={isMobile ? "large" : "large"}
          startIcon={<Phone />}
          sx={{
            backgroundColor: "#FFFFFF",
            color: "#1A5F7A",
            "&:hover": {
              backgroundColor: "#F5F5F5",
              transform: "translateY(-2px)",
            },
            width: { xs: "100%", sm: "auto" },
            minWidth: { sm: "220px" },
            py: { xs: 1.5, sm: 2 },
            fontSize: { xs: "1rem", sm: "1.1rem" },
            fontWeight: "bold",
            borderRadius: "50px",
            transition: "all 0.3s",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
          onClick={() => (window.location.href = "tel:0120-409-9066")}
        >
          Call Toll-Free: 0120-409-9066
        </Button>
        <Button
          variant="outlined"
          size={isMobile ? "large" : "large"}
          startIcon={<WhatsApp />}
          sx={{
            borderColor: "#FFFFFF",
            color: "#FFFFFF",
            "&:hover": {
              borderColor: "#25D366",
              backgroundColor: "#25D366",
              transform: "translateY(-2px)",
            },
            width: { xs: "100%", sm: "auto" },
            minWidth: { sm: "220px" },
            py: { xs: 1.5, sm: 2 },
            fontSize: { xs: "1rem", sm: "1.1rem" },
            fontWeight: "bold",
            borderRadius: "50px",
            transition: "all 0.3s",
          }}
          onClick={() =>
            window.open("https://wa.me/+919599062557", "_blank")
          }
        >
          WhatsApp Us
        </Button>
        <Button
          variant="outlined"
          size={isMobile ? "large" : "large"}
          startIcon={<Email />}
          sx={{
            borderColor: "#FFFFFF",
            color: "#FFFFFF",
            "&:hover": {
              borderColor: "#F5F5F5",
              backgroundColor: "rgba(255,255,255,0.1)",
              transform: "translateY(-2px)",
            },
            width: { xs: "100%", sm: "auto" },
            minWidth: { sm: "220px" },
            py: { xs: 1.5, sm: 2 },
            fontSize: { xs: "1rem", sm: "1.1rem" },
            fontWeight: "bold",
            borderRadius: "50px",
            transition: "all 0.3s",
          }}
          onClick={() =>
            (window.location.href = "mailto:info@vestalhealth.in")
          }
        >
          Email: info@vestalhealth.in
        </Button>
      </Box>
    </Paper>
  );
};

export default ContactCTA;