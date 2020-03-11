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

// var colorList = [green: name]







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

