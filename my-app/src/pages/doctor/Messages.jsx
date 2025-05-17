import { useState } from 'react';
import Sidebar from '../../components/sidebars/DoctorSidebar';

const Messages = () => {
  const [conversations] = useState([
    {
      id: 1,
      patient: 'John Doe',
      lastMessage: 'Thank you for the prescription, doctor.',
      timestamp: '2 mins ago',
      unread: true,
      online: true
    },
    {
      id: 2,
      patient: 'Sarah Smith',
      lastMessage: 'When should I schedule my next appointment?',
      timestamp: '1 hour ago',
      unread: true,
      online: false
    },
    {
      id: 3,
      patient: 'Michael Johnson',
      lastMessage: 'The new medication is working well.',
      timestamp: '3 hours ago',
      unread: false,
      online: false
    },
    {
      id: 4,
      patient: 'Emily Davis',
      lastMessage: 'I have a question about the side effects.',
      timestamp: 'Yesterday',
      unread: false,
      online: true
    }
  ]);

  const [messages] = useState([
    {
      id: 1,
      sender: 'patient',
      content: 'Hello Dr. Ryan, I have a question about my prescription.',
      timestamp: '10:30 AM'
    },
    {
      id: 2,
      sender: 'doctor',
      content: 'Of course, what would you like to know?',
      timestamp: '10:32 AM'
    },
    {
      id: 3,
      sender: 'patient',
      content: 'Should I take the medication with food or on an empty stomach?',
      timestamp: '10:33 AM'
    },
    {
      id: 4,
      sender: 'doctor',
      content: "It's best to take this medication with food to minimize any potential stomach upset. Try to take it with your morning meal.",
      timestamp: '10:35 AM'
    },
    {
      id: 5,
      sender: 'patient',
      content: 'Thank you for the clarification, doctor.',
      timestamp: '10:36 AM'
    }
  ]);

  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // Add message sending logic here
      setNewMessage('');
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#f5f7ff] to-[#f1f1fb]">
      <Sidebar />
      
      <div className="flex-1 ml-20">
        <div className="h-screen flex">
          {/* Conversations List */}
          <div className="w-1/3 bg-white border-r">
            <div className="p-4 border-b">
              <h2 className="text-xl font-bold text-gray-800">Messages</h2>
              <p className="text-sm text-gray-600">Manage your conversations</p>
            </div>

            {/* Search */}
            <div className="p-4 border-b">
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Conversations */}
            <div className="overflow-y-auto h-[calc(100vh-180px)]">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation)}
                  className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                    selectedConversation.id === conversation.id ? 'bg-indigo-50' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="relative">
                        <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                          <span className="text-indigo-600 font-medium">
                            {conversation.patient.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        {conversation.online && (
                          <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-400 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-gray-900">{conversation.patient}</div>
                        <div className="text-sm text-gray-500 truncate w-48">{conversation.lastMessage}</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="text-xs text-gray-500">{conversation.timestamp}</div>
                      {conversation.unread && (
                        <div className="mt-1 h-2 w-2 bg-indigo-600 rounded-full"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 bg-white border-b flex items-center justify-between">
              <div className="flex items-center">
                <div className="relative">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-indigo-600 font-medium">
                      {selectedConversation.patient.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  {selectedConversation.online && (
                    <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-400 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="ml-4">
                  <div className="font-medium text-gray-900">{selectedConversation.patient}</div>
                  <div className="text-sm text-gray-500">
                    {selectedConversation.online ? 'Online' : 'Offline'}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 bg-gray-50 p-4 overflow-y-auto">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'doctor' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-lg rounded-lg px-4 py-2 ${
                        message.sender === 'doctor'
                          ? 'bg-indigo-600 text-white'
                          : 'bg-white text-gray-900'
                      }`}
                    >
                      <p>{message.content}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'doctor' ? 'text-indigo-200' : 'text-gray-500'
                      }`}>
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Input */}
            <div className="bg-white p-4 border-t">
              <form onSubmit={handleSendMessage} className="flex items-center gap-4">
                <button
                  type="button"
                  className="p-2 text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  className="p-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages; 