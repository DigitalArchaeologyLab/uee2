export function filterActivitiesByTime(
  activities,
  selectedMinTime,
  selectedMaxTime,
  filteredActivityArray
) {
  activities.forEach((activity) => {
    if (
      activity.startDate >= selectedMinTime &&
      activity.endDate <= selectedMaxTime
    ) {
      if (filteredActivityArray.includes(activity) !== true) {
        filteredActivityArray.push(activity);
      }
    }
  });
  console.log(filteredActivityArray);
  return filteredActivityArray;
}
