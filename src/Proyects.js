import React, { useState } from "react";
import "./styles.css";
import "./media.css";
import Modal from "./components/Modal";
import styled from "styled-components";

function Proyects() {
  const [modalState1, changeModalState1] = useState(false);
  const [modalState2, changeModalState2] = useState(false);
  const [modalState3, changeModalState3] = useState(false);
  const [modalState4, changeModalState4] = useState(false);
  const [modalState5, changeModalState5] = useState(false);
  const [modalState6, changeModalState6] = useState(false);
  const [modalState7, changeModalState7] = useState(false);
  const [modalState8, changeModalState8] = useState(false);
  return (
    <section id="proyects">
      <section className="section-title">
        <h1>Take a look at some of my projects!</h1>
        <Modal state={modalState1} changeState={changeModalState1}>
          <Contenido>
            <h2>Online store</h2>
            <span>
              This was the final project of the DEV.F bootcamp. <br /> The task
              was to create an online store using an API to get the items, add
              new ones, create users, and also, to login and add items to a
              shopping cart. <br />{" "}
              <span className="span-lang-cont">
                {" "}
                Website in <span className="span-language">spanish</span>.{" "}
              </span>
            </span>{" "}
            <span>Created with:</span>
            <ul>
              <li>Html</li>
              <li>React</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
            </ul>
            <a
              href="https://codesandbox.io/s/products-login-changes-styles-dos-forked-t88rk"
              target="_blank"
            >
              See code
            </a>
          </Contenido>
        </Modal>
        <Modal state={modalState2} changeState={changeModalState2}>
          <Contenido>
            <h2>ATM</h2>
            <span>
              I made this project during the DEVF bootcamp. <br /> The task was
              to create an ATM that could pay and withdraw the money of some
              users.
              <br />{" "}
              <span className="span-lang-cont">
                {" "}
                Website in <span className="span-language">spanish</span>.{" "}
              </span>
            </span>
            <span>Created with:</span>
            <ul>
              <li>Html</li>
              <li>JavaScript</li>
              <li>CSS</li>
            </ul>
            <a href="https://github.com/paocheez/ATM" target="_blank">
              See code
            </a>
          </Contenido>
        </Modal>
        <Modal state={modalState3} changeState={changeModalState3}>
          <Contenido>
            <h2>NASA API</h2>
            <span>
              This project it's a practice that consumes one of the Nasa public
              API. <br /> I added a date field that can help to get specific
              information from the API.
              <br />{" "}
              <span className="span-lang-cont">
                {" "}
                Website in <span className="span-language">english</span>.{" "}
              </span>
            </span>
            <span>Created with:</span>
            <ul>
              <li>Html</li>
              <li>React</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
            </ul>
            <a href="https://codesandbox.io/s/nasa-apod-cgh29" target="_blank">
              See code
            </a>
          </Contenido>
        </Modal>
        <Modal state={modalState4} changeState={changeModalState4}>
          <Contenido>
            <h2>Sunnyside clone</h2>
            <span>
              This project was a frontendmentor.io challenge. <br />
              The task was to replicate the interface using the desktop design
              and the assets given. <br />{" "}
              <span className="span-lang-cont">
                {" "}
                Website in <span className="span-language">english</span>.{" "}
              </span>
            </span>
            <span>Created with:</span>
            <ul>
              <li>Html</li>
              <li>CSS</li>
            </ul>
            <a
              href="https://github.com/paocheez/SunnysideAgency"
              target="_blank"
            >
              See code
            </a>
          </Contenido>
        </Modal>
        <Modal state={modalState5} changeState={changeModalState5}>
          <Contenido>
            <h2>Calculator</h2>
            <span>
              This was the final project of the "JavaScript practical course"
              from Platzi. <br />
              The purpose was to review some JavaScript structures.
              <br />{" "}
              <span className="span-lang-cont">
                {" "}
                Website in <span className="span-language">spanish</span>.{" "}
              </span>
            </span>
            <span>Created with:</span>
            <ul>
              <li>Html</li>
              <li>JavaScript</li>
              <li>CSS</li>
            </ul>
            <a href="https://github.com/paocheez/Calculator" target="_blank">
              See code
            </a>
          </Contenido>
        </Modal>
        <Modal state={modalState6} changeState={changeModalState6}>
          <Contenido>
            <h2>Pinterest</h2>
            <span>
              This was a proyect fron the DEV.F bootcamp. <br />
              The task was to create a Pinterest clone.
              <br />{" "}
              <span className="span-lang-cont">
                {" "}
                Website in <span className="span-language">spanish</span>.{" "}
              </span>
            </span>
            <span>Created with:</span>
            <ul>
              <li>Html</li>
              <li>CSS</li>
            </ul>
            <a
              href="https://github.com/paocheez/Pinterest-Clone"
              target="_blank"
            >
              See code
            </a>
          </Contenido>
        </Modal>
        <Modal state={modalState7} changeState={changeModalState7}>
          <Contenido>
            <h2>Food</h2>
            <span>
              The main purpose of this project was to learn and practice the use
              of SASS by creating the main page of a restaurant App.
              <br />{" "}
              <span className="span-lang-cont">
                {" "}
                Website in <span className="span-language">spanish</span>.{" "}
              </span>
            </span>
            <span>Created with:</span>
            <ul>
              <li>Html</li>
              <li>CSS</li>
              <li>SASS</li>
            </ul>
            <a href="https://github.com/paocheez/Food" target="_blank">
              See code
            </a>
          </Contenido>
        </Modal>
        <Modal state={modalState8} changeState={changeModalState8}>
          <Contenido>
            <h2>Google</h2>
            <span>
              This was a proyect fron the DEV.F bootcamp. <br />
              The task was to create a Google clone.
              <br />{" "}
              <span className="span-lang-cont">
                {" "}
                Website in <span className="span-language">spanish</span>.{" "}
              </span>
            </span>
            <span>Created with:</span>
            <ul>
              <li>Html</li>
              <li>CSS</li>
            </ul>
            <a href="https://github.com/paocheez/Google-Clone" target="_blank">
              See code
            </a>
          </Contenido>
        </Modal>
      </section>
      <section id="proyectsgrid">
        <div className="card card-One">
          <img
            className="card-img"
            src="https://raw.githubusercontent.com/paocheez/ImageSourcePijamars/master/assets/pijamars.png"
            alt=""
          />
          <div className="card-links">
            <h2>Online store</h2>
            <a href="https://7dfj7.csb.app/" target="_blank">
              See it live!
            </a>
            <button
              className="button-more"
              onClick={() => changeModalState1(!modalState1)}
            >
              More
            </button>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img"
            src="https://raw.githubusercontent.com/paocheez/ImageSourcePijamars/master/assets/citibank.PNG"
            alt=""
          />
          <div className="card-links">
            <h2>ATM</h2>
            <a href="https://paocheez.github.io/ATM/" target="_blank">
              See it live!
            </a>
            <button
              className="button-more"
              onClick={() => changeModalState2(!modalState2)}
            >
              More
            </button>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img"
            src="https://raw.githubusercontent.com/paocheez/ImageSourcePijamars/master/assets/nasaapod.PNG"
            alt=""
          />
          <div className="card-links">
            <h2>NASA API</h2>
            <a href="https://cgh29.csb.app/" target="_blank">
              See it live!
            </a>
            <button
              className="button-more"
              onClick={() => changeModalState3(!modalState3)}
            >
              More
            </button>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img"
            src="https://raw.githubusercontent.com/paocheez/ImageSourcePijamars/master/assets/sunnyc.PNG"
            alt=""
          />
          <div className="card-links">
            <h2>Sunnyside</h2>
            <a
              href="https://paocheez.github.io/SunnysideAgency/"
              target="_blank"
            >
              See it live!
            </a>
            <button
              className="button-more"
              onClick={() => changeModalState4(!modalState4)}
            >
              More
            </button>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img"
            src="https://raw.githubusercontent.com/paocheez/ImageSourcePijamars/master/assets/image.png"
            alt=""
          />
          <div className="card-links">
            <h2>Calculator</h2>
            <a href="https://paocheez.github.io/Calculator/" target="_blank">
              See it live!
            </a>
            <button
              className="button-more"
              onClick={() => changeModalState5(!modalState5)}
            >
              More
            </button>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img"
            src="https://raw.githubusercontent.com/paocheez/ImageSourcePijamars/master/assets/pclone.PNG"
            alt=""
          />
          <div className="card-links">
            <h2>Pinterest</h2>
            <a
              href="https://paocheez.github.io/Pinterest-Clone/"
              target="_blank"
            >
              See it live!
            </a>
            <button
              className="button-more"
              onClick={() => changeModalState6(!modalState6)}
            >
              More
            </button>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img"
            src="https://raw.githubusercontent.com/paocheez/ImageSourcePijamars/master/assets/fode.PNG"
            alt=""
          />
          <div className="card-links">
            <h2>Food</h2>
            <a href="https://paocheez.github.io/Food/" target="_blank">
              See it live!
            </a>
            <button
              className="button-more"
              onClick={() => changeModalState7(!modalState7)}
            >
              More
            </button>
          </div>
        </div>
        <div className="card">
          <img
            className="card-img"
            src="https://raw.githubusercontent.com/paocheez/ImageSourcePijamars/master/assets/gclone.PNG"
            alt=""
          />
          <div className="card-links">
            <h2>Google clone</h2>
            <a href="https://paocheez.github.io/Google-Clone/" target="_blank">
              See it live!
            </a>
            <button
              className="button-more"
              onClick={() => changeModalState8(!modalState8)}
            >
              More
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Proyects;

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 25px;

  h2 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #6d6875;
    text-shadow: 3px 3px 4px rgba(141, 125, 125, 0.801);
    text-align: center;
  }

  ul {
    display: grid;
    grid-auto-flow: column;
    align-self: center;
  }

  span {
    margin-top: 10px;
    text-align: center;
    line-height: 27px;
  }

  .span-lang-cont {
    margin-bottom: 55px;
    color: #b5838d;
  }

  .span-language {
    font-weight: bold;
    background-color: #ffb4a2;
  }

  li {
    text-align: center;
    list-style: none;
    color: #b5838d;
    padding: 5px;
    margin-left: 5px;
    margin-right: 5px;
    font-weight: bold;
  }
  /*
  li:nth-child(4) {
    grid-column: 2/3;
  }
*/
  li:hover {
    color: #f9ddce;
    background-color: #e5989b;
    transition: 0.5s ease-out;
  }

  img {
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }

  a {
    padding: 10px;
    border-radius: 15px;
    border: none;
    margin-top: 20px;
    color: var(--lighter-blue);
    font-weight: bolder;
    background-image: linear-gradient(
      45deg,
      var(--light-lavender) 0%,
      var(--lighter-blue) 100%
    );
    background-size: 300%;
    background-position: left;
    transition: background-position 1s;
    font-size: 20px;
  }

  a:hover,
  a:focus {
    background-position: right;
    color: var(--blue);
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 25px;
      font-weight: 700;
      margin-bottom: 5px;
    }
    a {
      margin-top: 15px;
      font-size: 15px;
    }
    li {
      font-size: 14px;
    }
    li:hover {
      transform: none;
    }
    span {
      line-height: 20px;
    }
  }
`;
