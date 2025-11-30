import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const ApologyCard = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="backdrop-blur-lg bg-glass-bg border-glass-border shadow-soft p-8 md:p-12 rounded-3xl">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center text-foreground mb-6"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              My Dearest Aarcha,
            </motion.h2>

            <div className="space-y-6 text-foreground/90 text-lg md:text-xl leading-relaxed">
              <p className="font-handwriting text-2xl md:text-3xl text-primary text-center mb-8">
                An apology from my heart to yours...
              </p>

              <p>
                You are the strongest person I know. Every day, you pour your heart and soul into healing others, caring for them when they're at their most vulnerable. You give so much of yourself to everyone around you.
              </p>

              <p>
                And yet, when you needed me to be there for you, when you needed support and understanding, I failed you. I let you down, and I am deeply sorry.
              </p>

              <p className="font-semibold text-primary">
                You deserve someone who listens, who understands, who supports you just as you support everyone else. You deserve better than what I gave you in that moment.
              </p>

              <p>
                I see your strength, your compassion, your dedication. I see how much you sacrifice for others. And I promise to do better. To be the person you deserve. To heal alongside you, not add to your burdens.
              </p>

              <p className="text-center font-handwriting text-2xl text-accent mt-8">
                You heal the world. Let me help heal you. ❤️
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ApologyCard;
