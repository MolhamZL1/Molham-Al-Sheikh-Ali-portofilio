import { UserInfo } from '../types/UserInfo';
import profileImage from './images/profile.jpg';

export const userInfo: UserInfo = {
  name: "Molham Al-Sheikh Ali",
  title: "Flutter Developer",
  bio: "Passionate Flutter developer with 2+ years of experience in creating beautiful, high-performance mobile applications. Specialized in building cross-platform solutions that deliver exceptional user experiences.",
  email: "molhamsa49@gmail.com",
  phone: "+963 988159532",
  location: "Damascus, Syria",
  profileImage: profileImage,
  resumeUrl: "src/data/images/cv.pdf",
  skills: [
    "Flutter",
    "Dart",
    "Firebase",
    "Responsive & Adaptive UI",
    "REST APIs",
    "State Management",
    "Bloc,Cubit",
    "CI/CD",
    "Git",
    "GitHub", 
    "OOP","C++","Java","Algorithms","Data Structures"
  ],
  social: {
    github: "https://github.com/MolhamZL1",
    linkedin: "https://www.linkedin.com/in/molham-al-sheikh-ali-684982268/",
    instagram: "https://www.instagram.com/molhamsheikh/",
    facebook: "https://www.facebook.com/molhamslsh.alshihali/",
    telegram:"https://t.me/MolhamSheikh"
  },
  projects: [
    {
      title: "Health & Fitness App",
      description: "A comprehensive fitness tracking application built with Flutter and Firebase",
      technologies: ["Flutter", "Firebase", "Google Fit API", "Provider"],
      features: [
        "Real-time workout tracking",
        "Customizable fitness plans",
        "Integration with wearables",
        "Social features for workout sharing",
        "Offline support"
      ],
      imageUrl: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.example.fitnessapp",
      appStoreUrl: "https://apps.apple.com/app/fitnessapp",
      githubUrl: "https://github.com/johndoe/fitness-app"
    },
    {
      title: "E-commerce Mobile App",
      description: "A feature-rich e-commerce application with seamless payment integration",
      technologies: ["Flutter", "Node.js", "MongoDB", "Stripe"],
      features: [
        "Product categorization",
        "Advanced search filters",
        "Secure payment processing",
        "Order tracking",
        "Push notifications"
      ],
      imageUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.example.ecommerce",
      appStoreUrl: "https://apps.apple.com/app/ecommerce",
      githubUrl: "https://github.com/johndoe/ecommerce-app"
    },
    {
      title: "Smart Home Control App",
      description: "IoT-based home automation system with real-time device control",
      technologies: ["Flutter", "MQTT", "WebSocket", "BLoC"],
      features: [
        "Device management",
        "Automation schedules",
        "Energy consumption tracking",
        "Voice commands",
        "Multi-home support"
      ],
      imageUrl: "https://images.unsplash.com/photo-1558002038-bb4237b50b11?auto=format&fit=crop&q=80",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.example.smarthome",
      appStoreUrl: "https://apps.apple.com/app/smarthome",
      githubUrl: "https://github.com/johndoe/smart-home-app"
    }
  ]
}