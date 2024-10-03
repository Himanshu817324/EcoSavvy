// Home.js
// import Carousel from './Carousel';
// import Card from './Card';
import SearchBar from "../components/Search";
// import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import Testimonials from "../components/Testimonials";
// import ImagePage from "../components/ImagePage";
// import Carousels from "../components/Carousel";
import Car from "../components/Car";

import Cards from "../components/Cards";
// import CardSlider from "../components/CardSlider";
import "./Home.css";

const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <SearchBar />
        <Car />
        <Categories />
        <Testimonials />
        <div className="cardCategory">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <button type="button"><a href="#">See More </a></button>
        </div>
        <div className="img">
          <h2>Add your image here</h2>
          <center className="plus">
            <i className="fa-solid fa-plus"></i>
          </center>
        </div>
      </div>
    </>
  );
};

export default HomePage;
