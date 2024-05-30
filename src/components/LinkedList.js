import React from 'react';
import './styles.css';

const LinkedList = () => {
  return (
    <section id="partners" className="partners-section">
      <div className="partners-container">

        <div className="partners-content">
          <div className="partners-header">
            <h1>Наши Партнеры</h1>
          </div>
          <div className="partners-images">
            <img
              className="partner-image"
              loading="lazy"
              alt="andys"
              src="/ascara.jpg"
            />
            <img
              className="partner-image"
              loading="lazy"
              alt="kodeson"
              src="/kodeson.jfif"
            />
            <img
              className="partner-image"
              loading="lazy"
              alt="ascara"
              src="/ascara.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedList;
