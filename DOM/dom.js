//Examine Document Object
//console.dir(document);
 
const items = document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor = 'green';

for(let i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold';
    items[i].style.color = 'brown';
}

const li = document.getElementsByTagName('li');
li[4].style.color = 'purple';

