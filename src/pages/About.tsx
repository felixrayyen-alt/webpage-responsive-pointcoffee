import { motion } from 'motion/react';
import { Target, Heart, Award, Sparkles } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: 'Precision Extraction',
      description: 'We treat coffee as a science, measuring every gram and degree to ensure consistency.',
      icon: <Target className="text-primary" size={32} />
    },
    {
      title: 'Ethical Sourcing',
      description: 'Direct partnerships with multi-generational farmers ensure sustainable and fair practices.',
      icon: <Heart className="text-primary" size={32} />
    },
    {
      title: 'Cinematic Design',
      description: 'Our spaces are galleries of minimalism, designed to eliminate distraction.',
      icon: <Sparkles className="text-primary" size={32} />
    },
    {
      title: 'Master Roasting',
      description: 'Small-batch roasting processes that highlight the inherent character of the bean.',
      icon: <Award className="text-primary" size={32} />
    }
  ];

  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto text-center mb-24">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-6xl md:text-9xl font-black text-on-surface mb-8 uppercase tracking-tighter"
        >
          OUR STORY
        </motion.h1>
        <div className="h-1 w-24 bg-primary mx-auto mb-10"></div>
        <p className="text-2xl md:text-3xl text-on-surface-variant max-w-4xl mx-auto font-light leading-relaxed">
          Forged in precision, defined by taste. A cinematic approach to the daily ritual of coffee.
        </p>
      </section>

      {/* Narrative Section */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative rounded-[32px] overflow-hidden group h-[600px]">
             <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWf_oemJ-quvljbjGRygZ3hHXQLXyzW3IdjX8hB_2MHXsDFgbA8G9geZKnPN2oXcbCY-8nJao6D9Roert2nHWhWRytRUydNP0wF43DfU65ZMSnVl990kgMXUAOngadpQa96M8H0-stiiv7EFocmJhx_8wZe9pHl3fNDukV5aLjTgxFmerR1NezKvxfAnINsxEBCYWIq5KuZ-nr_kTCWtOf2Zwx2VRYHImMdbMtDCGifRKkIo3DxWVgcpTkd10FMTtmSaQgm5eJxDc" 
              alt="The lab" 
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div className="glass p-12 rounded-[32px] border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
            <p className="text-xl text-on-surface/80 leading-[1.8] mb-8 font-light italic">
              "Point Coffee began with a singular obsession: to strip away the noise of modern cafe culture and return to the elemental science of the brew."
            </p>
            <p className="text-lg text-on-surface-variant leading-[1.8] mb-8">
              We view coffee not merely as a beverage, but as a precise instrument of focus. Every bean we source, every roast profile we engineer, is designed to deliver a high-contrast sensory experience.
            </p>
            <p className="text-lg text-on-surface-variant leading-[1.8]">
              Inspired by the stark, deliberate aesthetics of minimalist art and the exacting standards of luxury craftsmanship, our spaces and our products are curated to eliminate distraction.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-[#0c0c0c] py-32 border-y border-white/10">
        <div className="px-6 md:px-16 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-on-surface mb-20 text-center uppercase tracking-tight">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass p-10 rounded-[24px] border border-white/10 hover:border-primary/30 transition-all duration-500"
              >
                <div className="mb-6 h-16 w-16 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-bold text-on-surface mb-4">{v.title}</h3>
                <p className="text-on-surface-variant leading-relaxed font-light">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline/Stats Wrap-up */}
      <section className="pt-32 px-6 md:px-16 max-w-7xl mx-auto text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-20">
          <div>
            <div className="text-5xl font-black text-primary mb-2">2018</div>
            <div className="text-xs uppercase tracking-widest text-on-surface/40">Established</div>
          </div>
          <div>
            <div className="text-5xl font-black text-primary mb-2">48h</div>
            <div className="text-xs uppercase tracking-widest text-on-surface/40">Roast to Cup</div>
          </div>
          <div>
            <div className="text-5xl font-black text-primary mb-2">12</div>
            <div className="text-xs uppercase tracking-widest text-on-surface/40">Global Origins</div>
          </div>
          <div>
            <div className="text-5xl font-black text-primary mb-2">0</div>
            <div className="text-xs uppercase tracking-widest text-on-surface/40">Compromise</div>
          </div>
        </div>
      </section>
    </div>
  );
}
