import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ReferenceList.css";
import Reference from "../Reference/Reference";

function ReferenceList(props) {
  const [ReferenceList, setReferenceList] = useState([
    {
      id: 0,
      author: "",
      year: "",
      publication_info: "",
      url: "",
      article: [],
    },
  ]);

  useEffect(() => {
    const sortByAuthorYear = (a, b) => {
      const authorA = a.author.toUpperCase();
      const authorB = b.author.toUpperCase();

      // handle diacritics in authors
      if (new Intl.Collator().compare(authorA, authorB) > 0) {
        return 1;
      } else if (new Intl.Collator().compare(authorA, authorB) < 0) {
        return -1;
        // handle year of publication
      } else if (a.year > b.year) {
        return 1;
      } else if (a.year < b.year) {
        return -1;
      }
    };

    async function getRefList() {
      try {
        const response = await axios.get("/api/references/");
        const allReferences = response.data;
        const articleReferences = allReferences.filter((reference) =>
          reference.article.includes(parseInt(props.article_id))
        );
        const sortedReferences = await articleReferences.sort(sortByAuthorYear);
        setReferenceList(sortedReferences);
      } catch (err) {
        console.error(err);
      }
    }

    getRefList();
  }, []);

  return (
    <div>
      <div className="refList">
        {ReferenceList.map((reference) => (
          <div className="refList_reference" key={reference.id}>
            <Reference
              id={reference.id}
              author={reference.author}
              year={reference.year}
              text={reference.publication_info}
              url={reference.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReferenceList;
