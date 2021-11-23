$(document).ready(function () {
  $("#button1").click(function () {
    $(".disabledCheckboxes").prop("disabled", false);
  });
});

// Re-disable all
// $('.disabledCheckboxes').prop("disabled", true);
