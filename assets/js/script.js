var formEl = $('#icon-form');
var nameInputEl = $('#icon-name');
var tweenInputEl = $('#tween-effect');
var gleamInputEl = $('#gleam-effect');
var IconsListEl = $('#icons-list');

var baseIcons = [
	
	{Name: "The Gnome", Chance: 3.85}
	
]

var tweenEffects = [
	
	{Name: "Shaking", Chance: 0.325}
	
]

var gleamEffects = {
	
}	

var rainbowChance = 0.391	

var printSkills = function (name, tween, israinbow, rarity) {
  var listEl = $('<li>');
  //var listDetail = name.concat(' on ', date);
  listEl.addClass('list-group-item').text(`{israinbow ~= nil and "Rainbow"}{tween or ""}{name} (1/rarity)`);
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

  var iconChance = 1
  var tweenChance = 1
  var gleamChance = 1

  //printSkills(nameInput, dateInput);

  // resets form
  nameInputEl.val('');
};

formEl.on('submit', handleFormSubmit);

// This is so messy but I'm lazy -Seth

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
