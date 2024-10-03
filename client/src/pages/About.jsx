// About.js
import './about.css'
function About() {
  return (
    <div className='about'>
      <h1>About Us</h1>
      <p className='aboutIntro'>Welcome to our About page!</p>
      <section className="story">
        <h2>Our Story</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus excepturi saepe voluptas quod laboriosam totam laudantium eum unde ea et error dicta consectetur eius quisquam odit non vero in ex, sed minus? Odio voluptas laborum exercitationem sequi expedita eius blanditiis, voluptatum veritatis ab temporibus, nisi eaque hic est dolore quia iste unde obcaecati distinctio inventore magni, explicabo maiores? Accusamus atque qui minima, eaque dicta veritatis eius magni explicabo repudiandae nesciunt aperiam nemo, natus possimus blanditiis libero veniam sint. Minima provident, nam magnam dolor perferendis aperiam esse at accusantium adipisci necessitatibus vel aliquam inventore reiciendis velit! Dolores ea ab nesciunt itaque!</p>
      </section>
      <section className="team">
        <h2>Meet the Team</h2>
        <ul>
          <li>
            <img src="" alt="Team Member 1" />
            <h3>Himanshu Pandey</h3>
            <p>Founder and CEO</p>
          </li>
          <li>
            <img src="" alt="Team Member 2" />
            <h3>Lorem, ipsum.</h3>
            <p>Team Member</p>
          </li>
          <li>
            <img src="" alt="Team Member 3" />
            <h3>Lorem, ipsum.</h3>
            <p>Team Member</p>
          </li>
          <li>
            <img src="" alt="Team Member 4" />
            <h3>Lorem, ipsum.</h3>
            <p>Team Member</p>
          </li>
          <li>
            <img src="" alt="Team Member 5" />
            <h3>Lorem, ipsum.</h3>
            <p>Team Member</p>
          </li>
          <li>
            <img src="" alt="Team Member 6" />
            <h3>Lorem, ipsum.</h3>
            <p>Team Member</p>
          </li>
        </ul>
      </section>
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <ul>
          <li>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
            <p>— John Doe, Customer</p>
          </li>
          <li>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
            <p>— Jane Doe, Customer</p>
          </li>
        </ul>
      </section>
      <button className="cta">Learn More</button>
    </div>
  );
}

export default About;