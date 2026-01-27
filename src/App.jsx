/*
BrowserRouter (renamed as Router) is like the navigation manager for your app.
Routes is a container for all your route definitions.
Each Route maps a URL path (like / or /journey) to a React component that should display.
*/


import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Journey from "./pages/Journey";
import BalaKanda from "./pages/Kandas/BalaKanda";
import AyodhyaKanda from "./pages/Kandas/AyodhyaKanda";
import AranyaKanda from "./pages/Kandas/AranyaKanda";
import KishkindhaKanda from "./pages/Kandas/KishkindhaKanda";
import SundaraKanda from "./pages/Kandas/SundaraKanda";
import YuddhaKanda from "./pages/Kandas/YuddhaKanda";
import UttaraKanda from "./pages/Kandas/UttaraKanda";
import NavBar from "./pages/Kandas/NavBar";
import LanguageSelector from "./LanguageSelector";

function AppContent() {
  const location = useLocation();

  //Hide navbar on Home & Journey only
  const hideNavbar = location.pathname === "/" || location.pathname === "/journey";
  const hideLanguageSelector = location.pathname === "/"; //Added this line

  return (
    <>
      {!hideNavbar && <NavBar />}     {/* 👈 NEW NAVBAR */}
      {!hideLanguageSelector && <LanguageSelector />}   {/* Already working */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/bala-kanda" element={<BalaKanda />} />
        <Route path="/ayodhya-kanda" element={<AyodhyaKanda />} />
        <Route path="/aranya-kanda" element={<AranyaKanda />} />
        <Route path="/kishkindha-kanda" element={<KishkindhaKanda />} />
        <Route path="/sundara-kanda" element={<SundaraKanda />} />
        <Route path="/yuddha-kanda" element={<YuddhaKanda />} />
        <Route path="/uttara-kanda" element={<UttaraKanda />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
