import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';
import SectionBackground from './sectionbackground';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

const Projects = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/code-alchemist01/repos');
        setRepos(response.data);
        setLoading(false);
      } catch (err) {
        setError('Projeler yüklenirken bir hata oluştu');
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  useEffect(() => {
    if (!loading && repos.length > 0) {
      const interval = setInterval(() => {
        if (scrollRef.current) {
          const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
          setScrollPosition((prev) => {
            const nextPosition = prev + 1;
            if (nextPosition >= maxScroll) {
              return 0;
            }
            return nextPosition;
          });
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [loading, repos]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [scrollPosition]);

  if (loading) return <div className="text-center py-10">Yükleniyor...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <section id="projects" className="relative">
      <SectionBackground />
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projelerim</h2>
          <p className="max-w-2xl mx-auto text-textSecondary">GitHub üzerindeki açık kaynak projelerim ve katkıda bulunduğum çalışmalar</p>
        </motion.div>

        <div 
          ref={scrollRef}
          className="overflow-x-hidden pb-6"
        >
          <div className="flex space-x-6" style={{ width: `${repos.length * 340}px` }}>
            {repos.map((repo) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0 w-80 bg-quaternary p-6 rounded-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <FaGithub className="text-2xl text-secondary" />
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <FaStar className="text-yellow-500" />
                      <span className="text-textSecondary text-sm">{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaCodeBranch className="text-textSecondary" />
                      <span className="text-textSecondary text-sm">{repo.forks_count}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{repo.name}</h3>
                <p className="text-sm text-textSecondary mb-4 line-clamp-2">{repo.description || 'Açıklama bulunmuyor'}</p>
                <div className="flex items-center space-x-4">
                  <span className="text-secondary text-sm">{repo.language}</span>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-secondary/80 transition-colors duration-300 text-sm"
                  >
                    GitHub'da Görüntüle
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://github.com/code-alchemist01"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <FaGithub className="text-xl" />
            <span>Tüm Projeleri Gör</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;