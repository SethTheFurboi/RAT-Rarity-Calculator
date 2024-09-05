var formEl = $('#icon-form');
var nameInputEl = $('#icon-name');
var tweenInputEl = $('#tween-effect');
var gleamInputEl = $('#gleam-effect');
var IconsListEl = $('#icons-list');

function roundNumber(number, digits) {
    const multiple = Math.pow(10, digits);
    const roundedNum = Math.round(number * multiple) / multiple;
    return roundedNum;
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Asked ChatGPT to do this because I am lazy as heck -Kenshin

var baseIcons = [
	{ Name: "loln00b", Chance: 3.85 },
	{ Name: "Lizard Man", Chance: 3.85 },
	{ Name: "Angry Battle Grunt", Chance: 3.85 },
	{ Name: "Clown Emoji", Chance: 3.85 },
	{ Name: "Eye Guy", Chance: 3.85 },
	{ Name: "Nerd Emoji", Chance: 3.85 },
	{ Name: "Hat Guy", Chance: 3.85 },
	{ Name: "Egg", Chance: 3.85 },
	{ Name: "Doggo", Chance: 3.85 },
	{ Name: "Fallback", Chance: 3.45 },
	{ Name: "Texas (Red)", Chance: 2.57 },
	{ Name: "Funky Kenny", Chance: 1.92 },
	{ Name: "Texas (Blue)", Chance: 1.28 },
	{ Name: "Angry Battle Grunt (Green)", Chance: 0.385 },
	{ Name: "Clown Emoji (Green)", Chance: 0.385 },
	{ Name: "Non-Brand-Specific Puzzle Cubes (Yellow)", Chance: 0.32 },
	{ Name: "Non-Brand-Specific Puzzle Cubes (Orange)", Chance: 0.257 },
	{ Name: "Non-Brand-Specific Puzzle Cubes (Purple)", Chance: 0.257 },
	{ Name: "Non-Brand-Specific Puzzle Cubes (Cyan)", Chance: 0.224 },
	{ Name: "Non-Brand-Specific Puzzle Cubes (Blue)", Chance: 0.192 },
	{ Name: "Non-Brand-Specific Puzzle Cubes (Green)", Chance: 0.154 },
	{ Name: "Non-Brand-Specific Puzzle Cubes (Red)", Chance: 0.128 },
	{ Name: "BFDI Mouth", Chance: 2.63 },
	{ Name: "Very Angry Man", Chance: 2.19 },
	{ Name: "Canon Eye", Chance: 2.19 },
	{ Name: "😡 (Angry Face)", Chance: 1.75 },
	{ Name: "Stitch", Chance: 1.75 },
	{ Name: "His Name is Tax Forms", Chance: 1.75 },
	{ Name: "Slime", Chance: 1.75 },
	{ Name: "Birb", Chance: 1.75 },
	{ Name: "Kitten Combatant", Chance: 1.75 },
	{ Name: "Mousie", Chance: 1.75 },
	{ Name: "April", Chance: 1.75 },
	{ Name: "His Name is Tax Fraud", Chance: 1.75 },
	{ Name: "Reddit Smoo", Chance: 1.53 },
	{ Name: "Explosive Personality", Chance: 1.53 },
	{ Name: "Default PFP (Grey)", Chance: 1.1 },
	{ Name: "Default PFP (Green)", Chance: 0.548 },
	{ Name: "Default PFP (Blue)", Chance: 0.548 },
	{ Name: "Reddit Smoo (Blue)", Chance: 0.438 },
	{ Name: "Amogaloid (Yellow)", Chance: 0.07 },
	{ Name: "Amogaloid (Light Green)", Chance: 0.07 },
	{ Name: "Amogaloid (White)", Chance: 0.07 },
	{ Name: "Amogaloid (Green)", Chance: 0.07 },
	{ Name: "Amogaloid (Pink)", Chance: 0.07 },
	{ Name: "Amogaloid (Magenta)", Chance: 0.07 },
	{ Name: "Amogaloid (Scarlet)", Chance: 0.07 },
	{ Name: "Amogaloid (Blue)", Chance: 0.07 },
	{ Name: "Amogaloid (Light Blue)", Chance: 0.07 },
	{ Name: "Amogaloid (Luminous Red / Awesome Red)", Chance: 0.07 },
	{ Name: "Amogaloid (Purple)", Chance: 0.07 },
	{ Name: "Amogaloid (Orange)", Chance: 0.07 },
	{ Name: "CGA Virus", Chance: 0.844 },
	{ Name: "CGA Cat", Chance: 0.817 },
	{ Name: "The Tiniest RAT Icon Ever", Chance: 0.817 },
	{ Name: "If You Learn in the Game you Learn in Real Life", Chance: 0.681 },
	{ Name: "Cursed Emoji", Chance: 0.681 },
	{ Name: "Cyber Critter", Chance: 0.681 },
	{ Name: "TBH", Chance: 0.681 },
	{ Name: "Shade", Chance: 0.681 },
	{ Name: "Firey", Chance: 0.681 },
	{ Name: "Cookie Kitsune", Chance: 0.681 },
	{ Name: "Scrunkly", Chance: 0.681 },
	{ Name: "Leafy", Chance: 0.681 },
	{ Name: "Emotional Red Panda", Chance: 0.681 },
	{ Name: "Corrupted Girl", Chance: 0.681 },
	{ Name: "Kodak", Chance: 0.681 },
	{ Name: "Mr. Landlord", Chance: 0.681 },
	{ Name: "Evil Fennec", Chance: 0.599 },
	{ Name: "CGA Cat (Sky Blue)", Chance: 0.544 },
	{ Name: "Swirlbunny", Chance: 0.517 },
	{ Name: "Snailbot", Chance: 0.49 },
	{ Name: "Plumber Kenny (Red)", Chance: 0.381 },
	{ Name: "Plumber Kenny (Green)", Chance: 0.299 },
	{ Name: "CGA Virus (Sky Blue)", Chance: 0.218 },
	{ Name: "Snailbot (Light Green)", Chance: 0.218 },
	{ Name: "Cere (White)", Chance: 0.204 },
	{ Name: "Cere (Sky Blue)", Chance: 0.102 },
	{ Name: "Cere (Maroon)", Chance: 0.102 },
	{ Name: "Wattson", Chance: 0.364 },
	{ Name: "First Attempt", Chance: 0.364 },
	{ Name: "Gatchi", Chance: 0.364 },
	{ Name: "Weird Cat Thing", Chance: 0.364 },
	{ Name: "Andy", Chance: 0.364 },
	{ Name: "Kanae", Chance: 0.364 },
	{ Name: "\"", Chance: 0.364},
	{ Name: "Pancake Cat", Chance: 0.364 },
	{ Name: "The Teacher's Copy", Chance: 0.291 },
	{ Name: "Non-compliant CGA Virus", Chance: 0.291 },
	{ Name: "Prince of Darkness (Normal)", Chance: 0.291 },
	{ Name: "The Hasty Red Vulpes", Chance: 0.291 },
	{ Name: "Parkkeeper", Chance: 0.291 },
	{ Name: "Shih Tzu Secretary (Normal)", Chance: 0.208 },
	{ Name: "Shih Tzu Secretary (Pink)", Chance: 0.097 },
	{ Name: "Prince of Darkness (Magenta)", Chance: 0.073 },
	{ Name: "Just Cere (White)", Chance: 0.049 },
	{ Name: "Amogaloid (Black)", Chance: 0.039 },
	{ Name: "Just Cere (Sky Blue)", Chance: 0.024 },
	{ Name: "Just Cere (Maroon)", Chance: 0.024 },
	{ Name: "Cheddar Graphics Adapter Virus", Chance: 0.019 },
	{ Name: "Cheddar Smoo", Chance: 0.019 },
	{ Name: "Cheddar Graphics Adapter Cat", Chance: 0.019 },
	{ Name: "Cheddarmogaloid", Chance: 0.019 },
	{ Name: "Cheddar Secretary", Chance: 0.01 },
	{ Name: "Prince of Cheddar", Chance: 0.01 },
	{ Name: "Cheddarkeeper", Chance: 0.01 },
	{ Name: "Cheddar Pancakes", Chance: 0.01 },
	{ Name: "Energized Guy", Chance: 0.16},
    { Name: "Energized Doggo", Chance: 0.16},
    { Name: "Enerjogaloid", Chance: 0.08},
    { Name: "Nuclear Bomb", Chance: 0.08},
    { Name: "Energized Stitch", Chance: 0.08},
    { Name: "Energized April", Chance: 0.08},
    { Name: "Energized Slime", Chance: 0.08},
    { Name: "He Steals his Neighbor's Electricity", Chance: 0.08},
    { Name: "Energized Nerd Cube", Chance: 0.08},
    { Name: "Energized Dots", Chance: 0.04},
    { Name: "Energized Shade", Chance: 0.04},
    { Name: "Corrupted Energy", Chance: 0.04},
    { Name: "Energized Scrunkly", Chance: 0.04},
    { Name: "Energized Firey", Chance: 0.04},
    { Name: "Energized Landlord", Chance: 0.04},
    { Name: "Autism Energy", Chance: 0.04},
    { Name: "Energized Virus", Chance: 0.04},
    { Name: "Energized EEK!", Chance: 0.04},
    { Name: "Energized n' Tiny", Chance: 0.04},
    { Name: "Energized Cyber Critter", Chance: 0.04},
    { Name: "Energized Leafy", Chance: 0.04},
    { Name: "Energized Prince", Chance: 0.02},
    { Name: "Energized Thing", Chance: 0.02},
    { Name: "Energized \"", Chance: 0.02},
    { Name: "Energized Pancakes", Chance: 0.02},
    { Name: "Energized Red Vulpes", Chance: 0.02},
    { Name: "Energized Wattson", Chance: 0.02},
    { Name: "Energized Parkkeeper", Chance: 0.02},
    { Name: "Energized Gatchi", Chance: 0.02},
    { Name: "Energized Kanae", Chance: 0.02},
    { Name: "Energized Chester", Chance: 0.02},
    { Name: "Energized Secretary", Chance: 0.02},
    //Left this space for pride icons -Kenshin	
    { Name: "Heart Guy", Chance: 4.55},
	{ Name: "Lovely Heart Guy", Chance: 0.116},
	{ Name: "Lovely Doggo", Chance: 0.116},
	{ Name: "Lovely Stitch", Chance: 0.087},
	{ Name: "Lovely Sus", Chance: 0.058},
	{ Name: "Lovely Slime", Chance: 0.058},
	{ Name: "His Name is Divorce Papers", Chance: 0.029},
	{ Name: "Lovely Red Panda", Chance: 0.058},
	{ Name: "Lovely TBH", Chance: 0.058},
	{ Name: "Lovely Cookie", Chance: 0.058},
	{ Name: "Lovely Fennec", Chance: 0.058},
	{ Name: "Lovely Shade", Chance: 0.029},
	{ Name: "Lovely Gatchi", Chance: 0.058},
	{ Name: "Lovely Kanae", Chance: 0.058},
	{ Name: "Prince of Friendship", Chance: 0.029},
	{ Name: "Lovely Secretary", Chance: 0.029},
	{ Name: "Lovely Cat Thing", Chance: 0.029},
	{ Name: "Lovely Pancake Cat", Chance: 0.029}
]


var tweenEffects = [
	{ Name: "Shaking", Chance: 0.235 },
	{ Name: "Flipped", Chance: 0.176 },
	{ Name: "Tiny", Chance: 0.176 },
	{ Name: "Spinning", Chance: 0.118 },
	{ Name: "Flattened", Chance: 0.118 },
	{ Name: "Cartwheel", Chance: 0.059 },
	{ Name: "Breakdancing", Chance: 0.059 },
	{ Name: "Squishy Squashy", Chance: 0.059 }
]


var gleamEffects = [

  {Name: "Melting", Chance: 0.0025},
  {Name: "California Weather", Chance: 0.0025},
  {Name: "Tryhard", Chance: 0.002},
  {Name: "Pink Hearts", Chance: 0.005},
  {Name: "Blue Hearts", Chance: 0.005},
  {Name: "The Fool", Chance: 0.01}
	
]	

var rainbowChance = 0.391	

var printSkills = function (name, tween, gleam, isRainbow, rarity) {
  var listEl = $('<li>');
  var iconString = ((isRainbow == true ? "Rainbow " : "") + ((tween != null && tween + " ") || "") + ((gleam != null && gleam + " ") || "") + name + " (1 in " + numberWithCommas(roundNumber(rarity,2)) + ")")
  listEl.addClass('list-group-item').text(iconString);
  listEl.appendTo(IconsListEl);
};

var handleFormSubmit = function (event) {
  event.preventDefault();

  var nameInput = nameInputEl.val();
  var tweenInput = tweenInputEl.val()
  var gleamInput = gleamInputEl.val()
  var rainbowSelected = document.getElementById("rainbow-checkbox")

  console.log(rainbowSelected.checked)

  if (!nameInput) {
    alert('You need to put in an icon!');
    return;
  }


  var iconChance = 100
  var tweenChance = 99
  var gleamChance = 100
  var iconName = ""
  var tweenName = ""
  var gleamName = ""
 for (var i = 0; i < baseIcons.length + 1; i++) {

    var currThing = baseIcons[i]

   if (currThing) {
    
      if (currThing.Name.toLowerCase() == nameInput.toLowerCase()) {
        iconChance = currThing.Chance
        console.log(currThing)
        iconName = currThing.Name
        break
      } 
    }

  }
  
  if (iconName == "") {
    alert(`${nameInput} is not an icon! Check for any typos because this program is delicate.`);
    return;
  }

  for (var i = 0; i < tweenEffects.length + 1; i++) {

    var currThing = tweenEffects[i]

    if (currThing) {
      if (currThing.Name.toLowerCase() == tweenInput.toLowerCase()) {
        tweenChance = currThing.Chance
		tweenName = currThing.Name
        break
      }
    }

  }
  for (var i = 0; i < gleamEffects.length + 1; i++) {

    var currThing = gleamEffects[i]

    if (currThing) {
      if (currThing.Name.toLowerCase() == gleamInput.toLowerCase()) {
        gleamChance = currThing.Chance
		gleamName = currThing.Name
        break
      }
    }

  }
  // I forgot to switch the 1 / dang itttttttttttttt -Kenshin
  var calculated_rarity = 1 / ((iconChance / 100) * (tweenChance / 100) * (gleamChance / 100) * (rainbowSelected.checked == true ? rainbowChance : 100 - rainbowChance)  / 100)
  printSkills(iconName, tweenName, gleamName, rainbowSelected.checked, calculated_rarity);

  // resets form
  nameInputEl.val('')
  tweenInputEl.val('')
  gleamInputEl.val('');
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
})
$(function () {

	var tweenNames = [];
	
	for (var i = 0; i < tweenEffects.length + 1; i++) {
  
	  if (tweenEffects[i] != null) {
  
		tweenNames.push(tweenEffects[i].Name)
  
	  }
		
	}  
  
	console.log(tweenNames)
	
	$('#tween-effect').autocomplete({
	  source: tweenNames,
	});
  })
  $(function () {

	var gleamNames = [];
	
	for (var i = 0; i < gleamEffects.length + 1; i++) {
  
	  if (gleamEffects[i] != null) {
  
		gleamNames.push(gleamEffects[i].Name)
  
	  }
		
	}  
  
	console.log(gleamNames)
	
	$('#gleam-effect').autocomplete({
	  source: gleamNames,
	});
  })
