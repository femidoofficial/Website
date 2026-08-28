import React from "react";


const WomenSection = () => {
  return (
    <section id="about" className="women-section">
      <div className="women-content">
        <h2>By Women, For Women.</h2>

        <p>
          FemiDo isn't just a ride service—it's a movement creating safe urban
          mobility for riders while financial independence for women captains
          across Indore.
        </p>

        <a href="#" className="women-btn">
          Read More
        </a>
      </div>

      <div className="women-image-container">
        <img
          src="/assets/drivers/image 91.png"
          alt="Women of FemiDo"
          className="women-image"
        />
      </div>
    </section>
  );
};

export default WomenSection;