import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./detail.css";
import { MdAccessTime, MdDateRange } from "react-icons/md";

const Detail = () => {
  const [inputs, setInputs] = useState({
    judul: "",
    isi: "",
    waktu: "",
    tanggal: "",
  });
  const { id } = useParams();

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  async function fetchData() {
    await axios.get(`https://desa-babadan-api.herokuapp.com/api/edit-berita/${id}`).then(function (response) {
      if (response.data.status === 200) {
        setInputs(response.data.berita);
      }
    });
  }

  return (
    <div className="detail">
      <div className="detail-wrap">
        <div className="detail-header-wrap">
          <small className="detail-small">Berita Desa Babadan #{inputs.id}</small>
          <h5 className="detail-title">{inputs.judul}</h5>

          <div className="detail-bottom-wrap">
            <div className="detail-tanggal">
              <MdDateRange className="detail-icon" /> &nbsp;
              {inputs.tanggal}
            </div>
            <div className="detail-waktu">
              <MdAccessTime className="detail-icon" /> &nbsp;
              {inputs.waktu}
            </div>
          </div>

          <div className="detail-content">
            <div className="detail-gambar-wrap">
              <img src={`https://desa-babadan-api.herokuapp.com/${inputs.image}`} alt="lampiran berita" className="detail-gambar" />
            </div>

            <div className="detail-text">
              <p className="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{inputs.p1}</p>
              <p className="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{inputs.p2}</p>
              <p className="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{inputs.p3}</p>
              <p className="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{inputs.p4}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
