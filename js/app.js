$(function() {
  $("#navbarDropdown").click(function(){                    //Afficher la dropdown
    $(".dropdown-menu").toggle();
  });

  $(".nav-link").removeClass('disabled');                        //Supprimer la class disabled

  $("#search").keyup(function(){
    $("#searchResult").html($("#search").val())                   //Afficher ce qu'il y a dans "Search"
  })

  $("#btn-title").click(function(){
    var num = Math.floor((Math.random() * 1000) + 1);
    $(".display-4").text("Web developer" + num);                                //Remplacer le texte du titre 1
  });

  $(".list-group-item").click(function(){                                   //Changer la liste active quand on clique sur une autre
    $(this)
      .addClass('active')
      .siblings()
      .removeClass("active");
  });

  $('#playVideo').click(function() {                       //démarrer la vidéo + mettre en pause au bout de 10sec.
    $("#video")
      .trigger('play');
    setTimeout(function() {
    $('#video').get(0).pause()
  }, 11000)
    });













});
