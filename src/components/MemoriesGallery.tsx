import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Image } from "lucide-react";

const MemoriesGallery = () => {
  // Placeholder memories - replace with actual photos
  const memories = [
    { id: 1, caption: "Our first date - the moment I knew" },
    { id: 2, caption: "Your beautiful smile that heals my heart" },
    { id: 3, caption: "That day we laughed until we cried" },
    { id: 4, caption: "You in your nurse uniform - my hero" },
    { id: 5, caption: "Our favorite coffee spot together" },
    { id: 6, caption: "The sunset we watched hand in hand" }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-medical-blue-light/20 relative">
      {/* Floating hearts decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blush-pink-dark/20 text-4xl"
            initial={{ y: "100vh", x: `${Math.random() * 100}%` }}
            animate={{ 
              y: "-100vh",
              x: `${Math.random() * 100}%`,
              rotate: 360
            }}
            transition={{ 
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 2
            }}
          >
            💕
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-elegant font-bold text-primary mb-4">
            Memories With You
          </h2>
          <p className="text-xl font-handwriting text-muted-foreground">
            Every moment with you is a treasure I hold dear
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <Card className="overflow-hidden bg-card/90 backdrop-blur-sm border-2 border-lavender/40 hover:border-blush-pink-dark/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,192,203,0.5)]">
                <div className="aspect-square bg-gradient-to-br from-lavender-light to-blush-pink flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blush-pink/50 to-lavender/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Image className="w-20 h-20 text-white/60 group-hover:text-white transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white/80 text-sm px-4 text-center font-handwriting opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      [Upload your photo here]
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-card">
                  <p className="text-center font-handwriting text-lg text-foreground">
                    {memory.caption}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-muted-foreground italic font-handwriting text-lg"
        >
          Replace these placeholders with our actual photos to make this section come alive ✨
        </motion.p>
      </div>
    </section>
  );
};

export default MemoriesGallery;
