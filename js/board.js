let list = localStorage.getItem('postings');
let parsedList = JSON.parse(list);
let number;
if (parsedList !== null) {
  number = parsedList.length - 1;
}

let number2 = Math.ceil(number / 10);
let number3;
let pageArray = [];

init();

function init() {
  loadBoard();
}

function loadBoard() {
  let variable = number;
  let variable2;
  if (variable > 9) {
    variable2 = number - 9;
  } else {
    variable2 = 0;
  }

  if (number !== 0) {
    makeTable(variable, variable2);
    makePageIndex();
  } else {
    makeTable(0, 0);
  }
}

function clickPosting(index, title, content) {
  document.body.innerHTML = '';

  let table = document.createElement('table');
  table.style.border = '1px solid black';
  table.style.marginTop = '3vh';
  table.style.marginLeft = '4vw';
  table.style.width = '90vw';
  table.style.paddingTop = '1vh';
  table.style.paddingBottom = '1vh';
  table.style.paddingLeft = '1vw';

  let tr1 = document.createElement('tr');
  tr1.style.border = '1px solid black';
  let td1 = document.createElement('td');
  td1.textContent = title;
  td1.style.padding = '1vh';
  tr1.appendChild(td1);
  table.appendChild(tr1);

  let tr2 = document.createElement('tr');
  tr2.style.border = '1px solid black';
  let td2 = document.createElement('td');
  td2.textContent = content;
  td2.style.padding = '1vh';
  td2.style.height = '40vh';
  tr2.appendChild(td2);
  table.appendChild(tr2);

  document.body.appendChild(table);

  let listButton = document.createElement('button');
  document.body.appendChild(listButton);
  let listText = document.createTextNode('목록');
  listButton.appendChild(listText);
  listButton.style.marginTop = '3vh';
  listButton.style.marginLeft = '5vw';
  listButton.setAttribute('class', 'btn');
  listButton.addEventListener('click', moveToList);

  let modifyButton = document.createElement('button');
  document.body.appendChild(modifyButton);
  let modifyText = document.createTextNode('수정');
  modifyButton.appendChild(modifyText);
  modifyButton.setAttribute('class', 'btn');
  modifyButton.addEventListener('click', modifyPosting);

  let deleteButton = document.createElement('button');
  document.body.appendChild(deleteButton);
  let deleteText = document.createTextNode('삭제');
  deleteButton.appendChild(deleteText);
  deleteButton.setAttribute('class', 'btn');
  deleteButton.addEventListener('click', erasePosting);

  replyInput(index);

  reply(index);

  function modifyPosting() {
    document.body.innerHTML = '';
    let form = document.createElement('form');
    form.style.marginTop = '3vh';
    form.style.marginLeft = '5vw';
    form.style.width = '90vw';
    let titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.setAttribute('id', 'titleInput2');
    titleInput.setAttribute('value', title);
    titleInput.style.width = '90vw';
    titleInput.style.padding = '1vh';
    form.appendChild(titleInput);
    let br = document.createElement('br');
    form.appendChild(br);
    let contentInput = document.createElement('input');
    contentInput.type = 'text';
    contentInput.setAttribute('id', 'contentInput2');
    contentInput.setAttribute('value', content);
    contentInput.style.width = '90vw';
    contentInput.style.height = '50vh';
    contentInput.style.padding = '1vh';
    form.appendChild(contentInput);
    let br2 = document.createElement('br');
    form.appendChild(br2);
    let submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.style.marginTop = '3vh';
    submitButton.setAttribute('class', 'btn');
    form.appendChild(submitButton);
    document.body.appendChild(form);
    form.addEventListener('submit', editPosting);

    function editPosting(e) {
      let newTitle = form.querySelector('#titleInput2');
      let newContent = form.querySelector('#contentInput2');
      if (title !== e.target.value && content === e.target.value) {
        newTitle.setAttribute('value', title);
        newContent.setAttribute('value', e.target.value);
      } else if (title === e.target.value && content !== e.target.value) {
        newTitle.setAttribute('value', e.target.value);
        newContent.setAttribute('value', content);
      } else if (title !== e.target.value && content !== e.target.value) {
        newTitle.setAttribute('value', title);
        newContent.setAttribute('value', content);
      } else if (title === e.target.value && content === e.target.value) {
        newTitle.setAttribute('value', e.target.value);
        newContent.setAttribute('value', e.target.value);
      }

      parsedList[index].title = newTitle.value;
      parsedList[index].content = newContent.value;
      let stringfiedArray = JSON.stringify(parsedList);
      localStorage.setItem('postings', stringfiedArray);
      location.href = 'board.html';
    }
  }

  function erasePosting() {
    parsedList.splice(index, 1);
    for (let i = 0; i < parsedList.length; i++) {
      temp = i;
      parsedList[i].index = temp;
    }
    let stringfiedArray = JSON.stringify(parsedList);
    localStorage.setItem('postings', stringfiedArray);
    location.href = 'board.html';
  }
}

function makeMenu() {
  if (window.innerWidth > 600) {
    let nav = document.createElement('nav');
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    let liText = document.createTextNode('HOME');
    li.appendChild(liText);
    li.addEventListener('click', moveToHome);
    ul.appendChild(li);

    let li2 = document.createElement('li');
    let li2Text = document.createTextNode('BOARD');
    li2.appendChild(li2Text);
    li2.addEventListener('click', moveToList);
    ul.appendChild(li2);

    nav.appendChild(ul);
    document.body.appendChild(nav);
  } else {
    let nav = document.createElement('nav');
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    let liText = document.createTextNode('HOME');
    li.appendChild(liText);
    li.style.lineHeight = '50px';
    li.style.width = '100%';
    li.addEventListener('click', moveToHome);
    ul.appendChild(li);

    let li2 = document.createElement('li');
    let li2Text = document.createTextNode('BOARD');
    li2.appendChild(li2Text);
    li2.style.lineHeight = '50px';
    li2.addEventListener('click', moveToList);
    ul.appendChild(li2);

    nav.appendChild(ul);

    let a = document.createElement('a');
    a.setAttribute('id', 'trigger');
    a.textContent = 'MENU';
    a.style.color = 'white';
    nav.appendChild(a);
    document.body.appendChild(nav);

    $(function () {
      var trigger = $('#trigger');
      var menu = $('nav ul');
      $(trigger).on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
      });
      $(window).resize(function () {
        var w = $(window).width();
        if (w > 320 && menu.is(':hidden')) {
          menu.removeAttr('style');
        }
      });
    });
  }
}

function moveToList() {
  location.href = 'board.html';
}

function makeTable(variable, variable2) {
  let table = document.createElement('table');
  table.style.marginTop = '3vh';
  table.style.marginLeft = '17vw';
  table.style.marginRight = '17vw';

  let firstRow = document.createElement('tr');
  firstRow.style.textAlign = 'center';
  firstRow.style.color = '#fff';
  firstRow.style.fontWeight = 'bold';
  firstRow.style.fontSize = '1.8rem';
  firstRow.style.backgroundColor = 'rgb(141, 180, 141)';

  let index = document.createElement('td');
  let indexText = document.createTextNode('번호');
  index.appendChild(indexText);
  index.style.width = '15vw';
  index.style.paddingTop = '1.5vh';
  index.style.paddingBottom = '1.5vh';
  index.style.border = '1px #e3e3e3 solid';
  firstRow.appendChild(index);

  let title = document.createElement('td');
  let titleText = document.createTextNode('제목');
  title.appendChild(titleText);
  title.style.border = '1px #e3e3e3 solid';
  title.style.width = '60vw';
  firstRow.appendChild(title);

  let date = document.createElement('td');
  let dateText = document.createTextNode('작성일');
  date.appendChild(dateText);
  date.style.width = '50vw';
  date.style.border = '1px #e3e3e3 solid';
  firstRow.appendChild(date);

  table.appendChild(firstRow);

  // 밑에테이블 색깔부분
  for (let i = variable; i >= variable2; i--) {
    let item = parsedList[i];
    let tr = document.createElement('tr');
    tr.style.textAlign = 'center';
    tr.style.paddiing = '2vh';
    if (i % 2 === 0) {
      tr.style.backgroundColor = 'white';
      tr.style.border = '1px solid #ccc';
    } else {
      tr.style.backgroundColor = '#white';
      tr.style.border = '1px solid #ccc';
    }
    let td = document.createElement('td');
    td.style.width = '15vw';
    td.style.border = '1px solid #ccc';
    td.textContent = item.index + 1;
    td.style.paddingTop = '1.5vh';
    td.style.paddingBottom = '1.5vh';

    tr.appendChild(td);

    let td2 = document.createElement('td');
    td2.style.width = '60vw';
    td2.style.border = '1px solid #ccc';

    td2.textContent = item.title;
    td2.onclick = function () {
      clickPosting(item.index, item.title, item.content);
    };
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.style.width = '50vw';
    td3.textContent = item.date;
    td3.style.border = '1px solid #ccc';

    tr.appendChild(td3);
    table.appendChild(tr);
  }

  document.body.appendChild(table);
}

function replyInput(index) {
  let replyForm = document.createElement('form');
  let input = document.createElement('input');
  input.type = 'text';
  input.placeholder = '댓글';
  input.style.marginTop = '3vh';
  input.style.marginLeft = '5vw';
  input.style.marginRight = '2vw';
  input.style.width = '30vw';
  replyForm.appendChild(input);
  let submitButton2 = document.createElement('input');
  submitButton2.type = 'submit';
  submitButton2.setAttribute('class', 'replybtn');
  replyForm.appendChild(submitButton2);
  document.body.appendChild(replyForm);
  replyForm.addEventListener('submit', submitReply);

  function submitReply(e) {
    var today = new Date();

    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);

    var dateString = year + '-' + month + '-' + day;
    e.preventDefault();
    let replyArray = [];
    let replyForm = e.target;
    let input2 = replyForm.querySelector('input');
    let value = dateString + ` |  [${localStorage.getItem('login')}] :      ` + input2.value;

    let item = {};
    item.content = value;
    replyArray.push(item);
    if (window.localStorage.getItem('state').toString() === 'false') {
      console.log('gㅎㅇㅇ');
      alert('로그인을 하셔야합니다');
      return;
    }

    if (parsedList[index].replies !== undefined) {
      let repliesArray = parsedList[index].replies;
      let temp = repliesArray.concat(replyArray);
      parsedList[index].replies = temp;
      let key = temp.length - 1;
      item.key = key;
    } else {
      let key = replyArray.length - 1;
      item.key = key;
      parsedList[index].replies = replyArray;
    }

    let stringifiedArray = JSON.stringify(parsedList);
    localStorage.setItem('postings', stringifiedArray);

    input2.value = '';

    let div = document.createElement('div');
    div.textContent = item.content;
    div.style.marginLeft = '5vw';
    div.style.marginTop = '0.5vh';
    document.body.appendChild(div);
  }
}

function reply(index) {
  if (parsedList[index].replies !== undefined) {
    let reply = parsedList[index].replies;

    let replyContainer = document.createElement('div');
    document.body.appendChild(replyContainer);

    for (let i = 0; i < reply.length; i++) {
      let div = document.createElement('div');
      div.innerHTML = parsedList[index].replies[i].content;
      div.style.marginLeft = '5vw';
      div.style.marginTop = '0.5vh';
      replyContainer.appendChild(div);
    }
  }
}
