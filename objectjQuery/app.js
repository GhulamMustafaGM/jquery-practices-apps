var obj1 = { what: "A regular JS object" },
  obj2 = $("body");

if (obj1.jquery) {
  console.log("obj1 is a jQuery object.");
}

if (obj2.jquery) {
  console.log("obj2 is a jQuery object.");
}
