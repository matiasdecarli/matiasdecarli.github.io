$( document ).ready(function() {
  $('#sign').click(function(){
    if ( $(".bio").css("display") !="none" ){
      $("#sign").attr("src", 'img/more.png');
      $(".bio").fadeOut('slow');
    }
    else{
      $("#sign").attr("src", 'img/less.png');
      $(".bio").fadeIn('slow');
    }
  });
});
