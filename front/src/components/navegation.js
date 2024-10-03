import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../css/Navegation.css';

export default function Navegation() {
    useEffect(() => {
        const menuBtn = document.querySelector(".menu-btn");
        const navMain = document.querySelector(".nav-main");

        if (menuBtn && navMain) {
            const toggleMenu = () => {
                navMain.classList.toggle("show");
            };

            menuBtn.addEventListener("click", toggleMenu);

            return () => {
                menuBtn.removeEventListener("click", toggleMenu);
            };
        }
    }, []);

    return (
        <div>
            <div className='promotion'>
                <p>¡Disfruta de envío gratis en tu primera compra! <Link to="/promotion">Compra ahora</Link>.</p>
            </div>
            <div className='nameBrand'>
                <Link to="/"><h1>Golden G</h1></Link>
            </div>
            <nav>
                <div className='menu-btn'>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className='nav-main'>
                    <ul className='nav-menu'>
                        <li><Link to="/men">Hombre</Link></li>
                        <li><Link to="/woman">Mujer</Link></li>
                        <li><Link to="/best-selling">Más Vendido</Link></li>
                    </ul>
                    <ul className='nav-menu'>
                        <li><Link to="/my-account">Mi Cuenta</Link></li>
                        <li><Link to="/my-bag">Mi Cesta</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
