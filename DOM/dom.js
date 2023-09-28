//Examine Document Object
//console.dir(document);
 
// const items = document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor = 'purple';

// for(let i=0;i<items.length;i++){
//     items[i].style.fontWeight = 'bold';
//     items[i].style.color = 'brown';
// }

// const li = document.getElementsByTagName('li');
// li[4].style.color = 'purple';

// li[1].style.backgroundColor = 'green';

// li[2].style.color = 'purple';

// const all = document.querySelectorAll('li:nth-child(2)');
// all[0].style.color = 'green';

// const oddLi = document.querySelectorAll('li:nth-child(odd)');
// for(let i=0;i<oddLi.length;i++){
//     oddLi[i].style.backgroundColor = 'green';
// }

const itemList = document.querySelector('#items');

// itemList.parentNode.style.backgroundColor = 'teal';

// console.log(itemList.parentNode.parentNode);

console.log(itemList.parentElement);

itemList.parentElement.style.backgroundColor = 'grey';

itemList.lastElementChild.style.backgroundColor = 'green';

itemList.lastChild.textContent = 'lastChild';

itemList.firstElementChild.textContent = 'firstElementChild';

itemList.firstChild.textContent = 'firstChild';

itemList.nextSibling.textContent = 'nextSibling';

itemList.nextElementSibling.textContent = 'nextElementSibling';

itemList.previousSibling.textContent = 'previousSibling';

itemList.previousElementSibling.textContent = 'previousElementSibling';

const newDiv = document.createElement('div');

newDiv.className = 'newClass';

newDiv.setAttribute('title','newTitle');

const newDivText = document.createTextNode('Hello');

newDiv.appendChild(newDivText);

const headContainter = document.querySelector('header .container');
const h1 = document.querySelector('header h1');

headContainter.insertBefore(newDiv,h1);

const newDiv2 = document.createElement('div');

newDiv2.appendChild(newDivText);

const ulcontainer = document.querySelector('ul');

const li1 = document.querySelector('.list-group-item')

ulcontainer.insertBefore(newDiv2,li1);