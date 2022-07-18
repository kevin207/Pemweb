import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import swal from "sweetalert";
import "../berita.css";

const Tambah = () => {
  const [inputs, setInputs] = useState({
    judul: "",
    p1: "",
    p2: "",
    p3: "",
    p4: "",
    waktu: "",
    tanggal: "",
  });
  const [picture, setPicture] = useState([]);

  const [isdisable, setIsdisable] = useState(false);
  const navigate = useNavigate();

  const handleAdd = async (event) => {
    event.preventDefault();
    setIsdisable(true);

    const formData = new FormData();

    formData.append("image", picture.image);
    formData.append("judul", inputs.judul);
    formData.append("p1", inputs.p1);
    formData.append("p2", inputs.p2);
    formData.append("p3", inputs.p3);
    formData.append("p4", inputs.p4);
    formData.append("waktu", inputs.waktu);
    formData.append("tanggal", inputs.tanggal);

    await axios.post("https://desa-babadan-api.herokuapp.com/api/tambah-berita", formData).then(function (response) {
      if (response.data.status === 200) {
        swal({
          title: "Succes!",
          text: response.data.message,
          icon: "success",
          button: "Okay!",
        });
        setIsdisable(false);
        navigate("/admin");
      }
    });
  };

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleImage = (event) => {
    const value = event.target.files[0];
    setPicture({ image: value });
  };

  return (
    <div className="tambah">
      <Link to="/admin" className="top-link">
        Kembali
      </Link>

      <div className="tambah-title">Tambah Berita</div>
      <div className="tambah-wrap">
        <form onSubmit={handleAdd} className="input-form" encType="multipart/form-data">
          <div className="input-wrap">
            <div>Lampiran Gambar</div>
            <input className="input-field" onChange={handleImage} type="file" name="image" required />
          </div>
          <div className="input-wrap">
            <div>Judul</div>
            <input className="input-field" onChange={handleInput} value={inputs.judul} type="text" name="judul" required />
          </div>

          <div className="input-wrap">
            <div className="textarea-wrap">
              <div>Paragraph 1</div>
              <textarea className="textarea" onChange={handleInput} value={inputs.p1} type="text" name="p1" required />

              <div>Paragraph 2 (opsional)</div>
              <textarea className="textarea" onChange={handleInput} value={inputs.p2} type="text" name="p2" />

              <div>Paragraph 3 (opsional)</div>
              <textarea className="textarea" onChange={handleInput} value={inputs.p3} type="text" name="p3" />

              <div>Paragraph 4 (opsional)</div>
              <textarea className="textarea" onChange={handleInput} value={inputs.p4} type="text" name="p4" />
            </div>
          </div>

          <div className="input-wrap">
            <div>Waktu</div>
            <input className="input-field" onChange={handleInput} value={inputs.waktu} type="time" name="waktu" required />
          </div>

          <div className="input-wrap">
            <div>Tanggal</div>
            <input className="input-field" onChange={handleInput} value={inputs.tanggal} type="date" name="tanggal" required />
          </div>

          <button disabled={isdisable} type="submit" className="btn-add">
            Tambah
          </button>
        </form>
      </div>
    </div>
  );
};

export default Tambah;
