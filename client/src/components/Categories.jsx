import { useState } from "react";
import "./Categories.css";

const categories = [
  { id: 1, name: "Organic Waste", image: "download (12).jpg" },
  { id: 2, name: "Recyclable Waste", image: "download (15).jpg" },
  { id: 3, name: "Hazardous Waste", image: "download (16).jpg" },
  { id: 4, name: "Electronics Waste", image: "download (12).jpg" },
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="categories">
      <center>
        <h1>We treat</h1>
      </center>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <button onClick={() => handleCategorySelect(category)}>
              <img src={category.image} alt={category.name} />
              {category.name}
            </button>
          </li>
        ))}
      </ul>
      {selectedCategory && (
        <div className="selected-category">
          <h3>Selected Category: {selectedCategory.name}</h3>
          <p>Requests for {selectedCategory.name}:</p>
          <ul>{/* Display requests for selected category */}</ul>
        </div>
      )}
    </div>
  );
};

export default Categories;
