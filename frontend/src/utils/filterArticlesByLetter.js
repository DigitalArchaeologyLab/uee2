const filterArticlesByLetter = (articles, letter, selectedLanguage) => {
  if (!letter || letter === "") {
    return articles;
  }

  let matchedArticles = [];
  let titleField;

  switch (selectedLanguage) {
    case "ar":
      titleField = "title_ar";
      break;
    case "de":
      titleField = "title_de";
      break;
    case "fr":
      titleField = "title_fr";
      break;
    default:
      titleField = "title_eng";
      break;
  }

  articles.forEach((article) => {
    const title = article[titleField];

    // handle diacritics //
    // const titleNormalized = title.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    const startLetterCapped = title.toUpperCase();
    const startLetter = startLetterCapped.charAt(0);
    if (startLetter === letter) {
      matchedArticles.push(article);
    }
  });
  return matchedArticles;
};

export default filterArticlesByLetter;
