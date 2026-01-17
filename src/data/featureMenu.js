export const featureMenu = [
  // 1️⃣ Workforce
  {
    label: "Workforce Management",
    path: "/features/workforce",
    children: [
      {
        label: "Employee Profiles",
        path: "/features/employees",
      },
      {
        label: "Roles & Permissions",
        path: "/features/roles",
        children: [
          {
            label: "Admin Roles",
            path: "/features/roles/admin",
          },
          {
            label: "Field Staff Roles",
            path: "/features/roles/field",
          },
        ],
      },
      {
        label: "Team Hierarchy",
        path: "/features/team-hierarchy",
      },
    ],
  },

  // 2️⃣ Attendance
  {
    label: "Attendance & Tracking",
    path: "/features/attendance-tracking",
    children: [
      {
        label: "Geo Attendance",
        path: "/features/attendance",
      },
      {
        label: "Live GPS Tracking",
        path: "/features/gps-tracking",
        children: [
          {
            label: "Live Map View",
            path: "/features/gps-tracking/map",
          },
          {
            label: "Location History",
            path: "/features/gps-tracking/history",
          },
        ],
      },
      {
        label: "Visit History",
        path: "/features/visit-history",
      },
    ],
  },

  // 3️⃣ Tasks
  {
    label: "Task & Operations",
    path: "/features/tasks-operations",
    children: [
      {
        label: "Task Assignment",
        path: "/features/tasks",
      },
      {
        label: "Route Planning",
        path: "/features/routes",
        children: [
          {
            label: "Optimized Routes",
            path: "/features/routes/optimized",
          },
          {
            label: "Multi-Stop Routes",
            path: "/features/routes/multi-stop",
          },
        ],
      },
      {
        label: "Daily Schedules",
        path: "/features/schedules",
      },
    ],
  },

  // 4️⃣ Reports
  {
    label: "Reports & Insights",
    path: "/features/reports-insights",
    children: [
      {
        label: "Performance Reports",
        path: "/features/reports",
      },
      {
        label: "Attendance Reports",
        path: "/features/attendance-reports",
      },
      {
        label: "Custom Dashboards",
        path: "/features/dashboards",
      },
    ],
  },

  // 5️⃣ Security
  {
    label: "Security & Admin",
    path: "/features/security-admin",
    children: [
      {
        label: "Data Security",
        path: "/features/security",
      },
      {
        label: "Audit Logs",
        path: "/features/audit-logs",
      },
      {
        label: "Access Control",
        path: "/features/access-control",
      },
    ],
  },

  // 6️⃣ NO CHILDREN (DIRECT LINKS)
  {
    label: "Mobile App",
    path: "/features/mobile-app",
  },
  {
    label: "Offline Mode",
    path: "/features/offline-mode",
  },
  {
    label: "Integrations",
    path: "/features/integrations",
  },
];
