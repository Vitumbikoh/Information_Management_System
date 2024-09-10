// src/components/Sidebar.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserGraduate } from '@fortawesome/free-solid-svg-icons'; // Import faUserGraduate
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold uppercase">
          {/* Add the student/graduate icon */}
          <FontAwesomeIcon icon={faUserGraduate} size="2x" />
        </h2>
        <FontAwesomeIcon icon={faBars} size="2x" /> {/* Menu icon */}
      </div>
      <ul className="space-y-4">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/manage-session">Manage Session</Link></li>
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/academic-syllabus">Academic Syllabus</Link></li>
        <li><Link to="/teachers">Teachers</Link></li>
        <li><Link to="/parents">Parents</Link></li>
        <li><Link to="/librarians">Librarians</Link></li>
        <li><Link to="/manage-alumni">Manage Alumni</Link></li>
        <li><Link to="/manage-media">Manage Media</Link></li>
        <li><Link to="/all-enquiries">All Enquiries</Link></li>
        <li><Link to="/manage-loan">Manage Loan</Link></li>
        <li><Link to="/enquiry-category">Enquiry Category</Link></li>
        <li><Link to="/accountants">Accountants</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
