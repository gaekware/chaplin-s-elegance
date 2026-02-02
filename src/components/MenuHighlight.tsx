import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import drink1 from '@/assets/drink-1.jpg';
import dish1 from '@/assets/dish-1.jpg';
import drink2 from '@/assets/drink-2.jpg';

interface MenuItem {
  image: string;
  name: string;
  category: string;
  description: string;
}

const menuItems: MenuItem[] = [
  {
    image: drink1,
    name: 'Smoke & Mirrors',
    category: 'Coquetel Autoral',
    description: 'Whisky, vermute, bitter de laranja, defumado na hora',
  },
  {
    image: dish1,
    name: 'Filé ao Molho Noir',
    category: 'Prato Principal',
    description: 'Filé mignon selado, redução de vinho tinto, trufa negra',
  },
  {
    image: drink2,
    name: 'The Silent Film',
    category: 'Coquetel Clássico',
    description: 'Gin, vermute seco, azeitona, essência de limão siciliano',
  },
];

const MenuHighlight = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="section-padding bg-secondary">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground"
          >
            Destaques
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
            className="heading-section mt-4"
          >
            Obras de <span className="italic">Arte</span>
          </motion.h2>
        </div>

        {/* Menu Items Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1,
                delay: 0.2 + index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative bg-card overflow-hidden"
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {item.category}
                </span>
                <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground">
                  {item.name}
                </h3>
                
                {/* Description - revealed on hover */}
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  whileHover={{ opacity: 1, height: 'auto' }}
                  className="mt-3 text-sm text-muted-foreground overflow-hidden md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"
                >
                  {item.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuHighlight;
