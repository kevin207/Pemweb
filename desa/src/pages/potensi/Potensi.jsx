import React, { useEffect } from "react";
import "./potensi.css";
import { Fade } from "react-awesome-reveal";

const Potensi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fade>
      <div className="potensi">
        <Fade direction="down" triggerOnce>
          <div className="potensi-title">POTENSI DESA</div>
        </Fade>

        <Fade cascade delay={500} triggerOnce>
          <div className="potensi-tiny">
            <div className="potensi-item-title">Aspek Sumber Daya Pembangunan</div>
            <table className="item-table">
              <tr>
                <td>Batu Kali</td>
                <td>&nbsp;&nbsp;: &nbsp;</td>
                <td>3</td>
                <td>Lokasi</td>
              </tr>
            </table>
          </div>

          <div className="potensi-small">
            <div className="potensi-item">
              <div className="potensi-item-title">Aspek Sumber Daya Alam</div>

              <table className="item-table">
                <tr>
                  <td>Perkembunan Cengkeh & Kopi</td>
                  <td>&nbsp;&nbsp;: &nbsp;</td>
                  <td>1.400</td>
                  <td>KK</td>
                </tr>

                <tr>
                  <td>Perladangan Tebu, Palawija & Sayur Mayur</td>
                  <td>&nbsp;&nbsp;: &nbsp;</td>
                  <td>1.000</td>
                  <td>KK</td>
                </tr>

                <tr>
                  <td>Persawahan Padi & Jagung</td>
                  <td>&nbsp;&nbsp;: &nbsp;</td>
                  <td>750</td>
                  <td>KK</td>
                </tr>

                <tr>
                  <td>Perkebunan Kayu & Bambu</td>
                  <td>&nbsp;&nbsp;: &nbsp;</td>
                  <td>1.800</td>
                  <td>KK</td>
                </tr>
              </table>
            </div>
            <div className="potensi-item">
              <div className="potensi-item-title">Aspek Sumber Daya Manusia</div>

              <table className="item-table">
                <tr>
                  <td>Lulusan SD/Sederajat</td>
                  <td>&nbsp;&nbsp;: &nbsp;</td>
                  <td>5.001</td>
                  <td>Jiwa</td>
                </tr>

                <tr>
                  <td>Lulusan SMP/Sederajat</td>
                  <td>&nbsp;&nbsp;: &nbsp;</td>
                  <td>2.004</td>
                  <td>Jiwa</td>
                </tr>

                <tr>
                  <td>Lulusan SMA/Sederajat</td>
                  <td>&nbsp;&nbsp;: &nbsp;</td>
                  <td>782</td>
                  <td>Jiwa</td>
                </tr>

                <tr>
                  <td>Lulusan Perguruan Tinggi</td>
                  <td>&nbsp;&nbsp;: &nbsp;</td>
                  <td>79</td>
                  <td>Jiwa</td>
                </tr>
              </table>
            </div>
          </div>

          <div className="potensi-big">
            <div className="potensi-item-title">Aspek Sumber Daya Sosial Budaya</div>
            <div className="potensi-big-wrap">
              <table className="item-table">
                <tr>
                  <td>Kesenian Ludruk</td>
                  <td>&nbsp;&nbsp;: &nbsp;</td>
                  <td>2</td>
                  <td>Kelompok</td>
                </tr>

                <tr>
                  <td>Kesenian Kuda Lumping</td>
                  <td>&nbsp;&nbsp;: &nbsp;</td>
                  <td>7</td>
                  <td>Kelompok</td>
                </tr>

                <tr>
                  <td>Kesenian Pencak Silat</td>
                  <td>&nbsp;&nbsp;: &nbsp;</td>
                  <td>7</td>
                  <td>Kelompok</td>
                </tr>

                <tr>
                  <td>Kesenian Orkes</td>
                  <td>&nbsp;&nbsp;: &nbsp;</td>
                  <td>3</td>
                  <td>Kelompok</td>
                </tr>
              </table>

              <table className="item-table">
                <tr>
                  <td>Kesenian Qosidah dan Al-Banjari</td>
                  <td>&nbsp;&nbsp;: &nbsp;</td>
                  <td>3</td>
                  <td>Kelompok</td>
                </tr>

                <tr>
                  <td>Kesenian Beganjur</td>
                  <td>&nbsp;&nbsp;: &nbsp;</td>
                  <td>1</td>
                  <td>Kelompok</td>
                </tr>

                <tr>
                  <td>Kesenian Drum Band</td>
                  <td>&nbsp;&nbsp;: &nbsp;</td>
                  <td>4</td>
                  <td>Kelompok</td>
                </tr>

                <tr>
                  <td>Kesenian Tari Topeng</td>
                  <td>&nbsp;&nbsp;: &nbsp;</td>
                  <td>1</td>
                  <td>Kelompok</td>
                </tr>
              </table>
            </div>
          </div>
        </Fade>
      </div>
    </Fade>
  );
};

export default Potensi;
