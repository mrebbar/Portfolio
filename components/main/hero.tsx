import { HeroContent } from "@/components/sub/hero-content";
import { VideoBackground } from "@/components/sub/video-background";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full overflow-hidden">
      <VideoBackground
        src="/videos/blackhole.webm"
        className="rotate-180 absolute top-[-120px] sm:top-[-220px] lg:top-[-340px] left-0 w-full h-full object-cover -z-20"
      />

      <HeroContent />
    </div>
  );
};
