import React from 'react';

const App = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#f0f0f0',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1 style={{ color: '#333', marginBottom: '20px' }}>
          BazzarNet - Test Version
        </h1>
        <p style={{ color: '#666', fontSize: '18px' }}>
          If you can see this, the React app is working!
        </p>
        <div style={{ 
          marginTop: '20px', 
          padding: '10px', 
          backgroundColor: '#e8f5e8', 
          borderRadius: '5px',
          border: '1px solid #4caf50'
        }}>
          <p style={{ color: '#2e7d32', margin: 0 }}>
            ✅ React is rendering successfully
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;