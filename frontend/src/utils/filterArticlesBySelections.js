import { processData } from "./processData";

export function filterArticlesBySelections(Articles, Activities, SelectedActivityTypes, SelectedMaxTime, SelectedMinTime, Periods) {

    const processedArticles = processData(Articles, Periods, Activities);

    // filter processed article list by selected activity type(s)
    let articlesWithSelectedTypes = [];
    processedArticles.forEach((article) => {
        SelectedActivityTypes.forEach((selectedType) => {
            if (article.types.includes(selectedType) && !articlesWithSelectedTypes.includes(article)) {
                articlesWithSelectedTypes.push(article)
            }
        })
    })
    // filter processed article list by selected min/max times

    console.log(articlesWithSelectedTypes)

    return Articles;
}