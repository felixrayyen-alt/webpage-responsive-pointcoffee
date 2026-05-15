import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-20 px-6 md:px-16 bg-[#0e0e0e] border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="font-extrabold tracking-[0.2em] text-primary text-xl">
            POINT COFFEE
          </div>
          <p className="text-sm text-on-surface/50 uppercase tracking-widest text-center md:text-left">
            © 2026 POINT COFFEE. BREWED TO PRECISION.
          </p>
        </div>

        <div className="flex items-center gap-8">
          <a href="#" className="text-on-surface/60 hover:text-primary transition-all duration-300 transform hover:scale-110">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-on-surface/60 hover:text-primary transition-all duration-300 transform hover:scale-110">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-on-surface/60 hover:text-primary transition-all duration-300 transform hover:scale-110">
            <Twitter size={20} />
          </a>
        </div>

        <div className="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em] font-semibold text-on-surface/40">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
          <a href="#" className="hover:text-primary transition-colors">Locations</a>
        </div>
      </div>
    </footer>
  );
}
