import React, { useState } from 'react';
import Sidebar from '../../components/sidebars/SecretaireSidebar';

const SecretaireTasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Prepare agenda for weekly doctors meeting', dueDate: '2024-07-15', status: 'In Progress' },
    { id: 2, description: 'Follow up with patient John Doe regarding his appointment', dueDate: '2024-07-16', status: 'Pending' },
    { id: 3, description: 'Order new office supplies', dueDate: '2024-07-18', status: 'Pending' },
    { id: 4, description: 'Finalize monthly report for hospital administration', dueDate: '2024-07-20', status: 'Completed' },
  ]);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'in progress': return 'bg-blue-100 text-blue-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'completed': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#f5f7ff] to-[#f1f1fb]">
      <Sidebar />
      <div className="flex-1 ml-20">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-800">Tasks Management</h1>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Add New Task
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Current Tasks</h2>
            {tasks.length > 0 ? (
              <div className="space-y-4">
                {tasks.map((task) => (
                  <div key={task.id} className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <p className="text-gray-800 font-medium">{task.description}</p>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(task.status)}`}>
                        {task.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Due: {task.dueDate}</p>
                    <div className="mt-3 text-right">
                        <button className="text-sm text-indigo-600 hover:text-indigo-800 mr-2">Edit</button>
                        <button className="text-sm text-green-600 hover:text-green-800 mr-2">Mark as Complete</button>
                        <button className="text-sm text-red-600 hover:text-red-800">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No tasks assigned.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecretaireTasks; 