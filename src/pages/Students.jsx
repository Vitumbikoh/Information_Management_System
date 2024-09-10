// src/components/Students.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

function Students() {
  // Mock Data for Students (replace with real data later)
  const studentData = [
    {
      id: 'S001',
      name: 'John Doe',
      class: 'Grade 10',
      email: 'john@example.com',
      phone: '123-456-7890',
    },
    {
      id: 'S002',
      name: 'Jane Smith',
      class: 'Grade 12',
      email: 'jane@example.com',
      phone: '987-654-3210',
    },
    {
      id: 'S003',
      name: 'Mark Johnson',
      class: 'Grade 11',
      email: 'mark@example.com',
      phone: '456-789-0123',
    },
    // Add more mock students as needed
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Header with Student Icon */}
      <div className="flex items-center mb-4">
        <FontAwesomeIcon icon={faUserGraduate} size="2x" className="text-blue-500 mr-2" />
        <h2 className="text-2xl font-bold">Students</h2>
      </div>

      <p className="text-gray-600">
        Welcome to the student management section. Here you can manage student data and access details of enrolled students.
      </p>

      {/* Table for Student Listing */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Class</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Phone</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((student) => (
              <tr key={student.id}>
                <td className="border px-4 py-2">{student.id}</td>
                <td className="border px-4 py-2">{student.name}</td>
                <td className="border px-4 py-2">{student.class}</td>
                <td className="border px-4 py-2">{student.email}</td>
                <td className="border px-4 py-2">{student.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Students;



