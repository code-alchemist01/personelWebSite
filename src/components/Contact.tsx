import { motion } from 'framer-motion';
import SectionBackground from './sectionbackground';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  useEffect(() => {
    emailjs.init('yqMk6EL2juArKCyjV');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Mesajınız gönderiliyor...' });

    try {
      if (form.current) {
        await emailjs.sendForm(
          'service_fh7epji',
          'template_rj2yeth',
          form.current,
          {
            publicKey: 'yqMk6EL2juArKCyjV',
          }
        );

        setStatus({
          type: 'success',
          message: 'Mesajınız başarıyla gönderildi!'
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'
      });
    }
  };

  return (
    <section id="contact" className="relative">
      <SectionBackground />
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">İletişime Geç</h2>
          <p className="max-w-2xl mx-auto">
            Projeleriniz için benimle iletişime geçebilirsiniz. Size en kısa sürede dönüş yapacağım.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-quaternary p-8 rounded-lg">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <EnvelopeIcon className="h-6 w-6 text-secondary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a href="mailto:ibrahimkutaysahin577@gmail.com" className="hover:text-secondary transition-colors">
                  ibrahimkutaysahin577@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <PhoneIcon className="h-6 w-6 text-secondary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Telefon</h3>
                <a href="tel:+905417392800" className="hover:text-secondary transition-colors">
                  +90 (541) 739 2800
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPinIcon className="h-6 w-6 text-secondary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Konum</h3>
                <p>İstanbul, Türkiye</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            ref={form}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                İsim
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-tertiary border border-tertiary focus:border-secondary focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-tertiary border border-tertiary focus:border-secondary focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-medium">
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-tertiary border border-tertiary focus:border-secondary focus:outline-none transition-colors"
                required
              ></textarea>
            </div>

            {status.message && (
              <div className={`text-sm ${status.type === 'error' ? 'text-red-500' : status.type === 'success' ? 'text-green-500' : 'text-secondary'}`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              className="btn-primary w-full"
              disabled={status.type === 'loading'}
            >
              {status.type === 'loading' ? 'Gönderiliyor...' : 'Gönder'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;