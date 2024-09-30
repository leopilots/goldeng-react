import React from 'react';

import '../css/Header.css';

const Header = () => {
  return (
    <header className='header-container'>
        <div className='header-left'>
            <div className='left-content'>
                <img src='https://raw.githubusercontent.com/leopilots/website-golden-g/refs/heads/main/img/brand/favicon.ico'></img>
                <p>Descubre nuestra nueva colección de productos, diseñados para ofrecerte lo mejor del mercado en todo tipo de ropa. ¡Calidad, estilo y confort en cada prenda te esperan!</p>
                <a href='#'>Nueva colección</a>
            </div>
        </div>
        <div className='header-right'>
            <img src='https://static.zara.net/assets/public/b304/2a5c/e79144809b0d/6e734cfac6ff/03046286743-015-p/03046286743-015-p.jpg?ts=1726158029571&w=750&f=auto'></img>
            <img src='https://static.zara.net/assets/public/03a9/7168/16d64936889c/326ad8ace199/03046286743-015-a2/03046286743-015-a2.jpg?ts=1726158027964&w=750&f=auto'></img>
        </div>
    </header>
  );
};

export default Header;
