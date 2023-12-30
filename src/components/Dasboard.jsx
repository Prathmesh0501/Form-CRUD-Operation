// Table.js

import axios from 'axios';
import React from 'react';
import { useEffect,useState } from 'react';

const Table = () => {
  const data = [
    { srNo: 1, name: 'John Doe', mobileNo: '123-456-7890', address: '123 Street, City', location: 'City A' },
    { srNo: 2, name: 'Jane Doe', mobileNo: '987-654-3210', address: '456 Street, Town', location: 'City B' },
    // Add more data as needed
  ];

  const [user,setUser] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/user').then((response) => {
        setUser(response.data)
    })
  },[])

  

  return (
    <div className="container mx-auto mt-8">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Sr. No.</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Mobile No</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">Location</th>
            <th className="py-2 px-4 border-b"></th>

          </tr>
        </thead>
        <tbody>
          {user.map((row) => (
            <tr key={row.srNo}>
              <td className="py-2 px-4 border-b">{row.srno}</td>
              <td className="py-2 px-4 border-b">{row.name}</td>
              <td className="py-2 px-4 border-b">{row.mobileno}</td>
              <td className="py-2 px-4 border-b">{row.add}</td>
              <td className="py-2 px-4 border-b">{row.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
