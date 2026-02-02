import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';
import ambiente1 from '@/assets/ambiente-1.jpg';
import ambiente2 from '@/assets/ambiente-2.jpg';
import ambiente3 from '@/assets/ambiente-3.jpg';

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, isInView } = useInView({ threshold: 0.2 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={containerRef} className="section-padding bg-background overflow-hidden">
      <div ref={ref} className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground"
          >
            A Experiência
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
            className="heading-section mt-4"
          >
            Gastronomia & <span className="italic">Coquetelaria</span>
          </motion.h2>
        </div>

        {/* Asymmetric Grid with Parallax */}
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          {/* First Image - Large */}
          <motion.div
            style={{ y: y1 }}
            className="col-span-12 md:col-span-5 aspect-[3/4]"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="h-full w-full overflow-hidden"
            >
              <img
                src={ambiente1}
                alt="Interior do Chaplin"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Text + Second Image */}
          <div className="col-span-12 md:col-span-7 flex flex-col gap-8">
            {/* Text Block */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="py-8 md:py-16 md:pl-8"
            >
              <p className="text-body max-w-md">
                Nossa cozinha combina técnicas clássicas com criatividade contemporânea, 
                utilizando ingredientes selecionados para criar pratos que são verdadeiras 
                obras de arte gastronômica.
              </p>
              <p className="text-body max-w-md mt-6">
                No bar, mixologistas experientes crafteiam coquetéis autorais que 
                contam histórias através de sabores únicos e apresentações impecáveis.
              </p>
            </motion.div>

            {/* Second Image */}
            <motion.div
              style={{ y: y2 }}
              className="aspect-[16/9] overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="h-full w-full"
              >
                <img
                  src={ambiente2}
                  alt="Bartender em ação"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Third Image - Offset */}
          <motion.div
            style={{ y: y3 }}
            className="col-span-12 md:col-span-6 md:col-start-4 aspect-[4/3] -mt-8 md:-mt-24"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.7 }}
              className="h-full w-full overflow-hidden"
            >
              <img
                src={ambiente3}
                alt="Mesa elegante"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
