  

//
function box1() {
  document.getElementById("main-img").style.backgroundImage =
    "url('images/sub_page_1_img/gomo.png')";
  document.getElementById("map-img").style.backgroundImage =
    "url('images/sub_page_1_img/gomomap.png')";
  document.getElementById("main-img").style.transition = "0.5s";
  document.getElementById("map-img").style.transition = "0.5s";
  updateButtonState(1);
}

function box2() {
  document.getElementById("main-img").style.backgroundImage =
    "url('images/sub_page_1_img/gajang.png')";
  document.getElementById("map-img").style.backgroundImage =
    "url('images/sub_page_1_img/gajjangmap.png')";
  document.getElementById("main-img").style.transition = "0.5s";
  document.getElementById("map-img").style.transition = "0.5s";
  updateButtonState(2);
}

function box3() {
  document.getElementById("main-img").style.backgroundImage =
    "url('images/sub_page_1_img/goungsan.png')";
  document.getElementById("map-img").style.backgroundImage =
    "url('images/sub_page_1_img/goungsanmap.png')";
  document.getElementById("main-img").style.transition = "0.5s";
  document.getElementById("map-img").style.transition = "0.5s";
  updateButtonState(3);
}

function updateButtonState(selectedIndex) {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button, index) => {
    if (index === selectedIndex - 1) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
}


//오시는 길==============
const scrollToGuide = document.querySelector("a[href='#guide']");

scrollToGuide.addEventListener("click", function (event) {
  event.preventDefault(); // 기본 링크 동작 방지
  const guideSection = document.getElementById("guide");
  guideSection.scrollIntoView({
    behavior: "smooth", // 부드러운 스크롤링 사용
    block: "start", // 섹션의 시작 부분에 맞춰 스크롤링
  });
});

