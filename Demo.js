/*var list=document.getElementsByClassName('list-group-item');
list[2].style.backgroundColor='green';
for(var i=0;i<list.length;i++){
    list[i].style.fontWeight='bold';
}
*/
//var li=document.getElementsByTagName('li');
//li[4].style.backgroundColor='yellow';
var item=document.querySelector('.list-group-item:nth-child(2)')
item.style.backgroundColor='green';
var items=document.querySelectorAll('.list-group-item');
items[1].style.color='green';
var odd=document.querySelectorAll('li:nth-child(odd)')
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green'
}