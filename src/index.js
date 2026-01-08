import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Layout from './Components/Layout';
import './index.css';

// Import your page components
import Home from './Pages/Home';
import About from './Pages/About';
import Donate from './Pages/Donate';
import Reports from './Pages/Reports';
import Contacts from './Pages/Contacts';
import ReportDetail from './Pages/ReportDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/Reports" element={<Reports />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/ReportDetail" element={<ReportDetail />} />
          <Route path="/" element={<Home />} /> {/* Default route */}
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
