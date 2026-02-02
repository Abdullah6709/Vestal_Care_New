import React from "react";
import { Box, Grid, Typography, Avatar, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { Facebook, Twitter, YouTube, Instagram } from "@mui/icons-material";
import albert from "../assets/Team-3-1.jpg";
import an from "../assets/Team-1-1.jpg";
import sara from "../assets/Team-2-3.jpg";

const teamMembers = [
    {
        name: "Albert Reagan",
        role: "Founder",
        img: albert,
    },
    {
        name: "Teresa Wright",
        role: "Co - Founder",
        img: an,
    },
    {
        name: "Sara Newman",
        role: "Take Care of Nursing",
        img: sara,
    },
];

const MeetOurTeam = () => {
    return (
        <Box sx={{ backgroundColor: "#fff" }}>
            {/* Section Title */}
            <Box sx={{ textAlign: "center", mb: 6 }}>
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: "#E91E63",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        //mb: 1,
                    }}
                >
                    Meet Our Team
                </Typography>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 600,
                        color: "#000",
                    }}
                >
                    A private nurse that’s always <br /> there for you
                </Typography>
            </Box>

            {/* Team Grid */}
            <Grid
                container
                spacing={4}
                justifyContent="center"
                sx={{ maxWidth: 1100, mx: "auto" }}
            >
                {teamMembers.map((member, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Box sx={{ textAlign: "center" }}>
                                <Avatar
                                    src={member.img} // ✅ Fixed line
                                    alt={member.name}
                                    sx={{
                                        width: 250,
                                        height: 300,
                                        borderRadius: "30px",
                                        mx: "auto",
                                        mb: 2,
                                        boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                                        objectFit: "cover",
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 700, color: "#000" }}
                                >
                                    {member.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: "text.secondary", mb: 2 }}
                                >
                                    {member.role.toUpperCase()}
                                </Typography>

                                {/* Social Icons */}
                                <Box>
                                    {[Facebook, Twitter, YouTube, Instagram].map((Icon, i) => (
                                        <IconButton
                                            key={i}
                                            sx={{
                                                color: "#fff",
                                                backgroundColor: "#E91E63",
                                                mx: 0.5,
                                                "&:hover": {
                                                    backgroundColor: "#C2185B",
                                                    transform: "scale(1.1)",
                                                },
                                                transition: "0.3s",
                                            }}
                                        >
                                            <Icon sx={{ fontSize: 18 }} />
                                        </IconButton>
                                    ))}
                                </Box>
                            </Box>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default MeetOurTeam;
