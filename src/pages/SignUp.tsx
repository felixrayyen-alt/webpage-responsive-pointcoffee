import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Lock, User, Coffee, ArrowRight } from 'lucide-react';

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center relative p-6">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506372275727-463276cd8d43?q=80&w=2070&auto=format&fit=crop" 
          alt="Coffee background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-md glass rounded-[32px] p-10 md:p-14 shadow-2xl"
      >
        <div className="flex flex-col items-center mb-12">
          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 text-primary">
            <Coffee size={32} />
          </div>
          <h1 className="text-3xl font-bold text-on-surface mb-2">Buat Akun Baru</h1>
          <p className="text-on-surface-variant font-light text-center">Bergabung dengan komunitas pecinta kopi eksklusif kami</p>
        </div>

        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1" htmlFor="name">Nama Lengkap</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-40" size={18} />
              <input 
                id="name"
                type="text" 
                placeholder="Ex: Marcus Thorne"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-6 text-on-surface placeholder:text-on-surface/20 focus:outline-none focus:border-primary transition-all font-light"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1" htmlFor="email">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-40" size={18} />
              <input 
                id="email"
                type="email" 
                placeholder="nama@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-6 text-on-surface placeholder:text-on-surface/20 focus:outline-none focus:border-primary transition-all font-light"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1" htmlFor="password">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-40" size={18} />
              <input 
                id="password"
                type="password" 
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-6 text-on-surface placeholder:text-on-surface/20 focus:outline-none focus:border-primary transition-all font-light"
              />
            </div>
          </div>

          <div className="flex items-start gap-3 text-xs text-on-surface-variant mt-2 px-1">
            <input type="checkbox" id="terms" className="mt-0.5 rounded bg-white/5 border-white/10 text-primary-container focus:ring-primary/20" />
            <label htmlFor="terms" className="leading-relaxed">
              Saya setuju dengan <a href="#" className="text-primary-container font-bold hover:underline">Syarat & Ketentuan</a> serta kebijakan privasi Point Coffee.
            </label>
          </div>

          <button className="w-full bg-primary-container text-background font-black py-4 rounded-xl hover:bg-primary transition-all uppercase tracking-[0.2em] mt-2 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group">
            DAFTAR SEKARANG
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-12 text-center text-sm font-light text-on-surface-variant">
          <p>Sudah punya akun? <Link to="/signin" className="text-primary font-bold hover:underline underline-offset-4 decoration-primary/30">Masuk di sini</Link></p>
        </div>
      </motion.div>
    </div>
  );
}
