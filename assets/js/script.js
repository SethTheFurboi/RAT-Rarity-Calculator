var formEl = $('#icon-form');
var nameInputEl = $('#icon-name');
var tweenInputEl = $('#tween-effect');
var gleamInputEl = $('#gleam-effect');
var IconsListEl = $('#icons-list');
let prefix_option = document.getElementById('prefix')
let dark_mode = document.getElementById("dark_mode")

// The way you did it is weird Kenshin so imma do a cheesy fix -Seth

var isDarkmode = false
var shortenNumbers = false

function roundNumber(number, digits) {
    const multiple = Math.pow(10, digits);
    const roundedNum = Math.round(number * multiple) / multiple;
    return roundedNum;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function convertToPrefixedNumber(number) {
	const units = ["", "K", "M", "B", "T", "Qa", "Qn", "Sx", "Sp", "Oc", "No", "Dc", "UDc", "DDc", "TDc", "QaDc", "QnDc", "SxDc"];
	let unitIndex = 0;
	while (number >= 1000 && unitIndex < units.length - 1) {
	  number /= 1000;
	  unitIndex++;
	}
	return number.toFixed(2) + units[unitIndex];
  }

function openTab(evt, Name) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(Name).style.display = "block";
	evt.currentTarget.className += " active";
  }

function updatePagePreferences() {

	let pageSettings = JSON.parse(window.localStorage.getItem("Settings"))

	if (pageSettings == undefined) {
		pageSettings = {}
	}

	isDarkmode = pageSettings.darkMode | false
	shortenNumbers = pageSettings.shortenNumbers | false

	dark_mode.checked = isDarkmode
	prefix_option.checked = shortenNumbers


	let tab_color = document.getElementsByClassName("tab")
	let secret_text = document.getElementsByClassName("secret")
	let inverse_text = document.getElementsByClassName("inverse")
	// console.log(tab_color)
	if (isDarkmode == true){
		document.body.style.backgroundColor = '#3b3b3b'
		document.body.style.color = "#ffffff"
		tab_color[0].style.backgroundColor = "#666666"
		secret_text[0].style.color = "#666666"
		inverse_text[0].style.color = '#3b3b3b'
	}
	else {
		document.body.style.backgroundColor = "#ffffff"
		document.body.style.color = "#000000"
		tab_color[0].style.backgroundColor = "#f1f1f1"
		secret_text[0].style.color = "#f1f1f1"
		inverse_text[0].style.color = '#ffffff'
	}
	

}

updatePagePreferences()

dark_mode.addEventListener('change', function() {

	let pageSettings = JSON.parse(window.localStorage.getItem("Settings"))

	if (pageSettings == undefined) {
		pageSettings = {}
	}

	pageSettings.darkMode = dark_mode.checked

	localStorage.setItem('Settings', JSON.stringify(pageSettings));

	updatePagePreferences()
})

prefix_option.addEventListener('change', function() {

	let pageSettings = JSON.parse(window.localStorage.getItem("Settings"))

	if (pageSettings == undefined) {
		pageSettings = {}
	}

	pageSettings.shortenNumbers = prefix_option.checked

	localStorage.setItem('Settings', JSON.stringify(pageSettings));

})	

// Asked ChatGPT to do this section below because I am lazy as heck -Kenshin

var baseIcons = [

	// Base game icons

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

	// Weather event

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
	{ Name: "Ally Guy", Chance: 0.256},
	{ Name: "Gay Noob", Chance: 0.256},
	{ Name: "Gay Dog", Chance: 0.256},
	{ Name: "Gay Nerd", Chance: 0.256},
	{ Name: "Gaypril", Chance: 0.128},
	{ Name: "Genderfluid Mousie", Chance: 0.128},
	{ Name: "The Be-er of Gay and Do-er of Crime", Chance: 0.128},
	{ Name: "Gay Slime", Chance: 0.128},
	{ Name: "Trans Pride TBH", Chance: 0.064},
	{ Name: "MLM Pride Sterling", Chance: 0.064},
	{ Name: "Ace Pride Stitch", Chance: 0.064},
	{ Name: "trans pride cere", Chance: 0.064},
	{ Name: "Susmogaloid", Chance: 0.064},
	{ Name: "Lesbian Believer", Chance: 0.032},
	{ Name: "Enby Pride Cat", Chance: 0.032},
	{ Name: "Gay Landlord", Chance: 0.032},
	{ Name: "Pan Pride Secretary", Chance: 0.032},
	{ Name: "Gaykeeper", Chance: 0.032},
	{ Name: "Enby Pride Andy", Chance: 0.032},
	{ Name: "MLM Pride Kanae", Chance: 0.032},
	{ Name: "Genderfluid Gatchi", Chance: 0.032},
	{ Name: "Gay Spider", Chance: 0.032},
	{ Name: "Ace Pride Wattson", Chance: 0.032},
	{ Name: "Gay Robot", Chance: 0.032},
	{ Name: "Prince of Bi", Chance: 0.032},
	{ Name: "Just WOKE", Chance: 0.005},

	//2nd RAT! Anniversary Event Icons
	{Name: "Groovy Noob", Chance: 0.159},
    {Name: "Groovy Lizard Man", Chance: 0.159},
    {Name: "Groovy Texas", Chance: 0.159},
    {Name: "Groovy Gnome", Chance: 0.159},
    {Name: "Groovy Hat Guy", Chance: 0.159},
    {Name: "Groovy Doggo", Chance: 0.159},
    {Name: "Groovy Eye Guy", Chance: 0.159},
    {Name: "Groovy Birb", Chance: 0.079},
    {Name: "Groovy Slime", Chance: 0.079},
    {Name: "Groovy Tax Forms", Chance: 0.079},
    {Name: "Groovy April", Chance: 0.079},
    {Name: "Groovy Nerd Cube", Chance: 0.079},
    {Name: "Groovy Stitch", Chance: 0.079},
    {Name: "Groovaloid", Chance: 0.079},
    {Name: "Groovy Mum E. Rat", Chance: 0.079},
    {Name: "Groovy n' Tiny", Chance: 0.04},
    {Name: "Groovy Kodak", Chance: 0.04},
    {Name: "Groovy Sterling", Chance: 0.04},
    {Name: "GroovEEK!", Chance: 0.04},
    {Name: "Groovy Dots", Chance: 0.04},
    {Name: "Groovy Landlord", Chance: 0.04},
    {Name: "Groovy Shade", Chance: 0.04},
    {Name: "The Groovy Red Vulpes", Chance: 0.02},
    {Name: "Groovy Andy", Chance: 0.02},
    {Name: "Prince of The Groove", Chance: 0.02},
    {Name: "Groovy Cat Thing", Chance: 0.02},
    {Name: "Groovy Pancake Cat", Chance: 0.02},
    {Name: "Groovy Spider Girl", Chance: 0.02},
    {Name: "Groovekeeper", Chance: 0.02},
    {Name: "Groovy Chester", Chance: 0.02},
    {Name: "The One True Rambley", Chance: 0.02},

	//Doodle Takeover
	    {Name: "Nerd Emoji (Doodle)", Chance: 8.33},
    {Name: "Bald Guy", Chance: 8.33},
    {Name: "Awesome Axolotl", Chance: 2.82},
    {Name: "Doodle Stitch", Chance: 2.82},
    {Name: "Doodle Slime", Chance: 2.82},
    {Name: "Doodle Tax Fraud", Chance: 2.82},
    {Name: "Doodle Mousie", Chance: 2.82},
    {Name: "Doodle Shade", Chance: 1.83},
    {Name: "Doodle Gatchi", Chance: 0.502},
    {Name: "Doodle Kanae", Chance: 0.502},
    {Name: "Doodlemint", Chance: 0.502},
    {Name: "Doodle Pancake Cat", Chance: 0.502},
    {Name: "Doodle Prince of Darkness", Chance: 0.502},

	//Spring Spirit Icons
	    {Name: "Spring Spirit Hat Guy", Chance: 0.066},
    {Name: "Spring Spirit Doggo", Chance: 0.066},
    {Name: "Spring Spirit Noob", Chance: 0.066},
    {Name: "Spring Spirit Slime", Chance: 0.033},
    {Name: "Spring Spirit Stitch", Chance: 0.033},
    {Name: "Spring Spirit Mousie", Chance: 0.022},
    {Name: "Spring Break is Not Over Get Back To Class", Chance: 0.022},
    {Name: "Spring Spirit Shade", Chance: 0.022},
    {Name: "Spring Spirit TBH", Chance: 0.022},
    {Name: "Spring Spirit Cookie", Chance: 0.022},
    {Name: "Prince of Spring", Chance: 0.011},
    {Name: "Spring Thing", Chance: 0.011},
    {Name: "Spring Spirit Pancakes", Chance: 0.011},
    {Name: "Spring Spirit Secretary", Chance: 0.011},
    {Name: "Spring Believer", Chance: 0.011},

	// Valentines
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
	{ Name: "Lovely Pancake Cat", Chance: 0.029},

	// Christmas
	{ Name: "Can you believe it? (Green)", Chance: 0.083},
	{ Name: "Can you believe it? (Brown)", Chance: 0.083},
	{ Name: "Candle Slime", Chance: 0.1},
	{ Name: "His Name is Arson", Chance: 0.067},
	{ Name: "Prince of Christmas Past", Chance: 0.033},
	{ Name: "She is going to melt herself", Chance: 0.033},
	{ Name: "Just a week away!", Chance: 0.033},
	{ Name: "Merrier EEK!", Chance: 0.033},
	{ Name: "Candle Pancake Cat", Chance: 0.033},
	{ Name: "Christmas Past", Chance: 0.033},

	// Halloween
	{ Name: "Zombie Kenny", Chance: 4.55},
	{ Name: "Mum E. Rat", Chance: 2.13},
	{ Name: "Which Shade is Witch", Chance: 0.68},
	{ Name: "EEK!", Chance: 0.68},
	{ Name: "Pumpkrat", Chance: 0.68},
	{ Name: "Masked Hat Guy", Chance: 0.68},
	{ Name: "Some Kind of Spider Girl (Lightsteelblue)", Chance: 0.19},
	{ Name: "Some Kind of Spider Girl (Indian Red)", Chance: 0.13},
	{ Name: "Ghostly Tax Fraud", Chance: 0.19},
	{ Name: "Ghostly Slime", Chance: 0.19},
	{ Name: "Eekier EEK!", Chance: 0.19},
	{ Name: "Ghostly Stitch", Chance: 0.13},
	{ Name: "Ghostly Shade", Chance: 0.13},
	{ Name: "Spookmogaloid", Chance: 0.13},
	{ Name: "Ghostly Pancake Cat", Chance: 0.06},
	{ Name: "Ghostly Cat Thing", Chance: 0.06},
	{ Name: "Ghostly Kenny", Chance: 0.06},
	{ Name: "Ghostly Secretary", Chance: 0.06},
	{ Name: "Ghostly Spider Girl", Chance: 0.06},
	{ Name: "Ghostly Prince of Darkness", Chance: 0.06},
	{ Name: "Witchy Witch Which Witch Which (Shade)", Chance: 0.03},
	{ Name: "Pumpkrat King", Chance: 0.03},
	{ Name: "Phantom of the Swag", Chance: 0.03},
	{ Name: "Eekiest EEK!", Chance: 0.03},
	{ Name: "The Pharaoh's Curse", Chance: 0.03},
	{ Name: "Mutant Kenny", Chance: 0.03},

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

// Changed hearts, fool and tryhard chances to the chances they actually were due to a bug according to candyfloss -Seth

var gleamEffects = [

  {Name: "Melting", Chance: 0.25},
  {Name: "Snowy", Chance: 0.25},
  {Name: "Christmas Haze", Chance: 0.25},
  {Name: "California Weather", Chance: 0.25},
  {Name: "Tryhard", Chance: 0.25},
  {Name: "Confetti", Chance: 0.25},
  {Name: "Pink Hearts", Chance: 0.25},
  {Name: "Blue Hearts", Chance: 0.25},
  {Name: "The Fool", Chance: 0.5}
	
]	

var rainbowChance = 0.391	

var printSkills = function (name, tween, gleam, isRainbow, rarity) {
  var listEl = $('<li>');
  var iconString = ((isRainbow == true ? "Rainbow " : "") + ((tween != null && tween + " ") || "") + ((gleam != null && gleam + " ") || "") + name + " (1 in " + (prefix_option.checked == true ? convertToPrefixedNumber(roundNumber(rarity,2)) : numberWithCommas(roundNumber(rarity,2))) + ")")
  listEl.addClass('list-group-item').text(iconString);
  listEl.appendTo(IconsListEl);
};

var handleFormSubmit = function (event) {
  event.preventDefault();

  var nameInput = nameInputEl.val();
  var tweenInput = tweenInputEl.val()
  var gleamInput = gleamInputEl.val()
  var rainbowSelected = document.getElementById("rainbow-checkbox")

//   console.log(rainbowSelected.checked)

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
        // console.log(currThing)
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

  // :3 (Please don't remove this it's funni -Seth)
  console.log("Prism was here.")

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

//   console.log(iconNames)
  
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
  
	// console.log(tweenNames)
	
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
  
	// console.log(gleamNames)
	
	$('#gleam-effect').autocomplete({
	  source: gleamNames,
	});
  })
