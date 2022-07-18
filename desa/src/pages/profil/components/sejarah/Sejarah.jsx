import React from "react";
import "./sejarah.css";
import { Fade } from "react-awesome-reveal";

const Sejarah = () => {
  return (
    <div className="sejarah" id="sejarah">
      <div className="sejarah-wrap">
        <div className="sejarah-left">
          <Fade direction="down" triggerOnce>
            <div className="sejarah-title">SEJARAH DESA</div>
          </Fade>

          <Fade triggerOnce direction="up" cascade>
            <div className="sejarah-text">
              Desa Babadan merupakan salah satu dari 9 Desa yang terletak wilayah administrasi Kecamatan Ngajum, Kabupaten Malang. Menurut (sesepuh desa) awalnya Desa Babadan hanyalah hutan belantara yang kemudian ditebangi atau dalam
              bahasa jawa disebut Babat Alas untuk dijadikan tempat bermukim oleh para cikal bakal (bedah kerawang) Desa Babadan. Dari situlah nama Desa Babadan diambil, yang kemudian juga diabadikan sebagai salah satu nama dusun yaitu
              Dusun Babadan.
            </div>
            <div className="sejarah-text">
              Wilayah Desa Babadan terdiri dari tujuh Dusun yaitu ; Dusun Babadan, Dusun Kapurono, Dusun Petungroto, Dusun Sumberkunci, Dusun Banaran, Dusun Watutumpeng dan Dusun Maduarjo. Pusat pemerintahan Desa pertama kali ada di Dusun
              Babadan, pada saat itu pula tokoh masyarakat yang terdiri dari beberapa perwakilan tujuh Dusun sepakat memberikan nama Desa tersebut Desa Babadan yang digunakan sampai dengan sekarang.{" "}
            </div>
          </Fade>
        </div>

        <Fade triggerOnce direction="right">
          <div className="sejarah-right">
            <div className="sejarah-right-top">Masa Kepemimpinan Kepala Desa</div>
            <table className="sejarah-table">
              <tr>
                <th>Nama</th>
                <th>Dari Tahun</th>
                <th>Sampai Tahun</th>
              </tr>

              <tr>
                <td className="left-align">Sumo Martorejo</td>
                <td>1898</td>
                <td>1937</td>
              </tr>

              <tr>
                <td className="left-align">Mariyadi Hardjo Utomo</td>
                <td>1937</td>
                <td>1974</td>
              </tr>

              <tr>
                <td className="left-align">Paito</td>
                <td>1974</td>
                <td>1990</td>
              </tr>

              <tr>
                <td className="left-align">Sujud Suparetman</td>
                <td>1990</td>
                <td>1998</td>
              </tr>

              <tr>
                <td className="left-align">Tomposari</td>
                <td>1998</td>
                <td>2013</td>
              </tr>

              <tr>
                <td className="left-align">Sunaryo</td>
                <td>2013</td>
                <td>2019</td>
              </tr>

              <tr>
                <td className="left-align">Purwito</td>
                <td>2019</td>
                <td>2025</td>
              </tr>
            </table>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Sejarah;
