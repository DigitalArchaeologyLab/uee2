import * as JsSearch from "js-search";

const FilterArticlesByText = (articles, searchQuery) => {
  if (!searchQuery) {
    return articles;
  }
  var jssearch = new JsSearch.Search("id");
  jssearch.addIndex("title_eng");
  jssearch.addDocuments(articles);

  return jssearch.search(searchQuery);
};

export default FilterArticlesByText;
