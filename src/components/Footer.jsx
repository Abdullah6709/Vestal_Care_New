import React from "react";
import {
    Box,
    Typography,
    Grid,
    IconButton,
    TextField,
    Button,
} from "@mui/material";
import {
    Facebook,
    WhatsApp,
    LinkedIn,
    LocationOn,
    Phone,
    Email,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

// Import assets
import logo from "../assets/VestalHealthCareNewLogo.png";

const footerBg = "https://plus.unsplash.com/premium_photo-1661290203802-e70e01de3a3c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Footer = () => {
    const navigate = useNavigate();

    const quickLinks = [
        { label: "Home", path: "/" },
        { label: "About Us", path: "/about" },
        { label: "Services", path: "/services" },
        { label: "Contact", path: "/contact" }
    ];

    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const socialLinks = [
        { icon: Facebook, url: "https://facebook.com" },
        { icon: WhatsApp, url: "https://wa.me/your-number" },
        { icon: LinkedIn, url: "https://linkedin.com" }
    ];

    const handleSubscribe = (e) => {
        e.preventDefault();
        alert("Thank you for subscribing!");
        e.target.reset();
    };

    return (
        <Box
            sx={{
                position: "relative",
                backgroundColor: "#0D1B2A",
                color: "#fff",
                py: 3,
                px: { xs: 3, md: 10 },
                overflow: "hidden",
                // Combined background image with rgba overlay
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    // Linear gradient overlay + background image
                    background: `
                        linear-gradient(
                            rgba(0, 0, 0, 0.85), 
                            rgba(13, 27, 42, 0.85)
                        ),
                        url(${footerBg})
                    `,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: {
                        xs: "center", // Center on mobile
                        md: "center top", // Show top on medium and larger screens
                        lg: "center top", // Show top on large screens
                    },
                    backgroundAttachment: {
                        xs: "scroll", 
                        md: "scroll", 
                    },
                    zIndex: 1,
                },
            }}
        >
            {/* Footer Content - All content above background overlay */}
            <Grid
                container
                spacing={6}
                sx={{
                    position: "relative",
                    zIndex: 3,
                    maxWidth: 1200,
                    mx: "auto",
                }}
            >
                {/* Left Section - Logo and About */}
                <Grid size={{xs:12, md:4}}>
                    <Box
                        component="img"
                        src={logo}
                        alt="CarePlus Logo"
                        sx={{
                            height: 100,
                            width: "auto",
                            mb: 2,
                            cursor: "pointer",
                        }}
                        onClick={() => handleNavigation("/")}
                    />
                    <Typography 
                        variant="body2" 
                        sx={{ 
                            color: "#eee", 
                            mb: 3,
                            textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                        }}
                    >
                        We provide professional and compassionate home nursing and health
                        care services. Your well-being is our priority — always.
                    </Typography>

                    <Box>
                        {socialLinks.map((social, index) => (
                            <IconButton
                                key={index}
                                component="a"
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    color: "#fff",
                                    mr: 1,
                                    backgroundColor: "rgba(63, 184, 175, 0.2)",
                                    "&:hover": {
                                        color: "#3FB8AF",
                                        backgroundColor: "rgba(63, 184, 175, 0.4)",
                                        transform: "scale(1.2)",
                                    },
                                    transition: "0.3s",
                                    backdropFilter: "blur(4px)",
                                }}
                            >
                                <social.icon />
                            </IconButton>
                        ))}
                    </Box>
                </Grid>

                {/* Middle Section - Quick Links */}
                <Grid size={{xs:12, md:4}}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 700,
                            color: "#fff",
                            mb: 2,
                            borderBottom: "2px solid #3FB8AF",
                            display: "inline-block",
                            pb: 0.5,
                            textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
                        }}
                    >
                        Quick Links
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 1.2,
                            mt: 1,
                        }}
                    >
                        {quickLinks.map((link, index) => (
                            <Typography
                                key={index}
                                component="button"
                                onClick={() => handleNavigation(link.path)}
                                sx={{
                                    color: "#eee",
                                    fontSize: "15px",
                                    cursor: "pointer",
                                    textDecoration: "none",
                                    backgroundColor: "transparent",
                                    border: "none",
                                    textAlign: "left",
                                    padding: 0,
                                    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                                    "&:hover": {
                                        color: "#3FB8AF",
                                        pl: 1,
                                        transition: "0.3s",
                                    },
                                }}
                            >
                                {link.label}
                            </Typography>
                        ))}
                    </Box>
                </Grid>

                {/* Right Section - Newsletter / Contact */}
                <Grid size={{xs:12, md:4}}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 700,
                            color: "#fff",
                            mb: 2,
                            borderBottom: "2px solid #3FB8AF",
                            display: "inline-block",
                            pb: 0.5,
                            textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
                        }}
                    >
                        Stay Connected
                    </Typography>
                    <Typography 
                        variant="body2" 
                        sx={{ 
                            color: "#eee", 
                            mb: 2,
                            textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                        }}
                    >
                        Subscribe to get health tips and updates.
                    </Typography>

                    <Box 
                        component="form" 
                        onSubmit={handleSubscribe}
                        sx={{ display: "flex", gap: 1, mb: 3 }}
                    >
                        <TextField
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            size="small"
                            variant="outlined"
                            required
                            sx={{
                                backgroundColor: "rgba(255, 255, 255, 0.95)",
                                borderRadius: "6px",
                                input: { color: "#333" },
                                flex: 1,
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "rgba(63, 184, 175, 0.5)",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "#3FB8AF",
                                    },
                                },
                            }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                backgroundColor: "#3FB8AF",
                                "&:hover": { 
                                    backgroundColor: "#34a59e",
                                    boxShadow: "0 4px 12px rgba(63, 184, 175, 0.4)",
                                },
                                fontWeight: 600,
                                backdropFilter: "blur(4px)",
                            }}
                        >
                            Subscribe
                        </Button>
                    </Box>

                    <Box sx={{ color: "#eee" }}>
                        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                            <LocationOn sx={{ color: "#3FB8AF", mr: 1, filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.5))" }} />
                            <Typography 
                                variant="body2"
                                sx={{ 
                                    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                                }}
                            >
                               1201 A, 12th floor, Tower T3, NX One, Greater Noida west . Corporate office
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                            <Phone sx={{ color: "#3FB8AF", mr: 1, filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.5))" }} />
                            <Typography 
                                variant="body2"
                                component="a"
                                href="tel:09599062557"
                                sx={{ 
                                    color: "#eee", 
                                    textDecoration: "none",
                                    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                                    "&:hover": { 
                                        color: "#3FB8AF",
                                    }
                                }}
                            >
                                09599062557
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Email sx={{ color: "#3FB8AF", mr: 1, filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.5))" }} />
                            <Typography 
                                variant="body2"
                                component="a"
                                href="deepak@vestalhealth.in"
                                sx={{ 
                                    color: "#eee", 
                                    textDecoration: "none",
                                    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                                    "&:hover": { 
                                        color: "#3FB8AF",
                                    }
                                }}
                            >
                               deepak@vestalhealth.in
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            {/* Bottom Bar */}
            <Box
                sx={{
                    position: "relative",
                    zIndex: 3,
                    mt: 8,
                    pt: 3,
                    borderTop: "1px solid rgba(255,255,255,0.3)",
                    textAlign: "center",
                    color: "#eee",
                    backdropFilter: "blur(4px)",
                    backgroundColor: "rgba(13, 27, 42, 0.6)",
                    borderRadius: "8px 8px 0 0",
                    mx: { xs: -3, md: -10 },
                    px: { xs: 3, md: 10 },
                }}
            >
                <Typography 
                    variant="body2"
                    sx={{
                        textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                    }}
                >
                    © {new Date().getFullYear()} CarePlus. All Rights Reserved.
                </Typography>
                <Typography 
                    variant="caption" 
                    sx={{ 
                        display: "block", 
                        mt: 1,
                        color: "#ccc",
                        textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                    }}
                >
                    Compassionate Care, Wherever You Are
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;