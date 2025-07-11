import React from 'react';
import StudentList from './components/StudentList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from "./pages/Login";
import {Dashboard} from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <>
      <div style={{
        maxWidth: 800,
        margin: '2rem auto',
        fontFamily: 'Arial, sans-serif',
        padding: '0 20px'
      }}>
        <h1 style={{
          textAlign: 'center',
          color: '#333',
          marginBottom: '2rem'
        }}>
          🏫 Gestion d'école
        </h1>

        <StudentList />
      </div>

      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
