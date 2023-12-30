// ContactForm.js

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState([]);
    const [tableData, setTableData] = useState([])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add your form submission logic here
        const data = await axios.post('http://localhost:8000/create', formData)
        alert(data.data.message)
        setFormData({
            name: "",
            email: "",
            mobile: ""
        })
        getFetchData()

    };

    const deleteUser = async (id) => {
        const data = await axios.delete('http://localhost:8000/delete/' + id)
        console.log(data)
        alert(data.data.message)
        getFetchData()
    }

    const getFetchData = async () => {
        const data = await axios.get('http://localhost:8000/list')
        console.log(data.data.data)
        setTableData(data.data.data)
    }

    useEffect(() => {
        getFetchData()
    }, [])

    return (
        <>
            <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Add User</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-600">
                            Mobile
                        </label>
                        <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            pattern="[0-9]{10}"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </form>
            </div>

            <div className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-semibold mb-4">User Table</h2>
                <table className="w-full border">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-2">Name</th>
                            <th className="border p-2">Email</th>
                            <th className="border p-2">Mobile</th>
                            <th className="border p-2">action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData[0] ? (
                            
                                tableData.map((el) => (
                                    <tr>
                                        <td className="border p-2">{el.name}</td>
                                        <td className="border p-2">{el.email}</td>
                                        <td className="border p-2">{el.mobile}</td>
                                        <td className='border p-2 space-x-2'>
                                            <button className='bg-green-500 py-1 px-3 rounded-lg'>U</button>
                                            <button className='bg-red-600 py-1 px-3 rounded-lg' onClick={() => deleteUser(el._id)}>D</button>
                                        </td>
                                    </tr>
                                ))
                            
                        ) : (
                            <p className='text-center align-middle'>No Data</p>
                        )
                        }
                    </tbody>
                </table>
            </div>

        </>
    );
};

export default ContactForm;
