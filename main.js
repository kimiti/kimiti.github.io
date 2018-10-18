$(document).ready(function() {
    $(".Btnnext").click(function(e) {
      e.preventDefault();
      $(".right").animate({ left: "0" });
      $(".right").fadeOut();
  
      $(".right-right").animate({ top: "0" });
    });
  
    
    $('.Btnprev').click(function(){
      $(".right").animate({ left: "50%" });
      $(".right").fadeIn();
  
      $(".right-right").animate({ top: "105%" });
    });



    if($(window).width() <=  1000){
        
        $('.Btnprev').click(function(){
           // $(".right").animate({ left: "0" });
            $(".right").css( { marginLeft : "-50%" } );
           
          });
    }




  });
  