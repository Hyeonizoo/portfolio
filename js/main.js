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

});
