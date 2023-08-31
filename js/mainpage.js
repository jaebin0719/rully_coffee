$(document).ready(function () {
  // AOS
  AOS.init();
  // 비주얼 스와이퍼
  const visSwiper = new Swiper(".visualSwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    speed: 3000,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // 메뉴 슬라이드
  $(function () {
    // Menu Story
    function swiperMenuStory(el) {
      var swiperList = $(el + " .swiper-slide");
      var swiperListFirst =
        '<div class="swiper-slide">' +
        $(el + " .swiper-slide:first-child").html() +
        "</div>";
      var swiperListLast =
        '<div class="swiper-slide">' +
        $(el + " .swiper-slide:last-child").html() +
        "</div>";
      var swiperListLength = swiperList.length;
      var swiperObj = new Swiper(el + " .swiper-container", {
        loop: true,
        speed: 500,
        simulateTouch: false,
        paginationClickable: true,
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 0,
        navigation: {
          nextEl: el + " .swiper-button-next",
          prevEl: el + " .swiper-button-prev",
        },
        breakpoints: {
          767: {
            centeredSlides: false,
            slidesPerView: 1,
            spaceBetween: 0,
          },
        },
        on: {
          init: function () {
            $this = this;
            if ($(el).find(".swiper-slide-active").length) {
              setTimeout(function () {
                thisAlt = $(el)
                  .find(".swiper-slide-active")
                  .find("img")
                  .attr("alt");
                $(el + " .swiper-pagination").text(thisAlt);
              }, 10);
            } else {
              setTimeout(function () {
                thisAlt = $(el)
                  .find(".swiper-slide-duplicate-active")
                  .find("img")
                  .attr("alt");
                $(el + " .swiper-pagination").text(thisAlt);
              }, 10);
            }
          },
          slideChange: function () {
            $this = this;
            if ($(el).find(".swiper-slide-active").length) {
              setTimeout(function () {
                thisAlt = $(el)
                  .find(".swiper-slide-active")
                  .find("img")
                  .attr("alt");
                $(el + " .swiper-pagination").text(thisAlt);
              }, 10);
            } else {
              setTimeout(function () {
                thisAlt = $(el)
                  .find(".swiper-slide-duplicate-active")
                  .find("img")
                  .attr("alt");
                $(el + " .swiper-pagination").text(thisAlt);
              }, 10);
            }
          },
        },
      });
      return swiperObj;
    }
    // Menu Story 슬라이드 이미지 리사이징 width 조정
    var swiperMainStory1;
    var swiperMainStory2;
    var swiperMainStory3;

    // Menu Story 스와이프 선언
    swiperMainStory1 = swiperMenuStory("#tabpanel-1");
    $(document)
      .on("click", "#tab-story1", function () {
        $("#tabpanel-2").hide();
        $("#tabpanel-3").hide();

        if (swiperMainStory1 != undefined) {
          swiperMainStory1.destroy();
          $("#tabpanel-1").hide();
          setTimeout(function () {
            $("#tabpanel-1").show();
            swiperMainStory1 = swiperMenuStory("#tabpanel-1");
          }, 10);
        } else {
          $("#tabpanel-1").hide();
          setTimeout(function () {
            $("#tabpanel-1").show();
            swiperMainStory1 = swiperMenuStory("#tabpanel-1");
          }, 10);
        }
      })
      .on("click", "#tab-story2", function () {
        $("#tabpanel-1").hide();
        $("#tabpanel-3").hide();

        if (swiperMainStory2 != undefined) {
          swiperMainStory2.destroy();
          $("#tabpanel-2").hide();
          setTimeout(function () {
            $("#tabpanel-2").show();
            swiperMainStory2 = swiperMenuStory("#tabpanel-2");
          }, 10);
        } else {
          $("#tabpanel-2").hide();
          setTimeout(function () {
            $("#tabpanel-2").show();
            swiperMainStory2 = swiperMenuStory("#tabpanel-2");
          }, 10);
        }
      })
      .on("click", "#tab-story3", function () {
        $("#tabpanel-1").hide();
        $("#tabpanel-2").hide();
        if (swiperMainStory3 != undefined) {
          swiperMainStory3.destroy();
          $("#tabpanel-3").hide();
          setTimeout(function () {
            $("#tabpanel-3").show();
            swiperMainStory3 = swiperMenuStory("#tabpanel-3");
          }, 10);
        } else {
          $("#tabpanel-3").hide();
          setTimeout(function () {
            $("#tabpanel-3").show();
            swiperMainStory3 = swiperMenuStory("#tabpanel-3");
          }, 10);
        }
      });
  });
  $(document).on("click", ".tabs .tab", function () {
    $(this).parent("li").addClass("is-active");
    $(this).parent("li").siblings("li").removeClass("is-active");
  });
});
