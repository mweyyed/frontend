import React, { useState } from 'react';
import Sidebar from '../../components/sidebars/SecretaireSidebar';

const SecretaireAppointments = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, patientName: 'Alice Smith', doctorName: 'Dr. Emily White', date: '2024-07-15', time: '10:00 AM', status: 'Scheduled' },
    { id: 2, patientName: 'Bob Johnson', doctorName: 'Dr. John Brown', date: '2024-07-15', time: '11:30 AM', status: 'Confirmed' },
    { id: 3, patientName: 'Carol Williams', doctorName: 'Dr. Emily White', date: '2024-07-16', time: '02:00 PM', status: 'Pending' },
  ]);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'scheduled': return 'bg-blue-100 text-blue-700';
      case 'confirmed': return 'bg-green-100 text-green-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'cancelled': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#f5f7ff] to-[#f1f1fb]">
      <Sidebar />
      <div className="flex-1 ml-20">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-800">Appointments Management</h1>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Book New Appointment
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Upcoming Appointments</h2>
            {appointments.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {appointments.map((apt) => (
                      <tr key={apt.id}>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{apt.patientName}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{apt.doctorName}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{apt.date} at {apt.time}</td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(apt.status)}`}>
                            {apt.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                          <button className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
                          <button className="text-red-600 hover:text-red-900">Cancel</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-600">No upcoming appointments.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecretaireAppointments; 