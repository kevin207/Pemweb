import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Global Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// Pages
import Beranda from "./pages/beranda/Beranda";
import Profil from "./pages/profil/Profil";
import Wisata from "./pages/wisata/Wisata";
import Potensi from "./pages/potensi/Potensi";
import Layanan from "./pages/layanan/Layanan";
import Bumdes from "./pages/bumdes/Bumdes";

import Berita from "./pages/admin/Berita";
import Tambah from "./pages/admin/crud/Tambah";
import Edit from "./pages/admin/crud/Edit";
import Detail from "./pages/detail/Detail";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/babadan" element={<Beranda />} />
        <Route path="profil" element={<Profil />} />
        <Route path="/wisata" element={<Wisata />} />
        <Route path="/potensi" element={<Potensi />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/bumdes" element={<Bumdes />} />

        <Route path="/admin" element={<Berita />} />
        <Route path="/tambah" element={<Tambah />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/berita/detail/:id" element={<Detail />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
