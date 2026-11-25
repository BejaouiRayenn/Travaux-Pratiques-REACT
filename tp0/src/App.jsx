

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Destinations from "./components/Destinations/Destinations";

import Login from "./components/Login/Login";
import Accueil from "./components/Accueil/Accueil";
import Apropos from "./components/Apropos/Apropos";
import Reservation from "./components/Reservation/Reservation";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/destinations" element={<Destinations />} />

        <Route path="/apropos" element={<Apropos />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
