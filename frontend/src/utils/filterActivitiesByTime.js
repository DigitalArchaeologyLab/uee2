export function filterActivitiesByTime(
  activities,
  selectedMinTime,
  selectedMaxTime,
  filteredActivityArray,
) {
  // show all of the locations if no times have been selected
  if (selectedMinTime === -3000 && selectedMaxTime === 1000) {
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
