var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period';
var dinosaur = 'triceratops';
var dinosaurUpperCase = dinosaur.toUpperCase();
console.log(dinosaurUpperCase);
var textReplace = text.replace('Velociraptor', dinosaurUpperCase);
var partofText = textReplace.slice(0,72);
console.log(partofText);