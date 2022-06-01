import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import swal from "sweetalert";
import "./student.css";

const EditStudent = () => {
  const [inputs, setInputs] = useState({
    nama: "",
    nim: "",
    prodi: "",
    email: "",
  });
  const [picture, setPicture] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    await axios.get(`http://localhost:8000/api/edit-student/${id}`).then(function (response) {
      if (response.data.status === 200) {
        console.log(response.data.student);
        setInputs(response.data.student);
      }
    });
  }

  const handleUpdate = (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("image", picture.image);
    formData.append("nama", inputs.nama);
    formData.append("nim", inputs.nim);
    formData.append("prodi", inputs.prodi);
    formData.append("email", inputs.email);

    axios.post(`http://localhost:8000/api/update-student/${id}`, formData).then(function (response) {
      if (response.data.status === 200) {
        swal({
          title: "Succes!",
          text: response.data.message,
          icon: "success",
          button: "Okay!",
        });
        navigate("/");
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
    <>
      <div className="header">
        <div className="header-wrap">
          <Link to="/" className="top-link">
            Back
          </Link>
        </div>
        <div className="header-title">UPDATE STUDENT</div>
      </div>

      <form onSubmit={handleUpdate} className="input-form" encType="multipart/form-data">
        <div className="input-wrap">
          <div>Profile Picture</div>
          <input className="input-field" onChange={handleImage} type="file" name="image" />
        </div>

        <div className="input-wrap">
          <div>Nama</div>
          <input className="input-field" onChange={handleInput} type="text" name="nama" value={inputs.nama} required />
        </div>

        <div className="input-wrap">
          <div>NIM</div>
          <input className="input-field" onChange={handleInput} type="text" name="nim" value={inputs.nim} required />
        </div>

        <div className="input-wrap">
          <div>Program Studi</div>
          <input className="input-field" onChange={handleInput} type="text" name="prodi" value={inputs.prodi} required />
        </div>

        <div className="input-wrap">
          <div>Email</div>
          <input className="input-field" onChange={handleInput} type="text" name="email" value={inputs.email} required />
        </div>

        <button type="submit" className="btn-add">
          Update Student
        </button>
      </form>
    </>
  );
};

export default EditStudent;
