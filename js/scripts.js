$(document).ready(function() {
  var clickableItems = [$("h1"), $("img")];
  clickableItems.forEach(function(clickableItem) {
    (clickableItem).click(function() {
      alert("This is a(n) " + this.tagName + ".");
  })

  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });

/* OLD CODE BEFORE LOOPS 
$("h1").click(function() {
  alert("This is a header.");
});

$(".clickable").click(function() {
  $("#walrus-showing").slideToggle();
  $("#walrus-hidden").slideToggle();
});

$("img").click(function() {
  alert("This is an image.");
});*/
})
})