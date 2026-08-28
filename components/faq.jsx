"use client";

import { useState } from "react";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "Where is Femido available?",
      answer:
        "FemiDo is currently launching in Indore and will gradually expand to other cities.",
    },
    {
      question: "Is every driver verified?",
      answer:
        "Yes. Every driver must complete identity, document, driving licence and background verification before approval.",
    },
    {
      question: "How can I become a Femido driver?",
      answer:
        "Women interested in becoming FemiDo drivers can register through the FemiDo app or contact our support team. Required documents and verification will be completed during onboarding.",
    },
    {
      question: "Is Femido only for women?",
      answer:
        "Yes. FemiDo is a women-focused mobility platform connecting women passengers with verified women drivers.",
    },
    {
      question: "Can I cancel my booking?",
      answer:
        "Yes. You can cancel your ride through the app. Cancellation charges may apply depending on the booking status.",
    },
    {
      question: "Can I schedule a ride in advance?",
      answer:
        "No. Currently, FemiDo rides can be booked on-demand only, based on driver availability.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .faq-section {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 25px 40px 70px;
        }

        .faq-container {
          display: grid;
          grid-template-columns: 40% 60%;
          align-items: start;
          gap: 45px;
        }

        .faq-intro {
          margin-left: -97px;
        }

        .faq-heading {
          margin: 0 0 12px;
          font-size: clamp(32px, 3.5vw, 48px);
          line-height: 1.05;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .faq-description {
          margin: 0;
          max-width: 380px;
          color: #666666;
          font-size: 14px;
          line-height: 1.65;
        }

        .faq-list {
          width: 100%;
        }

        .faq-item {
          margin-bottom: 10px;
          border-radius: 8px;
          background: #f5f5f5;
          overflow: hidden;
        }

        .faq-question {
          width: 100%;
          border: none;
          outline: none;
          background: transparent;
          padding: 15px 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: left;
          cursor: pointer;
          font-size: 15px;
          font-weight: 500;
          color: #222222;
        }

        .faq-icon {
          min-width: 21px;
          width: 21px;
          height: 21px;
          border-radius: 50%;
          background: #f00091;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 500;
          transition: transform 0.25s ease;
        }

        .faq-icon.open {
          transform: rotate(45deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
        }

        .faq-answer.open {
          max-height: 180px;
          padding: 0 18px 16px;
        }

        .faq-answer p {
          margin: 0;
          color: #666666;
          font-size: 13px;
          line-height: 1.6;
          font-weight: 300;
        }


        /* ================= TABLET ================= */

        @media (max-width: 900px) {

          .faq-section {
            padding: 20px 25px 55px;
          }

          .faq-container {
            grid-template-columns: 38% 62%;
            gap: 25px;
          }

        }


        /* ================= MOBILE ================= */

        @media (max-width: 700px) {

          .faq-section {
            padding: 25px 20px 45px;
          }

          .faq-container {
            display: flex;
            flex-direction: column;
            gap: 25px;
          }

          .faq-intro {
            width: 100%;
            margin-left: 0;
          }

          .faq-heading {
            font-size: clamp(32px, 9vw, 40px);
          }

          .faq-description {
            max-width: 100%;
            font-size: 13px;
          }

          .faq-question {
            padding: 14px;
            font-size: 12px;
          }

          .faq-answer.open {
            padding: 0 14px 14px;
          }

        }


        /* ================= SMALL MOBILE ================= */

        @media (max-width: 400px) {

          .faq-section {
            padding-left: 15px;
            padding-right: 15px;
          }

          .faq-question {
            font-size: 11px;
            padding: 13px 12px;
          }

          .faq-icon {
            width: 19px;
            height: 19px;
            min-width: 19px;
            font-size: 14px;
          }

        }
      `}</style>

      <section className="faq-section">
        <div className="faq-container">

          {/* FAQ INTRO */}
          <div className="faq-intro">
            <h2 className="faq-heading">
              Frequently asked Questions
            </h2>

            <p className="faq-description">
              Everything you need to know about Femido—from
              booking rides to safety features—all in one place.
            </p>
          </div>

          {/* FAQ LIST */}
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index}>

                <button
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                  type="button"
                >
                  <span>{faq.question}</span>

                  <span
                    className={`faq-icon ${
                      openFaq === index ? "open" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`faq-answer ${
                    openFaq === index ? "open" : ""
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}