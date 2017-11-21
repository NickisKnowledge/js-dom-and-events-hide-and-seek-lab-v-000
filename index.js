function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}

function increaseRankBy(n) {
  const li_list = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < li_list.length; i++) {
    li_list[i].innerHTML = (parseInt(li_list[i].innerHTML) + n).toString();
  }
}
