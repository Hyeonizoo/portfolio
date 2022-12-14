$(document).ready(function() {

  // header scroll
  var lastScrollTop = 0, delta = 15;
  $(window).on("scroll", function(event) {
    var st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta) return;
    if ((st > lastScrollTop) && (lastScrollTop > 0)) {
      $("header").css("top", "-90px");
    } else {
      $("header").css("top", "0px");
    }
    lastScrollTop = st;
  });
  window.onmousemove = function(e) {
    if(e.clientY < 100) {
        document.querySelector("header").style.top = "0";
    }
  }

  // slogan
  setInterval(myKeyword, 1500);
    function myKeyword(){
      $('.mainKw1').toggleClass('active');
      $('.mainkw2').toggleClass('active');
    };

  // select box
  $('.skill_1').hide();
  $('.skill_2').hide();
  $('#skillBox').click(function(){
    var selectNum = $("#skillBox option").index($("#skillBox option:selected"));
    console.log(selectNum);
    if($('#skillBox>option:selected').val() == 'skill' + selectNum) {
      console.log(selectNum + '번 선택');
      $('.skill_' + selectNum).show();
      $('.skills ul').not($('.skill_' + selectNum)).hide();
    }
  });


  // About hover arrow
  $('.infoMore p').mouseenter(function() {
    // console.log('마우스오버');
    $('.moreAbout').css("opacity", "1");
    $('.moreAbout').css("left", "70%");
  });
  $('.infoMore p').mouseout(function() {
    // console.log('마우스아웃');
    $('.moreAbout').css("opacity", "0");
    $('.moreAbout').css("left", "30%");
  });
  $('.moreAbout').mouseenter(function() {
    // console.log('마우스오버');
    $(this).css("opacity", "1");
    $(this).css("left", "70%");
  });
  $('.moreAbout').mouseout(function() {
    // console.log('마우스아웃');
    $(this).css("opacity", "1");
    $(this).css("left", "30%");
  });


  // Works slick
  $('.sliderWrap').slick({
    slide: '.worksContainer',
    arrows: true,
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 200,
    fade: true,
    cssEase: 'ease-in'
  });

  // works thumbnail hover
  $('.thumbnail').hover(function() {
    $('.clickGuide').css('opacity','1');
  });
  $('.thumbnail').mouseout(function() {
    $('.clickGuide').css('opacity','0');
  });

  // works 상세페이지 이동
  $('.thumbnail').click(function() {
    location.href="./works.html"
  });

  // 프로젝트 실제 웹사이트 이동
  $('.visit1').click(function() {
    window.open('https://eogeumni.netlify.app', '_blank'); 
  });
  $('.visit2').click(function() {
    window.open('https://e-dam.netlify.app/', '_blank'); 
  });
  $('.visit3').click(function() {
    window.open('https://kyobobook.netlify.app/', '_blank'); 
  });


  // skill explain  
  $('.skill_0 .doughnut1').hover(function() {
    $('.skill_0_explain1').toggleClass('hidden');
  });
  $('.skill_0 .doughnut2').hover(function() {
    $('.skill_0_explain2').toggleClass('hidden');
  });
  $('.skill_0 .doughnut3').hover(function() {
    $('.skill_0_explain3').toggleClass('hidden');
  });
  $('.skill_0 .doughnut4').hover(function() {
    $('.skill_0_explain4').toggleClass('hidden');
  });
  $('.skill_0 .doughnut5').hover(function() {
    $('.skill_0_explain5').toggleClass('hidden');
  });
  
  // resume hover
  $('.resume a').hover(function() {
    $(this).css('color', 'var(--yellow)');
    $(this).text("언제든 기다리고 있어요!");
  });
  $('.resume a').mouseout(function() {
    $(this).css('color', 'var(--pupple)');
    $(this).text("→ 이력서 다운로드");
  });
  
});