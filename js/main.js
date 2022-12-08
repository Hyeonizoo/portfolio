$(document).ready(function() {

  $(function(){
    var idx = 0;
    var mainKw = $('.mainKw');
    setInterval(myKeyword, 1500);
    function myKeyword(){
      mainKw.removeClass('active');
      // mainKw.eq(idx).addClass('active');
      // active가 바뀔 때마다 랜덤값을 다시 주기 위해
      // $('.peopleNum').text(Math.floor(Math.random() * 1000));
      console.log(idx);
      idx++;
      if(idx >= mainKw.length) idx= 0;
      for(i=0; i<3; i++);
    };
  });






})