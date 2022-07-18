import React from "react";
import "./pelayan.css";

import IMG from "../../../../assets/organisasi.jpg";

const Pelayan = () => {
  return (
    <div className="pelayan" id="pelayan">
      <div className="organisasi-img">
        <img src={IMG} alt="organisasi desa babadan" className="organisasi-img" />
      </div>
    </div>
  );
};

export default Pelayan;
