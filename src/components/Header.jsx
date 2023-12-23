import React from "react";
import { Link } from "react-router-dom";
import '../styles/styles.css';

export const Header = () => {
    return (
        <header className="header">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/inventory">Inventario</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/providers">Proveedores</Link></li>
            </ul>
        </div>
        </div>
        </nav>
        </header>
    );
}
