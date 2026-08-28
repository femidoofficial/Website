"use client";

import React from "react";

export default function HowWeWork() {
  return (
    <>
      <section className="how-section">

        <div className="pink-shape"></div>

        <div className="how-heading">
          <h2>How We Works</h2>

          <p>
            Getting started with FemiDo is quick and simple. Follow these
            <br />
            four easy steps to begin your journey as a FemiDo driver.
          </p>
        </div>

        <div className="how-image">
          <img
            src="/assets/drivers/image 82.png"
            alt="How FemiDo Works"
          />
        </div>

        <div className="steps-grid">

          <div className="step">
            <span>01</span>

            <h3>Register</h3>

            <p>
              Sign up through FemiDo app and submit your
              basic details to create your driver account.
            </p>
          </div>


          <div className="step">
            <span>02</span>

            <h3>Complete Verification</h3>

            <p>
              Upload your documents and complete verification
              to join our trusted driver community.
            </p>
          </div>


          <div className="step">
            <span>03</span>

            <h3>Get Approved</h3>

            <p>
              Once your documents are reviewed and approved,
              you'll be ready to start accepting rides.
            </p>
          </div>


          <div className="step">
            <span>04</span>

            <h3>Start Driving</h3>

            <p>
              Go online, accept ride requests, and start
              earning on your own schedule.
            </p>
          </div>

        </div>

      </section>


      <style jsx>{`

        /* ================= HOW WE WORK ================= */

        .how-section {
          position: relative;
          min-height: 550px;
          padding: 25px 4% 25px;
          overflow: hidden;
        }

        .pink-shape {
          position: absolute;
          left: -170px;
          top: -800px;
          width: 1100px;
          height: 1100px;
          background: #ff2690;
          border-radius: 50% 50% 50% 50%;
          transform: rotate(-2deg);
        }

        .how-heading {
          position: relative;
          z-index: 2;
          width: 100%;
          color: white;
        }

        .how-heading h2 {
          margin: 0 0 5px;
          font-size: 41px;
        }

        .how-heading p {
          margin: 0;
          font-size: 20px;
          line-height: 1.4;
        }

        .how-image {
          position: absolute;
          right: 20%;
          top: 5px;
          width: 630px;
          height: 400px;
          z-index: 3;
        }

        .how-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .steps-grid {
          left: 4%;
          position: relative;
          z-index: 4;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 75px;
          margin-top: 215px;
        }

        .step span {
          display: block;
          color: #ff2690;
          font-size: 21px;
          font-weight: 700;
          margin-bottom: 1px;
        }

        .step h3 {
          font-size: 18px;
          margin: 0 0 10px;
        }

        .step p {
          font-size: 14px;
          line-height: 1.45;
          margin: 0;
          max-width: 145px;
        }


        /* ================= TABLET ================= */

        @media (max-width: 900px) {

          .how-image {
            right: 5%;
          }

        }


        /* ================= MOBILE ================= */

        @media (max-width: 600px) {

          .how-section {
            min-height: 650px;
            padding: 30px 20px;
          }

          .pink-shape {
            width: 470px;
            height: 280px;
            left: -180px;
            top: -80px;
          }

          .how-heading {
            width: 100%;
          }

          .how-heading h2 {
            font-size: 23px;
          }

          .how-heading p {
            font-size: 9px;
          }

          .how-image {
            width: 190px;
            height: 130px;
            right: 5px;
            top: 90px;
          }

          .steps-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 35px 20px;
            margin-top: 220px;
          }

          .step p {
            max-width: 160px;
          }

        }


        /* ================= SMALL MOBILE ================= */

        @media (max-width: 450px) {

         

          /* Original file has an empty breakpoint here */

           .pink-shape {
            width: 370px;
            height: 370px;
            left: -70px;
            top: -100px;
          }

        .how-heading {
  position: relative;
  width: 100%;
  padding: 25px 0px 0;
  box-sizing: border-box;
  z-index: 2;
}

.how-heading h2 {
  font-size: 30px;
  line-height: 1.1;
  margin: 0 0 8px;
  color: white;
}

.how-heading p {
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  max-width: 250px;
  color: white;
}

           .how-image {
            width: 350px;
            height: 280px;
            right: 20px;
            top: 150px;
          }
        }

      `}</style>

    </>
  );
}