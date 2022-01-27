import React, { useRef } from "react";
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gmail_contact",
        "template_qn8a87d",
        form.current,
        "user_1BbfROnlSMWCftLMRSCEo"
      )
      .then(
        (result) => {
          console.log(result.text);
          const show = document.getElementById("messageres");
          show.innerHTML = "Message sent :)";
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <section id="contact">
      <section className="sectionc-title">
        <h1>Let's get in touch!</h1>
      </section>
      <section className="section-form">
        <form ref={form} className="form-contact" onSubmit={sendEmail}>
          <span className="span-title">Send me a note here!</span>
          <input
            name="name"
            placeholder="name"
            className="input-form"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="your email"
            className="input-form"
            required
          />
          <input
            name="message"
            placeholder="message"
            className="input-message"
            required
          />
          <span id="messageres" className="message-sent"></span>
          <input type="submit" className="btn-form" value="Send" />
        </form>
        <div className="div-form">
          <span className="span-info">
            <i className="fas fa-at"></i> Email
          </span>
          <span className="contact-link">pao.cheez@gmail.com</span>
          <span className="span-info">
            <i className="fab fa-linkedin"></i> Linkedin
          </span>
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/karla-paola-conde-hernandez/"
            target="_blank"
          >
            /karla-paola-conde-hernandez
          </a>
          <span className="span-info">
            <i className="fab fa-github"></i> Github
          </span>
          <a
            className="contact-link"
            href="https://github.com/paocheez"
            target="_blank"
          >
            /paocheez
          </a>
        </div>
      </section>
    </section>
  );
}

export default Contact;
