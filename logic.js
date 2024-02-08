// Retrieving Data From Local Storage
window.addEventListener('DOMContentLoaded', function () {
    // Load existing data from local storage on page load
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            const storedData = JSON.parse(localStorage.getItem(key));
            if (storedData) {
                showExpenseAmount(storedData);
            }
            else{
                console.log('Error.......')
            }
        }
    }
});


function saveToLocalStorage(event){
        event.preventDefault();

        const expenseamount=event.target.expenseamount.value;
        const description=event.target.description.value;
        const category=event.target.category.value;

        const obj={
            expenseamount,
            description,
            category

        }

        // save to the local storage
        localStorage.setItem(obj.expenseamount, JSON.stringify(obj));
        showExpenseAmount(obj)

    }

    
    function showExpenseAmount(obj){
        const parentele= document.getElementById('expense-item');
        const childele=document.createElement('li');
        childele.textContent= obj.expenseamount + '-' + obj.description + '-' + obj.category;

        

        // create edit button
        let editbutton=document.createElement('button')
        editbutton.textContent='Edit-Expense'

        // create delete button
        let deletebutton=document.createElement('button');
        deletebutton.textContent='Delete-Expense'

        // delete expense from screen as well as local storage
        deletebutton.onclick=()=>{
            parentele.removeChild(childele);
            localStorage.removeItem(obj.expenseamount);
        }

         //edit user details
         editbutton.onclick=()=>{
            localStorage.removeItem(obj.expenseamount)
            parentele.removeChild(childele)
            document.getElementById('expenseamount').value=obj.expenseamount
            document.getElementById('description').value=obj.description
            document.getElementById('category').value=obj.category

        }

        childele.append(editbutton);
        childele.append(deletebutton)
        parentele.appendChild(childele);

    }

