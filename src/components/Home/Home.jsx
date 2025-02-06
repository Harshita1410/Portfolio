import React from "react";
import "./Home.css";
import myImage from "../../assets/harshita.jpg";

const Home = () => {
  return (
    <section id="home" className="home">
        
     
      <div className="content">
      <p >Harshita Verma</p>
      <h4>Creative web developer</h4>
      </div>
      <div className="image"><img src={myImage} alt="My Profile" className="profile-img" /></div>
    </section>
  );
};

export default Home;
