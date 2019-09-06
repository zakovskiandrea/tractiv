let selectedActivity = "";

// ------------------------------HOME PAGE------------------------------

$(document).ready(() => {
  $("#container-2").hide();
  $("#footer-3").hide();
});
// Event:click (Schedule Activity) BUTTON
$(".schedule-activity-button").click(() => {
  $("#container").slideUp("fast");

  $("#container-2").show();
});
// ------------------------------SECOND PAGE------------------------------
// EVENET:click (X) BUTTON
$("#back-btn").click(() => {
  $("#container-2").slideUp();

  $("#container").show("fast");
});

// EVENET:click (Activity SURFING) BUTTON
$(".surf").click(() => {
  if (selectedActivity === "surf" || selectedActivity === "") {
    clickOnActivityButton("surf");
  } else {
    clickOnActivityButton(selectedActivity);
    clickOnActivityButton("surf");
  }
});
// EVENET:click (Activity HIKING) BUTTON
$(".hike").click(() => {
  if (selectedActivity === "hike" || selectedActivity === "") {
    clickOnActivityButton("hike");
  } else {
    clickOnActivityButton(selectedActivity);
    clickOnActivityButton("hike");
  }
});
// EVENET:click (Activity WEIGHTS) BUTTON
$(".weights").click(() => {
  if (selectedActivity === "weights" || selectedActivity === "") {
    clickOnActivityButton("weights");
  } else {
    clickOnActivityButton(selectedActivity);
    clickOnActivityButton("weights");
  }
});
// EVENET:click (Activity SPINNING) BUTTON
$(".spin").click(() => {
  if (selectedActivity === "spin" || selectedActivity === "") {
    clickOnActivityButton("spin");
  } else {
    clickOnActivityButton(selectedActivity);
    clickOnActivityButton("spin");
  }
});

// Function for click on Activity BUTTON
function clickOnActivityButton(className) {
  const element = $(`.${className}`);
  element.toggleClass("selected");
  if (element.attr("class").indexOf("selected") > -1) {
    element
      .empty()
      .append(
        `<img src="/pics/activity icons white/${className}-white.png" alt="${className}" class="activity-icon-2"/>`
      );
    selectedActivity = className;
  } else {
    element
      .empty()
      .append(
        `<img src="/pics/activity icons/${className}.png" alt="${className}" class="activity-icon-2"/>`
      );
    selectedActivity = "";
  }
  if ($(".select-time").val() && selectedActivity) {
    activateScheduleBtn();
  } else if ($(".select-time").val()) {
    deactivateScheduleBtn();
  }
}

// EVENT:onchange (Time-selector) SELECT
$(".select-time").change(function() {
  if (selectedActivity) {
    activateScheduleBtn();
  }
});

// function for activating SCHEDULE BUTTON
function activateScheduleBtn() {
  const btn = $(".schedule-activity-button-2");
  btn.addClass("activated");
  // EVENET:click (Activated Schedule) BUTTON
  btn.click(function() {
    if (!selectedActivity) return;
  });
}
// function for deactivating SCHEDULE BUTTON
function deactivateScheduleBtn() {
  const btn = $(".schedule-activity-button-2");
  btn.removeClass("activated");
}
