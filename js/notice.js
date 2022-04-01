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
