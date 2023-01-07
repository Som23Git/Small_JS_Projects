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



