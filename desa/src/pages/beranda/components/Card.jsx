import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
import { MdAccessTime, MdDateRange } from "react-icons/md";

const Card = (data) => {
  return (
    <div className="card">
      <div className="card-wrap">
        <div className="card-img-wrap">
          <img src={`https://desa-babadan-api.herokuapp.com/${data.image}`} alt="berita lampiran" className="card-img" />
        </div>
        <div className="card-content">
          <div className="card-title">
            <Link to={`/berita/detail/${data.id}`} className="card-title">
              {data.judul}
            </Link>
          </div>
          <div className="card-bottom">
            <div className="card-waktu">
              <MdAccessTime />
              &nbsp; {data.waktu}
            </div>
            <div className="card-tanggal">
              <MdDateRange />
              &nbsp; {data.tanggal}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
