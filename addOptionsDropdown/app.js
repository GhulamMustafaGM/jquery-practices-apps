var myOptions = {
  val1: "Blue",
  val2: "Orange",
};
var mySelect = $("#myColors");
$.each(myOptions, function (val, text) {
  mySelect.append($("<option></option>").val(val).html(text));
});
