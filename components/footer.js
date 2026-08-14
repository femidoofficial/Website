import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">

      {/* =================================================
          TOP SECTION
      ================================================= */}
      <div className="footer-top">

        {/* ================= BRAND ================= */}
        <div className="footer-brand">

          <img
            src="/assets/Logo/femifooter.png"
            alt="FemiDo Logo"
            className="footer-logo"
          />

          <p>
            Indore’s dedicated ride community.
            <br />
            Safe, reliable, and comfortable daily travel across the city.
          </p>

          <div className="social-links">

  {/* Facebook */}
  <a href="#" aria-label="Facebook">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 8h3V4h-3c-3.3 0-5 1.7-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.7.3-1 1-1z" />
    </svg>
  </a>

  {/* Instagram */}
  <a href="#" aria-label="Instagram">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" className="instagram-dot" />
    </svg>
  </a>

  {/* WhatsApp */}
  <a href="#" aria-label="WhatsApp">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.66 15L2 22l5.17-1.35A10 10 0 1 0 12 2z" />
      <path
        className="whatsapp-inner"
        d="M8.2 7.1c-.3 0-.6.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.1 3 .1.2 2 3.2 4.9 4.3 2.4.9 2.9.7 3.4.7.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.7.2-.2.3-.3.5-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.7-1-2.3-.2-.6-.4-.5-.6-.5h-.5z"
      />
    </svg>
  </a>

  {/* LinkedIn */}
  <a href="#" aria-label="LinkedIn">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5.2 3.5a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0zM1 8h4.4v14H1V8zm7 0h4.2v1.9h.1c.6-1.1 2-2.2 4.1-2.2 4.4 0 5.2 2.9 5.2 6.7V22h-4.4v-6.8c0-1.6 0-3.7-2.3-3.7-2.2 0-2.6 1.8-2.6 3.6V22H8V8z" />
    </svg>
  </a>

</div>

        </div>


        {/* ================= APP DOWNLOADS ================= */}
        <div className="footer-apps">

          {/* CUSTOMER APP */}
          <div className="footer-app">

            <h3>Customer App</h3>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/Logo/Group.png"
                alt="Get it on Google Play"
              />
            </a>

          </div>


          {/* RIDER APP */}
          <div className="footer-app">

            <h3>Rider App</h3>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/Logo/Group.png"
                alt="Get it on Google Play"
              />
            </a>

          </div>

        </div>

      </div>


      {/* =================================================
          LINKS SECTION
      ================================================= */}
      <div className="footer-links">


        {/* ================= QUICK LINKS ================= */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <Link href="/">
            Home
          </Link>

          <Link href="/services">
            Services
          </Link>

          <Link href="/drivers">
            Drivers
          </Link>

          <Link href="/about">
            About Us
          </Link>

          <Link href="/safety">
            Safety
          </Link>

          <Link href="/blog">
            Blog
          </Link>

          <Link href="/contact">
            Contact Us
          </Link>

        </div>


        {/* ================= LEGAL ================= */}
        <div className="footer-column legal">

          <h3>Legal Links</h3>

          <Link href="/terms">
            Terms &amp; Condition
          </Link>

          <Link href="/privacy">
            Privacy Policy
          </Link>

          <Link href="/support">
            Support Partner
          </Link>

        </div>


        {/* ================= CONTACT ================= */}
        <div className="footer-column contact">

          <h3>Contact Details</h3>


          <div className="contact-item">

            <span className="contact-icon">
              ●
            </span>

            <span>
              139, Uday Nagar, Kanadia Road,
              <br />
              Indore, 452016
            </span>

          </div>


          <div className="contact-item">

            <span className="contact-icon">
              ☎
            </span>

            <span>
              +91 8989494417
            </span>

          </div>


          <div className="contact-item">

            <span className="contact-icon">
              ✉
            </span>

            <span>
              femidoofficial@gmail.com
            </span>

          </div>

        </div>

      </div>


      {/* =================================================
          COPYRIGHT
      ================================================= */}
      <div className="footer-bottom">

        <p>

          Copyright

          <span className="copyright-symbol">
            ©
          </span>

          2026

          <span className="separator">
            •
          </span>

          Mlock Innovations LLP

          <span className="separator">
            •
          </span>

          All Rights Reserved

        </p>

      </div>

    </footer>
  );
}