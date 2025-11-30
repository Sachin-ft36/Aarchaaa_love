import HeroSection from "@/components/HeroSection";
import HeartbeatAnimation from "@/components/HeartbeatAnimation";
import WhyYouAreSpecial from "@/components/WhyYouAreSpecial";
import ApologyCard from "@/components/ApologyCard";
import HeartLetter from "@/components/HeartLetter";
import MemoriesGallery from "@/components/MemoriesGallery";
import AudioPlayer from "@/components/AudioPlayer";
import PromiseChecklist from "@/components/PromiseChecklist";
import YourSmileHealsMe from "@/components/YourSmileHealsMe";
import ForgiveButton from "@/components/ForgiveButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <HeartbeatAnimation />
      <WhyYouAreSpecial />
      <ApologyCard />
      <HeartLetter />
      <MemoriesGallery />
      <AudioPlayer />
      <PromiseChecklist />
      <YourSmileHealsMe />
      <ForgiveButton />
    </div>
  );
};

export default Index;
