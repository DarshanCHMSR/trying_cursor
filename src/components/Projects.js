import React from 'react';

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="grid grid-2">
          <div className="card">
            <h3>Project 1</h3>
            <p>Project description and technologies used.</p>
          </div>
          <div className="card">
            <h3>Project 2</h3>
            <p>Project description and technologies used.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;