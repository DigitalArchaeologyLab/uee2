export function filterArticlesByActivityType(
  Articles,
  ActivityTypesWithStatus
) {
  const selectedTypes = ActivityTypesWithStatus.map((type) => {
    if (type.status) {
      return type;
    } else {
      return [{ label: "", status: false }];
    }
  });
  const filteredArticles = Articles.map((article) => {
    // TODO - loop through all selected types
    if (article.activity.includes(selectedTypes[0])) {
      return article;
    } else {
      return [
        {
          id: 0,
          subject_area: "",
          title_eng: "",
          title_ar: "",
          title_de: "",
          title_fr: "",
          authors: [""],
          abstract_eng: "",
          abstract_ar: "",
          status: "",
          body: "",
          place: [],
          activity: [],
          period: [],
        },
      ];
    }
  });
  return filteredArticles;
}
