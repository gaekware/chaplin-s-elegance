import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const LocationMap = () => {
    const { ref, isInView } = useInView({ threshold: 0.2 });

    return (
        <section ref={ref} className="py-16 bg-background border-t border-border/20">
            <div className="mx-auto max-w-6xl px-6 md:px-12">
                <div className="text-center mb-10">
                    <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                        Localização
                    </span>
                    <h2 className="heading-section mt-2">
                        Nosso <span className="italic">Endereço</span>
                    </h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="w-full h-[300px] lg:h-[350px] rounded-lg overflow-hidden border border-white/10 shadow-2xl hover:grayscale-0 transition-all duration-700 ease-in-out"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2994.5521966950846!2d-49.94094265480497!3d-22.218703341025716!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bfd735f2c22af5%3A0xf1319ba54b467493!2sChaplin!5e0!3m2!1sen!2sus!4v1770061636749!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localização Chaplin Bar"
                        className="filter invert-[.9] hue-rotate-180 contrast-[0.9]"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default LocationMap;
