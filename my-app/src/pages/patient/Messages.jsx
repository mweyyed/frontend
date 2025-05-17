import { useState } from 'react';
import Sidebar from '../../components/sidebars/PatientSidebar';

const Messages = () => {
  const [conversations, setConversations] = useState([
    {
      id: 1,
      doctor: 'Dr. Jacob Ryan',
      specialty: 'Cardiologist',
      lastMessage: 'Your latest test results look good. Keep up with the medication.',
      timestamp: '2 hours ago',
      unread: true,
      avatar: 'JR'
    },
    {
      id: 2,
      doctor: 'Dr. Sarah Wilson',
      specialty: 'Neurologist',
      lastMessage: 'Please remember to complete the headache diary before your next visit.',
      timestamp: '1 day ago',
      unread: false,
      avatar: 'SW'
    },
    {
      id: 3,
      doctor: 'Dr. Mike Brown',
      specialty: 'Orthopedist',
      lastMessage: 'How is your knee feeling after the physical therapy?',
      timestamp: '2 days ago',
      unread: false,
      avatar: 'MB'
    }
  ]);

  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Dr. Jacob Ryan',
      content: "Hello! I've reviewed your latest ECG results.",
      timestamp: '10:30 AM',
      isDoctor: true
    },
    {
      id: 2,
      sender: 'You',
      content: 'Thank you, doctor. How do they look?',
      timestamp: '10:32 AM',
      isDoctor: false
    },
    {
      id: 3,
      sender: 'Dr. Jacob Ryan',
      content: 'Your latest test results look good. Keep up with the medication.',
      timestamp: '10:35 AM',
      isDoctor: true
    }
  ]);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#f5f7ff] to-[#f1f1fb]">
      <Sidebar />
      
      <div className="flex-1 ml-20">
        <div className="p-6 h-screen flex flex-col">
          <div className="flex h-full bg-white rounded-xl shadow-md overflow-hidden">
            {/* Conversations List */}
            <div className="w-1/3 border-r">
              <div className="p-4 border-b">
                <h1 className="text-xl font-bold text-gray-800">Messages</h1>
                <p className="text-sm text-gray-600">Chat with your healthcare providers</p>
              </div>

              <div className="overflow-y-auto h-[calc(100%-73px)]">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation)}
                    className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                      selectedConversation.id === conversation.id ? 'bg-indigo-50' : ''
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
                        {conversation.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <h3 className="font-semibold text-gray-800 truncate">{conversation.doctor}</h3>
                          <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                        </div>
                        <p className="text-sm text-gray-600">{conversation.specialty}</p>
                        <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                      </div>
                      {conversation.unread && (
                        <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b bg-white">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
                    {selectedConversation.avatar}
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-800">{selectedConversation.doctor}</h2>
                    <p className="text-sm text-gray-600">{selectedConversation.specialty}</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isDoctor ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        message.isDoctor
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-indigo-600 text-white'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${message.isDoctor ? 'text-gray-500' : 'text-indigo-200'}`}>
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t bg-white">
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages; 