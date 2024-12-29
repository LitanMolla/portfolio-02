$(function(){
    new VenoBox({
        selector: '.my-video-links',
    });

      //  Stykey Header  
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 200){
        $('.navbar').addClass('sticky');
    }
    else {
         $('.navbar').removeClass('sticky');
    }
    });  
})