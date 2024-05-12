let category = document.getElementById('cat');
// console.log(category)
let desc = document.getElementById('desc');
let amount = document.getElementById('amount');

let add = document.getElementById('add');
let table = document.getElementById('tbl');

add.addEventListener('click',addExpense);

function addExpense(){
    if(category.value){
        table.innerHTML += `<tr>
    <td>${desc.value}</td>
    <td>${category.value}</td>
    <td>${amount.value}</td>
    </tr>`
    }

    else{
        alert('Category not selected');
    }


}