import { useState } from 'react';
import { contactInfo } from '../data/data';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="fade-in">
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-background-light tracking-tight mb-6">
                Contact
              </h1>
              <p className="text-text-dark leading-relaxed mb-8">
                Have a project in mind or want to discuss Salesforce architecture? I'd love to hear from you. Fill out the form and I'll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 hexagon bg-primary-green/40 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-background-light font-semibold text-sm">Email</h3>
                    <p className="text-text-dark text-sm">{contactInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 hexagon bg-primary-green/40 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-background-light font-semibold text-sm">Location</h3>
                    <p className="text-text-dark text-sm">{contactInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 hexagon bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-background-light font-semibold text-lg mb-2">Message Sent!</h3>
                  <p className="text-text-dark text-sm">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-text-dark text-xs font-medium mb-1">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-primary-green/30 border border-secondary-green/20 rounded-lg text-background-light text-sm placeholder-text-dark/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-text-dark text-xs font-medium mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-primary-green/30 border border-secondary-green/20 rounded-lg text-background-light text-sm placeholder-text-dark/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-text-dark text-xs font-medium mb-1">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-primary-green/30 border border-secondary-green/20 rounded-lg text-background-light text-sm placeholder-text-dark/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      placeholder="How can I help?"
                    />
                  </div>
                  <div>
                    <label className="block text-text-dark text-xs font-medium mb-1">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-primary-green/30 border border-secondary-green/20 rounded-lg text-background-light text-sm placeholder-text-dark/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3 bg-accent text-primary-dark font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-200 disabled:opacity-50"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}