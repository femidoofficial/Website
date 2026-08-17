'use client';

import DownloadSection from "../components/DownloadSection.jsx";
import { useEffect, useRef, useState, useCallback } from "react";

const testimonialsData = [
  {
    id: "isha-thakral",
    name: "Isha Thakral",
    stars: "★ ★ ★ ★ ★",
    text: "Working late shifts in the city made me cautious. FemiDo’s real-time tracking feature reassures both me and my family every night.",
    image: "/assets/drivers/Group 21.png",
  },
  {
    id: "riya-malhotra",
    name: "Riya Malhotra",
    stars: "★ ★ ★ ★ ★",
    text: "As a freelance photographer often on the move, FemiDo keeps me connected and safe, letting me focus on my art without worry.",
    image: "/assets/drivers/Group 21.png",
  },
  {
    id: "ananya-sharma",
    name: "Ananya Sharma",
    stars: "★ ★ ★ ★ ★",
    text: "Jogging late in the evening used to feel risky. FemiDo gives me peace of mind knowing I can get home safely.",
    image: "/assets/drivers/Group 21.png",
  },
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [trackTransform, setTrackTransform] = useState(0);

  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((index) => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    const cards = track.querySelectorAll(".testimonial-card");
    const card = cards[index];
    if (!card) return;

    const wrapperWidth = wrapper.clientWidth;
    const cardLeft = card.offsetLeft;
    const cardWidth = card.offsetWidth;

    // Calculate offset to precisely center the card inside the wrapper
    const cardCenter = cardLeft + cardWidth / 2;
    const viewportCenter = wrapperWidth / 2;

    setTrackTransform(viewportCenter - cardCenter);
  }, []);

  const goToSlide = useCallback((index) => {
    const total = testimonialsData.length;
    const normalized = ((index % total) + total) % total;
    setCurrentTestimonial(normalized);
  }, []);

  // Update position on active slide change
  useEffect(() => {
    updatePosition(currentTestimonial);
  }, [currentTestimonial, updatePosition]);

  // Recalculate on window resize or when layout stabilizes
  useEffect(() => {
    const handleResize = () => updatePosition(currentTestimonial);
    window.addEventListener("resize", handleResize);

    // Initial positioning
    updatePosition(currentTestimonial);
    const t1 = setTimeout(() => updatePosition(currentTestimonial), 80);
    const t2 = setTimeout(() => updatePosition(currentTestimonial), 300);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [currentTestimonial, updatePosition]);

  // Touch swipe events
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 45) {
        goToSlide(currentTestimonial + 1);
      } else if (diff < -45) {
        goToSlide(currentTestimonial - 1);
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Mouse drag events for desktop
  const handleMouseDown = (e) => {
    isDragging.current = true;
    touchStartX.current = e.clientX;
    touchEndX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    touchEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (isDragging.current) {
      isDragging.current = false;
      if (touchStartX.current !== null && touchEndX.current !== null) {
        const diff = touchStartX.current - touchEndX.current;
        if (diff > 45) {
          goToSlide(currentTestimonial + 1);
        } else if (diff < -45) {
          goToSlide(currentTestimonial - 1);
        }
      }
      touchStartX.current = null;
      touchEndX.current = null;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      goToSlide(currentTestimonial - 1);
    } else if (e.key === "ArrowRight") {
      goToSlide(currentTestimonial + 1);
    }
  };


  return (
    <>
<section id="home" className="hero">
      
          
          <div className="hero-content">
      
              <h1>
                  Women driving<br />
                  women forward.
              </h1>
      
              <p>
                  Indore’s dedicated ride community connecting verified
                  female drivers with women commuters. Safe, reliable, and
                  comfortable daily travel across the city.
              </p>
      
              <div className="hero-buttons">
                  <a href="#" className="download-btn">Download App</a>
                  <a href="#" className="explore-btn">Explore the Vision</a>
              </div>
      
          </div>
      
         
          <div className="circle-container">
              <div className="pink-circle"></div>
      
              <img
                  className="hero-image"
                  src="/assets/drivers/image 22.png"
                  alt="Women riding scooter"
               />
          </div>
      
      </section>
      
      <section id="safety" className="safety-section">
      
         
          <div className="safety-left">
      
              <div className="safety-circle"></div>
      
              <div className="safety-content">
                  <h2>Safety First</h2>
      
                  <p>
                      Every ride is backed by active safety controls
                      built directly into your app.
                  </p>
              </div>
      
              <img
                  src="/assets/drivers/image 36.png"
                  className="safety-woman"
                  alt="Woman using phone"
               />
      
          </div>
      
      
          
          <div className="safety-right">
      
              <div className="safety-cards">
      
                  <div className="safety-card">
                      <h3>One-Tap<br />SOS Help</h3>
                      <p>
                          One-tap access to assistance teams
                          anytime, anywhere.
                      </p>
                  </div>
      
                  <div className="safety-card">
                      <h3>Live GPS<br />Share</h3>
                      <p>
                          Share your exact route so family can
                          follow your trip.
                      </p>
                  </div>
      
                  <div className="safety-card">
                      <h3>Trusted<br />Captains</h3>
                      <p>
                          100% identity-verified women
                          drivers every time
                      </p>
                  </div>
      
                  <div className="safety-card">
                      <h3>Emergency<br />Contacts</h3>
                      <p>
                          Share your real-time route with
                          family instantly.
                      </p>
                  </div>
      
              </div>
      
              <a href="#" className="read-more">Read More</a>
      
          </div>
      
      </section>
      
      
      <section id="services" className="rides-section">
      
          <h2 className="rides-title">Rides Tailored for Every Journey</h2>
      
          <div className="rides-grid">
      
            
              <div className="ride-card">
                  <div className="ride-info">
                      <h3>Activa</h3>
                      <p>Beat traffic,<br />ride quicker</p>
                  </div>
      
                  <img
                      src="/assets/services/activa.png"
                      alt="Activa"
                      className="ride-image activa-image"
                   />
              </div>
      
      
              <div className="ride-card">
                  <div className="ride-info">
                      <h3>Auto</h3>
                      <p>Everyday autos,<br />made easy</p>
                  </div>
      
                  <img
                      src="/assets/services/auto.png"
                      alt="Auto"
                      className="ride-image auto-image"
                   />
              </div>
      
      
             
              <div className="ride-card">
                  <div className="ride-info">
                      <h3>E-Rickshaw</h3>
                      <p>Eco-friendly<br />group hops</p>
                  </div>
      
                  <img
                      src="/assets/services/E-Rickshaw.png"
                      alt="E-Rickshaw"
                      className="ride-image erickshaw-image"
                   />
              </div>
      
      
              
              <div className="ride-card">
                  <div className="ride-info">
                      <h3>Cab</h3>
                      <p>Comfort for<br />every journey</p>
                  </div>
      
                  <img
                      src="/assets/services/cab.png"
                      alt="Cab"
                      className="ride-image cab-image"
                   />
              </div>
      
          </div>
      
           {/* <a href="#" className="rides-button">Read More</a>  */}
      
      </section>
      
      <section id="about" className="women-section">
      
          <div className="women-content">
      
              <h2>By Women, For Women.</h2>
      
              <p>
                  FemiDo isn't just a ride service—it's a movement creating safe urban mobility for
                  <br />
                  riders while financial independence for women captains across Indore.
              </p>
      
              <a href="#" className="women-btn">Read More</a>
      
          </div>
      
          <div className="women-image-container">
              <img
                  src="/assets/drivers/image 28.png"
                  alt="Women of FemiDo"
                  className="women-image"
               />
          </div>
      
      </section>
      
      <section id="driver" className="why-section">
      
          <h2 className="why-title">Why Drive with FemiDo?</h2>
      
          <div className="why-cards">
      
             
              <div className="why-card">
      
                  <div className="why-icon">
                      
                      <svg viewBox="0 0 64 64" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect x="13" y="22" width="38" height="30"
                              rx="3" stroke="currentColor" strokeWidth="2.5"/>
                          <path d="M13 28H49"
                              stroke="currentColor" strokeWidth="2.5"/>
                          <path d="M41 36H51V45H41C38 45 36 43 36 40.5
                              C36 38 38 36 41 36Z"
                              stroke="currentColor" strokeWidth="2.5"/>
                          <circle cx="42" cy="40.5" r="1.5"
                              fill="currentColor"/>
                          <circle cx="26" cy="16" r="7"
                              stroke="currentColor" strokeWidth="2.5"/>
                          <path d="M26 12V20M22 16H30"
                              stroke="currentColor" strokeWidth="2"/>
                          <circle cx="38" cy="12" r="5"
                              stroke="currentColor" strokeWidth="2.5"/>
                      </svg>
                  </div>
      
                  <h3>Competitive<br />Earnings</h3>
      
                  <p>
                      Earn fairly with transparent<br />
                      payouts for every completed ride.
                  </p>
      
              </div>
      
      
              
              <div className="why-card">
      
                  <div className="why-icon">
                     
                      <svg viewBox="0 0 64 64" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 19L24 14L40 19L55 14V48L40 53L24 48L9 53V19Z"
                              stroke="currentColor" strokeWidth="2.5"/>
                          <path d="M24 14V48M40 19V53"
                              stroke="currentColor" strokeWidth="2.5"/>
      
                          <circle cx="24" cy="24" r="6"
                              stroke="currentColor" strokeWidth="2.5"/>
                          <path d="M24 30V37"
                              stroke="currentColor" strokeWidth="2.5"/>
      
                          <circle cx="43" cy="31" r="6"
                              stroke="currentColor" strokeWidth="2.5"/>
                          <path d="M43 37V44"
                              stroke="currentColor" strokeWidth="2.5"/>
      
                          <circle cx="43" cy="13" r="6"
                              stroke="currentColor" strokeWidth="2.5"/>
                      </svg>
                  </div>
      
                  <h3>Women-Only<br />Community</h3>
      
                  <p>
                      Be part of a trusted community of<br />
                      verified women drivers and riders.
                  </p>
      
              </div>
      
      
             
              <div className="why-card">
      
                  <div className="why-icon">
                      
                      <svg viewBox="0 0 80 64" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <circle cx="24" cy="23" r="15"
                              stroke="currentColor" strokeWidth="2.5"/>
                          <path d="M24 14V23L30 27"
                              stroke="currentColor" strokeWidth="2.5"/>
      
                          <path d="M9 45H70"
                              stroke="currentColor" strokeWidth="2.5"/>
      
                          <circle cx="29" cy="46" r="9"
                              stroke="currentColor" strokeWidth="2.5"/>
                          <circle cx="61" cy="46" r="9"
                              stroke="currentColor" strokeWidth="2.5"/>
      
                          <path d="M29 46H47L54 31H43L37 40H25"
                              stroke="currentColor" strokeWidth="2.5"
                              strokeLinejoin="round"/>
      
                          <path d="M54 31L63 27"
                              stroke="currentColor" strokeWidth="2.5"/>
      
                          <path d="M10 36H3M14 40H5M18 44H9"
                              stroke="currentColor" strokeWidth="2"/>
                      </svg>
                  </div>
      
                  <h3>Flexible<br />Working Hours</h3>
      
                  <p>
                      Drive whenever it suits you and<br />
                      earn on your own schedule.
                  </p>
      
              </div>
      
          </div>
      
      </section>
      
      <section
        id="blog"
        className="testimonials-section"
        onMouseLeave={() => {
          isDragging.current = false;
        }}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-label="Customer Testimonials"
      >
        <h2>Hear It From Our Customer</h2>

        <div
          className="testimonial-wrapper"
          ref={wrapperRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <div
            className="testimonial-track"
            ref={trackRef}
            style={{
              transform: `translateX(${trackTransform}px)`,
            }}
          >
            {testimonialsData.map((item, index) => {
              const isActive = currentTestimonial === index;
              return (
                <div
                  key={item.id}
                  className={`testimonial-card ${isActive ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Testimonial from ${item.name}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      goToSlide(index);
                    }
                  }}
                >
                  <div className="quote">“</div>

                  <div className="testimonial-text">
                    <h3>{item.name}</h3>

                    <div className="stars">{item.stars}</div>

                    <p>{item.text}</p>
                  </div>

                  <div className="customer-image">
                    <div className="pink-circle"></div>
                    <img src={item.image} alt={item.name} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="testimonial-controls" aria-label="Testimonial navigation">
          <button
            type="button"
            className="testimonial-arrow prev"
            onClick={() => goToSlide(currentTestimonial - 1)}
            aria-label="Previous testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="testimonial-dots" aria-label="Testimonial pagination dots">
            {testimonialsData.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={currentTestimonial === index ? "active" : ""}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}: ${item.name}`}
                aria-current={currentTestimonial === index ? "true" : undefined}
              />
            ))}
          </div>

          <button
            type="button"
            className="testimonial-arrow next"
            onClick={() => goToSlide(currentTestimonial + 1)}
            aria-label="Next testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </section>



      <DownloadSection />
      
      {/* <section className="download-section">
      
         
          <div className="download-content">
              <h2>
                  Ready to Ride<br />
                  with FemiDo?
              </h2>
      
              <p>
                  Download the app today and experience
                  safe, comfortable, and reliable commutes
                  driven by women across Indore.
              </p>
      
              <a href="#" className="download-btn">
                  Download App
              </a>
          </div>
      
      
         
          <div className="download-visual">
      
             
              <div className="circle-clip">
                  <div className="download-circle"></div>
              </div>
      
              
              <img
                  src="/assets/drivers/Rectangle.png"
                  className="phone-image"
                  alt="FemiDo App"
               />
      
          </div>
      
      </section> */}
</>
  );
}
