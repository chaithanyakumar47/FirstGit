const form = document.getElementById('my-form');

form.addEventListener('submit',storeDetails);

function storeDetails(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const userDetails = {
        userName: name,
        userEmail: email,
        userPhone: phone
    };

    const userDetails_serialised = JSON.stringify(userDetails);

    localStorage.setItem(email,userDetails_serialised);

    const div = document.createElement('div');
    const delBtn = document.createElement('button');

    div.setAttribute('id','extra');
    delBtn.setAttribute('id','delBtn');
    delBtn.setAttribute('value','Delete');
    delBtn.innerHTML = 'Delete';
    delBtn.setAttribute('onclick','delUser()');
    div.appendChild(document.createTextNode(name));
    div.appendChild(document.createTextNode(' - '));
    div.appendChild(document.createTextNode(email));
    div.appendChild(document.createTextNode(' - '));
    div.appendChild(document.createTextNode(phone));
    div.appendChild(delBtn);

    const ul = document.querySelector('ul');
    const section = document.querySelector('.container');

    section.insertBefore(div,ul);
    


    
}

function delUser(){
    const div = document.getElementById('extra');
    const section = document.querySelector('.container');
    section.removeChild(div);

    const email = document.getElementById('email').value;
    console.log(email);
    localStorage.removeItem(email);
}