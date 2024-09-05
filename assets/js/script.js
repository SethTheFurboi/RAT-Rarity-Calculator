var formEl = $('#icon-form');
var nameInputEl = $('#icon-name');
var IconsListEl = $('#icons-list');

var baseIcons = {
	
	[“The Gnome”] = {Name = "The Gnome", Chance = 3.85}
	
}

var tweenEffects = {
	
	[“Shaking”] = {Name = "Shaking", Chance = 0.325}
	
}

var gleamEffects = {
	
}	

var rainbowChance = 100	

var printSkills = function (name, tween, israinbow, percent, fractionrarity) {
  var listEl = $('<li>');
  //var listDetail = name.concat(' on ', date);
  listEl.addClass('list-group-item').text(`{israinbow ~= nil and "Rainbow"}{tween or ""}{name} (1/percent) (1/fractionrarity)`);
  listEl.appendTo(IconsListEl);
};

var handleFormSubmit = function (event) {
  event.preventDefault();

  var nameInput = nameInputEl.val();

  if (!nameInput) {
    console.log('You need to fill out the form!');
    return;
  }

  //printSkills(nameInput, dateInput);

  // resets form
  nameInputEl.val('');
};

formEl.on('submit', handleFormSubmit);

// This is so messy but I'm lazy -Seth

// Icon Autocomplete
$(function () {
  var iconNames = [
  ];
  
  for (var i = 0; i < baseIcons.length + 1; i++) {
	  
	  iconNames.push(baseIcons[i].Name)
	  
  }  
  
  $('#skill-name').autocomplete({
    source: skillNames,
  });
});
