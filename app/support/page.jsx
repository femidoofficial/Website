"use client";

import React from "react";

export default function PartnerPage() {
  return (
    <main className="partner-page">

      {/* ================= HERO ================= */}
      <section className="partner-hero">

        <div className="partner-hero-content">
          <h1>Support Women. Move Women Forward.</h1>

          <p>
            FemiDo believes meaningful change happens through collaboration.
            We work with organizations, NGOs, foundations, corporates and
            institutions that share our vision of safer mobility, women's
            empowerment and employment opportunities.
          </p>

          <button className="partner-btn">
            Partner with FemiDo
          </button>
        </div>

        <div className="handshake-wrapper">
          <img
            src="/assets/services/image 94.png"
            alt="Partnership"
            className="handshake-image"
          />
        </div>

      </section>


      {/* ================= WHY SUPPORT ================= */}
      <section className="support-section">

        <h2>Why your Support Matters ?</h2>

        <div className="support-cards">

          <div className="support-card">
            <div className="support-icon">
              <img
                src="/assets/drivers/earning_icon.png"
                alt="Women's Employment"
              />
            </div>

            <h3>
              Women's
              <br />
              Employment
            </h3>

            <p>
              Helping create more opportunities
              <br />
              for women drivers.
            </p>
          </div>


          <div className="support-card">
            <div className="support-icon">
              <img
                src="/assets/drivers/map_icon.png"
                alt="Safer Mobility Impact"
              />
            </div>

            <h3>
              Safer Mobility
              <br />
              Impact
            </h3>

            <p>
              Supporting initiatives that
              <br />
              improve safety for women on the
              <br />
              road.
            </p>
          </div>


          <div className="support-card">
            <div className="support-icon">
              <img
                src="/assets/drivers/hour_icon.png"
                alt="Skill Development"
              />
            </div>

            <h3>
              Skill
              <br />
              Development
            </h3>

            <p>
              Enabling training and
              <br />
              professional development.
            </p>
          </div>

        </div>

      </section>


      {/* ================= WAYS TO SUPPORT ================= */}
      <section className="ways-section">

        <div className="pink-support-shape">

          <div className="ways-content">
            <h2>Ways to Support FemiDo</h2>

            <p>
              Every partnership can help create safer journeys, stronger
              opportunities and greater independence for women. Together,
              we can build a mobility ecosystem where women can travel and
              work with greater confidence.
            </p>
          </div>

        </div>

        <div className="ways-image">
          <img
            src="/assets/drivers/girl.png"
            alt="Woman driving"
          />
        </div>

      </section>


      {/* ================= SUPPORT OPTIONS ================= */}
      <section className="support-options">

        <div className="support-option">
          <span>01</span>
          <h3>Driver Support</h3>
          <p>
            Help FemiDo connect with, onboard
            <br />
            and support women drivers.
          </p>
        </div>

        <div className="support-option">
          <span>02</span>
          <h3>Driving &amp; Skill Training</h3>
          <p>
            Support driving, road safety and other
            <br />
            skill-development programs.
          </p>
        </div>

        <div className="support-option">
          <span>03</span>
          <h3>Safety Initiatives</h3>
          <p>
            Collaborate on road safety, awareness
            <br />
            &amp; emergency-support initiatives.
          </p>
        </div>

        <div className="support-option">
          <span>04</span>
          <h3>Legal Support</h3>
          <p>
            Provide legal guidance and support
            <br />
            for FemiDo and its driver community.
          </p>
        </div>

        <div className="support-option">
          <span>05</span>
          <h3>Financial Support</h3>
          <p>
            Support drivers through financial
            <br />
            assistance &amp; relevant initiatives.
          </p>
        </div>

        <div className="support-option">
          <span>06</span>
          <h3>CSR Partnerships</h3>
          <p>
            Partner with FemiDo through CSR
            <br />
            initiatives focused on women.
          </p>
        </div>

      </section>


      {/* ================= CSS ================= */}
      <style jsx>{`

        * {
          box-sizing: border-box;
        }

        .partner-page {
          width: 100%;
          overflow: hidden;
          background: #fff;
          color: #171717;
          font-family: Arial, Helvetica, sans-serif;
        }


        /* =================================================
           HERO
           ================================================= */

        .partner-hero {
          width: 100%;
          min-height: 580px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          overflow: hidden;
          padding-top: 55px;
        }

        .partner-hero-content {
          width: 100%;
          max-width: 850px;
          position: relative;
          z-index: 3;
          padding: 0 20px;
        }

        .partner-hero h1 {
          margin: 0 0 10px;
          font-size: 38px;
          line-height: 1.15;
          font-weight: 800;
        }

        .partner-hero p {
          max-width: 720px;
          margin: 0 auto 18px;
          font-size: 16px;
          line-height: 1.35;
        }

        .partner-btn {
          border: none;
          background: #ff2690;
          color: white;
          padding: 9px 42px;
          border-radius: 6px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
        }

        .partner-btn:hover {
          background: #e91d80;
        }


        /* =================================================
           HANDSHAKE IMAGE
           ================================================= */

        .handshake-wrapper {
          width: 100%;
          height: 350px;
          position: absolute;
          bottom: 0;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          overflow: hidden;
        }

        .handshake-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }


        /* =================================================
           WHY SUPPORT
           ================================================= */

        .support-section {
          width: 100%;
          padding: 35px 4% 45px;
          text-align: center;
        }

        .support-section > h2 {
          margin: 0 0 30px;
          font-size: 32px;
          line-height: 1.2;
          font-weight: 700;
        }

        .support-cards {
          width: 100%;
          max-width: 1180px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .support-card {
          min-height: 205px;
          background: #f3f3f3;
          border-radius: 13px;
          padding: 22px 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
        }

        .support-icon {
          width: 65px;
          height: 65px;
          margin-bottom: 8px;
        }

        .support-icon img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .support-card h3 {
          margin: 0 0 8px;
          font-size: 22px;
          line-height: 1.1;
          font-weight: 700;
        }

        .support-card p {
          margin: 0;
          font-size: 14px;
          line-height: 1.35;
        }


        /* =================================================
           WAYS TO SUPPORT
           ================================================= */

        .ways-section {
          position: relative;
          width: 100%;
          height: 330px;
          margin-top: 0;
          overflow: hidden;
        }

        .pink-support-shape {
          position: absolute;
          width: 69%;
          height: 630px;
          left: -50px;
          top: -310px;
          background: #ff2690;
          border-radius: 50%;
          z-index: 1;
        }

        .ways-content {
          width: 100%;
          padding: 42px 19%;
          color: white;
          position: relative;
          top: 310px;
          z-index: 2;
          align-items: center;
        }

        .ways-content h2 {
          margin: 0 0 5px;
          font-size: 40px;
          line-height: 1.1;
        }

        .ways-content p {
          max-width: 700px;
          margin: 0;
          font-size: 21px;
          line-height: 1.5;
        }

        .ways-image {
          position: absolute;
          right: 15%;
          bottom: -15px;
          width: 480px;
          height: 360px;
          z-index: 3;
        }

        .ways-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }


        /* =================================================
           SUPPORT OPTIONS
           ================================================= */

        .support-options {
          max-width: 1180px;
          margin: 0 auto;
          padding: 35px 4% 10px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          column-gap: 180px;
          row-gap: 35px;
        }

        .support-option span {
          display: block;
          color: #ff2690;
          font-size: 30px;
          line-height: 1;
          font-weight: 700;
          margin-bottom: 5px;
        }

        .support-option h3 {
          margin: 0 0 8px;
          font-size: 18px;
          line-height: 1.2;
        }

        .support-option p {
          margin: 0;
          font-size: 15px;
          line-height: 1.35;
        }


        /* =================================================
           TABLET
           ================================================= */

        @media (max-width: 900px) {

          .partner-hero {
            min-height: 520px;
            padding-top: 45px;
          }

          .partner-hero h1 {
            font-size: 32px;
          }

          .partner-hero p {
            font-size: 14px;
            max-width: 650px;
          }

          .handshake-wrapper {
            height: 300px;
          }

          .support-section {
            padding-top: 30px;
          }

          .support-section > h2 {
            font-size: 29px;
          }

          .support-cards {
            gap: 15px;
          }

          .support-card {
            min-height: 200px;
          }

          .support-card h3 {
            font-size: 20px;
          }

          .support-card p {
            font-size: 13px;
          }

          .ways-section {
            height: 300px;
          }

          .pink-support-shape {
            height: 300px;
            width: 72%;
          }

          .ways-content {
            padding-top: 38px;
          }

          .ways-content h2 {
            font-size: 27px;
          }

          .ways-image {
            width: 300px;
            height: 220px;
            right: 3%;
          }

          .support-options {
            column-gap: 30px;
          }
        }


        /* =================================================
           MOBILE
           ================================================= */

        @media (max-width: 600px) {

          .partner-hero {
            min-height: 470px;
            padding: 35px 18px 0;
          }

          .partner-hero-content {
            padding: 0;
          }

          .partner-hero h1 {
            font-size: 27px;
          }

          .partner-hero p {
            font-size: 13px;
            line-height: 1.45;
          }

          .partner-btn {
            padding: 9px 28px;
            font-size: 13px;
          }

          
        .handshake-wrapper {
          width: 100%;
          height: 140px;
          position: absolute;
          bottom: 80px;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          overflow: hidden;
        }

        .handshake-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }


          /* WHY SUPPORT */

          .support-section {
            padding: 0px 18px 20px;
          }

          .support-section > h2 {
            font-size: 27px;
            margin-bottom: 25px;
          }

          .support-cards {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .support-card {
            min-height: 185px;
            padding: 20px;
          }

          .support-icon {
            width: 60px;
            height: 60px;
          }

          .support-card h3 {
            font-size: 21px;
          }

          .support-card p {
            font-size: 14px;
          }


          /* WAYS */

          .ways-section {
            height: 300px;
          }

          .pink-support-shape {
            width: 100%;
            height: 420px;
            border-radius: 50%;
            top: -150px
          }

          .ways-content {
            width: 100%;
            padding: 5px 20px;
            left: 10%;
            top: 180px;
          }

          .ways-content h2 {
            font-size: 30px;
          }

          .ways-content p {
            font-size: 16px;
            max-width: 340px;
          }

          .ways-image {
            width: 260px;
            height: 160px;
            right: 30%;
            transform: translateX(50%);
            bottom: -30px;
          }


          /* SUPPORT OPTIONS */

          .support-options {
            padding: 30px 20px 55px;
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .support-option span {
            font-size: 29px;
          }

          .support-option h3 {
            font-size: 17px;
          }

          .support-option p {
            font-size: 14px;
          }
        }


        /* =================================================
           SMALL MOBILE
           ================================================= */

        @media (max-width: 400px) {

          .partner-hero {
            min-height: 500px;
            padding: 30px 15px 0;
          }

          .partner-hero h1 {
            font-size: 24px;
          }

          .partner-hero p {
            font-size: 12px;
          }

          .handshake-wrapper {
            height: 230px;
          }

          .support-section > h2 {
            font-size: 24px;
          }

          .support-card h3 {
            font-size: 20px;
          }

          .ways-section {
          
            height: 300px;
          }

          .pink-support-shape {
          width: 400px;
            height: 400px;
          }

          .ways-content {
            width: 100%;
            padding: 5px 20px;
            left: 10%;
            top: 180px;
          }

          .ways-content h2 {
            font-size: 24px;
          }

          .ways-content p {
            font-size: 13.5px;
            line-height: 1.55;
          }

          .ways-image {

top:50%;
          width: 245px;
            height: 185px;
          }

          .support-options {
            padding: 10px 20px 55px;
             width: 100%;
  max-width: none;
          }

          .support-option span {
            font-size: 27px;
          }

          .support-option h3 {
            font-size: 17px;
          }

          .support-option p {
            font-size: 14px;
             width: 100%;
  max-width: none;
          }

        }

      `}</style>

    </main>
  );
}