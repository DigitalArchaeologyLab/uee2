export function filterArticlesByActivityType(
  Articles,
  ActivityTypesWithStatus
) {
  const selectedTypes = ActivityTypesWithStatus.map((type) => {
    if (type.status) {
      return type;
    }
  });
  const filteredArticles = Articles.map((article) => {
    // TODO - loop through all selected types
    if (article.activity.includes(selectedTypes[0])) {
      return article;
    }
  });
  return filteredArticles;
}
