import React from "react";
import '../styles/styles.css';
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="header-footer">
             <nav>
                <ul>
                    <li >
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
            <p className="header-footer-text">© 2023 - Davinia de la Rosa - Actividad 1 - Inventario.</p>
        </footer>
    );
}