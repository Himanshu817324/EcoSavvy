import "./Testimonials.css"
const Testimonials = () => {
  return (
    <div className="testimonials">
      <center>
      <h1>What Our Customers Say</h1>
      </center>
      <div className="testimonial-container">
        <div className="testimonial">
          <img src="user2.jpg" alt="John Doe" />
          <p>&quot;This is a great product! I&apos;ve never been happier with a purchase.&quot;</p>
          <span>- John Doe, Happy Customer</span>
        </div>
        <div className="testimonial">
          <img src="user1.jpg" alt="Jane Smith" />
          <p>&quot;I was blown away by the quality of this product. Highly recommend!&quot;</p>
          <span>- Jane Smith, Satisfied Customer</span>
        </div>
        <div className="testimonial">
          <img src="user3.jpg" alt="Bob Johnson" />
          <p>&quot;I&apos;ve tried many similar products, but this one is the best. Hands down.&quot;</p>
          <span>- Bob Johnson, Long-time Customer</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;