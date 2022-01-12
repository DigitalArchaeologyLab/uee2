export function getArticlesByPlace(articles, selectedPlace) {
  // return all articles if selectedPlace is undefined/null/all
  let filteredArticles = [];
  if (selectedPlace === "all") {
    return articles;
  } else {
    // if article has selected place tagged, add to array
    articles.forEach((article) => {
      if (article.place !== undefined) {
        if (article.place.includes(selectedPlace)) {
          filteredArticles.push(article);
        }
      }
    });
  }
  return filteredArticles;
}
