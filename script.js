var body = document.body;
var addContainer = document.createElement('div');
addContainer.classList.add('container');
body.appendChild(addContainer);
addButton(addContainer,'red','red');
addButton(addContainer, 'blue', 'blue');
addButton(addContainer, 'green', 'green');

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
{ name: 'chartreuse', hex: 'chartreuse'},
{name  : 'aqua', hex : 'aqua'},
{name  : 'orange', hex : 'orange'},
{name  : 'darkmagenta', hex: 'darkmagenta'},
{name  : 'crimson', hex : 'crimson'},
{name  : 'darkorange', hex: 'darkorange'},
{name  : 'darksalmon', hex : 'darksalmon'},
{name  : 'deeppink', hex : 'deeppink'},
{name  : 'dimgray', hex : 'dimgray'},
{name  : 'fuchsia', hex : 'fuchsia'},
{name  : 'gold', hex : 'gold'},
{name  : 'greenyellow', hex : 'greenyellow'},
{name  : 'goldenrod', hex : 'goldenrod'},
{name  : 'gray', hex : 'gray'},
{name  : 'lime', hex : 'lime'},
{name  : 'peachpuff', hex : 'peachpuff'},
{name  : 'yellowgreen', hex : 'yellowgreen'},
{name  : 'violet', hex : 'violet'},
{name  : 'tomato', hex : 'tomato'},
{name  : 'plum', hex : 'plum'}
];

// console.log(colorList.length);

for ( var i = 0 ; i < colorList.length; i++)
{
  var addOption = document.createElement('option');
  addOption.text = colorList[i].name;
  addOption.value = colorList[i].hex;
  // console.log(addOption);
  addSelect.add(addOption);
}

var addColorBtn = document.createElement('button');
addColorBtn.innerHTML = "Add Color";
addColorBtn.classList.add('add-color-btn');
secContainer.appendChild(addColorBtn);

addColorBtn.addEventListener('click',function(){

  var colorHex = addSelect.options[addSelect.selectedIndex].value;
  var colorName = addSelect.options[addSelect.selectedIndex].text;

  if(addSelect.selectedIndex === 0)
  {
    alert('Please select a color');
  }
  else
  {
    addButton(addContainer, colorName, colorHex);
    addSelect.remove(addSelect.selectedIndex);
  }  

for (var i = 0; i < colorbtn.length; i++)
{
  console.log(colorbtn[i]);
    colorbtn[i].addEventListener('click',function(event){
    changeBKColor(body,event.target.value);
  })
}
console.log("clicked button");
});



var thirdContainer = document.createElement('div');
thirdContainer.classList.add('container');
body.appendChild(thirdContainer);

var removeColorBtn = document.createElement('button');
removeColorBtn.innerHTML = 'remove current';
removeColorBtn.classList.add('remove-color');
thirdContainer.appendChild(removeColorBtn);
removeColorBtn.addEventListener('click', function (){

  var bkColor = body.style.backgroundColor;
  
  for (var i = 0; i < colorbtn.length; i++)
  {
    // console.log(colorbtn[i]);
    console.log(colorbtn[i].value);
    if (colorbtn[i].value == bkColor)
    {
      addContainer.removeChild(colorbtn[i]);

    }
    // }else   
    // {
    //   alert ('Please press the color button');
    // }
  }
    body.style.backgroundColor = 'white';
  

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

