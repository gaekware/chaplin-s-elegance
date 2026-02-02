import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-bar.jpg';

const WHATSAPP_NUMBER = '551434132411';
const WHATSAPP_MESSAGE = 'Olá! Gostaria de fazer uma reserva no Chaplin.';

const Hero = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt="Chaplin Bar & Restaurante"
          className="h-full w-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-background/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        {/* Logo / Title */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="heading-display text-center text-foreground"
          >
            CHAPLIN
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
          className="mt-4 text-center font-light uppercase tracking-[0.3em] text-foreground/80 text-sm md:text-base"
        >
          Bar & Restaurante
        </motion.p>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 h-px w-24 bg-foreground/50 origin-center"
        />

        {/* CTA Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: 'easeOut' }}
          className="btn-chaplin mt-12"
        >
          Reservar Mesa
        </motion.a>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-foreground/50">Scroll</span>
          <div className="h-8 w-px bg-foreground/30" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
