import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('StudentList: Début de la requête API');
    
    // Utiliser directement l'URL de l'API Django
    axios.get('http://localhost:8000/api/students/')
      .then(res => {
        console.log('StudentList: Réponse API reçue:', res.data);
        setStudents(res.data.results || res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('StudentList: Erreur API:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div style={{ 
      textAlign: 'center', 
      padding: '2rem',
      color: '#666'
    }}>
      <div style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>⏳</div>
      Chargement des étudiants...
    </div>
  );
  
  if (error) return (
    <div style={{ 
      textAlign: 'center', 
      padding: '2rem',
      color: '#d32f2f',
      backgroundColor: '#ffebee',
      borderRadius: '8px',
      border: '1px solid #ffcdd2'
    }}>
      <div style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>❌</div>
      Erreur: {error}
    </div>
  );

  return (
    <div>
      <h2 style={{ 
        color: '#1976d2',
        marginBottom: '1.5rem',
        borderBottom: '2px solid #e3f2fd',
        paddingBottom: '0.5rem'
      }}>
        📚 Liste des étudiants ({students.length})
      </h2>
      
      {students.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '2rem',
          color: '#666',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px'
        }}>
          <div style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>📝</div>
          Aucun étudiant trouvé
        </div>
      ) : (
        <div style={{ 
          display: 'grid',
          gap: '1rem'
        }}>
          {students.map(student => (
            <div key={student.id} style={{
              backgroundColor: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              padding: '1rem',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <h3 style={{ 
                    margin: '0 0 0.5rem 0',
                    color: '#333',
                    fontSize: '1.1rem'
                  }}>
                    👤 {student.name}
                  </h3>
                  <p style={{ 
                    margin: '0.25rem 0',
                    color: '#666',
                    fontSize: '0.9rem'
                  }}>
                    📧 {student.email}
                  </p>
                </div>
                <div style={{
                  backgroundColor: '#e3f2fd',
                  color: '#1976d2',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold'
                }}>
                  {student.age} ans
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 