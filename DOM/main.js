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

    localStorage.setItem('userDetails',userDetails_serialised);

    const div = document.createElement('div');
    div.setAttribute('id','extra');
    div.appendChild(document.createTextNode(name));
    div.appendChild(document.createTextNode(' - '));
    div.appendChild(document.createTextNode(email));
    div.appendChild(document.createTextNode(' - '));
    div.appendChild(document.createTextNode(phone));

    const ul = document.querySelector('ul');
    const section = document.querySelector('.container');

    section.insertBefore(div,ul);
    console.log(userDetails.userEmail.value)


    
}

