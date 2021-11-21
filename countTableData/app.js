$.fn.rowCount = function () {
  return $("tr", $(this).find("tbody")).length;
};

$.fn.columnCount = function () {
  return $("th", $(this).find("tbody")).length;
};
var rowctr = $("#table1").rowCount();
var colctr = $("#table1").columnCount();

console.log("No of Rows:" + rowctr);
console.log("No of Columns:" + colctr);
