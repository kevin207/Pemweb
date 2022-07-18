import React, { useEffect } from "react";
import "./profil.css";
import { Fade } from "react-awesome-reveal";

// Profil Components
import Sejarah from "./components/sejarah/Sejarah";
import Vismis from "./components/vismis/Vismis";
import Wilayah from "./components/wilayah/Wilayah";
import Pelayan from "./components/pelayan/Pelayan";
import Penduduk from "./components/penduduk/Penduduk";

const Profil = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="helper-nav">
        <a href="#" className="helper-link">
          Sejarah
        </a>
        <a href="#vismis" className="helper-link">
          Visi/Misi
        </a>
        <a href="#wilayah" className="helper-link">
          Wilayah
        </a>
        <a href="#penduduk" className="helper-link">
          Penduduk
        </a>
        <a href="#pelayan" className="helper-link">
          Organisasi
        </a>
      </div>

      <Fade triggerOnce>
        <Sejarah />
        <Vismis />
        <Wilayah />
        <Penduduk />
        <Pelayan />
      </Fade>
    </>
  );
};

export default Profil;
