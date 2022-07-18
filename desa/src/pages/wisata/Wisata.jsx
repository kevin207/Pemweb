import React, { useEffect } from "react";
import "./wisata.css";
import { Fade } from "react-awesome-reveal";

// Gambar Wisata
import PURA from "../../assets/wisata/pura.jpg";
import PAKIS from "../../assets/wisata/pakis.jpg";
import EMBUNG from "../../assets/wisata/embung.jpg";
import PERABUAN from "../../assets/wisata/perabuan.jpg";

const Wisata = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fade>
      <div className="wisata">
        <Fade direction="down" triggerOnce>
          <h2 className="wisata-title">OBJEK PARIWISATA</h2>
        </Fade>

        <div className="wisata-wrap">
          <Fade direction="left" triggerOnce>
            <div className="wisata-item">
              <div className="wisata-left">
                <img src={PURA} alt="" className="wisata-img" />
              </div>
              <div className="wisata-desc">
                <div className="wisata-nama">PURA</div>
                <br />
                <div className="wisata-text">
                  Desa Babadan memiliki pura untuk tempat ibadah umat beragama Hindu, karena desa ini terdapat penduduk yang beragama Hindu. Pura Dharma Cantih dan Pura Bakti Luhur merupakan beberapa contoh pura yang ada di Desa Babadan
                  yang bisa dikunjungi untuk mempelajari budayanya.
                </div>
              </div>
            </div>
          </Fade>

          <Fade direction="right" triggerOnce>
            <div className="wisata-item">
              <div className="wisata-left">
                <img src={PERABUAN} alt="" className="wisata-img" />
              </div>
              <div className="wisata-desc">
                <div className="wisata-nama">PERABUAN</div>
                <br />
                <div className="wisata-text">
                  Tidak hanya pura, desa Babadan juga memiliki fasilitas Perabuan yang bernama "Marga Muksa" yang dimanfaatkan masyarakat desa Babadan untuk proses pembakaran jenazah umat Hindu atau biasa disebut Ngaben.
                </div>
              </div>
            </div>
          </Fade>

          <Fade direction="left" triggerOnce>
            <div className="wisata-item">
              <div className="wisata-left">
                <img src={EMBUNG} alt="" className="wisata-img" />
              </div>
              <div className="wisata-desc">
                <div className="wisata-nama">EMBUNG BABADAN</div>
                <br />
                <div className="wisata-text">
                  Embung Babadan merupakan salah satu potensi desa wisata Babadan yang menyajikan pemandangan hijaunya alam desa Babadan serta cekungan air yang dapat dimanfaatkan untuk arena pemancingan. Tidak hanya itu, Embung Babadan
                  juga memiliki area hijau yang luas dan cocok untuk refreshing dan bermain.
                </div>
              </div>
            </div>
          </Fade>

          <Fade direction="right" triggerOnce>
            <div className="wisata-item">
              <div className="wisata-left">
                <img src={PAKIS} alt="" className="wisata-img" />
              </div>
              <div className="wisata-desc">
                <div className="wisata-nama">TAMAN PAKIS</div>
                <br />
                <div className="wisata-text">
                  Keindahan alam lainnya yang dimiliki Desa Babadan ialah Taman Pakis yang terdiri dari hamparan pohon pinus dengan pemandangan yang menyegarkan mata yang berada di lereng Gunung Kawi yang luas dan tinggi serta dilingkupi
                  udara yang sejuk dan menjadi alur rute Pos 1 pendakian Gunung Kawi.
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  );
};

export default Wisata;
