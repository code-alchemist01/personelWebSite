import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showCVModal, setShowCVModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Anasayfa', to: 'home' },
    { name: 'Hakkımda', to: 'about' },
    { name: 'Yetenekler', to: 'services' },
    { name: 'Projeler', to: 'projects' },
    { name: 'İletişim', to: 'contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="section-container py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-secondary">KutayDev</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link"
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => setShowCVModal(true)}
                className="btn-primary"
              >
                CV
              </button>
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden text-textSecondary"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav-link"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setShowCVModal(true);
                    setIsOpen(false);
                  }}
                  className="btn-primary text-center"
                >
                  CV İndir
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* CV Modal */}
      {showCVModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="relative w-full max-w-4xl bg-primary rounded-lg shadow-xl">
            <button
              onClick={() => setShowCVModal(false)}
              className="absolute top-4 right-4 text-textSecondary hover:text-secondary"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            <div className="p-4">
              <iframe
                src="/KutaySahin_CV.pdf"
                className="w-full h-[80vh] rounded"
                title="CV"
              />
            </div>
            <div className="p-4 border-t border-quaternary flex justify-end">
              <a
                href="/KutaySahin_CV.pdf"
                download
                className="btn-primary"
                onClick={() => setShowCVModal(false)}
              >
                İndir
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;