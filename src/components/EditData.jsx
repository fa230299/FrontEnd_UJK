import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function EditSiswa() {
    const [loading, setLoading] = useState(false);
    const [namaSiswa, setNamaSiswa] = useState("");
    const [alamatSiswa, setAlamatSiswa] = useState("");
    const [tanggalSiswa, setTanggalSiswa] = useState("");
    const [jurusanSiswa, setJurusanSiswa] = useState("");

    const { id } = useParams();

    useEffect(() => {
        fetchSiswaById();
    }, []);

    const fetchSiswaById = () => {
        setLoading(true);
        axios
            .get(`http://localhost:3000/api/siswa/${id}`)
            .then((resp) => {
                const data = resp.data;
                setNamaSiswa(data.nama_siswa);
                setAlamatSiswa(data.alamat_siswa);
                setTanggalSiswa(data.tanggal_siswa);
                setJurusanSiswa(data.jurusan_siswa);
                setLoading(false);
            })
            .catch((err) => {
                alert(err);
                setLoading(false);
            });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        setLoading(true);

        axios
            .put(`http://localhost:3000/api/siswa/${id}`, {
                nama_siswa: namaSiswa,
                alamat_siswa: alamatSiswa,
                tanggal_siswa: tanggalSiswa,
                jurusan_siswa: jurusanSiswa,
            })
            .then((resp) => {
                alert("Data berhasil diupdate!");
                setLoading(false);
                console.log(resp.data);
            })
            .catch((err) => {
                alert(err);
                setLoading(false);
            });
    };

    return (
        <div>
            <div className="card-header">
                <h3 align="center">Edit Data Siswa</h3>
            </div>
            <div className="card-body">
                <form onSubmit={handleUpdate}>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nama Siswa"
                            value={namaSiswa}
                            onChange={(e) => setNamaSiswa(e.target.value)}
                        />
                        <label>Nama Siswa</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Alamat"
                            value={alamatSiswa}
                            onChange={(e) => setAlamatSiswa(e.target.value)}
                        />
                        <label>Alamat</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="date"
                            className="form-control"
                            placeholder="Tanggal Lahir"
                            value={tanggalSiswa}
                            onChange={(e) => setTanggalSiswa(e.target.value)}
                        />
                        <label>Tanggal Lahir</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Jurusan"
                            value={jurusanSiswa}
                            onChange={(e) => setJurusanSiswa(e.target.value)}
                        />
                        <label>Jurusan</label>
                    </div>
                    <button className="btn btn-primary col-12" disabled={loading}>
                        {loading ? "Mengupdate..." : "UPDATE"}
                    </button>
                </form>
            </div>
        </div>
    );
}
