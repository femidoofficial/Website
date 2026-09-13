"use client";
import Rides from "../../components/Rides.jsx";
import DownloadSection from "../../components/DownloadSection.jsx";
import React from "react";

export default function ServicesPage() {
  return (
    <main className="services-page">

      {/* ================= HERO ================= */}
      <section className="services-hero">

        <div className="hero-text">
          <h1>
            A Ride for
            <br />
            Every Journey
          </h1>

          <p>
            Whether you're heading to work, college,
            <br className="desktop-break" />
            shopping, or home, FemiDo offers a range of ride
            <br className="desktop-break" />
            options driven by verified women to make every
            <br className="desktop-break" />
            journey safe, comfortable, and convenient.
          </p>

          <button className="pink-btn">
            Book a Ride
          </button>
        </div>

        <div className="hero-vehicles">
          <div className="hero-circle"></div>

          <img
            src="/assets/services/image 90.png"
            alt="FemiDo Auto"
            className="vehicle auto"
          />

          {/* <img
            src="/assets/services/scooty.png"
            alt="FemiDo Scooty"
            className="vehicle scooty"
          />

          <img
            src="/assets/services/car.png"
            alt="FemiDo Car"
            className="vehicle car"
          /> */}
        </div>

      </section>


      {/* ================= RIDE OPTIONS ================= */}
      <section >

        <Rides />

      </section>


      {/* ================= HOW BOOKING WORKS ================= */}
      <section className="booking-section">

        <div className="booking-pink-shape">
</div>

        <div className="booking-content">
          <h2>How Booking Works</h2>

          <p>
            Getting started with FemiDo is quick and simple.
            Follow these four easy steps to begin your journey.
          </p>
        </div>

        <div className="booking-image">
          <img
            src="/assets/services/girl.png"
            alt="Woman booking a ride"
          />
        </div>

      </section>


      {/* ================= BOOKING STEPS ================= */}
      <section className="steps-section">

        <div className="booking-step">
          <span>01</span>

          <h3>Choose Ride</h3>

          <p>
            Select the ride option that
            <br />
            best suits your journey,
            <br />
            budget, and travel needs.
          </p>
        </div>


        <div className="booking-step">
          <span>02</span>

          <h3>Select Pickup &amp; Destination</h3>

          <p>
            Enter your pickup location and
            <br />
            destination to receive an instant
            <br />
            fare estimate.
          </p>
        </div>


        <div className="booking-step">
          <span>03</span>

          <h3>Get Matched with a Driver</h3>

          <p>
            We'll connect you with the
            <br />
            nearest verified woman driver in
            <br />
            just a few moments.
          </p>
        </div>


        <div className="booking-step">
          <span>04</span>

          <h3>Enjoy Your Ride</h3>

          <p>
            Track your trip in real
            <br />
            time and travel safely to
            <br />
            your destination with
            <br />
            confidence.
          </p>
        </div>

      </section>


      {/* ================= DOWNLOAD CTA ================= */}
      

        <DownloadSection />


        {/* <div className="download-content">

          <h2>
            Ready to Ride
            <br />
            with FemiDo?
          </h2>

          <p>
            Download the app today and experience
            <br className="desktop-break" />
            safe, comfortable, and reliable commutes
            <br className="desktop-break" />
            driven by women across Indore.
          </p>

          <a
            href="#"
            className="download-btn"
          >
            Download App
          </a>

        </div>


        <div className="download-visual">

          <div className="download-circle"></div>

          <img
            src="/assets/services/phone.png"
            alt="FemiDo App"
            className="phone-image"
          />

        </div> */}

      


      {/* ================= CSS ================= */}
      <style jsx>{`

        * {
          box-sizing: border-box;
        }

        .services-page {
          width: 100%;
          overflow-x: hidden;
          background: #fff;
          color: #191919;
          font-family: Arial, Helvetica, sans-serif;
        }


        /* =================================================
           HERO
           ================================================= */

        .services-hero {
          width: 100%;
          min-height: 330px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 25px 3.8% 0;
          position: relative;
          overflow: hidden;
        }

        .hero-text {
          width: 40%;
          position: relative;
          z-index: 3;
          left: 20px;
        }

        .hero-text h1 {
          margin: 0 0 12px;
          font-size: 39px;
          line-height: 1.05;
          font-weight: 800;
        }

        .hero-text p {
          margin: 0 0 14px;
          font-size: 18px;
          line-height: 1.4;
        }

        .pink-btn {
          border: none;
          background: #ff2690;
          color: #fff;
          border-radius: 6px;
          padding: 9px 60px;
          font-size: 16px;
          cursor: pointer;
        }

        .pink-btn:hover {
          background: #e91d80;
        }


        /* =================================================
           HERO VEHICLES
           ================================================= */

        .hero-vehicles {
          width: 57%;
          height: 430px;
          position: relative;
        }

        .hero-circle {
          position: absolute;
          width: 0px;
          height: 0px;
          border-radius: 50%;
          background: #f3f3f3;
          right: 8%;
          top: -20px;
        }

        .vehicle {
          position: absolute;
          object-fit: contain;
          z-index: 2;
        }

        .vehicle.auto {
          width: 820px;
          height: 820px;
          left: 9%;
          top: -150px;
          bottom: 0;
        }

        


        /* =================================================
           RIDE SECTION
           ================================================= */

        .ride-section {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 20px 30px 35px;
        }

        .ride-section > h2 {
          text-align: center;
          font-size: 28px;
          margin: 0 0 25px;
          font-weight: 700;
        }

        .ride-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px 30px;
        }

        .ride-card {
          height: 128px;
          background: #f3f3f3;
          border-radius: 14px;
          box-shadow: 0 2px 2px rgba(0,0,0,.15);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .ride-info {
          padding-left: 30px;
          position: relative;
          z-index: 2;
        }

        .ride-info h3 {
          margin: 0 0 8px;
          font-size: 22px;
        }

        .ride-info p {
          margin: 0;
          font-size: 14px;
          line-height: 1.35;
        }

        .ride-card img {
          position: absolute;
          width: 55%;
          height: 100%;
          right: 0;
          bottom: 0;
          object-fit: contain;
          object-position: right bottom;
        }


        /* =================================================
           BOOKING SECTION
           ================================================= */

        .booking-section {
          width: 100%;
          height: 300px;
          position: relative;
          overflow: hidden;
        }

        .booking-pink-shape {
          position: absolute;
          width: 1500px;
          height: 1500px;
          left: -280px;
          top: 0;
          border-radius: 50%;
          background: #ff2690;
         top: -1200px;
        }

        .booking-content {
          position: relative;
          z-index: 2;
          padding: 35px 8%;
          color: #fff;
          width: 70%;
        }

        .booking-content h2 {
          margin: 0 0 5px;
          font-size: 49px;
          font-weight: 500px;
        }

        .booking-content p {
          margin: 0;
          max-width: 650px;
          font-size: 21px;
          line-height: 1.2;
        }

        .booking-image {
          position: absolute;
          width: 490px;
          height: 430px;
          right: 10%;
          bottom: -83px;
          z-index: 2;
        }

        .booking-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }


        /* =================================================
           STEPS
           ================================================= */

        .steps-section {
          max-width: 1180px;
          margin: 0 auto;
          padding: 38px 30px 25px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 55px;
        }

        .booking-step span {
          display: block;
          color: #ff2690;
          font-size: 29px;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 5px;
        }

        .booking-step h3 {
          margin: 0 0 9px;
          font-size: 20px;
          line-height: 1.2;
        }

        .booking-step p {
          margin: 0;
          font-size: 16px;
          line-height: 1.45;
        }


        /* =================================================
           DOWNLOAD CTA
           ================================================= */

        


        /* =================================================
           TABLET
           ================================================= */

        @media (max-width: 900px) {

          .services-hero {
            min-height: 400px;
          }

          .hero-text h1 {
            font-size: 34px;
          }

          .hero-text p {
            font-size: 13px;
          }

          .hero-vehicles {
            height: 290px;
          }

          .vehicle.auto {
            width: 180px;
          }

          .vehicle.scooty {
            width: 125px;
          }

          .vehicle.car {
            width: 250px;
          }

          .ride-section {
            padding-left: 20px;
            padding-right: 20px;
          }

          .steps-section {
            gap: 20px;
          }

          .download-content h2 {
            font-size: 29px;
          }

          .download-content p {
            font-size: 12px;
          }
        }


        /* =================================================
           MOBILE
           ================================================= */

        @media (max-width: 600px) {


          .desktop-break {
            display: none;
          }

          .services-hero {
            min-height: auto;
            padding: 35px 20px 0;
            flex-direction: column;
            align-items: flex-start;
          }

          .hero-text {
            width: 100%;
            align-items: center;
          }

          .hero-text h1 {
            font-size: 32px;
          }

          .hero-text p {
            font-size: 14px;
          }

          .pink-btn {
            width: 180px;
            padding: 10px;
          }

          .hero-vehicles {
            width: 120%;
            height: 250px;
            margin-top: 15px;
          }

          

          .vehicle.auto {
            width: 450px;
            height: 200px;
            left: -28px;
            top: 0px;
          }



          /* RIDE CARDS */

          .ride-section {
            padding: 25px 20px 35px;
          }

          .ride-section > h2 {
            font-size: 26px;
          }

          .ride-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .ride-card {
            height: 130px;
          }

          .ride-info {
            padding-left: 22px;
          }


          /* BOOKING */

          .booking-section {
            height: 420px;
          }

          .booking-pink-shape {
            width: 620px;
            height: 620px;
            border-radius: 50%;
            top: -270px;
            left: -230px;
            z-index: 2;
          }

         .booking-content {
          padding: 35px 4%;
          color: #fff;
          width: 80%;
        }

        .booking-content h2 {
          margin: 0 0 5px;
          font-size: 30px;
          font-weight: 700;
        }

        .booking-content p {
          margin: 0;
          max-width: 250px;
          font-size: 18px;
          line-height: 1.5;
        }

          .booking-image {
            width: 260px;
            height: 250px;
            right: 30%;
            transform: translateX(50%);
          
            bottom: -40px;
            z-index: 3;
          }


          /* STEPS */

          .steps-section {
            grid-template-columns: 1fr 1fr;
            padding: 30px 20px 45px;
            gap: 30px 20px;
          }

          .booking-step span {
            font-size: 27px;
          }

          .booking-step h3 {
            font-size: 15px;
          }

          .booking-step p {
            font-size: 12px;
          }


          /* DOWNLOAD */

          .download-section {
            width: calc(100% - 30px);
            height: 430px;
            margin-bottom: 30px;
            display: block;
          }

          .download-content {
            width: 100%;
            padding: 30px 25px;
          }

          .download-content h2 {
            font-size: 30px;
          }

          .download-content p {
            font-size: 13px;
          }

          .download-visual {
            width: 100%;
            height: 210px;
            bottom: 0;
          }

          .download-circle {
            width: 220px;
            height: 220px;
            right: 50%;
            transform: translateX(50%);
            bottom: -120px;
          }

          .phone-image {
            width: 130px;
            height: 230px;
            bottom: -5px;
          }
        }


        /* =================================================
           SMALL MOBILE
           ================================================= */

        @media (max-width: 400px) {

          .services-hero {
            padding-left: 5px;
            padding-right: 15px;

          }

          .hero-text h1 {
            font-size: 29px;
          }

          .hero-text p {
            font-size: 13px;
          }

          .hero-vehicles {
            height: 180px;
          }

          .vehicle.auto {
            width: 390px;
            
          }

          .vehicle.scooty {
            width: 90px;
          }

          .vehicle.car {
            width: 170px;
          }

          .ride-section {
            padding-left: 15px;
            padding-right: 15px;
           
          }

          .ride-section > h2 {
            font-size: 23px;
          }

          .ride-card {
            height: 120px;
          }

          .ride-info h3 {
            font-size: 20px;
          }

          .ride-info p {
            font-size: 13px;
          }

          .booking-section {
            height: 390px;
          }

          .booking-content h2 {
            font-size: 25px;
          }

          .steps-section {
            padding-left: 15px;
            padding-right: 15px;
          }

          .download-section {
            width: calc(100% - 20px);
            height: 420px;
          }

          .download-content {
            padding-left: 20px;
            padding-right: 20px;
          }

          .download-content h2 {
            font-size: 27px;
          }
        }

      `}</style>

    </main>
  );
}