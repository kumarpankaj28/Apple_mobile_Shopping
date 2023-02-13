import React from "react";
import AboutHome from "./AboutHome";
import Slider from "./carousel/Slider";
import Product from "./Product";

const Home = () => {
  return (
    <>
      {/* <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img src="/assets/images/home/banner-1.jpg" className="d-block w-100 " alt="IPhone" />
            
          </div>
          <div className="carousel-item">
            <img src="/assets/images/home/banner-3.jpg" className="d-block w-100" alt="IPhone" />
          </div>
          <div className="carousel-item">
            <img src="/assets/images/home/banner-4.jpg" className="d-block w-100" alt="IPhone" />
          </div>
          <div className="carousel-item">
            <img src="/assets/images/home/banner-5.jpg" className="d-block w-100" alt="IPhone" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually">Next</span>
        </button>
      </div> */}
      <Slider/>
      <AboutHome/>
      <Product/>
    </>
  );
};

export default Home;
