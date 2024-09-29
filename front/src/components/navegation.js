import React from 'react'

import '../css/navegation.css';

document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-main").classList.toggle("show");
});

export default function Navegation() {
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
                <i class="fa-solid fa-bars"></i>
            </div>
            <div className='nav-main'>
                <ul className='nav-menu'>
                    <li>
                        <a href='#'>Hombre</a>
                    </li>
                    <li>
                        <a href='#'>Mujer</a>
                    </li>
                    <li>
                        <a href='#'>Más Vendidos</a>
                    </li>
                </ul>
                <ul className='nav-menu'>
                    <li>
                        <a href='#'>Mi carrito</a>
                    </li>
                    <li>
                        <a href='#'>Mi Cuenta</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}