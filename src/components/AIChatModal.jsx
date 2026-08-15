import { useState } from 'react';
import { aiChatConfig } from '../data/data';

export default function AIChatModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: aiChatConfig.initialMessage }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'openai/gpt-4o-mini',
          messages: [...messages, userMessage],
        }),
      });

      const data = await response.json();
      const assistantMessage = {
        role: 'assistant',
        content: data.choices?.[0]?.message?.content || 'Sorry, I could not process that request.'
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', content: aiChatConfig.errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-24 z-40 w-14 h-14 bg-primary-green text-accent border border-secondary-green/30 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
        aria-label="Open AI chat"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary-dark/80 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-primary-dark border border-secondary-green/30 rounded-2xl shadow-2xl flex flex-col max-h-[80vh] slide-up">
            <div className="p-4 border-b border-secondary-green/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 hexagon bg-accent/20 flex items-center justify-center">
                  <span className="text-accent text-xs font-bold">AI</span>
                </div>
                <div>
                  <h3 className="text-background-light font-semibold text-sm">{aiChatConfig.title}</h3>
                  <p className="text-text-dark text-xs">{aiChatConfig.subtitle}</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-text-dark hover:text-background-light transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${
                    msg.role === 'user'
                      ? 'bg-accent text-primary-dark'
                      : 'bg-primary-green/40 text-background-light border border-secondary-green/20'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="px-3 py-2 rounded-lg bg-primary-green/40 border border-secondary-green/20">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-text-dark/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-text-dark/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-text-dark/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSend} className="p-4 border-t border-secondary-green/20">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 px-3 py-2 bg-primary-green/30 border border-secondary-green/20 rounded-lg text-background-light text-sm placeholder-text-dark/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder={aiChatConfig.placeholder}
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="px-4 py-2 bg-accent text-primary-dark font-semibold text-sm rounded-lg hover:bg-accent/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {aiChatConfig.sendButton}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}