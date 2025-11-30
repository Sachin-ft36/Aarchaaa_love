import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const promises = [
  "Daily listener - Your thoughts, your feelings, your day... I'm here",
  "Date night planner - Making time for us, always",
  "Forever supporter - Your dreams are my dreams",
  "Shoulder to lean on - When the world gets heavy",
  "Emergency responder - Available 24/7, just like you are for others",
  "Your biggest cheerleader - Celebrating every victory, big or small",
];

const PromiseChecklist = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Prescriptions for Us
          </h2>
          <p className="text-xl text-center font-handwriting text-primary mb-12">
            My promises to you, my healer
          </p>

          <Card className="backdrop-blur-lg bg-glass-bg border-glass-border shadow-soft p-8 md:p-10 rounded-3xl">
            <div className="space-y-4">
              {promises.map((promise, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                    className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1"
                  >
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </motion.div>
                  <p className="text-lg text-foreground leading-relaxed">{promise}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-8 p-6 bg-accent/10 rounded-2xl border border-accent/20"
            >
              <p className="text-center font-handwriting text-2xl text-accent">
                Prescribed with love, to be taken daily 💕
              </p>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PromiseChecklist;
