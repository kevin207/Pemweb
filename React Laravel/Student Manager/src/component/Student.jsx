import React, { useEffect, useState } from "react";
import "./student.css";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import axios from "axios";

const Student = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    await axios.get("http://localhost:8000/api/students").then(function (response) {
      if (response.data.status === 200) {
        setStudents(response.data.students);
        console.log(response.data.students);
      }
    });
  }

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`http://localhost:8000/api/delete-student/${id}`).then(function (response) {
          if (response.data.status === 200) {
            swal(response.data.message, {
              icon: "success",
            });
            fetchData();
          }
        });
      } else {
        swal("Data Delete Canceled!");
      }
    });
  };

  return (
    <>
      <div className="header">
        <div className="header-wrap">
          <Link to="/add" className="top-link">
            Create
          </Link>
        </div>
        <div className="header-title">STUDENT LIST</div>
      </div>

      <div className="list">
        <table>
          <thead>
            <tr>
              <th>Profile Picture</th>
              <th>ID</th>
              <th>Nama</th>
              <th>NIM</th>
              <th>Prodi</th>
              <th>Email</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {students.map((item) => (
              <tr key={item.id}>
                <td>
                  <img className="img-profile" src={`http://localhost:8000/${item.image}`} alt="mahasiswa" />
                </td>
                <td>{item.id}</td>
                <td>{item.nama}</td>
                <td>{item.nim}</td>
                <td>{item.prodi}</td>
                <td>{item.email}</td>
                <td>
                  <div className="td-wrap">
                    <Link to={`/edit/${item.id}`} className="edit-link">
                      Edit
                    </Link>
                    <button onClick={() => handleDelete(item.id)} className="dlt-btn">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Student;
