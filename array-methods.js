var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");

planets.forEach(function(planet) {
  el.innerHTML += "<div>"+planet+"</div>";
});
el.innerHTML += "<br>";
// Use the map method to create a new array where the first letter of each planet is capitalized

const planetsUC = planets.map(function(string){return string.charAt(0).toUpperCase() + string.substr(1);});
console.log(planetsUC);
planetsUC.forEach(function(planet) {
  el.innerHTML += "<div>"+planet+"</div>";
});
el.innerHTML += "<br>";
// Use the filter method to create a new array that contains planets with the letter 'e'
const planetsWE = planets.filter(function(planet){
  return planet.indexOf("e") !== -1;
});
console.log(planetsWE);
planetsWE.forEach(function(planet) {
  el.innerHTML += "<div>"+planet+"</div>";
});
// Use the reduce method to create a sentence from the words in the following array
el.innerHTML += "<br>";
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

words = words.reduce(function(a,b){
  return a + " " + b;
})

console.log(words);
el.innerHTML += "<div>"+words+"</div>";
