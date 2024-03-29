export function filterActivitiesByPeriod(activities, selectedPeriods, filteredActivityArray) {

  // show all of the places if no periods have been selected
  if (selectedPeriods[0] === "All") {
    filteredActivityArray.push(...activities);
  } else {
    // filter based on the selected period
    activities.forEach((activity) => {
      if (
        // add logic to parse multiple selections?
        String(activity.startPeriod) === String(selectedPeriods) ||
        String(activity.endPeriod) === String(selectedPeriods)
      ) {
        filteredActivityArray.push(activity);
      }
    });
  }
  return filteredActivityArray
};