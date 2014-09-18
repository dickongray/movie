// custom js & jquery


// scroll
$(document).ready(function(){
  
  $(".scroll").click(function(event){   
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top},300);
  });

// music
  $(document).ready(function(){                    
        $('#play').click(function() {
                    if (!$('#theme')[0].paused)
                    {
                        $('#theme')[0].pause();           
                        $('#play').text('Play');
                    }
                    else
                        {
                            $('#theme')[0].play();           
                            $('#play').text('Stop');
                        }
                });
});
// rain gif
  var scrollSpeed = 70;
    
    // set the default position
    var current = 0;

    // set the direction
    var direction = 'v';

    function bgscroll(){

        // 1 pixel row at a time
        current -= 1;
   
        // move the background with backgrond-position css properties
        $('#rain').css("backgroundPosition", (direction == 'v') ? current+"px 0" : "0 " + current+"px");
   
    }

    //Calls the scrolling function repeatedly
     setInterval(bgscroll, scrollSpeed);  
     

      });