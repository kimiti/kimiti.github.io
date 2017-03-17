$(document).ready(function(){

  var count = 0;
  var images = ["1.jpg","2.jpg","3.jpg"];
  var image = $(".fader");

  image.css("background-image","url("+images[count]+")");

  setInterval(function(){
    image.fadeOut(500, function(){
      image.css("background-image","url("+images[count++]+")");
      image.fadeIn(500);
    });
    if(count == images.length)
    {
      count = 0;
    }
  },2000);

});
