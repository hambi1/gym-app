import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./dist/css/main.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Award from "./pages/eftekhar";
import Services from "./pages/services";
import Glary from "./pages/galary";
import Trainers from "./pages/trainers";
import Plans from "./pages/plans";
import ContactUs from "./pages/contactUs";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container-fluid">
        <Routes>
          <Route path="/home" element={<Navigate replace to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/awards" element={<Award />} />
          <Route path="/services" element={<Services />} />
          <Route path="/glary" element={<Glary />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
