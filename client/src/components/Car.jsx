import "./Car.css";

export default function Car() {
  return (
    <>
      <div className="mainContainer">
        <div className="carouselContainer">
          <div className="wrapper">
            <div className="wrapperHolder">
              <div id="slider1"></div>
              <div id="slider2"></div>
              <div id="slider3"></div>
              <div id="slider4"></div>
            </div>
          </div>
          <div className="buttonHolder">
            <a href="1" className="button"></a>
            <a href="2" className="button"></a>
            <a href="3" className="button"></a>
            <a href="4" className="button"></a>
          </div>
        </div>
      </div>
    </>
  );
}
