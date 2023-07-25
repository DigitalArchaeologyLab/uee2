import { filterArticlesBySelections } from "./filterArticlesBySelections";
import { editPlaceMarkersByFilteredArticles } from "./editPlaceMarkersByFilteredArticles";

export function applyFilters(Articles, Activities, SelectedActivityTypes, SelectedMaxTime, SelectedMinTime, Periods, MinTime, MaxTime, Places) {
    let filteredArticles = filterArticlesBySelections(Articles, Activities, SelectedActivityTypes, SelectedMaxTime, SelectedMinTime, Periods, MinTime, MaxTime);

    let filteredMarkers = editPlaceMarkersByFilteredArticles(Places, filteredArticles);
    
    return filteredMarkers;
}