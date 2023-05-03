export function editPlaceMarkersByFilteredArticles(Places, filteredArticles) {
  let updatedMarkers = Places;
  let allFilteredPlaces = [];

  // gather a full list of all the places associated with the filtered articles
  filteredArticles.forEach((article) => {
    let taggedPlaces = article.places;
    taggedPlaces.forEach((place) => {
      if (!allFilteredPlaces.includes(place)) {
        allFilteredPlaces.push(place)
      }
    })
  });
 
  // set marker color based on whether the place is associated with an article
  updatedMarkers.forEach((place) => {
    if (!allFilteredPlaces.includes(place.id)) {
      // set marker color to grey if not in filtered places
      place.color = "grey"
    } else {
      place.color = "blue"
    }
  });

  return updatedMarkers;
}
