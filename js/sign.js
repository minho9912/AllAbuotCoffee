// 로그인확인
function json2() {
  let uid = document.getElementById('login-id').value;
  let upw = document.getElementById('login-pw').value;
  let idx = localStorage.length;

  let i = 0;
  let btn = document.querySelector('button');
  do {
    if (`"${uid}"` == localStorage.getItem(`uid${i}`) && `"${upw}"` == localStorage.getItem(`upw${i}`)) {
      localStorage.setItem('login', uid);
      localStorage.setItem('state', 'true');
      window.location.href = '../index.html';
      alert('환영합니다.');
      break;
      // 돌다가 안맞으면 빈칸으로 냅두어라?? 라기엔.좀..
    } else {
      btn.textContent = '없는 계정입니다.';
    }
    i++;
  } while (i <= idx);
}
