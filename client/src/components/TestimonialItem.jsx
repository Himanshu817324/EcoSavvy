/* eslint-disable react/prop-types */


const TestimonialItem = ({ name, testimonial, image }) => {
  return (
    <div className="testimonial-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{testimonial}</p>
    </div>
  );
};

export default TestimonialItem;