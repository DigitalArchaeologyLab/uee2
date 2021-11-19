import * as JsSearch from "js-search";

const filterArticlesByText = (articles, searchQuery) => {
  if (!searchQuery || searchQuery === "") {
    return articles;
  }
  var jssearch = new JsSearch.Search("id");
  jssearch.addIndex("title_eng");
  jssearch.addDocuments(articles);

  return jssearch.search(searchQuery);
};

export default filterArticlesByText;
