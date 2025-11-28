import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {  Download, MapPin, Code, Layers, Database, Smartphone, Settings } from 'lucide-react';
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiFacebook,
  SiWhatsapp,
  SiTelegram,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { userInfo } from './data/userInfo';
import { ParticleBackground } from './components/ParticleBackground';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types/UserInfo';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const texts = ['Initializing...', 'Loading modules...', 'Compiling code...', 'Deploying...'];
    let currentIndex = 0;

    const textInterval = setInterval(() => {
      setLoadingText(texts[currentIndex]);
      currentIndex = (currentIndex + 1) % texts.length;
    }, 600);

    setTimeout(() => {
      clearInterval(textInterval);
      setLoading(false);
    }, 2500);

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
    hidden: { opacity: 0, y: 30 },
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

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  if (loading) {
    return (
      <div className="h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-32 h-32 mb-8"
        >
          {/* Animated code brackets */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            className="absolute text-6xl text-blue-400 font-mono left-0 top-1/2 -translate-y-1/2"
          >
            {'<'}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            className="absolute text-6xl text-blue-400 font-mono right-0 top-1/2 -translate-y-1/2"
          >
            {'>'}
          </motion.div>
          {/* Center rotating element */}
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl transform rotate-45" />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-blue-300 font-mono text-xl tracking-wider"
        >
          {loadingText}
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-4"
        />
      </div>
    );
  }

  const whatsappUrl = `https://wa.me/${userInfo.phone.replace(/[^0-9]/g, '')}`;
  const telegramUrl = `https://t.me/${userInfo.telegram}`;

  const skillIcons = {
    'Frontend': Code,
    'Backend': Layers,
    'Mobile': Smartphone,
    'Database': Database,
    'Tools & DevOps': Settings
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden"
    >
      <ParticleBackground />
      
      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        className="fixed w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-40"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              {userInfo.name}
            </motion.h1>
            
            <div className="flex items-center justify-between md:justify-end gap-6">
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex space-x-4"
              >
                {[
                  { icon: SiGithub, url: userInfo.social.github },
                  { icon: SiLinkedin, url: userInfo.social.linkedin },
                  { icon: SiInstagram, url: userInfo.social.instagram },
                  { icon: SiFacebook, url: userInfo.social.facebook },
                  { icon: MdEmail, url: `mailto:${userInfo.email}` },
                  { icon: SiWhatsapp, url: whatsappUrl },
                  { icon: SiTelegram, url: telegramUrl }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={fadeIn}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="pt-32 pb-20 px-6 relative z-10"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
              className="relative"
            >
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/30">
                <img 
                  src={userInfo.profileImage} 
                  alt={userInfo.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border-2 border-dashed border-blue-500/30"
              />
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="flex-1 text-center lg:text-left"
            >
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl lg:text-6xl font-bold mb-4"
              >
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {userInfo.title}
                </span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-blue-300 mb-6 font-medium"
              >
                {userInfo.subtitle}
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl"
              >
                {userInfo.bio}
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center justify-center lg:justify-start gap-2 text-gray-300 mb-8"
              >
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>{userInfo.location}</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="flex justify-center lg:justify-start"
              >
                <a
                  href={userInfo.resumeUrl}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  download
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Technical Expertise
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {userInfo.skillCategories.map((category, index) => {
              const IconComponent = skillIcons[category.name as keyof typeof skillIcons] || Code;
              return (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
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
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => openProjectModal(project)}
                className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="px-3 py-1 bg-blue-500/80 text-white rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">{project.shortDescription}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-300 rounded-lg text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                    Click to view details →
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
        className="py-20 px-6 relative z-10"
      >
        <div className="container mx-auto max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Let's Connect
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.a
                variants={fadeIn}
                whileHover={{ scale: 1.05, x: 10 }}
                href={`mailto:${userInfo.email}`}
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors p-4 rounded-xl bg-white/5 hover:bg-white/10"
              >
                <MdEmail className="w-6 h-6 mr-4" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm opacity-80">{userInfo.email}</p>
                </div>
              </motion.a>
              <motion.a
                variants={fadeIn}
                whileHover={{ scale: 1.05, x: 10 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-green-400 transition-colors p-4 rounded-xl bg-white/5 hover:bg-white/10"
              >
                <SiWhatsapp className="w-6 h-6 mr-4" />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-sm opacity-80">Let's chat</p>
                </div>
              </motion.a>
              <motion.a
                variants={fadeIn}
                whileHover={{ scale: 1.05, x: 10 }}
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors p-4 rounded-xl bg-white/5 hover:bg-white/10"
              >
                <SiTelegram className="w-6 h-6 mr-4" />
                <div>
                  <p className="font-semibold">Telegram</p>
                  <p className="text-sm opacity-80">Quick messages</p>
                </div>
              </motion.a>
            </motion.div>
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col justify-center items-center space-y-8"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to collaborate?</h3>
                <p className="text-gray-300 mb-6">Let's build something amazing together</p>
              </div>
              <div className="flex justify-center space-x-6">
                {[
                  { icon: SiGithub, url: userInfo.social.github, color: 'hover:text-gray-400' },
                  { icon: SiLinkedin, url: userInfo.social.linkedin, color: 'hover:text-blue-400' },
                  { icon: SiInstagram, url: userInfo.social.instagram, color: 'hover:text-pink-400' },
                  { icon: SiFacebook, url: userInfo.social.facebook, color: 'hover:text-blue-500' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    variants={fadeIn}
                    whileHover={{ scale: 1.3, y: -5 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors p-3 rounded-xl bg-white/5 hover:bg-white/10`}
                  >
                    <social.icon className="w-8 h-8" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-black/20 backdrop-blur-sm py-8 relative z-10"
      >
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} {userInfo.name}. Crafted with passion and code.</p>
        </div>
      </motion.footer>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </motion.div>
  );
}

export default App;