import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Einri Living - Main Entry Point
 * 
 * Developed by: KSSAITEJA
 * Designer: KSSAITEJA
 * 
 * Redirects to the main Einri Living website
 */

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the main Einri Living page
    navigate('/einri-living', { replace: true });
  }, [navigate]);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: '#333', marginBottom: '20px' }}>Einri Living</h1>
        <p style={{ color: '#666' }}>Redirecting to our main website...</p>
        <div style={{ 
          width: '40px', 
          height: '40px', 
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #689213',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '20px auto'
        }}></div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  );
}

export default Home;