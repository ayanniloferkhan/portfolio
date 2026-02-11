import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Linkedin, MessageSquare, CheckCircle } from 'lucide-react';

// Initialize EmailJS - Replace with your service ID
// Get these from: https://dashboard.emailjs.com/
const EMAILJS_SERVICE_ID = 'service_your_service_id';
const EMAILJS_TEMPLATE_ID = 'template_your_template_id';
const EMAILJS_PUBLIC_KEY = 'your_public_key';

// Initialize EmailJS
if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Validate form
      if (!formData.name || !formData.email || !formData.message) {
        setError('Please fill in all required fields');
        setLoading(false);
        return;
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError('Please enter a valid email address');
        setLoading(false);
        return;
      }

      // Send email using EmailJS
      if (formRef.current) {
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          EMAILJS_PUBLIC_KEY
        );

        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset submitted state after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (err) {
      console.error('Error sending email:', err);
      setError('Failed to send message. Please try again or contact me directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Let's discuss your next project or collaboration opportunity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Email */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg">
                  <Mail size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-foreground">Email</h3>
              </div>
              <a
                href="mailto:ayannilofer99@gmail.com"
                className="text-blue-600 dark:text-blue-400 hover:underline break-all"
              >
                ayannilofer99@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg">
                  <Phone size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-foreground">Phone</h3>
              </div>
              <a
                href="tel:+917869221438"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                +91 7869221438
              </a>
            </div>

            {/* LinkedIn */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg">
                  <Linkedin size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-foreground">LinkedIn</h3>
              </div>
              <a
                href="https://www.linkedin.com/in/ayan-khan-8808671a9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Ayan Khan
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle size={48} className="text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                      required
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none"
                      required
                    />
                  </div>

                  {/* Error Message */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-800 text-red-700 dark:text-red-300 rounded-lg text-sm"
                    >
                      {error}
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <MessageSquare size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* EmailJS Setup Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-sm text-slate-600 dark:text-slate-400 mt-8 bg-blue-50 dark:bg-slate-800/50 rounded-lg p-4 border border-blue-200 dark:border-slate-700"
      >
        <p>
          <strong>Note:</strong> To enable email functionality, sign up at{' '}
          <a
            href="https://www.emailjs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            emailjs.com
          </a>
          {' '}and replace the placeholders in the Contact component with your credentials.
        </p>
      </motion.div>
    </section>
  );
};
