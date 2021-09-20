import React from "react";
import "./Glossary.css";
// import PlaceList from "../../components/PlaceList/PlaceList";
// import PeriodList from "../../components/PeriodList/PeriodList";
import TermList from "../../components/TermList/TermList";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Glossary() {
  return (
    <div>
      <Header />
      <div className="glossary">
        <div className="glossary__title">
          <h1>Glossary</h1>
        </div>
        <div className="glossary__desc">
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
        {/* <PlaceList /> */}
        {/* <PeriodList /> */}
        <div className="terms">
          <h2>Terms</h2>
          <TermList />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Glossary;
