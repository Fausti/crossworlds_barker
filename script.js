var indexNames = [
  "LP - Schub",
  "Angriffsschub",
  "Verteidigungsschub",
  "Feuerrakete",
  "Froststurm",
  "Greifdornen",
  "Meteorschlag",
  "Wasserbombe",
  "Blättertanz",
  "Dunkler Ballon",
  "Lichtkugel",
  "Sternregen",
  "Lichtsturm"
];

var indexColors = [
  "gray",
  "gray",
  "gray",
  "red",
  "blue",
  "green",
  "red",
  "blue",
  "green",
  "gm",
  "yellow",
  "gm",
  "yellow"
];

var cookingNames = [
  "Eier",
  "Fisch",
  "Obst und Gemüse",
  "Pilze",
  "Getreide",
  "Fleisch",
  "Milch",
  "Gewürze"
];

var indexCooking = -1;

var indexTier1 = -1;
var indexTier2 = -1;
var indexTier3 = -1;

function generateChat() {
  var chatBox = document.getElementById("chat-output");
  
  var tier1 = document.getElementById("tier-1");
  var tier2 = document.getElementById("tier-2");
  var tier3 = document.getElementById("tier-3");

  if (tier1.selectedIndex < 0 || tier2.selectedIndex < 0 || tier3.selectedIndex < 0) return;

  var chat = "NICHT im Shop: ";

  tier1Color = indexColors[tier1.selectedIndex];
  tier2Color = indexColors[tier2.selectedIndex];
  tier3Color = indexColors[tier3.selectedIndex];

  chat = chat + "<" + tier1Color + ">" + tier1.options[tier1.selectedIndex].text + "</>, ";
  chat = chat + "<" + tier2Color + ">" + tier2.options[tier2.selectedIndex].text + "</>, ";
  chat = chat + "<" + tier3Color + ">" + tier3.options[tier3.selectedIndex].text + "</>.";

  chatBox.textContent = chat;
  chatBox.select();
  document.execCommand("copy");
}

function switch_tier_1(elem, index) {
  var x = document.getElementsByClassName("tier-1 active");
  
  var isActive = false;
  var y = elem.getElementsByClassName("tier-1")[0];
  if (y.className.indexOf("active") > -1) {
    isActive = true;
  }

  for (btn of x) {
    if (btn.className.indexOf("active") > -1) {
      btn.className = btn.className.replace(" active", "");
    }
  }

  if (isActive) {
    indexTier1 = -1;
  } else {
    y.className += " active";
    indexTier1 = index;
  }

  generateChat();
}

function switch_tier_2(elem, index) {
  var x = document.getElementsByClassName("tier-2 active");
  
  var isActive = false;
  var y = elem.getElementsByClassName("tier-2")[0];
  if (y.className.indexOf("active") > -1) {
    isActive = true;
  }

  for (btn of x) {
    if (btn.className.indexOf("active") > -1) {
      btn.className = btn.className.replace(" active", "");
    }
  }

  if (isActive) {
    indexTier2 = -1;
  } else {
    y.className += " active";
    indexTier2 = index;
  }

  generateChat();
}

function switch_tier_3(elem, index) {
  var x = document.getElementsByClassName("tier-3 active");
  
  var isActive = false;
  var y = elem.getElementsByClassName("tier-3")[0];
  if (y.className.indexOf("active") > -1) {
    isActive = true;
  }

  for (btn of x) {
    if (btn.className.indexOf("active") > -1) {
      btn.className = btn.className.replace(" active", "");
    }
  }

  if (isActive) {
    indexTier3 = -1;
  } else {
    y.className += " active";
    indexTier3 = index;
  }

  generateChat();
}

function switch_cooking(elem, index) {
  var x = document.getElementsByClassName("cooking active");
  
  var isActive = false;
  var y = elem.getElementsByClassName("cooking")[0];
  if (y.className.indexOf("active") > -1) {
    isActive = true;
  }

  for (btn of x) {
    if (btn.className.indexOf("active") > -1) {
      btn.className = btn.className.replace(" active", "");
    }
  }

  if (isActive) {
    indexCooking = -1;
  } else {
    y.className += " active";
    indexCooking = index;
  }

  generateChat();
}

function generateChat() {
  var chatBox = document.getElementById("chat-output");

  if (indexTier1 == -1 || indexTier2 == -1 || indexTier3 == -1 || indexCooking == -1) {
    chatBox.textContent = "Bitte 3 Bücher und eine Zutat auswählen!";
    return;
  }
  
  var output = "Im Shop: ";

  output += "<" + indexColors[indexTier1] + ">";
  output += indexNames[indexTier1] + " I";
  if (indexTier2 == indexTier1) output += " + II";
  if (indexTier3 == indexTier1) output += " + III";
  output += "</>";

  if (indexTier2 != indexTier1) {
    output += ", <" + indexColors[indexTier2] + ">";
    output += indexNames[indexTier2] + " II";
    if (indexTier3 == indexTier2) output += " + III";
    output += "</>";
  }

  if (indexTier3 != indexTier1 && indexTier3 != indexTier2) {
    output += ", <" + indexColors[indexTier3] + ">";
    output += indexNames[indexTier3] + " III";
    output += "</>";
  }

  output += ", " + cookingNames[indexCooking];

  chatBox.textContent = output + ".";

  chatBox.select();

  try {
    return document.execCommand("copy");
  }
  catch(ex) {
    return prompt("In die Zwischenablage kopieren: <Strg> + <C>.");
  }
}