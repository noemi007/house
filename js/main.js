$(function(){

  // ハンバーガーメニュー
  $('.hamburger').on('click', function() {
    if($('#header').hasClass('open')) {
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
  });

  // #maskエリアをクリックしたらメニューを閉じる
$('#mask').on('click', function() {
  $('#header').removeClass('open');
});

// リンクをクリックしたらメニューを閉じる
$('#navi a').on('click', function() {
  $('#header').removeClass('open');
});

// トップに戻る
let pagetop = $('#to-top');
pagetop.hide();

$(window).scroll(function() {
  if($(this).scrollTop() > 700) {
    pagetop.fadeIn();
  } else {
    pagetop.fadeOut();
  }
});

pagetop.click(function() {
  $('body,html').animate({scrollTop: 0}, 500);
  return false;
});

});