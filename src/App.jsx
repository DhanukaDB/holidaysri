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

  return isLoading ? (
    <Loader />
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginMobile />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/location" element={<Location />} />
        <Route path="/add-vehicle" element={<LocalVehicleForm />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/destinations" element={<Destination />} />
        <Route path="/events" element={<Events />} />
        <Route path="/rides" element={<Vehicles />} />
        <Route path="/local-dashboard" element={<LocalAgentDashboard />} /> 
        <Route path="/foreign-dashboard" element={<ForeignAgentDashboard />} />
        <Route path="/landing" element={<Newlanding />} />
        <Route path="/admin" element={<AdmminPanel />} />


        <Route path="/purchase-promo-code" element={<PurchasePromoCodePage />} />
        <Route path="/Checkout" element={<CheckoutPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
