import { motion } from 'framer-motion';
import SectionBackground from './sectionbackground';

const About = () => {
  const education = [
    {
      degree: 'Lisans - Computer Science',
      school: 'Kharkiv National University',
      year: '2021 - 2022',
    },
    {
      degree: 'Lisans - Yazılım Mühendisliği',
      school: 'Fırat Üniversitesi',
      year: '2022 - 2026',
    }
  ];

  const certificates = [
    'Google Advanced Data Analytics Expert',
    'Google Advanced Data Analytics Capstone',
    'Google Agile',
    'Google Foundations Data Science',
    'Google Foundations Project Management',
    'Google Go Beyond Numbers',
    'Google Project Management Expert',
    'Google Machine Learning',
    'Google Project Execution',
    'Google Project Initiation',
    'Google Project Management Capstone',
    'Google Project Planning',
    'Google Regression Analysis',
    'Google Started Python',
    'Google The Power Statistics',
    'Huawei Cloud Developer Certification'
  ];

  return (
    <section id="about" className="relative">
      <SectionBackground />
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Hakkımda</h2>
            <div className="space-y-4">
              <p>         
                Merhaba! Ben Kutay Şahin. Yazılım mühendisliğini yalnızca bir meslek değil, aynı zamanda bir keşif alanı olarak görüyorum. Yapay zeka, derin öğrenme ve modern yazılım mimarileri üzerine tutkuyla çalışan bir geliştiriciyim.
              </p>
              <p>         
                Uzmanlık alanlarım arasında üretken yapay zeka (Generative AI), bilgisayarla görme, büyük dil modelleri (LLM), çok modlu yapay zeka sistemleri ve optimizasyon algoritmaları yer alıyor. PyTorch, TensorFlow, OpenCV, Transformers, LangChain, HuggingFace, LLaMA, DALL·E gibi çerçeveleri kullanarak ileri seviye AI projeleri geliştiriyorum. Embedding, RAG (Retrieval-Augmented Generation), zero-shot ve few-shot öğrenme gibi konseptleri aktif olarak uyguluyorum.
              </p>
              <p>         
                Aynı zamanda React, Next.js, FastAPI, Flutter ve React Native gibi modern teknolojilerle frontend ve backend geliştiriyor; bu sistemleri Docker, GitHub Actions ve CI/CD pipeline'larıyla ölçeklenebilir hâle getiriyorum. Web ve mobil uygulamalarla entegre çalışan akıllı sistemler kuruyorum.
              </p>
              <p>
                Projelerimde sadece teknik doğruluk değil, aynı zamanda estetik, performans ve kullanıcı deneyimi de önceliğimdir. Her problemi bir sistematik optimizasyon süreci olarak ele alır, çözüm üretirken mühendisliğin ötesine geçmeye çalışırım.
              </p>
              <p>
                Yapay zekanın geleceğini inşa etme motivasyonuyla çalışan, sürekli öğrenen ve üreten biri olarak, bilgiyle harmanlanmış yaratıcı çözümler sunmayı hedefliyorum.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-quaternary p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Eğitim</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="border-l-2 border-secondary pl-4"
                  >
                    <h4 className="font-semibold text-secondary">{edu.degree}</h4>
                    <p className="text-sm text-textSecondary">{edu.school}</p>
                    <p className="text-sm text-textSecondary">{edu.year}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-quaternary p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Sertifikalar</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span className="text-sm text-textSecondary">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;