const body = document.querySelector('body')
const div = document.createElement('div');
const h3 = document.createElement('h3');
h3.textContent = 'hey i am blue';
h3.style.cssText = "color : blue;"
body.appendChild(div)
div.appendChild(h3)