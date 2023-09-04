$(document).ready(function(){
  AOS.init();
  // // 메뉴바 색
  // $(window).scroll(function () {
  //   var scroll = $(window).scrollTop();
  //   if (scroll > 1) {
  //     $(".header").css("background", "rgba(0,0,0,0.7");
  //     $(".nav ul li a").css("color", "#fff");
  //   } else {
  //     $(".header").css("background", "#fff");
  //     $(".nav ul li a").css("color", "#111");
  //   }
    // 사이드메뉴
    // 버튼을 누르면 상단으로 이동
    const $topBtn = document.querySelector(".side-up");
    $topBtn.onclick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    // 버튼을 누르면 하단으로 이동
    const $bottomBtn = document.querySelector(".side-down");
    $bottomBtn.onclick = () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    };

    
  });

window.addEventListener("load",function(){
  // 페이지 로딩시 메인사진 글자에 밑줄 효과
    const imageOverlay = document.querySelector(".sub-banner .container");
    // 원하는 시간(밀리초) 만큼 지연
    setTimeout(function () {
      imageOverlay.classList.add("loaded");
    }, 300);
})

