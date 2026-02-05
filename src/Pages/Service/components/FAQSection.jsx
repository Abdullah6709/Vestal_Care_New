import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const FAQSection = ({ faqs }) => {
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
        Frequently Asked Questions
      </Typography>
      <Box sx={{ maxWidth: 1200, mx: "auto", mt: { xs: 2, sm: 3, md: 4 } }}>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            elevation={0}
            sx={{
              mb: { xs: 1.5, sm: 2 },
              backgroundColor: "#FFFFFF",
              borderRadius: "8px !important",
              border: "1px solid #E0E0E0",
              "&:before": { display: "none" },
              "&.Mui-expanded": {
                margin: { xs: "8px 0", sm: "16px 0" },
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore sx={{ color: "#1A5F7A" }} />}
              sx={{
                minHeight: { xs: 48, sm: 56 },
                "&.Mui-expanded": {
                  minHeight: { xs: 48, sm: 56 },
                  borderBottom: "1px solid #E0E0E0",
                },
              }}
            >
              <Typography
                fontWeight="600"
                sx={{
                  fontSize: { xs: "0.95rem", sm: "1rem", md: "1.125rem" },
                  color: "#1A5F7A",
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: { xs: 2, sm: 3 } }}>
              <Typography
                color="#5D6D7E"
                sx={{
                  fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" },
                  lineHeight: 1.7,
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQSection;