import { Link, useLocation } from 'react-router-dom';

const SecretaireSidebar = () => {
  const location = useLocation();

  const isActive = (path) => {
    // For the main dashboard link (/secretaire), only be active if the path is an exact match.
    if (path === '/secretaire') {
      return location.pathname === path;
    }
    // For other links, be active if it's the exact path or a sub-path of it.
    return location.pathname === path || location.pathname.startsWith(path + '/'); 
  };

  const navItems = [
    {
      path: '/secretaire',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Dashboard Icon (e.g., home or layout) */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      label: 'Dashboard'
    },
    {
      path: '/secretaire/appointments', // Example route
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Calendar/Appointments Icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Appointments'
    },
    {
      path: '/secretaire/patients', // Example route for managing patient records
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Users/Patients Icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 016-6h6a6 6 0 016 6v1h-3" />
        </svg>
      ),
      label: 'Patient Records'
    },
    {
      path: '/secretaire/messages', // Example route
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Messages/Mail Icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Messages'
    },
    {
      path: '/secretaire/tasks', // Example route
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {/* Tasks/List Icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      label: 'Tasks'
    }
    // Add more items as needed
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-20 bg-white shadow-lg flex flex-col items-center py-8 z-50">
      {/* Logo or Initial */}
      <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-10">
        S {/* For Secretaire */}
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 flex flex-col items-center space-y-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`w-12 h-12 rounded-xl flex items-center justify-center group relative transition-colors duration-200 ${
              isActive(item.path)
                ? 'text-indigo-600 bg-indigo-100'
                : 'text-gray-500 hover:text-indigo-600 hover:bg-indigo-50'
            }`}
          >
            {item.icon}
            <span className="absolute left-full ml-4 px-3 py-1.5 bg-gray-800 text-white text-xs font-medium rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out whitespace-nowrap z-50">
              {item.label}
            </span>
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      <button 
        onClick={() => { /* Add logout logic here, e.g., navigate to /login */ window.location.href = '/login'; }}
        className="w-12 h-12 mt-auto rounded-xl flex items-center justify-center text-gray-400 hover:text-red-600 hover:bg-red-100 group relative transition-colors duration-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        <span className="absolute left-full ml-4 px-3 py-1.5 bg-gray-800 text-white text-xs font-medium rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out whitespace-nowrap z-50">
          Logout
        </span>
      </button>
    </div>
  );
};

export default SecretaireSidebar; 