// ELEMENT SELECTORS


//Single Element Selector

//Console log a single element
const form = document.getElementById('my-form');
console.log(form);

console.log(document.querySelector('.container'));

console.log(document.querySelector('h1'));

// Multiple Elements Selector
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

// For looping each items inside the list

const items = document.querySelectorAll('.item');
items.forEach((item) => {
  console.log(item);
});

const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Som';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';


const btn = document.querySelector('.btn');
btn.style.background = 'red';

