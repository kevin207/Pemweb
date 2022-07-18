import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import swal from "sweetalert";
import "../berita.css";

const Edit = () => {
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
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    await axios.get(`https://desa-babadan-api.herokuapp.com/api/edit-berita/${id}`).then(function (response) {
      if (response.data.status === 200) {
        setInputs(response.data.berita);
      }
    });
  }

  const handleUpdate = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("image", picture.image);
    formData.append("judul", inputs.judul);
    formData.append("p1", inputs.p1);
    formData.append("p2", inputs.p2);
    formData.append("p3", inputs.p3);
    formData.append("p4", inputs.p4);
    formData.append("waktu", inputs.waktu);
    formData.append("tanggal", inputs.tanggal);

    await axios.post(`https://desa-babadan-api.herokuapp.com/api/update-berita/${id}`, formData).then(function (response) {
      if (response.data.status === 200) {
        swal({
          title: "Succes!",
          text: response.data.message,
          icon: "success",
          button: "Okay!",
        });
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

      <div className="tambah-title">Edit Berita</div>
      <div className="tambah-wrap">
        <form onSubmit={handleUpdate} className="input-form" encType="multipart/form-data">
          <div className="input-wrap">
            <div>Lampiran Gambar</div>
            <input className="input-field" onChange={handleImage} type="file" name="image" />
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

          <button type="submit" className="btn-add">
            Edit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
