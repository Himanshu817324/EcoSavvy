/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// Product.jsx

import './Product.css'

const Product = ({ image, title, price, description, quantity, onAddToCart, onBuyNow }) => {
  return (
    <div className="product">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>₹{price}</p>
      <p>{description}</p>
      <div className="quantity">
        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={(e) => onQuantityChange(e.target.value)} />
      </div>
      <div className="actions">
        <button onClick={onAddToCart}>Add to Cart</button>
        <button onClick={onBuyNow}>Buy Now</button>
      </div>
    </div>
  );
};

export default Product;