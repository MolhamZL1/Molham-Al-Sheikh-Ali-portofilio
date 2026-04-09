import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Download, MapPin, Code, Layers, Database,
  Smartphone, Settings, Brain, ArrowUpRight,
} from 'lucide-react';
import {
  SiGithub, SiLinkedin, SiInstagram,
  SiFacebook, SiWhatsapp, SiTelegram,
} from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { userInfo } from './data/userInfo';
import { ParticleBackground } from './components/ParticleBackground';
import { LazyImage } from './components/LazyImage';
import { ProjectPage } from './pages/ProjectPage';
import { Project } from './types/UserInfo';

// ─── Typewriter ───────────────────────────────────────────────────────────────

function useTypewriter(texts: string[], speed = 65, pause = 2000) {
  const [display, setDisplay] = useState('');
  const [ti, setTi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = texts[ti];
    let t: ReturnType<typeof setTimeout>;
    if (!del && ci < cur.length) {
      t = setTimeout(() => setCi(c => c + 1), speed);
    } else if (!del && ci === cur.length) {
      t = setTimeout(() => setDel(true), pause);
    } else if (del && ci > 0) {
      t = setTimeout(() => setCi(c => c - 1), speed / 2.2);
    } else {
      setDel(false);
      setTi(i => (i + 1) % texts.length);
    }
    setDisplay(cur.slice(0, ci));
    return () => clearTimeout(t);
  }, [ci, del, ti, texts, speed, pause]);

  return display;
}

// ─── Home ─────────────────────────────────────────────────────────────────────

function HomePage() {
  const navigate = useNavigate();
  const typed = useTypewriter([
    'Flutter Developer',
    'Mobile App Architect',
    'Clean Code Advocate',
    'UI/UX Craftsman',
  ]);

  const fadeIn = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
  };
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
  };

  const whatsappUrl = `https://wa.me/${userInfo.phone.replace(/[^0-9]/g, '')}`;
  const telegramUrl = `https://t.me/${userInfo.telegram}`;

  const socials = [
    { icon: SiGithub, url: userInfo.social.github, label: 'GitHub' },
    { icon: SiLinkedin, url: userInfo.social.linkedin, label: 'LinkedIn' },
    { icon: SiInstagram, url: userInfo.social.instagram, label: 'Instagram' },
    { icon: SiFacebook, url: userInfo.social.facebook, label: 'Facebook' },
    { icon: MdEmail, url: `mailto:${userInfo.email}`, label: 'Email' },
    { icon: SiWhatsapp, url: whatsappUrl, label: 'WhatsApp' },
    { icon: SiTelegram, url: telegramUrl, label: 'Telegram' },
  ];

  const skillIcons: Record<string, React.ElementType> = {
    Frontend: Code,
    Backend: Layers,
    Mobile: Smartphone,
    Database: Database,
    'Tools & DevOps': Settings,
    'Computer Science': Brain,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#060c18] text-white relative overflow-x-hidden"
    >
      <ParticleBackground />

      {/* Ambient glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-blue-600/8 blur-[140px]" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/8 blur-[140px]" />
      </div>

      {/* ── Header ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, delay: 0.15 }}
        className="fixed w-full bg-black/25 backdrop-blur-xl border-b border-white/[0.06] z-40"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.span
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent tracking-tight"
          >
            {userInfo.name.split(' ')[0]}
            <span className="text-white/20">.</span>
          </motion.span>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-0.5"
          >
            {socials.map(s => (
              <motion.a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeIn}
                whileHover={{ scale: 1.18, y: -1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={s.label}
                className="text-gray-500 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/8"
              >
                <s.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.header>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center px-6 pt-24 pb-16">
        <div className="container mx-auto max-w-6xl w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
  {/* Image */}
      <motion.div
        initial={{ scale: 0.75, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 85, delay: 0.2 }}
        className="relative flex-shrink-0 order-1"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-4 sm:-inset-5 lg:-inset-6 rounded-full border border-dashed border-blue-500/20"
        />
        <div className="absolute -inset-1.5 sm:-inset-2 rounded-full border border-blue-500/10" />
        <div className="absolute inset-0 rounded-full bg-blue-500/15 blur-3xl scale-125" />

        <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl ring-2 ring-blue-500/35">
          <LazyImage
            src={userInfo.profileImage}
            alt={userInfo.name}
            className="w-full h-full object-cover"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full px-2.5 sm:px-3 py-1.5 text-[10px] sm:text-xs font-semibold shadow-xl border border-white/10 whitespace-nowrap"
        >
          2+ yrs exp ✦
        </motion.div>
      </motion.div>

      {/* Text */}
      <motion.div className="flex-1 text-center lg:text-left order-2 w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="inline-flex items-center gap-2 mb-4 sm:mb-5 lg:mb-6 px-3 sm:px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/8 text-green-400 text-[10px] sm:text-xs font-mono tracking-wider"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Open to opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mb-4 sm:mb-5 leading-[0.95]"
        >
          <span className="block bg-gradient-to-br from-white via-blue-50 to-purple-100 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter">
            {userInfo.name.split(' ')[0]}
          </span>
          <span className="block text-white/30 font-light tracking-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-1 sm:mt-2">
            {userInfo.name.split(' ').slice(1).join(' ')}
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center lg:justify-start gap-2 mb-4 sm:mb-5 h-8 sm:h-9"
        >
          <span className="text-lg sm:text-xl md:text-2xl text-blue-300 font-semibold text-center lg:text-left">
            {typed}
          </span>
          <span className="w-0.5 h-5 sm:h-6 bg-blue-400 rounded-full animate-pulse" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-sm sm:text-base text-gray-400 leading-7 sm:leading-8 max-w-xl mb-6 sm:mb-8 lg:mb-9 mx-auto lg:mx-0"
        >
          {userInfo.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
        >
          <a
            href={userInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:scale-[1.02]"
          >
            <Download className="w-4 h-4" />
            View Resume
            <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>

          <div className="flex items-center gap-1.5 text-gray-400 text-sm">
            <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span>{userInfo.location}</span>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="w-full mt-8 sm:mt-10 lg:mt-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06] border border-white/[0.06] rounded-2xl bg-white/[0.02] backdrop-blur-sm overflow-hidden">
            {[
              { value: '6+', label: 'Projects Built' },
              { value: '2+', label: 'Years Experience' },
              { value: '5', label: 'Commercial Apps' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center py-4 sm:py-5 px-4">
                <span className="text-2xl md:text-3xl font-black bg-gradient-to-br from-blue-300 to-purple-400 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-[11px] text-gray-400 mt-1 font-mono uppercase tracking-wider text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  </div>


</section>

      {/* ── Skills ── */}
      <section className="py-28 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.3em] mb-3">
              What I work with
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {userInfo.skillCategories.map((cat, i) => {
              const Icon = skillIcons[cat.name] || Code;
              return (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  whileHover={{ y: -7, scale: 1.015 }}
                  className="group bg-white/[0.03] hover:bg-white/[0.055] rounded-2xl p-6 border border-white/[0.07] hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-white">{cat.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((sk, si) => (
                      <motion.span
                        key={si}
                        whileHover={{ scale: 1.07 }}
                        className="px-2.5 py-1 bg-blue-500/10 text-blue-300 rounded-lg text-xs font-medium border border-blue-500/20 hover:bg-blue-500/22 transition-colors cursor-default"
                      >
                        {sk}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="py-28 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.3em] mb-3">
              Selected work
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Featured: first project, full-width horizontal */}
            {userInfo.projects.slice(0, 1).map((project: Project) => (
              <motion.div
                key={project.id}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                onClick={() => navigate(`/project/${project.id}`)}
                className="group bg-white/[0.03] rounded-2xl overflow-hidden border border-white/[0.07] hover:border-blue-500/35 transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative md:w-[45%] h-56 md:h-72 overflow-hidden bg-white/[0.03] flex-shrink-0">
                    <LazyImage
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      fallbackGradient="from-blue-900/40 to-purple-900/30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#060c18]/70 hidden md:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent md:hidden" />
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 bg-blue-600/80 backdrop-blur-sm text-white rounded-full text-[11px] font-semibold tracking-wide">
                        ✦ Featured
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 p-7 md:p-10 flex flex-col justify-center">
                    <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.2em] mb-3">{project.category}</span>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-3 group-hover:text-blue-300 transition-colors tracking-tight leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-[1.85] mb-6 max-w-md">
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-7">
                      {project.technologies.map((t, i) => (
                        <span key={i} className="px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded-md text-[11px] font-medium border border-blue-500/15">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-blue-400 text-sm font-semibold">
                      View case study <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Rest: 3-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userInfo.projects.slice(1).map((project: Project, index: number) => (
                <motion.div
                  key={project.id}
                  variants={fadeIn}
                  whileHover={{ y: -8 }}
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="group bg-white/[0.03] rounded-2xl overflow-hidden border border-white/[0.07] hover:border-blue-500/35 transition-all duration-300 cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden bg-white/[0.03]">
                    <LazyImage
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      fallbackGradient="from-blue-900/40 to-purple-900/30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <span className="px-2.5 py-1 bg-blue-600/75 backdrop-blur-sm text-white rounded-full text-[11px] font-medium">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 3).map((t, i) => (
                        <span key={i} className="px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded-md text-[11px] font-medium border border-blue-500/15">
                          {t}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-0.5 bg-white/5 text-gray-500 rounded-md text-[11px]">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-blue-400 text-xs font-medium">
                      View case study <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="py-28 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.3em] mb-3">
              Get in touch
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
              Let's Connect
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                { icon: MdEmail, href: `mailto:${userInfo.email}`, label: 'Email', sub: userInfo.email, hover: 'hover:text-blue-400' },
                { icon: SiWhatsapp, href: whatsappUrl, label: 'WhatsApp', sub: "Let's chat", hover: 'hover:text-green-400' },
                { icon: SiTelegram, href: telegramUrl, label: 'Telegram', sub: 'Quick messages', hover: 'hover:text-sky-400' },
              ].map(item => (
                <motion.a
                  key={item.label}
                  variants={fadeIn}
                  whileHover={{ x: 6 }}
                  href={item.href}
                  target={item.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 text-gray-400 ${item.hover} transition-all p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/[0.12] group`}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                  <div>
                    <p className="font-semibold text-sm text-white">{item.label}</p>
                    <p className="text-xs opacity-55 mt-0.5">{item.sub}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col justify-center items-center gap-8"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Ready to collaborate?</h3>
                <p className="text-gray-500 text-sm">Let's build something amazing together</p>
              </div>
              <div className="flex gap-3">
                {[
                  { icon: SiGithub, url: userInfo.social.github, color: 'hover:text-white hover:border-white/30' },
                  { icon: SiLinkedin, url: userInfo.social.linkedin, color: 'hover:text-blue-400 hover:border-blue-400/40' },
                  { icon: SiInstagram, url: userInfo.social.instagram, color: 'hover:text-pink-400 hover:border-pink-400/40' },
                  { icon: SiFacebook, url: userInfo.social.facebook, color: 'hover:text-blue-500 hover:border-blue-500/40' },
                ].map((s, i) => (
                  <motion.a
                    key={i}
                    variants={fadeIn}
                    whileHover={{ scale: 1.2, y: -4 }}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-600 ${s.color} transition-all p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.07]`}
                  >
                    <s.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-white/[0.05] py-8 relative z-10"
      >
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-700 text-xs font-mono">
            © {new Date().getFullYear()} {userInfo.name} — Crafted with passion and code.
          </p>
        </div>
      </motion.footer>
    </motion.div>
  );
}

// ─── Loading ──────────────────────────────────────────────────────────────────

function LoadingScreen() {
  const [txt, setTxt] = useState('Initializing...');
  useEffect(() => {
    const list = ['Initializing...', 'Loading modules...', 'Compiling code...', 'Deploying...'];
    let i = 0;
    const iv = setInterval(() => { i = (i + 1) % list.length; setTxt(list[i]); }, 600);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="h-screen bg-[#060c18] flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-32 h-32 mb-8"
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute text-6xl text-blue-400 font-mono left-0 top-1/2 -translate-y-1/2"
        >{'<'}</motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute text-6xl text-blue-400 font-mono right-0 top-1/2 -translate-y-1/2"
        >{'>'}</motion.div>
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl transform rotate-45 shadow-lg shadow-blue-500/30" />
        </motion.div>
      </motion.div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-blue-300 font-mono text-xl tracking-wider">
        {txt}
      </motion.p>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '200px' }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-4"
      />
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.documentElement.classList.add('dark');
    const t = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:id" element={<ProjectPage />} />
    </Routes>
  );
}

export default App;
