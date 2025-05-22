import { useState } from 'react';
import Sidebar from '../../components/sidebars/PatientSidebar';

const Profile = () => {
  const [profile] = useState({
    name: 'John Doe',
    patientId: 'P12345',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1990-05-15',
    gender: 'Male',
    bloodType: 'A+',
    height: '175',
    weight: '70',
    address: '123 Main St',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    emergencyContact: {
      name: 'Jane Doe',
      relationship: 'Spouse',
      phone: '+1 (555) 987-6543'
    },
    stats: {
      appointments: 12,
      prescriptions: 5,
      records: 8,
      visits: 15
    },
    medicalHistory: {
      allergies: ['Penicillin', 'Peanuts', 'Latex'],
      conditions: ['Hypertension', 'Type 2 Diabetes'],
      medications: ['Metformin', 'Lisinopril'],
      surgeries: ['Appendectomy (2015)']
    }
  });

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#f5f7ff] to-[#f1f1fb]">
      <Sidebar />
      
      <div className="flex-1 ml-20">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
              <p className="text-gray-600">Manage your personal and medical information</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Overview */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex flex-col items-center">
                  <div className="h-32 w-32 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                    <span className="text-4xl text-indigo-600 font-medium">
                      {profile.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{profile.name}</h2>
                  <p className="text-gray-600">Patient ID: {profile.patientId}</p>
                  <div className="mt-4 w-full">
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-indigo-600">{profile.stats.appointments}</p>
                        <p className="text-sm text-gray-600">Appointments</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-indigo-600">{profile.stats.prescriptions}</p>
                        <p className="text-sm text-gray-600">Prescriptions</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-indigo-600">{profile.stats.records}</p>
                        <p className="text-sm text-gray-600">Records</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-indigo-600">{profile.stats.visits}</p>
                        <p className="text-sm text-gray-600">Total Visits</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-600">{profile.email}</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-gray-600">{profile.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="text-gray-600">{profile.address}, {profile.city}, {profile.state} {profile.zipCode}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Information</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Blood Type</span>
                      <span className="text-gray-900">{profile.bloodType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Height</span>
                      <span className="text-gray-900">{profile.height} cm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Weight</span>
                      <span className="text-gray-900">{profile.weight} kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date of Birth</span>
                      <span className="text-gray-900">{profile.dateOfBirth}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Gender</span>
                      <span className="text-gray-900">{profile.gender}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Medical History */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Medical History</h3>
                <div className="space-y-6">
                  {/* Allergies */}
                  <div>
                    <h4 className="text-md font-medium text-gray-900 mb-3">Allergies</h4>
                    <div className="flex flex-wrap gap-2">
                      {profile.medicalHistory.allergies.map((allergy, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm"
                        >
                          {allergy}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Medical Conditions */}
                  <div>
                    <h4 className="text-md font-medium text-gray-900 mb-3">Medical Conditions</h4>
                    <div className="flex flex-wrap gap-2">
                      {profile.medicalHistory.conditions.map((condition, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm"
                        >
                          {condition}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Current Medications */}
                  <div>
                    <h4 className="text-md font-medium text-gray-900 mb-3">Current Medications</h4>
                    <div className="flex flex-wrap gap-2">
                      {profile.medicalHistory.medications.map((medication, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                        >
                          {medication}
                        </span>
                      ))}
                  </div>
                  </div>

                  {/* Past Surgeries */}
                  <div>
                    <h4 className="text-md font-medium text-gray-900 mb-3">Past Surgeries</h4>
                    <div className="flex flex-wrap gap-2">
                      {profile.medicalHistory.surgeries.map((surgery, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {surgery}
                        </span>
                      ))}
                  </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Emergency Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-12 w-12 rounded-lg bg-indigo-100 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                  </div>
                  </div>
                  <div>
                      <h4 className="text-lg font-medium text-gray-900">{profile.emergencyContact.name}</h4>
                      <p className="text-gray-600">{profile.emergencyContact.relationship}</p>
                      <p className="text-sm text-gray-500">{profile.emergencyContact.phone}</p>
                  </div>
                  </div>
                </div>
              </div>

              {/* Account Settings */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-4 border-b">
                    <div>
                      <h4 className="text-gray-800 font-medium">Two-Factor Authentication</h4>
                      <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                    </div>
                    <div className="flex items-center">
                      <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors">
                        Enable
                    </button>
                  </div>
                </div>
                  <div className="flex items-center justify-between py-4 border-b">
                <div>
                      <h4 className="text-gray-800 font-medium">Email Notifications</h4>
                      <p className="text-sm text-gray-600">Receive notifications about your appointments</p>
                    </div>
                    <div className="flex items-center">
                      <button className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-lg hover:bg-indigo-200 transition-colors">
                        Configured
                    </button>
                  </div>
                  </div>
                  <div className="flex items-center justify-between py-4">
                  <div>
                      <h4 className="text-gray-800 font-medium">Password</h4>
                      <p className="text-sm text-gray-600">Change your password</p>
                    </div>
                    <div className="flex items-center">
                      <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors">
                        Update
                      </button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 