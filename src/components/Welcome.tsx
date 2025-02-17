import React, { useState } from "react";

// React functional component
const Welcome: React.FC = () => {
  // State to handle modal visibility
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  // Function to open the modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="welcome">
      <h1>Welcome to my page.</h1>

     
          <a className="button" onClick={openModal}>
            Ask Ai about me
          </a>

      {/* Modal for video */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              ×
            </button>
            <video
              controls
              autoPlay
              width="100%"
              height="auto"
              src="/video/me.mp4"
            ></video>
          </div>
        </div>
      )}
    </section>
  );
};

export default Welcome;
