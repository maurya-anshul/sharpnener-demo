/*var list=document.getElementsByClassName('list-group-item');
list[2].style.backgroundColor='green';
for(var i=0;i<list.length;i++){
    list[i].style.fontWeight='bold';
}
*/
//var li=document.getElementsByTagName('li');
//li[4].style.backgroundColor='yellow';
/* var item=document.querySelector('.list-group-item:nth-child(2)')
item.style.backgroundColor='green';
var items=document.querySelectorAll('.list-group-item');
items[1].style.color='green';
var odd=document.querySelectorAll('li:nth-child(odd)')
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green'
}

var items=document.querySelector('#items')
items.parentElement.style.backgroundColor='cyan';
items.children[1].style.backgroundColor='yellow';
console.log(items.lastChild)
items.firstElementChild.textContent='Hello 1'
items.lastElementChild.textContent='Hello 4'
console.log(items.firstChild)
console.log(items.nextSibling)
console.log(items.nextElementSibling)
console.log(items.previousSibling)
items.previousElementSibling.style.color='green'
var div=document.createElement('div');
div.className='Hello';
div.id='Hello1';
div.setAttribute('title','Hello div');
var text=document.createTextNode('Hello World');
div.append(text);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
div.style.fontSize='30px'
container.insertBefore(div,h1);
console.log(div);

var div=document.createElement('div');
div.className='Hello';
div.id='Hello2';
div.setAttribute('title','Hello div');
var text=document.createTextNode('Hello World');
div.append(text);
var container=document.querySelector('.list-group');
var h2=document.querySelector('.list-group-item');
container.insertBefore(div,h2);


var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var newItem2 = document.getElementById('description').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  itemList.appendChild(li);
  li.appendChild(document.createTextNode(newItem2));
  itemList.appendChild(li);

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

*/






// let submitbtn=document.getElementById('submit')
// let resetbtn=document.getElementById('reset')
// let form=document.getElementById('form')
// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
// });
// resetbtn.addEventListener('click', (e)=>{
//     let name=document.getElementById('name')
//     let email=document.getElementById('email')
//     name.value='';
//     email.value='';
// });

// submitbtn.addEventListener('click', (e)=>{
//     let name=document.getElementById('name')
//     let email=document.getElementById('email')
//     name=name.value;
//     email=email.value;
//     let user_record=new Array();
//     user_record=JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
//     user_record.push({
//         "name":name,
//         "email":email
//     })
//     localStorage.setItem('user', JSON.stringify(user_record));
// });
// function list(){
//   document.getElementById('main').innerHTML="user_record"+user_record;
// }

// function showData(){
//   let mainUl=document.getElementById('listOfUsers')
// }













let form=document.querySelector("form");
let main=document.querySelector(".main")
form.addEventListener("submit",(event)=>{
  let name=event.target.name.value;
  let email=event.target.email.value;
  let chekStatus=0;
  let userData=JSON.parse(localStorage.getItem("userDetails"))??[]
  for(let v of userData){
    if(v.email==email){
      chekStatus=1;
      break;
    }
  }
  if(chekStatus==1){
    alert("Email id already exist")
  }
  else{
  userData.push({
    'name':name,
    'email':email
  })
}
  localStorage.setItem("userDetails",JSON.stringify(userData));
  event.target.reset();
  displayData();
  event.preventDefault();
});


let displayData=()=>{
  let userData=JSON.parse(localStorage.getItem("userDetails"))??[]
  let finalData='';
  userData.forEach((element,i) => {
    finalData+=`<div class="item">
    <li>${element.name},${element.email}<button onclick='removeData(${i})'>Remove</button></li>
    </div>`
  });
  main.innerHTML=finalData;
}
let removeData=(index)=>{
  let userData=JSON.parse(localStorage.getItem("userDetails"))??[]
  userData.splice(index,1);
  localStorage.setItem("userDetails",JSON.stringify(userData));
  displayData();
}
displayData();