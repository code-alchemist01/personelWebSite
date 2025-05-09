import { motion } from 'framer-motion';
import SectionBackground from './sectionbackground';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-4 bg-quaternary/10 border-t border-quaternary">
      <SectionBackground />
      <div className="section-container px-4 py-2">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-center md:text-left">
              © {currentYear} Kutay Şahin. Tüm hakları saklıdır.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6"
          >
            <a
              href="https://github.com/code-alchemist01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textPrimary hover:text-secondary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kutaysahinu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textPrimary hover:text-secondary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/kutay_sahinu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textPrimary hover:text-secondary transition-colors"
            >
              İnstagram
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;