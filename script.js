$(document).ready(function(){
  $(".menu-bars").on("click", function(){
    $("nav ul").toggleClass("showing");
  });
 
  $("nav ul li").on("click", function(){
    $("nav ul").removeClass("showing");
  });
});



$(".menu").click(function(){
  $(this).toggleClass("open");
});