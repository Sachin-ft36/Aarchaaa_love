import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeartbeatAnimation = () => {
  const [showHeart, setShowHeart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowHeart(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-foreground mb-12"
        >
          The Heartbeat
        </motion.h2>

        <div className="relative h-64 flex items-center justify-center">
          {!showHeart ? (
            <motion.svg
              width="100%"
              height="200"
              viewBox="0 0 1000 200"
              className="max-w-4xl mx-auto"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            >
              <motion.path
                d="M 0 100 L 100 100 L 120 80 L 140 120 L 160 100 L 250 100 L 270 80 L 290 120 L 310 100 L 400 100 L 420 80 L 440 120 L 460 100 L 550 100 L 570 80 L 590 120 L 610 100 L 700 100 L 720 80 L 740 120 L 760 100 L 850 100 L 870 80 L 890 120 L 910 100 L 1000 100"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </motion.svg>
          ) : (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <motion.svg
                width="150"
                height="150"
                viewBox="0 0 24 24"
                className="text-accent"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <path
                  fill="currentColor"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </motion.svg>
            </motion.div>
          )}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: showHeart ? 0.5 : 3.5 }}
          className="text-2xl md:text-3xl font-handwriting text-primary mt-8"
        >
          My heart only beats for you.
        </motion.p>
      </div>
    </section>
  );
};

export default HeartbeatAnimation;
