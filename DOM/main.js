// const form = document.getElementById('my-form');

// form.addEventListener('submit',storeDetails);

// function storeDetails(e){
    
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phone').value;

//     const userDetails = {
//         userName: name,
//         userEmail: email,
//         userPhone: phone
//     };

//     const userDetails_serialised = JSON.stringify(userDetails);

//     localStorage.setItem(email,userDetails_serialised);

//     const div = document.createElement('div');
//     const delBtn = document.createElement('button');
//     const editBtn = document.createElement('button');

//     div.setAttribute('id','extra');
//     delBtn.setAttribute('id','delBtn');
//     editBtn.setAttribute('id','edit');
//     delBtn.setAttribute('value','Delete');
//     delBtn.innerHTML = 'Delete';
//     editBtn.innerHTML = 'Edit'
//     delBtn.setAttribute('onclick','delUser()');
//     editBtn.setAttribute('onclick','editUser()');
//     div.appendChild(document.createTextNode(name));
//     div.appendChild(document.createTextNode(' - '));
//     div.appendChild(document.createTextNode(email));
//     div.appendChild(document.createTextNode(' - '));
//     div.appendChild(document.createTextNode(phone));
//     div.appendChild(delBtn);
//     div.appendChild(editBtn);

//     const ul = document.querySelector('ul');
//     const section = document.querySelector('.container');

//     section.insertBefore(div,ul);
    


    
// }

// function delUser(){
//     const div = document.getElementById('extra');
//     const section = document.querySelector('.container');
//     section.removeChild(div);

//     const email = document.getElementById('email').value;
//     console.log(email);
//     localStorage.removeItem(email);
// }
function saveLocal(event){
    event.preventDefault();
    const name = event.target.userName.value;
    const email = event.target.userEmail.value;
    const phone = event.target.userPhone.value;

    const userDetails = {
        name,
        email,
        phone
    };
    localStorage.setItem(userDetails.email,JSON.stringify(userDetails));
    showUser(userDetails);
}
function showUser(userDetails){
    const parent = document.getElementById('users');
    const child = document.createElement('li');
    child.textContent = userDetails.name + ' - ' + userDetails.email + ' - ' + userDetails.phone;
    const deleteBtn = document.createElement('input');
    const editBtn = document.createElement('input');

    editBtn.type = 'button';
    editBtn.value = 'Edit';
    editBtn.onclick = () => {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        name.value = userDetails.name;
        email.value = userDetails.email;
        phone.value = userDetails.phone;
        localStorage.removeItem(userDetails.email);
        parent.removeChild(child);
        
    }
    deleteBtn.type = 'button';
    deleteBtn.value = 'Delete';
    deleteBtn.onclick = () => {
        localStorage.removeItem(userDetails.email);
        parent.removeChild(child);
    }
    child.appendChild(editBtn);
    child.appendChild(deleteBtn);
    parent.appendChild(child);
}

