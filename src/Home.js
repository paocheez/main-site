import React from "react";
import "./styles.css";
import "./media.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section id="introduction">
      <div className="container-intro">
        <p className="p-intro">Hi, I'm</p>
        <p id="pname-intro">Paola Conde</p>
        <p className="p-intro">front-end developer.</p>
        <img
          className="img-home"
          src="https://raw.githubusercontent.com/paocheez/ImageSourcePijamars/master/assets/compuu.png"
          alt=""
        />
        <Link to="/About" className="btn-home">
          Let's get started
        </Link>
      </div>
    </section>
  );
}

export default Home;
