"use client";

export default function TermsPage() {
  return (
    <>
      <style jsx>{`
        .terms-page {
          width: 100%;
          min-height: 100vh;
          background: #ffffff;
          color: #222222;
          padding: 55px 5%;
          box-sizing: border-box;
          font-family: Arial, Helvetica, sans-serif;
        }

        .terms-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Main Title */
        .terms-title {
          font-size: 38px;
          font-weight: 700;
          margin: 0 0 42px;
          color: #222222;
          text-decoration: underline;
          text-decoration-color: #ff2490;
          text-decoration-thickness: 3px;
          text-underline-offset: 8px;
        }

        /* Section */
        .terms-section {
          margin-bottom: 38px;
        }

        /* Sub Heading */
        .terms-section h2 {
          font-size: 19px;
          font-weight: 600;
          color: #ff2490;
          margin: 0 0 12px;
        }

        /* Paragraph */
        .terms-section p {
          font-size: 17px;
          line-height: 1.55;
          font-weight: 400;
          color: #292929;
          margin: 0;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .terms-page {
            padding: 40px 22px;
          }

          .terms-title {
            font-size: 32px;
            margin-bottom: 35px;
          }

          .terms-section {
            margin-bottom: 30px;
          }

          .terms-section h2 {
            font-size: 18px;
            margin-bottom: 10px;
          }

          .terms-section p {
            font-size: 15px;
            line-height: 1.55;
          }
        }

        @media (max-width: 480px) {
          .terms-page {
            padding: 32px 18px;
          }

          .terms-title {
            font-size: 28px;
            margin-bottom: 30px;
            text-underline-offset: 6px;
          }

          .terms-section {
            margin-bottom: 27px;
          }

          .terms-section h2 {
            font-size: 17px;
          }

          .terms-section p {
            font-size: 14px;
            line-height: 1.55;
          }
        }
      `}</style>

      <main className="terms-page">
        <div className="terms-container">

          <h1 className="terms-title">
            Terms & Conditions
          </h1>

          <section className="terms-section">
            <h2>1. Introduction</h2>
            <p>
              Whether you're heading to work, college, shopping, or home,
              FemiDo offers a range of ride options driven by verified women
              to make every journey safe, comfortable, and convenient.
            </p>
          </section>

          <section className="terms-section">
            <h2>2. Acceptance of Terms</h2>
            <p>
              By using FemiDo, you agree to comply with these Terms & Conditions
              as well as any additional policies that may be published on our
              platform. If you do not agree with any part of these terms, you
              should discontinue using our services immediately. Your continued
              use of FemiDo after any updates or modifications to these Terms
              constitutes your acceptance of those changes. We encourage all
              users to review this page periodically to stay informed about
              their rights and responsibilities while using our platform.
            </p>
          </section>

          <section className="terms-section">
            <h2>3. Eligibility</h2>
            <p>
              FemiDo is designed exclusively for women and aims to create a
              trusted community of verified female riders and drivers. To use
              our services, users must be at least 18 years of age and provide
              accurate, complete, and up-to-date information during registration.
              Drivers are required to complete our verification process, submit
              valid identification and driving documents, and meet all applicable
              legal requirements before accepting ride requests. FemiDo reserves
              the right to suspend or terminate accounts that provide false
              information or fail to meet our eligibility requirements.
            </p>
          </section>

          <section className="terms-section">
            <h2>4. User Responsibilities</h2>
            <p>
              Every member of the FemiDo community is expected to treat others
              with respect, professionalism, and courtesy. Users are responsible
              for maintaining the confidentiality of their account credentials
              and ensuring that all information associated with their account
              remains accurate. Riders should book rides only for lawful
              purposes, follow applicable safety guidelines, and refrain from
              engaging in abusive, discriminatory, or inappropriate behavior.
              Any misuse of the platform, including fraudulent bookings or
              activities that compromise the safety of others, may result in
              account suspension or permanent removal from the platform.
            </p>
          </section>

          <section className="terms-section">
            <h2>5. Driver Responsibilities</h2>
            <p>
              Drivers play a vital role in maintaining the trust and safety of
              the FemiDo community. All drivers are expected to maintain valid
              licenses, vehicle registrations, insurance, and any additional
              documentation required by local authorities. Drivers must operate
              their vehicles responsibly, follow all traffic laws, maintain a
              clean and roadworthy vehicle, and provide courteous service to
              every rider. Failure to comply with these standards may result in
              temporary suspension or permanent removal from the FemiDo platform.
            </p>
          </section>

          <section className="terms-section">
            <h2>6. Ride Bookings and Payments</h2>
            <p>
              Ride requests made through FemiDo are subject to driver availability
              and operational conditions. Estimated arrival times, travel routes,
              and fares are provided for convenience and may vary due to traffic,
              weather, road closures, or other unforeseen circumstances. Users
              agree to pay the applicable fare and any additional charges
              associated with completed rides using the payment methods supported
              by the platform. FemiDo reserves the right to modify pricing,
              promotional offers, or payment policies as necessary while
              providing reasonable notice whenever applicable.
            </p>
          </section>

          <section className="terms-section">
            <h2>7. Contact Us</h2>
            <p>
              If you have any questions, concerns, or require clarification
              regarding these Terms & Conditions, please feel free to contact
              our support team. We are committed to assisting our users and
              ensuring transparency in all aspects of our services.
            </p>
          </section>

        </div>
      </main>
    </>
  );
}