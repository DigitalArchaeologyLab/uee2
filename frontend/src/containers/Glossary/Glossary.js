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
        {/* <PlaceList /> */}
        {/* <PeriodList /> */}
        <TermList />
      </div>
      <Footer />
    </div>
  );
}

export default Glossary;
