$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
  });

  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });

  $("img").click(function() {
    alert("This is an image.");
  });
});