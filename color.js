var colorList =
  [
    { name: 'Please choose a color', hex: '#FFFFF' },
    { name: 'chartreuse', hex: 'chartreuse' },
    { name: 'aqua', hex: 'aqua' },
    { name: 'orange', hex: 'orange' },
    { name: 'darkmagenta', hex: 'darkmagenta' },
    { name: 'crimson', hex: 'crimson' },
    { name: 'darkorange', hex: 'darkorange' },
    { name: 'darksalmon', hex: 'darksalmon' },
    { name: 'deeppink', hex: 'deeppink' },
    { name: 'dimgray', hex: 'dimgray' },
    { name: 'fuchsia', hex: 'fuchsia' },
    { name: 'gold', hex: 'gold' },
    { name: 'greenyellow', hex: 'greenyellow' },
    { name: 'goldenrod', hex: 'goldenrod' },
    { name: 'gray', hex: 'gray' },
    { name: 'lime', hex: 'lime' },
    { name: 'peachpuff', hex: 'peachpuff' },
    { name: 'yellowgreen', hex: 'yellowgreen' },
    { name: 'violet', hex: 'violet' },
    { name: 'tomato', hex: 'tomato' },
    { name: 'plum', hex: 'plum' }
  ];




function removeColorOption(color){

  var option = $('#color-options > option[value="'+ color + '"]');

  option.remove();
}