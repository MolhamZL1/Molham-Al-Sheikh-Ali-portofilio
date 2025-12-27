import { UserInfo } from '../types/UserInfo';

export const userInfo: UserInfo = {
  name: "Molham Al-Sheikh Ali",
  title: "Software Engineer",
  subtitle: "Software Engineer Focused on Mobile & Web Development",
  bio: "Software Engineering professional with over 2 years of experience creating beautiful, high-performance mobile applications. Specialized in building cross-platform solutions with Flutter that deliver exceptional user experiences, while applying solid software engineering principles, clean architecture, and best practices.",
  email: "molhamsa49@gmail.com",
  phone: "+963 988159532",
  telegram: "MolhamSheikh",
  location: "Damascus, Syria",
  profileImage: `${import.meta.env.BASE_URL}images/profile.jpg`,
  resumeUrl: "https://drive.google.com/file/d/11erGG9v8TAdoX38hK1wZvUzScqyBgHO9/view?usp=sharing",

  skillCategories: [
    {
      name: "Frontend",
      icon: "🎨",
      skills: [
        "Flutter",
        "Responsive & Adaptive UI",
        "REST API Integration",
        "State Management (Bloc, Cubit)",
        "Clean Architecture",
        "Animations & Transitions"
      ]
    },
    {
      name: "Backend",
      icon: "⚙️",
      skills: [
        "Express.js",
        "Laravel",
        "Node.js",
        
        "API Design",
        "Authentication & Authorization"
      ]
    },
    {
      name: "Mobile",
      icon: "📱",
      skills: [
        "Flutter",
        "Dart",
        "Cross-platform Development",
        "Push & In-App Notifications",
        "App Architecture",
        "Multi-language (RTL & LTR) Support"
      ]
    },
    {
      name: "Database",
      icon: "🗄️",
      skills: [
        "PostgreSQL",
        "SQL",
        "Firebase",
        "Supabase",
        "Database Design",
        "Cloud Storage"
      ]
    },
    {
      name: "Tools & DevOps",
      icon: "🛠️",
      skills: [
        "Git",
        "GitHub",
        "CI/CD",
        "Linux",
        "Agile Practices",
        "Testing",
      ]
    },
    {
      name: "Computer Science",
      icon: "🧠",
      skills: [
        "OOP",
        "C++",
        "Java",
        "Algorithms",
        "Data Structures"
      ]
    }
  ],

  social: {
    github: "https://github.com/MolhamZL1",
    linkedin: "https://www.linkedin.com/in/molham-al-sheikh-ali-684982268/",
    instagram: "https://www.instagram.com/molhamsheikh/",
    facebook: "https://www.facebook.com/molhamslsh.alshihali/"
  },

  projects: [
   {
  id: "Sajilha",
  title: "Sajilha",
  shortDescription:
"Sajelha is the electronic debt ledger for shop owners.",
  fullDescription:"Instead of relying on a paper ledger or your memory, gather all your customers' debts in one organized place. Know exactly who owes you, how much, and when the last payment was due. Never miss a payment again with automatic reminders sent to your customers via SMS or WhatsApp. Keep your cash flow steady and your business thriving.",
  myRole: "Flutter Developer & Mobile App Architect",
  category: "Mobile Application",
  duration: "Commercial Project",
  teamSize: "Team project",
  technologies: [
    "Flutter",
    "Dart",
    "Laravel",
    "mySQL",
    "Clean Architecture",
    "Cubit",
    "REST APIs",
   
  ],
  features: [
    "Add & manage customers and their debts",
    "Record payments and update debt status",
    "Automatic payment reminders via SMS or WhatsApp",
    "View debt history and reports",
    "Manage user profile and settings",
    "Dark/Light mode",
    "Supports Arabic (RTL) & English (LTR)"
  ],
  screenshots: [
    `${import.meta.env.BASE_URL}images/sajilha/all.png`,
      `${import.meta.env.BASE_URL}images/sajilha/1.png`,
       `${import.meta.env.BASE_URL}images/sajilha/2.png`,
  ],
  imageUrl: `${import.meta.env.BASE_URL}images/sajilha/all.png`,
  liveUrl: "https://sajilha-landing-page-8f577e8d9a56.hosted.ghaymah.systems"

},
{
  id: "Complains System",
  title: "Complains System",
  shortDescription:
    "A cross-platform government complaints app for submitting, tracking, and managing public service complaints with smart assistance.",
  fullDescription:
    "Complains System is a mobile application for submitting and tracking government service complaints. Users can create complaints, attach evidence (images/files), follow complaint status updates in real time, and receive notifications when the complaint is assigned, updated, or resolved. The app supports both Arabic (RTL) and English (LTR) and includes dark/light mode for a better user experience.",
  myRole: "Flutter Developer & Mobile App Architect",
  category: "Mobile Application",
  duration: "Commercial Project",
  teamSize: "Team project",
  technologies: [
    "Flutter",
    "Dart",
    "Laravel",
    "mySQL",
    "Clean Architecture",
    "Cubit",
    "REST APIs",
    "Push Notifications"
  ],
  features: [
    "Submit government complaints with category & location selection",
    "Attach images/files as evidence",
    "Track complaint status in real-time (Submitted, In Review, Assigned, Resolved, Rejected)",
    "Receive push & in-app notifications for every status update",
    "View complaint history and details",
    "Manage user profile and settings",
    "Dark/Light mode",
    "Supports Arabic (RTL) & English (LTR)"
  ],
  screenshots: [
    `${import.meta.env.BASE_URL}images/complaints app/all.png`,
     `${import.meta.env.BASE_URL}images/complaints app/auth.png`,
      `${import.meta.env.BASE_URL}images/complaints app/main.png`,
       `${import.meta.env.BASE_URL}images/complaints app/show.png`,
        `${import.meta.env.BASE_URL}images/complaints app/add.png`,
         `${import.meta.env.BASE_URL}images/complaints app/settings.png`,
  ],
  imageUrl: `${import.meta.env.BASE_URL}images/complaints app/all.png`,
  githubUrl: "https://github.com/MolhamZL1/Complaints-system-app"
},
    {
      id: "bitarmed",
      title: "BitarMed",
      shortDescription:
        "A cross-platform medical devices app for browsing, purchasing, renting, and managing maintenance with AI-powered assistance.",
      fullDescription:
        "BitarMed is a mobile application designed for browsing, purchasing, and renting medical devices. The app features an AI-powered chatbot (Gemini) to help users find the right products, submit and track maintenance requests, manage their profiles, and receive real-time updates on orders and rentals. It supports both Arabic (RTL) and English (LTR) and includes dark/light mode for an enhanced user experience.",
      myRole: "Flutter Developer & Mobile App Architect",
      category: "Mobile Application",
      duration: "Commercial Project",
      teamSize: "Team project",
      technologies: [
        "Flutter",
        "Dart",
        "Express.js",
        "PostgreSQL",
        "Clean Architecture",
        "Cubit",
        "REST APIs",
        "Notifications"
      ],
      features: [
        "Browse and purchase medical devices with Gemini AI chatbot assistance",
        "Rent devices for a specific period",
        "Submit and track maintenance requests",
        "Track orders and rentals in real-time",
        "Push & in-app notifications",
        "Manage user profile and settings",
        "Wishlist (favorite devices)",
        "Dark/Light mode",
        "Supports Arabic (RTL) & English (LTR)"
      ],
      screenshots: [
        `${import.meta.env.BASE_URL}images/BitarMed.png`,
       
      ],
      imageUrl: `${import.meta.env.BASE_URL}images/BitarMed.png`,
      githubUrl: "https://github.com/MolhamZL1/MedTechMobile"
    },
    {
      id: "safar-way-dashboard",
      title: "Safar Way (Dashboard)",
      shortDescription:
        "Tourism management dashboard for trips, places, bookings, and user reviews in Syria.",
      fullDescription:
        "Safar Way is a tourism platform that allows users to search for places of interest in Syria and book trips and tours. The dashboard provides tools for managing trips, places, bookings, and user feedback. It enables admins or operators to manage tourism content, monitor reservations, and support a better travel planning experience.",
      myRole: "Flutter Developer (Dashboard Frontend)",
      category: "Web Dashboard / Mobile Integration",
      duration: "Academic Project",
      teamSize: "Team project",
      technologies: [
        "Flutter",
        "Laravel",
        "SQL",
        "Clean Architecture",
        "Cubit",
        "REST APIs",
        "Cloud Storage"
      ],
      features: [
        "Trips booking management",
        "Places search and browsing",
        "Places booking management",
        "Reviews and ratings",
        "Push notifications",
        "Cloud storage integration",
        "User authentication"
      ],
      screenshots: [
        `${import.meta.env.BASE_URL}images/safarway_dashboard.png`,
      ],
      imageUrl: `${import.meta.env.BASE_URL}images/safarway_dashboard.png`,
      githubUrl: "https://github.com/MolhamZL1/tourism_app"
    },
    {
      id: "chatti",
      title: "Chatti",
      shortDescription:
        "Real-time chat application with voice/video calls and rich media sharing built with Flutter.",
      fullDescription:
        "Chatti is a real-time chat application built with Flutter that supports text messaging, voice calls, video calls, and media sharing. Users can send images, videos, and audio files, start voice or video calls, switch between them during a call, and receive notifications. The app focuses on smooth communication, secure connections, and a complete modern messaging experience.",
      myRole: "Flutter Developer",
      category: "Mobile Application",
      duration: "Personal Project",
      teamSize: "Solo project",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "Supabase",
        "Zego Cloud",
        "Clean Architecture",
        "Cubit",
        "Push Notifications"
      ],
      features: [
        "Real-time chat",
        "Video and audio calls",
        "Media sharing (images, videos, audio files)",
        "User authentication",
        "Push notifications",
        "Cloud storage"
      ],
      screenshots: [
        `${import.meta.env.BASE_URL}images/chat_app_screens.png`,
        `${import.meta.env.BASE_URL}images/chat_app_screens.png`
      ],
      imageUrl: `${import.meta.env.BASE_URL}images/chat_app_screens.png`,
      githubUrl: "https://github.com/MolhamZL1/chatti"
    },
    {
      id: "rosemary",
      title: "Roesmary",
      shortDescription:
        "E-commerce mobile app for selling medical products with cart, checkout, and order tracking.",
      fullDescription:
        "Roesmary is an e-commerce application built with Flutter for selling medical products. Users can register, log in, browse products by category, view product details, add items to their cart, checkout, and track their orders. The app supports product search, reviews, ratings, and provides a seamless and secure shopping experience for medical products.",
      myRole: "Flutter Developer",
      category: "Mobile E-commerce Application",
      duration: "Personal Project",
      teamSize: "Solo project",
      technologies: [
        "Flutter",
        "Dart",
        "Cubit",
        "Laravel",
        "Clean Architecture",
        "REST APIs"
      ],
      features: [
        "User authentication",
        "Product search",
        "Product reviews and ratings",
        "Add products to cart",
        "Checkout flow",
        "Order tracking",
        "Order history and details"
      ],
      screenshots: [
        `${import.meta.env.BASE_URL}images/roesmary.png`,
      
      ],
      imageUrl: `${import.meta.env.BASE_URL}images/roesmary.png`,
      githubUrl: "https://github.com/MolhamZL1/Rosemary"
    }
  ]
};
