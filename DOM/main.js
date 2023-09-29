const form = document.getElementById('my-form');

form.addEventListener('submit',storeDetails);

function storeDetails(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    localStorage.setItem('Name',name);
    localStorage.setItem('Email',email);
}
