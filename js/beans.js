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

let url = new URL(window.location.href).searchParams;
let url_name = url.get('beans');
let bean_name = document.querySelector('.beans-info > .beans-name');
let bean_img = document.querySelector('.beans-info > img');
let bean_sub = document.querySelector('.beans-sub');

if (url_name == 'kenya') {
  bean_name.innerHTML = '케냐';
  bean_img.src = '../img/나라별원두/케냐.png';
  bean_sub.innerHTML =
    "<div class='subcolor'>'신맛과 단맛의 조화, 모든 부분에 밸런스가 좋은 커피'</div><br>케냐는 커피를 생산하기에 아주 적합한 기후조건을 가지고있다.덕분에 풍부한 향과 맛의 밸런스가 아주 훌륭하다.누구에게나 무난하게 추천하는 원두이다.";
}
if (url_name == 'tanzania') {
  bean_name.innerHTML = '탄자니아';
  bean_img.src = '../img/나라별원두/탄자니아.png';
  bean_sub.innerHTML =
    "<div class='subcolor'>'영국 왕실에서 사랑받는 품종, 깔끔하고 마일드한 향미'</div><br>탄자니아는 아프리카의 주요 커피생산국들과국경을 맞대고있고, 원두를 재배하기 좋은 기후를 가지고있다.대표적인원두는 탄자니아AA로 깔끔한 향미가 특징이다.";
}
if (url_name == 'brazil') {
  bean_name.innerHTML = '산토스';
  bean_img.src = '../img/나라별원두/브라질.png';
  bean_sub.innerHTML =
    "<div class='subcolor'>'견과류처럼 고소하고 부드러운맛'</div><br>브라질은 19세기 중반부터 세계 최대커피생산국의 위치를 지켜온 나라이다.다른 원두에 비해 향과 맛이 약한편이라서다른 원두와 블렌딩해서 마시기 좋은 원두이다.";
}
if (url_name == 'costarica') {
  bean_name.innerHTML = '따라주';
  bean_img.src = '../img/나라별원두/코스타리카.png';
  bean_sub.innerHTML =
    "<div class='subcolor'>'상쾌한 신맛과 부드러운 고급 화이트 와인같은 뒷맛'</div><br>'사람은 죽어서 천국에 가기를 원하고 커피매니아는 죽어서 코스타리카로 가길 원한다'라는 말이 있듯이 커피의 향미가 아주 우수한 원두이며적절한 바디감과 입안에 남는 감칠맛이 일품이다.";
}
if (url_name == 'columbia') {
  bean_name.innerHTML = '수프리모';
  bean_img.src = '../img/나라별원두/콜롬비아.png';
  bean_sub.innerHTML =
    "<div class='subcolor'>'고산지대에서 소작농에 의해 재배되는 고품질의 원두'</div><br>안데스산맥을 중심으로 원두를 재배하는콜롬비아는 대부분 소작농에 의해 원두가 지배되기 때문에고품질의 원두생산이 가능하다.마일드 커피의 대명사 수프리모 원두가 대표적이다.";
}
if (url_name == 'ethiopia') {
  bean_name.innerHTML = '예가체프';
  bean_img.src = '../img/나라별원두/에티오피아.png';
  bean_sub.innerHTML =
    "<div class='subcolor'>'레몬, 감귤과 같은 기분 좋은 사미 & 은은한 꽃향기'</div><br>부드럽고 다양한 향이 감도는것이 특징'커피의 귀부인'이라는 별칭이 있을 만큼최상의 원두로 평가받고있다.";
}
if (url_name == 'guatemala') {
  bean_name.innerHTML = '안티구아';
  bean_img.src = '../img/나라별원두/과테말라.png';
  bean_sub.innerHTML =
    "<div class='subcolor'>'묵직한 바디감, 짙은 초콜렛 맛'</div><br>고지대에서 커피 원두를 재배하는 과테말라는산미가 강하고 스모키한 향과 견과류 향이 나는것이 특징이다.대표적인 원두는 안티구아로, 스모키한 향과 초콜릿 같은 단맛이 특징이다.";
}
