import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer 
        className='py-5 bg-black opacity-100'
        >
            <div class="md:place-self-center text-center text-sky-200 md:justify-self-end">
                <div class="grid grid-flow-col gap-4">
                <p>MNA <span className='text-yellow-300'>COMPUTER</span> MANUFACTURER</p>
                <p> All Rights Reserved . Copyright © {year}  </p>
                <p> Designed by <span className='text-yellow-300'>@mnaofficialbd</span> </p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;