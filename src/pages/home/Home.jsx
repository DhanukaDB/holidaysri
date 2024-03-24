import Header from "../../components/hotel/header/Header";
import MailList from "../../components/hotel/mailList/MailList";
import PropertyList from "../../components/hotel/propertyList/PropertyList";
import Featured from "../../components/hotel/featured/Featured";
import FeaturedProperties from "../../components/hotel/featuredProperties/FeaturedProperties";
import Footer from "../../components/hotel/footer/Footer";
import "./home.css";
import VehicleHeader from "../../components/vehicle/header/VehicleHeader";
import FeaturedVehicle from "../../components/vehicle/featured/FeaturedVehicle";
import MarketPlaceHeader from "../../components/marketplace/header/MarketPlaceHeader";
import FeaturedMarketPlace from "../../components/marketplace/featured/FeaturedMarketPlace";
import FeaturedMarket from "../../components/marketplace/featuredMarket/FeaturedMarket";
import VehicleList from "../../components/vehicle/vehicleList/VehicleList";
import TravelPartnerHeader from "../../components/travelPartner/header/TravelPartnerHeader";
import TravelPartnerFeatured from "../../components/travelPartner/featured/TravelPartnerFeatured";
import TourGuideHeader from "../../components/tourGuide/header/TourGuideHeader";
import TourGuideFeatured from "../../components/tourGuide/featured/TourGuideFeatured";
import TourPackageHeader from "../../components/tourPackages/header/TourPackageHeader";
import TourPackageFeatured from "../../components/tourPackages/tourPackageFeatured/TourPackageFeatured";
import Homepagemmain from "../../components/hotel/landing/NewLanding"
import Newheader from "../../components/hotel/header/Newheader";
import Newfeatured from "../../components/hotel/featured/Newfeatured";
import Newprpetylist from "../../components/hotel/propertyList/Newpropetylist";
import Tourpacnew from "../../components/tourPackages/tourPackageFeatured/Tourpacnew";
import Contact from "../../components/hotel/mailList/contact";
import Gallery from "../../components/hotel/mailList/Galary";
import About from "../../components/About/About";

const Home = () => {
  return (
    <div className="full-home-container">
      <Homepagemmain />


      <div className="main_container">
        <div className="homeContainer" id="deswithhomecontainer">
          <Newfeatured />
         <div className="hotels" id="hotels">
         <Newprpetylist />
          </div> 
        </div>
        <div className="tourPackage" id="tour-packages">
          <Tourpacnew />
        </div>
        <div className="vehicle" id="vehicles">
          <VehicleHeader />
        </div>
        <div className="vehicleContiner" >
          <FeaturedVehicle />
          <VehicleList />
        </div>
        <div className="travelPartner" id="travel-partner">
          <TravelPartnerHeader />
        </div>
        <div className="travelPartnerContainer" >
          <TravelPartnerFeatured />
        </div>
        <div className="tourGuide" id="tour-guide">
          <TourGuideHeader />
        </div>
        <div className="tourGuideContainer" >
          <TourGuideFeatured />
        </div>
        <div className="marketplace" id="market-place">
          <MarketPlaceHeader />
        </div>
        <div className="marketPlaceContainer" >
          <FeaturedMarketPlace />
          <h1 className="homeTitle">Gifts guests love</h1>
          <FeaturedMarket />
        </div>
        <div className="Ctgalary" id="CT-Gallery">
          <Contact />
          </div>
          <div className="Ctgalaryto" id="CT-Galleryto">
          <Gallery />
          </div>
      </div>


      <Footer />
    </div>
  );
};

export default Home;
