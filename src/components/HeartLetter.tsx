import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

const HeartLetter = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-medical-blue-light/20 via-background to-lavender-light/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 animate-float">💝</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-20 animate-float" style={{ animationDelay: "1s" }}>💕</div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Heart className="w-16 h-16 text-primary mx-auto mb-4 animate-heartbeat" />
          <h2 className="text-4xl md:text-5xl font-elegant font-bold text-primary mb-4">
            A Letter From My Heart
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 md:p-12 bg-card/95 backdrop-blur-lg border-2 border-blush-pink/40 shadow-[0_0_40px_rgba(255,192,203,0.3)] relative">
            {/* Corner decorations */}
            <div className="absolute top-4 left-4 text-blush-pink-dark text-2xl">✿</div>
            <div className="absolute top-4 right-4 text-blush-pink-dark text-2xl">✿</div>
            <div className="absolute bottom-4 left-4 text-blush-pink-dark text-2xl">✿</div>
            <div className="absolute bottom-4 right-4 text-blush-pink-dark text-2xl">✿</div>

            <div className="space-y-6 font-handwriting text-lg md:text-xl leading-relaxed text-foreground">
              <p className="text-2xl font-elegant text-primary">My Dearest Aarcha,</p>
              
              <p>
                Words feel inadequate when I try to express what you mean to me. You are the gentle touch that soothes pain, the warm smile that brightens the darkest days, and the caring soul that heals hearts – including mine.
              </p>

              <p>
                Every day, you put on your nurse's uniform and step into a world of challenges, bringing hope and healing to those who need it most. You give so much of yourself to care for others, and I am in awe of your strength, compassion, and dedication.
              </p>

              <p className="text-primary font-semibold">
                But who takes care of the healer?
              </p>

              <p>
                I know I haven't always been there the way you deserved. I made mistakes, and for that, I am truly sorry. I see now how much you needed my support, my understanding, and my love – especially when you were giving so much of yourself to the world.
              </p>

              <p>
                You deserve someone who sees your beauty not just in the moments you shine, but also when you're tired, when you're overwhelmed, when you need someone to lean on. I want to be that person for you.
              </p>

              <p className="text-center text-2xl text-blush-pink-dark my-8">
                ❤️ You are my healer, my strength, my everything ❤️
              </p>

              <p>
                Your smile has the power to make everything feel okay. Your laugh is the melody I never want to stop hearing. Your presence in my life is the greatest gift I could ever ask for.
              </p>

              <p className="text-primary font-semibold">
                I promise to cherish you, to support you, to be there for you the way you are always there for everyone else.
              </p>

              <p>
                This website is just a small token of my love and appreciation for you. No amount of words, designs, or animations can truly capture how much you mean to me. But I hope this shows you that I see you, I appreciate you, and I love you with all my heart.
              </p>

              <p className="text-right text-2xl mt-8">
                Forever yours,<br/>
                <span className="text-primary font-elegant">Your love</span> 💕
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default HeartLetter;
