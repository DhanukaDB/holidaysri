import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Register from "./components/hotel/Register/Register";
import Destination from "./pages/destinations/Destination";
import { useEffect, useState } from "react";
import Loader from "./components/loader/Loader";
import LoginMobile from "./components/hotel/Login/LoginMobile";
import Seller from "./pages/Seller/Seller";
import Location from "./pages/Locations/Location";
import LocalVehicleForm from "./components/agents/Local Agents/LocalVehicle";
import Events from "./pages/events/Events";
import Vehicles from "./pages/vehicles/Vehicle";
import PurchasePromoCodePage from "./components/referral/purchasepromocode";
import CheckoutPage from "./components/referral/Checkout";
import LocalAgentDashboard from "./components/agents/Local Agents/localDashboard.";
import ForeignAgentDashboard from "./components/agents/Foreign Agents/ForeignAgDashboard";
import Newlanding from "./components/hotel/landing/NewLanding";
import AdmminPanel from "./components/Addmin/AdminPanel";
import AllLocation from "./pages/alllocations/Locations";
import Test from "./pages/destinations/Test";
import AllVehicles from "./pages/vehicles/Allvehicles";
import AddHotel from "./components/hotel/AddHotel/AddHotel";
import Destination2 from "./pages/destinations/Destination2";
import About from "./components/About/About";
import Marcketplace from "./pages/marcketplace/Marcketplace";
import Food from "./pages/foods/Foods";
import TourGuide from "./pages/tourguide/TourGuide";
import Partner from "./pages/partner/Partner";
import EventComponent from "./pages/Locations/Addevent";
import Allparnters from "./pages/partner/Allparnters";
import Alltourguides from "./pages/tourguide/Alltourguides";
import Allmarcketplace from "./pages/marcketplace/Allmarcketplace";
import Addpackage from "./pages/Packages/Addpackage";
import Allpackages from "./pages/Packages/Allpackages";
import Package from "./pages/Packages/package";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };
    fakeDataFetch();
  });

  return  (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={isLoading ?( < Loader /> ) : < Home /> } />
        <Route path="/hotels" element={<List />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginMobile />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/location" element={<Location />} />
        <Route path="/add-vehicle" element={<LocalVehicleForm />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/all-locations" element={<AllLocation />} />
        <Route path="/destinationa/:id" element={<Destination />} />
        <Route path="/events/:id" element={<Events />} />
        <Route path="/rides" element={<Vehicles />} />
        <Route path="/local-dashboard" element={<LocalAgentDashboard />} /> 
        <Route path="/foreign-dashboard" element={<ForeignAgentDashboard />} />
        <Route path="/landing" element={<Newlanding />} />
        <Route path="/admin" element={<AdmminPanel />} />
        <Route path="/destination/:id" element={<Destination2 />} />
        <Route path="/all-vehicles" element={<AllVehicles />} />
        <Route path="/all-partners" element={<Allparnters />} />
        <Route path="/all-tourguides" element={<Alltourguides />} />
        <Route path="/all-packages" element={<Allpackages />} />

        <Route path="/add-event" element={<EventComponent/>} />
        <Route path="/add-package" element={<Addpackage/>} />

        <Route path="/addhotel" eliment={<AddHotel />} />
        <Route path="/about" element={<About />} />
        <Route path="/marcketplace" element={<Marcketplace/>} />
        <Route path="/all-marcketplace" element={<Allmarcketplace/>} />
        <Route path="/food/:id/:locationName" element={<Food/>}/>
        <Route path="/tourguide/:id/:locationName" element={<TourGuide/>}/>
        <Route path="/partner/:id/:locationName" element={<Partner/>}/>
        <Route path="/package" element={<Package/>} />

        <Route path="/purchase-promo-code" element={<PurchasePromoCodePage />} />
        <Route path="/Checkout" element={<CheckoutPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
