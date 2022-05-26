import React from 'react';

const OurStock = () => {
    return (
        <div className='justify-center items-center mt-10 mb-12'>
            <h2 className='text-3xl text-center text-orange-500 font-bold mb-4'>Our Available Product</h2>
            <div className="card border mx-10 bg-base-100 shadow-xl justify-center items-center">
                <div className="card-body">
                    <div >
                        <div><p>Processor</p><progress class="progress progress-warning w-96" value="96" max="100"></progress></div> 
                        <div><p>Graphics Card</p><progress class="progress progress-warning w-96" value="60" max="100"></progress></div> 
                        <div><p>Solid State Drive (SSD)</p><progress class="progress progress-warning w-96" value="70" max="100"></progress></div> 
                        <div><p>Multimedia Keyboard</p><progress class="progress progress-warning w-96" value="40" max="100"></progress></div> 
                        <div><p>Optical Mouse</p><progress class="progress progress-warning w-96" value="99" max="100"></progress></div>
                        <div><p>Webcam</p><progress class="progress progress-warning w-96" value="85" max="100"></progress></div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurStock;