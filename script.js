/* Iteration 4: Make the Everything Work */

// Wonder Woman - background, hair, body, armour, costume, star, eyes
 
// All the input buttons with their Id's
const backgoundColor = document.getElementById("button-backgound")
const hairColor = document.getElementById("button-hair")
const bodyColor = document.getElementById("button-body")
const armourColor = document.getElementById("button-armour")
const costumeColor = document.getElementById("button-costume")
const starColor = document.getElementById("button-star")
const eyesColor= document.getElementById("button-eyes")

// Geeting ID's from the svg pasted
const backgound = document.getElementById("background")
const hair = document.getElementById("hair")
const body = document.getElementById("body")
const armour = document.getElementById("armour")
const costume = document.getElementById("costume")
const star = document.getElementById("star")
const eyes = document.getElementById("eyes")

// Assigning input values 
backgoundColor.oninput = () =>{
  backgound.style.fill = backgoundColor.value;
}

hairColor.oninput =() =>{
  hair.style.fill = hairColor.value;
}
bodyColor.oninput = () =>{
  body.style.fill = bodyColor.value;
}

costumeColor.oninput = () =>{
  costume.style.fill = costumeColor.value;
}

armourColor.oninput = () =>{
  armour.style.fill = armourColor.value;
}

starColor.oninput = () =>{
  star.style.fill = starColor.value;
}

eyesColor.oninput = () =>{
  eyes.style.fill = eyesColor.value;
}
