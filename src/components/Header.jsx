import React from "react";
import { Link } from "react-router-dom";
import '../styles/styles.css';

export const Header = () => {
    return (
        <header className="header-footer">
            <nav>
                <ul>
                    <li >
                        <Link to="/inventory">Inventario</Link>
                    </li>
                    <li>
                        <Link to="/providers">Proveedores</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
