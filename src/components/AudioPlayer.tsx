import { motion } from "framer-motion";
import { Music } from "lucide-react";
import { Card } from "@/components/ui/card";

const AudioPlayer = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
            A Song for You
          </h2>

          <Card className="backdrop-blur-lg bg-glass-bg border-glass-border shadow-soft p-8 rounded-2xl">
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="p-4 bg-primary/10 rounded-full"
              >
                <Music className="w-8 h-8 text-primary" />
              </motion.div>
              <div>
                <h3 className="text-xl font-handwriting text-primary">
                  Akale Aanenkilum
                </h3>
                <p className="text-muted-foreground">Dedicated to you</p>
              </div>
            </div>

            <audio
              controls
              className="w-full"
              controlsList="nodownload"
            >
              {/* Updated source path here */}
              <source src="/Aarcha.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>

            <p className="text-center text-muted-foreground mt-6 italic">
              "Every melody reminds me of you..."
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AudioPlayer;