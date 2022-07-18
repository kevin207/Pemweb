import React from "react";
import "./wilayah.css";
import { Fade } from "react-awesome-reveal";
import MAP from "../../../../assets/peta_wilayah.png";

const Wilayah = () => {
  return (
    <div className="wilayah" id="wilayah">
      <Fade direction="down" triggerOnce>
        <h2 className="wilayah-title">WILAYAH DESA</h2>
      </Fade>

      <div className="wilayah-wrap">
        <div className="wilayah-left">
          <Fade direction="left" triggerOnce>
            <div className="wilayah-text">Wilayah Desa Babadan terletak pada 700 s/d. 900 mdpl, dengan luas 11.718.640 km2 atau 1.171.864. ha. dengan batas-batas wilayah, sebagai berikut:</div>
            <br />
            <ul>
              <li>Sebelah Utara : Desa Sumbersuko Kec. Wagir</li>
              <li>Sebelah Timur : Desa Kesamben Kec. Ngajum dan Desa Permanu Pakisaji</li>
              <li>Sebelah Selatan : Desa Balesari Kec. Ngajum</li>
              <li>Sebelah Barat : Perhutani / Gunung Kawi</li>
            </ul>
            <br />
            <div className="wilayah-text">Pusat Pemerintahan Desa Babadan terletak di dusun Sumberkunci RT 001 RW 007 dengan menempati areal lahan seluas 17 x 25 m².</div>
          </Fade>
        </div>

        <Fade direction="right" triggerOnce>
          <div className="wilayah-right">
            <img src={MAP} alt="peta wilayah desa babadan" className="map" />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Wilayah;
