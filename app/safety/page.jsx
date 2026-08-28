import React from "react";

import Womens from "../../components/Womens.jsx";
export default function SafetyPage() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: Arial, Helvetica, sans-serif;
          color: #1d1d1f;
          background: #fff;
        }

        .safety-page {
          width: 100%;
          overflow: hidden;
          background: #fff;
        }

        /* ================= HERO ================= */

        .safety-hero {
          width: 100%;
          min-height: 620px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 3.9% 0 4%;
          gap: 24px;
        }

        .hero-content {
          width: 47%;
          max-width: 610px;
          position: relative;
          z-index: 2;
        }

        .hero-content h1 {
          margin: 0 0 18px;
          font-size: clamp(42px, 4.5vw, 66px);
          line-height: 1.05;
          font-weight: 700;
          letter-spacing: -2px;
        }

        .hero-content p {
          margin: 0;
          max-width: 530px;
          font-size: 18px;
          line-height: 1.5;
          color: #303030;
        }

        .hero-image-wrapper {
  width: min(54vw, 760px);
  height: 600px;              /* visible height */
  min-width: 620px;
  min-height: 0;              /* important */
  flex: 0 0 auto;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 42px -116px 0 0;
  overflow: hidden;           /* cuts anything below */
}

.hero-image-wrapper::before {
  content: "";
  position: absolute;
  width: min(54vw, 760px);
  height: min(54vw, 760px);
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border: 17px solid #ff2690;
  border-radius: 50%;
  z-index: 0;
}

.hero-image {
  position: relative;
  z-index: 1;
  width: calc(min(54vw, 760px) - 28px);
  height: calc(min(54vw, 760px) - 28px);
  object-fit: cover;
  object-position: center top;
  border-radius: 50%;
  top: 16px;
  left: 1px;
}

        /* ================= SECTION TITLE ================= */

        .section-title {
          text-align: center;
          margin: 30px auto 45px;
          padding: 0 20px;
        }

        .section-title h2 {
          margin: 0;
          font-size: clamp(30px, 3vw, 48px);
          line-height: 1.2;
          font-weight: 700;
        }

        /* ================= FEATURES ================= */

        .safety-features {
          width: 100%;
          padding: 0 4%;
        }

        .features-grid {
          max-width: 1250px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 85px;
        }

        .feature-card {
          text-align: center;
        }

        .feature-image {
          width: 100%;
          height: 250px;
          display: block;
          object-fit: contain;
          border-radius: 15px;
          background: #f5f5f5;
        }

        .feature-card h3 {
          margin: 22px 0 8px;
          font-size: 28px;
          line-height: 1.2;
        }

        .feature-card p {
          margin: 0 auto;
          max-width: 330px;
          font-size: 18px;
          line-height: 1.45;
          color: #333;
        }

        /* ================= WOMEN ================= */

       

        /* ================= FINAL SECTION ================= */

        .safe-section {
          max-width: 1250px;
          margin: 70px auto 0;
          padding: 0 4% 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 70px;
        }

        .safe-content {
          width: 43%;
        }

        .safe-content h2 {
          margin: 0 0 15px;
          font-size: clamp(32px, 3vw, 46px);
          line-height: 1.15;
        }

        .safe-content p {
          margin: 0;
          font-size: 18px;
          line-height: 1.5;
          color: #333;
        }

        
       

        .safe-image {
          width: 200%;
          height: 380px;
          object-fit: contain;
          border-radius: 20px;
          background: #f5f5f5;
          display: block;
        }

        /* ================= TABLET ================= */

        @media (max-width: 900px) {

          .safety-hero {
            min-height: auto;
            padding-top: 50px;
            flex-direction: column;
            text-align: center;
          }

          .hero-content {
            width: 100%;
            max-width: 700px;
          }

          .hero-content p {
            margin: auto;
          }

          .hero-image-wrapper {
            width: 100%;
            height: 400px;
            justify-content: center;
          }

          .hero-image-wrapper::before {
            right: 50%;
            transform: translateX(50%);
            width: 390px;
            height: 390px;
          }

          .features-grid {
            gap: 25px;
          }

          .feature-image {
            height: 210px;
          }

          .feature-card h3 {
            font-size: 24px;
          }

          .safe-section {
            gap: 35px;
          }
        }

        /* ================= MOBILE ================= */

        @media (max-width: 600px) {
 .safety-hero {
    width: 100%;
    min-height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 20px 0;
    gap: 0;
    overflow: visible;
  }

  .hero-content {
    order: 1;
    width: 100%;
    max-width: 400px;
    text-align: center;
    z-index: 2;
  }

  .hero-content h1 {
    font-size: 40px;
    line-height: 1.05;
    letter-spacing: -1px;
    margin-bottom: 10px;
  }

  .hero-content p {
    font-size: 16px;
    line-height: 1.5;
    max-width: 390px;
    margin: 0 auto;
  }

  .hero-image-wrapper {
    order: 2;
    position: relative;
    width: calc(100% + 40px);
    height: 460px;
    min-width: 0;
    margin: 0 -20px;
    left: 0;
    overflow: hidden;
    z-index: 2;
  }

  .hero-image-wrapper::before {
    width: 145vw;
    height: 145vw;
      max-width: 572px;
    max-height: 572px;
    border-width: 25px;
    top: 0;
    left: 50%;
    transform: translateX(-49.5%);
    clip-path: inset(0 0 50% 0);
  }

  .hero-image {
    width: 145vw;
    height: 145vw;
     max-width: 600px;
    max-height: 600px;
    
    top: -20px;
    left: 50%;
    transform: translateX(-34%) scale(0.90);
    border-radius: 50%;
    object-fit: contain;
    object-position: center top;
    z-index: 2;
  }

          .section-title {
            margin: 35px auto 30px;
          }

          .section-title h2 {
            font-size: 30px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .feature-image {
            height: auto;
            min-height: 230px;
          }

          .feature-card h3 {
            margin-top: 15px;
            font-size: 25px;
          }

          .feature-card p {
            font-size: 16px;
          }

         

          .safe-section {
            margin-top: 50px;
            padding: 0 20px 50px;
            flex-direction: column;
            gap: 35px;
            text-align: center;
          }

          .safe-content {
            width: 100%;
          }

          .safe-content h2 {
            font-size: 32px;
          }

          .safe-content p {
            font-size: 16px;
          }

          .safe-image-wrapper {
            width: 100%;
          }

          .safe-image {
            height: auto;
            min-height: 260px;
          }
        }

        @media (min-width: 430px) and (max-width: 450px) {
  .hero-image-wrapper {
 transform: translateX(-34%) scale(0.90);
 
    transform: translateY(12px);
  }

  .hero-image {
  
left: 47%;

  }

}

  


      `}</style>

      <main className="safety-page">

        {/* HERO */}
        <section className="safety-hero">

          <div className="hero-content">
            <h1>
              Your safety,
              <br />
              always a priority.
            </h1>

            <p>
              From the moment you book your ride to the moment you
              reach your destination, we've built safety into every
              step of your journey.
            </p>
          </div>

          <div className="hero-image-wrapper">
            <img
              src="/assets/safety/image 56.png"
              alt="Woman driver"
              className="hero-image"
            />
          </div>

        </section>


        {/* DESIGNED WITH SAFETY */}
        <section className="safety-features">

          <div className="section-title">
            <h2>Designed with Your Safety in Mind</h2>
          </div>

          <div className="features-grid">

            <div className="feature-card">
              <img
                src="/assets/safety/image 61.png"
                alt="One-Tap SOS Help"
                className="feature-image"
              />

              <h3>One-Tap SOS Help</h3>

              <p>
                One-tap access to assistance teams anytime,
                anywhere.
              </p>
            </div>


            <div className="feature-card">
              <img
                src="/assets/safety/image 65.png"
                alt="Live GPS Share"
                className="feature-image"
              />

              <h3>Live GPS Share</h3>

              <p>
                Share your exact route so family can follow
                your trip.
              </p>
            </div>


            <div className="feature-card">
              <img
                src="/assets/safety/image 66.png"
                alt="24/7 Support"
                className="feature-image"
              />

              <h3>24/7 Support</h3>

              <p>
                Share your real-time route with family instantly.
              </p>
            </div>

          </div>

        </section>



        <Womens />

        {/* BY WOMEN FOR WOMEN */}
        {/* <section className="women-section">

          <h2>By Women, For Women.</h2>

          <p>
            FemiDo isn't just a ride service—it's a movement
            creating safe urban mobility for riders while
            financial independence for women captains across
            Indore.
          </p>

          <img
            src="/images/women-team.png"
            alt="Women team"
            className="women-image"
          />

        </section> */}


        {/* SAFE FOR EVERY WOMAN */}
        <section className="safe-section">

          <div className="safe-content">

            <h2>Safe for Every Woman</h2>

            <p>
              Whether you're earning behind the wheel or heading
              to your destination, your safety comes first. Every
              driver is verified, creating a trusted women-only
              community where every trip starts with confidence.
            </p>

          </div>

          <div className="safe-image-wrapper">

            <img
              src="/assets/safety/image 68 (1).png"
              alt="Safe for every woman"
              className="safe-image"
            />

          </div>

        </section>

      </main>
    </>
  );
}