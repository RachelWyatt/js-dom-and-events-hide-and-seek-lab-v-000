function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').getElementsByTagName('div')[3]
}

function increaseRankBy(n) {
  let string = document.getElementById('app').querySelectorAll('ul.ranked-list');
  for (var i = 0, l = string.length; i<l ; i++) {
    string[i].innerHTML = (i + n).toString();
  }
}

function deepestChild() {
    return document.getElementById('grand-node').getElementsByTagName('div')[3]
}
