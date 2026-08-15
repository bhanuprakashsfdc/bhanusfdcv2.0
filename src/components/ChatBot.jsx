import { useState } from 'react';
import { chatConfig } from '../data/data';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Web-to-Lead submission:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-accent text-primary-dark rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
        aria-label="Open chat"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-primary-dark border border-secondary-green/30 rounded-2xl shadow-2xl slide-up">
          <div className="p-4 border-b border-secondary-green/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 hexagon bg-accent/20 flex items-center justify-center">
                <span className="text-accent text-xs font-bold">SF</span>
              </div>
              <div>
                <h3 className="text-background-light font-semibold text-sm">{chatConfig.title}</h3>
                <p className="text-text-dark text-xs">{chatConfig.subtitle}</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-text-dark hover:text-background-light transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {submitted ? (
            <div className="p-8 text-center">
              <div className="w-12 h-12 hexagon bg-accent/20 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-background-light font-medium">{chatConfig.success.title}</p>
              <p className="text-text-dark text-sm mt-1">{chatConfig.success.message}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-4 space-y-3">
              <div>
                <label className="block text-text-dark text-xs font-medium mb-1">{chatConfig.fields.name.label}</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 bg-primary-green/30 border border-secondary-green/20 rounded-lg text-background-light text-sm placeholder-text-dark/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder={chatConfig.fields.name.placeholder}
                />
              </div>
              <div>
                <label className="block text-text-dark text-xs font-medium mb-1">{chatConfig.fields.email.label}</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 bg-primary-green/30 border border-secondary-green/20 rounded-lg text-background-light text-sm placeholder-text-dark/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder={chatConfig.fields.email.placeholder}
                />
              </div>
              <div>
                <label className="block text-text-dark text-xs font-medium mb-1">{chatConfig.fields.message.label}</label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 bg-primary-green/30 border border-secondary-green/20 rounded-lg text-background-light text-sm placeholder-text-dark/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  placeholder={chatConfig.fields.message.placeholder}
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 bg-accent text-primary-dark font-semibold text-sm rounded-lg hover:bg-accent/90 transition-colors duration-200"
              >
                {chatConfig.submitButton}
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
}