import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-12 md:py-20 lg:py-32 w-full px-4" id="contact">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-orbitron text-2xl md:text-5xl font-bold text-glow mb-4">
                Get In Touch
              </h2>
              <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto">
                Have questions or feedback? We'd love to hear from you.
              </p>
            </div>
            
            <div className="glass-morphism p-6 md:p-8 rounded-2xl border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black/30 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full font-orbitron font-bold px-6 py-4 bg-cyan-500 text-black rounded-lg transition-all duration-300 ease-in-out hover:bg-white hover:shadow-[0_0_20px_#0fe6ff] transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="mt-4 p-3 bg-green-900/30 border border-green-500/30 rounded-lg text-green-400 text-center">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mt-4 p-3 bg-red-900/30 border border-red-500/30 rounded-lg text-red-400 text-center">
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
