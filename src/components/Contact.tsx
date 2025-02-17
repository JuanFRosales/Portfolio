// src/components/Contact.tsx
import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <h1>Contact me</h1>

      <a
        id="linkedin"
        href="https://fi.linkedin.com/in/juan-fernando-rosales-m%C3%A4kinen-489a9a2a4?trk=profile-badge"
        aria-label="LinkedIn"
      ></a>
      <a
        id="github"
        href="https://github.com/JuanFRosales"
        aria-label="GitHub"
      ></a>
      <a
        id="mail"
        href="mailto:makjuaa52@gmail.com"
        aria-label="Email"
      ></a>
    </section>
  );
};

export default Contact;
