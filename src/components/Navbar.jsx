import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Grid,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CloseIcon from "@mui/icons-material/Close";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";

// Import your logo image - adjust the path based on your assets structure
import logo from "../assets/new vestal logo.png"; // Default path - adjust as needed
// Alternative paths you might need:
// import logo from "../assets/images/logo.png";
// import logo from "../assets/logo.svg";
// import logo from "../assets/ivycare-logo.png";

const Navbar = () => {
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        message: ""
    });

    const toggleDrawer = (open) => () => setDrawerOpen(open);
    const handleDialogOpen = () => setDialogOpen(true);
    const handleDialogClose = () => setDialogOpen(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Appointment Form Data:", formData);
        // You can add API call here
        alert("Appointment request submitted successfully!");
        handleDialogClose();
        // Reset form
        setFormData({
            fullName: "",
            email: "",
            phone: "",
            service: "",
            date: "",
            time: "",
            message: ""
        });
    };

    const menuItems = [
        { label: "Home", path: "/" },
        { label: "About Us", path: "/about" },
        { label: "Services", path: "/services" },
        { label: "Contact Us", path: "/contact" },
    ];

    const services = [
        "General Checkup",
        "Dental Care",
        "Cardiology",
        "Neurology",
        "Orthopedics",
        "Pediatrics",
        "Dermatology",
        "Eye Care"
    ];

    const timeSlots = [
        "09:00 AM", "10:00 AM", "11:00 AM",
        "12:00 PM", "02:00 PM", "03:00 PM",
        "04:00 PM", "05:00 PM"
    ];

    // Function to handle navigation with scroll to top
    const handleNavigation = (path) => {
        if (drawerOpen) {
            setDrawerOpen(false);
        }
        navigate(path);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Function for mobile navigation
    const handleMobileNavigation = (path) => {
        setDrawerOpen(false);
        navigate(path);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {/* 🔹 Responsive Top bar */}
            <Box
                sx={{
                    backgroundColor: "#3FB8AF",
                    color: "#fff",
                    py: 0.5,
                    px: { xs: 2, sm: 4, md: 8, lg: 12 },
                    fontSize: { xs: 12, sm: 13, md: 14 },
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    flexDirection: { xs: "column", sm: "row" },
                    textAlign: { xs: "center", sm: "left" },
                    gap: { xs: 0.5, sm: 0 },
                }}
            >
                {/* Contact info */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: { xs: "column", sm: "row" },
                        gap: { xs: 0.5, sm: 3 },
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <LocalPhoneIcon sx={{ fontSize: 16 }} /> 01204099066
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <EmailIcon sx={{ fontSize: 16 }} /> info@vestalhealth.in
                    </Box>
                </Box>

                {/* Social icons */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: { xs: 0.5, sm: 0 } }}>
                    <IconButton color="inherit" size="small">
                        <FacebookIcon fontSize="small" />
                    </IconButton>
                    <IconButton color="inherit" size="small">
                        <WhatsAppIcon fontSize="small" />
                    </IconButton>
                    <IconButton color="inherit" size="small">
                        <LinkedInIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Box>

            {/* 🔹 Main Navbar */}
            <AppBar
                position="sticky"
                sx={{
                    backgroundColor: "#ffffff",
                    color: "#333",
                    boxShadow: "0px 1px 5px rgba(0,0,0,0.1)",
                }}
            >
                <Toolbar sx={{ justifyContent: "space-between", maxWidth: 1200, mx: "auto", width: "100%" }}>
                    {/* Logo Section with Image */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            cursor: "pointer",
                        }}
                        onClick={() => handleNavigation("/")}
                    >
                        {/* Logo Image */}
                        <Box
                            component="img"
                            src={logo}
                            alt="Ivycare Logo"
                            sx={{
                                height: { xs: 50, md: 90 },
                                width: "auto",
                                objectFit: "contain",
                                // If logo has transparent background, you can add a background color
                                // backgroundColor: "#f5f5f5",
                                // borderRadius: "8px",
                                // p: 1,
                            }}
                            onError={(e) => {
                                // Fallback if image doesn't load
                                console.error("Logo image failed to load");
                                e.target.style.display = "none";
                            }}
                        />
                        
                        {/* Logo Text - Optional: Hide on very small screens if you prefer just the image */}
                       
                    </Box>

                    {/* Desktop Menu */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
                        {menuItems.map((item) => (
                            <Button
                                key={item.label}
                                onClick={() => handleNavigation(item.path)}
                                sx={{ 
                                    color: "#333", 
                                    textTransform: "none",
                                    fontWeight: 500,
                                    "&:hover": {
                                        color: "#3FB8AF",
                                    }
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                        <Button
                            variant="contained"
                            onClick={handleDialogOpen}
                            sx={{
                                backgroundColor: "#2022bd",
                                "&:hover": { backgroundColor: "#4f51ff" },
                                borderRadius: "25px",
                                textTransform: "none",
                                fontWeight: 600,
                                px: 3,
                            }}
                        >
                            Make An Appointment
                        </Button>
                    </Box>

                    {/* Mobile Menu Button */}
                    <IconButton
                        sx={{ display: { xs: "block", md: "none" } }}
                        color="inherit"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* 🔹 Mobile Drawer */}
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 250, p: 2 }}>
                    {/* Logo in Drawer */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            mb: 3,
                            cursor: "pointer",
                        }}
                        onClick={() => handleMobileNavigation("/")}
                    >
                        <Box
                            component="img"
                            src={logo}
                            alt="Ivycare Logo"
                            sx={{
                                height: 40,
                                width: "auto",
                                objectFit: "contain",
                            }}
                            onError={(e) => {
                                console.error("Logo image failed to load");
                                e.target.style.display = "none";
                            }}
                        />
                       
                    </Box>
                    
                    <List>
                        {menuItems.map((item) => (
                            <ListItem
                                button
                                key={item.label}
                                onClick={() => handleMobileNavigation(item.path)}
                                sx={{
                                    "&:hover": {
                                        backgroundColor: "rgba(63, 184, 175, 0.1)",
                                    }
                                }}
                            >
                                <ListItemText 
                                    primary={item.label} 
                                    primaryTypographyProps={{ 
                                        fontWeight: 500 
                                    }}
                                />
                            </ListItem>
                        ))}
                    </List>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => {
                            toggleDrawer(false)();
                            handleDialogOpen();
                        }}
                        sx={{
                            mt: 2,
                            backgroundColor: "#ECA3C3",
                            "&:hover": { backgroundColor: "#E68BB2" },
                            borderRadius: "25px",
                            fontWeight: 600,
                        }}
                    >
                        Make An Appointment
                    </Button>
                </Box>
            </Drawer>

            {/* 🔹 Appointment Dialog */}
            <Dialog
                open={dialogOpen}
                onClose={handleDialogClose}
                maxWidth="md"
                fullWidth
            >
                <DialogTitle>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography variant="h5" sx={{ color: "#3FB8AF", fontWeight: "bold" }}>
                            <PersonIcon sx={{ mr: 1, verticalAlign: "middle" }} />
                            Book an Appointment
                        </Typography>
                        <IconButton onClick={handleDialogClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </DialogTitle>
                
                <form onSubmit={handleSubmit}>
                    <DialogContent>
                        <Grid container spacing={3}>
                            <Grid size={{xs:12, md:6}}>
                                <TextField
                                    fullWidth
                                    label="Full Name"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    required
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid size={{xs:12, md:6}}>
                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid size={{xs:12, md:6}}>
                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid size={{xs:12, md:6}}>
                                <FormControl fullWidth margin="normal">
                                    <InputLabel>Select Service</InputLabel>
                                    <Select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleInputChange}
                                        label="Select Service"
                                        required
                                    >
                                        {services.map((service) => (
                                            <MenuItem key={service} value={service}>
                                                {service}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid size={{xs:12, md:6}}>
                                <TextField
                                    fullWidth
                                    label="Date"
                                    name="date"
                                    type="date"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                    required
                                    margin="normal"
                                    variant="outlined"
                                    InputLabelProps={{ shrink: true }}
                                    InputProps={{
                                        startAdornment: <CalendarTodayIcon sx={{ mr: 1, color: "#3FB8AF" }} />
                                    }}
                                />
                            </Grid>
                            <Grid size={{xs:12, md:6}}>
                                <FormControl fullWidth margin="normal">
                                    <InputLabel>Preferred Time</InputLabel>
                                    <Select
                                        name="time"
                                        value={formData.time}
                                        onChange={handleInputChange}
                                        label="Preferred Time"
                                        required
                                    >
                                        {timeSlots.map((time) => (
                                            <MenuItem key={time} value={time}>
                                                <AccessTimeIcon sx={{ mr: 1, fontSize: 16 }} />
                                                {time}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid size={{xs:12}}>
                                <TextField
                                    fullWidth
                                    label="Additional Message (Optional)"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    multiline
                                    rows={4}
                                    margin="normal"
                                    variant="outlined"
                                    placeholder="Please share any specific concerns or requirements..."
                                />
                            </Grid>
                        </Grid>
                    </DialogContent>
                    
                    <DialogActions sx={{ px: 3, pb: 3 }}>
                        <Button
                            onClick={handleDialogClose}
                            sx={{
                                color: "#666",
                                borderColor: "#ddd",
                                "&:hover": { borderColor: "#3FB8AF", color: "#3FB8AF" }
                            }}
                            variant="outlined"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                backgroundColor: "#3FB8AF",
                                "&:hover": { backgroundColor: "#2A9D8F" },
                                borderRadius: "25px",
                                px: 4,
                            }}
                        >
                            Book Appointment
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
};

export default Navbar;