// ELEMENT SELECTORS


//Single Element Selector

//Console log a single element
const form = document.getElementById('my-form');
console.log(form);

console.log(document.querySelector('.container'));

console.log(document.querySelector('h1'));

// // Multiple Elements Selector
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// // For looping each items inside the list

// const items = document.querySelectorAll('.item');
// items.forEach((item) => {
//   console.log(item);
// });

// const ul = document.querySelector('.items');

// // ul.remove();
// // ul.lastElementChild.remove();
// // ul.firstElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Som';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';


const btn = document.querySelector('.btn');
btn.style.background = 'red';

// Events

// btn.addEventListener('click',function(e){
//   e.preventDefault();     // This will not submit and prevent the event listener from submitting.
//   // console.log('click');
//   // console.log(e);
//   // document.querySelector('#my-form').style.background = '#ccc';
//   // document.querySelector('body').classList.add('bg-dark');
//   // document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello123</h1>';

// });

// btn.addEventListener('mouseout',function(e){
//   e.preventDefault();     // This will not submit and prevent the event listener from submitting.
//   // console.log('click');
//   // console.log(e);
//   // document.querySelector('#my-form').style.background = '#ccc';
//   // document.querySelector('body').classList.add('bg-dark');
//   // document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello123</h1>';

// });


// Form Script

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
  e.preventDefault();

  // console.log(nameInput.value); // Whatever value will be displayed that you enter in the name field.

  if(nameInput.value === '' || emailInput.value === ''){
    msg.classList.add('error');
    msg.innerHTML = 'Please enter fields';
    setTimeout(() => msg.remove(), 5000); // this will remove the error message after 5 seconds
  }else{
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    // console.log('success');

    userList.appendChild(li);

    //Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}
