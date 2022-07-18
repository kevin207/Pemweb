import React, { useEffect, useState } from "react";
import "./berita.css";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import axios from "axios";

const Berita = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    await axios.get("https://desa-babadan-api.herokuapp.com/api/berita").then(function (response) {
      if (response.data.status === 200) {
        setNews(response.data.berita);
      }
    });
  }

  const handleDelete = (id) => {
    swal({
      title: "Kamu yakin?",
      text: "Data yang dihapus tidak bisa dikembalikan!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`https://desa-babadan-api.herokuapp.com/api/delete-berita/${id}`).then(function (response) {
          if (response.data.status === 200) {
            swal(response.data.message, {
              icon: "success",
            });

            fetchData();
          }
        });
      } else {
        swal("Data Tidak Di Delete");
      }
    });
  };

  return (
    <div className="admin">
      <Link to="/tambah" className="top-link">
        Tambah Berita
      </Link>
      <div className="admin-title">LIST BERITA</div>
      <div className="admin-wrap">
        <table className="table-berita">
          <thead>
            <tr>
              <th>Lampiran</th>
              <th>ID</th>
              <th>Judul</th>
              <th>Waktu</th>
              <th>Tanggal</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {news.map((item) => (
              <tr key={item.id}>
                <td>
                  <img className="berita-img" src={`https://desa-babadan-api.herokuapp.com/${item.image}`} alt="lampiran berita" />
                </td>
                <td>{item.id}</td>
                <td>{item.judul}</td>
                <td>{item.waktu}</td>
                <td>{item.tanggal}</td>
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
    </div>
  );
};

export default Berita;
