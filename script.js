var body = document.body;
var firstContainer = document.createElement('div');
firstContainer.classList.add('container');
body.appendChild(firstContainer);
createBbtn(firstContainer,'red','red');
createBbtn(firstContainer, 'yellow', 'yellow');
createBbtn(firstContainer, 'green', 'green');

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

for ( var i = 0 ; i < colorList.length; i++)
{
  createColorOption(colorList[i].name, colorList[i].hex);
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
    createBbtn(firstContainer, colorName, colorHex);
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
    if (colorbtn[i].value == bkColor)
    {
      createColorOption(colorbtn[i].value, colorbtn[i].value);
      firstContainer.removeChild(colorbtn[i]);
      
    }
  }
    body.style.backgroundColor = 'white';
});

function createBbtn(container, color, colorHex){
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

function createColorOption(name , color){
  var addOption = document.createElement('option');
  addOption.text = name;
  addOption.value = color;
  addSelect.add(addOption);
}

