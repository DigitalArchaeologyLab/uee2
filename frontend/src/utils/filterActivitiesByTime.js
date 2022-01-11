export function filterActivitiesByTime(
  activities,
  selectedMinTime,
  selectedMaxTime,
  filteredActivityArray,
) {
  // show all of the places if no times have been selected
  if (selectedMinTime === -5000 && selectedMaxTime === 2000) {
    filteredActivityArray.push(...activities);
  } else {
    // filter based on the selected times
    activities.forEach((activity) => {
      if (
        // add logic to parse multiple selections?
        activity.startDate >= selectedMinTime &&
        activity.endDate <= selectedMaxTime
      ) {
        if (filteredActivityArray.includes(activity) !== true) {
          filteredActivityArray.push(activity);
        }
      }
    });
  }
  return filteredActivityArray;
}
