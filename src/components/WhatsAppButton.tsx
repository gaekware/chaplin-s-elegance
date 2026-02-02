import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    return (
        <motion.a
            href="https://wa.me/551434132411"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-foreground text-background rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-500 group"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <span className="absolute inset-0 rounded-full border border-foreground/30 animate-ping opacity-75 duration-3000" />

            <MessageCircle className="w-7 h-7" />

            <span className="absolute right-full mr-4 bg-foreground text-background px-4 py-2 rounded-sm text-xs uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 whitespace-nowrap hidden md:block">
                Fale conosco
            </span>
        </motion.a>
    );
};

export default WhatsAppButton;
