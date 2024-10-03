/* eslint-disable react/prop-types */
// ProductSlider.jsx
import Product from "./Product";
import "./ProductSlider.css";

const ProductSlider = ({ products, onAddToCart, onBuyNow }) => {
  return (
    <div className="product-slider">
      {products.map((product, index) => (
        <Product
          key={index}
          {...product}
          onAddToCart={() => onAddToCart(product)}
          onBuyNow={() => onBuyNow(product)}
        />
      ))}
    </div>
  );
};

export default ProductSlider;
