import * as JsSearch from "js-search";

const filterArticlesByText = (articles, searchQuery) => {
  if (!searchQuery || searchQuery === "") {
    return articles;
  }
  var jssearch = new JsSearch.Search("id");
  jssearch.addIndex("title_eng");
  jssearch.addIndex("title_ar");
  jssearch.addIndex("title_de");
  jssearch.addIndex("title_fr");
  jssearch.addIndex("authors");
  jssearch.addIndex("abstract_eng");
  jssearch.addIndex("abstract_ar");
  jssearch.addIndex("body");
  jssearch.addDocuments(articles);

  return jssearch.search(searchQuery);
};

export default filterArticlesByText;
