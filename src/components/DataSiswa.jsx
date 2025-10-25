import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function DataSiswa() {
    const [loading, setLoading] = useState(false);
    const [siswa, setSiswa] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        setLoading(true);
        axios
            .get("http://localhost:3000/api/siswa/")
            .then((resp) => {
                setSiswa(resp.data);
                setLoading(false);
            })
            .catch((err) => {
                alert(err);
                setLoading(false);
            });
    };

   const handleDelete = async (id) => {
        if (!window.confirm("Anda yakin akan menghapus data ini?")) return;

        try {
            setLoading(true);
            await axios.delete(`http://localhost:3000/api/siswa/${id}`);
            alert("Data berhasil dihapus");
            fetchData();
        } catch (err) {
            console.error(err.response || err);
            alert("Gagal menghapus data: " + (err.response?.data?.message || err.message));
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <div className="card shadow-sm border-0">
                <div className="card-header bg-primary text-white text-center">
                    <h3 className="mb-0"> Data Siswa</h3>
                </div>

                <div className="card-body">
                    <Link 
                        to="/tambah-siswa" 
                        className="btn btn-success w-100 mb-3 fw-semibold"
                    >
                        Tambah Siswa
                    </Link>

                    <div className="table-responsive">
                        <table className="table table-hover align-middle">
                            <thead className="table-dark text-left">
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Kode Siswa</th>
                                    <th scope="col">Nama Siswa</th>
                                    <th scope="col">Alamat</th>
                                    <th scope="col">Tanggal Lahir</th>
                                    <th scope="col">Jurusan</th>
                                    <th scope="col" className="text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {siswa.length > 0 ? (
                                    siswa.map((item, index) => (
                                        <tr key={item.id}>
                                            <td>{index + 1}</td>
                                            <td>{item.id}</td>
                                            <td>{item.nama_siswa}</td>
                                            <td>{item.alamat_siswa}</td>
                                            <td>{item.tanggal_siswa}</td>
                                            <td>{item.jurusan_siswa}</td>
                                            <td className="text-center">
                                                <Link
                                                    to={`/data-siswa/${item.id}`}
                                                    className="btn btn-sm btn-info me-2 text-black"
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(item.id)}
                                                    className="btn btn-sm btn-danger text-black"
                                                >
                                                    Hapus
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7" className="text-center text-muted">
                                            Tidak ada data siswa.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
