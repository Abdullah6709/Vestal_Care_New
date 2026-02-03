import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

import image1 from "../assets/young-orthodontist.jpg";
import image2 from "../assets/healthcare-homecare-and-caregiver-with-grandma-to-support-her-in-retirement-medical-and-old-age--e1714026286978.jpg";
import image3 from "../assets/health-insurance-service-young-asian-caregiver-nurse-examine-senior-man-or-woman-patient-at-home-e1714026333745.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Counter animation state
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = 15;
      const duration = 2000; // 2 seconds
      const stepTime = 20;
      const increment = end / (duration / stepTime);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);
    }
  }, [isInView]);

  // Animation variants for staggered images
  const imageVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <Box
      sx={{
        py: 5,
        backgroundColor: "#fff",
        overflow: "hidden",
        px: { xs: 2, sm: 3, md: 5 },
      }}
    >
      <Grid
        container
        spacing={6}
        alignItems="center"
        justifyContent="center"
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        {/* LEFT SIDE - Images */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            ref={ref}
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "repeat(2, 200px)",
              gap: 2,
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: 500,
              mx: "auto",
            }}
          >
            {[image1, image2, image3].map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt={`Image ${i + 1}`}
                custom={i}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  borderRadius: "16px",
                  width: "100%",
                  height: i === 0 ? "420px" : "200px",
                  gridColumn: i === 0 ? "1 / 2" : "auto",
                  gridRow: i === 0 ? "1 / 3" : "auto",
                  objectFit: "cover",
                }}
              />
            ))}

            {/* Circular Badge */}
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              style={{
                position: "absolute",
                top: "35%",
                left: "35%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#3FB8AF",
                color: "#fff",
                width: 130,
                height: 130,
                borderRadius: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", lineHeight: 1 }}
              >
                {count}+
              </Typography>
              <Typography
                variant="body2"
                sx={{ textAlign: "center", fontWeight: 500, mt: 0.5 }}
              >
                YEARS <br /> EXPERIENCE
              </Typography>
            </motion.div>
          </Box>
        </Grid>

        {/* RIGHT SIDE - Text */}
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Box sx={{ maxWidth: 500 }}>
              <Typography
                variant="subtitle2"
                sx={{ color: "#E91E63", fontWeight: "bold", mb: 1 }}
              >
                ABOUT VESTAL HEALTH CARE
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  lineHeight: 1.3,
                  color: "#111",
                }}
              >
                Compassionate health care for your loved ones
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "#666", mb: 3, lineHeight: 1.8 }}
              >
                At Vestal Health Care, we provide professional, compassionate
                nursing services tailored to meet the unique needs of each
                patient. Our team of licensed nurses and caregivers is dedicated
                to ensuring the highest quality of care in the comfort of your
                home. We believe in treating every patient with dignity,
                respect, and personalized attention.
              </Typography>

              <FormControlLabel
                control={<Checkbox defaultChecked sx={{ color: "#3FB8AF" }} />}
                label={
                  <Typography sx={{ fontWeight: "bold" }}>
                    Committed to your health and well-being.
                  </Typography>
                }
              />

              {/* <Box sx={{ mt: 4 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#E91E63",
                    color: "#fff",
                    px: 4,
                    py: 1.5,
                    borderRadius: "30px",
                    textTransform: "none",
                    fontWeight: "bold",
                    "&:hover": { backgroundColor: "#d81b60" },
                  }}
                >
                  Discover More
                </Button>
              </Box> */}
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
