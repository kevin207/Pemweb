import React from "react";
import "./penduduk.css";
import { Fade } from "react-awesome-reveal";
import { BsGraphUp } from "react-icons/bs";

const Penduduk = () => {
  return (
    <div className="penduduk" id="penduduk">
      <Fade direction="down" triggerOnce>
        <h2 className="penduduk-title">PENDUDUK DESA</h2>
      </Fade>

      <div className="penduduk-wrap">
        <Fade direction="left" triggerOnce>
          <div className="penduduk-left">
            <div className="penduduk-left-title">Perkembangan Kependudukan Tahun 2017 – 2019</div>
            <table className="penduduk-table">
              <tr>
                <th>Aspek</th>
                <th>Satuan</th>
                <th>2017</th>
                <th>2018</th>
                <th>2019</th>
              </tr>

              <tr>
                <td>Jumlah Penduduk</td>
                <td>Jiwa</td>
                <td>7.292</td>
                <td>7.517</td>
                <td>7.868</td>
              </tr>

              <tr>
                <td>Jumlah Laki-Laki</td>
                <td>Jiwa</td>
                <td>3.686</td>
                <td>3.844</td>
                <td>4.001</td>
              </tr>

              <tr>
                <td>Jumlah Perempuan</td>
                <td>Jiwa</td>
                <td>3.603</td>
                <td>3.673</td>
                <td>3.867</td>
              </tr>

              <tr>
                <td>Jumlah A-RTM</td>
                <td>KK</td>
                <td>711</td>
                <td>711</td>
                <td>815</td>
              </tr>

              <tr>
                <td>Pertumbuhan Penduduk</td>
                <td>%</td>
                <td>0,4</td>
                <td>0,5</td>
                <td>0,7</td>
              </tr>

              <tr>
                <td>Kelahiran Penduduk</td>
                <td>Jiwa</td>
                <td>108</td>
                <td>246</td>
                <td>378</td>
              </tr>

              <tr>
                <td>Kematian Penduduk</td>
                <td>Jiwa</td>
                <td>23</td>
                <td>21</td>
                <td>19</td>
              </tr>

              <tr>
                <td>Kepadatan Penduduk</td>
                <td>
                  Jiwa/Km<sup>2</sup>
                </td>
                <td>1,61</td>
                <td>1,61</td>
                <td>1,60</td>
              </tr>
            </table>
          </div>
        </Fade>

        <Fade direction="right" triggerOnce>
          <div className="penduduk-right">
            <div className="penduduk-text">
              Jumlah penduduk Desa Babadan sebanyak 7.868 jiwa (laki-laki 4.001 jiwa dan perempuan 3.867 jiwa) yang tersebar di 7 Dusun, 7 RW dan 45 RT. Tingkat pertumbuhan rata-rata selama 6 (enam) tahun terakhir 0,05 %, dengan tingkat
              kepadatan sebesar 3.634 jiwa/km2.
            </div>

            <div className="penduduk-graph">
              <BsGraphUp className="penduduk-icon" />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Penduduk;
