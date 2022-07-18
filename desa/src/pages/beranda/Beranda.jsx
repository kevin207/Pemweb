import React, { useEffect, useState } from "react";
import "./beranda.css";
import { Fade } from "react-awesome-reveal";
import LOGO from "../../assets/logo.png";
import Card from "./components/Card";
import axios from "axios";

const Beranda = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  const [news, setNews] = useState([]);

  async function fetchData() {
    await axios.get("https://desa-babadan-api.herokuapp.com/api/berita").then(function (response) {
      if (response.data.status === 200) {
        setNews(response.data.berita);
      }
    });
  }

  return (
    <Fade triggerOnce>
      <div className="beranda">
        <div className="beranda-wrap">
          <div className="beranda-logo">
            <Fade triggerOnce duration={3000}>
              <img src={LOGO} alt="Logo Desa Babadan" className="beranda-logo" />
            </Fade>
          </div>

          <div className="beranda-word">
            <Fade triggerOnce direction="down">
              <h1 className="beranda-title">
                Website Resmi <br />
                Desa Babadan
              </h1>
            </Fade>

            <Fade direction="up" triggerOnce delay={300} cascade>
              <h4 className="beranda-text">Kecamatan Ngajum - Kabupaten Malang</h4>
              <h4 className="beranda-text">Kode Pos : 65164</h4>
            </Fade>
          </div>

          <div className="welcome">
            <p className="target">Selamat Datang Di Website Resmi Desa Babadan</p>
          </div>
        </div>
      </div>

      <div className="beranda-big-wrap">
        <div className="video-profil">
          <Fade direction="down" triggerOnce>
            <h1 className="video-profil-title">
              VIDEO PROFIL <br />
              DESA BABADAN
            </h1>
          </Fade>

          <Fade triggerOnce>
            <div className="video-profil-wrap">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/M-OLUZoeO9U"
                title="Company Profile  Desa Babadan"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Fade>
        </div>

        <div className="berita">
          <div className="berita-title">INFORMASI TERIKINI</div>
          <div className="berita-wrap">
            {news.map((item) => {
              return <Card key={item.id} id={item.id} image={item.image} judul={item.judul} isi={item.isi} waktu={item.waktu} tanggal={item.tanggal} />;
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Beranda;
