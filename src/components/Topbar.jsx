import React from 'react';

function Topbar() {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;

  return (
    <div className="bg-white shadow-md p-4">
      {/* Title on the top row */}
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold">RUSESCO SCHOOL MANAGEMENT SYSTEM</h1>
      </div>

      {/* Rest of the content in the second row */}
      <div className="flex justify-between items-center">
        <div>
          <span className="text-red-500 font-bold">Academic Year: </span>
          <span>{`${currentYear}-${nextYear}`}</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-green-500 text-white px-4 py-1 rounded">Admin</button>
          <button className="bg-red-500 text-white px-4 py-1 rounded">Log Out</button>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
