export function editPlaceMarkersByFilteredArticles(Places, filteredArticles) {
  let updatedMarkers = Places;

  // gather all of the places associated with the filtered articles
  let placesInFilteredArticles = [];

  for (let i = 0; i < filteredArticles.length; i++) {
    filteredArticles[i].place.forEach((filteredPlace) => {
      if (!placesInFilteredArticles.includes(filteredPlace)) {
        placesInFilteredArticles.push(filteredPlace);
      }
    });
  }

  // set marker color based on whether the place is associated with an article
  Places.forEach((place) => {
    if (!placesInFilteredArticles.includes(place.id)) {
      updatedMarkers[place.id - 1].color = "grey";
    }
  });


  return updatedMarkers;
}
