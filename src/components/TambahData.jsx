import { useState } from "react";
import axios from "axios";

export default function TambahSiswa() {
    const [loading, setLoading] = useState(false);
    const [namaSiswa, setNamaSiswa] = useState("");
    const [alamatSiswa, setAlamatSiswa] = useState("");
    const [tanggalSiswa, setTanggalSiswa] = useState("");
    const [jurusanSiswa, setJurusanSiswa] = useState("");

    const handleSimpan = (e) => {
        e.preventDefault();
        setLoading(true);

        axios
            .post("http://localhost:3000/api/siswa/", {
                nama_siswa: namaSiswa,
                alamat_siswa: alamatSiswa,
                tanggal_siswa: tanggalSiswa,
                jurusan_siswa: jurusanSiswa,
            })
            .then((resp) => {
                alert("Data berhasil disimpan!");
                setNamaSiswa("");
                setAlamatSiswa("");
                setTanggalSiswa("");
                setJurusanSiswa("");
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
                <h3 align="center">Tambah Data Siswa</h3>
            </div>
            <div className="card-body">
                <form onSubmit={handleSimpan}>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nama Siswa"
                            value={namaSiswa}
                            onChange={(e) => setNamaSiswa(e.target.value)}
                            required
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
                            required
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
                            required
                        />
                        <label>Tanggal Lahir</label>
                    </div>
                    <div className="form-floating mb-3">
                        <select
                            className="form-select"
                            value={jurusanSiswa}
                            onChange={(e) => setJurusanSiswa(e.target.value)}
                            required
                        >
                            <option value="" disabled>Pilih Jurusan</option>
                            <option value="IPA">IPA</option>
                            <option value="IPS">IPS</option>
                            <option value="Bahasa">Bahasa</option>
                            <option value="Teknik">Teknik</option>

                        </select>
                        <label>Jurusan</label>
                    </div>

                    <button className="btn btn-primary col-12" disabled={loading}>
                        {loading ? "Menyimpan..." : "Simpan"}
                    </button>
                </form>
            </div>
        </div>
    );
}
