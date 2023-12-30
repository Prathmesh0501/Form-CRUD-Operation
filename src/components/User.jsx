// Form.js

import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [srno,setSrno] = useState('');
    const [name,setName] = useState('');
    const [mobileno,setMobileno] = useState('');
    const [add,setAdd] = useState('');
    const [location,setLocation] = useState('');


    const handleSubmit = () => {
        axios.post('http://localhost:5000/adduser',{srno,name,mobileno,add,location}).then(()=>{
            setSrno('');
            setName('');
            setMobileno('');
            setAdd('');
            setLocation('');
        })
    };

    return (
        <div className="container mx-auto mt-8">
            <form onSubmit={handleSubmit} className="bg-white p-8 border border-gray-300">
                <div className="mb-4">
                    <label htmlFor="srNo" className="block text-gray-700 text-sm font-bold mb-2">
                        Sr. No.
                    </label>
                    <input
                        type="number"
                        id="srNo"
                        name="srNo"
                        value={srno}
                        onChange={(e) => setSrno(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Sr. No."
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Name"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="mobileNo" className="block text-gray-700 text-sm font-bold mb-2">
                        Mobile No.
                    </label>
                    <input
                        type="text"
                        id="mobileNo"
                        name="mobileNo"
                        value={mobileno}
                        onChange={(e) => setMobileno(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Mobile No."
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
                        Address
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={add}
                        onChange={(e) => setAdd(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Address"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">
                        Location
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Location"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
