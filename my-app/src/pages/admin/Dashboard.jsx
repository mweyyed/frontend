import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/sidebars/AdminSidebar';

const Dashboard = () => {
  const navigate = useNavigate();
  const [recentActivities] = useState([
    {
      id: 1,
      action: 'New role created',
      user: 'Admin',
      details: 'Created "Senior Doctor" role',
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      action: 'User registered',
      user: 'Dr. Emily Parker',
      details: 'New doctor account created',
      timestamp: '3 hours ago'
    },
    {
      id: 3,
      action: 'Permissions updated',
      user: 'Admin',
      details: 'Updated role permissions',
      timestamp: '4 hours ago'
    },
    {
      id: 4,
      action: 'Department modified',
      user: 'Admin',
      details: 'Updated Cardiology department',
      timestamp: '5 hours ago'
    }
  ]);

  const [systemStats] = useState({
    totalUsers: 248,
    activeUsers: 235,
    totalRoles: 8,
    totalPermissions: 15,
    departments: 12,
    recentLogins: 45
  });

  const handleQuickAction = (action) => {
    switch (action) {
      case 'create-user':
        navigate('/admin/create-user');
        break;
      case 'manage-roles':
        navigate('/admin/roles');
        break;
      case 'departments':
        navigate('/admin/departments');
        break;
      case 'system-logs':
        navigate('/admin/logs');
        break;
      default:
        break;
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
              <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
              <p className="text-gray-600">System overview and management</p>
            </div>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                System Report
              </button>
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* User Management */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">User Management</p>
                  <div className="mt-2">
                    <p className="text-sm">Total Users: <span className="font-semibold">{systemStats.totalUsers}</span></p>
                    <p className="text-sm">Active Users: <span className="font-semibold">{systemStats.activeUsers}</span></p>
                    <p className="text-sm">Recent Logins: <span className="font-semibold">{systemStats.recentLogins}</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Role & Permissions */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Role & Permissions</p>
                  <div className="mt-2">
                    <p className="text-sm">Total Roles: <span className="font-semibold">{systemStats.totalRoles}</span></p>
                    <p className="text-sm">Total Permissions: <span className="font-semibold">{systemStats.totalPermissions}</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Departments */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Departments</p>
                  <div className="mt-2">
                    <p className="text-sm">Total Departments: <span className="font-semibold">{systemStats.departments}</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => handleQuickAction('create-user')}
                  className="p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors text-left cursor-pointer"
                >
                  <div className="text-indigo-600 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                  </div>
                  <p className="font-medium">Create User</p>
                  <p className="text-sm text-gray-600">Add new system user</p>
                </button>
                <button 
                  onClick={() => handleQuickAction('manage-roles')}
                  className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors text-left cursor-pointer"
                >
                  <div className="text-green-600 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p className="font-medium">Manage Roles</p>
                  <p className="text-sm text-gray-600">Configure user roles</p>
                </button>
                <button 
                  onClick={() => handleQuickAction('departments')}
                  className="p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors text-left cursor-pointer"
                >
                  <div className="text-yellow-600 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="font-medium">Departments</p>
                  <p className="text-sm text-gray-600">Manage departments</p>
                </button>
                <button 
                  onClick={() => handleQuickAction('system-logs')}
                  className="p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors text-left cursor-pointer"
                >
                  <div className="text-red-600 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p className="font-medium">System Logs</p>
                  <p className="text-sm text-gray-600">View system activity</p>
                </button>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-4">
                    <div className="w-2 h-2 mt-2 rounded-full bg-indigo-600"></div>
                    <div>
                      <p className="text-gray-800">{activity.action}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>{activity.user}</span>
                        <span>•</span>
                        <span>{activity.details}</span>
                        <span>•</span>
                        <span>{activity.timestamp}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 