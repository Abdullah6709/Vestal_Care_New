// ServicePage.jsx
import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Rating,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Fade,
  useMediaQuery,
  useTheme,
  Slider,
  Input,
  Tabs,
  Tab,
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from "@mui/material";
import {
  ExpandMore,
  CheckCircle,
  LocalHospital,
  MedicalServices,
  Elderly,
  Accessible,
  Psychology,
  Medication,
  Emergency,
  Schedule,
  Phone,
  Email,
  LocationOn,
  Star,
  CalendarToday,
  Person,
  Close,
  HealthAndSafety,
  WheelchairPickup,
  Healing,
  ChildCare,
  Favorite,
  Coronavirus,
  AccessibilityNew,
  PregnantWoman,
  FavoriteBorder,
  Spa,
  // Additional MUI icons for better representation
  Home,
  Groups,
  Science,
  MonitorHeart,
  MedicationLiquid,
  Sanitizer,
  Vaccines,
  Bed,
  Bathroom,
  Restaurant,
  Security,
  SupportAgent,
  VerifiedUser,
  School,
  Work,
  Diversity3,
  Hearing,
  Visibility,
  CurrencyRupee,
  WhatsApp,
  AccessTime,
  Event,
  PersonAdd,
  MedicalInformation,
  Payment,
  Assignment,
} from "@mui/icons-material";

// Updated Service Data with Indian context and FIXED pricing in INR
const services = [
  {
    id: 1,
    title: "Attendant Services",
    description:
      "Trained caregivers for daily living assistance, companionship, and personal care support at home.",
    icon: <Person fontSize="large" />,
    image:
      "https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Personal hygiene assistance",
      "Mobility and transfer support",
      "Meal preparation and feeding",
      "Medication reminders",
      "Companionship and emotional support",
      "Light housekeeping",
    ],
    price: 600, // Fixed price per day in INR
    priceDisplay: "600",
    minDays: 7,
    maxDays: 90,
    defaultDays: 15,
    type: "daily",
  },
  {
    id: 2,
    title: "Physiotherapy at Home",
    description:
      "Certified physiotherapists for rehabilitation, mobility improvement, and pain management at home.",
    icon: <AccessibilityNew fontSize="large" />,
    image:
      "https://plus.unsplash.com/premium_photo-1663090066870-7feecb0f57ee?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Therapeutic exercises",
      "Pain management techniques",
      "Post-surgical rehabilitation",
      "Neurological rehabilitation",
      "Geriatric physiotherapy",
      "Sports injury recovery",
    ],
   
    price: 800, // Fixed price per session in INR
    priceDisplay: "800",
    minSessions: 5,
    maxSessions: 30,
    defaultSessions: 10,
    type: "session",
  },
  {
    id: 3,
    title: "Patient Care at Home",
    description:
      "Comprehensive nursing care for patients recovering from illness, surgery, or chronic conditions.",
    icon: <LocalHospital fontSize="large" />,
    image:
      "https://plus.unsplash.com/premium_photo-1664474481558-941d15e8dc86?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Vital signs monitoring",
      "Wound care and dressing",
      "Medication administration",
      "Injections and IV management",
      "Post-operative care",
      "Chronic disease management",
    ],
   
    price: 1200, // Fixed price per day in INR
    priceDisplay: "1,200",
    minDays: 7,
    maxDays: 90,
    defaultDays: 15,
    type: "daily",
  },
  {
    id: 4,
    title: "Paralysis Care",
    description:
      "Specialized care for paralysis patients with focus on mobility, comfort, and quality of life.",
    icon: <WheelchairPickup fontSize="large" />,
    image:
      "https://plus.unsplash.com/premium_photo-1664474762212-e0e5539fa853?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Positioning and turning (2-hourly)",
      "Pressure sore prevention",
      "Passive range of motion exercises",
      "Bladder and bowel care",
      "Feeding and nutrition support",
      "Respiratory exercises",
    ],
   
    price: 1800, // Fixed price per day in INR
    priceDisplay: "1,800",
    minDays: 7,
    maxDays: 180,
    defaultDays: 30,
    type: "daily",
  },
  {
    id: 5,
    title: "Nursing Care Services",
    description:
      "Professional nursing by registered nurses for complex medical needs and clinical care.",
    icon: <MedicalServices fontSize="large" />,
    image:
      "https://plus.unsplash.com/premium_photo-1731540601838-6cb8e9a392d5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Skilled nursing assessments",
      "IV medication administration",
      "Catheter care and management",
      "Tracheostomy care",
      "Diabetic care and management",
      "Critical care at home",
    ],
   
    price: 1500, // Fixed price per day in INR
    priceDisplay: "1,500",
    minDays: 7,
    maxDays: 90,
    defaultDays: 15,
    type: "daily",
  },
  {
    id: 6,
    title: "Elderly Care",
    description:
      "Comprehensive elderly care focusing on independence, safety, and quality of life for senior citizens.",
    icon: <Elderly fontSize="large" />,
    image:
      "https://plus.unsplash.com/premium_photo-1661292091887-3c79691350c2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Daily living assistance",
      "Dementia and Alzheimer's care",
      "Fall prevention and safety",
      "Social engagement activities",
      "Health monitoring",
      "Doctor appointment coordination",
    ],
    
    price: 900, // Fixed price per day in INR
    priceDisplay: "900",
    minDays: 7,
    maxDays: 365,
    defaultDays: 30,
    type: "daily",
  },
  {
    id: 7,
    title: "Orthopedic Care",
    description:
      "Specialized care for bone, joint conditions and post-operative orthopedic care.",
    icon: <Healing fontSize="large" />,
    image:
      "https://images.unsplash.com/photo-1706777193603-76c3e9613553?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Post-fracture rehabilitation",
      "Joint replacement aftercare",
      "Pain management",
      "Mobility assistance",
      "Cast and brace care",
      "Weight-bearing guidance",
    ],
   
    price: 1100, // Fixed price per day in INR
    priceDisplay: "1,100",
    minDays: 7,
    maxDays: 90,
    defaultDays: 15,
    type: "daily",
  },
  {
    id: 8,
    title: "Mother & Newborn Care",
    description:
      "Postnatal care for mothers and newborn baby care by trained female attendants.",
    icon: <ChildCare fontSize="large" />,
    image:
      "https://plus.unsplash.com/premium_photo-1682094262987-86ac9b94a500?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Postnatal mother care",
      "Newborn baby care",
      "Breastfeeding support",
      "Baby bathing and hygiene",
      "Umbilical cord care",
      "Nutrition guidance for mother",
    ],
    
    price: 1200, // Fixed price per day in INR
    priceDisplay: "1,200",
    minDays: 15,
    maxDays: 90,
    defaultDays: 30,
    type: "daily",
  },
  {
    id: 9,
    title: "Cancer Care",
    description:
      "Palliative and supportive care for cancer patients during treatment and recovery.",
    icon: <Science fontSize="large" />,
    image:
      "https://plus.unsplash.com/premium_photo-1664475566566-77c65c28fdc5?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Chemotherapy support care",
      "Pain and symptom management",
      "Nutritional support",
      "Emotional counseling",
      "Palliative care",
      "Medication management",
    ],
    
    price: 2200, // Fixed price per day in INR
    priceDisplay: "2,200",
    minDays: 7,
    maxDays: 180,
    defaultDays: 30,
    type: "daily",
  },
];

// Testimonials Data with Indian names
const testimonials = [
  {
    name: "Priya Sharma",
    role: "Daughter of Elderly Patient",
    content:
      "The elderly care services for my father were exceptional. The caregiver was respectful, patient, and treated him like family.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Rajesh Kumar",
    role: "Orthopedic Patient",
    content:
      "Physiotherapy at home after my knee replacement was excellent. The therapist was punctual and helped me walk again confidently.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Anjali Patel",
    role: "Cancer Patient's Family",
    content:
      "The cancer care service provided to my mother was compassionate. The nurses were always attentive and managed her pain effectively.",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

// FAQ Data with Indian context
const faqs = [
  {
    question: "What qualifications do your caregivers have?",
    answer:
      "All our caregivers are certified professionals with relevant qualifications. Nurses are registered with Indian Nursing Council, and attendants are trained from recognized institutes with background verification.",
  },
  {
    question: "How quickly can services start?",
    answer:
      "We can typically start services within 12-24 hours in Delhi, NCR cities.",
  },
 
  {
    question: "What cities do you serve?",
    answer:
      "We currently serve in Delhi NCR cities in India.",
  },
  {
    question: "Can I change the caregiver if not satisfied?",
    answer:
      "Yes, we offer free replacement within 24 hours if you're not satisfied with your assigned caregiver. Your comfort is our priority.",
  },
  {
    question: "Is there a minimum service duration?",
    answer:
      "We offer flexible packages starting from 7 days for most services. For critical care, we can arrange services for shorter durations too.",
  },
];

const ServicePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const [selectedService, setSelectedService] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
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

  const steps = ['Select Duration', 'Patient Details', 'Review & Confirm'];
  const tollFreeNumber = "0120-409-9066"; // Updated toll-free number

  const handleServiceClick = (service) => {
    setSelectedService(service);
    const defaultDuration = service.defaultDays || service.defaultSessions || 15;
    setBookingForm((prev) => ({
      ...prev,
      service: service.title,
      duration: defaultDuration,
      totalAmount: calculateTotalAmount(service, defaultDuration),
    }));
    setActiveStep(0);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedService(null);
    setActiveStep(0);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", bookingForm);
    alert(
      `Thank you for your booking request! Total Amount: ₹${bookingForm.totalAmount}. Our care coordinator will call you within 2 hours.`,
    );
    setOpenDialog(false);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
    const value = event.target.value === '' ? 0 : Number(event.target.value);
    const min = selectedService?.minDays || selectedService?.minSessions || 1;
    const max = selectedService?.maxDays || selectedService?.maxSessions || 90;
    
    const clampedValue = Math.min(Math.max(value, min), max);
    
    setBookingForm((prev) => ({
      ...prev,
      duration: clampedValue,
      totalAmount: calculateTotalAmount(selectedService, clampedValue),
    }));
  };

  const handleNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBackStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const ServiceCard = ({ service }) => (
  <Fade in={true} timeout={1000}>
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 20px rgba(0,0,0,0.1)",
        },
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={service.image}
        alt={service.title}
        sx={{ objectFit: "cover" }}
      />
      <CardContent sx={{ flexGrow: 1, p: { xs: 2, sm: 3 } }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Avatar 
            sx={{ 
              bgcolor: "#2E7D32", 
              mr: 2,
              width: { xs: 40, sm: 48 },
              height: { xs: 40, sm: 48 }
            }}
          >
            {service.icon}
          </Avatar>
          <Typography
            variant="h6"
            component="h3"
            fontWeight="bold"
            sx={{ 
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
              color: "#1A5F7A"
            }}
          >
            {service.title}
          </Typography>
        </Box>
        <Typography
          color="text.secondary"
          paragraph
          sx={{ 
            fontSize: { xs: "0.875rem", sm: "0.9rem", md: "1rem" },
            lineHeight: 1.6
          }}
        >
          {service.description}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <List dense sx={{ mb: 2 }}>
          {service.features.map((feature, index) => (
            <ListItem key={index} disablePadding sx={{ mb: 1 }}>
              <ListItemIcon sx={{ minWidth: { xs: 30, sm: 36 } }}>
                <CheckCircle sx={{ color: "#2E7D32" }} fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={feature}
                primaryTypographyProps={{
                  variant: "body2",
                  sx: {
                    fontSize: {
                      xs: "0.75rem",
                      sm: "0.8125rem",
                      md: "0.875rem",
                    },
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
        {/* Price Display - Centered with star as superscript */}
        <Box
          sx={{
            mt: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F8F9FA",
            p: 2,
            borderRadius: "8px",
            mx: -2,
            mb: -2,
            mt: 2,
            position: "relative",
          }}
        >
          <Box sx={{ textAlign: "center", position: "relative" }}>
            {/* Star symbol as superscript */}
            <Typography
              component="span"
              sx={{
                position: "absolute",
                top: "-4px",
                right: "-10px",
                fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
                color: "#1A5F7A",
                fontWeight: "bold",
              }}
            >
              *
            </Typography>
            
            {/* Price with Rupee symbol */}
            <Typography
              variant="h5"
              color="#1A5F7A"
              fontWeight="bold"
              sx={{ 
                fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 0.5,
              }}
            >
              <CurrencyRupee fontSize="medium" />
              {/* Remove the * from priceDisplay since we're adding it as superscript */}
              {service.priceDisplay.replace('*', '')}
            </Typography>
            
          
          </Box>
        </Box>
      </CardContent>
      <Box sx={{ p: 2, pt: 0 }}>
        <Button
          fullWidth
          variant="contained"
          size={isMobile ? "medium" : "large"}
          onClick={() => handleServiceClick(service)}
          sx={{
            py: isMobile ? 1 : 1.5,
            fontSize: { xs: "0.875rem", sm: "0.9rem", md: "1rem" },
            backgroundColor: "#1A5F7A",
            "&:hover": {
              backgroundColor: "#15455A",
            },
            fontWeight: "bold",
            borderRadius: "8px",
          }}
        >
          Book Service
        </Button>
      </Box>
    </Card>
  </Fade>
);

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
            <Paper sx={{ p: 3, mb: 4, backgroundColor: "#F0F8FF", border: "1px solid #E3F2FD" }}>
              <Grid container spacing={2} alignItems="center">
                <Grid size={{ xs: 3, sm: 2 }}>
                  <Avatar sx={{ bgcolor: "#2E7D32", width: 60, height: 60 }}>
                    {selectedService?.icon}
                  </Avatar>
                </Grid>
                <Grid size={{ xs: 9, sm: 10 }}>
                  <Typography variant="h6" fontWeight="bold" color="#1A5F7A">
                    {selectedService?.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {selectedService?.description}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 2, mt: 1, flexWrap: "wrap" }}>
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
                  {bookingForm.duration} {selectedService?.type === "session" ? "sessions" : "days"}
                </Typography>
              </Box>
              
              <Slider
                value={bookingForm.duration}
                onChange={handleDurationChange}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `${value} ${selectedService?.type === "session" ? "sessions" : "days"}`}
                min={selectedService?.minDays || selectedService?.minSessions || 1}
                max={selectedService?.maxDays || selectedService?.maxSessions || 90}
                step={1}
                marks={[
                  {
                    value: selectedService?.minDays || selectedService?.minSessions || 1,
                    label: `${selectedService?.minDays || selectedService?.minSessions || 1}`,
                  },
                  {
                    value: selectedService?.defaultDays || selectedService?.defaultSessions || 15,
                    label: "Recommended",
                  },
                  {
                    value: selectedService?.maxDays || selectedService?.maxSessions || 90,
                    label: `${selectedService?.maxDays || selectedService?.maxSessions || 90}`,
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

              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, mt: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Manual Input:
                </Typography>
                <Input
                  value={bookingForm.duration}
                  size="small"
                  onChange={handleDurationInputChange}
                  inputProps={{
                    step: 1,
                    min: selectedService?.minDays || selectedService?.minSessions || 1,
                    max: selectedService?.maxDays || selectedService?.maxSessions || 90,
                    type: 'number',
                    style: { 
                      textAlign: 'center',
                      width: '80px',
                      fontWeight: 'bold'
                    }
                  }}
                  sx={{
                    "& .MuiInputBase-input": {
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#1A5F7A",
                      fontSize: "1rem"
                    }
                  }}
                />
                <Typography variant="body1" fontWeight="bold" color="#1A5F7A">
                  {selectedService?.type === "session" ? "sessions" : "days"}
                </Typography>
              </Box>
            </Box>

            {/* Price Summary */}
            <Paper sx={{ p: 3, backgroundColor: "#E8F5E9", border: "1px solid #C8E6C9" }}>
              <Typography variant="h6" fontWeight="bold" color="#1A5F7A" gutterBottom sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CurrencyRupee /> Price Summary
              </Typography>
              <Grid container spacing={2}>
                <Grid size={{ xs: 6 }}>
                  <Typography variant="body2" color="text.secondary">
                    {selectedService?.type === "session" ? "Per Session Rate" : "Daily Rate"}
                  </Typography>
                  <Typography variant="h6" color="#1A5F7A" fontWeight="bold" sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <CurrencyRupee fontSize="small" />
                    {selectedService?.priceDisplay}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Typography variant="body2" color="text.secondary" align="right">
                    Selected Duration
                  </Typography>
                  <Typography variant="h6" color="#1A5F7A" fontWeight="bold" align="right">
                    {bookingForm.duration} {selectedService?.type === "session" ? "sessions" : "days"}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Divider sx={{ my: 2 }} />
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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
                      {bookingForm.totalAmount.toLocaleString('en-IN')}
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
              <Grid size={{ xs: 12, sm: 6 }}>
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
                    }
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
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
                    }
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
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
                    }
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
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
                    }
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
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
                    }
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
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
                    }
                  }}
                >
                  <option value=""></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </TextField>
              </Grid>
              <Grid size={{ xs: 12 }}>
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
                    }
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
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
                    }
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
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
                    }
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
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
                    }
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
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
                    }
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
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
                    }
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
              <Grid size={{ xs: 12 }}>
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
                    }
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
            <Paper sx={{ p: 3, mb: 3, backgroundColor: "#F0F8FF", border: "1px solid #E3F2FD" }}>
              <Typography variant="h6" fontWeight="bold" color="#1A5F7A" gutterBottom sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <MedicalInformation /> Service Details
              </Typography>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="body2" color="text.secondary">Service</Typography>
                  <Typography variant="body1" fontWeight="bold">{selectedService?.title}</Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="body2" color="text.secondary">Price</Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {selectedService?.priceDisplay}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="body2" color="text.secondary">Duration</Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {bookingForm.duration} {selectedService?.type === "session" ? "sessions" : "days"}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="body2" color="text.secondary">Start Date</Typography>
                  <Typography variant="body1" fontWeight="bold">{bookingForm.date || "Not specified"}</Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="body2" color="text.secondary">Preferred Time</Typography>
                  <Typography variant="body1" fontWeight="bold">{bookingForm.time || "Not specified"}</Typography>
                </Grid>
              </Grid>
            </Paper>

            {/* Patient Details */}
            <Paper sx={{ p: 3, mb: 3, backgroundColor: "#F0F8FF", border: "1px solid #E3F2FD" }}>
              <Typography variant="h6" fontWeight="bold" color="#1A5F7A" gutterBottom sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <PersonAdd /> Patient Details
              </Typography>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="body2" color="text.secondary">Full Name</Typography>
                  <Typography variant="body1" fontWeight="bold">{bookingForm.name || "Not provided"}</Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="body2" color="text.secondary">Contact</Typography>
                  <Typography variant="body1" fontWeight="bold">{bookingForm.phone || "Not provided"}</Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="body2" color="text.secondary">Email</Typography>
                  <Typography variant="body1" fontWeight="bold">{bookingForm.email || "Not provided"}</Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="body2" color="text.secondary">Emergency Contact</Typography>
                  <Typography variant="body1" fontWeight="bold">{bookingForm.emergencyContact || "Not provided"}</Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="body2" color="text.secondary">Address</Typography>
                  <Typography variant="body1" fontWeight="bold">{bookingForm.address || "Not provided"}</Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="body2" color="text.secondary">City & Pincode</Typography>
                  <Typography variant="body1" fontWeight="bold">{bookingForm.city ? `${bookingForm.city} - ${bookingForm.pincode}` : "Not provided"}</Typography>
                </Grid>
              </Grid>
            </Paper>

            {/* Medical Information */}
            {bookingForm.medicalHistory && (
              <Paper sx={{ p: 3, mb: 3, backgroundColor: "#FFF3E0", border: "1px solid #FFE0B2" }}>
                <Typography variant="h6" fontWeight="bold" color="#1A5F7A" gutterBottom sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Assignment /> Medical Information
                </Typography>
                <Typography variant="body1">
                  {bookingForm.medicalHistory}
                </Typography>
              </Paper>
            )}

            {/* Price Summary */}
            <Paper sx={{ p: 3, backgroundColor: "#E8F5E9", border: "1px solid #C8E6C9" }}>
              <Typography variant="h6" fontWeight="bold" color="#1A5F7A" gutterBottom sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Payment /> Price Summary
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
                <Box>
                  <Typography variant="body1" color="text.secondary">Service</Typography>
                  <Typography variant="body1" fontWeight="bold">{selectedService?.title}</Typography>
                </Box>
                <Box sx={{ textAlign: "right" }}>
                  <Typography variant="h4" color="#2E7D32" fontWeight="bold" sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <CurrencyRupee fontSize="medium" />
                    {bookingForm.totalAmount.toLocaleString('en-IN')}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Total amount for {bookingForm.duration} {selectedService?.type === "session" ? "sessions" : "days"}
                  </Typography>
                </Box>
              </Box>
            </Paper>

            {/* Terms and Conditions */}
            <Box sx={{ mt: 3, p: 2, backgroundColor: "#F5F5F5", borderRadius: "8px" }}>
              <Typography variant="body2" color="text.secondary" align="center">
                By submitting this form, you agree to our Terms of Service and Privacy Policy. 
                Our care coordinator will contact you within 2 hours to confirm the booking and discuss payment options.
              </Typography>
            </Box>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Box sx={{ backgroundColor: "#f0f7ff",}}>
    <Container
      maxWidth="lg"
      sx={{ 
        py: { xs: 3, sm: 4, md: 6 }, 
        px: { xs: 2, sm: 3, md: 4 },
        // backgroundColor: "#FFFFFF"
      }}
    >
      {/* Hero Section */}
      <Box sx={{ 
        
        textAlign: "center", 
        mb: { xs: 4, sm: 6, md: 8 },
        p: { xs: 3, sm: 4, md: 5 },
      }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "bold",
            background: "#2c3e50",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
            lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },
          }}
        >
          Home Healthcare Services in India
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          paragraph
          sx={{
            maxWidth: 800,
            mx: "auto",
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
            px: { xs: 1, sm: 2 },
            color: "#5D6D7E",
            mt: 2,
          }}
        >
          Professional Health Care at Your Doorstep
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: 800,
            mx: "auto",
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            px: { xs: 1, sm: 2 },
            color: "#7F8C8D",
            mb: 3,
          }}
        >
          Certified doctors, nurses, and caregivers providing personalized healthcare services in the comfort of your home across India.
        </Typography>
        <Box
          sx={{
            mt: { xs: 3, sm: 4, md: 5 },
            display: "flex",
            gap: { xs: 1, sm: 1.5, md: 2 },
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Chip
            icon={<Schedule sx={{ fontSize: { xs: "small", sm: "medium" } }} />}
            label="24/7 Emergency Service"
            color="primary"
            sx={{ 
              backgroundColor: "#E8F5E9",
              color: "#2E7D32",
              fontWeight: 500 
            }}
            size={isMobile ? "small" : "medium"}
          />
          <Chip
            icon={
              <VerifiedUser sx={{ fontSize: { xs: "small", sm: "medium" } }} />
            }
            label="Licensed Professionals"
            color="primary"
            sx={{ 
              backgroundColor: "#E3F2FD",
              color: "#1A5F7A",
              fontWeight: 500 
            }}
            size={isMobile ? "small" : "medium"}
          />
          <Chip
            icon={
              <HealthAndSafety
                sx={{ fontSize: { xs: "small", sm: "medium" } }}
              />
            }
            label="All Medical Services"
            color="primary"
            sx={{ 
              backgroundColor: "#FCE4EC",
              color: "#C2185B",
              fontWeight: 500 
            }}
            size={isMobile ? "small" : "medium"}
          />
        </Box>
      </Box>

      {/* Services Section */}
      <Box sx={{ mb: { xs: 4, sm: 6, md: 8 } }}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          align="center"
          fontWeight="bold"
          sx={{
            mb: { xs: 3, sm: 4, md: 6 },
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
            color: "#1A5F7A",
            position: "relative",
            "&:after": {
              content: '""',
              display: "block",
              width: "100px",
              height: "4px",
              backgroundColor: "#2E7D32",
              margin: "16px auto 0",
              borderRadius: "2px",
            },
          }}
        >
          Our Healthcare Services
        </Typography>
        <Grid container spacing={{ xs: 3, sm: 4, md: 4 }}>
          {services.map((service) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={service.id}>
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ 
        mb: { xs: 4, sm: 6, md: 8 },
        p: { xs: 3, sm: 4, md: 5 },
      }}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          align="center"
          fontWeight="bold"
          sx={{ 
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
            color: "#1A5F7A",
            mb: { xs: 3, sm: 4, md: 5 }
          }}
        >
          Why Choose MedCare at Home?
        </Typography>
        <Grid
          container
          spacing={{ xs: 3, sm: 4, md: 4 }}
          sx={{ mt: { xs: 1, sm: 2 } }}
        >
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
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
                  lineHeight: 1.7
                }}
              >
                All our healthcare professionals are registered with Indian Nursing Council and undergo regular training. We verify qualifications, experience, and conduct thorough background checks.
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
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
                  lineHeight: 1.7
                }}
              >
                Clear fixed pricing with detailed invoices. No price fluctuations. We help with insurance claims and offer flexible payment options including UPI, credit cards, and cash payments.
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
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
                  lineHeight: 1.7
                }}
              >
                Round-the-clock assistance with toll-free support in Hindi, English, and regional languages. Emergency services available across all major Indian cities with quick response times.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ 
        mb: { xs: 4, sm: 6, md: 8 },
        p: { xs: 3, sm: 4, md: 5 },
      }}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          align="center"
          fontWeight="bold"
          sx={{ 
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
            color: "#1A5F7A",
            mb: { xs: 3, sm: 4, md: 5 }
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
            <Grid size={{ xs: 12, md: 4 }} key={index}>
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

      {/* FAQ Section */}
      <Box sx={{ 
        mb: { xs: 4, sm: 6, md: 8 },
        p: { xs: 3, sm: 4, md: 5 },
      }}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          align="center"
          fontWeight="bold"
          sx={{ 
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
            color: "#1A5F7A",
            mb: { xs: 3, sm: 4, md: 5 }
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
                }
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

      {/* Contact CTA */}
       <Paper
        sx={{
          p: { xs: 4, sm: 5, md: 6 },
          textAlign: "center",
          background: "linear-gradient(135deg, #1A5F7A 0%, #2E7D32 100%)",
          color: "white",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(26, 95, 122, 0.2)",
          mb: { xs: 3, sm: 4, md: 6 },
          position: "relative",
          overflow: "hidden",
          "&:before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)",
          }
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          fontWeight="bold"
          sx={{ 
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            position: "relative",
            zIndex: 1,
          }}
        >
          Need Medical Care at Home?
        </Typography>
        <Typography
          variant="h5"
          paragraph
          sx={{
            mb: { xs: 4, sm: 5 },
            opacity: 0.9,
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
            position: "relative",
            zIndex: 1,
          }}
        >
          Get Free Consultation with Our Healthcare Experts
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: { xs: 2, sm: 3, md: 4 },
            justifyContent: "center",
            flexWrap: "wrap",
            flexDirection: { xs: "column", sm: "row" },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Button
            variant="contained"
            size={isMobile ? "large" : "large"}
            startIcon={<Phone />}
            sx={{
              backgroundColor: "#FFFFFF",
              color: "#1A5F7A",
              "&:hover": { 
                backgroundColor: "#F5F5F5",
                transform: "translateY(-2px)",
              },
              width: { xs: "100%", sm: "auto" },
              minWidth: { sm: "220px" },
              py: { xs: 1.5, sm: 2 },
              fontSize: { xs: "1rem", sm: "1.1rem" },
              fontWeight: "bold",
              borderRadius: "50px",
              transition: "all 0.3s",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
            onClick={() => (window.location.href = "tel: 0120-409-9066")}
          >
            Call Toll-Free : 0120-409-9066
          </Button>
          <Button
            variant="outlined"
            size={isMobile ? "large" : "large"}
            startIcon={<WhatsApp />}
            sx={{
              borderColor: "#FFFFFF",
              color: "#FFFFFF",
              "&:hover": {
                borderColor: "#25D366",
                backgroundColor: "#25D366",
                transform: "translateY(-2px)",
              },
              width: { xs: "100%", sm: "auto" },
              minWidth: { sm: "220px" },
              py: { xs: 1.5, sm: 2 },
              fontSize: { xs: "1rem", sm: "1.1rem" },
              fontWeight: "bold",
              borderRadius: "50px",
              transition: "all 0.3s",
            }}
            onClick={() => window.open("https://wa.me/+919599062557", "_blank")}
          >
            WhatsApp Us
          </Button>
          <Button
            variant="outlined"
            size={isMobile ? "large" : "large"}
            startIcon={<Email />}
            sx={{
              borderColor: "#FFFFFF",
              color: "#FFFFFF",
              "&:hover": {
                borderColor: "#F5F5F5",
                backgroundColor: "rgba(255,255,255,0.1)",
                transform: "translateY(-2px)",
              },
              width: { xs: "100%", sm: "auto" },
              minWidth: { sm: "220px" },
              py: { xs: 1.5, sm: 2 },
              fontSize: { xs: "1rem", sm: "1.1rem" },
              fontWeight: "bold",
              borderRadius: "50px",
              transition: "all 0.3s",
            }}
            onClick={() => (window.location.href = "mailto:info@vestalhealth.in")}
          >
            Email: info@vestalhealth.in
          </Button>
        </Box>
      </Paper>

      {/* Full Screen Booking Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
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
        <DialogTitle sx={{ 
          m: 0, 
          p: { xs: 2, sm: 3 },
          backgroundColor: "#1A5F7A",
          color: "white",
          position: "sticky",
          top: 0,
          zIndex: 10,
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton
                onClick={handleCloseDialog}
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
                  sx={{ fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" } }}
                >
                  Book {selectedService?.title}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9, mt: 0.5 }}>
                  Step {activeStep + 1} of {steps.length}: {steps[activeStep]}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", gap: 2 }}>
              <Avatar sx={{ bgcolor: "#2E7D32", width: 40, height: 40 }}>
                {selectedService?.icon}
              </Avatar>
              <Box sx={{ textAlign: "right" }}>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Total Amount
                </Typography>
                <Typography variant="h6" fontWeight="bold" sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <CurrencyRupee fontSize="small" />
                  {bookingForm.totalAmount.toLocaleString('en-IN')}
                </Typography>
              </Box>
            </Box>
          </Box>
        </DialogTitle>

        <Box sx={{ 
          display: "flex", 
          flexDirection: { xs: "column", md: "row" },
          height: "calc(100vh - 64px)",
          overflow: "hidden",
        }}>
          {/* Left Panel - Service Details */}
          <Box sx={{ 
            width: { xs: "100%", md: "35%" },
            height: "100%",
            backgroundColor: "#F8F9FA",
            borderRight: "1px solid #E0E0E0",
            overflowY: "auto",
            p: { xs: 2, sm: 3, md: 4 },
          }}>
            {selectedService && (
              <>
                <Typography variant="h6" fontWeight="bold" color="#1A5F7A" gutterBottom>
                  Service Details
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={selectedService.image}
                    alt={selectedService.title}
                    sx={{ 
                      borderRadius: "12px",
                      objectFit: "cover",
                      mb: 2,
                      width: "100%"
                    }}
                  />
                  <Typography variant="h6" fontWeight="bold" color="#1A5F7A">
                    {selectedService.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {selectedService.description}
                  </Typography>
                </Box>

                <Typography variant="subtitle1" fontWeight="bold" color="#1A5F7A" gutterBottom sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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

                <Paper sx={{ p: 2, mt: 3, backgroundColor: "#E8F5E9", border: "1px solid #C8E6C9" }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Price
                      </Typography>
                      <Typography variant="h6" color="#1A5F7A" fontWeight="bold" sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
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
          <Box sx={{ 
            width: { xs: "100%", md: "65%" },
            height: "100%",
            overflowY: "auto",
            p: { xs: 2, sm: 3, md: 4 },
          }}>
            <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <form onSubmit={handleBookingSubmit}>
              {renderStepContent(activeStep)}

              <Box sx={{ 
                display: "flex", 
                justifyContent: "space-between", 
                mt: 4,
                pt: 3,
                borderTop: "1px solid #E0E0E0"
              }}>
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
                    Confirm Booking for ₹{bookingForm.totalAmount.toLocaleString('en-IN')}
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
            <Paper sx={{ 
              p: 3, 
              mt: 4, 
              backgroundColor: "#F0F8FF", 
              border: "1px solid #E3F2FD",
              borderRadius: "12px",
            }}>
              <Typography variant="h6" fontWeight="bold" color="#1A5F7A" gutterBottom sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <SupportAgent /> Need Help?
              </Typography>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
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
                    onClick={() => (window.location.href = `tel:${tollFreeNumber.replace(/-/g, "")}`)}
                  >
                    Toll-Free: {tollFreeNumber}
                  </Button>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
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
                    onClick={() => window.open("https://wa.me/+919599062557", "_blank")}
                  >
                    WhatsApp Support
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Box>
      </Dialog>
    </Container>
    </Box>
  );
};

export default ServicePage;