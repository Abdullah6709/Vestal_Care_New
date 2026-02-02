import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const stats = [
    { value: 2500, label: "Happy Patients" },
    { value: 36000, label: "Successful Home Care" },
    { value: 15, label: "Years Of Experience" },
    { value: 25, label: "Professional Nurses" },
];

const StatsBar = () => {
    const [visible, setVisible] = useState(false);
    const [counts, setCounts] = useState(stats.map(() => 0));
    const sectionRef = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    // Animate count-up
    useEffect(() => {
        if (visible) {
            stats.forEach((stat, index) => {
                let start = 0;
                const end = stat.value;
                const duration = 2000; // 2 seconds
                const increment = end / (duration / 16);

                const timer = setInterval(() => {
                    start += increment;
                    if (start >= end) {
                        start = end;
                        clearInterval(timer);
                    }
                    setCounts((prev) => {
                        const newCounts = [...prev];
                        newCounts[index] = Math.floor(start);
                        return newCounts;
                    });
                }, 16);
            });
        }
    }, [visible]);

    // Format value
    const formatValue = (num, label) => {
        if (label.includes("Home Care")) return `${(num / 1000).toFixed(0)}K`;
        if (label.includes("Patients")) return `${(num / 1000).toFixed(1)}K+`;
        if (label.includes("Years") || label.includes("Nurses")) return `${num}+`;
        return num;
    };

    return (
        <Box
            ref={sectionRef}
            sx={{
                backgroundColor: "#b9e5e2",
                py: 2,
                px: { xs: 2, sm: 3, md: 5 },
            }}
        >
            <Grid
                container
                spacing={12}
                justifyContent="center"
                alignItems="center"
                sx={{ maxWidth: "900px", mx: "auto" }}
            >
                {stats.map((item, index) => (
                    <Grid
                        size={{ xs: 6, sm: 3, md: 3 }}
                        key={index}
                        textAlign="center"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 1,
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={visible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: "bold",
                                    color: "#0e5c59",
                                    fontSize: { xs: "1.8rem", md: "2.2rem" },
                                }}
                            >
                                {formatValue(counts[index], item.label)}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: "#333",
                                    fontWeight: 500,
                                }}
                            >
                                {item.label}
                            </Typography>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default StatsBar;
