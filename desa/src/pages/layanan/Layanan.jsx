import React, { useEffect } from "react";
import "./layanan.css";
import { Fade } from "react-awesome-reveal";

const Layanan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fade>
      <div className="layanan">
        <div className="layanan-wrap">
          <div className="layanan-1">
            <Fade direction="down" triggerOnce>
              <div className="layanan-1-title">PELAYANAN ADMINISTRASI KEPENDUDUKAN DAN SURAT KETERANGAN DESA BABADAN</div>
            </Fade>

            <Fade direction="up" triggerOnce>
              <div className="layanan-1-content">
                <div className="layanan-1-left">
                  <div className="layanan-1-left-title">STEP ALUR PENGAJUAN :</div>
                  <ol className="alur">
                    <li>Pemohon meminta surat pengantar RT dengan menyebutkan maksud dan tujuan</li>
                    <li>Dilanjutkan surat pengantar dari RW</li>
                    <li>Kemudian menuju Kepala Dusun </li>
                    <li>Selanjutnya Pemohon bisa mengurus keperluannya di Kantor Balai Desa</li>
                  </ol>
                </div>
                <div className="layanan-1-right">
                  <div className="layanan-1-right-title">BAGI YANG MENGURUS SURAT KETERANGAN UMUM :</div>
                  <div className="layanan-1-syarat">
                    <ul className="layanan-1-right-poin">
                      <li>Keterangan Domisili </li>
                      <li>Keterangan Beda Nama </li>
                      <li>Keterangan Usaha</li>
                      <li>Surat Rekomendasi </li>
                    </ul>

                    <ul className="layanan-1-right-poin">
                      <li>Keterangan Tanah </li>
                      <li>Surat Pengantar Desa </li>
                      <li>Keterangan Tidak Mampu </li>
                      <li>Dan lain-lainnya.</li>
                    </ul>
                  </div>
                  <div className="layanan-1-syarat-text">HARUS MEMBAWA SURAT PENGANTAR RT/RW/KEPALA DUSUN DAN FOTOCOPY KTP ATAU KK</div>
                </div>
              </div>
            </Fade>

            <Fade direction="up" triggerOnce>
              <div className="layanan-1-narahubung"></div>
            </Fade>
          </div>

          <div className="layanan-2">
            <Fade direction="down" triggerOnce>
              <div className="layanan-2-title">PERSYARATAN ADMINISTRASI KEPENDUDUKAN</div>
            </Fade>

            <Fade triggerOnce direction="up">
              <div className="layanan-2-wrap">
                <div className="layanan-2-item">
                  <div className="layanan-2-item-title">Kartu Keluarga</div>
                  <ul className="layanan-2-poin">
                    <li>Form Biodata Keluarga </li>
                    <li>KK Asli</li>
                    <li>Lampiran Pendukung Perubahan </li>
                    <li>Surat Kehilangan Kepolisian (Jika KK Asli Hilang)</li>
                  </ul>
                </div>

                <div className="layanan-2-item">
                  <div className="layanan-2-item-title">Akta Kelahiran</div>
                  <ul className="layanan-2-poin">
                    <li>Form F 2.01 </li>
                    <li>Fotocopy KK & KTP Orang Tua </li>
                    <li>Legalisir Buku Nikah </li>
                    <li>Fotocopy KTP saksi 2 orang </li>
                    <li>Surat kelahiran dari Bidan/RS </li>
                    <li>Pernyataan Data Benar</li>
                  </ul>
                </div>

                <div className="layanan-2-item">
                  <div className="layanan-2-item-title">Akta Kematian </div>
                  <ul className="layanan-2-poin">
                    <li>Form F 1.02 </li>
                    <li>Surat Kematian dari Rumah Sakit </li>
                    <li>SPTJM Kematian </li>
                    <li>Fotocopy KTP Alm </li>
                    <li>Fotocopy KK Alm </li>
                    <li>Fotocopy KTP pelapor</li>
                  </ul>
                </div>

                <div className="layanan-2-item">
                  <div className="layanan-2-item-title">KIA </div>
                  <ul className="layanan-2-poin">
                    <li>Form KIA </li>
                    <li>Fotocopy Akta Kelahiran </li>
                    <li>Fotocopy KTP Orang Tua </li>
                    <li>Fotocopy KK </li>
                    <li>Foto 3x4 2 lembar (untuk anak usia 5 tahun ke atas)</li>
                  </ul>
                </div>

                <div className="layanan-2-item">
                  <div className="layanan-2-item-title">Surat Pindah </div>
                  <ul className="layanan-2-poin">
                    <li>Form F 1.03 </li>
                    <li>Fotocopy KTP </li>
                    <li>Fotocopy KK </li>
                    <li>Kartu Keluarga (Asli)</li>
                  </ul>
                </div>

                <div className="layanan-2-item">
                  <div className="layanan-2-item-title">e-KTP (Baru) </div>
                  <ul className="layanan-2-poin">
                    <li>Form F 1.02 </li>
                    <li>Fotocopy Kartu Keluarga </li>
                  </ul>
                </div>

                <div className="layanan-2-item">
                  <div className="layanan-2-item-title">e-KTP (Hilang) </div>
                  <ul className="layanan-2-poin">
                    <li>Form F 1.02 </li>
                    <li>Surat Kehilangan Kepolisian</li>
                  </ul>
                </div>
              </div>
            </Fade>

            <Fade direction="up" triggerOnce>
              <div className="layanan-2-narahubung">
                <div className="left-narahubung">Khusus untuk Akta Kelahiran dan Akta Kematian, berkas dikirim ke CAPIL melalui Kantor Pos ke alamat: Jl. Trunojoyo No. 4, Ngadiluwih, Kedungpedaringan, Kec. Kepanjen, Kabupaten Malang</div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Layanan;
