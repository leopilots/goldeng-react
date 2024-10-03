import React from 'react';

import '../css/TopProduct.css';

const TopProduct = () => {
  return (
    <section>
        <div className='topp-container'>
            <div className='topp-text'>
                <h2>Madrid, España. 2024</h2>
            </div>
            <div className='topp-product'>
                <div className='image'>
                    <div className='img-1'>
                        <img src='https://static.zara.net/assets/public/556e/1850/ce63434d908b/9e31320ce79f/03046520500-a1/03046520500-a1.jpg?ts=1727866173129&w=563&f=auto'></img>
                    </div>
                </div>
                <div className='product'>
                    <div className='name'>
                        <h3>CAZADORA BOMBER ACOLCHADA</h3>
                    </div>
                    <div className='description'>
                        <p>Cazadora regular fit confeccionada en tejido técnico acolchado en su interior. Cuello en rib elástico y manga larga. Bolsillos de solapa en cadera. Detalle de bolsillo interior. Acabados en rib. Cierre frontal con cremallera.</p>
                    </div>
                    <div className='price'>
                        <a>Comprar</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default TopProduct;
