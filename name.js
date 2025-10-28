// Access elements using DOM
const greetBtn = document.getElementById("greetBtn");
const nameInput = document.getElementById("nameInput");
const username = document.getElementById("username");

// Greet button functionality
greetBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (name !== "") {
    username.textContent = name;
  } else {
    username.textContent = "";
  }
});

// Get all color boxes
const redBox = document.getElementById("redBox");
const blueBox = document.getElementById("blueBox");
const greenBox = document.getElementById("greenBox");
const yellowBox = document.getElementById("yellowBox");

// Add click events for boxes
redBox.addEventListener("click", () => redBox.style.backgroundColor = "red");
blueBox.addEventListener("click", () => blueBox.style.backgroundColor = "blue");
greenBox.addEventListener("click", () => greenBox.style.backgroundColor = "green");
yellowBox.addEventListener("click", () => yellowBox.style.backgroundColor = "yellow");
