import { motion } from "framer-motion";
import { Heart, Sparkles, Shield, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const WhyYouAreSpecial = () => {
  const qualities = [
    {
      icon: Heart,
      title: "Your Caring Heart",
      description: "You heal not just with medicine, but with compassion. Every patient feels your genuine care and kindness."
    },
    {
      icon: Shield,
      title: "Your Strength",
      description: "You face the toughest days with grace and courage. Your resilience inspires everyone around you."
    },
    {
      icon: Sparkles,
      title: "Your Beautiful Soul",
      description: "Your smile lights up even the darkest rooms. Your presence is a gift to this world."
    },
    {
      icon: Star,
      title: "Your Dedication",
      description: "As a nurse, you give everything to help others. Your commitment to healing is extraordinary."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background via-lavender-light to-background relative overflow-hidden">
      {/* Glowing background effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blush-pink-dark rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-medical-blue rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1s" }} />
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
            Why You're Special
          </h2>
          <p className="text-xl font-handwriting text-muted-foreground">
            Aarcha, you are extraordinary in every way
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {qualities.map((quality, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-card/80 backdrop-blur-md border-2 border-blush-pink/30 hover:border-blush-pink-dark/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,192,203,0.4)] group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-blush-pink to-lavender group-hover:animate-glow-pulse">
                    <quality.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-elegant font-semibold text-primary mb-3">
                      {quality.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {quality.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyYouAreSpecial;
