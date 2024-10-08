import React, { useState, useEffect } from 'react';

function ProjectCard({ src, link, h3, p }) {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    
    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const containerStyle = {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '100px',
  };

  const imgStyle = {
    maxWidth: '40%',
  };

  const pStyle = {
    marginTop: '5px',
    marginBottom: '10px',
    marginLeft: isSmallScreen ? '20px' : '100px',
    marginRight: isSmallScreen ? '20px' : '100px',
    textAlign: 'justify',
  };

  return (
    <a href={link} target="_blank" style={containerStyle}>
      <img className="hover" src={src} alt={`${h3} logo`} style={imgStyle} />
      <h3 style={{ marginTop: '10px' }}>{h3}</h3>
      <p style={pStyle}>{p}</p>
    </a>
  );
}

export default ProjectCard;
