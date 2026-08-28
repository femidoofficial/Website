"use client";
import React, { useState } from "react";
import FAQ from "../../components/FAQ.jsx";

export default function ContactPage(){

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #ffffff;
          color: #111111;
        }

        .contact-page {
          width: 100%;
          overflow: hidden;
          background: #ffffff;
        }

        /* ================= HERO ================= */

        .contact-hero-section {
          width: 100%;
          max-width: none;
          margin: 0 auto;
          padding: 22px 30px 30px;
        }

        .contact-hero-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .contact-hero-content {
          width: 42%;
          flex-shrink: 0;
          margin-left: 80px;
          
        }

        .contact-hero-title {
          margin: 0 0 18px;
          font-size: clamp(32px, 4vw, 52px);
          line-height: 1.03;
          font-weight: 700;
          letter-spacing: 0;
        }

        .contact-hero-description {
          margin: 0;
          max-width: 480px;
          color: #555555;
          font-size: 15px;
          line-height: 1.7;
        }

        .contact-hero-image-wrapper {
          width: 58%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .contact-hero-image {
          width: 180%;
          max-width: 630px;
          height: auto;
          object-fit: contain;
          display: block;
        }


        /* ================= CONTACT ================= */

        .contact-section {
          width: 120%;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 0px 0px;
        }

        .contact-card {
          width: 100%;
          display: grid;
          grid-template-columns: 40% 60%;
          border-radius: 12px;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 0 5px 28px rgba(0, 0, 0, 0.12);
          border: 1px solid #eeeeee;
        }

        .get-touch {
          background: #f3f3f3;
          padding: 38px 32px;
        }

        .get-touch h2 {
          margin: 0 0 10px;
          font-size: 25px;
          font-weight: 800;
        }

        .get-touch > p {
          margin: 0 0 28px;
          color: #666666;
          font-size: 13px;
          line-height: 1.6;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-detail {
          display: flex;
          align-items: flex-start;
          gap: 13px;
        }

        .contact-icon {
          width: 30px;
          height: 30px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #f00091;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 13px;
          font-weight: bold;
        }

        .contact-icon svg,
        .social-icon svg {
          width: 15px;
          height: 15px;
          display: block;
          fill: currentColor;
        }

        .contact-icon svg {
          width: 20px;
          height: 20px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.7;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .contact-detail h4 {
          margin: 0 0 4px;
          font-size: 13px;
          font-weight: 700;
        }

        .contact-detail p {
          margin: 0;
          color: #666666;
          font-size: 11px;
          line-height: 1.5;
        }

        .social-title {
          margin: 30px 0 10px;
          font-size: 12px;
          font-weight: 700;
        }

        .social-icons {
          display: flex;
          gap: 8px;
        }

        .social-icon {
          width: 27px;
          height: 27px;
          border-radius: 50%;
          background: #f00091;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: bold;
        }

        .message-area {
          padding: 38px 35px;
          background: white;
        }

        .message-area h2 {
          margin: 0 0 22px;
          font-size: 25px;
          font-weight: 800;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-group {
          width: 100%;
        }

        .form-group.full {
          grid-column: 1 / -1;
        }

        .form-group label {
          display: block;
          margin-bottom: 7px;
          font-size: 11px;
          font-weight: 600;
          color: #222222;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          border: none;
          outline: none;
          border-radius: 20px;
          background: #f5f5f5;
          padding: 12px 16px;
          font-family: inherit;
          font-size: 11px;
          color: #222222;
        }

        .form-group input {
          height: 37px;
        }

        .form-group textarea {
          min-height: 95px;
          border-radius: 12px;
          resize: vertical;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #999999;
        }

        .submit-button {
          display: block;
          width: 140px;
          margin: 20px auto 0;
          border: none;
          border-radius: 5px;
          padding: 11px 15px;
          background: #f00091;
          color: white;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .submit-button:hover {
          background: #d90082;
          transform: translateY(-1px);
        }

        /* ================= TABLET ================= */

        @media (max-width: 900px) {
          .contact-hero-section {
            padding: 50px 25px 45px;
          }

          .contact-hero-container {
            gap: 25px;
          }

          .contact-hero-content {
            width: 45%;
          }

          .contact-hero-image-wrapper {
            width: 55%;
          }

          .contact-section {
            padding: 0 25px 55px;
          }

          .contact-card {
            grid-template-columns: 38% 62%;
          }

          .get-touch,
          .message-area {
            padding: 30px 24px;
          }
        }

        /* ================= MOBILE ================= */

        @media (max-width: 700px) {
          .contact-hero-section {
            padding: 22px 20px 0;
          }

          .contact-hero-container {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }

          .contact-hero-content {
            width: 100%;
            margin-left: 0;
          }

          .contact-hero-title {
            font-size: clamp(36px, 9vw, 48px);
            line-height: 0.98;
            letter-spacing: -1.5px;
            margin-bottom: 14px;
            font-weight: 800;
          }

          .contact-hero-description {
            max-width: 330px;
            margin: 0 auto;
            font-size: 17px;
            line-height: 1.38;
            text-align: center;
          }

          .contact-hero-image-wrapper {
            position: relative;
            width: 118%;
            max-width: 400px;
            margin: 8px auto 0;
            justify-content: center;
            overflow: visible;
            margin-left: -13px;
            margin-bottom: 35px;
          }

          .contact-hero-image-wrapper::before {
            content: "";
            position: absolute;
            left: 50%;
            bottom: -8px;
            width: 90%;
            height: 52%;
            transform: translateX(-50%);
            background: #e7e3df;
            border-radius: 50%;
            z-index: 0;
          }

          .contact-hero-image {
            position: relative;
            z-index: 1;
            width: 100%;
            max-width: 430px;
            margin: 0 auto;
          }

          .contact-section {
            width: 100%;
            padding: 0 20px 45px;
          }

          .contact-card {
            display: flex;
            flex-direction: column;
            min-width: 0;
            border-radius: 10px;
          }

          .get-touch {
            padding: 28px 22px;
          }

          .message-area {
            padding: 30px 22px;
          }

          .get-touch h2,
          .message-area h2 {
            font-size: 24px;
          }

          .form-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .form-group.full {
            grid-column: auto;
          }

          .submit-button {
            width: 100%;
            height: 42px;
            margin-top: 18px;
          }
        }

        /* ================= SMALL MOBILE ================= */

        @media (max-width: 400px) {
          .contact-hero-section,
          
          .contact-section {
            padding-left: 15px;
            padding-right: 15px;
          }

          .contact-hero-title {
            font-size: 33px;
          }

          .contact-hero-image {
            width: 100%;
          }

          .get-touch,
          .message-area {
            padding: 25px 18px;
          }
        }
      `}</style>

      <main className="contact-page">

        {/* HERO */}
        <section className="contact-hero-section">
          <div className="contact-hero-container">

            <div className="contact-hero-content">
              <h1 className="contact-hero-title">
                We're Always
                <br />
                Here for You
              </h1>

              <p className="contact-hero-description">
                Your safety, comfort, and experience matter to us.
                Reach out anytime—we're happy to help. We're here to
                answer your questions, hear your feedback, and help
                make every journey a better one.
              </p>
            </div>

            <div className="contact-hero-image-wrapper">
              <img
                src="/assets/drivers/image 68.png"
                alt="Femido customer support"
                className="contact-hero-image"
              />
            </div>

          </div>
        </section>


       <section>
  <FAQ />
</section>

        {/* CONTACT */}
        <section className="contact-section">
          <div className="contact-card">

            {/* GET IN TOUCH */}
            <div className="get-touch">
              <h2>Get in Touch</h2>

              <p>
                We're here to answer your questions, provide support,
                and hear your feedback.
              </p>

              <div className="contact-details">

                <div className="contact-detail">
                  <div className="contact-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="img">
                      <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </div>

                  <div>
                    <h4>Head Office</h4>
                    <p>
                      138, Uday Nagar, Kanadia road,
                      <br />
                      Indore, 452016
                    </p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="img">
                      <path d="M7.1 3.5 9.5 3l2 4.8-2.2 1.8a15.4 15.4 0 0 0 5.1 5.1l1.8-2.2 4.8 2-.5 2.4a2.6 2.6 0 0 1-2.9 2.1C11 18.1 5.9 13 5 6.4a2.6 2.6 0 0 1 2.1-2.9Z" />
                    </svg>
                  </div>

                  <div>
                    <h4>Call Us</h4>
                    <p>+91 8999844417</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="img">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </div>

                  <div>
                    <h4>Email Us</h4>
                    <p>femidoofficial@gmail.com</p>
                  </div>
                </div>

              </div>

              <div className="social-title">
                Follow us on Social Media
              </div>

              <div className="social-icons">
                <span className="social-icon" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1Z" />
                  </svg>
                </span>
                <span className="social-icon" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 12 16.5 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 12 14.5 2.5 2.5 0 0 0 12 9.5ZM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="social-icon" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="none" stroke="currentColor" strokeWidth="1.6" d="M12 3.5a8.5 8.5 0 0 0-7.3 12.9L3.5 20.5l4.2-1.1A8.5 8.5 0 1 0 12 3.5Z" />
                    <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" d="M8.5 8.5c.4-.7 1-.7 1.3-.2l.8 1.4c.2.3.1.7-.1 1l-.5.5a6.8 6.8 0 0 0 2.8 2.8l.5-.5c.3-.2.7-.3 1-.1l1.4.8c.5.3.5.9-.2 1.3-1 .6-2.3.4-3.7-.4a9 9 0 0 1-2.9-2.9c-.8-1.4-1-2.7-.4-3.7Z" />
                  </svg>
                </span>
                <span className="social-icon" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 8H2v12h3V8Zm.2-3.5A1.7 1.7 0 1 1 1.8 4.5a1.7 1.7 0 0 1 3.4 0ZM22 13.1c0-3.6-1.9-5.3-4.5-5.3-2.1 0-3 1.2-3.5 2V8h-3v12h3v-6.7c0-1.8.3-3.5 2.5-3.5 2.1 0 2.2 2 2.2 3.6V20h3.3v-6.9Z" />
                  </svg>
                </span>
              </div>
            </div>

            {/* MESSAGE FORM */}
            <div className="message-area">
              <h2>Send us a Message</h2>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Message submitted!");
                }}
              >
                <div className="form-grid">

                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      placeholder="Enter your First Name"
                    />
                  </div>

                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      placeholder="Enter your Last Name"
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      placeholder="Enter your Email Address"
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      placeholder="Enter your Phone Number"
                    />
                  </div>

                  <div className="form-group full">
                    <label>Subject</label>
                    <input
                      type="text"
                      placeholder="Enter your Subject (Required)"
                    />
                  </div>

                  <div className="form-group full">
                    <label>Message</label>
                    <textarea
                      placeholder="Write your Message..."
                    />
                  </div>

                </div>

                <button
                  type="submit"
                  className="submit-button"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}