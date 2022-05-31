import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TermList.css";
import Term from "../Term/Term";

function TermList(props) {
  const [TermList, setTermList] = useState([
    {
      id: 0,
      term_eng: "",
      term_ar: "",
      definition_eng: "",
      definition_ar: "",
    },
  ]);

  useEffect(() => {
    const sortByTerm = (a, b) => {
      const termA = a.term_eng.toUpperCase();
      const termB = b.term_eng.toUpperCase();

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
              termName={term.term_eng}
              termDefinition={term.definition_eng}
              termNameAr={term.term_ar}
              termDefinitionAr={term.definition_ar}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TermList;
