import { processData } from "./processData";

export function filterArticlesBySelections(Articles, Activities, SelectedActivityTypes, SelectedMaxTime, SelectedMinTime, Periods, MinTime, MaxTime) {

    const processedArticles = processData(Articles, Periods, Activities);

    // filter processed article list by selected activity type(s)
    let articlesWithSelectedTypes = [];
    if (SelectedActivityTypes.length === 0) {
        articlesWithSelectedTypes = processedArticles;
    } else {
        processedArticles.forEach((article) => {
            SelectedActivityTypes.forEach((selectedType) => {
                if (article.types.includes(selectedType) && !articlesWithSelectedTypes.includes(article)) {
                    articlesWithSelectedTypes.push(article)
                }
            })
        })
    }

    // filter processed article list by selected min/max times
    let articlesWithinTimeRange = [];
    if (SelectedMinTime === MinTime && SelectedMaxTime === MaxTime) {
        articlesWithinTimeRange = articlesWithSelectedTypes;
    } else {
        articlesWithSelectedTypes.forEach((article) => {
            if (article.earliestStart >= SelectedMinTime && article.latestEnd <= SelectedMaxTime) {
                articlesWithinTimeRange.push(article);
            }
        })
    }    

    return Articles;
}