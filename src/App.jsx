import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Register from "./components/hotel/Register/Register";
import Destination from "./pages/destinations/Destination";
import { useEffect, useState } from "react";
import Loader from "./components/loader/Loader";
import LoginMobile from "./components/hotel/Login/LoginMobile";


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

        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/destinations" element={<Destination />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
