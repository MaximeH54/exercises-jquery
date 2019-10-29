$(function() {
  $("#navbarDropdown").click(function(){
    $(".dropdown-menu").toggle();
  });

  $("a").removeClass();

  $("#search").keyup(function(){
    $("#searchResult").html($("#search").val())
  })
});
