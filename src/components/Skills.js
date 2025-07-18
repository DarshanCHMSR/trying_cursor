import React from 'react';

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-3">
          <div className="card">
            <h3>Frontend</h3>
            <p>React, JavaScript, HTML5, CSS3</p>
          </div>
          <div className="card">
            <h3>Backend</h3>
            <p>Node.js, Express, MongoDB</p>
          </div>
          <div className="card">
            <h3>Tools</h3>
            <p>Git, Docker, AWS, Figma</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;