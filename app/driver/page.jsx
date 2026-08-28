"use client";

import React, { useState } from "react";

import HowWeWork from "../../components/HowWeWork.jsx";
import DownloadSection from "../../components/DownloadSection.jsx";
import FAQ from "../../components/FAQ.jsx";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Singh",
    stars: "★ ★ ★ ★ ★",
    text: `"Late shifts in the city used to make me cautious. FemiDo's real-time tracking feature keeps both me and my family at ease."`,
    img: "/assets/drivers/image 87.png",
  },
  {
    id: 2,
    name: "Neha Verma",
    stars: "★ ★ ★ ★ ★",
    text: `"As a freelance photographer often on the move, FemiDo keeps me connected and safe, letting me focus on my art without worry."`,
    img: "/assets/drivers/image 87.png",
  },
  {
    id: 3,
    name: "Ananya Sharma",
    stars: "★ ★ ★ ★ ★",
    text: `"Jogging late in the evening used to feel risky. FemiDo gives me peace of mind knowing I can get home safely."`,
    img: "/assets/drivers/image 87.png",
  },
];

export default function DriversPage() {
  const [activeIndex, setActiveIndex] = useState(1); // Set middle card active by default

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <div className="drivers-page">

      {/* ================= HERO ================= */}

      <section className="driver-hero">

        <div className="driver-hero-content">

          <h1>
            Drive with Confidence.
            <br />
            Earn with Freedom.
          </h1>

          <p>
            Join FemiDo's community of verified women drivers and turn
            <br className="desktop-break" />
            every journey into an opportunity to earn, grow, and
            <br className="desktop-break" />
            empower other women.
          </p>

          <button className="pink-btn">
           Become a Driver
          </button>

        </div>


        <div className="driver-hero-image">

          <img
            src="/assets/drivers/image 83.png"
            alt="FemiDo Driver"
          />

        </div>

      </section>


      {/* ================= HOW WE WORK ================= */}

      <HowWeWork />


      {/* ================= TESTIMONIALS ================= */}

      <section className="testimonial-section">

        <h2>Hear It From Our Customer</h2>

        <div className="testimonial-container">
          <div 
            className="testimonial-wrapper"
            style={{
              // Centers the active card dynamically: 50% offset - (activeIndex * (cardWidth + gap) + halfCardWidth)
              transform: `translateX(-${activeIndex * 320 + 150}px)`
            }}
          >
            {TESTIMONIALS.map((t, index) => {
              const isActive = index === activeIndex;
              return (
                <div 
                  className={`testimonial-card ${isActive ? "active" : "inactive"}`} 
                  key={t.id}
                  onClick={() => setActiveIndex(index)}
                >

                  <div className="quote">“</div>

                  <div className="testimonial-text">

                    <h3>{t.name}</h3>

                    <div className="stars">
                      {t.stars}
                    </div>

                    <p>{t.text}</p>

                  </div>

                  <div className="image-circle-wrapper">
                    <img
                      src={t.img}
                      alt={t.name}
                    />
                  </div>

                </div>
              );
            })}
          </div>
        </div>


        {/* Slider Navigation & Indicators */}
        <div className="slider-controls">
          
          <button className="nav-btn prev" onClick={handlePrev}>
            ‹
          </button>

          <div className="slider-dots">
            {TESTIMONIALS.map((_, index) => (
              <span
                key={index}
                className={activeIndex === index ? "active-pill" : "dot"}
                onClick={() => setActiveIndex(index)}
              ></span>
            ))}
          </div>

          <button className="nav-btn next" onClick={handleNext}>
            ›
          </button>

        </div>

      </section>


      {/* ================= WHY FEMIDO ================= */}

      <section className="why-section">

        <h2>Why Drive with FemiDo?</h2>

        <div className="benefits-grid">


          <div className="benefit-card">

            <div className="benefit-icon">
              <img src="assets/drivers/earning_icon.png" alt="Competitive Earnings" className="icon1" />
            </div>

            <h3>
              Competitive
              <br />
              Earnings
            </h3>

            <p>
              Earn fairly with transparent payouts for every
              completed ride.
            </p>

          </div>


          <div className="benefit-card">

            <div className="benefit-icon">
              <img src="assets/drivers/map_icon.png" alt="Women-Only Community" className="icon2" />
            </div>

            <h3>
              Women-Only
              <br />
              Community
            </h3>

            <p>
              Be part of a trusted community of verified women
              drivers and riders.
            </p>

          </div>


          <div className="benefit-card">

            <div className="benefit-icon">
              <img src="assets/drivers/hour_icon.png" alt="Flexible Working Hours" className="icon3" />
            </div>

            <h3>
              Flexible
              <br />
              Working Hours
            </h3>

            <p>
              Drive whenever it suits you and earn on your own
              schedule.
            </p>

          </div>

        </div>

      </section>


      {/* ================= FAQ ================= */}

        <FAQ />
     


      {/* ================= DOWNLOAD ================= */}

      
        <DownloadSection />
      


      {/* ================= CSS ================= */}

      <style jsx>{`

        * {
          box-sizing: border-box;
        }


        .drivers-page {
          width: 100%;
          overflow-x: hidden;
          overflow-y: visible;
          background: #fff;
          color: #202020;
          font-family: Arial, Helvetica, sans-serif;
        }


        /* ================= BUTTON ================= */

        .pink-btn {
          border: none;
          background: #ff2690;
          color: #fff;
          border-radius: 5px;
          padding: 11px 40px;
          font-size: 30px;
          cursor: pointer;
          transition: 0.2s;
        }

        .pink-btn:hover {
          background: #e91d80;
        }


        /* ================= HERO ================= */

        .driver-hero {
          position: relative;
          min-height: 515px;
          display: flex;
          align-items: center;
          padding-left: 4%;
          overflow: hidden;
          background: #fff;
        }

        .driver-hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .driver-hero h1 {
          margin: 0 0 8px;
          font-size: 38px;
          line-height: 1.05;
          font-weight: 900;
        }

        .driver-hero p {
          margin: 0 0 15px;
          font-size: 30px;
          line-height: 1.05;
          color: #333;
        }

        .driver-hero-image {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 55%;
          height: 100%;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
        }

        .driver-hero-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: right bottom;
        }


        /* ================= TESTIMONIAL ================= */

        .testimonial-section {
          padding: 50px 0;
          overflow: hidden;
          background: #fafafa;
        }

        .testimonial-section > h2 {
          text-align: center;
          font-size: 32px;
          font-weight: 700;
          margin: 0 0 5px;
          color: #111;
        }

        .testimonial-container {
          width: 100%;
          overflow: visible;
          position: relative;
          height: 320px;
          display: flex;
          align-items: center;
        }

        .testimonial-wrapper {
          display: flex;
          gap: 20px;
          transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          position: absolute;
          left: 38%; /* Position starting point exactly in the center of container */
          width: max-content; /* Prevents browser from shrinking the cards on mobile */
           padding-right: 50px;
        }

        .testimonial-card {
          flex: 0 0 430px;
          width: 430px;
          min-height: 280px;
          position: relative;
          background: #fff;
          border-radius: 16px;
          padding: 30px 25px;
           display: flex;
  align-items: center;
  justify-content: center;
          cursor: pointer;
          transition: transform 0.4s ease, opacity 0.4s ease, box-shadow 0.4s ease;
        }

        .testimonial-card.inactive {
          opacity: 0.4;
          transform: scale(0.9);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }

        .testimonial-card.active {
          opacity: 1;
          transform: scale(1.03);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
        }

        .quote {
          position: absolute;
          top: 15px;
          left: 20px;
          font-size: 40px;
          line-height: 1;
          color: #ff2690;
          font-weight: bold;
        }

        .testimonial-text {
          width: calc(100% - 70px);
          margin-top: 10px;
          left: -20px;
        }

        .testimonial-text h3 {
          font-size: 30px;
          font-weight: bold;
          margin: 0 0 3px;
          color: #1a1a1a;
        }

        .stars {
          color: #ffc400;
          font-size: 20px;
          letter-spacing: 1px;
          margin-bottom: 8px;
        }

        .testimonial-text p {
          font-size: 16px;
          line-height: 1.5;
          color: #555;
          margin: 0;
        }

        /* Profile image inside custom overlapping pink circle */
        .image-circle-wrapper {
          position: absolute;
          right: -20px;
          top: 50%;
          transform: translateY(-50%);
          width: 110px;
          height: 110px;
          background: #ff2690;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 5px 15px rgba(255, 38, 144, 0.2);
        }

        .image-circle-wrapper img {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #fff;
        }


        /* Controls: Buttons + Pill Dots */

        .slider-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-top: 40px;
        }

        .nav-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid #e0e0e0;
          background: #fff;
          color: #555;
          font-size: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          padding-bottom: 4px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }

        .nav-btn:hover {
          border-color: #ff2690;
          color: #ff2690;
        }

        .slider-dots {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .slider-dots .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #e0e0e0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .slider-dots .active-pill {
          width: 24px; /* elongated pill shape */
          height: 8px;
          border-radius: 4px;
          background: #ff2690;
          cursor: pointer;
          transition: all 0.3s ease;
        }


        /* ================= WHY ================= */

        .why-section {
          min-height: 450px;
          padding: 28px 4% 0;
        }

        .why-section > h2 {
          text-align: center;
          font-size: 41px;
          margin: 0 0 25px;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 35px;
        }

        .benefit-card {
       
          min-height: 280px;
          background: #f5f5f5;
          border-radius: 10px;
          text-align: center;
          padding: 5px 20px;
        }

        .benefit-icon {
        text-align: center;
          font-size: 38px;
          height: 38px;
          color: #555;
          
        }
          .icon1 {
           margin-left: 40%;
          }
          .icon2 {
           margin-left: 35%;
          }
          .icon3 {
           margin-left: 30%;
          }

        .benefit-card h3 {
          font-size: 35px;
          line-height: 1.05;
          margin: 75px 0 8px;
        }

        .benefit-card p {
          font-size: 18px;
          line-height: 1.4;
          bottom: -70px;
          max-width: 290px;
         margin-left: 13%;
        }


        /* ================= TABLET ================= */

        @media (max-width: 900px) {

          .driver-hero h1 {
            font-size: 25px;
          }

          .testimonial-wrapper {
            gap: 20px;
          }

        }


        /* ================= RESPONSIVE ADJUSTMENTS (MOBILE) ================= */

        @media (max-width: 600px) {

        .pink-btn {
          border: none;
          background: #ff2690;
          color: #fff;
          border-radius: 7px;
          padding: 11px 80px;
          font-size: 30px;
          cursor: pointer;
          transition: 0.2s;
          left: 40px;
        }

        .pink-btn:hover {
          background: #e91d80;
        }
          
          .desktop-break {
            display: none;
          }

          .driver-hero {
            min-height: 590px;
            padding: 35px 20px 0;
            display: block;
          }

          .driver-hero-content {
            width: 100%;
            text-align: center;
          }

          .driver-hero h1 {
            font-size: 28px;
          }

          .driver-hero p {
            font-size: 14px;
          }

          .driver-hero-image {
            width: 110%;
            height: 350px;
            bottom: 0px;
            right: 0px;
          }

          /* TESTIMONIALS FOR MOBILE */


          .testimonial-section {
            padding: 20px 0 28px;
          }

          .testimonial-section > h2 {
            font-size: 30px;
            white-space: nowrap;
            margin-bottom: 0;
          }

          .testimonial-container {
            height: 290px;
            min-height: 0;
          }

          .testimonial-wrapper {
          left: 60%;
    right: auto;
  
    gap: 8px;
          }

       
  .testimonial-card {
  flex: 0 0 280px !important;
  width: 280px !important;
  min-width: 280px !important;
  max-width: 280px !important;

  min-height: 180px;
  padding: 8px 14px;
top: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

          .testimonial-card.active {
            transform: scale(1.01);
          }

          .testimonial-text {
            width: calc(100% - 45px);
          }

          .testimonial-text h3 {
            font-size: 22px;
          }

          .stars {
            font-size: 15px;
          }

          .testimonial-text p {
            font-size: 12px;
          }

          .image-circle-wrapper,
          .image-circle-wrapper img {
            width: 75px;
            height: 75px;
          }

          .slider-controls {
            margin-top: -20px;
          }


          /* WHY */

          .why-section {
            padding: 30px 20px;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .benefit-card {
            min-height: 130px;
          }

        }

         @media (max-width: 450px) {
         

          .pink-btn {
          border: none;
          background: #ff2690;
          color: #fff;
          border-radius: 7px;
          padding: 11px 40px;
          font-size: 30px;
          cursor: pointer;
          transition: 0.2s;
          left: 40px;
        }

        .pink-btn:hover {
          background: #e91d80;
        }
          
          .desktop-break {
            display: none;
          }

          .driver-hero {
            min-height: 590px;
            padding: 35px 20px 0;
            display: block;
          }

          .driver-hero-content {
            width: 100%;
            text-align: center;
          }

          .driver-hero h1 {
            font-size: 28px;
          }

          .driver-hero p {
            font-size: 14px;
          }

          .driver-hero-image {
            width: 110%;
            height: 350px;
            bottom: 0px;
            right: 0px;
          }
         
         
         
         
         
         }

      `}</style>

    </div>
  );
}