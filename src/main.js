import { Triangle } from "./triangle.js";

$(document).ready(function() {
  $("#triangleForm").submit(function(event) {
    event.preventDefault();
    var side1 = $("#side1").val();
    var side2 = $("#side2").val();
    var side3 = $("#side3").val();
    var triangle = new Triangle(side1, side2, side3);
    console.log(triangle);  
  });
});