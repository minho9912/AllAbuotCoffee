let box_list = [];

let fst_value = false;
let sec_value = false;
let third_value = false;

let mix_btn = document.querySelector('.mix_btn');
let re_btn = document.querySelector('.reset_btn');

// 첫번째박스
let fst_top = document.querySelector('.fst_box');
let fst_cen = document.querySelector('.beans-fst');
let fst_bot = document.querySelector('.beans-fst-img > img');
let fst_beh = document.querySelector('.behind_box_fst');

// 두번째박스
let sec_top = document.querySelector('.sec_box');
let sec_cen = document.querySelector('.beans-sec');
let sec_bot = document.querySelector('.beans-sec-img > img');
let sec_beh = document.querySelector('.behind_box_sec');

// 세번째박스
let thd_beh = document.querySelector('.behind_box_third');
let thd_fst = document.querySelector('.first-pro');
let thd_sec = document.querySelector('.second-pro');
let thd_thd = document.querySelector('.third-pro');

function kenya() {
  if (box_list.length < 2) {
    box_list.push('kenya');
    document.querySelector('.beans-ho > .card-box:nth-child(1)').style.display = 'none';
  } else {
    alert('두개만 선택가능합니다');
    return;
  }

  if (fst_value == false) {
    fst_beh.style.display = 'none';
    fst_value = true;
    fst_top.innerHTML = 'Kenya';
    fst_cen.innerHTML = "'신맛과 단맛의 조화, 모든 부분에 밸런스가 좋은 커피'";
    fst_bot.src = '../img/나라/국기/케냐.png';
  } else {
    sec_beh.style.display = 'none';
    sec_value = true;
    sec_top.innerHTML = 'Kenya';
    sec_cen.innerHTML = "'신맛과 단맛의 조화, 모든 부분에 밸런스가 좋은 커피'";
    sec_bot.src = '../img/나라/국기/케냐.png';
  }
}

function ethiopia() {
  if (box_list.length < 2) {
    box_list.push('ethiopia');
    document.querySelector('.beans-ho > .card-box:nth-child(2)').style.display = 'none';
  } else {
    alert('두개만 선택가능합니다');
    return;
  }

  if (fst_value == false) {
    fst_beh.style.display = 'none';
    fst_value = true;
    fst_top.innerHTML = 'Yirgacheffe';
    fst_cen.innerHTML = "'레몬, 감귤과 같은 기분 좋은 사미 & 은은한 꽃향기'";
    fst_bot.src = '../img/나라/국기/에티오피아.png';
  } else {
    sec_beh.style.display = 'none';
    sec_value = true;
    sec_top.innerHTML = 'Yirgacheffe';
    sec_cen.innerHTML = "'레몬, 감귤과 같은 기분 좋은 사미 & 은은한 꽃향기'";
    sec_bot.src = '../img/나라/국기/에티오피아.png';
  }
}

function brazil() {
  if (box_list.length < 2) {
    box_list.push('brazil');
    document.querySelector('.beans-ho > .card-box:nth-child(3)').style.display = 'none';
  } else {
    alert('두개만 선택가능합니다');
    return;
  }

  if (fst_value == false) {
    fst_beh.style.display = 'none';
    fst_value = true;
    fst_top.innerHTML = 'Santos';
    fst_cen.innerHTML = "'견과류처럼 고소하고 부드러운맛'";
    fst_bot.src = '../img/나라/국기/브라질.png';
  } else {
    sec_beh.style.display = 'none';
    sec_value = true;
    sec_top.innerHTML = 'Santos';
    sec_cen.innerHTML = "'견과류처럼 고소하고 부드러운맛'";
    sec_bot.src = '../img/나라/국기/브라질.png';
  }
}

function guatemala() {
  if (box_list.length < 2) {
    box_list.push('guatemala');
    document.querySelector('.beans-ho > .card-box:nth-child(4)').style.display = 'none';
  } else {
    alert('두개만 선택가능합니다');
    return;
  }

  if (fst_value == false) {
    fst_beh.style.display = 'none';
    fst_value = true;
    fst_top.innerHTML = 'Antigua';
    fst_cen.innerHTML = "'묵직한 바디감, 짙은 초콜렛 맛'";
    fst_bot.src = '../img/나라/국기/과테말라.png';
  } else {
    sec_beh.style.display = 'none';
    sec_value = true;
    sec_top.innerHTML = 'Antigua';
    sec_cen.innerHTML = "'묵직한 바디감, 짙은 초콜렛 맛'";
    sec_bot.src = '../img/나라/국기/과테말라.png';
  }
}

function costarica() {
  if (box_list.length < 2) {
    box_list.push('costarica');
    document.querySelector('.beans-ho > .card-box:nth-child(5)').style.display = 'none';
  } else {
    alert('두개만 선택가능합니다');
    return;
  }

  if (fst_value == false) {
    fst_beh.style.display = 'none';
    fst_value = true;
    fst_top.innerHTML = 'Ttalaju';
    fst_cen.innerHTML = "'상쾌한 신맛과 부드러운 고급 화이트 와인같은 뒷맛'";
    fst_bot.src = '../img/나라/국기/코스타리카.png';
  } else {
    sec_beh.style.display = 'none';
    sec_value = true;
    sec_top.innerHTML = 'Ttalaju';
    sec_cen.innerHTML = "'상쾌한 신맛과 부드러운 고급 화이트 와인같은 뒷맛'";
    sec_bot.src = '../img/나라/국기/코스타리카.png';
  }
}

function columbia() {
  if (box_list.length < 2) {
    box_list.push('columbia');
    document.querySelector('.beans-ho > .card-box:nth-child(6)').style.display = 'none';
  } else {
    alert('두개만 선택가능합니다');
    return;
  }

  if (fst_value == false) {
    fst_beh.style.display = 'none';
    fst_value = true;
    fst_top.innerHTML = 'Supremo';
    fst_cen.innerHTML = "'고산지대에서 소작농에 의해 재배되는 고품질의 원두'";
    fst_bot.src = '../img/나라/국기/콜롬비아.png';
  } else {
    sec_beh.style.display = 'none';
    sec_value = true;
    sec_top.innerHTML = 'Supremo';
    sec_cen.innerHTML = "'고산지대에서 소작농에 의해 재배되는 고품질의 원두'";
    sec_bot.src = '../img/나라/국기/콜롬비아.png';
  }
}

function tanzania() {
  if (box_list.length < 2) {
    box_list.push('tanzania');
    document.querySelector('.beans-ho > .card-box:nth-child(7)').style.display = 'none';
  } else {
    alert('두개만 선택가능합니다');
    return;
  }

  if (fst_value == false) {
    fst_beh.style.display = 'none';
    fst_value = true;
    fst_top.innerHTML = 'Tanzania';
    fst_cen.innerHTML = "'영국 왕실에서 사랑받는 품종, 깔끔하고 마일드한 향미'";
    fst_bot.src = '../img/나라/국기/탄자니아.png';
  } else {
    sec_beh.style.display = 'none';
    sec_value = true;
    sec_top.innerHTML = 'Tanzania';
    sec_cen.innerHTML = "'영국 왕실에서 사랑받는 품종, 깔끔하고 마일드한 향미'";
    sec_bot.src = '../img/나라/국기/탄자니아.png';
  }
}

function mix() {
  if (box_list.length <= 1) {
    alert('조합할 원두가 없습니다.');
  }

  if (box_list.includes('kenya') && box_list.includes('ethiopia')) {
    thd_beh.style.display = 'none';
    thd_fst.style.height = '200px';
    thd_fst.style.backgroundColor = '#d67474';
    thd_sec.style.height = '180px';
    thd_sec.style.backgroundColor = '#d67474';
    thd_thd.style.height = '100px';
    thd_thd.style.backgroundColor = '#d67474';
  }
  if (box_list.includes('kenya') && box_list.includes('brazil')) {
    thd_beh.style.display = 'none';
    thd_fst.style.height = '150px';
    thd_fst.style.backgroundColor = '#d67474';
    thd_sec.style.height = '120px';
    thd_sec.style.backgroundColor = '#d67474';
    thd_thd.style.height = '130px';
    thd_thd.style.backgroundColor = '#d67474';
  }
  if (box_list.includes('kenya') && box_list.includes('guatemala')) {
    thd_beh.style.display = 'none';
    thd_fst.style.height = '160px';
    thd_fst.style.backgroundColor = '#d67474';
    thd_sec.style.height = '130px';
    thd_sec.style.backgroundColor = '#d67474';
    thd_thd.style.height = '150px';
    thd_thd.style.backgroundColor = '#d67474';
  }
  if (box_list.includes('kenya') && box_list.includes('costarica')) {
    thd_beh.style.display = 'none';
    thd_fst.style.height = '170px';
    thd_fst.style.backgroundColor = '#d67474';
    thd_sec.style.height = '150px';
    thd_sec.style.backgroundColor = '#d67474';
    thd_thd.style.height = '110px';
    thd_thd.style.backgroundColor = '#d67474';
  }
  if (box_list.includes('kenya') && box_list.includes('columbia')) {
    thd_beh.style.display = 'none';
    thd_fst.style.height = '140px';
    thd_fst.style.backgroundColor = '#d67474';
    thd_sec.style.height = '180px';
    thd_sec.style.backgroundColor = '#d67474';
    thd_thd.style.height = '120px';
    thd_thd.style.backgroundColor = '#d67474';
  }
  if (box_list.includes('kenya') && box_list.includes('tanzania')) {
    thd_beh.style.display = 'none';
    thd_fst.style.height = '200px';
    thd_fst.style.backgroundColor = '#d67474';
    thd_sec.style.height = '200px';
    thd_sec.style.backgroundColor = '#d67474';
    thd_thd.style.height = '120px';
    thd_thd.style.backgroundColor = '#d67474';
  }
  if (box_list.includes('ethiopia') && box_list.includes('brazil')) {
    thd_beh.style.display = 'none';
    thd_fst.style.height = '130px';
    thd_fst.style.backgroundColor = '#d67474';
    thd_sec.style.height = '150px';
    thd_sec.style.backgroundColor = '#d67474';
    thd_thd.style.height = '100px';
    thd_thd.style.backgroundColor = '#d67474';
  }
  if (box_list.includes('ethiopia') && box_list.includes('guatemala')) {
    thd_beh.style.display = 'none';
    thd_fst.style.height = '140px';
    thd_fst.style.backgroundColor = '#d67474';
    thd_sec.style.height = '157px';
    thd_sec.style.backgroundColor = '#d67474';
    thd_thd.style.height = '106px';
    thd_thd.style.backgroundColor = '#d67474';
  }
  if (box_list.includes('ethiopia') && box_list.includes('costarica')) {
    thd_beh.style.display = 'none';
    thd_fst.style.height = '140px';
    thd_fst.style.backgroundColor = '#d67474';
    thd_sec.style.height = '170px';
    thd_sec.style.backgroundColor = '#d67474';
    thd_thd.style.height = '120px';
    thd_thd.style.backgroundColor = '#d67474';
  }
  if (box_list.includes('ethiopia') && box_list.includes('columbia')) {
    thd_beh.style.display = 'none';
    thd_fst.style.height = '167px';
    thd_fst.style.backgroundColor = '#d67474';
    thd_sec.style.height = '158px';
    thd_sec.style.backgroundColor = '#d67474';
    thd_thd.style.height = '120px';
    thd_thd.style.backgroundColor = '#d67474';
  }
  if (box_list.includes('ethiopia') && box_list.includes('tanzania')) {
    thd_beh.style.display = 'none';
    thd_fst.style.height = '155px';
    thd_fst.style.backgroundColor = '#d67474';
    thd_sec.style.height = '167px';
    thd_sec.style.backgroundColor = '#d67474';
    thd_thd.style.height = '110px';
    thd_thd.style.backgroundColor = '#d67474';
  }
  if (box_list.includes('brazil') && box_list.includes('guatemala')) {
    thd_beh.style.display = 'none';
    thd_fst.style.height = '120px';
    thd_fst.style.backgroundColor = '#d67474';
    thd_sec.style.height = '140px';
    thd_sec.style.backgroundColor = '#d67474';
    thd_thd.style.height = '150px';
    thd_thd.style.backgroundColor = '#d67474';
  }
  if (box_list.includes('brazil') && box_list.includes('costarica')) {
    thd_beh.style.display = 'none';
    thd_fst.style.height = '130px';
    thd_fst.style.backgroundColor = '#d67474';
    thd_sec.style.height = '138px';
    thd_sec.style.backgroundColor = '#d67474';
    thd_thd.style.height = '140px';
    thd_thd.style.backgroundColor = '#d67474';
  }
  if (box_list.includes('brazil') && box_list.includes('columbia')) {
    thd_beh.style.display = 'none';
    thd_fst.style.height = '130px';
    thd_fst.style.backgroundColor = '#d67474';
    thd_sec.style.height = '136px';
    thd_sec.style.backgroundColor = '#d67474';
    thd_thd.style.height = '160px';
    thd_thd.style.backgroundColor = '#d67474';
  }
  if (box_list.includes('brazil') && box_list.includes('tanzania')) {
    thd_beh.style.display = 'none';
    thd_fst.style.height = '130px';
    thd_fst.style.backgroundColor = '#d67474';
    thd_sec.style.height = '135px';
    thd_sec.style.backgroundColor = '#d67474';
    thd_thd.style.height = '140px';
    thd_thd.style.backgroundColor = '#d67474';
  }
  if (box_list.includes('guatemala') && box_list.includes('costarica')) {
    thd_beh.style.display = 'none';
    thd_fst.style.height = '110px';
    thd_fst.style.backgroundColor = '#d67474';
    thd_sec.style.height = '110px';
    thd_sec.style.backgroundColor = '#d67474';
    thd_thd.style.height = '140px';
    thd_thd.style.backgroundColor = '#d67474';
  }
  if (box_list.includes('guatemala') && box_list.includes('columbia')) {
    thd_beh.style.display = 'none';
    thd_fst.style.height = '120px';
    thd_fst.style.backgroundColor = '#d67474';
    thd_sec.style.height = '130px';
    thd_sec.style.backgroundColor = '#d67474';
    thd_thd.style.height = '170px';
    thd_thd.style.backgroundColor = '#d67474';
  }
  if (box_list.includes('guatemala') && box_list.includes('tanzania')) {
    thd_beh.style.display = 'none';
    thd_fst.style.height = '130px';
    thd_fst.style.backgroundColor = '#d67474';
    thd_sec.style.height = '135px';
    thd_sec.style.backgroundColor = '#d67474';
    thd_thd.style.height = '165px';
    thd_thd.style.backgroundColor = '#d67474';
  }
  if (box_list.includes('costarica') && box_list.includes('columbia')) {
    thd_beh.style.display = 'none';
    thd_fst.style.height = '100px';
    thd_fst.style.backgroundColor = '#d67474';
    thd_sec.style.height = '100px';
    thd_sec.style.backgroundColor = '#d67474';
    thd_thd.style.height = '150px';
    thd_thd.style.backgroundColor = '#d67474';
  }
  if (box_list.includes('costarica') && box_list.includes('tanzania')) {
    thd_beh.style.display = 'none';
    thd_fst.style.height = '140px';
    thd_fst.style.backgroundColor = '#d67474';
    thd_sec.style.height = '155px';
    thd_sec.style.backgroundColor = '#d67474';
    thd_thd.style.height = '170px';
    thd_thd.style.backgroundColor = '#d67474';
  }
  if (box_list.includes('columbia') && box_list.includes('tanzania')) {
    thd_beh.style.display = 'none';
    thd_fst.style.height = '150px';
    thd_fst.style.backgroundColor = '#d67474';
    thd_sec.style.height = '160px';
    thd_sec.style.backgroundColor = '#d67474';
    thd_thd.style.height = '140px';
    thd_thd.style.backgroundColor = '#d67474';
  }
}

function reset() {
  if (box_list.length >= 1) {
    window.location.reload();
  } else {
    alert('선택된 항목이 없습니다.');
  }
}
