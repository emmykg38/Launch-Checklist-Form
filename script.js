// Write your JavaScript code here!

//set up event handler that runs when the form's submit event is triggered. the first line of code in this handler should use the event's preventDefault() method to prevent the default event action from occurring. This is a commonly used technique when a JavaScript application employs a form but handles all related behavior in the browser

window.addEventListener("load", function() {
   const pilotName = document.querySelector("input[name=pilotName]");
   const copilotName = document.querySelector("input[name=copilotName]");
   const fuelLevel = document.querySelector("input[name=fuelLevel]");
   const cargoMass = document.querySelector("input[name=cargoMass]");
   let form = document.getElementById("launchForm");

   form.addEventListener("submit", function(event) {
      event.preventDefault();

      let pilotNameInput = Number(pilotName.value);
      let copilotNameInput = Number(copilotName.value);
      let fuelLevelInput = Number(fuelLevel.value);
      let cargoMassInput = Number(cargoMass.value);



      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
      }

      if (isNaN(fuelLevelInput)) {
         alert("Please enter a valid number for fuel level.");
      };

      if (isNaN(cargoMassInput)) {
         alert("Please enter a valid number for the cargo mass.")
      }

      // if (!isNaN(pilotNameInput)) {
      //    alert("Pilot's name must only include English letters.") 
      // }
      

   });


});



// let submit = function(event) {
//    alert("fill in everything!");
//    event.preventDefault();
// };



/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
