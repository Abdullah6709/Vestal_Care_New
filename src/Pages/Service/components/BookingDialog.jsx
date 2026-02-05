import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  Box,
  IconButton,
  Typography,
  Avatar,
  Stepper,
  Step,
  StepLabel,
  Button,
  Grid,
  Paper,
  TextField,
  Divider,
  Slider,
  Input,
  Fade,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Close,
  CurrencyRupee,
  Phone,
  WhatsApp,
  SupportAgent,
  MedicalInformation,
  PersonAdd,
  Assignment,
  Payment,
  CheckCircle,
} from "@mui/icons-material";
import { tollFreeNumber } from "../data/constants.jsx";

const BookingDialog = ({ open, onClose, selectedService }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
    duration: 15,
    totalAmount: 0,
    address: "",
    city: "",
    pincode: "",
    patientAge: "",
    patientGender: "",
    emergencyContact: "",
    preferredLanguage: "Hindi",
    medicalHistory: "",
  });

  const steps = ["Select Duration", "Patient Details", "Review & Confirm"];

  React.useEffect(() => {
    if (selectedService) {
      const defaultDuration =
        selectedService.defaultDays || selectedService.defaultSessions || 15;
      setBookingForm((prev) => ({
        ...prev,
        service: selectedService.title,
        duration: defaultDuration,
        totalAmount: calculateTotalAmount(selectedService, defaultDuration),
      }));
    }
  }, [selectedService]);

  const calculateTotalAmount = (service, duration) => {
    if (!service) return 0;
    return service.price * duration;
  };

  const handleDurationChange = (event, newValue) => {
    setBookingForm((prev) => ({
      ...prev,
      duration: newValue,
      totalAmount: calculateTotalAmount(selectedService, newValue),
    }));
  };

  const handleDurationInputChange = (event) => {
    const value = event.target.value === "" ? 0 : Number(event.target.value);
    const min = selectedService?.minDays || selectedService?.minSessions || 1;
    const max = selectedService?.maxDays || selectedService?.maxSessions || 90;

    const clampedValue = Math.min(Math.max(value, min), max);

    setBookingForm((prev) => ({
      ...prev,
      duration: clampedValue,
      totalAmount: calculateTotalAmount(selectedService, clampedValue),
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBackStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", bookingForm);
    alert(
      `Thank you for your booking request! Total Amount: ₹${bookingForm.totalAmount}. Our care coordinator will call you within 2 hours.`
    );
    onClose();
    setBookingForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      message: "",
      duration: 15,
      totalAmount: 0,
      address: "",
      city: "",
      pincode: "",
      patientAge: "",
      patientGender: "",
      emergencyContact: "",
      preferredLanguage: "Hindi",
      medicalHistory: "",
    });
    setActiveStep(0);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ width: "100%" }}>
            <Typography
              variant="h5"
              gutterBottom
              fontWeight="bold"
              sx={{
                fontSize: { xs: "1.25rem", sm: "1.5rem" },
                color: "#1A5F7A",
                mb: 3,
              }}
            >
              Select Service Duration
            </Typography>

            {/* Service Summary */}
            <Paper
              sx={{
                p: 3,
                mb: 4,
                backgroundColor: "#F0F8FF",
                border: "1px solid #E3F2FD",
              }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid size={{xs:3, sm:2}}>
                  <Avatar sx={{ bgcolor: "#2E7D32", width: 60, height: 60 }}>
                    {selectedService?.icon}
                  </Avatar>
                </Grid>
                <Grid size={{xs:9, sm:10}}>
                  <Typography variant="h6" fontWeight="bold" color="#1A5F7A">
                    {selectedService?.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {selectedService?.description}
                  </Typography>
                  <Box
                    sx={{ display: "flex", gap: 2, mt: 1, flexWrap: "wrap" }}
                  >
                    <Chip
                      icon={<CurrencyRupee />}
                      label={selectedService?.priceDisplay}
                      size="small"
                      variant="outlined"
                      color="primary"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Paper>

            {/* Duration Slider */}
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <Typography variant="body1" fontWeight="bold" color="#1A5F7A">
                  Select Duration:
                </Typography>
                <Typography variant="body1" fontWeight="bold" color="#2E7D32">
                  {bookingForm.duration}{" "}
                  {selectedService?.type === "session" ? "sessions" : "days"}
                </Typography>
              </Box>

              <Slider
                value={bookingForm.duration}
                onChange={handleDurationChange}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) =>
                  `${value} ${
                    selectedService?.type === "session" ? "sessions" : "days"
                  }`
                }
                min={
                  selectedService?.minDays || selectedService?.minSessions || 1
                }
                max={
                  selectedService?.maxDays || selectedService?.maxSessions || 90
                }
                step={1}
                marks={[
                  {
                    value:
                      selectedService?.minDays ||
                      selectedService?.minSessions ||
                      1,
                    label: `${
                      selectedService?.minDays ||
                      selectedService?.minSessions ||
                      1
                    }`,
                  },
                  {
                    value:
                      selectedService?.defaultDays ||
                      selectedService?.defaultSessions ||
                      15,
                    label: "Recommended",
                  },
                  {
                    value:
                      selectedService?.maxDays ||
                      selectedService?.maxSessions ||
                      90,
                    label: `${
                      selectedService?.maxDays ||
                      selectedService?.maxSessions ||
                      90
                    }`,
                  },
                ]}
                sx={{
                  color: "#1A5F7A",
                  height: 8,
                  "& .MuiSlider-valueLabel": {
                    backgroundColor: "#1A5F7A",
                    borderRadius: "8px",
                    fontSize: "0.875rem",
                  },
                  "& .MuiSlider-markLabel": {
                    fontSize: "0.75rem",
                  },
                }}
              />

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  mt: 2,
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Manual Input:
                </Typography>
                <Input
                  value={bookingForm.duration}
                  size="small"
                  onChange={handleDurationInputChange}
                  inputProps={{
                    step: 1,
                    min:
                      selectedService?.minDays ||
                      selectedService?.minSessions ||
                      1,
                    max:
                      selectedService?.maxDays ||
                      selectedService?.maxSessions ||
                      90,
                    type: "number",
                    style: {
                      textAlign: "center",
                      width: "80px",
                      fontWeight: "bold",
                    },
                  }}
                  sx={{
                    "& .MuiInputBase-input": {
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#1A5F7A",
                      fontSize: "1rem",
                    },
                  }}
                />
                <Typography variant="body1" fontWeight="bold" color="#1A5F7A">
                  {selectedService?.type === "session" ? "sessions" : "days"}
                </Typography>
              </Box>
            </Box>

            {/* Price Summary */}
            <Paper
              sx={{
                p: 3,
                backgroundColor: "#E8F5E9",
                border: "1px solid #C8E6C9",
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                color="#1A5F7A"
                gutterBottom
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <CurrencyRupee /> Price Summary
              </Typography>
              <Grid container spacing={2}>
                <Grid size={{xs:6}}>
                  <Typography variant="body2" color="text.secondary">
                    {selectedService?.type === "session"
                      ? "Per Session Rate"
                      : "Daily Rate"}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="#1A5F7A"
                    fontWeight="bold"
                    sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                  >
                    <CurrencyRupee fontSize="small" />
                    {selectedService?.priceDisplay}
                  </Typography>
                </Grid>
                <Grid size={{xs:6}}>
                  <Typography variant="body2" color="text.secondary" align="right">
                    Selected Duration
                  </Typography>
                  <Typography
                    variant="h6"
                    color="#1A5F7A"
                    fontWeight="bold"
                    align="right"
                  >
                    {bookingForm.duration}{" "}
                    {selectedService?.type === "session" ? "sessions" : "days"}
                  </Typography>
                </Grid>
                <Grid size={{xs:12}}>
                  <Divider sx={{ my: 2 }} />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6" color="text.primary" fontWeight="bold">
                      Total Estimated Amount
                    </Typography>
                    <Typography
                      variant="h4"
                      color="#2E7D32"
                      fontWeight="bold"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                      }}
                    >
                      <CurrencyRupee fontSize="medium" />
                      {bookingForm.totalAmount.toLocaleString("en-IN")}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        );

      case 1:
        return (
          <Box sx={{ width: "100%" }}>
            <Typography
              variant="h5"
              gutterBottom
              fontWeight="bold"
              sx={{
                fontSize: { xs: "1.25rem", sm: "1.5rem" },
                color: "#1A5F7A",
                mb: 3,
              }}
            >
              Patient & Contact Details
            </Typography>

            <Grid container spacing={3}>
              <Grid size={{xs:12, sm:6}}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={bookingForm.name}
                  onChange={handleInputChange}
                  required
                  margin="normal"
                  size="medium"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                    },
                  }}
                />
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <TextField
                  fullWidth
                  label="Mobile Number"
                  name="phone"
                  value={bookingForm.phone}
                  onChange={handleInputChange}
                  required
                  margin="normal"
                  size="medium"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                    },
                  }}
                />
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={bookingForm.email}
                  onChange={handleInputChange}
                  required
                  margin="normal"
                  size="medium"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                    },
                  }}
                />
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <TextField
                  fullWidth
                  label="Emergency Contact"
                  name="emergencyContact"
                  value={bookingForm.emergencyContact}
                  onChange={handleInputChange}
                  margin="normal"
                  size="medium"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                    },
                  }}
                />
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <TextField
                  fullWidth
                  label="Patient Age"
                  name="patientAge"
                  value={bookingForm.patientAge}
                  onChange={handleInputChange}
                  margin="normal"
                  size="medium"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                    },
                  }}
                />
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <TextField
                  fullWidth
                  select
                  label="Patient Gender"
                  name="patientGender"
                  value={bookingForm.patientGender}
                  onChange={handleInputChange}
                  margin="normal"
                  size="medium"
                  variant="outlined"
                  SelectProps={{
                    native: true,
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                    },
                  }}
                >
                  <option value=""></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </TextField>
              </Grid>
              <Grid size={{xs:12}}>
                <TextField
                  fullWidth
                  label="Complete Address"
                  name="address"
                  value={bookingForm.address}
                  onChange={handleInputChange}
                  required
                  margin="normal"
                  size="medium"
                  variant="outlined"
                  multiline
                  rows={2}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                    },
                  }}
                />
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <TextField
                  fullWidth
                  label="City"
                  name="city"
                  value={bookingForm.city}
                  onChange={handleInputChange}
                  required
                  margin="normal"
                  size="medium"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                    },
                  }}
                />
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <TextField
                  fullWidth
                  label="Pincode"
                  name="pincode"
                  value={bookingForm.pincode}
                  onChange={handleInputChange}
                  required
                  margin="normal"
                  size="medium"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                    },
                  }}
                />
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <TextField
                  fullWidth
                  label="Preferred Start Date"
                  name="date"
                  type="date"
                  value={bookingForm.date}
                  onChange={handleInputChange}
                  InputLabelProps={{ shrink: true }}
                  required
                  margin="normal"
                  size="medium"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                    },
                  }}
                />
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <TextField
                  fullWidth
                  label="Preferred Time"
                  name="time"
                  type="time"
                  value={bookingForm.time}
                  onChange={handleInputChange}
                  InputLabelProps={{ shrink: true }}
                  margin="normal"
                  size="medium"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                    },
                  }}
                />
              </Grid>
              <Grid size={{xs:12}}>
                <TextField
                  fullWidth
                  select
                  label="Preferred Language"
                  name="preferredLanguage"
                  value={bookingForm.preferredLanguage}
                  onChange={handleInputChange}
                  margin="normal"
                  size="medium"
                  variant="outlined"
                  SelectProps={{
                    native: true,
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                    },
                  }}
                >
                  <option value="Hindi">Hindi</option>
                  <option value="English">English</option>
                  <option value="Bengali">Bengali</option>
                  <option value="Marathi">Marathi</option>
                  <option value="Tamil">Tamil</option>
                  <option value="Telugu">Telugu</option>
                  <option value="Gujarati">Gujarati</option>
                  <option value="Punjabi">Punjabi</option>
                </TextField>
              </Grid>
              <Grid size={{xs:12}}>
                <TextField
                  fullWidth
                  label="Medical History & Special Instructions"
                  name="medicalHistory"
                  value={bookingForm.medicalHistory}
                  onChange={handleInputChange}
                  margin="normal"
                  size="medium"
                  variant="outlined"
                  multiline
                  rows={3}
                  placeholder="Please share any existing medical conditions, allergies, current medications, doctor's recommendations, or special care requirements..."
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        );

      case 2:
        return (
          <Box sx={{ width: "100%" }}>
            <Typography
              variant="h5"
              gutterBottom
              fontWeight="bold"
              sx={{
                fontSize: { xs: "1.25rem", sm: "1.5rem" },
                color: "#1A5F7A",
                mb: 3,
              }}
            >
              Review & Confirm Booking
            </Typography>

            {/* Service Details */}
            <Paper
              sx={{
                p: 3,
                mb: 3,
                backgroundColor: "#F0F8FF",
                border: "1px solid #E3F2FD",
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                color="#1A5F7A"
                gutterBottom
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <MedicalInformation /> Service Details
              </Typography>
              <Grid container spacing={2}>
                <Grid size={{xs:12, sm:6}}>
                  <Typography variant="body2" color="text.secondary">
                    Service
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {selectedService?.title}
                  </Typography>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <Typography variant="body2" color="text.secondary">
                    Price
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {selectedService?.priceDisplay}
                  </Typography>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <Typography variant="body2" color="text.secondary">
                    Duration
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {bookingForm.duration}{" "}
                    {selectedService?.type === "session" ? "sessions" : "days"}
                  </Typography>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <Typography variant="body2" color="text.secondary">
                    Start Date
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {bookingForm.date || "Not specified"}
                  </Typography>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <Typography variant="body2" color="text.secondary">
                    Preferred Time
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {bookingForm.time || "Not specified"}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>

            {/* Patient Details */}
            <Paper
              sx={{
                p: 3,
                mb: 3,
                backgroundColor: "#F0F8FF",
                border: "1px solid #E3F2FD",
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                color="#1A5F7A"
                gutterBottom
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <PersonAdd /> Patient Details
              </Typography>
              <Grid container spacing={2}>
                <Grid size={{xs:12, sm:6}}>
                  <Typography variant="body2" color="text.secondary">
                    Full Name
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {bookingForm.name || "Not provided"}
                  </Typography>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <Typography variant="body2" color="text.secondary">
                    Contact
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {bookingForm.phone || "Not provided"}
                  </Typography>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <Typography variant="body2" color="text.secondary">
                    Email
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {bookingForm.email || "Not provided"}
                  </Typography>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <Typography variant="body2" color="text.secondary">
                    Emergency Contact
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {bookingForm.emergencyContact || "Not provided"}
                  </Typography>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <Typography variant="body2" color="text.secondary">
                    Address
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {bookingForm.address || "Not provided"}
                  </Typography>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <Typography variant="body2" color="text.secondary">
                    City & Pincode
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {bookingForm.city
                      ? `${bookingForm.city} - ${bookingForm.pincode}`
                      : "Not provided"}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>

            {/* Medical Information */}
            {bookingForm.medicalHistory && (
              <Paper
                sx={{
                  p: 3,
                  mb: 3,
                  backgroundColor: "#FFF3E0",
                  border: "1px solid #FFE0B2",
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="#1A5F7A"
                  gutterBottom
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <Assignment /> Medical Information
                </Typography>
                <Typography variant="body1">
                  {bookingForm.medicalHistory}
                </Typography>
              </Paper>
            )}

            {/* Price Summary */}
            <Paper
              sx={{
                p: 3,
                backgroundColor: "#E8F5E9",
                border: "1px solid #C8E6C9",
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                color="#1A5F7A"
                gutterBottom
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <Payment /> Price Summary
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Box>
                  <Typography variant="body1" color="text.secondary">
                    Service
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {selectedService?.title}
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "right" }}>
                  <Typography
                    variant="h4"
                    color="#2E7D32"
                    fontWeight="bold"
                    sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                  >
                    <CurrencyRupee fontSize="medium" />
                    {bookingForm.totalAmount.toLocaleString("en-IN")}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Total amount for {bookingForm.duration}{" "}
                    {selectedService?.type === "session" ? "sessions" : "days"}
                  </Typography>
                </Box>
              </Box>
            </Paper>

            {/* Terms and Conditions */}
            <Box
              sx={{ mt: 3, p: 2, backgroundColor: "#F5F5F5", borderRadius: "8px" }}
            >
              <Typography variant="body2" color="text.secondary" align="center">
                By submitting this form, you agree to our Terms of Service and
                Privacy Policy. Our care coordinator will contact you within 2
                hours to confirm the booking and discuss payment options.
              </Typography>
            </Box>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xl"
      fullWidth
      fullScreen
      sx={{
        "& .MuiDialog-paper": {
          margin: 0,
          width: "100vw",
          height: "100vh",
          maxWidth: "100vw",
          maxHeight: "100vh",
          borderRadius: 0,
          overflow: "hidden",
          backgroundColor: "#FFFFFF",
        },
      }}
    >
      <DialogTitle
        sx={{
          m: 0,
          p: { xs: 2, sm: 3 },
          backgroundColor: "#1A5F7A",
          color: "white",
          position: "sticky",
          top: 0,
          zIndex: 10,
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton
              onClick={onClose}
              sx={{
                color: "white",
                backgroundColor: "rgba(255,255,255,0.1)",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.2)",
                },
              }}
            >
              <Close />
            </IconButton>
            <Box>
              <Typography
                variant="h5"
                component="div"
                fontWeight="bold"
                sx={{
                  fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
                }}
              >
                Book {selectedService?.title}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9, mt: 0.5 }}>
                Step {activeStep + 1} of {steps.length}: {steps[activeStep]}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            <Avatar sx={{ bgcolor: "#2E7D32", width: 40, height: 40 }}>
              {selectedService?.icon}
            </Avatar>
            <Box sx={{ textAlign: "right" }}>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Total Amount
              </Typography>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
              >
                <CurrencyRupee fontSize="small" />
                {bookingForm.totalAmount.toLocaleString("en-IN")}
              </Typography>
            </Box>
          </Box>
        </Box>
      </DialogTitle>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          height: "calc(100vh - 64px)",
          overflow: "hidden",
        }}
      >
        {/* Left Panel - Service Details */}
        <Box
          sx={{
            width: { xs: "100%", md: "35%" },
            height: "100%",
            backgroundColor: "#F8F9FA",
            borderRight: "1px solid #E0E0E0",
            overflowY: "auto",
            p: { xs: 2, sm: 3, md: 4 },
          }}
        >
          {selectedService && (
            <>
              <Typography
                variant="h6"
                fontWeight="bold"
                color="#1A5F7A"
                gutterBottom
              >
                Service Details
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Fade in={true} timeout={500}>
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "12px",
                      marginBottom: "16px",
                    }}
                  />
                </Fade>
                <Typography variant="h6" fontWeight="bold" color="#1A5F7A">
                  {selectedService.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {selectedService.description}
                </Typography>
              </Box>

              <Typography
                variant="subtitle1"
                fontWeight="bold"
                color="#1A5F7A"
                gutterBottom
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <CheckCircle color="success" /> Service Includes:
              </Typography>
              <List dense>
                {selectedService.features.map((feature, index) => (
                  <ListItem
                    key={index}
                    disablePadding
                    sx={{
                      mb: 1.5,
                      backgroundColor: "#FFFFFF",
                      borderRadius: "8px",
                      p: 1.5,
                      border: "1px solid #E0E0E0",
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckCircle sx={{ color: "#2E7D32" }} fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={feature}
                      primaryTypographyProps={{
                        sx: {
                          fontSize: "0.875rem",
                          fontWeight: 500,
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>

              <Paper
                sx={{
                  p: 2,
                  mt: 3,
                  backgroundColor: "#E8F5E9",
                  border: "1px solid #C8E6C9",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Price
                    </Typography>
                    <Typography
                      variant="h6"
                      color="#1A5F7A"
                      fontWeight="bold"
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      <CurrencyRupee fontSize="small" />
                      {selectedService.priceDisplay}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </>
          )}
        </Box>

        {/* Right Panel - Booking Form */}
        <Box
          sx={{
            width: { xs: "100%", md: "65%" },
            height: "100%",
            overflowY: "auto",
            p: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <form onSubmit={handleBookingSubmit}>
            {renderStepContent(activeStep)}

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 4,
                pt: 3,
                borderTop: "1px solid #E0E0E0",
              }}
            >
              <Button
                disabled={activeStep === 0}
                onClick={handleBackStep}
                variant="outlined"
                size="large"
                sx={{
                  fontWeight: "bold",
                  borderRadius: "8px",
                  px: 4,
                }}
              >
                Back
              </Button>

              {activeStep === steps.length - 1 ? (
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#2E7D32",
                    "&:hover": {
                      backgroundColor: "#1B5E20",
                    },
                    fontWeight: "bold",
                    borderRadius: "8px",
                    px: 6,
                    py: 1.5,
                  }}
                >
                  Confirm Booking for ₹
                  {bookingForm.totalAmount.toLocaleString("en-IN")}
                </Button>
              ) : (
                <Button
                  onClick={handleNextStep}
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#1A5F7A",
                    "&:hover": {
                      backgroundColor: "#15455A",
                    },
                    fontWeight: "bold",
                    borderRadius: "8px",
                    px: 6,
                    py: 1.5,
                  }}
                >
                  Next Step
                </Button>
              )}
            </Box>
          </form>

          {/* Quick Contact Info */}
          <Paper
            sx={{
              p: 3,
              mt: 4,
              backgroundColor: "#F0F8FF",
              border: "1px solid #E3F2FD",
              borderRadius: "12px",
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              color="#1A5F7A"
              gutterBottom
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <SupportAgent /> Need Help?
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<Phone />}
                  sx={{
                    borderColor: "#1A5F7A",
                    color: "#1A5F7A",
                    "&:hover": {
                      borderColor: "#15455A",
                      backgroundColor: "rgba(26, 95, 122, 0.04)",
                    },
                    justifyContent: "flex-start",
                  }}
                  onClick={() =>
                    (window.location.href = `tel:${tollFreeNumber.replace(
                      /-/g,
                      ""
                    )}`)
                  }
                >
                  Toll-Free: {tollFreeNumber}
                </Button>
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<WhatsApp />}
                  sx={{
                    borderColor: "#25D366",
                    color: "#25D366",
                    "&:hover": {
                      borderColor: "#1DA851",
                      backgroundColor: "rgba(37, 211, 102, 0.04)",
                    },
                    justifyContent: "flex-start",
                  }}
                  onClick={() =>
                    window.open("https://wa.me/+919599062557", "_blank")
                  }
                >
                  WhatsApp Support
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Box>
    </Dialog>
  );
};

export default BookingDialog;