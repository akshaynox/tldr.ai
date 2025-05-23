import { BgGradient } from "@/components/commons/bg-gradient";
import { HeroSection } from "@/components/home/hero-section";

export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient />
      <div className="flex flex-col">
        <HeroSection />
      </div>
    </div>
  );
}
