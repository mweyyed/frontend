import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Admin from './pages/admin/Dashboard';
import AdminStaff from './pages/admin/Staff';
import AdminDepartments from './pages/admin/Departments';
import Doctor from './pages/doctor/Dashboard';
import DoctorAppointments from './pages/doctor/Appointments';
import DoctorPatients from './pages/doctor/Patients';
import DoctorPrescriptions from './pages/doctor/Prescriptions';
import DoctorMessages from './pages/doctor/Messages';
import DoctorProfile from './pages/doctor/Profile';
import Patient from './pages/Patient';
import Appointments from './pages/patient/Appointments';
import Prescriptions from './pages/patient/Prescriptions';
import Records from './pages/patient/Records';
import Messages from './pages/patient/Messages';
import Profile from './pages/patient/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/staff" element={<AdminStaff />} />
        <Route path="/admin/departments" element={<AdminDepartments />} />
        
        {/* Doctor Routes */}
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/doctor/appointments" element={<DoctorAppointments />} />
        <Route path="/doctor/patients" element={<DoctorPatients />} />
        <Route path="/doctor/prescriptions" element={<DoctorPrescriptions />} />
        <Route path="/doctor/messages" element={<DoctorMessages />} />
        <Route path="/doctor/profile" element={<DoctorProfile />} />
        
        {/* Patient Routes */}
        <Route path="/patient" element={<Patient />} />
        <Route path="/patient/appointments" element={<Appointments />} />
        <Route path="/patient/prescriptions" element={<Prescriptions />} />
        <Route path="/patient/records" element={<Records />} />
        <Route path="/patient/messages" element={<Messages />} />
        <Route path="/patient/profile" element={<Profile />} />
        
        {/* Redirect root to login page */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        {/* Catch all route for 404 */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
