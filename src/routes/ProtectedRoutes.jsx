import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute =  (requiredRole , isAdminRoute = false) => {
  const { isAuthenticated, hasRole } = useAuth();

  if (!isAuthenticated || (requiredRole && !hasRole(requiredRole))) {
    return <Navigate to={isAdminRoute ? "/admin/dang-nhap" : "/dang-nhap"} replace />;
  }

  return  (
    <Outlet />
  ) 
};

export default ProtectedRoute;