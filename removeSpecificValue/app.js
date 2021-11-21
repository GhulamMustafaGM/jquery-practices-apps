var y = ["Red", "Green", "White", "black", "Yellow"];
var remove_Item = "White";

console.log("Array before removing the element = " + y);
y = $.grep(y, function (value) {
  return value != remove_Item;
});
console.log("Array after removing the element = " + y);
