import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum totam illo autem ducimus quibusdam veniam corporis rem
              natus illum nesciunt in, error culpa sed necessitatibus deleniti
              asperiores ipsa aliquid magni facere laborum eveniet earum
              adipisci numquam quisquam? Beatae distinctio nam maxime placeat
              culpa? Quasi atque nam dicta odio explicabo at ipsum illo
              assumenda accusantium, corporis dolorum omnis, quos ab a, facilis
              voluptates sapiente molestias? Beatae laborum, ipsa sint dolorem
              assumenda aperiam accusamus ipsum doloribus rem corrupti atque
              adipisci facilis obcaecati mollitia deserunt fugiat iusto non?
              Ratione magnam earum enim quam fugiat culpa sequi officiis! In
              consectetur eaque maiores laborum? Fugit?
            </p>
            <Link to="/contact" className="btn btn-outline-primary px-3">Contact Us</Link>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
          <img src="/assets/images/about/about1.png" alt="Anout Us" height= "400px" width="400px"/>

          </div>
        </div>
      </div>
    </>
  );
};

export default About;
