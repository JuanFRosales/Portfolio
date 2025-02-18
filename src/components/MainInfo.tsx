import React from "react";

const MainInfo: React.FC = () => {
  return (
    <section id="mainInfo">
    <img src="/image.png" alt="Me" id="profile" />
      <div>
        <h1>Juan Rosales</h1>
        <p>Software development student</p>
      </div>

      <h2>About me</h2>
      <p>Hi I'm a third year software development student at Metropolia University of applied sciences. I'm looking for an internship to further develop my skills.</p>

      <h2>Skills</h2>
      <div id="skills">
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript/TypeScript</li>
          <li>Python</li>
        </ul>
        <ul>
          <li>React/Native</li>
          <li>Node.js</li>
          <li>SQL</li>
          <li>MongoDb</li>
        </ul>
        <ul>
          <li>Figma</li>
          <li>Photoshop</li>
          <li>Illustrator</li>
          <li>After Effects</li>
        </ul>
        <ul>
          <li>Docker</li>
          <li>Azure</li>
          <li>OpenCV</li>
          <li>Git</li>
        </ul>

      </div>
    </section>
  );
}

export default MainInfo;
