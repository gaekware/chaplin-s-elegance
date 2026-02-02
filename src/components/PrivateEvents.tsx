import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import privateRoom from '@/assets/private-room.jpg';

const WHATSAPP_NUMBER = '5511999999999';
const WHATSAPP_EVENTS_MESSAGE = 'Olá! Gostaria de informações sobre eventos privados no Chaplin.';

const PrivateEvents = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_EVENTS_MESSAGE)}`;

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <img
          src={privateRoom}
          alt="Sala privativa"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground"
          >
            Exclusividade
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="heading-section mt-4"
          >
            Eventos <span className="italic">Privados</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mx-auto mt-8 h-px w-24 bg-foreground/30"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-body mt-8"
          >
            Para ocasiões especiais que merecem um cenário à altura. Estamos
            prontos para proporcionar o ambiente perfeito para jantares íntimos,
            celebrações exclusivas e encontros corporativos de alto nível.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-body mt-4"
          >
            Menu personalizado, serviço dedicado e a atmosfera incomparável do Chaplin.
          </motion.p>

          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="btn-chaplin mt-12 inline-block"
          >
            Solicitar Orçamento
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default PrivateEvents;
