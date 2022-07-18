import React from "react";
import "./footer.css";

// Icon
import { BsYoutube } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-top">
          <div className="top-left">
            <h5 className="footer-sub">Alamat</h5>
            <h6>Jl. Raya Sumberkunci No. 01</h6>
          </div>
          <div className="top-right">
            <h5 className="footer-sub">Email</h5>
            <h6>desababadanngajum@gmail.com</h6>
          </div>
        </div>

        <div className="footer-mid">
          <RiInstagramFill className="footer-icon instagram" onClick={() => window.open("https://www.instagram.com/desa.babadan/", "_blank")} />
          <FaTiktok className="footer-icon tiktok" onClick={() => window.open("https://www.tiktok.com/@desababadan.mlg", "_blank")} />
          <BsYoutube className="footer-icon youtube" onClick={() => window.open("https://www.youtube.com/channel/UCsIHiTwDWn1avzHd6MnJq5A/featured", "_blank")} />
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 160 1440 140">
        <path
          fill="#123c4a "
          fill-opacity="1"
          d="M0,288L60,277.3C120,267,240,245,360,245.3C480,245,600,267,720,277.3C840,288,960,288,1080,266.7C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>

      <div className="footer-bottom">
        © 2022 <strong>DESA BABADAN</strong>. All Rights Reserved
      </div>
    </>
  );
};

export default Footer;
