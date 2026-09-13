"use client";
import Link from "next/link";
import React from "react";
import colors from "tailwindcss/colors";

export default function SafetyTipsPage() {
  const relatedPosts = [
    {
      image: "/assets/blog/image 70.png",
      title: "Breaking Stereotypes: Women Behind the Wheel",
      description:
        "Meet the women challenging stereotypes, proving that the road belongs to everyone.",
    },
    {
      image: "/assets/blog/image 71.png",
      title: "A Local's Guide to Exploring Indore Comfortably and Safel...",
      description:
        "From busy streets to hidden gems, here's how to make every journey across Indore safe.",
    },
    {
      image: "/assets/blog/image 72.png",
      title: "Every Safe Ride Is One Less Thing to Worry About",
      description:
        "A safe ride isn't just about getting from one place to another, it's about traveling with peace.",
    },
  ];

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
          color: #171717;
        }

        /* ================= BLOG PAGE ================= */

        .blog-page {
          width: 100%;
          min-height: 100vh;
          background: #ffffff;
        }

        .blog-container {
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0px 10px 70px;
          margin-top: 30px;
        }

        /* ================= BREADCRUMB ================= */

        .blog-breadcrumb {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 10px;
          font-size: 16px;
          color: #222222;
        }

        .blog-breadcrumb .separator {
          color: #777777;
        }

        /* ================= HERO IMAGE ================= */

        .blog-hero-image {
          width: 180%;
          height: 800px;
          object-fit: cover;
          display: block;
          border-radius: 14px;
          margin-bottom: 16px;
        }

        /* ================= META ================= */

        .blog-meta {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .blog-author {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .author-image {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
        }

        .author-name {
          font-size: 14px;
          font-weight: 500;
          color: #222222;
        }

        .blog-date-info {
          text-align: right;
        }

        .blog-date {
          font-size: 14px;
          color: #222222;
          margin-bottom: 4px;
        }

        .reading-time {
          font-size: 12px;
          color: #555555;
        }

        /* ================= TITLE ================= */

        .blog-title {
          margin: 0 0 12px;
          max-width: 900px;
          font-size: clamp(36px, 4.2vw, 56px);
          line-height: 1.08;
          font-weight: 700;
          letter-spacing: -1.5px;
          color: #f00091;
        }

        /* ================= ARTICLE ================= */

        .blog-content {
          width: 100%;
          max-width: 1150px;
        }

        .blog-content p {
          margin: 0 0 10px;
          font-size: 14px;
          line-height: 1.45;
          color: #222222;
        }

        .blog-content strong {
          font-weight: 700;
        }

        .blog-intro {
          margin-bottom: 15px !important;
        }

        .blog-point {
          margin-bottom: 24px !important;
        }

        .blog-point strong {
          display: block;
          color: #f00091;
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 6px;
        }

        /* ================= TAGS ================= */

        .blog-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 22px;
          margin-bottom: 26px;
        }

        .blog-tag {
          padding: 7px 13px;
          border-radius: 20px;
          background: #e9e9e9;
          color: #555555;
          font-size: 12px;
          line-height: 1;
        }

        /* ================= RELATED ================= */

        .related-section {
          width: 100%;
          margin-top: 10px;
        }

        .related-title {
          margin: 0 0 16px;
          font-size: 25px;
          line-height: 1.2;
          font-weight: 700;
          color: #f00091;
        }

        .related-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .related-card {
          width: 100%;
          overflow: hidden;
          border-radius: 8px;
          background: #f4f4f4;
        }

        .related-image {
          width: 100%;
          height: 190px;
          object-fit: cover;
          display: block;
        }

        .related-card-content {
          padding: 10px 10px 13px;
        }

        .related-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .related-reading {
          color: #f00091;
          font-size: 10px;
        }

        .related-date {
          color: #333333;
          font-size: 10px;
        }

        .related-card-title {
          margin: 0 0 7px;
          font-size: 15px;
          line-height: 1.15;
          font-weight: 700;
          color: #151515;
        }

        .related-card-description {
          margin: 0;
          font-size: 11px;
          line-height: 1.35;
          color: #555555;
        }


        /* ================= TABLET ================= */

        @media (max-width: 900px) {

          .blog-container {
            padding: 30px 25px 60px;
          }

          .blog-hero-image {
            height: 450px;
          }

          .blog-title {
            font-size: clamp(34px, 5vw, 48px);
          }

          .related-grid {
            gap: 15px;
          }

          .related-image {
            height: 170px;
          }

        }


        /* ================= MOBILE ================= */

        @media (max-width: 700px) {

          .blog-container {
            padding: 25px 20px 50px;
          }

          .blog-breadcrumb {
            font-size: 11px;
            margin-bottom: 9px;
          }

          .blog-hero-image {
            height: 320px;
            border-radius: 11px;
            margin-bottom: 14px;
          }

          .blog-meta {
            margin-bottom: 12px;
          }

          .author-image {
            width: 35px;
            height: 35px;
          }

          .author-name {
            font-size: 12px;
          }

          .blog-date {
            font-size: 12px;
          }

          .reading-time {
            font-size: 10px;
          }

          .blog-title {
            max-width: 100%;
            font-size: clamp(30px, 8vw, 40px);
            line-height: 1.08;
            letter-spacing: -0.8px;
            margin-bottom: 14px;
          }

          .blog-content p {
            font-size: 13px;
            line-height: 1.5;
          }

          .blog-point {
            margin-bottom: 13px !important;
          }

          .blog-tags {
            margin-top: 20px;
            margin-bottom: 25px;
          }

          .blog-tag {
            font-size: 11px;
            padding: 7px 11px;
          }

          .related-title {
            font-size: 22px;
            margin-bottom: 14px;
            color: #f00091;
          }

          .related-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .related-image {
            height: 210px;
          }

          .related-card-title {
            font-size: 16px;
          }

          .related-card-description {
            font-size: 12px;
          }

        }


        /* ================= SMALL MOBILE ================= */

        @media (max-width: 400px) {

          .blog-container {
            padding-left: 15px;
            padding-right: 15px;
          }

          .blog-hero-image {
            height: 260px;
            border-radius: 9px;
          }

          .blog-title {
            font-size: 29px;
            letter-spacing: -0.5px;
          }

          .blog-content p {
            font-size: 12px;
          }

          .related-image {
            height: 190px;
          }

          .related-title {
            font-size: 21px;
            color: #f00091;
          }

        }

      `}</style>

      <main className="blog-page">
        <div className="blog-container">

          {/* BREADCRUMB */}

          <div className="blog-breadcrumb">
            <span> <Link href="/">
            Home
          </Link></span>

            <span className="separator">›</span>
            <span><Link href="/blog">
            Blog
          </Link></span>
            <span className="separator">›</span>
            <span>10 Safety Tips</span>
          </div>


          {/* HERO IMAGE */}

          <img
            src="/assets/blog/image 57.png"
            alt="Woman sitting safely inside a car"
            className="blog-hero-image"
          />


          {/* AUTHOR + DATE */}

          <div className="blog-meta">

            <div className="blog-author">
              <img
                src="/assets/blog/Group 22.png"
                alt="Shivani Thakur"
                className="author-image"
              />

              <span className="author-name">
                Shivani Thakur
              </span>
            </div>

            <div className="blog-date-info">
              <div className="blog-date">
                31 July 2026
              </div>

              <div className="reading-time">
                4 mins read
              </div>
            </div>

          </div>


          {/* TITLE */}

          <h1 className="blog-title">
            10 Safety Tips Every Woman Should
            <br className="desktop-break" />
            Know Before Booking a Ride
          </h1>


          {/* ARTICLE */}

          <article className="blog-content">

            <p className="blog-intro">
              Navigating the city—whether for an early morning flight,
              a late-night study session, or a daily office commute—should
              come with complete peace of mind. While ride-hailing apps
              have made urban mobility vastly more convenient, staying
              proactive about your personal safety remains key.
            </p>

            <p className="blog-intro">
              Here are 10 essential, practical safety tips every woman
              should keep in mind before, during, and after booking a ride.
            </p>


            <p className="blog-point">
              <strong>1. Wait Indoors Until Your Ride Arrives</strong>
              <br />
              Avoid standing alone on dark or quiet street corners while
              waiting for your cab. Stay inside your home, cafe, or office
              until the app notifies you that your driver has reached the
              exact pickup spot.
            </p>


            <p className="blog-point">
              <strong >2. Double-Check the "Match 3" Rule</strong>
              <br />
              Before stepping into any vehicle, always verify three key
              details on your screen:
              <br />
              The Vehicle Registration Number
              <br />
              The Car Make, Model, and Color
              <br />
              The Driver’s Name and Profile Photo
              <br />
              Pro Tip: Never get into a car where the license plate or
              driver doesn’t match what is shown in the app—even if the
              driver claims they are "substitutes for today."
            </p>


            <p className="blog-point">
              <strong>3. Ask "Who are you picking up?"</strong>
              <br />
              Instead of asking "Are you here for [Your Name]?", let the
              driver speak first. Ask them: "Who are you picking up?"
              A legitimate driver will easily state your name from their
              driver app interface.
            </p>


            <p className="blog-point">
              <strong>4. Always Sit in the Back Seat</strong>
              <br />
              Sitting in the back passenger seat gives you maximum personal
              space and two immediate exit points. It also keeps a safe
              physical distance between you and the driver, ensuring better
              visibility of the surroundings.
            </p>


            <p className="blog-point">
              <strong>5. Share Your Live Trip Status</strong>
              <br />
              Make it a habit to share your live trip tracking link with a
              trusted family member or friend.
              <br />
              Platforms with built-in Live Location Sharing allow your
              loved ones to track your route, real-time speed, and estimated
              time of arrival (ETA) directly from their phones.
            </p>


            <p className="blog-point">
              <strong>6. Keep Your Phone Charged & Accessible</strong>
              <br />
              Your phone is your primary safety toolkit. Ensure you have
              sufficient battery before embarking on a ride, and keep your
              device in your hand or a accessible pocket—not tucked away
              deep inside a zipped bag.
            </p>


            <p className="blog-point">
              <strong>7. Pretend to Make a Call (Or Actually Make One)</strong>
              <br />
              If something feels slightly off, or if you simply want an
              extra layer of precaution during a late-night ride, call a
              friend or family member. Speak clearly:
              <br />
              "Hey, I just got into the cab, my ETA is 20 minutes, and I've
              shared my live location with you."
            </p>


            <p className="blog-point">
              <strong>8. Trust Your Instincts Immediately</strong>
              <br />
              Your gut feeling is your sharpest safety tool. If a driver
              seems overly intrusive, makes uncomfortable personal
              conversation, or strays off a known route, don't hesitate
              to take action.
              <br />
              Politely ask them to pull over at a well-lit, public area
              (like a petrol pump or store front).
              <br />
              Use the In-App Emergency SOS button if you ever feel unsafe
              or threatened.
            </p>


            <p className="blog-point">
              <strong>9. Protect Your Personal Information</strong>
              <br />
              Keep conversations friendly but general. Avoid sharing
              sensitive details such as:
              <br />
              Your full daily routine or work schedule
              Whether you live alone
              Your personal phone number (always communicate through
              masked app calls)
            </p>


            <p className="blog-point">
              <strong>10. Rate & Review Truthfully</strong>
              <br />
              Safety is built by the community, for the community. Always
              take 5 seconds at the end of your ride to rate your experience
              honestly. If a driver was exceptional—or if something felt
              unsafe—reporting it helps keep the platform safe for every
              woman who rides next.
            </p>


            <p className="blog-point">
              <strong>How FemiDo Elevates Your Daily Commute</strong>
              <br />
              At FemiDo, safety isn't an afterthought—it's the core
              foundation of every feature we build. From 100% verified
              women drivers and 24/7 route monitoring to one-tap emergency
              SOS support, we are committed to making every journey across
              the city comfortable, reliable, and secure.
            </p>

          </article>


          {/* TAGS */}

          <div className="blog-tags">
            <span className="blog-tag">#FemiDo</span>
            <span className="blog-tag">#WomenSafety</span>
            <span className="blog-tag">#CabRides</span>
          </div>


          {/* RELATED POSTS */}

          <section className="related-section">

            <h2 className="related-title">
              You might also like :
            </h2>

            <div className="related-grid">

              {relatedPosts.map((post, index) => (
                <article className="related-card" key={index}>

                  <img
                    src={post.image}
                    alt={post.title}
                    className="related-image"
                  />

                  <div className="related-card-content">

                    <div className="related-meta">
                      <span className="related-reading">
                        4 mins read
                      </span>

                      <span className="related-date">
                        31 July 2026
                      </span>
                    </div>

                    <h3 className="related-card-title">
                      {post.title}
                    </h3>

                    <p className="related-card-description">
                      {post.description}
                    </p>

                  </div>

                </article>
              ))}

            </div>

          </section>

        </div>
      </main>
    </>
  );
}