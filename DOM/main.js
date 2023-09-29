const form = document.getElementById('my-form');

form.addEventListener('submit',storeDetails);

function storeDetails(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const userDetails = {
        userName: name,
        userEmail: email
    };

    const userDetails_serialised = JSON.stringify(userDetails);

    localStorage.setItem('userDetails',userDetails_serialised);
    
}
