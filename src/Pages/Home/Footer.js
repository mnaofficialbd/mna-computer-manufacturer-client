import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer 
        style={{
            background: `url(https://i.ibb.co/MVHdJ1d/bg-2.png)`,
            backgroundSize: 'cover'
        }}
        className='py-5 text-yellow-500 opacity-90'
        >
            <div class="md:place-self-center text-center md:justify-self-end">
                <div class="grid grid-flow-col gap-4">
                <p>MNA <span className='text-sky-300'>COMPUTER</span> MANUFACTURER</p>
                <p> All Rights Reserved . Copyright © {year}  </p>
                <p> Designed by @mnaofficialbd </p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;