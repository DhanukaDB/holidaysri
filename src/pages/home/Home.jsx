import Header from "../../components/hotel/header/Header";
import MailList from "../../components/hotel/mailList/MailList";
import PropertyList from "../../components/hotel/propertyList/PropertyList";
import Landing from "../../components/hotel/landing/Landing";
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

const Home = () => {
  return (
    <div>
      <Landing />
      <div className="main_container">
        <div className="hotel" id="hotels">
          <Header />
        </div>
        <div className="homeContainer">
          <Featured />
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList />
          <h1 className="homeTitle">Homes guests love</h1>
          <FeaturedProperties />
        </div>
        <div className="vehicle" id="vehicles">
          <VehicleHeader />
        </div>
        <div className="vehicleContiner">
          <FeaturedVehicle />
          <h1 className="homeTitle">Browse by vehicle type</h1>
          <VehicleList />
        </div>
        <div className="tourPackage" id="tour-packages">
          <TourPackageHeader />
        </div>
        <div className="tourPackageContainer">
          <TourPackageFeatured />
        </div>
        <div className="travelPartner" id="travel-partner">
          <TravelPartnerHeader />
        </div>
        <div className="travelPartnerContainer">
          <TravelPartnerFeatured />
        </div>
        <div className="tourGuide" id="tour-guide">
          <TourGuideHeader />
        </div>
        <div className="tourGuideContainer">
          <TourGuideFeatured />
        </div>
        <div className="marketplace" id="market-place">
          <MarketPlaceHeader />
        </div>
        <div className="marketPlaceContainer">
          <FeaturedMarketPlace />
          <h1 className="homeTitle">Gifts guests love</h1>
          <FeaturedMarket />
        </div>
        <MailList />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
