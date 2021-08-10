const mybutton = document.querySelector('.btndiv');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 1050 || document.documentElement.scrollTop > 1050) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  }
  
// add & remove class active to scrolling btn
  $(".btn").click( function(){
     $(".btn.active").removeClass("active");

    $(this).addClass("active");
});

$(".active").click( function(){
    $(".active").removeClass("active");
});


// remove class btn when scroll
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 150) {
        //clearHeader, not clearheader - caps H
        $(".btn.active").removeClass("active");
    }
});