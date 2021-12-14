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
    const sortByTerm = (a, b) => {
      const termA = a.name_eng.toUpperCase();
      const termB = b.name_eng.toUpperCase();

      // handle diacritics in terms
      if (new Intl.Collator().compare(termA, termB) > 0) {
        return 1;
      } else if (new Intl.Collator().compare(termA, termB) < 0) {
        return -1;
      }
    };

    async function getTermList() {
      try {
        const response = await axios.get("/api/terms/");
        const allTerms = response.data;
        const sortedTerms = await allTerms.sort(sortByTerm);
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
