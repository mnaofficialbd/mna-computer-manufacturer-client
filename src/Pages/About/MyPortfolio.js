import React from 'react';
import { Link } from 'react-router-dom';

const MyPortfolio = () => {
    return (
        <div className='flex justify-center items-center mt-10'>
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className='text-center text-green-500 text-2xl'>My Portfolio</h2>
                    <div class="overflow-x-auto">
                        <table class="table w-full">
                            {<thead>
                                <div>
                                    <img className='h-32 w-24 rounded' src="https://i.ibb.co/M9NFR3K/20211227-124649.jpg" alt="" />
                                    <h2 className='text-xl font-semibold'>Mohammad Nurul Azam</h2>
                                    <h3 className='text-blue-600'>mna.official92@gmail.com</h3>
                                </div>
                                <tr>
                                   <th></th>
                                    <th ></th>
                                </tr>
                            </thead>}
                            <tbody>
                                <tr>
                                    <th>Education</th>
                                    <td>
                                        Bachelor of Business Studies (BBS) <br />
                                        1st year: Running (2020-21)
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
                                        <Link to='/' className='mx-2 text-'>Project 1</Link> <br />
                                        <Link to='/' className='mx-2 text-'>Project 2</Link> <br />
                                        <Link to='/' className='mx-2 text-'>Project 3</Link> 
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