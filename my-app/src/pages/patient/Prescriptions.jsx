import { useState } from 'react';
import Sidebar from '../../components/sidebars/PatientSidebar';

const Prescriptions = () => {
  const [prescriptions, setPrescriptions] = useState([
    { 
      id: 1, 
      medication: 'Amoxicillin',
      dosage: '500mg',
      frequency: 'Twice daily',
      startDate: '2024-05-10',
      endDate: '2024-05-17',
      doctor: 'Dr. Jacob Ryan',
      status: 'Active',
      instructions: 'Take with food'
    },
    { 
      id: 2,
      medication: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once daily',
      startDate: '2024-05-01',
      endDate: '2024-05-30',
      doctor: 'Dr. Sarah Wilson',
      status: 'Active',
      instructions: 'Take in the morning'
    },
    { 
      id: 3,
      medication: 'Metformin',
      dosage: '850mg',
      frequency: 'Three times daily',
      startDate: '2024-05-05',
      endDate: '2024-06-05',
      doctor: 'Dr. Mike Brown',
      status: 'Active',
      instructions: 'Take with meals'
    },
    { 
      id: 4,
      medication: 'Ibuprofen',
      dosage: '400mg',
      frequency: 'As needed',
      startDate: '2024-05-15',
      endDate: '2024-05-22',
      doctor: 'Dr. Emily Davis',
      status: 'Active',
      instructions: 'Take for pain'
    }
  ]);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      case 'expired':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#f5f7ff] to-[#f1f1fb]">
      <Sidebar />
      
      <div className="flex-1 ml-20">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Prescriptions</h1>
              <p className="text-gray-600">View and manage your prescriptions</p>
            </div>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Request Refill
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Active Prescriptions</p>
                  <p className="text-xl font-semibold">4</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-yellow-100 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Pending Refills</p>
                  <p className="text-xl font-semibold">1</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Past Prescriptions</p>
                  <p className="text-xl font-semibold">8</p>
                </div>
              </div>
            </div>
          </div>

          {/* Prescriptions List */}
          <div className="bg-white rounded-xl shadow-md">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Current Prescriptions</h2>
                <div className="flex gap-4">
                  <select className="px-3 py-2 border rounded-lg text-gray-600 text-sm">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Completed</option>
                    <option>Expired</option>
                  </select>
                  <select className="px-3 py-2 border rounded-lg text-gray-600 text-sm">
                    <option>All Doctors</option>
                    <option>Dr. Jacob Ryan</option>
                    <option>Dr. Sarah Wilson</option>
                    <option>Dr. Mike Brown</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                {prescriptions.map((prescription) => (
                  <div key={prescription.id} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-800">{prescription.medication}</h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(prescription.status)}`}>
                            {prescription.status}
                          </span>
                        </div>
                        <p className="text-gray-600">{prescription.dosage} - {prescription.frequency}</p>
                      </div>
                      <button className="text-indigo-600 hover:text-indigo-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Prescribed by</p>
                        <p className="font-medium">{prescription.doctor}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Start Date</p>
                        <p className="font-medium">{prescription.startDate}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">End Date</p>
                        <p className="font-medium">{prescription.endDate}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Instructions</p>
                        <p className="font-medium">{prescription.instructions}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-between items-center mt-6">
                <p className="text-sm text-gray-600">Showing 4 of 12 prescriptions</p>
                <div className="flex gap-2">
                  <button className="px-3 py-1 border rounded-lg text-gray-600 hover:bg-gray-50">Previous</button>
                  <button className="px-3 py-1 border rounded-lg text-gray-600 hover:bg-gray-50">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prescriptions; 