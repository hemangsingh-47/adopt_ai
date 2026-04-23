import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <div style={{ padding: '4rem', textAlign: 'center' }}>
              <h1>Dashboard</h1>
              <p>Welcome! You are authenticated.</p>
            </div>
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<div style={{ padding: '4rem', textAlign: 'center' }}>404 Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
