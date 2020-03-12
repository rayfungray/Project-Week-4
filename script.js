var body = document.body;
var addContainer = document.createElement('div');
addContainer.classList.add('container');
body.appendChild(addContainer);
addButton(addContainer,'red','red');
addButton(addContainer, 'blue', 'blue');
addButton(addContainer, 'green', 'green');


// var addColor = document.createElement('button');
// addColor.

var colorbtn = document.getElementsByClassName('color-btn');

for (var i = 0; i < colorbtn.length; i++)
{
  colorbtn[i].addEventListener('click',function(event){
    changeBKColor(body,event.target.value);
  })
}


var secContainer = document.createElement('div');
secContainer.classList.add('container');
body.appendChild(secContainer);

var addSelect = document.createElement('select');
secContainer.appendChild(addSelect);
addSelect.id = 'color-dropdown';







var colorList = 
[
{name : 'Please choose a color', hex:'#FFFFF'},
{name  : 'green', hex : 'green'},
{name  : 'red', hex : 'red'},
{name  : 'orange', hex : 'green'},
{name  : 'purple', hex : 'green'},
{name  : 'pink', hex : 'green'},
{name  : 'pink', hex : 'green'},
{name  : 'pink', hex : 'green'},
{name  : 'pink', hex : 'green'},
{name  : 'pink', hex : 'green'},
{name  : 'pink', hex : 'pink'},
{name  : 'pink', hex : 'pink'},
{name  : 'pink', hex : 'pink'},
{name  : 'pink', hex : 'pink'},
{name  : 'pink', hex : 'pink'},
{name  : 'pink', hex : 'pink'},
{name  : 'pink', hex : 'pink'},
{name  : 'pink', hex : 'pink'},
{name  : 'pink', hex : 'pink'},
{name  : 'pink', hex : 'pink'},
{name  : 'pink', hex : 'pink'}
];

console.log(colorList.length);

for ( var i = 0 ; i < colorList.length; i++)
{
  var addOption = document.createElement('option');
  addOption.text = colorList[i].name;
  addOption.value = colorList[i].hex;
  console.log(addOption);
  addSelect.add(addOption);
}


var addColorBtn = document.createElement('button');
addColorBtn.innerHTML = "Add Color";
addColorBtn.classList.add('add-color-btn');
secContainer.appendChild(addColorBtn);

addColorBtn.addEventListener('click',function(){

  var colorHex = addSelect.options[addSelect.selectedIndex].value;
  var colorName = addSelect.options[addSelect.selectedIndex].value;

  if(addSelect.selectedIndex === 0)
  {
    alert('Please select a color');
  }
  else
  {
    addButton(addContainer, colorName, colorHex);
  }  

});










function addButton(container, color, colorHex){
  var addBtn = document.createElement('button');
  addBtn.classList.add('color-btn');
  addBtn.innerHTML = color;
  addBtn.style.background = colorHex;
  addBtn.value = colorHex;
  container.appendChild(addBtn);  
}

function changeBKColor(background, color)
{
  background.style.backgroundColor = color;

}

