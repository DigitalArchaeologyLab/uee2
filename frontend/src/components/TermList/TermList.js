import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TermList.css";
import Term from "../Term/Term";

function TermList(props) {
  const [TermList, setTermList] = useState([
    {
      id: 0,
      name_eng: "",
      definition: "",
    },
  ]);

  useEffect(() => {
    async function getTermList() {
      try {
        const response = await axios.get("/api/terms/");
        const allTerms = response.data;
        const sortedTerms = await allTerms.sort();
        setTermList(sortedTerms);
      } catch (err) {
        console.error(err);
      }
    }

    getTermList();
  }, []);

  return (
    <div>
      <div className="termList">
        {TermList.map((term) => (
          <div className="termList_term" key={term.id}>
            <Term
              id={term.id}
              termName={term.name_eng}
              termDefinition={term.definition}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TermList;
