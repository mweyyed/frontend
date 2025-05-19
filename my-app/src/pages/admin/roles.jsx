import React from 'react';
import AdminSidebar from '../../components/sidebars/AdminSidebar';

const permissionsList = [
  'consulter_dossier_patient',
  'créer_dossier_patient',
  'écrire_dossier_patient',
  'consulter_anonyme_dossier_patient',
  'consulter_rapport_d\'urgence',
  'écrire_rapport_d\'urgence',
  'créer_rôles',
  'supprimer_rôles',
  'attribuer_rôles',
  'retirer_rôles',
  'créer_permissions',
  'supprimer_permissions',
  'attribuer_permissions',
  'retirer_permissions',
  'créer_nouveau_utilisateur',
];

export default function RoleCreatePage({ user }) {
  if (user.role !== 'admin') {
    return <div>Access Denied</div>;
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#f5f7ff] to-[#f1f1fb]">
      <AdminSidebar />
      <div className="flex-1 ml-20 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Role</h1>
            <p className="text-gray-500">Define a new role and assign permissions</p>
          </div>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role Name <span className="text-red-500">*</span></label>
              <input type="text" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter role name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description <span className="text-red-500">*</span></label>
              <textarea required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Describe this role..." rows={3} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Permissions</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {permissionsList.map((perm) => (
                  <label key={perm} className="flex items-center gap-2 text-gray-700">
                    <input type="checkbox" value={perm} className="accent-indigo-600" />
                    {perm}
                  </label>
                ))}
              </div>
            </div>
            <div className="pt-4 text-right">
              <button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors">Create Role</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}