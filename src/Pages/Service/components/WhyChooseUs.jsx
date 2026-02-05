import React from "react";
import {
  Grid,
  Typography,
  Paper,
  Box,
  Avatar,
} from "@mui/material";
import {
  VerifiedUser,
  CurrencyRupee,
  SupportAgent,
} from "@mui/icons-material";

const WhyChooseUs = ({ tollFreeNumber }) => {
  return (
    <Box
      sx={{
        mb: { xs: 4, sm: 6, md: 8 },
        p: { xs: 3, sm: 4, md: 5 },
      }}
    >
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        align="center"
        fontWeight="bold"
        sx={{
          fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
          color: "#1A5F7A",
          mb: { xs: 3, sm: 4, md: 5 },
        }}
      >
        Why Choose Healthcar at Home?
      </Typography>
      <Grid
        container
        spacing={{ xs: 3, sm: 4, md: 4 }}
        sx={{ mt: { xs: 1, sm: 2 } }}
      >
        <Grid size={{xs:12, md:6, lg:4}}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4 },
              height: "100%",
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              border: "1px solid #E3F2FD",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 8px 16px rgba(26, 95, 122, 0.1)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: { xs: 3, sm: 3 },
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: "#E8F5E9",
                  color: "#2E7D32",
                  mr: 2,
                  width: { xs: 56, sm: 64, md: 72 },
                  height: { xs: 56, sm: 64, md: 72 },
                }}
              >
                <VerifiedUser
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                  }}
                />
              </Avatar>
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                    color: "#1A5F7A",
                  }}
                >
                  Certified Professionals
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: "0.875rem", sm: "0.9rem" },
                  }}
                >
                  INC Registered Nurses
                </Typography>
              </Box>
            </Box>
            <Typography
              sx={{
                fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" },
                color: "#5D6D7E",
                lineHeight: 1.7,
              }}
            >
              All our healthcare professionals are registered with Indian
              Nursing Council and undergo regular training. We verify
              qualifications, experience, and conduct thorough background
              checks.
            </Typography>
          </Paper>
        </Grid>
        <Grid size={{xs:12, md:6, lg:4}}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4 },
              height: "100%",
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              border: "1px solid #E3F2FD",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 8px 16px rgba(26, 95, 122, 0.1)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: { xs: 3, sm: 3 },
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: "#FFF3E0",
                  color: "#EF6C00",
                  mr: 2,
                  width: { xs: 56, sm: 64, md: 72 },
                  height: { xs: 56, sm: 64, md: 72 },
                }}
              >
                <CurrencyRupee
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                  }}
                />
              </Avatar>
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                    color: "#1A5F7A",
                  }}
                >
                  Transparent Pricing
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: "0.875rem", sm: "0.9rem" },
                  }}
                >
                  Fixed Rates - No Hidden Charges
                </Typography>
              </Box>
            </Box>
            <Typography
              sx={{
                fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" },
                color: "#5D6D7E",
                lineHeight: 1.7,
              }}
            >
              Clear fixed pricing with detailed invoices. No price fluctuations.
              We help with insurance claims and offer flexible payment options
              including UPI, credit cards, and cash payments.
            </Typography>
          </Paper>
        </Grid>
        <Grid size={{xs:12, md:6, lg:4}}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4 },
              height: "100%",
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              border: "1px solid #E3F2FD",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 8px 16px rgba(26, 95, 122, 0.1)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: { xs: 3, sm: 3 },
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: "#E3F2FD",
                  color: "#1A5F7A",
                  mr: 2,
                  width: { xs: 56, sm: 64, md: 72 },
                  height: { xs: 56, sm: 64, md: 72 },
                }}
              >
                <SupportAgent
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                  }}
                />
              </Avatar>
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                    color: "#1A5F7A",
                  }}
                >
                  24/7 Support
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: "0.875rem", sm: "0.9rem" },
                  }}
                >
                  Toll-Free: {tollFreeNumber}
                </Typography>
              </Box>
            </Box>
            <Typography
              sx={{
                fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" },
                color: "#5D6D7E",
                lineHeight: 1.7,
              }}
            >
              Round-the-clock assistance with toll-free support in Hindi,
              English, and regional languages. Emergency services available
              across all major Indian cities with quick response times.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;