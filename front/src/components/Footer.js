import React from 'react';

import '../css/Footer.css';

const Footer = () => {
  return (
    <footer>
        <div className='footer-container'>
            <div className='footer-text'>
                <h3>© 2024 Golden G | Todos los derechos reservados.</h3>
            </div>
            <div className='footer-links'>
                <ul>
                    <li>
                        <a href='#'>Términos y condiciones</a>
                    </li>
                    <li>
                        <a href='#'>Política de privacidad</a>
                    </li>
                    <li>
                        <a href='#'>Política de cookies</a>
                    </li>
                </ul>
            </div>
            <div className='footer-redes'>
                <ul>
                    <li>
                        <a href='#'><i class="fa-brands fa-instagram"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
