import { useState } from 'react';
import Sidebar from '../../components/sidebars/PatientSidebar';

const MedicalHistory = () => {
  const [activeTab, setActiveTab] = useState('consultations');

  const tabs = [
    { id: 'consultations', label: 'Consultations' },
    { id: 'prescriptions', label: 'Prescriptions' },
    { id: 'exams', label: 'Exams & Reports' },
    { id: 'operations', label: 'Operations' },
    { id: 'antecedents', label: 'Medical History' },
  ];

  // Mock data - Replace with actual API calls
  const consultations = [
    {
      id: 1,
      date: '2024-03-15',
      doctor: 'Dr. Sarah Wilson',
      hospital: 'Central Hospital',
      service: 'Cardiology',
      motif: 'Regular checkup',
      diagnostic: 'Normal blood pressure',
      traitement: 'Continue current medication',
    },
    // Add more consultations...
  ];

  const prescriptions = [
    {
      id: 1,
      date: '2024-03-15',
      doctor: 'Dr. Sarah Wilson',
      medicaments: [
        { nom: 'Aspirin', dosage: '100mg', frequency: 'Once daily' },
        { nom: 'Metformin', dosage: '500mg', frequency: 'Twice daily' },
      ],
      duration: '30 days',
    },
    // Add more prescriptions...
  ];

  const exams = [
    {
      id: 1,
      type: 'Blood Test',
      date: '2024-03-10',
      doctor: 'Dr. Mike Brown',
      result: 'Normal',
      notes: 'All parameters within normal range',
    },
    // Add more exams...
  ];

  const operations = [
    {
      id: 1,
      type: 'Appendectomy',
      date: '2023-12-05',
      hospital: 'Central Hospital',
      surgeon: 'Dr. John Smith',
      status: 'Completed',
      notes: 'Successful procedure',
    },
    // Add more operations...
  ];

  const antecedents = [
    {
      id: 1,
      type: 'Allergies',
      description: 'Penicillin allergy',
      date: '2020-01-01',
    },
    // Add more antecedents...
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'consultations':
        return (
          <div className="space-y-4">
            {consultations.map((consultation) => (
              <div key={consultation.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{consultation.doctor}</h3>
                    <p className="text-gray-600">{consultation.hospital} - {consultation.service}</p>
                  </div>
                  <span className="text-sm text-gray-500">{consultation.date}</span>
                </div>
                <div className="space-y-2">
                  <p><span className="font-medium">Motif:</span> {consultation.motif}</p>
                  <p><span className="font-medium">Diagnostic:</span> {consultation.diagnostic}</p>
                  <p><span className="font-medium">Traitement:</span> {consultation.traitement}</p>
                </div>
              </div>
            ))}
          </div>
        );

      case 'prescriptions':
        return (
          <div className="space-y-4">
            {prescriptions.map((prescription) => (
              <div key={prescription.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">Prescription #{prescription.id}</h3>
                    <p className="text-gray-600">By {prescription.doctor}</p>
                  </div>
                  <span className="text-sm text-gray-500">{prescription.date}</span>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Medications:</h4>
                  <ul className="list-disc list-inside">
                    {prescription.medicaments.map((med, index) => (
                      <li key={index}>
                        {med.nom} - {med.dosage} ({med.frequency})
                      </li>
                    ))}
                  </ul>
                  <p><span className="font-medium">Duration:</span> {prescription.duration}</p>
                </div>
              </div>
            ))}
          </div>
        );

      case 'exams':
        return (
          <div className="space-y-4">
            {exams.map((exam) => (
              <div key={exam.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{exam.type}</h3>
                    <p className="text-gray-600">By {exam.doctor}</p>
                  </div>
                  <span className="text-sm text-gray-500">{exam.date}</span>
                </div>
                <div className="space-y-2">
                  <p><span className="font-medium">Result:</span> {exam.result}</p>
                  <p><span className="font-medium">Notes:</span> {exam.notes}</p>
                </div>
              </div>
            ))}
          </div>
        );

      case 'operations':
        return (
          <div className="space-y-4">
            {operations.map((operation) => (
              <div key={operation.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{operation.type}</h3>
                    <p className="text-gray-600">{operation.hospital}</p>
                  </div>
                  <span className="text-sm text-gray-500">{operation.date}</span>
                </div>
                <div className="space-y-2">
                  <p><span className="font-medium">Surgeon:</span> {operation.surgeon}</p>
                  <p><span className="font-medium">Status:</span> {operation.status}</p>
                  <p><span className="font-medium">Notes:</span> {operation.notes}</p>
                </div>
              </div>
            ))}
          </div>
        );

      case 'antecedents':
        return (
          <div className="space-y-4">
            {antecedents.map((antecedent) => (
              <div key={antecedent.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{antecedent.type}</h3>
                  </div>
                  <span className="text-sm text-gray-500">{antecedent.date}</span>
                </div>
                <p>{antecedent.description}</p>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#f5f7ff] to-[#f1f1fb]">
      <Sidebar />
      
      <div className="flex-1 ml-20">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Medical History</h1>
            <p className="text-gray-600">View your complete medical records and history</p>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-md mb-6">
            <div className="flex border-b">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === tab.id
                      ? 'text-indigo-600 border-b-2 border-indigo-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalHistory; 