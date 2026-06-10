
import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../services/gemini';
import { ChatMessage } from '../types';
import { marked } from 'marked';
import { saveMessage, getHistory } from '../services/db';
import { sendToWebhook } from '../services/webhook';

interface AIConsultantProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const AIConsultant: React.FC<AIConsultantProps> = ({ sectionRef }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadHistory = async () => {
      const history = await getHistory();
      if (history.length === 0) {
        const welcomeText = "Halo! Saya ReVA, asisten virtual Imron Rosadi. Ada yang ingin Anda tanyakan hari ini?";
        setMessages([{ role: 'model', text: welcomeText }]);
        await saveMessage('model', welcomeText);
      } else {
        setMessages(history.map(h => ({ role: h.role, text: h.text })));
      }
    };
    loadHistory();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMessage = input.trim();
    setInput('');
    
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    await saveMessage('user', userMessage);
    
    setIsLoading(true);
    const response = await getAIResponse(userMessage);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    await saveMessage('model', response);
    
    // Logika Webhook: Deteksi otomatis jika user meninggalkan kontak
    const contactRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)|(\+?\d{10,15})/g;
    const hasContact = userMessage.match(contactRegex);
    
    if (hasContact) {
      sendToWebhook('LEAD_CAPTURED', {
        raw_message: userMessage,
        potential_contacts: hasContact,
        source: 'AI_CHAT_REVA'
      });
    }
    
    setIsLoading(false);
  };

  const renderMarkdown = (text: string) => {
    const rawHtml = marked.parse(text);
    return { __html: rawHtml };
  };

  return (
    <section ref={sectionRef} className="py-32 bg-[#080808] border-y border-white/5 relative scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-blue-400 mb-6 font-bold tracking-tighter">
              <span className="w-8 h-[1px] bg-blue-400"></span>
              LIVE AI ENGINE
            </div>
            <h2 className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tighter text-white leading-tight">
              AI Assistant <br /> 
              <span className="text-white/40">Will Answer You.</span>
            </h2>
            <p className="text-white/40 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
              Don't wait for a meeting. Our AI will answer your question instantly about me.
            </p>
          </div>

          <div className="w-full max-w-xl glass-card rounded-[2.5rem] md:rounded-[3.5rem] p-3 md:p-4 h-[600px] md:h-[650px] flex flex-col shadow-2xl relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 blur-2xl rounded-full"></div>
            
            <div className="p-5 md:p-6 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl flex items-center justify-center">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-black rounded-lg"></div>
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs md:text-sm uppercase tracking-tight">AI Assistant</h4>
                  <div className="flex flex-col">
                    <p className="text-[8px] md:text-[9px] text-white/30 uppercase tracking-[0.1em]">ReVA (Beta)</p>
                    <p className="text-[8px] md:text-[9px] text-blue-500 font-bold uppercase tracking-[0.1em]">Status: Online</p>
                  </div>
                </div>
              </div>   
              <div className="flex gap-1">
                {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20"></div>)}
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'user' ? (
                    <div className="max-w-[85%] p-4 md:p-5 rounded-2xl md:rounded-3xl text-sm leading-relaxed bg-white text-black font-bold shadow-lg shadow-white/5">
                      {msg.text}
                    </div>
                  ) : (
                    <div 
                      className="max-w-[85%] p-4 md:p-5 rounded-2xl md:rounded-3xl text-sm leading-relaxed bg-white/5 text-white/80 border border-white/10 prose-chat shadow-inner"
                      dangerouslySetInnerHTML={renderMarkdown(msg.text)}
                    />
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <div className="flex gap-1.5">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Redesigned Input Area */}
            <div className="p-2 md:p-3 bg-white/5 rounded-[2rem] md:rounded-[2.5rem] m-2 border border-white/5 focus-within:border-white/20 transition-colors">
              <div className="flex items-center gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Tell me about your tech stack ideas..."
                  className="flex-1 bg-transparent text-white border-none px-4 md:px-6 py-3 md:py-4 text-sm focus:ring-0 outline-none placeholder:text-white/20"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white text-black rounded-full transition-all active:scale-90 disabled:opacity-20 disabled:grayscale group relative overflow-hidden ${isLoading ? 'animate-pulse' : ''}`}
                  aria-label="Send message"
                >
                  {isLoading ? (
                    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <svg 
                      className="w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor"
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  )}
                  {/* Subtle Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
