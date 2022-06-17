const body = document.querySelector('body')
const div = document.createElement('div');
const p = document.createElement('p');
p.textContent = 'hey i am red';
p.style.cssText = "color : red;"
body.appendChild(div)
div.appendChild(p)