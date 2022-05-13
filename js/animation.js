// const move_item = document.querySelectorAll('.info-box');

// _.throttle (함수, 시간)
window.addEventListener(
  'scroll',
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 350) {
      //배지 숨기기
      //gsap.to(요소, 지속시간, 옵션)

      //버튼 보이기
      gsap.to(move_item, 0.2, {
        y: 0,
      });
    } else {
      // 배지 보여주기
      //gsap.to(요소, 지속시간, 옵션)

      //버튼 숨기기

      gsap.to(move_item, 0, {
        y: 200,
      });
    }
  }, 300)
);
