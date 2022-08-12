import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import "./TermList.css";
import Term from "../Term/Term";

import Pagination from "../../elements/Pagination/Pagination";

let PageSize = 10;

function TermList(props) {
  const [currentPage, setCurrentPage] = useState(1);
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
    // set up sorting for the term list
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

    // get full list of terms from the database
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

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return TermList.slice(firstPageIndex, lastPageIndex);
  }, [TermList, currentPage]);

  return (
    <div>
      <div className="termList">
        {currentData.map((term) => (
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
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={TermList.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default TermList;
