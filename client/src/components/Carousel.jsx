/* eslint-disable no-unused-vars */
import './Carousel.css'
import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState([
    { id: 1, image: 'download (12).jpg', title: 'Slide 1' },
    { id: 2, image: 'download (15).jpg', title: 'Slide 2' },
    { id: 3, image: 'download (16).jpg', title: 'Slide 3' },
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % slides.length);
    }, 5000); // change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [currentIndex, slides]);

  const handleSlideClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <TransitionGroup>
        {slides.map((slide, index) => (
          <CSSTransition
            key={slide.id}
            classNames="slide"
            timeout={500}
          >
            <div
              className={`slide ${currentIndex === index ? 'active' : ''}`}
              onClick={() => handleSlideClick(index)}
            >
              <img src={slide.image} alt={slide.title} />
              <h2>{slide.title}</h2>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
      <div className="carousel-nav">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => handleSlideClick(index)}
            className={currentIndex === index ? 'active' : ''}
          >
            {}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;