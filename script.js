// Write your JavaScript code here!

//set up event handler that runs when the form's submit event is triggered. the first line of code in this handler should use the event's preventDefault() method to prevent the default event action from occurring. This is a commonly used technique when a JavaScript application employs a form but handles all related behavior in the browser

window.addEventListener("load", function() {
   const pilotName = document.querySelector("input[name=pilotName]");
   const copilotName = document.querySelector("input[name=copilotName]");
   const fuelLevel = document.querySelector("input[name=fuelLevel]");
   const cargoMass = document.querySelector("input[name=cargoMass]");
   let form = document.getElementById("launchForm");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let launchStatus = document.getElementById("launchStatus");
   let faultyItems = document.getElementById("faultyItems");




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

      if (isNaN(pilotNameInput) === false) {
         alert("Pilot's name must only include English letters.") 
      } else {
         pilotStatus.innerHTML = `${pilotName.value} is our pilot today.`;
      }
      
      if (isNaN(copilotNameInput) === false) {
         alert("Co-Pilot's name must only include English letters.");
      } else {
         copilotStatus.innerHTML = `${copilotName.value} is our co-pilot today.`;
      }

      if (fuelLevelInput < 10000) {
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "Not enough fuel for the journey"
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
      }  
      
      else if (cargoMassInput > 10000) {
         faultyItems.style.visibility = "visible";
         cargoStatus.innerHTML = "Too much mass for shuttle takeoff";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
      }

      else {
         faultyItems.style.visibility = "visible";
         cargoStatus.innerHTML = "Mass level low enough for launch";
         fuelStatus.innerHTML = "Fuel level high enough for launch";
         launchStatus.style.color = "green";
         launchStatus.innerHTML = "Shuttle ready for launch!";
      }





   });

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         const planet = document.getElementById("missionTarget");
         let index = Math.floor(Math.random()*6);
         planet.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[index].name}</li>
               <li>Diameter: ${json[index].diameter}</li>
               <li>Star: ${json[index].star}</li>
               <li>Distance from Earth: ${json[index].distance}</li>
               <li>Number of Moons: ${json[index].moons}</li>
            </ol>
            <img src="${json[index].image}">
            `
      });
   });


});






