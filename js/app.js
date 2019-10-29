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

  $('.nav-tabs-a').click(function() {                //switch texte en cliquant sur les tabs
    $(this).tab("show")
  })

  $("#showModal").click(function() {                   //afficher la modal
    $('#modal').show()
  })

  $('#popover').popover();  //afficher la popover

  var progressBar = $('#progressBar');                    //remplir la barre de progression
  setInterval(function () {
    var width = parseInt(progressBar[0].style.getPropertyValue('width')) //25%
    blurp = Math.floor(Math.random()* 10);
     // 25% => 25
    //100px

    if (width >= 100) {
      progressBar.css('width', 0)
    } else {
      progressBar.css('width', width + blurp + '%')
    }

}, 500)
  var isPlayed = true
  setInterval(function () {                       // stoper le spinner
    if (isPlayed) {
      $('#spinner').css('animation-play-state', 'paused');
      isPlayed = false;
    } else {
      $('#spinner')
      .css('animation-play-state', 'running');
      isPlayed = true;
    }
  }, 5000);




});
