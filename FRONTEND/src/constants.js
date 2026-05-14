export const ROLES = {
  ADMIN: 'Admin',
  DOCTOR: 'Doctor',
  ACCOUNTANT: 'Accountant',
  LABORATORIST: 'Laboratorist',
  NURSE: 'Nurse',
  PHARMACIST: 'Pharmacist',
  RECEPTIONIST: 'Receptionist',
  REPRESENTATIVE: 'Representative',
  CASE_MANAGER: 'Case Manager',
  PATIENT: 'Patient'
};

export const MODULES = [
  { id: 'dashboard', name: 'Dashboard', icon: 'LayoutDashboard', roles: Object.values(ROLES) },
  { id: 'org_mgmt', name: 'Organization & Facility', icon: 'Building2', roles: [ROLES.ADMIN] },
  { id: 'people_mgmt', name: 'People & Identity', icon: 'UserCircle', roles: [ROLES.ADMIN, ROLES.RECEPTIONIST] },
  { id: 'bed_mgmt', name: 'Rooms & Beds', icon: 'Bed', roles: [ROLES.ADMIN, ROLES.NURSE] },
  { id: 'appointments', name: 'Appointments', icon: 'CalendarDays', roles: [ROLES.ADMIN, ROLES.DOCTOR, ROLES.RECEPTIONIST, ROLES.PATIENT] },
  { id: 'emr', name: 'EMR / Clinical', icon: 'FileText', roles: [ROLES.ADMIN, ROLES.DOCTOR, ROLES.NURSE] },
  { id: 'patients', name: 'Patients', icon: 'Users', roles: [ROLES.ADMIN, ROLES.DOCTOR, ROLES.NURSE, ROLES.RECEPTIONIST] },
  { id: 'billing', name: 'Billing', icon: 'CreditCard', roles: [ROLES.ADMIN, ROLES.ACCOUNTANT, ROLES.RECEPTIONIST] },
  { id: 'laboratory', name: 'Laboratory', icon: 'FlaskConical', roles: [ROLES.ADMIN, ROLES.LABORATORIST, ROLES.DOCTOR] },
  { id: 'pharmacy', name: 'Pharmacy', icon: 'Pill', roles: [ROLES.ADMIN, ROLES.PHARMACIST, ROLES.DOCTOR] },
  { id: 'cases', name: 'Case Management', icon: 'Briefcase', roles: [ROLES.ADMIN, ROLES.CASE_MANAGER] },
  { id: 'reception', name: 'Reception', icon: 'Phone', roles: [ROLES.ADMIN, ROLES.RECEPTIONIST] },
  { id: 'representative', name: 'Representative', icon: 'UserCircle', roles: [ROLES.ADMIN, ROLES.REPRESENTATIVE] },
  { id: 'insurance', name: 'Insurance & TPA', icon: 'ShieldCheck', roles: [ROLES.ADMIN, ROLES.ACCOUNTANT, ROLES.CASE_MANAGER] },
  { id: 'inventory', name: 'Inventory & Supplies', icon: 'Package', roles: [ROLES.ADMIN, ROLES.ACCOUNTANT] },
  { id: 'communication', name: 'Communication', icon: 'MessageSquare', roles: Object.values(ROLES) },
  { id: 'ai_automation', name: 'AI & Automation', icon: 'Brain', roles: [ROLES.ADMIN, ROLES.DOCTOR, ROLES.CASE_MANAGER] },
  { id: 'reports', name: 'Reports & Analytics', icon: 'BarChart3', roles: [ROLES.ADMIN, ROLES.FINANCE, ROLES.C_SUITE] },
  { id: 'patient_portal', name: 'Patient Portal', icon: 'User', roles: [ROLES.ADMIN, ROLES.PATIENT] },
];
