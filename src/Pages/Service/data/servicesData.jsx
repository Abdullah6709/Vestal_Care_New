import {
  Person,
  AccessibilityNew,
  LocalHospital,
  WheelchairPickup,
  MedicalServices,
  Elderly,
  Healing,
  ChildCare,
  Science,
} from "@mui/icons-material";

// Updated Service Data with Indian context and FIXED pricing in INR
export const services = [
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