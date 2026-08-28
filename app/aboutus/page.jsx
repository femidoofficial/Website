"use client";

import { useState } from "react";
import DownloadSection from "../../components/DownloadSection.jsx";

export default function AboutPage() {
  const [selectedVision, setSelectedVision] = useState(0);

  return (
    <>
      <div className="about-page">

        {/* =========================================================
            1. HERO SECTION
        ========================================================= */}
        <section className="about-hero-section">
          <div className="about-hero-container">

            {/* Left: Text Content */}
            <div className="about-hero-content">
              <h1 className="about-hero-title">
                Redefining Safe
                <br />
                Travel for Women
              </h1>

              <p className="about-hero-description">
                FemiDo is building a trusted ride community where women can
                travel and drive with confidence. Through verified drivers,
                safety-first technology, and a women-only ecosystem, we're
                making every journey more secure, comfortable, and empowering.
              </p>
            </div>

            {/* Right: Image */}
            <div className="about-hero-image-wrapper">
              <img
                src="/assets/about/women.png"
                alt="Woman driving with FemiDo"
                className="about-hero-image"
              />
            </div>

          </div>
        </section>


        {/* =========================================================
            2. OUR STORY SECTION
        ========================================================= */}
        <section className="our-story-section">
          <div className="our-story-container">

            {/* Steering Wheel Graphic */}
            <div className="story-image-column">
              <div className="story-image-wrapper">

                {/* Pink Circle */}
                <div className="story-pink-circle"></div>

                {/* Steering Wheel */}
                <img
                  src="/assets/about/steering.png"
                  alt="Steering wheel"
                  className="story-image"
                />

              </div>
            </div>

            {/* Story Text */}
            <div className="story-content">
              <h2 className="story-title">
                Our Story
              </h2>

              <p className="story-description">
                Starting in Indore, FemiDo was born to turn that gap into a
                women-first mobility ecosystem that empowers every journey.
                We realized that safe, reliable transportation is more than
                just getting from point A to B. It’s a student reaching college
                with confidence, a professional returning home without worry,
                and a driver earning her own.
              </p>
            </div>

          </div>
        </section>


        {/* =========================================================
            3. FOUNDER SECTION
        ========================================================= */}
        <section className="founder-section">
          <div className="founder-container">

            {/* Founder Bio */}
            <div className="founder-content">

              <span className="founder-label">
                Founder @FemiDo
              </span>

              <h2 className="founder-name">
                Shreyansh Rangawat
              </h2>

              <p className="founder-description">
                An entrepreneur and founder of Mlock Innovations LLP, Shreyansh
                turns bold concepts into real-world solutions across smart
                infrastructure and mobility. Driven by a passion for social
                impact, he created FemiDo to make everyday transportation
                safer, seamless, and truly inclusive for women.
              </p>

            </div>


            {/* Founder Photo */}
            <div className="founder-image-column">
              <div className="founder-image-wrapper">

                {/* Pink Circle */}
                <div className="founder-pink-circle"></div>

                {/* Founder Image */}
                <img
                  src="/assets/about/founder.png"
                  alt="Shreyansh Rangawat - Founder of FemiDo"
                  className="founder-image"
                />

              </div>
            </div>

          </div>
        </section>


        {/* =========================================================
            4. OUR VISION SECTION
        ========================================================= */}
        <section className="vision-section">
          <div className="vision-container">

            <h2 className="vision-main-title">
              Our Vision
            </h2>

            <div className="vision-grid">

              {/* Vision Card 1 */}
              <VisionCard
                selected={selectedVision === 0}
                onClick={() => setSelectedVision(0)}
                title={
                  <>
                    Uncompromising
                    <br />
                    Safety
                  </>
                }
                text="Creating a mobility experience where every woman travels with absolute peace of mind, confidence, and trust."
              >
                <SafetyIcon />
              </VisionCard>


              {/* Vision Card 2 */}
              <VisionCard
                selected={selectedVision === 1}
                onClick={() => setSelectedVision(1)}
                title={
                  <>
                    Economic
                    <br />
                    Empowerment
                  </>
                }
                text="Opening sustainable earning opportunities that give women drivers financial freedom and professional growth."
              >
                <EconomicIcon />
              </VisionCard>


              {/* Vision Card 3 */}
              <VisionCard
                selected={selectedVision === 2}
                onClick={() => setSelectedVision(2)}
                title={
                  <>
                    Inclusive
                    <br />
                    Mobility
                  </>
                }
                text="Expanding a women-first ecosystem from Indore across the nation, breaking barriers, empowering riders, and making safe commutes accessible to all."
              >
                <MobilityIcon />
              </VisionCard>

            </div>
          </div>
        </section>


        {/* =========================================================
            5. DOWNLOAD SECTION
        ========================================================= */}
        <DownloadSection />

      </div>


      {/* =============================================================
          ALL NORMAL CSS
          Tailwind CSS is NOT required for this page
      ============================================================= */}
      <style>{`

        /* =========================================================
           GLOBAL
        ========================================================= */

        * {
          box-sizing: border-box;
        }

        .about-page {
          width: 100%;
          overflow-x: hidden;
          background: #ffffff;
          color: #111111;
          font-family: Arial, Helvetica, sans-serif;
        }


        /* =========================================================
           1. HERO SECTION
        ========================================================= */

        .about-hero-section {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 24px 0;
          box-sizing: border-box;
        }

        .about-hero-container {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }

        .about-hero-content {
          width: 48%;
          max-width: 550px;
margin-left: -40px;
          display: flex;
          flex-direction: column;
          justify-content: center;

          padding: 24px 0 24px 100px;
          box-sizing: border-box;
        }

        .about-hero-title {
          margin: 0 0 20px;

          font-size: 46px;
          line-height: 1.15;
          font-weight: 800;
          letter-spacing: -1px;

          color: #111111;
        }

        .about-hero-description {
          margin: 0;

          max-width: 460px;

          font-size: 18px;
          line-height: 1.65;

          color: #333333;
        }

        .about-hero-image-wrapper {
          width: 55%;

          display: flex;
          justify-content: flex-end;
          align-items: center;

          overflow: hidden;
        }

        .about-hero-image {
          width: 100%;
          max-width: 800px;

          height: auto;

          object-fit: contain;
          object-position: right;

          display: block;
        }


        /* =========================================================
           2. OUR STORY SECTION
        ========================================================= */

        .our-story-section {
          width: 100%;

          padding: 64px 96px;

          box-sizing: border-box;
        }

        .our-story-container {
          width: 100%;
          max-width: 1280px;

          margin: 0 auto;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 64px;
        }

        .story-image-column {
          width: 50%;
margin-right: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .story-image-wrapper {
          position: relative;

          width: 380px;
          height: 380px;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .story-pink-circle {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          border-radius: 50%;

          background: #ff2693;

          z-index: 0;
        }

        .story-image {
          position: relative;

          z-index: 1;

          width: 300px;
          height: auto;

          object-fit: contain;

          display: block;
        }

        .story-content {
          width: 50%;
          max-width: 540px;

          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .story-title {
          margin: 0 0 20px;

          font-size: 46px;
          line-height: 1.1;
          font-weight: 800;
          letter-spacing: -0.5px;

          color: #111111;
        }

        .story-description {
          margin: 0;

          max-width: 520px;

          font-size: 18px;
          line-height: 1.7;

          color: #444444;
        }


        /* =========================================================
           3. FOUNDER SECTION
        ========================================================= */

        .founder-section {
          width: 100%;

          min-height: 650px;
          padding: 72px 56px 0;

          overflow: hidden;

          box-sizing: border-box;
        }

        .founder-container {
          width: 100%;
          max-width: 1440px;

          margin: 0 auto;

          display: flex;
          align-items: flex-start;
          justify-content: space-between;

          gap: 48px;
        }

        .founder-content {
          width: 46%;
          max-width: 520px;

          display: flex;
          flex-direction: column;
          justify-content: center;

          padding-top: 96px;
        }

        .founder-label {
          display: block;

          margin-bottom: 8px;

          font-size: 20px;
          font-weight: 700;

          color: #ff2693;

          letter-spacing: 0.5px;
        }

        .founder-name {
          margin: 0 0 20px;

          font-size: clamp(40px, 4vw, 54px);
          line-height: 1.1;
          font-weight: 800;
          letter-spacing: -0.5px;

          color: #111111;
        }

        .founder-description {
          margin: 0;

          max-width: 480px;

          font-size: 18px;
          line-height: 1.5;

          color: #444444;
        }

        .founder-image-column {
          width: 54%;

          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
        }

        .founder-image-wrapper {
          position: relative;

          width: min(58vw, 760px);
          height: 650px;
margin-right: -100px;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
        }

        .founder-pink-circle {
          position: absolute;

          top: 40px;
          right: -100px;

          width: min(58vw, 860px);
          height: min(58vw, 800px);

          border-radius: 50%;

          background: #ff2693;

          z-index: 0;
        }

        .founder-image {
          position: relative;

          z-index: 1;

          width: min(52vw, 700px);
          height: auto;

          object-fit: contain;

          display: block;

          user-select: none;
          pointer-events: none;
transform: translateX(-28px);

        }


        /* =========================================================
           4. OUR VISION SECTION
        ========================================================= */

        .vision-section {
          width: 100%;

          padding: 80px 96px;

          box-sizing: border-box;
        }

        .vision-container {
          width: 100%;
          max-width: 1280px;

          margin: 0 auto;
        }

        .vision-main-title {
          margin: 0 0 48px;

          text-align: center;

          font-size: 40px;
          line-height: 1.1;
          font-weight: 700;

          color: #111111;
        }

        .vision-grid {
          width: 100%;

          display: grid;

          grid-template-columns: repeat(3, 1fr);

          gap: 28px;

          align-items: stretch;
        }


        /* =========================================================
           VISION CARD
        ========================================================= */

        .vision-card {
          width: 100%;
          height: 100%;

          min-height: 270px;

          padding: 32px;

          border-radius: 16px;

          border: 2px solid transparent;

          background: #f4f4f4;

          color: #111111;

          text-align: center;

          display: flex;
          flex-direction: column;

          align-items: center;
          justify-content: space-between;

          cursor: pointer;

          font-family: inherit;

          outline: none;

          transition:
            background 0.2s ease,
            border-color 0.2s ease,
            box-shadow 0.2s ease,
            transform 0.2s ease;

          box-sizing: border-box;
        }

        .vision-card:hover {
          background: #ececec;
        }

        .vision-card-selected {
          background: #ffffff;

          border-color: #ff2693;

          box-shadow:
            0 8px 24px rgba(255, 38, 147, 0.15);
        }

        .vision-card-selected:hover {
          background: #ffffff;
        }

        .vision-icon-wrapper {
          height: 56px;

          margin-bottom: 16px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #111111;
        }

        .vision-icon {
          width: 48px;
          height: 48px;

          color: #111111;

          display: block;
        }

        .vision-card-title {
          margin: 0 0 12px;

          font-size: 21px;
          line-height: 1.35;

          font-weight: 700;

          color: #111111;
        }

        .vision-card-description {
          margin: 0;

          font-size: 14.5px;
          line-height: 1.6;

          color: #555555;
        }


        /* =========================================================
           TABLET - MAX 1024px
        ========================================================= */

        @media (max-width: 1024px) {

          /* HERO */

          .about-hero-content {
            padding-left: 50px;
          }

          .about-hero-title {
            font-size: 40px;
          }

          .about-hero-description {
            font-size: 15px;
          }


          /* STORY */

          .our-story-section {
            padding: 56px 56px;
          }

          .our-story-container {
            gap: 48px;
          }

          .story-image-wrapper {
            width: 280px;
            height: 280px;
          }

          .story-image {
            width: 260px;
          }

          .story-title {
            font-size: 36px;
          }


          /* FOUNDER */

          .founder-section {
            min-height: 560px;
            padding: 56px 56px 0;
          }

          .founder-container {
            gap: 48px;
          }

          .founder-content {
            padding-top: 72px;
          }

          .founder-name {
            font-size: 36px;
          }

          .founder-image-wrapper {
            width: 500px;
            height: 560px;
          }

          .founder-pink-circle {
            top: 32px;
            right: -56px;
            width: 500px;
            height: 500px;
          }

          .founder-image {
            width: 500px;
          }


          /* VISION */

          .vision-section {
            padding: 64px 56px;
          }

          .vision-grid {
            gap: 20px;
          }

          .vision-card {
            padding: 28px 22px;
          }
        }


        /* =========================================================
           MOBILE - MAX 768px
        ========================================================= */

        @media (max-width: 768px) {

          /* HERO */

          .about-hero-section {
            padding: 24px 20px 0;
          }

          .about-hero-container {
            flex-direction: column;

            gap: 20px;

            text-align: center;
          }

         .about-hero-content {
  width: 130%;
  max-width: 103%;

  margin: 0 auto;
  padding: 10px 20px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
}

          .about-hero-title {
            margin-bottom: 16px;

            font-size: clamp(34px, 9vw, 46px);

            line-height: 1.05;

            letter-spacing: -1px;
          }

          .about-hero-description {
            max-width: 420px;

            font-size: 15px;

            line-height: 1.55;
          }

          .about-hero-image-wrapper {
            width: 115%;

            max-width: 500px;

            margin-left: -4%;

            justify-content: center;
          }

          .about-hero-image {
            width: 100%;

            max-width: 500px;

            object-position: center;
          }


          /* STORY */

          .our-story-section {
            padding: 48px20px;
          }

          .our-story-container {
            flex-direction: column;

            gap: 10px;

            text-align: center;
          }

          .story-image-column {
            width: 100%;

            order: 2;
          }

          .story-content {
            width: 100%;
            max-width: 100%;

            order: 1;

            align-items: center;

            text-align: center;

          }

          .story-image-wrapper {
            width: 300px;
            height: 300px;
            margin-right: -200px;
          }

          .story-image {
            width: 250px;
          }

          .story-title {
            margin-bottom: 14px;
margin-right: 180px;
            font-size: clamp(32px, 9vw, 40px);
          }

          .story-description {
            max-width: 1000px;

            font-size: 15px;
            line-height: 1.65;
          }


          /* FOUNDER */

          .founder-section {
            padding: 0px 20px;
            margin-top: -50px;
          }

          .founder-container {
            flex-direction: column;

            gap: 15px;
          }

          .founder-content {
            width: 100%;
            max-width: 600px;

            transform: none;

            align-items: center;

            text-align: center;
          }

          .founder-label {
            font-size: 15px;
          }

          .founder-name {
            margin-bottom: 14px;

            font-size: clamp(32px, 8vw, 40px);
          }

          .founder-description {
            max-width: 600px;

            font-size: 15px;
            line-height: 1.65;
          }

         .founder-image-column {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: flex-end;

    overflow: visible;
  }

  .founder-image-wrapper {
    position: relative;

    width: 100%;
    max-width: 500px;

    height: 470px;

    display: flex;
    justify-content: center;
    align-items: flex-end;

    margin: 0 auto;
  }

          .founder-pink-circle {
    position: absolute;

    width: 650px;
    height: 520px;

    top: 120px;

    left: 50%;
    right: auto;

    transform: translateX(-50%);

    border-radius: 50%;

    background: #ff2693;

    z-index: 0;
  }

          .founder-image {
    position: relative;

    z-index: 1;
 top: 50px;
    width: 500px;
    max-width: 200%;

    height: auto;

    display: block;

    object-fit: contain;

    transform: none;

    user-select: none;
    pointer-events: none;
  }


          /* VISION */

          .vision-section {
            padding: 56px 20px;
          }

          .vision-main-title {
            margin-bottom: 35px;

            font-size: clamp(32px, 9vw, 40px);
          }

          .vision-grid {
            grid-template-columns: 1fr;

            gap: 18px;
          }

          .vision-card {
            min-height: 250px;

            padding: 28px 22px;
          }
        }


        /* =========================================================
           SMALL MOBILE - MAX 400px
        ========================================================= */

        @media (max-width: 450px) {

          /* HERO */

          .about-hero-section {
            padding-left: 15px;
            padding-right: 15px;
          }

          .about-hero-title {
            font-size: 33px;
          }

          .about-hero-description {
            font-size: 14px;
          }

          .about-hero-image-wrapper {
            width: 120%;

            margin-left: -10%;
          }


          /* STORY */

          .our-story-section {
            padding-left: 15px;
            padding-right: 15px;
          }

          .story-image-wrapper {
            width: 230px;
            height: 230px;
            margin-top: 20px;
            
            
          }

          .story-content {
            width: 100%;
            max-width: 100%;

            order: 1;

            align-items: center;

            text-align: center;
          }

          .story-image {
 
          gap: 20px;
            width: 215px;
          }

          .story-title {
            margin-bottom: 19px;
margin-left: 170px;
            font-size: clamp(34px, 9vw, 32px);
            white-space: nowrap;
          }

          .story-description {
            font-size: 14px;
          }


          /* FOUNDER */

          .founder-section {
            padding-left: 15px;
            padding-right: 15px;
          }

          .founder-image-wrapper {
            width: 580px;
            height: 580px;
          }

          .founder-pink-circle {
            width: 550px;
            height: 550px;
          }

          .founder-image {
            width: 550px;
            height: 630px;
          }

          .founder-description {
            font-size: 14px;
          }


          /* VISION */

          .vision-section {
            padding-left: 15px;
            padding-right: 15px;
          }

          .vision-card {
            min-height: 240px;

            padding: 24px 18px;
          }

          .vision-card-title {
            font-size: 19px;
          }

          .vision-card-description {
            font-size: 13px;
          }
        }

      `}</style>
    </>
  );
}


/* =================================================================
   VISION CARD COMPONENT
================================================================= */

function VisionCard({
  children,
  title,
  text,
  selected = false,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`vision-card ${
        selected ? "vision-card-selected" : ""
      }`}
    >
      <div className="vision-icon-wrapper">
        {children}
      </div>

      <h3 className="vision-card-title">
        {title}
      </h3>

      <p className="vision-card-description">
        {text}
      </p>
    </button>
  );
}


/* =================================================================
   SAFETY ICON
================================================================= */

function SafetyIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="vision-icon"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M32 6L52 14V29C52 43 43.5 53.5 32 58C20.5 53.5 12 43 12 29V14L32 6Z" />
      <path d="M26 29H38" />
      <path d="M28 29V23C28 20.8 29.8 19 32 19C34.2 19 36 20.8 36 23V29" />
      <circle cx="32" cy="37" r="2.5" />
    </svg>
  );
}


/* =================================================================
   ECONOMIC EMPOWERMENT ICON
================================================================= */

function EconomicIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="vision-icon"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="14" y="24" width="36" height="28" rx="4" />
      <path d="M20 24V18C20 14.7 22.7 12 26 12H38C41.3 12 44 14.7 44 18V24" />
      <circle cx="32" cy="18" r="2.5" />
      <path d="M22 34H42" />
      <path d="M22 42H36" />
    </svg>
  );
}


/* =================================================================
   MOBILITY ICON
================================================================= */

function MobilityIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="vision-icon"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="32" cy="32" r="18" />
      <circle cx="32" cy="32" r="5" />

      <path d="M32 6V58" />
      <path d="M6 32H58" />
      <path d="M14 14L50 50" />
      <path d="M50 14L14 50" />

      <circle
        cx="32"
        cy="6"
        r="2.5"
        fill="#111111"
      />

      <circle
        cx="32"
        cy="58"
        r="2.5"
        fill="#111111"
      />

      <circle
        cx="6"
        cy="32"
        r="2.5"
        fill="#111111"
      />

      <circle
        cx="58"
        cy="32"
        r="2.5"
        fill="#111111"
      />
    </svg>
  );
}