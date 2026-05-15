import { motion } from 'motion/react';
import { ChevronDown, Quote, Coffee, Timer, Cpu, Milk } from 'lucide-react';

export default function Home() {
  const stats = [
    { label: 'Arabica Beans', value: '100%' },
    { label: 'Bar Pressure', value: '20' },
    { label: 'Global Outlets', value: '500+' },
  ];

  const testimonials = [
    {
      name: 'Sarah Jenkins',
      role: 'Creative Director',
      quote: "The precision in every cup is unmatched. It’s not just coffee; it’s an absolute essential for my mornings. The dark roast is profoundly complex."
    },
    {
      name: 'Marcus Thorne',
      role: 'Architect',
      quote: "I appreciate the minimalist aesthetic almost as much as the bold flavor. It feels like an exclusive club every time I walk in."
    },
    {
      name: 'Elena Rostova',
      role: 'Connoisseur',
      quote: "Consistently excellent. The 100% pure dairy makes a remarkable difference in the texture of their flat whites. Highly recommended."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <header className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10"></div>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc5mu9QTkSFKxpSFHHfy3XKR72eEjw-axeSB6mDYYuQNMomZKX0gWC8GYBM1L262P6h4aggANM4J1Lqfrsz82E9csBSc7uSJfmMtW6MvfjHl1BNahlMZ0LeT5GuglTM8ROad-E7R1lXGxsIpqqj1shDjgdfLsSZP-pDwvbJKVB8Cak2gC6Jy76U1N5jYSUs_3DT_ShWDsJpegyYcfC_NEa2DeliJ8BbJgYqSa4WRBJ0QuiHULw5tmb8MLZE4ao4n3uI0aYKpGMhxU"
            alt="Coffee background"
            className="w-full h-full object-cover opacity-60 scale-105"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-20 flex flex-col items-center"
        >
          <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-primary font-semibold mb-6 tracking-widest backdrop-blur-sm">
            SINCE 2018
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-on-surface mb-6 tracking-tighter uppercase">
            POINT COFFEE
          </h1>
          <p className="text-xl md:text-3xl text-on-surface/80 max-w-3xl font-light leading-snug">
            Premium Coffee, Anytime, Anywhere. Brewed to absolute precision.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex gap-4"
          >
            <button className="bg-primary-container text-background font-bold px-10 py-4 rounded-full flex items-center gap-2 hover:bg-primary transition-all group">
              ORDER NOW
              <ChevronDown className="group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-10 z-20 animate-bounce">
          <ChevronDown className="text-primary opacity-50" size={32} />
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-32 px-6 md:px-16 max-w-7xl mx-auto w-full relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-y border-white/10 py-16 glass rounded-2xl">
          {stats.map((stat, i) => (
            <div key={i} className={`flex flex-col items-center ${i === 1 ? 'md:border-x border-white/10' : ''} px-10`}>
              <span className="text-6xl md:text-7xl font-black text-primary-container">{stat.value}</span>
              <span className="text-xs text-on-surface/60 mt-4 uppercase tracking-[0.3em] font-semibold">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto w-full">
        <h2 className="text-4xl md:text-6xl font-bold text-on-surface mb-20 text-center uppercase tracking-tight">The Core Protocol</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:grid-rows-2">
          {/* Featured Card 1 */}
          <div className="md:col-span-2 relative rounded-[32px] overflow-hidden group border border-white/10 h-[400px]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAho9V3T5B4uX_1RdM0l5WWUGdqTY4-wcpyCI9k3GWzvbSN_7WeZNsavIdtTshlKzCkKkIaEhqI1e352HfhQQ0P_Z5mA7OLB8wl7GozfterRUK9Y07SpHrGSlO_d1OVRTk2I6HI-StfE4sxvSAfLktOMM5W-kccAJl0qLc4sXdUIVdoDb9GhzMfS4LvVsxObUBOpPHS0WU1PBDqtigyo3zvl7i-uwhPr_QNFCusayYSOC723TIbgAhA696S97_aMKqGCDFkWEG5TCRyYg"
              alt="Arabica beans"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10">
              <div className="bg-white/10 backdrop-blur-xl rounded-full px-6 py-2 inline-block mb-4 border border-white/10">
                <span className="text-xs text-on-surface uppercase font-bold tracking-widest">Sourced Daily</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-on-surface">100% Arabica</h3>
              <p className="mt-2 text-on-surface/70 max-w-md">Single-origin beans selected for their distinct aromatic profiles.</p>
            </div>
          </div>

          {/* Smart Brewing */}
          <div className="relative rounded-[32px] overflow-hidden group border border-white/10 h-[400px]">
            <img src="/src/brewing.jpg" alt="Smart Brewing" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10 z-10">
              <h3 className="text-3xl font-bold text-white">Smart Brewing</h3>
              <p className="mt-2 text-on-surface/70 max-w-md">The calibration of brewing is in a level that you cannot imagine.</p>
            </div>
          </div>

          {/* Grab & Go */}
          <div className="relative rounded-[32px] overflow-hidden group border border-white/10 h-[400px]">
            <img src="/src/grabandgo.jpg" alt="Grab & Go" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10 z-10">
              <h3 className="text-3xl font-bold text-white">Grab and go</h3>
              <p className="mt-2 text-on-surface/70 max-w-md">Just order via the app and grab it and go.</p>
            </div>
          </div>

          {/* Featured Card 2 */}
          <div className="md:col-span-2 relative rounded-[32px] overflow-hidden group border border-white/10 h-[400px]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwbzf1jTikx_8VSQsQwmFPDuxpYprSD2GuzJMKY4Cldm3nUzGEUUQ96yZ9OPEkfEYcJmoSso6XNRY7uVUw1vW-l31ufPy0s64-dH5c5RzQmKKi9grW3fhXXXS4QY7emyYmej_59uvvr1--OKE-utG14NS5Xnbk8Q06wo2mSgwP20I7mdd6LVdsonxDnt4mplPsCiVB67dozmrYo1i1SwUtpXAQzIRp8wESCpRAG4a6RT50NesHbhtoF9o2eSxlNEaTthWaKojHCsOvIA"
              alt="Milk splash"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10">
              <div className="bg-white/10 backdrop-blur-xl rounded-full px-6 py-2 inline-block mb-4 border border-white/10">
                <span className="text-xs text-on-surface uppercase font-bold tracking-widest">Locally Sourced</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-on-surface">Pure Dairy Craft</h3>
              <p className="mt-2 text-on-surface/70 max-w-md">Organic milk frothed to micro-foam perfection for unparalleled texture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 md:px-16 max-w-7xl mx-auto w-full">
        <h2 className="text-4xl md:text-6xl font-bold text-on-surface mb-20 text-center uppercase tracking-tight">What people says</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-[32px] flex flex-col justify-between"
            >
              <div>
                <Quote className="text-primary-container mb-6 opacity-30" size={40} />
                <p className="text-lg italic text-on-surface/80 leading-relaxed mb-8">"{t.quote}"</p>
              </div>
              <div>
                <p className="font-bold uppercase tracking-widest text-primary-container">{t.name}</p>
                <p className="text-sm text-on-surface/40 uppercase tracking-widest mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
