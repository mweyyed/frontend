import { useState } from 'react';
import Sidebar from '../../components/sidebars/AdminSidebar';

const Departments = () => {
  const [departments] = useState([
    {
      id: 1,
      name: 'Cardiology',
      head: 'Dr. Jacob Ryan',
      staffCount: 24,
      patientCount: 156,
      appointmentsToday: 18,
      occupancyRate: 85,
      status: 'Active'
    },
    {
      id: 2,
      name: 'Neurology',
      head: 'Dr. Sarah Wilson',
      staffCount: 18,
      patientCount: 98,
      appointmentsToday: 12,
      occupancyRate: 72,
      status: 'Active'
    },
    {
      id: 3,
      name: 'Pediatrics',
      head: 'Dr. Emily Davis',
      staffCount: 32,
      patientCount: 210,
      appointmentsToday: 25,
      occupancyRate: 90,
      status: 'Active'
    },
    {
      id: 4,
      name: 'Orthopedics',
      head: 'Dr. Michael Chen',
      staffCount: 16,
      patientCount: 124,
      appointmentsToday: 15,
      occupancyRate: 68,
      status: 'Active'
    }
  ]);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#f5f7ff] to-[#f1f1fb]">
      <Sidebar />
      
      <div className="flex-1 ml-20">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Department Management</h1>
              <p className="text-gray-600">Manage hospital departments and resources</p>
            </div>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Add Department
            </button>
          </div>

          {/* Department Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {departments.map((dept) => (
              <div key={dept.id} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{dept.name}</h3>
                    <p className="text-sm text-gray-600">Head: {dept.head}</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                    {dept.status}
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Staff</span>
                    <span className="font-medium">{dept.staffCount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Patients</span>
                    <span className="font-medium">{dept.patientCount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Today's Appointments</span>
                    <span className="font-medium">{dept.appointmentsToday}</span>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">Occupancy</span>
                      <span className="text-sm font-medium">{dept.occupancyRate}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-600 h-2 rounded-full"
                        style={{ width: `${dept.occupancyRate}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t flex justify-end space-x-3">
                  <button className="text-sm text-indigo-600 hover:text-indigo-800">View Details</button>
                  <button className="text-sm text-indigo-600 hover:text-indigo-800">Edit</button>
                </div>
              </div>
            ))}
          </div>

          {/* Department Details Table */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Department Details</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Department
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Head of Department
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Staff
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Patients
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {departments.map((dept) => (
                    <tr key={dept.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{dept.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{dept.head}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{dept.staffCount} members</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{dept.patientCount} active</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                          {dept.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-indigo-600 hover:text-indigo-900 mr-4">Manage Staff</button>
                        <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments; 