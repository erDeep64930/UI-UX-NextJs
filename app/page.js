import Banner from "@/components/Banner";
import GlowingGradientButton from "@/components/GlowingGradientButton";
import LoadingPage1 from "@/components/LoadingPage1";
import ModalPage from "@/components/ModalPage";
import SmokyText from "@/components/SmokyText";

export default function Home() {
  return (
    <div gap-y-16>
      <GlowingGradientButton />
      <LoadingPage1 />
      <ModalPage />
    <SmokyText />
    <Banner />
    </div>
  );
}
