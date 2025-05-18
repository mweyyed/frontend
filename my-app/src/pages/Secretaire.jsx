import { useState } from 'react';
import Sidebar from '../components/sidebars/SecretaireSidebar'; // Assuming a SecretaireSidebar exists

const Secretaire = () => {
  // Placeholder state for secretary-related data
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Schedule new patient appointments', status: 'Pending' },
    { id: 2, description: 'Update patient records', status: 'In Progress' },
    { id: 3, description: 'Prepare daily report for Dr. Smith', status: 'Completed' },
  ]);

  const [messages, setMessages] = useState([
    { id: 1, from: 'Dr. Admin', subject: 'Urgent: Patient File Request', received: '10:30 AM' },
    { id: 2, from: 'Support Team', subject: 'System Maintenance Alert', received: 'Yesterday' },
  ]);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'in progress':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#f5f7ff] to-[#f1f1fb]">
      <Sidebar />
      
      <div className="flex-1 ml-20"> {/* Adjust ml-20 if sidebar width is different */}
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                {/* Replace with actual avatar or placeholder */}
                <img src="/secretaire-avatar.jpg" alt="Secretary Name" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Secretary Dashboard</h2>
                <p className="text-sm text-gray-600">Welcome, [Secretary Name]</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              New Task
            </button>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Stats Cards - Customize for Secretary role */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    {/* Icon for pending tasks */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Pending Tasks</p>
                    <p className="text-xl font-semibold">{tasks.filter(t => t.status === 'Pending').length}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                     {/* Icon for completed tasks */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Completed Today</p>
                    <p className="text-xl font-semibold">{tasks.filter(t => t.status === 'Completed').length}</p> {/* Simplification, real logic would check date */}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-red-100 rounded-lg">
                    {/* Icon for new messages */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">New Messages</p>
                    <p className="text-xl font-semibold">{messages.length}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tasks and Messages Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Task List */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Current Tasks</h2>
                  <button className="text-sm text-indigo-600 hover:text-indigo-800">View All Tasks</button>
                </div>
                <div className="space-y-4">
                  {tasks.map((task) => (
                    <div key={task.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{task.description}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(task.status)}`}>
                        {task.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Messages/Notifications */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Recent Messages</h2>
                  <button className="text-sm text-indigo-600 hover:text-indigo-800">View All Messages</button>
                </div>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className="p-4 bg-gray-50 rounded-lg">
                      <p className="font-medium">{message.subject}</p>
                      <p className="text-sm text-gray-600">From: {message.from}</p>
                      <p className="text-xs text-gray-500">Received: {message.received}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secretaire;
