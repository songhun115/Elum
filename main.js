$(document).ready(function() {

$('.btn_icon').click(function (){
    $clickd = $(this);
    if($clickd.hasClass('active')) {
        $clickd.removeClass('active');
       
    } else {
        $clickd.addClass('active');
        $('.all_menu').addClass('open');
    }
});

$('.all_menu_close').click(function() {
    $('.all_menu').removeClass('open');
})

$('.all_menu_item').click(function () {
    var submenu = $(this).children("ul");
    var $clickd = $(this);
    if (submenu.is(":visible")) {
      submenu.slideUp(300);
      $clickd.removeClass('active');
    } else { 
      submenu.slideDown(300);
      $clickd.addClass('active');
    }
  });

  $('.all_menu_sub_item').click(function () {
    var submenu = $(this).children("ul");
    var $clickd = $(this);
    if (submenu.is(":visible")) {
      submenu.slideUp(300);
      $clickd.removeClass('active');
    } else { 
      submenu.slideDown(300);
      $clickd.addClass('active');
    }
  });

});