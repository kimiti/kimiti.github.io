$(document).ready(function() {
  $(".Btnnext").click(function(e) {
    e.preventDefault();
    $(".right").animate({ left: "0" });
    $(".right").fadeOut();

    $(".right-right").animate({ right: "0" });
  });

  
  $('.Btnprev').click(function(){
    $(".right").animate({ left: "390px" });
    $(".right").fadeIn();

    $(".right-right").animate({ right: "-390px" });
  });
});
