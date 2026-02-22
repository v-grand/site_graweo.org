import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import './styles/index.css';

// Import route configuration
import { ROUTES } from './config/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Dynamically generate routes from configuration
const RouteElements = ROUTES.map((route) => (
  <Route key={route.path} path={route.path} element={<route.element />} />
));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          {RouteElements}
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
