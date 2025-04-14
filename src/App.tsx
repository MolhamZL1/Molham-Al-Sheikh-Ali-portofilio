import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Github, Linkedin, Instagram, Facebook, Mail, Phone, Download, ExternalLink, MapPin, PlayCircle, Store, MessageCircle } from 'lucide-react';
import { userInfo } from './data/userInfo';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('');

  useEffect(() => {
    const texts = ['Initializing...', 'Compiling...', 'Building UI...', 'Deploying...'];
    let currentIndex = 0;

    const textInterval = setInterval(() => {
      setLoadingText(texts[currentIndex]);
      currentIndex = (currentIndex + 1) % texts.length;
    }, 500);

    // Simulate loading time
    setTimeout(() => {
      clearInterval(textInterval);
      setLoading(false);
    }, 2000);

    return () => clearInterval(textInterval);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const socialIconHover = {
    hover: { scale: 1.2, rotate: 5 }
  }; 
  
  if (loading) {
    return (
      <div className="h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-24 h-24 mb-8"
        >
          {/* Code brackets animation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="absolute text-4xl text-blue-600 font-mono left-0"
          >
            {'<'}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="absolute text-4xl text-blue-600 font-mono right-0"
          >
            {'>'}
          </motion.div>
          {/* Flutter logo animation */}
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-12 h-12 bg-blue-500 rounded-lg transform rotate-45" />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-blue-600 dark:text-blue-400 font-mono text-lg"
        >
          {loadingText}
        </motion.div>
      </div>
    );
  }
   const whatsappUrl = `https://wa.me/${userInfo.social.whatsapp.replace(/[^0-9]/g, '')}`;


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed w-full bg-white dark:bg-gray-800 shadow-sm z-50"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold text-gray-800 dark:text-white"
            >
              {userInfo.name}
            </motion.h1>
            
            <div className="flex items-center justify-between md:justify-end gap-6">
              {/* Social Links */}
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex space-x-4"
              >
                {[
                  { icon: Github, url: userInfo.social.github },
                  { icon: Linkedin, url: userInfo.social.linkedin },
                  { icon: Instagram, url: userInfo.social.instagram },
                  { icon: Facebook, url: userInfo.social.facebook },
                 // { icon: , url: userInfo.social.facebook },
                  { icon: Mail, url: `mailto:${userInfo.email}` },
                  { icon: Phone, url: `tel:${userInfo.phone}` },
                  { icon: MessageCircle, url: whatsappUrl },
               //   { icon: Telegram, url: telegramUrl }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={fadeIn}
                    whileHover="hover"
                    variants={socialIconHover}
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
              
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="pt-32 pb-12 px-6"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="w-48 h-48 rounded-full overflow-hidden shadow-xl"
            >
              <img 
                src={userInfo.profileImage} 
                alt={userInfo.name} 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              variants={fadeIn}
              className="flex-1 text-center md:text-left"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{userInfo.title}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">{userInfo.bio}</p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 dark:text-gray-300 mb-6">
                <MapPin className="w-5 h-5" />
                <span>{userInfo.location}</span>
              </div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex justify-center md:justify-start space-x-4"
              >
                <a
                  href={userInfo.resumeUrl}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  download
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Skills Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h3>
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3"
            >
              {userInfo.skills.map((skill, index) => (
                <motion.span
                  key={index}
                  variants={fadeIn}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section className="py-12 px-6 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-7xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {userInfo.projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg flex flex-col"
              >
                <div className="h-48">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2 mb-4"
                  >
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        variants={fadeIn}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-gray-200 dark:border-gray-600">
                    {project.playStoreUrl && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-600 dark:text-green-400 hover:underline"
                      >
                        <PlayCircle className="w-4 h-4 mr-1" />
                        Play Store
                      </motion.a>
                    )}
                    {project.appStoreUrl && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        <Store className="w-4 h-4 mr-1" />
                        App Store
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:underline"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        Source Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-12 px-6"
      >
        <div className="container mx-auto max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            Contact Me
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <motion.a
                variants={fadeIn}
                whileHover={{ scale: 1.05, x: 10 }}
                href={`mailto:${userInfo.email}`}
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Mail className="w-5 h-5 mr-2" />
                {userInfo.email}
              </motion.a>
              <motion.a
                variants={fadeIn}
                whileHover={{ scale: 1.05, x: 10 }}
                href={`tel:${userInfo.phone}`}
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Phone className="w-5 h-5 mr-2" />
                {userInfo.phone}
              </motion.a>
              <motion.a
                variants={fadeIn}
                whileHover={{ scale: 1.05, x: 10 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </motion.a>
            </motion.div>
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center md:justify-end space-x-6"
            >
              {[
                { icon: Github, url: userInfo.social.github },
                { icon: Linkedin, url: userInfo.social.linkedin },
                { icon: Instagram, url: userInfo.social.instagram },
                { icon: Facebook, url: userInfo.social.facebook },
               
              
                
              ].map((social, index) => (
                <motion.a
                  key={index}
                  variants={fadeIn}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-800 py-6"
      >
        <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-300">
          <p>© {new Date().getFullYear()} {userInfo.name}. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;