import "./contact.css";
import { useState } from "react";


function ContactPage() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    msg: ""
  });

  const handleInputChange = (e) => {
    console.log(e.target);

    const value = e.target.value;
    const name = e.target.name;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(user);
    console.log(user);
    
  };
  
  return (
    <div className="contain">
      <div className="cHead">
        <h1>Contact Us</h1>
      </div>
      <main>
        <section className="Sec">
          <h2>Get in Touch</h2>
          <p>Fill out the form below to send us a message.</p>
          <form onSubmit={handleSubmit}>
            <div className="inputElem">
              <label htmlFor="name">Name:</label>
              <input
                    className="form-input"
                    type="text"
                    name="username"
                    placeholder="Enter a Username"
                    id="Username"
                    required
                    autoComplete="off"
                    value={user.username}
                    onChange={handleInputChange}
                  />
            </div>
            <br />
            <br />
            <div className="inputElem">
              <label htmlFor="email">Email:</label>
              <input
                    className="form-input"
                    type="email"
                    name="email"
                    placeholder="Enter a email"
                    id="email"
                    required
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInputChange}
                  />
            </div>
            <br />
            <br />
            <label htmlFor="message">Message:</label>
            <textarea 
            className="form-input"
            type="text"
            name="msg"
            placeholder="Enter a msg"
            id="msg"
            required
            autoComplete="off"
            value={user.msg}
            onChange={handleInputChange}
             />
            <br />
            <br />
            <input type="submit" value="Send" />
          </form>
        </section >
        <section className="Sec">
          <h2>Contact Information</h2>
          <p>Address: 123 Main St, Anytown, USA</p>
          <p>Phone: 555-555-5555</p>
          <p>
            Email: <a href="mailto:info@example.com">info@example.com</a>
          </p>
        </section>
        <section className="Sec">
          <h2>Follow Us</h2>
          <ul>
            <li>
              <a href="https://www.facebook.com/example" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/example" target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/example" target="_blank">
                Instagram
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default ContactPage;
