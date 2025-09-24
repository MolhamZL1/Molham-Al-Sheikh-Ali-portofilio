import { UserInfo } from '../types/UserInfo';


export const userInfo: UserInfo = {
  name: "Molham Al-Sheikh Ali",
  title: "Flutter Developer",
  bio: "5th year Softwate Engineer Student at Damascus University, Flutter developer with 2+ years of experience in creating beautiful, high-performance mobile applications. Specialized in building cross-platform solutions that deliver exceptional user experiences.",
  email: "molhamsa49@gmail.com",
  phone: "+963 988159532",

  location: "Damascus, Syria",
  profileImage: `${import.meta.env.BASE_URL}images/profile.jpg`,
  resumeUrl: `https://drive.google.com/file/d/11erGG9v8TAdoX38hK1wZvUzScqyBgHO9/view?usp=sharing`,
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
    telegram:"https://t.me/MolhamSheikh",
    whatsapp:"+963 988159532"
  },
  projects: [
     {
      title: "BitarMed",
      description: "BitarMed is a mobile application designed for browsing, purchasing, and renting medical devices. The app features an AI-powered chatbot, Gemini, to assist users in finding the right products. Users can submit and track maintenance requests, manage their profiles, and receive real-time updates on orders and rentals. The app supports both Arabic (RTL) and English (LTR) languages and offers a dark/light mode for better user experience.",
      technologies: ["Flutter", "Express js", "PostgreSQL", "Clean Architecture","Cubit"],
      features: [ 
        "Browse and purchase medical devices With Gemini Ai Chatbot",
        "Rent devices for a specific period",
        "Submit and track maintenance requests",
        "Track orders and rentals in real-time",
        "Push & in-app notifications",
        "Manage user profile and settings",
        "Wishlist (favorite devices)",
        "Dark/Light mode",
        "Supports Arabic (RTL) & English (LTR)"
      ],
      imageUrl: `${import.meta.env.BASE_URL}images/BitarMed.png`,
      // playStoreUrl: "",
      // appStoreUrl: "",
      githubUrl: "https://github.com/MolhamZL1/MedTechMobile"
    },
    {
      title: "Safar Way(Dashboard)",
      description: "Safar Way is a tourism app that allows users to search for places of interest in Syria, and book trips and tours. The app provides a platform for users to discover and explore new places, and to book their trips and tours easily. The app also allows users to rate and review their experiences, in order to help other users make informed decisions when planning their trips.",
      technologies: ["Flutter", "Laravel", "SQL", "Clean Architecture","Cubit"],
      features: [
        "Trips booking",
        "Places search",
        "Places booking",
        "Reviews and ratings",
        "Push notifications",
        "Cloud storage",
        "User authentication",
      ],
      imageUrl: `${import.meta.env.BASE_URL}images/safarway_dashboard.png`,
      // playStoreUrl: "",
      // appStoreUrl: "",
      githubUrl: "https://github.com/MolhamZL1/tourism_app"
    },
    {
      title: "Chatti",
      description: "A chat app built with Flutter that includes video and audio calls, along with media sharing, allows users to send pictures, videos, and audio files while chatting. Users can start voice or video calls, switch between them during the call, and share media easily. The app is designed to provide smooth communication and secure connections, with notifications and login features. It’s a complete platform for chatting, talking live, and sharing media with friends.",
      technologies: ["Flutter", "Firebase","Supabase", "Zego Cloud","Clean Architecture", "Cubit"],
      features: [
        "Real-time chat",
        "vedio,audio calls", 
        "media Sharing",
        "User authentication",
        "Push notifications",
        "Cloud storage",
      ],
      imageUrl:  `${import.meta.env.BASE_URL}images/chat_app_screens.png`,
    //  playStoreUrl: "",
   //   appStoreUrl: "",
      githubUrl: "https://github.com/MolhamZL1/chatti"
    },
  
    {
      title: "Roesmary",
      description: "An e-commerce app built with Flutter for selling medical products. The app allows users to register and login, browse products by category, view product details, add products to cart, checkout, and track their orders. The app also includes features such as product search, product reviews, and ratings. The app is designed to provide a seamless and secure online shopping experience for medical products.",
      technologies: ["Flutter", "Cubit", "Laravel", "Clean Architecture"],
      features: [
        "User authentication",
        "Product search",
        "Product reviews and ratings",
        "Add products to cart",
        "Checkout",
        "Track orders",
        "Order history",
        "Order details",
      ],
      imageUrl:  `${import.meta.env.BASE_URL}images/roesmary.png`,
      // playStoreUrl: "https://play.google.com/store/apps/details?id=com.example.smarthome",
      // appStoreUrl: "https://apps.apple.com/app/smarthome",
      githubUrl: "https://github.com/MolhamZL1/Rosemary"
    }
  ]
}