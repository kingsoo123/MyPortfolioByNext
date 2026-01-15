import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Mail } from 'lucide-react'; // Make sure to install lucide-react

const Home = () => {
  const projects = [
    {
      title: "Auth TokenManager",
      description: "This product aims at managing user auth token to prevent security loopholes.",
      tech: ["NextJs", "Java Springboot", "Postgres"],
      link: "#",
     
    },
    {
      title: "AccountManager",
      description: "Banking API with role-based access and secure authentication and complete customer banking flow.",
      tech: ["NextJs", "Java Springboot", "Postgres"],
      link: "https://github.com/kingsoo123/Account-manager",
    },
    {
      title: "Ecommerce Api service",
      description: "This ecommerce service api comes with product, category, and order management endpoints which the client browser can utilize.",
      tech: ["NextJs", "Java Springboot", "Postgres"],
      link: "https://github.com/kingsoo123/glamz_ecommerce_store",
    },
    {
      title: "CBT Application",
      description: "This product aims at engaging students to practise computer base test. With focus on early preparation for pupils in Primary and Junior secondary schools.",
      tech: ["NextJs", "Java Springboot", "Postgres", "PWA"],
      link: "#",
    },
    {
      title: "Book Management Library",
      description: "This product aims at managing books digitally, it’s main purpose it to ease the process of finding, sorting and searching for books in a library settings..",
      tech: ["JavaFX", "Java Springboot", "Postgres"],
      link: "#",
    },
    {
      title: "Fintech Dashboard",
      description: "Real-time data visualization for crypto assets.",
      tech: ["D3.js", "JSX", "Firebase"],
      link: "#",
    }
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <header className="h-screen flex flex-col justify-center items-center text-center px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-cyan-400 font-mono tracking-widest uppercase text-sm mb-2 block">
            Available for hire
          </span>
          <h1 className="text-5xl md:text-4xl font-light text-gray-300 mb-2">
            I&apos;m <span className="font-bold text-white">Kingsley Onyelo</span>
          </h1>
          <div className='h-[30px]' />

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-6xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent italic tracking-tighter"
          >
            Senior Software Engineer
          </motion.h2>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {/* THE PDF DOWNLOAD LINK */}
            <a
              href="/KINGSLEY_O.pdf" // Update this path to your actual file in the /public folder
              download="KINGSLEY_O.pdf"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-cyan-400 transition-colors shadow-lg"
            >
              <Download size={20} />
              Download CV (PDF)
            </a>

            <a href="https://www.linkedin.com/in/kingsley-onyelo" target='_blank' rel="noopener noreferrer">
              <button className="flex items-center gap-2 border border-slate-700 px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors">
                <Mail size={20} />
                Contact Me
              </button>
            </a>

          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-gray-500 text-sm flex flex-col items-center"
        >
          <span className="uppercase tracking-widest text-[10px] mb-2">Portfolio</span>
          <div className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-transparent rounded-full" />
        </motion.div>
      </header>

      {/* PROJECTS SECTION - High Contrast */}
      <section id="projects" className="py-24 bg-white text-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter border-l-[12px] border-cyan-500 pl-6">
              Projects
            </h2>
            <p className="text-gray-500 mt-4 text-xl">Building the future of the web, one pixel at a time.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -15 }}
                className="cursor-pointer group bg-slate-50 p-10 rounded-3xl border border-slate-200 hover:border-cyan-500 transition-all duration-500 shadow-sm hover:shadow-2xl"
              >
                <div className="flex justify-between items-start mb-6" >
                  <span className="text-cyan-600 font-mono font-bold text-lg">/0{index + 1}</span>
                  <ExternalLink className="text-slate-300 group-hover:text-cyan-500 transition-colors" />
                </div>
                <a href={project.link} target='_blank'  rel="noopener noreferrer">
                  <h3 className="text-3xl font-black mb-4 group-hover:text-blue-600 transition-colors" >{project.title}</h3>
                </a>

                <p className="text-gray-600 mb-8 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="bg-slate-200 text-slate-700 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 text-center bg-slate-900 border-t border-slate-800">
        <p className="text-gray-500">© 2026 Kingsley Onyelo.</p>
      </footer>
    </div>
  );
};

export default Home;