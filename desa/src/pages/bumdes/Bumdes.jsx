import React, { useEffect } from "react";
import "./bumdes.css";

import ORGANISASI from "../../assets/bumdes-organisasi.jpg";
import { Fade } from "react-awesome-reveal";

import IMG1 from "../../assets/1.png";
import IMG2 from "../../assets/2.png";

const Bumdes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fade>
      <>
        <div className="bumdes">
          <div className="bumdes-wrap">
            <div className="bumdes-left">
              <Fade direction="down" triggerOnce>
                <div className="bumdes-title">BUMDes dan Peran BUMDes</div>
              </Fade>
              <br />
              <Fade direction="up" triggerOnce>
                <div className="bumdes-text">
                  BUMDes atau Badan Usaha Milik Desa adalah usaha desa yang dibentuk/didirikan oleh pemerintah desa yang kepemilikan modal dan pengelolaannya dilakukan oleh pemerintah desa dan masyarakat. BUMDes adalah lembaga usaha desa
                  yang dikelola oleh masyarakat dan pemerintah desa dalam upaya memperkuat perekonomian desa dan dibentuk berdasarkan kebutuhan dan potensi desa. BUMDes di Desa Babadan didirikan pada Januari 2022.
                </div>
              </Fade>
            </div>

            <div className="bumdes-right">
              <Fade triggerOnce direction="down">
                <div className="visi-bumdes">
                  <div className="visi-bumdes-title">VISI</div>
                  <div className="visi-bumdes-text">“Dengan kuatnya BUMDes Makmur Babadan maka masyarakat akan makmur di bidang Perekonomiannya.”</div>
                </div>

                <div className="misi-bumdes">
                  <div className="misi-bumdes-title">MISI</div>
                  <div className="misi-bumdes-text">Menggerakan perekonomian Desa dengan menciptakan peluang usaha dan peluang pekerjaan dengan pendampingan dan pembinaan rutin di seluruh wilayah desa Babadan. </div>
                </div>
              </Fade>
            </div>
          </div>

          <div className="kepemilikan">
            <Fade direction="up" triggerOnce>
              <div className="kepemilikan-title">KEPEMILIKAN MODAL</div>
              <ol className="flex">
                <li className="modal-awal">
                  <div className="small-title">Penyertaan Modal Awal </div>
                  Penyertaan modal awal sebesar Rp. 75.000.000,- (tujuh puluh lima juta rupiah) 100% adalah penyertaan modal Desa.
                </li>
                <li className="modal-desa">
                  <div className="small-title">Penyertaan Modal Desa </div>
                  Penyertaan Modal Desa Sebesar Rp. 75.000.000,- (tujuh puluh lima juta rupiah).
                </li>
              </ol>

              <div className="garis"></div>
            </Fade>
          </div>

          <div className="peta">
            <Fade direction="down" triggerOnce>
              <div className="peta-title">PETA POTENSI DESA BABADAN JANGKA PANJANG</div>
              <div className="peta-wrap">
                <Fade triggerOnce direction="up">
                  <img src={IMG1} alt="" className="peta-1" />
                </Fade>

                <Fade triggerOnce direction="up">
                  <img src={IMG2} alt="" className="peta-2" />
                </Fade>
              </div>
            </Fade>
          </div>
        </div>

        <div className="bumdes-organisasi">
          <div className="bumdes-organisasi-img">
            <img src={ORGANISASI} alt="struktur organisasi bumdes babadan" />
          </div>
        </div>
      </>
    </Fade>
  );
};

export default Bumdes;
