// components/DashboardCard.js
import React from 'react';

function DashboardCard({ title, value, icon, bgColor }) {
  return (
    <div className={`p-4 ${bgColor} rounded-lg shadow-lg`}>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-white text-lg font-semibold">{title}</h3>
          <p className="text-white text-2xl">{value}</p>
        </div>
        <div className="text-white text-4xl">{icon}</div>
      </div>
    </div>
  );
}

export default DashboardCard;
