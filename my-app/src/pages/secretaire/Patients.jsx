import React, { useState } from 'react';
import Sidebar from '../../components/sidebars/SecretaireSidebar';

const SecretairePatients = () => {
  const [patients, setPatients] = useState([
    { id: 'P001', name: 'Alice Smith', dob: '1990-05-15', contact: '555-0101', lastVisit: '2024-06-20' },
    { id: 'P002', name: 'Bob Johnson', dob: '1985-08-22', contact: '555-0102', lastVisit: '2024-07-01' },
    { id: 'P003', name: 'Carol Williams', dob: '1992-11-30', contact: '555-0103', lastVisit: '2024-05-10' },
  ]);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#f5f7ff] to-[#f1f1fb]">
      <Sidebar />
      <div className="flex-1 ml-20">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-800">Patient Records</h1>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Register New Patient
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="mb-4">
              <input 
                type="text" 
                placeholder="Search patients... (e.g., by name or ID)"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            {patients.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient ID</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date of Birth</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Visit</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {patients.map((patient) => (
                      <tr key={patient.id}>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{patient.id}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{patient.name}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{patient.dob}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{patient.contact}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{patient.lastVisit}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                          <button className="text-indigo-600 hover:text-indigo-900 mr-3">View Details</button>
                          <button className="text-blue-600 hover:text-blue-900">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-600">No patient records found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecretairePatients; 