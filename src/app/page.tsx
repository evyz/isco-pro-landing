import Advantages from "@/shared/ui/main/advantages";
import ConnectWithUs from "@/shared/ui/main/connect-with-us";
import MainHead from "@/shared/ui/main/head";
import HeadAbout from "@/shared/ui/main/head-about";
import HeadBanner from "@/shared/ui/main/head-banner";
import HeadOurServices from "@/shared/ui/main/head-our-services";
import HeadServices from "@/shared/ui/main/head-services";
import MainMap from "@/shared/ui/main/map";
import Partners from "@/shared/ui/main/partners";
import PortfolioSlider from "@/shared/ui/main/portfolio";

export default function Home() {
  return (
    <div className="bg-bg">
      <MainHead />
      <HeadAbout />
      <div className="py-[200px]">
        <HeadServices />
      </div>
      <HeadOurServices />
      <HeadBanner />
      <Partners />
      <PortfolioSlider />
      <Advantages />
      <ConnectWithUs />
      <div className="w-full py-[100px]">
        <MainMap />
      </div>
    </div>
  );
}
