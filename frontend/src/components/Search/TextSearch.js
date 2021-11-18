const filterArticlesByTextSearch = (articles, query) => {
  if (!query) {
    return articles;
  }

  return articles.filter((article) => {
    const articleTitle = article.title_eng.toLowerCase();
    return articleTitle.includes(query);
  });
};

export default filterArticlesByTextSearch;
