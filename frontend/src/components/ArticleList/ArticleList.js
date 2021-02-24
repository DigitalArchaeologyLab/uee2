import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useRouteMatch } from "react-router-dom";

function ArticleList(props) {
  const [ArticleList, setArticleList] = useState([
    {
      id: 0,
      title_eng: '',
      title_ar: '',
      author_id: '',
      abstract_eng: '',
      abstract_ar: ''
    },
  ]);

  const refreshList = () => {
    axios
      .get("/api/articles/")
      .then((res) => setArticleList(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    refreshList();
  }, []);

  // let { path, url } = useRouteMatch();

  return (
    <div>
      {ArticleList.map((article) => (
        <p>
          <h2>
            <Link to='/1'>
              {article.title_eng}
            </Link>
            <p id='arabic'>
            {article.title_ar}
            </p>
          </h2>
          {article.author_id}
          <p></p>
          {article.abstract_eng}
          <p id='arabic'>
          {article.abstract_ar}
          </p>
          <hr></hr>
        </p>
      ))}
    </div>
  );
}

export default ArticleList;
