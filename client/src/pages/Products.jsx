/* eslint-disable no-unused-vars */
// ProductsPage.jsx
import { useState } from "react";
import ProductSlider from "../components/ProductSlider";
import "./Products.css";

const products = [
  {
    id: 1,
    image: "/1.webp",
    title: "Product 1",
    price: "19.99",
    description: "This is a description of Product 1",
    quantity: 1,
  },
  {
    id: 2,
    image: "2.jpeg",
    title: "Product 2",
    price: "29.99",
    description: "This is a description of Product 2",
    quantity: 1,
  },
  {
    id: 3,
    image: "3.jpeg",
    title: "Product 3",
    price: "39.99",
    description: "This is a description of Product 3",
    quantity: 1,
  },
  {
    id: 3,
    image: "4.jpeg",
    title: "Product 3",
    price: "39.99",
    description: "This is a description of Product 3",
    quantity: 1,
  },
  {
    id: 3,
    image: "5.jpeg",
    title: "Product 3",
    price: "39.99",
    description: "This is a description of Product 3",
    quantity: 1,
  },
  {
    id: 3,
    image: "6.jpg",
    title: "Product 3",
    price: "39.99",
    description: "This is a description of Product 3",
    quantity: 1,
  },
  {
    id: 3,
    image: "1.webp",
    title: "Product 3",
    price: "39.99",
    description: "This is a description of Product 3",
    quantity: 1,
  },
  {
    id: 3,
    image: "2.jpeg",
    title: "Product 3",
    price: "39.99",
    description: "This is a description of Product 3",
    quantity: 1,
  },
  {
    id: 3,
    image: "3.jpeg",
    title: "Product 3",
    price: "39.99",
    description: "This is a description of Product 3",
    quantity: 1,
  },
  {
    id: 3,
    image: "4.jpeg",
    title: "Product 3",
    price: "39.99",
    description: "This is a description of Product 3",
    quantity: 1,
  },
  {
    id: 3,
    image: "5.jpeg",
    title: "Product 3",
    price: "39.99",
    description: "This is a description of Product 3",
    quantity: 1,
  },
  {
    id: 3,
    image: "6.jpg",
    title: "Product 3",
    price: "39.99",
    description: "This is a description of Product 3",
    quantity: 1,
  },
  // Add more products to the array
];

const Products = () => {
  const [cart, setCart] = useState([]);

  const onAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log(cart);
  };

  const onBuyNow = (product) => {
    // Implement buy now logic
  };

  return (
    <div className="products-page">
      <h1>Products</h1>
      <div className="prod">
        <ProductSlider
          products={products}
          onAddToCart={onAddToCart}
          onBuyNow={onBuyNow}
        />
      </div>
      <div className="hr">
        <hr  color="white" fontSize="20" fontWeight="bolder"/>

      </div>
      <div className="cart">
        <h2>Cart:</h2>
        <ul>
          {cart.map((product, index) => {
            return (
            <li key={index}>
              <img src={product.image} alt={product.title} />
              <p>Qty =  {product.quantity}</p>
              <p>Price = {product.price}</p>
              <p>Subtotal = {product.price * product.quantity}</p>
            </li>
          );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Products;
