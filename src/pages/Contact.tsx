import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-16 min-h-screen">
      <section className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-6xl md:text-8xl font-black text-on-surface mb-6 uppercase tracking-tight">GET IN TOUCH</h1>
          <div className="h-1 w-16 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-on-surface-variant max-w-2xl font-light">
            We're here to answer your questions, discuss premium blends, and guide your coffee experience.
          </p>
        </div>

        <div className="w-full max-w-5xl glass shadow-2xl rounded-[32px] overflow-hidden flex flex-col md:flex-row border border-white/10">
          {/* Left Side: Info */}
          <div className="p-10 md:p-16 md:w-1/2 flex flex-col justify-between bg-white/[0.02] border-b md:border-b-0 md:border-r border-white/10">
            <div>
              <h2 className="text-3xl font-bold text-on-surface mb-12">Contact Information</h2>
              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="p-3 rounded-full bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-background transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Email</h3>
                    <p className="text-lg text-on-surface">concierge@pointcoffee.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="p-3 rounded-full bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-background transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Phone</h3>
                    <p className="text-lg text-on-surface">+1 (800) 555-BREW</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="p-3 rounded-full bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-background transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Address</h3>
                    <p className="text-lg text-on-surface leading-snug">The Roastery, 77 Golden Ave<br/>Metropolis, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 md:mt-0 pt-10 border-t border-white/5 flex gap-6 text-on-surface-variant text-sm uppercase tracking-widest font-semibold flex-wrap">
              <a href="#" className="hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="hover:text-primary transition-colors">Facebook</a>
              <a href="#" className="hover:text-primary transition-colors">TikTok</a>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="p-10 md:p-16 md:w-1/2 bg-black/40 backdrop-blur-3xl">
            <form className="flex flex-col h-full gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest" htmlFor="name">Name</label>
                <input 
                  id="name"
                  type="text" 
                  placeholder="Your full name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-on-surface placeholder:text-on-surface/20 focus:outline-none focus:border-primary transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest" htmlFor="email">Email</label>
                <input 
                  id="email"
                  type="email" 
                  placeholder="you@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-on-surface placeholder:text-on-surface/20 focus:outline-none focus:border-primary transition-all"
                />
              </div>
              <div className="flex flex-col gap-2 flex-grow">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest" htmlFor="message">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  placeholder="How can we elevate your coffee experience?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-on-surface placeholder:text-on-surface/20 focus:outline-none focus:border-primary transition-all resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-primary-container text-background font-bold h-16 rounded-xl flex items-center justify-center gap-3 uppercase tracking-widest hover:bg-primary transition-all group mt-4 shadow-xl shadow-primary/10"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
