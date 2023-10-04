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
    const amount = event.target.expense.value;
    const description = event.target.description.value;
    const category = event.target.category.value;

    const expenseDetails = {
        amount,
        description,
        category
    };
    localStorage.setItem(expenseDetails.category,JSON.stringify(expenseDetails));
    showUser(expenseDetails);
}
function showUser(expenseDetails){
    const parent = document.getElementById('users');
    const child = document.createElement('li');
    child.textContent = expenseDetails.amount + ' - ' + expenseDetails.description + ' - ' + expenseDetails.category;
    const deleteBtn = document.createElement('input');
    const editBtn = document.createElement('input');

    editBtn.type = 'button';
    editBtn.value = 'Edit Expense';
    editBtn.setAttribute('class','btn btn-outline-primary');
    editBtn.onclick = () => {
        const expense = document.getElementById('expense');
        const description = document.getElementById('description');
        const category = document.getElementById('category');
        
        expense.value = expenseDetails.amount;
        description.value = expenseDetails.description;
        category.value = expenseDetails.category;
        localStorage.removeItem(expenseDetails.category);
        parent.removeChild(child);
        
    }
    deleteBtn.type = 'button';
    deleteBtn.value = 'Delete Expense';
    deleteBtn.setAttribute('class','btn btn-outline-danger');
    deleteBtn.onclick = () => {
        localStorage.removeItem(expenseDetails.category);
        parent.removeChild(child);
    }
    child.appendChild(editBtn);
    child.appendChild(deleteBtn);
    parent.appendChild(child);
}

