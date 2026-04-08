import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  ArrowLeft, ArrowRight, Github, ExternalLink,
  PlayCircle, Users, Calendar, Briefcase,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import { userInfo } from '../data/userInfo';
import { ParticleBackground } from '../components/ParticleBackground';

// ─── Section Label ─────────────────────────────────────────────────────────────

const SectionLabel = ({ number, label }: { number: string; label: string }) => (
  <div className="flex items-center gap-4 mb-8">
    <span className="text-xs font-mono text-blue-400 opacity-60">{number}</span>
    <div className="flex-1 h-px bg-white/10" />
    <h2 className="text-xs font-mono text-gray-400 uppercase tracking-[0.2em]">{label}</h2>
  </div>
);

// ─── Info Row ──────────────────────────────────────────────────────────────────

const InfoRow = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-start gap-3">
    <span className="text-blue-400 mt-0.5 opacity-70">{icon}</span>
    <div>
      <p className="text-[11px] text-gray-500 uppercase tracking-wider mb-0.5">{label}</p>
      <p className="text-sm text-white font-medium leading-snug">{value}</p>
    </div>
  </div>
);

// ─── Project Page ──────────────────────────────────────────────────────────────

export const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectIndex = userInfo.projects.findIndex((p) => p.id === id);
  const project = userInfo.projects[projectIndex];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setCurrentImageIndex(0);
  }, [id]);

  if (!project) {
    return (
      <div className="h-screen bg-[#050a14] flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4 font-mono text-sm">404 — project not found</p>
          <button
            onClick={() => navigate('/')}
            className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
          >
            ← back to portfolio
          </button>
        </div>
      </div>
    );
  }

  const prevProject = projectIndex > 0 ? userInfo.projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < userInfo.projects.length - 1 ? userInfo.projects[projectIndex + 1] : null;

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % project.screenshots.length);
  const prevImage = () =>
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length
    );

  return (
    <div className="min-h-screen bg-[#050a14] text-white relative">
      <ParticleBackground />

      {/* ── Sticky Nav ──────────────────────────────────────────────────────── */}
      <header className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.button
            onClick={() => navigate('/')}
            whileHover={{ x: -3 }}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-mono">Portfolio</span>
          </motion.button>

          <div className="hidden sm:flex items-center gap-3">
            <span className="text-[11px] font-mono text-gray-600 uppercase tracking-widest">
              {project.category}
            </span>
          </div>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <div className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${project.imageUrl})`,
            filter: 'blur(4px) brightness(0.18) saturate(1.4)',
            transform: 'scale(1.05)',
          }}
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a14]/60 via-transparent to-[#050a14]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050a14]/80 via-transparent to-transparent" />

        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 pb-16 pt-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-[11px] font-mono text-blue-400 uppercase tracking-[0.15em] border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 rounded-full">
                {project.duration}
              </span>
              <span className="text-[11px] font-mono text-purple-400 uppercase tracking-[0.15em] border border-purple-500/30 bg-purple-500/10 px-3 py-1.5 rounded-full">
                {project.teamSize}
              </span>
              <span className="text-[11px] font-mono text-gray-500 uppercase tracking-[0.15em]">
                — {project.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-6">
              <span className="bg-gradient-to-br from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                {project.title}
              </span>
            </h1>

            {/* Short description */}
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              {project.shortDescription}
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Main Content ────────────────────────────────────────────────────── */}
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Left: main content */}
          <div className="lg:col-span-2 space-y-20">

            {/* 01 — Overview */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel number="01" label="Overview" />
              <p className="text-base text-gray-300 leading-[1.9] tracking-wide">
                {project.fullDescription}
              </p>
            </motion.section>

            {/* 02 — Screenshots */}
            {project.screenshots.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <SectionLabel number="02" label="Screenshots" />

                {/* Main image */}
                <div className="relative rounded-2xl overflow-hidden bg-white/3 border border-white/8 aspect-video mb-4 group">
                  <motion.img
                    key={currentImageIndex}
                    src={project.screenshots[currentImageIndex]}
                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Image counter */}
                  {project.screenshots.length > 1 && (
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-mono text-gray-300">
                      {currentImageIndex + 1} / {project.screenshots.length}
                    </div>
                  )}

                  {/* Nav arrows */}
                  {project.screenshots.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 border border-white/10 hover:border-white/30"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 border border-white/10 hover:border-white/30"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}

                  {/* Dot indicators */}
                  {project.screenshots.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {project.screenshots.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentImageIndex(i)}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i === currentImageIndex
                              ? 'w-6 bg-white'
                              : 'w-1.5 bg-white/30 hover:bg-white/60'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Thumbnails */}
                {project.screenshots.length > 1 && (
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {project.screenshots.map((src, i) => (
                      <motion.button
                        key={i}
                        onClick={() => setCurrentImageIndex(i)}
                        whileHover={{ scale: 1.05 }}
                        className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden transition-all border-2 ${
                          i === currentImageIndex
                            ? 'border-blue-500 opacity-100'
                            : 'border-transparent opacity-40 hover:opacity-70'
                        }`}
                      >
                        <img src={src} alt="" className="w-full h-full object-cover" />
                      </motion.button>
                    ))}
                  </div>
                )}
              </motion.section>
            )}

            {/* 03 — Features */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel number="03" label="Key Features" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.4 }}
                    className="flex items-start gap-3 p-4 bg-white/[0.03] rounded-xl border border-white/[0.06] hover:border-blue-500/25 hover:bg-white/[0.05] transition-all group"
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <span className="text-[9px] font-bold text-white">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right: sticky sidebar */}
          <div>
            <div className="lg:sticky lg:top-24 space-y-5">

              {/* Project meta */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 space-y-5 backdrop-blur-sm"
              >
                <p className="text-[11px] font-mono text-gray-600 uppercase tracking-[0.2em]">
                  Project Info
                </p>
                <InfoRow
                  icon={<Briefcase className="w-4 h-4" />}
                  label="Role"
                  value={project.myRole}
                />
                <div className="h-px bg-white/5" />
                <InfoRow
                  icon={<Calendar className="w-4 h-4" />}
                  label="Type"
                  value={project.duration}
                />
                <div className="h-px bg-white/5" />
                <InfoRow
                  icon={<Users className="w-4 h-4" />}
                  label="Team"
                  value={project.teamSize}
                />
              </motion.div>

              {/* Tech stack */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 backdrop-blur-sm"
              >
                <p className="text-[11px] font-mono text-gray-600 uppercase tracking-[0.2em] mb-4">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className="px-3 py-1.5 bg-blue-500/10 text-blue-300 rounded-lg text-xs font-medium border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40 transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Links */}
              {(project.liveUrl || project.githubUrl || project.playStoreUrl) && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="space-y-3"
                >
                  <p className="text-[11px] font-mono text-gray-600 uppercase tracking-[0.2em] px-1">
                    Links
                  </p>

                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 3 }}
                      className="flex items-center gap-3 w-full px-4 py-3.5 bg-gradient-to-r from-blue-600/90 to-purple-600/90 hover:from-blue-500 hover:to-purple-500 rounded-xl transition-all group border border-blue-500/30 hover:border-blue-400/50"
                    >
                      <ExternalLink className="w-4 h-4 opacity-70" />
                      <span className="font-medium text-sm flex-1">Live Website</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </motion.a>
                  )}

                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 3 }}
                      className="flex items-center gap-3 w-full px-4 py-3.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 rounded-xl transition-all group"
                    >
                      <Github className="w-4 h-4 opacity-70" />
                      <span className="font-medium text-sm flex-1">Source Code</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-50 group-hover:translate-x-1 transition-all" />
                    </motion.a>
                  )}

                  {project.playStoreUrl && (
                    <motion.a
                      href={project.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 3 }}
                      className="flex items-center gap-3 w-full px-4 py-3.5 bg-green-500/10 hover:bg-green-500/20 border border-green-500/25 hover:border-green-500/40 rounded-xl transition-all group"
                    >
                      <PlayCircle className="w-4 h-4 text-green-400 opacity-70" />
                      <span className="font-medium text-sm flex-1 text-green-300">Play Store</span>
                      <ArrowRight className="w-3.5 h-3.5 text-green-400 opacity-0 group-hover:opacity-70 group-hover:translate-x-1 transition-all" />
                    </motion.a>
                  )}
                </motion.div>
              )}

            </div>
          </div>
        </div>

        {/* ── Prev / Next Navigation ───────────────────────────────────────── */}
        <div className="border-t border-white/[0.07] mt-24 pt-12">
          <p className="text-[11px] font-mono text-gray-600 uppercase tracking-[0.2em] text-center mb-8">
            More Projects
          </p>
          <div className="grid grid-cols-2 gap-4">
            {prevProject ? (
              <motion.button
                onClick={() => navigate(`/project/${prevProject.id}`)}
                whileHover={{ x: -4 }}
                className="group text-left p-6 bg-white/[0.02] hover:bg-white/[0.05] rounded-2xl border border-white/[0.07] hover:border-blue-500/30 transition-all"
              >
                <p className="text-[11px] text-gray-600 mb-2 flex items-center gap-1.5 font-mono uppercase tracking-wider">
                  <ArrowLeft className="w-3 h-3" />
                  Previous
                </p>
                <p className="font-bold text-white group-hover:text-blue-300 transition-colors leading-tight">
                  {prevProject.title}
                </p>
                <p className="text-xs text-gray-600 mt-1">{prevProject.category}</p>
              </motion.button>
            ) : (
              <div />
            )}

            {nextProject ? (
              <motion.button
                onClick={() => navigate(`/project/${nextProject.id}`)}
                whileHover={{ x: 4 }}
                className="group text-right p-6 bg-white/[0.02] hover:bg-white/[0.05] rounded-2xl border border-white/[0.07] hover:border-blue-500/30 transition-all"
              >
                <p className="text-[11px] text-gray-600 mb-2 flex items-center gap-1.5 justify-end font-mono uppercase tracking-wider">
                  Next
                  <ArrowRight className="w-3 h-3" />
                </p>
                <p className="font-bold text-white group-hover:text-blue-300 transition-colors leading-tight">
                  {nextProject.title}
                </p>
                <p className="text-xs text-gray-600 mt-1">{nextProject.category}</p>
              </motion.button>
            ) : (
              <div />
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-16 pb-4">
          <button
            onClick={() => navigate('/')}
            className="text-xs font-mono text-gray-600 hover:text-gray-400 transition-colors uppercase tracking-widest"
          >
            ← Back to Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};
