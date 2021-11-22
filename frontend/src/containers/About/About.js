import React from "react";
import "./About.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function About() {
  return (
    <div>
      <Header />
      <main className="about">
        <div className="about__title">
          <h1>About</h1>
        </div>
        <div className="about__desc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
            varius turpis neque, fermentum lectus adipiscing. In nec commodo
            lectus enim morbi. Sit posuere dolor sed facilisis eget. Egestas non
            ipsum condimentum lectus tortor. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Tempor varius turpis neque, fermentum
            lectus adipiscing. In nec commodo lectus enim morbi. Sit posuere
            dolor sed facilisis eget. Egestas non ipsum condimentum lectus
            tortor.
          </p>
        </div>
        <div className="sections">
          <h2>Editors</h2>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
