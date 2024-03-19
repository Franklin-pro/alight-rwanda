import React from "react";
import alighth from "../assets/alight1.jpeg";
import Buttons from '../components/button'


function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home">
          <div className="home-image">
            <img src={alighth} alt="home" />
          </div>
          <div className="text">
            <h1>Alight Rwanda</h1>
            <p>
              Your gift - whether monthly or one-time - helps get clean water
              flowing, children back <br/>to school, parents making a living, and
              families around the world rebuilding meaningful lives.
            </p>
        <Buttons name="read more.." className="btn" fontsize = '1.4rem' background = '#2B94A3'/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
