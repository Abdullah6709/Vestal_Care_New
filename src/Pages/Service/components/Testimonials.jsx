import React from "react";
import { Grid, Typography, Paper, Box, Avatar, Rating } from "@mui/material";

const Testimonials = ({ testimonials, isMobile }) => {
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
        Patient Experiences
      </Typography>
      <Grid
        container
        spacing={{ xs: 3, sm: 4, md: 4 }}
        sx={{ mt: { xs: 1, sm: 2 } }}
      >
        {testimonials.map((testimonial, index) => (
          <Grid size={{xs:12, md:4}} key={index}>
            <Paper
              sx={{
                p: { xs: 3, sm: 4 },
                height: "100%",
                borderRadius: "12px",
                backgroundColor: "#F8F9FA",
                border: "1px solid #E3F2FD",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Avatar
                  src={testimonial.avatar}
                  sx={{
                    mr: 2,
                    width: { xs: 60, sm: 70 },
                    height: { xs: 60, sm: 70 },
                    border: "3px solid #1A5F7A",
                  }}
                />
                <Box>
                  <Typography
                    fontWeight="bold"
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                      color: "#1A5F7A",
                    }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="#2E7D32"
                    sx={{
                      fontSize: {
                        xs: "0.8125rem",
                        sm: "0.875rem",
                        md: "0.9rem",
                      },
                      fontWeight: 500,
                    }}
                  >
                    {testimonial.role}
                  </Typography>
                </Box>
              </Box>
              <Rating
                value={testimonial.rating}
                readOnly
                size={isMobile ? "small" : "medium"}
                sx={{ mb: 3, color: "#FFB74D" }}
              />
              <Typography
                fontStyle="italic"
                color="#5D6D7E"
                sx={{
                  fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" },
                  flexGrow: 1,
                  lineHeight: 1.7,
                  position: "relative",
                  "&:before": {
                    content: '"\\201C"',
                    fontSize: "3rem",
                    color: "#1A5F7A",
                    position: "absolute",
                    left: "-8px",
                    top: "-20px",
                    opacity: 0.3,
                  },
                  pl: 2,
                }}
              >
                {testimonial.content}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;