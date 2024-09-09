// Dashboard.jsx
import React from 'react';
import Sidebar from './Sidebar'; // Corrected import path
import Topbar from './Topbar'; // Corrected import path
import DashboardCard from './DashboardCard'; // Corrected import path
import Schedule from './Schedule';
import Chart from './Chart';

const Dashboard = () => {
  const stats = [
    { title: 'Student', description: 'Total students', color: 'red' },
    { title: 'Teacher', description: 'Total teachers', color: 'green' },
    { title: 'Parent', description: 'Total parents', color: 'blue' },
    { title: 'Librarian', description: 'Total librarians', color: 'gray' },
    { title: 'Accountants', description: 'Total accountants', color: 'orange' },
    { title: 'All Enquiries', description: 'Total enquiries', color: 'red' },
    { title: 'All Messages', description: 'Total messages', color: 'green' },
    { title: 'Attendance', description: 'Total present today', color: 'blue' },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar /> {/* Sidebar Component */}
      <div className="flex-1 bg-gray-100">
        <Topbar /> {/* Topbar Component */}
        <div className="p-4 grid grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <DashboardCard
              key={index}
              title={stat.title}
              description={stat.description}
              color={stat.color}
            />
          ))}
        </div>
        <div className="p-4 grid grid-cols-2 gap-4">
          <Schedule /> {/* Schedule Component */}
          <Chart /> {/* Chart Component */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
