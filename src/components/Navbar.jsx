import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function Navbar() {
     return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top">
            <div className="container">
                <Link className="navbar-brand fw-bold text-uppercase" to="/">
                    Sekolah
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-white fw-semibold" to="/">
                                 Beranda
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white fw-semibold" to="/data-siswa">
                                 Data Siswa
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;