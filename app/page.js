import Banner from "@/components/Banner";
import GlowingGradientButton from "@/components/GlowingGradientButton";
import ModalPage from "@/components/ModalPage";
import SmokyText from "@/components/SmokyText";

export default function Home() {
  return (
    <div gap-y-16>
      <GlowingGradientButton />
      <ModalPage />
    <SmokyText />
    <Banner />
    </div>
  );
}
