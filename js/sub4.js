$( document ).ready( function() {
    var jbOffset = $( '#header' ).offset();
    $( window ).scroll( function() {
      if ( $( document ).scrollTop() > 229) {//여기 지정된 길이 이후부터 적용됩니다
        $( '#header' ).addClass("on");//색깔 바뀔 곳의 클래스 혹은 아이디 지정후 원하는 색상등을 지정
        $(".sub_logo").attr("src", "images/main_logo.png");
        $(".sub_icon1").attr("src", "images/main_icon1.png");
        $(".sub_icon2").attr("src", "images/main_icon2.png");
      }
      else {
        $( '#header' ).removeClass("on");//처음에 보이는 배경부분
        $(".sub_logo").attr("src", "images/sub_logo.png");
        $(".sub_icon1").attr("src", "images/sub_icon1.png");
        $(".sub_icon2").attr("src", "images/sub_icon2.png");
      }
    });
  });

  $(function(){
    $("#move ul li").click(function(){
        $(this).addClass("click2").siblings().removeClass("click2");
    });
    
});

/*top버튼 부드럽게*/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  if (target.length) {
  $('html, body').animate({
  scrollTop: target.offset().top
  }, 500);//움직이는 시간 조정
  return false;
  }
  }
  });
  });