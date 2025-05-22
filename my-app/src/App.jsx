import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from './pages/Login';
import Admin from './pages/admin/Dashboard';
import AdminStaff from './pages/admin/Staff';
import AdminDepartments from './pages/admin/Departments';
import Doctor from './pages/doctor/Dashboard';
import DoctorAppointments from './pages/doctor/Appointments';
import DoctorPatients from './pages/doctor/Patients';
import DoctorPrescriptions from './pages/doctor/Prescriptions';
import DoctorProfile from './pages/doctor/Profile';
import Patient from './pages/Patient';
import Appointments from './pages/patient/Appointments';
import Prescriptions from './pages/patient/Prescriptions';
import Records from './pages/patient/Records';
import Profile from './pages/patient/Profile';
import Secretaire from './pages/secretaire';
import SecretaireAppointments from './pages/secretaire/Appointments';
import SecretairePatients from './pages/secretaire/Patients';
import SecretaireTasks from './pages/secretaire/Tasks';
import SecretaireProfile from './pages/secretaire/Profile';
import RoleCreatePage from './pages/admin/roles';
import PermissionCreatePage from './pages/admin/permissions';
import CreateUser from './pages/admin/CreateUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/staff" element={<AdminStaff />} />
        <Route path="/admin/departments" element={<AdminDepartments />} />
        <Route path="/admin/roles" element={<RoleCreatePage user={{ role: 'admin' }} />} />
        <Route path="/admin/permissions" element={<PermissionCreatePage user={{ role: 'admin' }} />} />
        <Route path="/admin/create-user" element={<CreateUser />} />
        
        {/* Doctor Routes */}
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/doctor/appointments" element={<DoctorAppointments />} />
        <Route path="/doctor/patients" element={<DoctorPatients />} />
        <Route path="/doctor/prescriptions" element={<DoctorPrescriptions />} />
        <Route path="/doctor/profile" element={<DoctorProfile />} />
        
        {/* Patient Routes */}
        <Route path="/patient" element={<Patient />} />
        <Route path="/patient/appointments" element={<Appointments />} />
        <Route path="/patient/prescriptions" element={<Prescriptions />} />
        <Route path="/patient/records" element={<Records />} />
        <Route path="/patient/profile" element={<Profile />} />
        
        {/* Secretaire Routes Added */}
        <Route path="/secretaire" element={<Secretaire />} />
        <Route path="/secretaire/appointments" element={<SecretaireAppointments />} />
        <Route path="/secretaire/patients" element={<SecretairePatients />} />
        <Route path="/secretaire/tasks" element={<SecretaireTasks />} />
        <Route path="/secretaire/profile" element={<SecretaireProfile />} />
        
        {/* Redirect root to login page */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        {/* Catch all route for 404 */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
