// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-grow">
        <Sidebar /> {/* Sidebar always visible */}
        <div className="flex-1 bg-gray-100 p-1 overflow-y-auto">
          
      <Topbar /> {/* Topbar always visible */}
          <Outlet /> {/* This will render the specific content based on the route */}
        </div>
      </div>
      <Footer /> {/* Footer always visible */}
    </div>
  );
};

export default Layout;
