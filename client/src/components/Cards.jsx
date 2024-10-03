import "./Cards.css";
export default function Cards() {
  return (
    <div className="cards" >
      <img src="/5.jpeg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Product  1</h5>

        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </p>
        <a href="#" className="btn btn-primary">
          Buy Now
        </a>
      </div>
    </div>
  );
}
