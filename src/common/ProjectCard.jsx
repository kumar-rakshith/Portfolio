import React from 'react';

function ProjectCard({ src, link, h3, p }) {
  return (
    <a href={link} target="_blank" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginTop:'100px' }}>
      <img className="hover" src={src} alt={`${h3} logo`} style={{ maxWidth: '40%' }} />
      <h3 style={{ marginTop: '10px' }}>{h3}</h3>
      <p style={{ marginTop: '5px', marginBottom: '10px', marginLeft:'100px', textAlign:'justify',marginRight:'100px' }}>{p}</p>
    </a>
  );
}

export default ProjectCard;
