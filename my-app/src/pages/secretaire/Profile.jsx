import { useState } from 'react';
import Sidebar from '../../components/sidebars/SecretaireSidebar';

const Profile = () => {
  const [profile] = useState({
    name: 'Sarah Johnson',
    employeeId: 'S12345',
    email: 'sarah.johnson@hospital.com',
    phone: '+1 (555) 123-4567',
    department: 'Administration',
    position: 'Senior Secretary',
    experience: '8 years',
    education: [
      {
        degree: 'Bachelor of Business Administration',
        institution: 'University of Business',
        year: '2016'
      },
      {
        degree: 'Medical Office Administration Certificate',
        institution: 'Healthcare Institute',
        year: '2017'
      }
    ],
    certifications: [
      {
        name: 'Certified Medical Administrative Assistant',
        issuer: 'American Association of Medical Assistants',
        year: '2018'
      },
      {
        name: 'Healthcare Information Management',
        issuer: 'Healthcare Management Institute',
        year: '2020'
      }
    ],
    schedule: {
      monday: '8:00 AM - 4:00 PM',
      tuesday: '8:00 AM - 4:00 PM',
      wednesday: '8:00 AM - 4:00 PM',
      thursday: '8:00 AM - 4:00 PM',
      friday: '8:00 AM - 3:00 PM'
    },
    stats: {
      appointments: 245,
      patients: 180,
      tasks: 156,
      efficiency: 95
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
              <p className="text-gray-600">Manage your personal and professional information</p>
            </div>
          </div>

          {/* Profile Content */}
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Profile Overview */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-4xl text-indigo-600 font-medium">
                    {profile.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{profile.name}</h2>
                  <p className="text-gray-600">{profile.position}</p>
                  <div className="mt-4 w-full">
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-indigo-600">{profile.stats.appointments}</p>
                        <p className="text-sm text-gray-600">Appointments</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-indigo-600">{profile.stats.patients}</p>
                        <p className="text-sm text-gray-600">Patients</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-indigo-600">{profile.stats.tasks}</p>
                        <p className="text-sm text-gray-600">Tasks</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-indigo-600">{profile.stats.efficiency}%</p>
                        <p className="text-sm text-gray-600">Efficiency</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Employee ID</p>
                  <p className="font-medium">{profile.employeeId}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium">{profile.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium">{profile.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Department</p>
                  <p className="font-medium">{profile.department}</p>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Work Schedule</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(profile.schedule).map(([day, hours]) => (
                  <div key={day}>
                    <p className="text-sm text-gray-600 capitalize">{day}</p>
                    <p className="font-medium">{hours}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Education</h3>
              <div className="space-y-4">
                {profile.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-indigo-500 pl-4">
                    <p className="font-medium">{edu.degree}</p>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Certifications</h3>
              <div className="space-y-4">
                {profile.certifications.map((cert, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4">
                    <p className="font-medium">{cert.name}</p>
                    <p className="text-gray-600">{cert.issuer}</p>
                    <p className="text-sm text-gray-500">{cert.year}</p>
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

export default Profile; 