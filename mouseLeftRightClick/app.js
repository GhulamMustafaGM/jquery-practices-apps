$(document).on("contextmenu", ".element", function (e) {
  console.log("Right Mouse Clicked!");
  return false;
});

$(document).on("click", ".element", function () {
  console.log("Left Mouse Clicked!");
});
