$(document).ready(function() {

  $('.container02').addClass('hidden');
  $('.container03').addClass('hidden');
  // tab
  $('aside .workThumb01').click(function(){
    $('.container01').removeClass('hidden');
    $('.container02').addClass('hidden');
    $('.container03').addClass('hidden');
  });
  $('aside .workThumb02').click(function(){
    $('.container02').removeClass('hidden');
    $('.container01').addClass('hidden');
    $('.container03').addClass('hidden');
  });
  $('aside .workThumb03').click(function(){
    $('.container03').removeClass('hidden');
    $('.container01').addClass('hidden');
    $('.container02').addClass('hidden');
  });

  // 프로젝트 실제 웹사이트 이동
  $('.webPageBox1').click(function() {
    window.open('https://eogeumni.netlify.app', '_blank'); 
  })
  $('.webPageBox2').click(function() {
    window.open('https://e-dam.netlify.app/', '_blank'); 
  })
  $('.webPageBox3').click(function() {
    window.open('https://kyobobook.netlify.app/', '_blank'); 
  })

  $('[class*="webPageBox"]').hover(function(){
    $('.clickGuide').css('opacity','0');
  });
  $('[class*="webPageBox"]').mouseout(function(){

    $('.clickGuide').css('opacity','1');
  });



});