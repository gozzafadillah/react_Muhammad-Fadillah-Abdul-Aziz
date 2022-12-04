import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <section className="about my-3" id="about">
        <div className="container">
          <h1 className="text-center">About Us</h1>
          <p className="my-3 p-3" style={{ textAlign: "justify" }}>
            Kami merupakan pengembang dan consultan dibidang aplikasi dan
            hardware. Bila perangkat and bermasalah anda dapat konsultasi dengan
            kami secara free bila pertama kali mendaftar. Bila anda ingin
            membuat aplikasi kami dapat membantu dari budgetnya Rp10.000 hingga
            yang Rp 1 Miliar.
          </p>
          <Link className="btn btn-outline-dark btn-lg mt-4" to="/about-us">
            About Our Team
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
