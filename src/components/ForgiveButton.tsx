import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const RosePetal = ({ delay }: { delay: number }) => {
  const randomX = Math.random() * 100;
  const randomRotation = Math.random() * 360;
  const randomDuration = 3 + Math.random() * 2;

  return (
    <motion.div
      initial={{ 
        x: `${randomX}vw`,
        y: -100,
        rotate: randomRotation,
        opacity: 1,
        scale: 0.5 + Math.random() * 0.5
      }}
      animate={{
        y: "110vh",
        rotate: randomRotation + 360,
        opacity: [1, 1, 0],
      }}
      transition={{
        duration: randomDuration,
        delay: delay,
        ease: "linear"
      }}
      className="absolute text-4xl"
      style={{ left: 0 }}
    >
      🌹
    </motion.div>
  );
};

const ForgiveButton = () => {
  const [showPetals, setShowPetals] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setShowPetals(true);
    setTimeout(() => setShowPetals(false), 5000);
  };

  const handleScreenClick = () => {
    if (isClicked) {
      setShowPetals(true);
      setTimeout(() => setShowPetals(false), 5000);
    }
  };

  return (
    <>
      {/* Full-screen click overlay */}
      {isClicked && (
        <div 
          onClick={handleScreenClick}
          className="fixed inset-0 z-40 cursor-pointer"
          aria-label="Click anywhere to see rose petals"
        />
      )}
      
      <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/30 relative z-10">
        <div className="container mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {!isClicked ? (
            <>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                One Last Thing...
              </h2>
              <p className="text-xl md:text-2xl font-handwriting text-primary">
                I know words aren't enough, but I hope this is a start
              </p>
            </>
          ) : (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-4xl md:text-5xl font-handwriting text-accent">
                Thank you, my love 💕
              </h2>
              <p className="text-xl text-foreground">
                I promise to be better, every single day
              </p>
            </motion.div>
          )}

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handleClick}
              disabled={isClicked}
              size="lg"
              className="text-xl px-12 py-6 rounded-full shadow-glow hover:shadow-2xl transition-all duration-300 bg-accent hover:bg-accent/90 text-accent-foreground font-handwriting"
            >
              {isClicked ? (
                <span className="flex items-center gap-2">
                  <Heart className="w-6 h-6 fill-current" />
                  Forever Grateful
                  <Heart className="w-6 h-6 fill-current" />
                </span>
              ) : (
                "Forgive me? 🥺"
              )}
            </Button>
          </motion.div>

          {isClicked && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground italic"
            >
              (Click anywhere on the screen to see the magic ✨)
            </motion.p>
          )}
        </motion.div>

        {/* Rose Petals */}
        <AnimatePresence>
          {showPetals && (
            <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
              {Array.from({ length: 50 }).map((_, i) => (
                <RosePetal key={`petal-${Date.now()}-${i}`} delay={i * 0.1} />
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
    </>
  );
};

export default ForgiveButton;
