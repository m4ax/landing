import HeaderOne from "../../layout/headers/header";
import HeroHomeOne from "./HeroHomeOne";
import DomainSearchHomeTwo from "../home-2/DomainSearchHomeTwo";
import PricingHomeOne from "./PricingHomeOne";
import ServicesHomeOne from "./ServicesHomeOne";
import FAQHomeOne from "./FAQHomeOne";
import ChoseAreaHomeOne from "./ChoseAreaHomeOne";
import TestimonailHomeOne from "./TestimonailHomeOne";
import NewsFeedHomeOne from "./NewsFeedHomeOne";
import BrandHomeOne from "./BrandHomeOne";
import FooterOne from "../../layout/footers/FooterOne";
import CoreFeaturesHomeThree from "../home-3/CoreFeaturesHomeThree";
import SubscriptinHomeThree from "../home-3/SubscriptinHomeThree";
import IntegrationsHomeThree from "../home-3/IntegrationsHomeThree";
import MakeBusinessHomeTwo from "../home-2/MakeBusinessHomeTwo";
import CoreFeaturesHomeTwo from "../home-2/CoreFeaturesHomeTwo";
import Product from "./product";
import SimpleSeamless from "./SimpleSeamless";
import Punchline from "./Punchline";
import Uploader from "../home-3/Uploader"
import Secruity from "../home-2/Secruity";

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <HeroHomeOne />
        <DomainSearchHomeTwo />
        <CoreFeaturesHomeThree />
        <Secruity />
        <Uploader />
        <IntegrationsHomeThree />
        <SimpleSeamless line1="It's Simple" line2="It's Seamless" />
        {/* <SubscriptinHomeThree /> */}
        {/* <PricingHomeOne /> */}
        {/* <Product /> */}

        {/* <ChoseAreaHomeOne /> */}
        {/* <MakeBusinessHomeTwo /> */}
        {/* <TestimonailHomeOne /> */}
        {/* <NewsFeedHomeOne /> */}
        {/* <BrandHomeOne /> */}
      </main>
      <FooterOne />
    </>
  );
};

export default HomeOne;
