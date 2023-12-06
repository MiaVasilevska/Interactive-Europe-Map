document.querySelectorAll(".allPaths").forEach(e => {
    e.setAttribute('class', `allPaths ${e.id}`);
    e.addEventListener("mouseover", function () {
        window.onmousemove=function (j) {
            x = j.clientX
            y = j.clientY
            document.getElementById('name').style.top = y-60  + 'px'
            document.getElementById('name').style.left = x +10 + 'px'
        }
        const classes=e.className.baseVal.replace(/ /g, '.')         
        document.querySelectorAll(`.${classes}`).forEach(country =>{
            country.style.fill = "rgb(213, 0, 11)"
        })
        document.getElementById("name").style.opacity = 1
        
        document.getElementById("namep").innerText = e.id
    })
    e.addEventListener("mouseleave", function () {
        const classes=e.className.baseVal.replace(/ /g, '.')
        document.querySelectorAll(`.${classes}`).forEach(country =>{
            country.style.fill = "#ececec"
        })
        document.getElementById("name").style.opacity = 0
    })
})

var macedoniaPath = document.getElementById("Macedonia");

// Get a reference to the audio element
var audioMacedonia = document.getElementById("audioMacedonia");

// Add a click event listener to the SVG path
macedoniaPath.addEventListener("click", function() {
  // Check if the audio is paused or has ended, then play it
  if (audioMacedonia.paused || audioMacedonia.ended) {
    audioMacedonia.play();
  } else {
    // If already playing, pause and reset to the beginning
    audioMacedonia.pause();
    audioMacedonia.currentTime = 0;
    audioMacedonia.play();
  }
});

var CzechPath = document.getElementById("Czech Republic");

// Get a reference to the audio element
var audioCzech = document.getElementById("audioCzech");

// Add a click event listener to the SVG path
CzechPath.addEventListener("click", function() {
  // Check if the audio is paused or has ended, then play it
  if (audioCzech.paused || audioCzech.ended) {
    audioCzech.play();
  } else {
    // If already playing, pause and reset to the beginning
    audioCzech.pause();
    audioCzech.currentTime = 0;
    audioCzech.play();
  }
});

var CroatiaPath = document.getElementById("Croatia");

// Get a reference to the audio element
var audioCroatia = document.getElementById("audioCroatia");

// Add a click event listener to the SVG path
CroatiaPath.addEventListener("click", function() {
  // Check if the audio is paused or has ended, then play it
  if (audioCroatia.paused || audioCroatia.ended) {
    audioCroatia.play();
  } else {
    // If already playing, pause and reset to the beginning
    audioCroatia.pause();
    audioCroatia.currentTime = 0;
    audioCroatia.play();
  }
});

var DenmarkPath = document.getElementById("Denmark");

// Get a reference to the audio element
var audioDenmark = document.getElementById("audioDenmark");

// Add a click event listener to the SVG path
DenmarkPath.addEventListener("click", function() {
  // Check if the audio is paused or has ended, then play it
  if (audioDenmark.paused || audioDenmark.ended) {
    audioDenmark.play();
  } else {
    // If already playing, pause and reset to the beginning
    audioDenmark.pause();
    audioDenmark.currentTime = 0;
    audioDenmark.play();
  }
});

var EstoniaPath = document.getElementById("Estonia");

// Get a reference to the audio element
var audioEstonia = document.getElementById("audioEstonia");

// Add a click event listener to the SVG path
EstoniaPath.addEventListener("click", function() {
  // Check if the audio is paused or has ended, then play it
  if (audioEstonia.paused || audioEstonia.ended) {
    audioEstonia.play();
  } else {
    // If already playing, pause and reset to the beginning
    audioEstonia.pause();
    audioEstonia.currentTime = 0;
    audioEstonia.play();
  }
});

var FinlandPath = document.getElementById("Finland");

// Get a reference to the audio element
var audioFinland = document.getElementById("audioFinland");

// Add a click event listener to the SVG path
FinlandPath.addEventListener("click", function() {
  // Check if the audio is paused or has ended, then play it
  if (audioFinland.paused || audioFinland.ended) {
    audioFinland.play();
  } else {
    // If already playing, pause and reset to the beginning
    audioFinland.pause();
    audioFinland.currentTime = 0;
    audioFinland.play();
  }
});

var FrancePath = document.getElementById("France");

// Get a reference to the audio element
var audioFrance = document.getElementById("audioFrance");

// Add a click event listener to the SVG path
FrancePath.addEventListener("click", function() {
  // Check if the audio is paused or has ended, then play it
  if (audioFrance.paused || audioFrance.ended) {
    audioFrance.play();
  } else {
    // If already playing, pause and reset to the beginning
    audioFrance.pause();
    audioFrance.currentTime = 0;
    audioFrance.play();
  }
});

var GreecePath = document.getElementById("Greece");

// Get a reference to the audio element
var audioGreece = document.getElementById("audioGreece");

// Add a click event listener to the SVG path
GreecePath.addEventListener("click", function() {
  // Check if the audio is paused or has ended, then play it
  if (audioGreece.paused || audioGreece.ended) {
    audioGreece.play();
  } else {
    // If already playing, pause and reset to the beginning
    audioGreece.pause();
    audioGreece.currentTime = 0;
    audioGreece.play();
  }
});

var HungaryPath = document.getElementById("Hungary");

// Get a reference to the audio element
var audioHungary = document.getElementById("audioHungary");

// Add a click event listener to the SVG path
HungaryPath.addEventListener("click", function() {
  // Check if the audio is paused or has ended, then play it
  if (audioHungary.paused || audioHungary.ended) {
    audioHungary.play();
  } else {
    // If already playing, pause and reset to the beginning
    audioHungary.pause();
    audioHungary.currentTime = 0;
    audioHungary.play();
  }
});

var ItalyPath = document.getElementById("Italy");

// Get a reference to the audio element
var audioItaly = document.getElementById("audioItaly");

// Add a click event listener to the SVG path
ItalyPath.addEventListener("click", function() {
  // Check if the audio is paused or has ended, then play it
  if (audioItaly.paused || audioItaly.ended) {
    audioItaly.play();
  } else {
    // If already playing, pause and reset to the beginning
    audioItaly.pause();
    audioItaly.currentTime = 0;
    audioItaly.play();
  }
});

var LatviaPath = document.getElementById("Latvia");

// Get a reference to the audio element
var audioLatvia = document.getElementById("audioLatvia");

// Add a click event listener to the SVG path
LatviaPath.addEventListener("click", function() {
  // Check if the audio is paused or has ended, then play it
  if (audioLatvia.paused || audioLatvia.ended) {
    audioLatvia.play();
  } else {
    // If already playing, pause and reset to the beginning
    audioLatvia.pause();
    audioLatvia.currentTime = 0;
    audioLatvia.play();
  }
});

var LithuaniaPath = document.getElementById("Lithuania");

// Get a reference to the audio element
var audioLithuania = document.getElementById("audioLitva");

// Add a click event listener to the SVG path
LithuaniaPath.addEventListener("click", function() {
  // Check if the audio is paused or has ended, then play it
  if (audioLithuania.paused || audioLithuania.ended) {
    audioLithuania.play();
  } else {
    // If already playing, pause and reset to the beginning
    audioLithuania.pause();
    audioLithuania.currentTime = 0;
    audioLithuania.play();
  }
});

var NetherlandsPath = document.getElementById("Netherlands");

// Get a reference to the audio element
var audioNetherlands = document.getElementById("audioNl");

// Add a click event listener to the SVG path
NetherlandsPath.addEventListener("click", function() {
  // Check if the audio is paused or has ended, then play it
  if (audioNetherlands.paused || audioNetherlands.ended) {
    audioNetherlands.play();
  } else {
    // If already playing, pause and reset to the beginning
    audioNetherlands.pause();
    audioNetherlands.currentTime = 0;
    audioNetherlands.play();
  }
});

var PolandPath = document.getElementById("Poland");

// Get a reference to the audio element
var audioPoland = document.getElementById("audioPoland");

// Add a click event listener to the SVG path
PolandPath.addEventListener("click", function() {
  // Check if the audio is paused or has ended, then play it
  if (audioPoland.paused || audioPoland.ended) {
    audioPoland.play();
  } else {
    // If already playing, pause and reset to the beginning
    audioPoland.pause();
    audioPoland.currentTime = 0;
    audioPoland.play();
  }
});

var PortugalPath = document.getElementById("Portugal");

// Get a reference to the audio element
var audioPortugal = document.getElementById("audioPortugal");

// Add a click event listener to the SVG path
PortugalPath.addEventListener("click", function() {
  // Check if the audio is paused or has ended, then play it
  if (audioPortugal.paused || audioPortugal.ended) {
    audioPortugal.play();
  } else {
    // If already playing, pause and reset to the beginning
    audioPortugal.pause();
    audioPortugal.currentTime = 0;
    audioPortugal.play();
  }
});

var RomaniaPath = document.getElementById("Romania");

// Get a reference to the audio element
var audioRomania = document.getElementById("audioRomania");

// Add a click event listener to the SVG path
RomaniaPath.addEventListener("click", function() {
  // Check if the audio is paused or has ended, then play it
  if (audioRomania.paused || audioRomania.ended) {
    audioRomania.play();
  } else {
    // If already playing, pause and reset to the beginning
    audioRomania.pause();
    audioRomania.currentTime = 0;
    audioRomania.play();
  }
});

var SpainPath = document.getElementById("Spain");

// Get a reference to the audio element
var audioSpain = document.getElementById("audioSpain");

// Add a click event listener to the SVG path
SpainPath.addEventListener("click", function() {
  // Check if the audio is paused or has ended, then play it
  if (audioSpain.paused || audioSpain.ended) {
    audioSpain.play();
  } else {
    // If already playing, pause and reset to the beginning
    audioSpain.pause();
    audioSpain.currentTime = 0;
    audioSpain.play();
  }
});

var TurkeyPath = document.getElementById("Turkey");

// Get a reference to the audio element
var audioTurkey = document.getElementById("audioTurkey");

// Add a click event listener to the SVG path
TurkeyPath.addEventListener("click", function() {
  // Check if the audio is paused or has ended, then play it
  if (audioTurkey.paused || audioTurkey.ended) {
    audioTurkey.play();
  } else {
    // If already playing, pause and reset to the beginning
    audioTurkey.pause();
    audioTurkey.currentTime = 0;
    audioTurkey.play();
  }
});

var UkPath = document.getElementById("United Kingdom");

// Get a reference to the audio element
var audioUk = document.getElementById("audioUk");

// Add a click event listener to the SVG path
UkPath.addEventListener("click", function() {
  // Check if the audio is paused or has ended, then play it
  if (audioUk.paused || audioUk.ended) {
    audioUk.play();
  } else {
    // If already playing, pause and reset to the beginning
    audioUk.pause();
    audioUk.currentTime = 0;
    audioUk.play();
  }
});

var UkrainePath = document.getElementById("Ukraine");

// Get a reference to the audio element
var audioUkraine = document.getElementById("audioUkraina");

// Add a click event listener to the SVG path
UkrainePath.addEventListener("click", function() {
  // Check if the audio is paused or has ended, then play it
  if (audioUkraine.paused || audioUkraine.ended) {
    audioUkraine.play();
  } else {
    // If already playing, pause and reset to the beginning
    audioUkraine.pause();
    audioUkraine.currentTime = 0;
    audioUkraine.play();
  }
});

var BulgariaPath = document.getElementById("Bulgaria");

// Get a reference to the audio element
var audioBulgaria = document.getElementById("audioBulgaria");

// Add a click event listener to the SVG path
BulgariaPath.addEventListener("click", function() {
  // Check if the audio is paused or has ended, then play it
  if (audioBulgaria.paused || audioBulgaria.ended) {
    audioBulgaria.play();
  } else {
    // If already playing, pause and reset to the beginning
    audioBulgaria.pause();
    audioBulgaria.currentTime = 0;
    audioBulgaria.play();
  }
});