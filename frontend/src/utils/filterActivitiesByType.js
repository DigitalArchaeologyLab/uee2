export function filterActivitiesByType(
  filteredActivities,
  selectedActivityTypes,
  filteredActivityArray
) {
  filteredActivities.forEach((activity) => {
    const activityType = activity.type;
    if (selectedActivityTypes.includes(activityType)) {
      if (filteredActivityArray.includes(activity) !== true) {
        filteredActivityArray.push(activity);
      }
    }
  });
  return filteredActivityArray;
}
