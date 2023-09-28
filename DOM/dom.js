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

const all = document.querySelectorAll('li:nth-child(2)');
all[0].style.color = 'green';

const oddLi = document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<oddLi.length;i++){
    oddLi[i].style.backgroundColor = 'green';
}

