import { motion } from 'framer-motion';
import { Instagram, Facebook } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import gaekwareLogo from '@/assets/gaekware.png';

const Footer = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <footer ref={ref} className="bg-background py-20 pb-5 px-6 md:px-12 border-t border-border/20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-3 text-center md:text-left">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-serif text-3xl tracking-wider">CHAPLIN</h3>
            <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
              Bar & Restaurante
            </p>
          </motion.div>

          {/* Address & Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-4"
          >
            <div>
              <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Endereço
              </h4>
              <p className="text-sm text-foreground/80">
                Av. República, 129
                <br />
                Marília, SP
              </p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Horários
              </h4>
              <p className="text-sm text-foreground/80">
                Terça-feira a Sexta-feira das 17h às 00h
                <br />
                Sábado e Domingo das 11h às 00h
              </p>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center md:items-end"
          >
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Siga-nos
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/chaplin_marilia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/Chaplin.Marilia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                <Facebook size={24} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-border/10 text-center"
        >
          <p className="text-xs text-muted-foreground tracking-wide">
            © {new Date().getFullYear()} Chaplin Bar & Restaurante. Todos os direitos reservados.
          </p>

          <div className="flex flex-col items-center justify-center mt-6 gap-2">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60">
              Desenvolvido por
            </p>
            <img
              src={gaekwareLogo}
              alt="GaekWare"
              className="h-20 opacity-50 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
