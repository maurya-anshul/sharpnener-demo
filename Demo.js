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
*/
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