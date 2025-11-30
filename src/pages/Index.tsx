import HeroSection from "@/components/HeroSection";
import HeartbeatAnimation from "@/components/HeartbeatAnimation";
import ApologyCard from "@/components/ApologyCard";
import AudioPlayer from "@/components/AudioPlayer";
import PromiseChecklist from "@/components/PromiseChecklist";
import ForgiveButton from "@/components/ForgiveButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <HeartbeatAnimation />
      <ApologyCard />
      <AudioPlayer />
      <PromiseChecklist />
      <ForgiveButton />
    </div>
  );
};

export default Index;
