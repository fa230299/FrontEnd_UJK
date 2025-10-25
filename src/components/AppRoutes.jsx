import { Routes, Route } from "react-router-dom";
import DataSiswa from "./DataSiswa";
import TambahData from "./TambahData";
import EditData from "./EditData";
function AppRoutes() {

    return (
        <div className="container mt-4">
            <div className="card">
                <Routes>
                    <Route path="/" element={<DataSiswa />} />
                    <Route path="/data-siswa" element={<DataSiswa />} />
                    <Route path="/data-siswa/:id" element={<EditData />} />
                    <Route path="/tambah-siswa" element={<TambahData />} />
                </Routes>
            </div>
        </div>
    )
}
export default AppRoutes;