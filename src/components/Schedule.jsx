import React from 'react';

function Schedule() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-gray-700 text-lg mb-4">Event Schedule</h3>
      <div className="grid grid-cols-3 gap-2">
        <p className="font-bold">June 2018</p>
        <button className="bg-gray-300 p-2 rounded">Today</button>
        <button className="bg-gray-300 p-2 rounded">Next</button>
      </div>
    </div>
  );
}

export default Schedule;
