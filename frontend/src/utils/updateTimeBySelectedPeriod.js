export function updateTimeBySelectedPeriod(
  SelectedPeriod,
  Periods,
  setSelectedMinTime,
  setSelectedMaxTime
) {
  // cases: period is selected, period is deselected; only handling single period currently

  // reset time range if period is deselected
  if (SelectedPeriod === ["All"]) {
    setSelectedMinTime(2000);
    setSelectedMaxTime(-5000);
  } else {
    const firstSelectedPeriod = Periods.find(
      (period) => period.name_eng === SelectedPeriod
    );
    setSelectedMinTime(firstSelectedPeriod.start);
    setSelectedMaxTime(firstSelectedPeriod.end);
  }
  return;
}
