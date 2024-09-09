// DashboardCard.jsx
import React from 'react';

const DashboardCard = ({ title, description, color }) => {
  // Map color names to actual Tailwind CSS color classes
  const colorClasses = {
    red: "bg-red-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    yellow: "bg-yellow-500",
    orange: "bg-orange-500",
    cyan: "bg-cyan-500",
    indigo: "bg-indigo-500",
    gray: "bg-gray-500",
  };

  return (
    <div className={`${colorClasses[color]} text-white p-6 rounded-md shadow-md text-center`}>
      <h3 className="text-lg font-bold capitalize">{title}</h3>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default DashboardCard;
