import Banner from "@/components/Banner";
import GlowingGradientButton from "@/components/GlowingGradientButton";
import LoadingPage1 from "@/components/LoadingPage1";
import LoadingPage2 from "@/components/LoadingPage2";
import ModalPage from "@/components/ModalPage";
import SmokyText from "@/components/SmokyText";
import TabCarousal from "@/components/TabCarousal";

export default function Home() {
  return (
    <div gap-y-16>
      <GlowingGradientButton />
      <LoadingPage1 />
      <LoadingPage2 />
      <SmokyText />
      <Banner />
      <ModalPage />
      <TabCarousal />
    </div>
  );
}
