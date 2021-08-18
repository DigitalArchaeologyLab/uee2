export function filterActivitiesByPeriod(activities, selectedPeriods, activityArray) {
  // show all of the locations unless a period has been selected
  if (selectedPeriods[0] === "All") {
    activityArray.push(...activities);
  } else {
    // filter based on the selected period
    activities.forEach((activity) => {
      if (
        // add logic to parse multiple selections?
        String(activity.startPeriod) === String(selectedPeriods) ||
        String(activity.endPeriod) === String(selectedPeriods)
      ) {
        activityArray.push(activity);
      }
    });
  }
  return activityArray
};