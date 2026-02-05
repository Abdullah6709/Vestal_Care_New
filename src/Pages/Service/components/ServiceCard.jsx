import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
  Fade,
} from "@mui/material";
import { CheckCircle, CurrencyRupee } from "@mui/icons-material";

const ServiceCard = ({ service, onServiceClick, isMobile }) => {
  return (
    <Fade in={true} timeout={1000}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 12px 20px rgba(0,0,0,0.1)",
          },
          border: "1px solid #e0e0e0",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={service.image}
          alt={service.title}
          sx={{ objectFit: "cover" }}
        />
        <CardContent sx={{ flexGrow: 1, p: { xs: 2, sm: 3 } }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Avatar
              sx={{
                bgcolor: "#2E7D32",
                mr: 2,
                width: { xs: 40, sm: 48 },
                height: { xs: 40, sm: 48 },
              }}
            >
              {service.icon}
            </Avatar>
            <Typography
              variant="h6"
              component="h3"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                color: "#1A5F7A",
              }}
            >
              {service.title}
            </Typography>
          </Box>
          <Typography
            color="text.secondary"
            paragraph
            sx={{
              fontSize: { xs: "0.875rem", sm: "0.9rem", md: "1rem" },
              lineHeight: 1.6,
            }}
          >
            {service.description}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <List dense sx={{ mb: 2 }}>
            {service.features.map((feature, index) => (
              <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                <ListItemIcon sx={{ minWidth: { xs: 30, sm: 36 } }}>
                  <CheckCircle sx={{ color: "#2E7D32" }} fontSize="small" />
                </ListItemIcon>
                <ListItemText
                  primary={feature}
                  primaryTypographyProps={{
                    variant: "body2",
                    sx: {
                      fontSize: {
                        xs: "0.75rem",
                        sm: "0.8125rem",
                        md: "0.875rem",
                      },
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
          {/* Price Display */}
          <Box
            sx={{
              mt: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#F8F9FA",
              p: 2,
              borderRadius: "8px",
              mx: -2,
              mb: -2,
              mt: 2,
              position: "relative",
            }}
          >
            <Box sx={{ textAlign: "center", position: "relative" }}>
              <Typography
                component="span"
                sx={{
                  position: "absolute",
                  top: "-4px",
                  right: "-10px",
                  fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
                  color: "#1A5F7A",
                  fontWeight: "bold",
                }}
              >
                *
              </Typography>
              <Typography
                variant="h5"
                color="#1A5F7A"
                fontWeight="bold"
                sx={{
                  fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 0.5,
                }}
              >
                <CurrencyRupee fontSize="medium" />
                {service.priceDisplay.replace("*", "")}
              </Typography>
            </Box>
          </Box>
        </CardContent>
        <Box sx={{ p: 2, pt: 0 }}>
          <Button
            fullWidth
            variant="contained"
            size={isMobile ? "medium" : "large"}
            onClick={() => onServiceClick(service)}
            sx={{
              py: isMobile ? 1 : 1.5,
              fontSize: { xs: "0.875rem", sm: "0.9rem", md: "1rem" },
              backgroundColor: "#1A5F7A",
              "&:hover": {
                backgroundColor: "#15455A",
              },
              fontWeight: "bold",
              borderRadius: "8px",
            }}
          >
            Book Service
          </Button>
        </Box>
      </Card>
    </Fade>
  );
};

export default ServiceCard;