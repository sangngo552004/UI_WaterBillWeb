import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicRoutes from './routes/PublicRoutes';
import UserRoutes from './routes/UserRoutes';
import AdminRoutes from './routes/AdminRoutes';
import './styles/App.css';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoutes  from './routes/ProtectedRoutes';

const App = () => {
  return (
    <AuthProvider>
        <Router>
          <Routes>
            <Route path="/*" element={<PublicRoutes  />} />
            <Route path="/user/*" element={<UserRoutes />} />
            {/* <Route element={<ProtectedRoutes  requiredRole="USER"  />}>
            <Route path="/user/*" element={<UserRoutes />} />
            </Route> */}
            <Route path="/admin/*" element={<AdminRoutes />} />
            {/* <Route element={<ProtectedRoutes  requiredRole="ADMIN" isAdminRoute={true} />}>
            <Route path="/admin/*" element={<AdminRoutes />} />
            </Route> */}
          
          </Routes>
        </Router>
    </AuthProvider>
  );
};

export default App;
