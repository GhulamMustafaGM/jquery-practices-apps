$(document).ready(function(){ 
  $('#button1').click(function(){ 
    $("#myTable").find("tr:gt(0)").remove();
  });
});