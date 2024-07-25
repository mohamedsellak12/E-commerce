// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const authToken = localStorage.getItem('auth_token');
  
  if (!authToken) {
    // Redirect to login if not authenticated
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
