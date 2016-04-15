$(document).ready(function(){
  $('#arrow').on('click',function(){
    $(window).scrollTop(1.2 * $(window).height());
    $('#main-nav').addClass('navbar-fixed-top');
    $('#arrow').css('top', '140%');
    $('.container-fluid').css('height', '125vh');
  });
  $(window).scroll(function(){
    if(window.pageYOffset >= (0.93 * $(window).height())){
    $('#main-nav').addClass('navbar-fixed-top');
    $('.container-fluid').css('height', '125vh');
    $('#arrow').css('top', '140%');
      }
  });
})