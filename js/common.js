var swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.mySwiper > .swiper-pagination',
    clickable: true,
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.mySwiper > .swiper-button-next',
    prevEl: '.mySwiper > .swiper-button-prev',
  },
});

// var swiper2 = new Swiper('.beans-slide', {
//   slidesPerView: 3, //한번에 보여줄 슬라이드 개수
//   spaceBetween: -100,
//   pagination: {
//     el: '.beans-slide > .swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
var swiper = new Swiper('.beans-slide', {
  effect: 'cards',
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var count2 = 9;
var nxt = document.querySelector('.beans-box > .swiper-container > .swiper-button-next');
var prev = document.querySelector('.beans-box > .swiper-container > .swiper-button-prev');
function nxtprev() {
  count2 += 1;
  if (count2 % 2 == 0) {
    nxt.style.display = 'none';
    prev.style.display = 'none';
  } else {
    nxt.style.display = 'block';
    prev.style.display = 'block';
  }
}
var _scrollTop = window.scrollY || document.documentElement.scrollTop;

console.log(_scrollTop);
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, // 무한반복
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}
floatingObject('.video-w', 1, 15);

var ctrl = new ScrollMagic.Controller();

new ScrollMagic.Scene({
  triggerElement: this,
  duration: 250,
  triggerHook: 0.25,
})
  .setClassToggle('.header', 'show')
  .addTo(ctrl);

var hidden = document.querySelector('.hidden');
var sidebar = document.querySelector('#side');
var swiper_btn = document.querySelector('.beans-box');
var count = 9;

sidebar.addEventListener('click', function () {
  count += 1;
  if (count % 2 == 0) {
    hidden.style.display = 'block';
    swiper_btn.style.pointerEvents = 'none';
  } else {
    hidden.style.display = 'none';
    swiper_btn.style.pointerEvents = 'visible';
  }
});

kenya = () => {
  location.href = '../beans-info/beans-info.html?beans=kenya';
};
tan = () => {
  location.href = '../beans-info/beans-info.html?beans=tanzania';
};
san = () => {
  location.href = '../beans-info/beans-info.html?beans=brazil';
};
cos = () => {
  location.href = '../beans-info/beans-info.html?beans=costarica';
};
col = () => {
  location.href = '../beans-info/beans-info.html?beans=columbia';
};
yega = () => {
  location.href = '../beans-info/beans-info.html?beans=ethiopia';
};
mala = () => {
  location.href = '../beans-info/beans-info.html?beans=guatemala';
};
