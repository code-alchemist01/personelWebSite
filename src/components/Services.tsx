import { motion } from 'framer-motion';
import SectionBackground from './sectionbackground';
import { CodeBracketIcon, BeakerIcon, ServerIcon, CpuChipIcon, AcademicCapIcon, CommandLineIcon, ShieldCheckIcon, PresentationChartLineIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const services = [
  {
    title: 'Yapay Zeka & Derin Öğrenme',
    description: 'Üretken AI, bilgisayarlı görü ve doğal dil işleme alanlarında ileri düzey çözümler geliştiriyorum.',
    details: [
      'LangChain ve LLaMA ile özelleştirilmiş LLM uygulamaları',
      'DALL·E ve Stable Diffusion ile görsel üretimi ve manipülasyonu',
      'Transformers ve HuggingFace ile NLP modelleri',
      'PyTorch ve TensorFlow ile derin öğrenme modelleri',
      'RAG ve Embeddings ile bilgi çıkarımı ve analizi',
      'OpenCV ve MediaPipe ile gerçek zamanlı görüntü işleme',
      'Few-shot ve Zero-shot öğrenme teknikleri'
    ],
    icon: BeakerIcon,
  },
  {
    title: 'Modern Web Geliştirme',
    description: 'En son web teknolojileri ile performanslı ve ölçeklenebilir uygulamalar geliştiriyorum.',
    details: [
      'React ve Next.js ile SSR/SSG uygulamaları',
      'TypeScript ile tip güvenli kod geliştirme',
      'Redux Toolkit ve Zustand ile state yönetimi',
      'TailwindCSS ve Styled Components ile modern UI',
      'React Query ve SWR ile veri yönetimi',
      'Framer Motion ile akıcı animasyonlar',
      'Jest ve React Testing Library ile test otomasyonu'
    ],
    icon: CodeBracketIcon,
  },
  {
    title: 'Backend & Sistem Mimarisi',
    description: 'Mikroservis mimarisi ve modern backend teknolojileri ile güçlü sistemler kuruyorum.',
    details: [
      'FastAPI ve Express.js ile RESTful API geliştirme',
      'GraphQL ve Apollo Server ile esnek API tasarımı',
      'MongoDB ve PostgreSQL ile veritabanı optimizasyonu',
      'Redis ve ElasticSearch ile önbellek ve arama',
      'RabbitMQ ve Apache Kafka ile mesajlaşma sistemleri',
      'Docker ve Kubernetes ile konteynerizasyon',
      'CI/CD pipeline ları ve otomatik deployment'
    ],
    icon: ServerIcon,
  },
  {
    title: 'Mobil & Cross-Platform',
    description: 'Flutter ve React Native ile platform bağımsız mobil uygulamalar geliştiriyorum.',
    details: [
      'Flutter ile native performanslı uygulamalar',
      'BLoC ve Riverpod ile state yönetimi',
      'Firebase ile backend entegrasyonu',
      'Local veritabanı ve offline storage',
      'Push bildirimler ve gerçek zamanlı güncelleme',
      'Özel animasyonlar ve geçişler',
      'App Store ve Play Store deployment'
    ],
    icon: CommandLineIcon,
  },
  {
    title: 'Cloud & DevOps',
    description: 'AWS ve Azure servisleri ile ölçeklenebilir ve güvenli altyapılar kuruyorum.',
    details: [
      'AWS Lambda ve Azure Functions ile serverless mimari',
      'S3 ve Blob Storage ile dosya yönetimi',
      'CloudFront ve CDN ile içerik dağıtımı',
      'Route53 ve DNS yönetimi',
      'CloudWatch ve Application Insights ile monitoring',
      'IAM ve güvenlik politikaları',
      'Terraform ile infrastructure as code'
    ],
    icon: CpuChipIcon,
  },
  {
    title: 'Veri Bilimi & Analitik',
    description: 'Büyük veri analizi ve makine öğrenmesi ile iş zekası çözümleri sunuyorum.',
    details: [
      'Pandas ve NumPy ile veri manipülasyonu',
      'Scikit-learn ile makine öğrenmesi modelleri',
      'Matplotlib ve Plotly ile veri görselleştirme',
      'PySpark ile büyük veri işleme',
      'Streamlit ve Dash ile interaktif dashboardlar',
      'A/B testleri ve istatistiksel analiz',
      'ETL süreçleri ve veri pipelineları'
    ],
    icon: AcademicCapIcon,
  },
  {
    title: 'Siber Güvenlik & Penetrasyon Testi',
    description: 'Uygulamaların güvenliğini sağlayarak olası tehditlere karşı koruma sağlıyorum.',
    details: [
      'OWASP güvenlik standartları implementasyonu',
      'Güvenlik açığı tarama ve analizi',
      'Penetrasyon testi ve güvenlik değerlendirmesi',
      'Güvenli kod geliştirme pratikleri',
      'SSL/TLS sertifika yönetimi',
      'Web uygulama güvenlik duvarı (WAF)',
      'Güvenlik olay izleme ve müdahale'
    ],
    icon: ShieldCheckIcon,
  },
  {
    title: 'Proje Yönetimi & Danışmanlık',
    description: 'Teknik projelerde liderlik ve danışmanlık hizmetleri sunuyorum.',
    details: [
      'Agile ve Scrum metodolojileri uygulama',
      'Teknik gereksinim analizi ve planlama',
      'Kod kalitesi ve best practice rehberliği',
      'Performans optimizasyonu danışmanlığı',
      'Teknik ekip yönetimi ve mentorluk',
      'Risk analizi ve problem çözümü',
      'Teknoloji stack seçimi ve modernizasyon'
    ],
    icon: PresentationChartLineIcon,
  },
  {
    title: 'Eğitim & Mentorluk',
    description: 'Yazılım geliştirme ve teknoloji alanlarında kapsamlı eğitim ve mentorluk hizmetleri sunuyorum.',
    details: [
      'Web geliştirme ve modern teknolojiler eğitimi',
      'Yapay zeka ve makine öğrenmesi workshopları',
      'Kod inceleme ve best practice rehberliği',
      'Birebir mentorluk ve kariyer danışmanlığı',
      'Online kurs ve eğitim içeriği hazırlama',
      'Bootcamp ve workshop organizasyonu',
      'Proje bazlı öğrenme ve uygulama geliştirme'
    ],
    icon: BookOpenIcon,
  },
];

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section id="services" className="relative">
      <SectionBackground />
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Teknik Yeteneklerim</h2>
          <p className="max-w-3xl mx-auto text-textSecondary">
            Yapay zeka, web teknolojileri ve sistem mimarisi alanlarında uzmanlık sunuyorum. 
            Modern araçlar ve metodolojiler kullanarak, karmaşık problemlere yenilikçi çözümler geliştiriyorum.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-quaternary p-6 rounded-lg transition-all duration-300 cursor-pointer
                ${expandedService === index ? 'shadow-xl ring-2 ring-secondary/20' : 'hover:shadow-lg hover:ring-1 hover:ring-secondary/10'}`}
              onClick={() => toggleService(index)}
            >
              <div className="flex items-center justify-between mb-4">
                <service.icon className="h-10 w-10 text-secondary" />
                <motion.div
                  animate={{ rotate: expandedService === index ? 180 : 0 }}
                  className="text-secondary"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-textSecondary">{service.title}</h3>
              <p className="text-sm text-textSecondary/80 mb-4 line-clamp-2">{service.description}</p>
              <motion.div
                animate={{
                  height: expandedService === index ? 'auto' : 0,
                  opacity: expandedService === index ? 1 : 0
                }}
                className="overflow-hidden"
                transition={{ duration: 0.3 }}
              >
                <ul className="space-y-2 text-sm text-textSecondary/90 mt-4">
                  {service.details.map((detail, detailIndex) => (
                    <motion.li
                      key={detailIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: detailIndex * 0.1 }}
                      className="flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 flex-shrink-0" />
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}        
        </div>
      </div>
    </section>
  );
};

export default Services;