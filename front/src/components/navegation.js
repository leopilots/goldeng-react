import React, { useEffect } from 'react';
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
                <p>¡Disfruta de envío gratis en tu primera compra! <a href="#">Compra ahora</a>.</p>
            </div>
            <div className='nameBrand'>
                <a href='#'><h1>Golden G</h1></a>
            </div>
            <nav>
                <div className='menu-btn'>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className='nav-main'>
                    <ul className='nav-menu'>
                        <li><a href='#'>Hombre</a></li>
                        <li><a href='#'>Mujer</a></li>
                        <li><a href='#'>Más Vendidos</a></li>
                    </ul>
                    <ul className='nav-menu'>
                        <li><a href='#'>Mi Cuenta</a></li>
                        <li><a href='#'>Mi Cesta</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
