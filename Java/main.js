$(function() {
    AOS.init();
  });
  
  $('.container').animate({'width': '100%'}, 1800, function(){
    $('#banner').fadeIn(800);
  });   
  
  $('.main_title').textillate({
    in: { 
      effect: 'fadeInLeft',    
      delayScale: 1,
      delay: 150,
      sequence: true
    }
  });