import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="section-container flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h2 className="text-secondary mb-4">Merhaba, ben</h2>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
            Kutay Şahin.
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-textPrimary mb-8">
            Full Stack Web Geliştirici ve AI Developer.
          </h2>
          <p className="text-lg mb-8">
          Full stack ve yapay zeka teknolojilerini birleştirerek yenilikçi ve kullanıcı odaklı çözümler geliştiriyorum.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              İletişime Geç
            </motion.a>
            <motion.a
              href="#projects"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Projelerimi Gör
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block"
        >
          <img
            src="https://avatars.githubusercontent.com/code-alchemist01"
            alt="Kutay Şahin"
            className="w-80 h-80 rounded-full shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;