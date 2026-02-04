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
  Container,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CloseIcon from "@mui/icons-material/Close";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";

// Import your logo image - adjust the path based on your assets structure
import logo from "../assets/VestalHealthCareNewLogo.png"; // Default path - adjust as needed

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
    message: "",
  });

  const toggleDrawer = (open) => () => setDrawerOpen(open);
  const handleDialogOpen = () => setDialogOpen(true);
  const handleDialogClose = () => setDialogOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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
      message: "",
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
    "Eye Care",
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
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
        }}
      >
        {/* Wrapper */}
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "space-between" },
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 0.5, sm: 0 },
          }}
        >
          {/* Contact info */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              flexWrap: "wrap",
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <LocalPhoneIcon sx={{ fontSize: 16 }} />
              0120-409-9066
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <EmailIcon sx={{ fontSize: 16 }} />
              info@vestalhealth.in
            </Box>
          </Box>

          {/* Social icons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mt: { xs: 0.5, sm: 0 },
            }}
          >
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
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: { xs: 0, sm: 2 },
            }}
          >
            {/* Logo Section */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                cursor: "pointer",
                flexShrink: 0,
              }}
              onClick={() => handleNavigation("/")}
            >
              <Box
                component="img"
                src={logo}
                alt="Ivycare Logo"
                sx={{
                  height: { xs: 50, sm: 60, md: 70 },
                  width: "auto",
                  objectFit: "contain",
                  ml: 6,
                }}
                onError={(e) => {
                  console.error("Logo image failed to load");
                  e.target.style.display = "none";
                }}
              />
            </Box>

            {/* Desktop Navigation - Hidden on mobile */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                mx: 4,
              }}
            >
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    color: "#333",
                    textTransform: "none",
                    fontWeight: 500,
                    fontSize: "1rem",
                    px: 2,
                    "&:hover": {
                      color: "#3FB8AF",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Desktop Appointment Button - Right Side */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                flexShrink: 0,
              }}
            >
              <Button
                variant="contained"
                onClick={handleDialogOpen}
                sx={{
                  backgroundColor: "#2022bd",
                  "&:hover": { backgroundColor: "#4f51ff" },
                  borderRadius: "25px",
                  textTransform: "none",
                  fontWeight: 600,
                  px: { md: 3, lg: 4 },
                  mr: 8,
                  py: 1,
                  fontSize: "0.95rem",
                  whiteSpace: "nowrap",
                }}
              >
                Make An Appointment
              </Button>
            </Box>

            {/* Mobile Menu Button - Shows on small screens */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                gap: 1,
              }}
            >
              {/* Mobile Appointment Button - Smaller version */}
              <Button
                variant="contained"
                onClick={handleDialogOpen}
                size="small"
                sx={{
                  display: { xs: "none", sm: "flex" },
                  backgroundColor: "#2022bd",
                  "&:hover": { backgroundColor: "#4f51ff" },
                  borderRadius: "20px",
                  textTransform: "none",
                  fontWeight: 600,
                  px: 2,
                  py: 0.5,
                  fontSize: "0.8rem",
                  whiteSpace: "nowrap",
                }}
              >
                Appointment
              </Button>
              
              <IconButton
                color="inherit"
                onClick={toggleDrawer(true)}
                sx={{ ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* 🔹 Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 280, p: 2 }}>
          {/* Close button at top */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Logo in Drawer */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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
                height: 60,
                width: "auto",
                objectFit: "contain",
              }}
              onError={(e) => {
                console.error("Logo image failed to load");
                e.target.style.display = "none";
              }}
            />
          </Box>

          {/* Mobile Menu Items */}
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.label}
                onClick={() => handleMobileNavigation(item.path)}
                sx={{
                  borderRadius: 1,
                  mb: 0.5,
                  "&:hover": {
                    backgroundColor: "rgba(63, 184, 175, 0.1)",
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: 500,
                    fontSize: "1.1rem",
                  }}
                />
              </ListItem>
            ))}
          </List>

          {/* Mobile Appointment Button */}
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              toggleDrawer(false)();
              handleDialogOpen();
            }}
            sx={{
              mt: 3,
              backgroundColor: "#2022bd",
              "&:hover": { backgroundColor: "#4f51ff" },
              borderRadius: "25px",
              fontWeight: 600,
              py: 1.5,
              fontSize: "1rem",
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "#3FB8AF", fontWeight: "bold" }}
            >
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
              <Grid size={{ xs: 12, md: 6 }}>
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
              <Grid size={{ xs: 12, md: 6 }}>
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
              <Grid size={{ xs: 12, md: 6 }}>
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
              <Grid size={{ xs: 12, md: 6 }}>
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
              <Grid size={{ xs: 12, md: 6 }}>
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
                    startAdornment: (
                      <CalendarTodayIcon sx={{ mr: 1, color: "#3FB8AF" }} />
                    ),
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
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
              <Grid size={{ xs: 12 }}>
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
                "&:hover": { borderColor: "#3FB8AF", color: "#3FB8AF" },
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