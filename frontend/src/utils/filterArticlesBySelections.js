import { processData } from "./processData";

export function filterArticlesBySelections(Articles, Activities, SelectedActivityTypes, SelectedMaxTime, SelectedMinTime, Periods) {

    const processedArticles = processData(Articles, Periods, Activities);

    return Articles;
}