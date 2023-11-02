import React from "react";
import Products from "../Products/Products";
import './home.css'

const Home = () => {
  return (
    <div className="hero">
      <div className="herosection">
        <img src="https://www.shopping.com/images/banner-image-short.jpg" className="card-img" alt="Background" height="550px" />
        <div className="" style={{marginBottom:"90px"}}>
            <div className="container herosection2">
          <h5 className="Header1">NEW SEASON <br/>ARRIVALS</h5>
          <p className="paragraph">
            CHECK OUT ALL THE TRENDS
          </p>
            </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
