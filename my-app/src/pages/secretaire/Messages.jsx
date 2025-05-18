import React, { useState } from 'react';
import Sidebar from '../../components/sidebars/SecretaireSidebar';

const SecretaireMessages = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Dr. Emily White', subject: 'Regarding Patient Alice Smith\'s scan results', time: '10:30 AM', unread: true },
    { id: 2, sender: 'Admin Team', subject: 'Reminder: Staff Meeting on Friday at 2 PM', time: 'Yesterday', unread: false },
    { id: 3, sender: 'Pharmacy Connect', subject: 'Prescription Refill Request for Bob Johnson', time: '2 days ago', unread: false },
  ]);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#f5f7ff] to-[#f1f1fb]">
      <Sidebar />
      <div className="flex-1 ml-20">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-800">Messages</h1>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Compose Message
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-md">
            {messages.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {messages.map((message) => (
                  <li key={message.id} className={`p-4 hover:bg-gray-50 cursor-pointer ${message.unread ? 'bg-indigo-50' : ''}`}>
                    <div className="flex justify-between items-center">
                      <p className={`text-sm font-semibold ${message.unread ? 'text-indigo-700' : 'text-gray-800'}`}>
                        {message.sender}
                      </p>
                      <p className="text-xs text-gray-500">{message.time}</p>
                    </div>
                    <p className={`mt-1 text-sm ${message.unread ? 'text-gray-700' : 'text-gray-600'}`}>
                      {message.subject}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="p-6 text-gray-600">No messages.</p>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecretaireMessages; 