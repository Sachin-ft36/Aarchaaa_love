import { motion } from "framer-motion";
import { Heart, Smile, Sun, Sparkles } from "lucide-react";

const YourSmileHealsMe = () => {
  const healingMoments = [
    {
      icon: Smile,
      text: "Your smile is my favorite medicine"
    },
    {
      icon: Heart,
      text: "Your presence makes everything better"
    },
    {
      icon: Sun,
      text: "You brighten even my darkest days"
    },
    {
      icon: Sparkles,
      text: "Your love heals all my wounds"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-lavender-light/30 via-blush-pink/20 to-background relative overflow-hidden">
      {/* Animated background glow */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-blush-pink/10 via-lavender/10 to-medical-blue-light/10"
        animate={{
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block mb-6"
          >
            <Heart className="w-20 h-20 text-primary mx-auto" fill="currentColor" />
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-elegant font-bold text-primary mb-6">
            Your Smile Heals Me
          </h2>
          
          <p className="text-2xl md:text-3xl font-handwriting text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Just like you heal the world with your care, your presence heals my soul
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {healingMoments.map((moment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-6 rounded-2xl bg-card/70 backdrop-blur-md border-2 border-blush-pink/30 hover:border-blush-pink-dark/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,192,203,0.4)]"
            >
              <div className="p-4 rounded-full bg-gradient-to-br from-blush-pink to-lavender animate-glow-pulse">
                <moment.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <p className="text-xl font-handwriting text-foreground flex-1">
                {moment.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block p-8 md:p-12 rounded-3xl bg-gradient-to-br from-blush-pink/30 via-lavender/30 to-medical-blue-light/30 backdrop-blur-xl border-2 border-white/40 shadow-[0_0_50px_rgba(255,192,203,0.4)]">
            <p className="text-2xl md:text-4xl font-elegant text-primary mb-4 leading-relaxed">
              You comfort me when I'm down,<br/>
              You lift me when I fall,<br/>
              You are my home, my peace,<br/>
              You are my everything, my all.
            </p>
            <div className="flex justify-center gap-2 mt-6 text-4xl">
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
              >
                💕
              </motion.span>
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              >
                🌸
              </motion.span>
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
              >
                💖
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default YourSmileHealsMe;
