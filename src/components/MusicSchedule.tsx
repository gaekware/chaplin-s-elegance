import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Calendar, Clock, Music } from 'lucide-react';

const schedule = [
    {
        day: 'Quarta-feira',
        date: '04/02',
        time: '17:00',
        theme: 'Música Ao Vivo',
        artist: 'Mi Souza'
    },
    {
        day: 'Quinta-feira',
        date: '05/02',
        time: '17:00',
        theme: 'Música Ao Vivo',
        artist: 'Vi Martins'
    },
    {
        day: 'Sexta-feira',
        date: '06/02',
        time: '17:00',
        theme: 'Música Ao Vivo',
        artist: 'Alquimia Acústico'
    },
    {
        day: 'Sexta-feira - Terça-feira',
        date: '13/02 - 17/02',
        time: '17:00',
        theme: 'Carnaval Chaplin',
        artist: 'Variações'
    }
];

const MusicSchedule = () => {
    const { ref, isInView } = useInView({ threshold: 0.2 });

    return (
        <section ref={ref} className="section-padding bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/5 to-transparent pointer-events-none" />

            <div className="mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-16 lg:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="inline-block"
                    >
                        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                            Agenda Cultural
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                        className="heading-section mt-4 mb-6"
                    >
                        Programação
                        <br />
                        <span className="italic">Musical</span>
                    </motion.h2>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="h-px w-24 bg-foreground/30 mx-auto"
                    />
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {schedule.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                            className="group relative p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] transition-colors duration-500"
                        >
                            <div className="absolute inset-0 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="space-y-6 text-center">
                                <div className="space-y-2">
                                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                                        {item.day}
                                    </p>
                                    <p className="font-serif text-3xl text-foreground">
                                        {item.date}
                                    </p>
                                </div>

                                <div className="w-8 h-px bg-white/10 mx-auto" />

                                <div className="space-y-4">
                                    <div className="flex items-center justify-center gap-2 text-sm text-foreground/80">
                                        <Clock className="w-4 h-4 text-muted-foreground" />
                                        <span>{item.time}</span>
                                    </div>

                                    <div className="space-y-1">
                                        <p className="font-serif text-xl italic text-foreground">
                                            {item.theme}
                                        </p>
                                        <p className="text-sm text-muted-foreground uppercase tracking-wider">
                                            {item.artist}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <p className="text-sm text-muted-foreground italic">
                        * Programação sujeita a alterações sem aviso prévio
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default MusicSchedule;
