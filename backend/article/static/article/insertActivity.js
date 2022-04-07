function tagActivity() {
  // Get the modal
  var modal = document.getElementById("tagActivityModal");

  // Open the modal
  modal.style.display = "block";

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

async function getActivities() {
  const response = await axios.get("/api/activities/");
  const activitiesObj = await response.data;
  let activities = [];
  await activitiesObj.map((activity) => {
    activities.push(
      `${activity.associatedPlace[0].name_eng} (${activity.startPeriod} - ${activity.endPeriod}), ${activity.type}`
    );
  });
  return activities;
}

function prepActivitySelectOptions() {
  getActivities().then((elements) => {
    let select = document.getElementById("id_activities_modal");
    for (let el of elements) {
      let option = document.createElement("option");
      option.text = el;
      option.value = el;
      select.appendChild(option);
    }
  });
}

function insertActivitySelections() {
  // get the text from the article body that has been highlighted
  let selectedText = id_body.value.slice(
    id_body.selectionStart,
    id_body.selectionEnd
  );

  // get full list of activities from selection window
  const activityOptions = document.getElementById("id_activities_modal");
  event.preventDefault();
  // get which activity was selected
  const selectedActivity = activityOptions.selectedIndex + 1;
  // embed tag with appropriate activity id
  id_body.setRangeText(
    `<span class="taggedActivity" id="${selectedActivity}">${selectedText}</span>`
  );

  // add the tagged activity to the activities field so that we can connect the article to these activities on the timemap
  const activityField = document.getElementById("id_activity");
  const activityFieldOptions = activityField.options;
  const selectedActivityName = activityOptions.selectedOptions[0].value;
  for (i = 0; i < activityFieldOptions.length; i++) {
    if (selectedActivityName == activityFieldOptions[i].text) {
      activityFieldOptions[i].selected = true;
    }
  }

  var modal = document.getElementById("tagActivityModal");
  modal.style.display = "none";
}
