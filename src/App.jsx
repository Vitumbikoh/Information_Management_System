import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import ManageSession from "./pages/ManageSession";
import Students from "./pages/Students";
import AcademicSyllabus from "./pages/AcademicSyllabus";
import Teachers from "./pages/Teachers";
import Parents from "./pages/Parents";
import Librarians from "./pages/Librarians";
import ManageAlumni from "./pages/ManageAlumni";
import ManageMedia from "./pages/ManageMedia";
import AllEnquiries from "./pages/AllEnquiries";
import ManageLoan from "./pages/ManageLoan";
import EnquiryCategory from "./pages/EnquiryCategory";
import Accountants from "./pages/Accountants";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/manage-session" element={<ManageSession />} />
        <Route path="/students" element={<Students />} />
        <Route path="/academic-syllabus" element={<AcademicSyllabus />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/parents" element={<Parents />} />
        <Route path="/librarians" element={<Librarians />} />
        <Route path="/manage-alumni" element={<ManageAlumni />} />
        <Route path="/manage-media" element={<ManageMedia />} />
        <Route path="/all-enquiries" element={<AllEnquiries />} />
        <Route path="/manage-loan" element={<ManageLoan />} />
        <Route path="/enquiry-category" element={<EnquiryCategory />} />
        <Route path="/accountants" element={<Accountants />} />
      </Routes>
    </Router>
  );
}

export default App;
