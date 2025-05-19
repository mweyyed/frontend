import React from 'react';
import AdminSidebar from '../../components/sidebars/AdminSidebar';

export default function PermissionCreatePage({ user }) {
  if (user.role !== 'admin') {
    return <div>Access Denied</div>;
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#f5f7ff] to-[#f1f1fb]">
      <AdminSidebar />
      <div className="flex-1 ml-20 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Permission</h1>
            <p className="text-gray-500">Define a new permission for the system</p>
          </div>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Permission Name <span className="text-red-500">*</span></label>
              <input type="text" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter permission name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description <span className="text-red-500">*</span></label>
              <textarea required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Describe this permission..." rows={3} />
            </div>
            <div className="pt-4 text-right">
              <button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors">Create Permission</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 