const body = document.querySelector('body')
const div = document.createElement('div');
const h1 = document.createElement('h1');
const p = document.createElement('p');
p.textContent = 'me too';
h1.textContent = 'hey i am in div';
h1.style.cssText = "color : blue;"
div.style.cssText = "background-color:pink; border-color: black;"
body.appendChild(div)
div.appendChild(h1)
div.appendChild(p)