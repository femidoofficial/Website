'use client';

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
      
          <div className="logo">
              <img src="/assets/Logo/femido.png" alt="Logo" />
          </div>
      
          <ul className="nav-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Driver</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Safety</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact Us</a></li>
          </ul>
      
          <a href="#" className="nav-btn" onClick={closeMenu}>Downloaad app</a>
      
          <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={toggleMenu}>
              {menuOpen ? "×" : "☰"}
          </button>
      
      </nav>
      <section className="hero">
      
          
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
      
      <section className="safety-section">
      
         
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
      
      
      <section className="rides-section">
      
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
      
      <section className="women-section">
      
          <div className="women-content">
      
              <h2>By Women, For Women.</h2>
      
              <p>
                  SheGo isn't just a ride service—it's a movement creating safe urban mobility for
                  <br />
                  riders while financial independence for women captains across Indore.
              </p>
      
              <a href="#" className="women-btn">Read More</a>
      
          </div>
      
          <div className="women-image-container">
              <img
                  src="/assets/drivers/image 28.png"
                  alt="Women of SheGo"
                  className="women-image"
               />
          </div>
      
      </section>
      
      <section className="why-section">
      
          <h2 className="why-title">Why Drive with SheGo?</h2>
      
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
      
      <section className="testimonials-section">
      
          <h2>Hear It From Our Customer</h2>
      
          <div className="testimonial-wrapper">
      
              <div className="testimonial-track">
      
                  
                  <div className="testimonial-card">
      
                      <div className="quote">“</div>
      
                      <div className="testimonial-text">
                          <h3>Isha Thakral</h3>
      
                          <div className="stars">★ ★ ★ ★ ★</div>
      
                          <p>
                              Working late shifts in the city made me cautious.
                              SheGo’s real-time tracking feature reassures both
                              me and my family every night.
                          </p>
                      </div>
      
                      <div className="customer-image">
                          <div className="pink-circle"></div>
                          <img
                              src="/assets/drivers/Group 21.png"
                              alt="Isha Thakral"
                           />
                      </div>
      
                  </div>
      
      
                  
                  <div className="testimonial-card">
      
                      <div className="quote">“</div>
      
                      <div className="testimonial-text">
                          <h3>Riya Malhotra</h3>
      
                          <div className="stars">★ ★ ★ ★ ★</div>
      
                          <p>
                              As a freelance photographer often on the move,
                              SheGo keeps me connected and safe, letting me
                              focus on my art without worry.
                          </p>
                      </div>
      
                      <div className="customer-image">
                          <div className="pink-circle"></div>
                          <img
                              src="/assets/drivers/Group 21.png"
                              alt="Riya Malhotra"
                           />
                      </div>
      
                  </div>
      
      
                  
                  <div className="testimonial-card">
      
                      <div className="quote">“</div>
      
                      <div className="testimonial-text">
                          <h3>Ananya Sharma</h3>
      
                          <div className="stars">★ ★ ★ ★ ★</div>
      
                          <p>
                              Jogging late in the evening used to feel risky.
                              SheGo gives me peace of mind knowing I can get
                              home safely.
                          </p>
                      </div>
      
                      <div className="customer-image">
                          <div className="pink-circle"></div>
                          <img
                              src="/assets/drivers/Group 21.png"
                              alt="Ananya Sharma"
                           />
                      </div>
      
                  </div>
      
              </div>
      
          </div>
      
      
        
      
          <div className="testimonial-dots">
      
              <span></span>
              <span></span>
              <span className="active"></span>
              <span></span>
              <span></span>
      
          </div>
      
      </section>
      
      <section className="download-section">
      
         
          <div className="download-content">
              <h2>
                  Ready to Ride<br />
                  with SheGo?
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
                  alt="SheGo App"
               />
      
          </div>
      
      </section>
      
      
      <footer className="footer">
      
          <div className="footer-top">
      
             
              <div className="footer-brand">
      
                  <img
                      src="/assets/Logo/femifooter.png"
                      alt="SheGo Logo"
                      className="footer-logo"
                   />
      
                  <p>
                      Indore’s dedicated ride community.<br />
                      Safe, reliable, and comfortable daily travel across the city.
                  </p>
      
                  <div className="social-links">
      
                      <a href="#" aria-label="Facebook">
                          "f"
                      </a>
      
                      <a href="#" aria-label="Instagram">
                          "◎"
                      </a>
      
                      <a href="#" aria-label="WhatsApp">
                          "◔"
                      </a>
      
                      <a href="#" aria-label="LinkedIn">
                          "in"
                      </a>
      
                  </div>
      
              </div>
      
      
              
              <div className="footer-column">
      
                  <h3>Quick Links</h3>
      
                  <a href="#">Home</a>
                  <a href="#">Services</a>
                  <a href="#">Drivers</a>
                  <a href="#">About Us</a>
                  <a href="#">Safety</a>
                  <a href="#">Blog</a>
                  <a href="#">Contact Us</a>
      
              </div>
      
      
              
              <div className="footer-column legal">
      
                  <h3>Legal Links</h3>
      
                  <a href="#">Terms & Condition</a>
                  <a href="/privacy">Privacy Policy</a>
                  <a href="#">Support Partner</a>
      
              </div>
      
      
              
              <div className="footer-column contact">
      
                  <h3>Contact Details</h3>
      
                  <div className="contact-item">
      
                      "●"
      
                      <span>
                          139, Uday Nagar, Kanadia road,<br />
                          Indore,452016
                      </span>
      
                  </div>
      
                  <div className="contact-item">
      
                      "☎"
      
                      <span>
                          +91 8989494417
                      </span>
      
                  </div>
      
                  <div className="contact-item">
      
                      "✉"
      
                      <span>
                          shegoindore@gmail.com
                      </span>
      
                  </div>
      
              </div>
      
          </div>
      
      
        
      
          <div className="footer-bottom">
      
              <p>
                  Copyright
                  <span className="copyright-symbol">©</span>
                  2026
                  <span className="separator">•</span>
                  Mlock Innovations LLP
                  <span className="separator">•</span>
                  All Rights Reserved
              </p>
      
          </div>
      
      </footer>
    </>
  );
}
