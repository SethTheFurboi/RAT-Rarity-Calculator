var formEl = $('#icon-form');
var nameInputEl = $('#icon-name');
var tweenInputEl = $('#tween-effect');
var gleamInputEl = $('#gleam-effect');
var IconsListEl = $('#icons-list');
var rainbowCheckBox = document.getElementById("rainbow-checkbox")

var baseIcons = [
	
	{Name: "The Gnome", Chance: 3.85}
	
]

var tweenEffects = [
	
	{Name: "Shaking", Chance: 0.325}
	
]

var gleamEffects = {
	
}	

var rainbowChance = 0.391	

var printRarity = function (name, tween, gleam, isRainbow, rarity) {
  var listEl = $('<li>');

  var rainbowText = ""
  if (isRainbow) {
    rainbowText = "Rainbow "
  }

  var iconString = (rainbowText + ((tween != null && tween + " ") || "") + ((gleam != null && gleam + " ") || "") + name + " (1/" + rarity + ")") 
  
  listEl.addClass('list-group-item').text(iconString);
  listEl.appendTo(IconsListEl);
};

var handleFormSubmit = function (event) {
  event.preventDefault();

  var nameInput = nameInputEl.val();
  var tweenInput = tweenInputEl.val()
  var gleamInput = gleamInputEl.val()

  if (!nameInput) {
    console.log('You need to put in an icon!');
    return;
  }

  var iconChance = 100
  var tweenChance = 100
  // Gleams are not added yet so ye
  var gleamChance = 100

  var rainbowSelected = rainbowCheckBox.checked

  console.log(rainbowSelected + " Rainbow")

  // This is so messy but I'm lazy -Seth

  for (var i = 0; i < baseIcons.length + 1; i++) {

    var currThing = baseIcons[i]

    if (currThing) {
      if (currThing.Name == nameInput) {
        iconChance = currThing.Chance
        break
      } 
    }

  }
  
  if (iconChance == 100) {
    console.log('You need to put in an icon!');
    return;
  }

  for (var i = 0; i < tweenEffects.length + 1; i++) {

    var currThing = tweenEffects[i]

    if (currThing) {
      if (currThing.Name == tweenInput) {
        tweenChance = currThing.Chance
        break
      }
    }

  }

  var actualRainbowChance = 1

  if (rainbowSelected) {
    actualRainbowChance = (rainbowChance/100)
  }
  

  var calChance = Math.round( (1/(iconChance/100)) * (1/(tweenChance/100)) * (1/(gleamChance/100)) * (1/actualRainbowChance) ) 
  // var calChance =  1/((iconChance / 100) * (tweenChance / 100) * (gleamChance / 100) * actualRainbowChance)

  printRarity(nameInput, tweenInput, gleamInput, rainbowSelected, calChance);

  // resets form
  nameInputEl.val('');
  tweenInputEl.val('');
  gleamInputEl.val('');
};

formEl.on('submit', handleFormSubmit);

// Icon Autocomplete
$(function () {

  var iconNames = [];
  
  for (var i = 0; i < baseIcons.length + 1; i++) {

    if (baseIcons[i] != null) {

      iconNames.push(baseIcons[i].Name)

    }
	  
  }  

  console.log(iconNames)
  
  $('#icon-name').autocomplete({
    source: iconNames,
  });
});
