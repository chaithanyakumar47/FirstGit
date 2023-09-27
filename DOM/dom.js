//Examine Document Object
//console.dir(document);

let title = document.getElementById('header-title');
title.innerText = 'Hacked';

title.style.borderBottom = "solid 3px #000";

let containerTitle = document.querySelector('h2');
containerTitle.style.fontWeight='bold';
containerTitle.style.color = 'green';