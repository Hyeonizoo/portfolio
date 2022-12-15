$(document).ready(function() {


  $('.container02').addClass('hidden');
  $('.container03').addClass('hidden');
  // tab
  $('aside .workThumb01').click(function(){
    // console.log('1');
    $('.container01').removeClass('hidden');
    $('.container02').addClass('hidden');
    $('.container03').addClass('hidden');
  });
  $('aside .workThumb02').click(function(){
    // console.log('2');
    $('.container02').removeClass('hidden');
    $('.container01').addClass('hidden');
    $('.container03').addClass('hidden');
  });
  $('aside .workThumb03').click(function(){
    // console.log('3');
    $('.container03').removeClass('hidden');
    $('.container01').addClass('hidden');
    $('.container02').addClass('hidden');
  });




  // if($('.container01').hasClass('hidden')){
  //   $('.workThumb01').css('opacity', '.5');
  //   $('.workThumb02').css('opacity', '1');
  //   $('.workThumb03').css('opacity', '1');
  //   console.log('1히든');
  // }
  // // else{
  // //   $('.workThumb02').css('opacity', '1');
  // //   console.log('1선택');
  // // }
  // if($('.container02').hasClass('hidden')){
  //   $('.workThumb01').css('opacity', '.5');
  //   $('.workThumb02').css('opacity', '.1');
  //   $('.workThumb03').css('opacity', '1');
  //   console.log('ㅇㅁ');
  // }
  // // else{
  // //   // $('.workThumb02').css('opacity', '1');
  // //   console.log('ㅇㅇㅇㅇㅇㅇㅁ');
  // // }
  // if($('.container03').hasClass('hidden')){
  //   $('.workThumb03').css('opacity', '.5');
  // }
  // // else{
  // //   $('.workThumb03').css('opacity', '1');
  // // }





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
    // $('.clickGuide').css('z-index','-1');
  });
  $('[class*="webPageBox"]').mouseout(function(){

    $('.clickGuide').css('opacity','1');
    // $('.clickGuide').css('z-index','1');
  });



});