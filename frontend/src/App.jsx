import React from 'react';
import StudentList from './components/StudentList';

function App() {
  return (
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
  );
}

export default App;
