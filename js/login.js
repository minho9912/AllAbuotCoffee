// 가입
function json1() {
  let uid = document.getElementById('user-id').value;
  let upw = document.getElementById('user-pass').value;
  let idx = localStorage.length;

  // localStorage.clear();

  let array_data = [];
  for (let i = 0; i <= idx; i += 2) {
    array_data.push(window.localStorage.getItem(`uid${i}`));
  }

  if (array_data.toString().split('"').includes(uid) == true) {
    alert('중복된 계정입니다');
    window.localStorage.removeItemItem(`uid${idx}`);
  } else {
    window.localStorage.setItem(`uid${idx}`, JSON.stringify(uid));
    window.localStorage.setItem(`upw${idx}`, JSON.stringify(upw));
    alert('가입완료');
  }
  console.log(array_data.toString().split('"').includes(uid));
  console.log(array_data);
}
