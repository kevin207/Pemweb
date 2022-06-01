import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import swal from "sweetalert";
import "./student.css";

const AddStudent = () => {
  const [inputs, setInputs] = useState({
    nama: "",
    nim: "",
    prodi: "",
    email: "",
  });
  const [picture, setPicture] = useState([]);

  const [isdisable, setIsdisable] = useState(false);
  const navigate = useNavigate();

  const handleAdd = async (event) => {
    event.preventDefault();
    setIsdisable(true);

    const formData = new FormData();

    formData.append("image", picture.image);
    formData.append("nama", inputs.nama);
    formData.append("nim", inputs.nim);
    formData.append("prodi", inputs.prodi);
    formData.append("email", inputs.email);

    await axios.post("http://localhost:8000/api/add-student", formData).then(function (response) {
      if (response.data.status === 200) {
        swal({
          title: "Succes!",
          text: response.data.message,
          icon: "success",
          button: "Okay!",
        });
        setIsdisable(false);
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
        <div className="header-title">ADD STUDENT</div>
      </div>

      <form onSubmit={handleAdd} className="input-form" encType="multipart/form-data">
        <div className="input-wrap">
          <div>Profile Picture</div>
          <input className="input-field" onChange={handleImage} type="file" name="image" required />
        </div>
        <div className="input-wrap">
          <div>Nama</div>
          <input className="input-field" onChange={handleInput} value={inputs.nama} type="text" name="nama" required />
        </div>

        <div className="input-wrap">
          <div>NIM</div>
          <input className="input-field" onChange={handleInput} value={inputs.nim} type="text" name="nim" required />
        </div>

        <div className="input-wrap">
          <div>Program Studi</div>
          <input className="input-field" onChange={handleInput} value={inputs.prodi} type="text" name="prodi" required />
        </div>

        <div className="input-wrap">
          <div>Email</div>
          <input className="input-field" onChange={handleInput} value={inputs.email} type="text" name="email" required />
        </div>

        <button disabled={isdisable} type="submit" className="btn-add">
          Add Student
        </button>
      </form>
    </>
  );
};

export default AddStudent;
