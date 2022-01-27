import React from "react";
import "./styles.css";
import "./media.css";

function About() {
  return (
    <section id="about">
      <div id="about-left">
        <p id="p-aboutmain">My name is Paola Conde,</p>
        <p id="p-abouttwo">
          I'm a front-end developer based in
          <span className="emphasis"> Mexico City.</span>
        </p>
        <br />
        <p id="p-about">
          I studied Informatics in Universidad Nacional Autonoma de Mexico. Once
          I see what could be{" "}
          <span className="emphasis-two">created with code</span> I decided to
          become a developer.🚀
        </p>
        <br />
        <p id="p-about">
          I found <span className="emphasis-two">my passion</span> in creating
          web sites.💻✨ Also, i'm always searching for new ways to improve my
          technical skills.✏📔
        </p>
      </div>
      <div id="about-right">
        <img
          className="img-stack"
          src="https://raw.githubusercontent.com/paocheez/ImageSourcePijamars/master/assets/postman2.png"
          alt=""
        />
        <img
          className="img-stack"
          src="https://raw.githubusercontent.com/paocheez/ImageSourcePijamars/master/assets/css2.png"
          alt=""
        />
        <img
          className="img-stack"
          src="https://raw.githubusercontent.com/paocheez/ImageSourcePijamars/master/assets/js2.png"
          alt=""
        />
        <img
          className="img-stack"
          src="https://raw.githubusercontent.com/paocheez/ImageSourcePijamars/master/assets/mysql2.png"
          alt=""
        />
        <img
          className="img-stack"
          src="https://raw.githubusercontent.com/paocheez/ImageSourcePijamars/master/assets/bootstrap2.png"
          alt=""
        />
        <img
          className="img-stack"
          src="https://raw.githubusercontent.com/paocheez/ImageSourcePijamars/master/assets/jira.png"
          alt=""
        />
        <img
          className="img-stack"
          src="https://raw.githubusercontent.com/paocheez/ImageSourcePijamars/master/assets/git2.png"
          alt=""
        />
        <img
          className="img-stack"
          src="https://raw.githubusercontent.com/paocheez/ImageSourcePijamars/master/assets/html2.png"
          alt=""
        />
        <img
          className="img-stack"
          src="https://raw.githubusercontent.com/paocheez/ImageSourcePijamars/master/assets/sass2.png"
          alt=""
        />
        <img
          className="img-stack"
          src="https://raw.githubusercontent.com/paocheez/ImageSourcePijamars/master/assets/vscode.png"
          alt=""
        />
        <img
          className="img-stack"
          src="https://raw.githubusercontent.com/paocheez/ImageSourcePijamars/master/assets/codesandbox2.png"
          alt=""
        />
        <img
          className="img-stack"
          src="https://raw.githubusercontent.com/paocheez/ImageSourcePijamars/master/assets/react2.png"
          alt=""
        />
      </div>
    </section>
  );
}

export default About;
