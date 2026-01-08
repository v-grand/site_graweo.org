import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../Layout'; // Assuming Layout.js is at the project root
import './index.css'; // We will create this file next

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        {/* This is a placeholder for your actual routes.
            For now, a simple message to make the build pass.
            You'll need to add your <Routes> and <Route> components here later.
        */}
        <div className="p-8 text-center text-xl text-gray-700">
          Loading application...
        </div>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
