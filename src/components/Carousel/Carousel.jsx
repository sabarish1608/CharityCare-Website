import React from 'react';
import './Carousel.css';
import carousel1 from '../../assets/images/charity1.jpg';
import carousel2 from '../../assets/images/charity2.jpg';
import carousel3 from '../../assets/images/charity3.jpg';

const Carousel = () => {
  return (
    <div id="home" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {[carousel1, carousel2, carousel3].map((img, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <img src={img} className="d-block w-100 carousel-img" alt={`Slide ${index + 1}`} />
            <div className="carousel-overlay"></div>
            <div className="carousel-caption d-md-block d-sm-block d-block">
              <h2>Support Their Future</h2>
              <p>Every donation helps a child dream bigger.</p>
              <a href="#help" className="btn btn-donate">Donate Now</a>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#home" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#home" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
};

export default Carousel;
