import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'; // Layout component for persistent Sidebar and Topbar
import ManageSession from './pages/ManageSession';
import Students from './pages/Students';
import AcademicSyllabus from './pages/AcademicSyllabus';
import Teachers from './pages/Teachers';
import Parents from './pages/Parents';
import Librarians from './pages/Librarians';
import ManageAlumni from './pages/ManageAlumni';
import ManageMedia from './pages/ManageMedia';
import AllEnquiries from './pages/AllEnquiries';
import ManageLoan from './pages/ManageLoan';
import EnquiryCategory from './pages/EnquiryCategory';
import Accountants from './pages/Accountants';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <Router>
      <Routes>
        {/* Use Layout for all routes to maintain Sidebar and Topbar */}
        <Route path="/" element={<Layout />}>
          {/* Make ManageSession the default route */}
          <Route index element={<Dashboard />} />
          <Route path="manage-session" element={<ManageSession />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="academic-syllabus" element={<AcademicSyllabus />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="parents" element={<Parents />} />
          <Route path="librarians" element={<Librarians />} />
          <Route path="manage-alumni" element={<ManageAlumni />} />
          <Route path="manage-media" element={<ManageMedia />} />
          <Route path="all-enquiries" element={<AllEnquiries />} />
          <Route path="manage-loan" element={<ManageLoan />} />
          <Route path="enquiry-category" element={<EnquiryCategory />} />
          <Route path="accountants" element={<Accountants />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
