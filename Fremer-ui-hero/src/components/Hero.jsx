import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss } from 'react-icons/si';

const Hero = () => {
  const codeExample = `import React from 'react';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Welcome to Web.mastery.pro</h1>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
};

export default App;`;

  const techIcons = [
    { icon: SiJavascript, color: '#F7DF1E', position: { top: '15%', left: '5%' } },
    { icon: SiTypescript, color: '#3178C6', position: { top: '15%', right: '5%' } },
    { icon: SiReact, color: '#61DAFB', position: { bottom: '20%', left: '5%' } },
    { icon: SiNextdotjs, color: '#000000', position: { top: '45%', right: '5%' } },
    { icon: SiNodedotjs, color: '#339933', position: { bottom: '20%', right: '5%' } },
    { icon: SiTailwindcss, color: '#06B6D4', position: { top: '45%', left: '5%' } },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Fixed Tech Icons */}
      {techIcons.map(({ icon: Icon, color, position }, index) => (
        <motion.div
          key={index}
         
          className="tech-icon-container fixed"
          style={{
            ...position,
            zIndex: 0,
            transform: 'translateZ(0)',
          }}
        >
          <Icon className="text-3xl" style={{ color }} />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
          >
            Master Web Development
            <span className="text-blue-600"> Like Never Before</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Discover the power of modern web development with our comprehensive platform. 
            Learn, build, and deploy stunning web applications with cutting-edge technologies 
            and best practices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-1 gap-4 md:flex md:flex-wrap md:gap-10 md:justify-center lg:flex lg:flex-wrap lg:gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold shadow-neo hover:bg-blue-700 transition-colors"
            >
              Explore Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-gray-800 rounded-lg font-semibold shadow-neo hover:bg-gray-50 transition-colors"
            >
              Documentation
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Content - Code Box */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-gray-900 rounded-xl shadow-neo p-6 overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-4">
              <FaCode className="text-blue-500 text-xl" />
              <span className="text-gray-400 text-sm">Example.jsx</span>
            </div>
            <div className="relative">
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code>{codeExample}</code>
              </pre>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                className="absolute top-0 right-0 h-full w-full bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 