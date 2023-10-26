
function saveLocal(event){
    event.preventDefault();
    const item_name = event.target.item_name.value;
    const descrip = event.target.descrip.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;

    const inventoryData = {
        item_name,
        descrip,
        price,
        quantity
    };
    axios
  .post('https://crudcrud.com/api/3a0b0f08455e40cf87c648fb0159d9a6/inventoryData',inventoryData)
  .then(res => showUser(res.data))
  .catch(err => console.error(err));
    //localStorage.setItem(expenseDetails.description,JSON.stringify(expenseDetails));
    //showUser(expenseDetails);
}
function showUser(inventoryData){
    const parent = document.getElementById('users');
    const child = document.createElement('li');
    child.textContent = inventoryData.item_name + ' - ' + inventoryData.descrip + ' - ' + inventoryData.price + ' - ' + inventoryData.quantity;
    const deleteBtn = document.createElement('input');
    const editBtn = document.createElement('input');
    const buyOne = document.createElement('input');
    const buyTwo =  document.createElement('input');
    const buyThree =  document.createElement('input');

    buyOne.type = 'button';
    buyOne.value = 'Buy 1'
    buyOne.setAttribute('class','btn btn-outline-primary')
    buyOne.onclick = () => {
        const id = inventoryData._id;
        url = 'https://crudcrud.com/api/3a0b0f08455e40cf87c648fb0159d9a6/inventoryData/' + id;

        const currentQuantity = inventoryData.quantity;
        const updatedQuantity = currentQuantity - 1;

        if (updatedQuantity < 5) {
            alert("Quantity is running low!");
            return;
        }

        const updatedData = {
            quantity: updatedQuantity
        };

        
        updatedData.item_name = inventoryData.item_name;
        updatedData.descrip = inventoryData.descrip;
        updatedData.price = inventoryData.price;

        axios
            .put(url, updatedData)
            .then((res) => {
                
            })
            .catch((err) => {
                console.error(err);
            });
    }


      buyTwo.type = 'button';
      buyTwo.value = 'Buy 2'
      buyTwo.setAttribute('class','btn btn-outline-primary')
      buyTwo.onclick = () => {
        const id = inventoryData._id;
        url = 'https://crudcrud.com/api/3a0b0f08455e40cf87c648fb0159d9a6/inventoryData/' + id;

        const currentQuantity = inventoryData.quantity;
        const updatedQuantity = currentQuantity - 2;

        if (updatedQuantity < 5) {
            alert("Quantity is running low!");
            return;
        }

        const updatedData = {
            quantity: updatedQuantity
        };

        
        updatedData.item_name = inventoryData.item_name;
        updatedData.descrip = inventoryData.descrip;
        updatedData.price = inventoryData.price;

        axios
            .put(url, updatedData)
            .then((res) => {
                
            })
            .catch((err) => {
                console.error(err);
            });
    }

        buyThree.type = 'button';
        buyThree.value = 'Buy 3'
        buyThree.setAttribute('class','btn btn-outline-primary')
        buyThree.onclick = () => {
            const id = inventoryData._id;
            url = 'https://crudcrud.com/api/3a0b0f08455e40cf87c648fb0159d9a6/inventoryData/' + id;
    
            const currentQuantity = inventoryData.quantity;
            const updatedQuantity = currentQuantity - 3;
    
            if (updatedQuantity < 5) {
                alert("Quantity is running low!");
                return;
            }
    
            const updatedData = {
                quantity: updatedQuantity
            };
    
            
            updatedData.item_name = inventoryData.item_name;
            updatedData.descrip = inventoryData.descrip;
            updatedData.price = inventoryData.price;
    
            axios
                .put(url, updatedData)
                .then((res) => {
                    
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    
    

    editBtn.type = 'button';
    editBtn.value = 'Edit';
    editBtn.setAttribute('class','btn btn-outline-primary');
    editBtn.onclick = () => {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        
        name.value = appointmentData.name;
        email.value = appointmentData.email;
        phone.value = appointmentData.phone;
        
        const id = appointmentData._id
        url = 'https://crudcrud.com/api/802ad1d687a14612bdfb306b1235eff3/appointmentData/' + id

        axios
        .delete(url)
        .then(res => console.log(res))
        .catch(err => console.error(err));
        //localStorage.removeItem(expenseDetails.description);
        parent.removeChild(child);
        
    }
    deleteBtn.type = 'button';
    deleteBtn.value = 'Delete';
    deleteBtn.setAttribute('class','btn btn-outline-danger');
    deleteBtn.onclick = () => {
        //localStorage.removeItem(expenseDetails.category);
        const id = inventoryData._id
        url = 'https://crudcrud.com/api/3a0b0f08455e40cf87c648fb0159d9a6/inventoryData/' + id
        axios
        .delete(url)
        .then(res => console.log(res))
        .catch(err => console.error(err));
        parent.removeChild(child);
    }
    //child.appendChild(editBtn);
    child.appendChild(deleteBtn);
    child.appendChild(buyOne);
    child.appendChild(buyTwo);
    child.appendChild(buyThree);
    parent.appendChild(child);
}

window.addEventListener("DOMContentLoaded", () => {
    axios
    .get('https://crudcrud.com/api/3a0b0f08455e40cf87c648fb0159d9a6/inventoryData')
    .then((res) => {
        for(var i=0; i<res.data.length; i++){
            showUser(res.data[i])
        }
    })
    .catch((error) => {
        console.log(error)
    })
})


// AXIOS INSTANCES


// const axiosInstance = axios
// .create({
//     baseURL : 'https://crudcrud.com/api/137ed24ef0f04754b21106bd0c378aeb'
//   });

//   axiosInstance.get('/appointmentData').then(res => {
//     for(data in res.data){
//         showUser(res.data[data])
//     }
//   })
