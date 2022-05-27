import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='flex justify-center items-center mt-10'>
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className='text-center text-green-500 text-2xl'>My Portfolio</h2>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            {<thead>
                                <div>
                                    <img className='h-32 w-28 rounded' src="https://i.ibb.co/M9NFR3K/20211227-124649.jpg" alt="" />
                                    <h2 className='text-2xl font-semibold'>Mohammad Nurul Azam</h2>
                                    <h3 className='text-blue-600 text-xl'>mna.official92@gmail.com</h3>
                                </div>
                                <tr>
                                   <th></th>
                                    <th ></th>
                                </tr>
                            </thead>}
                            <tbody className='text-xl'>
                                <tr>
                                    <th>Education</th>
                                    <td>
                                        Bachelor of Business Studies (BBS). <br />
                                        1st year (2020-21): Continue. <br />
                                        National University. 
                                    </td>
                                </tr>
                                <tr>
                                    <th>Web development technology skill</th>
                                    <td>
                                        HTML5, CSS3, Bootstrap, Tailwind, <br />
                                        JavaScript, ES6, React, DaisyUI, <br />
                                        Firebase, MongoDB, Node.js
                                        </td>
                                </tr>
                                
                                <tr>
                                    <th>My project</th>
                                    <td>
                                        <a href="https://mna-cars-warehouse.web.app/" className='mx-2 text-'>Project 1: <span className='text-blue-500'>MNA Cars Warehouse</span> </a> <br />
                                        <a href="https://mna-munna-photographer.web.app/" className='mx-2 text-'>Project 2: <span className='text-blue-500'>MNA Munna Photographer</span> </a> <br />
                                        <a href="https://mna-bike-bazar.netlify.app/" className='mx-2 text-'>Project 3: <span className='text-blue-500'>MNA Bike Bazar</span> </a> 
                                        
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;