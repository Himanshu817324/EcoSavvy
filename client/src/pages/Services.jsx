import "./services.css";

function Services() {
  return (
    <div className="contain">
      <header className="services">
        <h1>Our Services</h1>
      </header>
      <div className="servicesGrid">
        <section>
          <div className="subSec">
            <h2>Fast and Reliable Shipping</h2>
            <p>
              We offer fast and reliable shipping options to ensure your
              products arrive quickly and in good condition.
            </p>
            <ul>
              <li>Free standard shipping on orders over $50</li>
              <li>Express shipping available for an additional fee</li>
              <li>Tracking information provided for all orders</li>
            </ul>
          </div>
        </section>
        <section>
          <div className="subSec">
            <h2>Secure Payment Options</h2>
            <p>
              We accept a variety of secure payment options to ensure your
              transactions are safe and secure.
            </p>
            <ul>
              <li>Visa</li>
              <li>Mastercard</li>
              <li>PayPal</li>
              <li>Apple Pay</li>
            </ul>
          </div>
        </section>
        <section>
          <div className="subSec">
            <h2>Easy Returns and Exchanges</h2>
            <p>
              We offer easy returns and exchanges to ensure you are satisfied
              with your purchase.
            </p>
            <ul>
              <li>30-day return policy</li>
              <li>Easy exchange process for defective or incorrect items</li>
            </ul>
          </div>
        </section>
        <section>
          <div className="subSec">
            <h2>Customer Support</h2>
            <p>
              We are here to help with any questions or concerns you may have.
            </p>
            <ul>
              <li>Phone support available Monday-Friday, 9am-5pm EST</li>
              <li>Email support available 24/7</li>
              <li>Live chat support available during business hours</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;
