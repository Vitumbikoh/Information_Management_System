// components/Schedule.js
import React from 'react';

function Schedule() {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Event Schedule</h3>
      <ul>
        <li className="mb-2">
          <strong>June 1, 2024:</strong> Teachers' Meeting
        </li>
        <li className="mb-2">
          <strong>June 15, 2024:</strong> Parent-Teacher Conference
        </li>
        <li className="mb-2">
          <strong>June 30, 2024:</strong> End of Term
        </li>
      </ul>
    </div>
  );
}

export default Schedule;
