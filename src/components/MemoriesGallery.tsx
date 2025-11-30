import React from 'react';
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const MemoriesGallery = () => {
  // Updated with correct file names and custom captions
  const memories = [
    { 
      id: 1, 
      image: "/aarcha 1.jpg", 
      caption: "The smile that started it all - my favorite view" 
    },
    { 
      id: 2, 
      image: "/aarcha 2.jpg", 
      caption: "Even in silence, your eyes say everything" 
    },
    { 
      id: 3, 
      image: "/aarcha 3.jpg", 
      caption: "My hardworking hero saving the world" 
    },
    { 
      id: 4, 
      image: "/aarcha 4.jpg", 
      caption: "You and Snowfell — our little baby" 
    },
    { 
      id: 5, 
      image: "/aarcha 5.jpg", 
      caption: "Us against the world. You look stunning here." 
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-pink-50/30 relative min-h-screen">
      
      {/* --- Floating Hearts Background Animation --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-200/40 text-4xl"
            initial={{ y: "100vh", x: `${Math.random() * 100}%` }}
            animate={{ 
              y: "-100vh",
              x: `${Math.random() * 100}%`,
              rotate: 360
            }}
            transition={{ 
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear"
            }}
          >
            💕
          </motion.div>
        ))}
      </div>

      {/* --- Main Content --- */}
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pink-500 mb-4" style={{ fontFamily: 'serif' }}>
            Memories With You
          </h2>
          <p className="text-xl text-gray-500 italic">
            Every moment with you is a treasure I hold dear
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-8 justify-center">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className={index === 3 || index === 4 ? "md:col-span-1.5" : ""} // Optional: Adjust layout if needed
            >
              <Card className="h-full overflow-hidden bg-white/80 backdrop-blur-sm border-2 border-pink-100 hover:border-pink-300 transition-all duration-300 hover:shadow-xl hover:shadow-pink-100">
                
                {/* Image Container */}
                <div className="aspect-square relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  
                  <img 
                    src={memory.image} 
                    alt={memory.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay Text (Optional aesthetic touch) */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs font-medium tracking-widest uppercase">
                      Memory #{index + 1}
                    </p>
                  </div>
                </div>
                
                {/* Caption Area */}
                <div className="p-6 flex items-center justify-center min-h-[100px] bg-white">
                  <p className="text-center font-medium text-gray-700 font-serif italic text-lg leading-relaxed">
                    {memory.caption}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-gray-400 text-sm"
        >
          Made with love for Aarcha
        </motion.p>
      </div>
    </section>
  );
};

export default MemoriesGallery;