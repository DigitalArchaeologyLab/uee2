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

      if (authorA > authorB) {
        return 1;
      } else if (authorA < authorB) {
        return -1;
      } else if (a.year > b.year) {
        return 1;
      } else if (a.year < b.year) {
        return -1;
      } else {
        return 0;
      }
    };

    async function getRefList() {
      try {
        const response = await axios.get("/api/references/");
        const allReferences = response.data;
        const articleReferences = allReferences.filter(
          (reference) => reference.article[0] == props.article_id
        );
        console.log(props.id);
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
          <div>
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
