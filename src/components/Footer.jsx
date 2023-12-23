import React from "react";
import '../styles/styles.css';

export const Footer = () => {
    return (
        <footer className="footer">
        <div class="footer-icons">
          <a href="daviniadelarosa@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="email.png" alt="Email"/>
          </a>
          <a href="https://www.linkedin.com/in/daviniadelarosahernandez/" target="_blank" rel="noopener noreferrer">
            <img src="linkedin.png" alt="LinkedIn"/>
          </a>
          <p className="footer-text">© 2023 - Davinia de la Rosa -  Inventory App.</p>
        </div>
      </footer>

    );
}