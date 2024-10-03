import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="top">
              <div className="footer-section">
                <h4>Contact Us</h4>
                <ul>
                  <li>
                    <a href="mailto:info@example.com">info@example.com</a>
                  </li>
                  <li>
                    <a href="tel:+1234567890">+1 234 567 890</a>
                  </li>
                  <li>123 Main St, Anytown, USA 12345</li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Customer Support</h4>
                <ul>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                  <li>
                    <a href="#">Return Policy</a>
                  </li>
                  <li>
                    <a href="#">Shipping Info</a>
                  </li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>About Us</h4>
                <ul>
                  <li>
                    <a href="#">Our Story</a>
                  </li>
                  <li>
                    <a href="#">Meet the Team</a>
                  </li>
                  <li>
                    <a href="#">Awards and Recognition</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="down">
              <div className="footer-section">
                <h4>Legal</h4>
                <ul>
                  <li>
                    <a href="#">Terms and Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Cookie Policy</a>
                  </li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Stay Connected</h4>
                <ul>
                  <li>
                    <a href="#" className="social-link">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-link">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="social-link">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <p>&copy; 2024 . All rights reserved by EcoSavvy.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
