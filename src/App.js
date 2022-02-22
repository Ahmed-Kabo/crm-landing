import { Route, Routes } from "react-router";
import GlopleStyled from "./components/GlopleStyled";
import Navgation from "./components/Navgation";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <GlopleStyled />
      <Navgation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/agent/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
