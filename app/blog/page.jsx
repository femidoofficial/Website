"use client";

import React from "react";

export default function BlogPage() {
  const posts = [
    {
      image: "/assets/blog/image 70.png",
      title: "Breaking Stereotypes: Women Behind the Wheel",
      description:
        "Meet the women challenging stereotypes, proving that the road belongs to everyone.",
    },
    {
      image: "/assets/blog/image 71.png",
      title: "A Local's Guide to Exploring Indore Comfortably and Safely",
      description:
        "From busy streets to hidden gems, here's how to make every journey across Indore safe.",
    },
    {
      image: "/assets/blog/image 72.png",
      title: "Every Safe Ride Is One Less Thing to Worry About",
      description:
        "A safe ride isn't just about getting from one place to another, it's about traveling with peace.",
    },
    {
      image: "/assets/blog/image 73.png",
      title: "The City Belongs to Women Too at any hour, on any road.",
      description:
        "Because every road, every opportunity should be just as accessible to women as anyone else.",
    },
    {
      image: "/assets/blog/image 74.png",
      title: "Not Every Hero Wears a Cape. Some Drive You Home.",
      description:
        "To the women, who drive with care, courage and compassion, thank you for every journey.",
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
          padding: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #ffffff;
          color: #171717;
        }

        /* ================= BLOG PAGE ================= */

        .blog-page {
          width: 100%;
          min-height: 100vh;
          background: #ffffff;
          overflow: hidden;
        margin-top: -80px;
  

        }

        .blog-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0px 40px 70px;
        }


        /* ================= FEATURED ARTICLE ================= */

        .featured-article {
          position: relative;
          width: 100vw;
          height: 800px;
          overflow: hidden;
          border-radius: 0;
          margin-bottom: 48px;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
        }

        .featured-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .featured-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.85) 0%,
              rgba(0, 0, 0, 0.60) 40%,
              rgba(0, 0, 0, 0.15) 75%,
              rgba(0, 0, 0, 0.05) 100%
            );
        }

        .featured-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1200px;
          margin-left: 3%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 40px 40px 80px 0px;
        }

        .featured-label {
          margin: 0 0 10px;
          color: #ff2695;
          font-size: 17px;
          font-weight: 600;
        }

        .featured-title {
          margin: 0 0 15px;
          max-width: 720px;
          color: #ffffff;
          font-size: clamp(38px, 4vw, 58px);
          line-height: 1.08;
          font-weight: 700;
          letter-spacing: -1px;
        }

        .featured-description {
          max-width: 680px;
          margin: 0 0 20px;
          color: #ffffff;
          font-size: 16px;
          line-height: 1.5;
        }

        .read-button {
          width: 245px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 8px;
          background: #ff2695;
          color: #ffffff;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: 0.2s ease;
        }

        .read-button:hover {
          background: #e91d83;
          transform: translateY(-1px);
        }


        /* ================= BLOG GRID ================= */

        .blog-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 42px 50px;
          margin-left: 0;
          align-items: center;
        }


        /* ================= BLOG CARD ================= */

        .blog-card {
          width: 100%;
          overflow: hidden;
          border-radius: 10px;
          background: #f3f3f3;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .blog-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 12px rgba(0, 0, 0, 0.18);
        }

        .blog-card-image {
          width: 100%;
          height: 255px;
          display: block;
          object-fit: cover;
        }

        .blog-card-content {
          padding: 13px 13px 16px;
        }

        .blog-card-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .blog-reading-time {
          color: #ff2695;
          font-size: 12px;
          font-weight: 500;
        }

        .blog-date {
          color: #333333;
          font-size: 12px;
        }

        .blog-card-title {
          margin: 0 0 8px;
          color: #171717;
          font-size: 20px;
          line-height: 1.18;
          font-weight: 700;
        }

        .blog-card-description {
          margin: 0;
          color: #555555;
          font-size: 13px;
          line-height: 1.4;
        }


        /* ================= TABLET ================= */

        @media (max-width: 900px) {

          .blog-container {
            padding: 40px 25px 60px;
          }

          .featured-article {
            height: 450px;
            margin-bottom: 40px;
          }

          .featured-content {
            width: 100%;
            max-width: 1200px;
            margin-left: 3%;
            padding: 30px 25px;
          }

          .featured-title {
            font-size: clamp(34px, 5vw, 48px);
          }

          .featured-description {
            font-size: 15px;
          }

          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }

          .blog-card-image {
            height: 230px;
          }

        }


        /* ================= MOBILE ================= */

        @media (max-width: 700px) {

          .blog-container {
            padding: 25px 20px 50px;
          }

          .featured-article {
            height: 470px;
            margin-bottom: 30px;
            width: calc(100% + 40px);
            margin-left: -20px;
            margin-right: -20px;
            left: auto;
            right: auto;
          }

          .featured-image {
            object-position: right center;
          }

          .featured-overlay {
            background:
              linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.88) 0%,
                rgba(0, 0, 0, 0.55) 48%,
                rgba(0, 0, 0, 0.15) 100%
              );
          }

          .featured-content {
            width: 100%;
            height: 100%;
            justify-content: flex-end;
            padding: 25px 20px 30px;
          }

          .featured-label {
            font-size: 15px;
            margin-bottom: 8px;
          }

          .featured-title {
            font-size: clamp(30px, 8vw, 40px);
            line-height: 1.08;
            letter-spacing: -0.5px;
            margin-bottom: 12px;
          }

          .featured-description {
            font-size: 14px;
            line-height: 1.45;
            margin-bottom: 18px;
          }

          .read-button {
            width: 100%;
            height: 46px;
            font-size: 14px;
          }

          .blog-grid {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .blog-card-image {
            height: 240px;
          }

          .blog-card-content {
            padding: 13px 13px 16px;
          }

          .blog-card-title {
            font-size: 19px;
          }

          .blog-card-description {
            font-size: 13px;
          }

        }


        /* ================= SMALL MOBILE ================= */

        @media (max-width: 450px) {

          .blog-container { 
            padding-left: 15px;
            padding-right: 15px;
            
          }

          .featured-article {
            height: 680px;
            width: calc(100% + 30px);
            margin-left: -15px;
            margin-right: -15px;
            left: auto;
            right: auto;
          }

          .featured-image {
            object-position: 80% center;
          }

          .featured-content {
            padding: 20px 0px 25px;
            margin-left: 0%;
          }
            
   
          
          

          .featured-label {
            font-size: 14px;
          }

          .featured-title {
            font-size: 29px;
          }

          .featured-description {
            font-size: 13px;
          }

          .blog-card-image {
            height: 215px;
          }

          .blog-card-title {
            font-size: 18px;
          }

          .blog-card-description {
            font-size: 12px;
          }

        }

      `}</style>


      <main className="blog-page">

        <div className="blog-container">


          {/* ================= FEATURED ARTICLE ================= */}

          <section className="featured-article">

            <img
              src="/assets/blog/image 56.png"
              alt="Woman traveling safely in a car"
              className="featured-image"
            />

            <div className="featured-overlay"></div>

            <div className="featured-content">

              <p className="featured-label">
                Featured Article
              </p>

              <h1 className="featured-title">
                10 Safety Tips Every Woman
                <br className="desktop-only" />
                Should Know Before Booking a Ride
              </h1>

              <p className="featured-description">
                Every woman deserves to travel with confidence.
                Discover simple safety practices that can make
                every ride more secure and stress-free.
              </p>

              <a
                href="/article"
                className="read-button"
              >
                Read Article
              </a>

            </div>

          </section>


          {/* ================= BLOG POSTS ================= */}

          <section className="blog-grid">

            {posts.map((post, index) => (

              <article
                className="blog-card"
                key={index}
              >

                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-card-image"
                />

                <div className="blog-card-content">

                  <div className="blog-card-meta">

                    <span className="blog-reading-time">
                      4 mins read
                    </span>

                    <span className="blog-date">
                      31 July 2026
                    </span>

                  </div>

                  <h2 className="blog-card-title">
                    {post.title}
                  </h2>

                  <p className="blog-card-description">
                    {post.description}
                  </p>

                </div>

              </article>

            ))}

          </section>


        </div>

      </main>
    </>
  );
}