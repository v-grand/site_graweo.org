/**
 * Routes Configuration
 * Central configuration for all routes in the application
 * Add new pages here to automatically register them
 */

import Home from '../Pages/Home';
import About from '../Pages/About';
import Donate from '../Pages/Donate';
import Reports from '../Pages/Reports';
import Contacts from '../Pages/Contacts';
import ReportDetail from '../Pages/ReportDetail';

export const ROUTES = [
  {
    path: '/',
    element: Home,
    name: 'home',
    showInNav: true,
    order: 1,
  },
  {
    path: '/about',
    element: About,
    name: 'about',
    showInNav: true,
    order: 2,
  },
  {
    path: '/reports',
    element: Reports,
    name: 'reports',
    showInNav: true,
    order: 3,
  },
  {
    path: '/reports/:id',
    element: ReportDetail,
    name: 'reportDetail',
    showInNav: false,
  },
  {
    path: '/donate',
    element: Donate,
    name: 'donate',
    showInNav: true,
    order: 4,
  },
  {
    path: '/contacts',
    element: Contacts,
    name: 'contacts',
    showInNav: true,
    order: 5,
  },
];

/**
 * Get routes that should appear in navigation
 */
export const getNavigationRoutes = () => {
  return ROUTES.filter(route => route.showInNav).sort((a, b) =>
    (a.order || 999) - (b.order || 999)
  );
};

/**
 * Get route by path
 */
export const getRouteByPath = (path) => {
  return ROUTES.find(route => route.path === path);
};
