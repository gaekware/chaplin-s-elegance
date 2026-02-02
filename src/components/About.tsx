import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const About = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Nossa História
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="heading-section"
            >
              Onde o Cinema
              <br />
              <span className="italic">Encontra a Arte</span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="h-px w-16 bg-foreground/30 origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
              className="text-body"
            >
              Inspirado na elegância atemporal do cinema clássico, o Chaplin nasceu
              da paixão por criar experiências memoráveis. Cada detalhe foi
              cuidadosamente pensado para transportar você a uma era de sofisticação
              e mistério.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
              className="text-body"
            >
              Aqui, a arte da hospitalidade encontra a excelência em gastronomia
              e coquetelaria. Um refúgio para os que apreciam os prazeres refinados
              da vida, envoltos em uma atmosfera que só o Chaplin pode oferecer.
            </motion.p>
          </div>

          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square hidden lg:block"
          >
            {/* Large decorative quote */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[20rem] font-serif text-foreground/5 select-none">
                "
              </span>
            </div>
            {/* Quote text */}
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <blockquote className="text-center">
                <p className="font-serif text-2xl italic text-foreground/70 leading-relaxed">
                  "A vida é uma peça de teatro que não permite ensaios"
                </p>
                <footer className="mt-6 text-sm uppercase tracking-widest text-muted-foreground">
                  — Charles Chaplin
                </footer>
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
