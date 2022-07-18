import React from "react";
import "./vismis.css";
import { Fade } from "react-awesome-reveal";

const Vismis = () => {
  return (
    <div className="vismis" id="vismis">
      <h2 className="vismis-title">
        <Fade direction="down" triggerOnce>
          <div>
            <span className="span-visi">VISI</span> & <span className="span-misi">MISI</span>
          </div>
        </Fade>
      </h2>
      <div className="vismis-wrap">
        <Fade direction="left" triggerOnce>
          <div className="visi">
            <h5 className="visi-title">Visi Pembangunan Desa Babadan untuk Periode 2020-2025:</h5>
            <br />
            <br />
            <p className="visi-poin">“Menjadikan Masyarakat Desa Babadan Cerdas, Berkualitas dan Sejahtera Menuju Kemakmuran Masyarakat yang Adil dan Merata disegala Bidang Pembangunan”</p>
          </div>
        </Fade>

        <Fade direction="right" triggerOnce>
          <div className="misi">
            <h5 className="misi-title">Misi Pembangunan Desa Babadan untuk 6 tahun kedepan:</h5>
            <br />
            <ol className="misi-poin">
              <li>Mewujudkan masyarakat Desa dapat mengenyam pendidikan formal maupun informal</li>
              <li>Mewujudkan kehidupan masyarakat Desa yang semakin baik, sehingga memiliki nilai jual terhadap cipta, rasa dan karsanya</li>
              <li>Mewujudkan kehidupan masyarakat Desa semakin baik</li>
              <li>Mewujudkan rasa keadilan masyarakat dalam kerangka pelayanan masyarakat yang lebih baik</li>
              <li>Mewujudkan pemerataan pembangunan dan hasil-hasilnya yang dapat dirasakan oleh masyarakat Desa tanpa memandang kepentingan politik, SARA dan antar golongan.</li>
            </ol>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Vismis;
