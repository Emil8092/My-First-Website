// Ctrl + Shift + J to open the console in Chrome
console.log("JavaScript is connected!");

// CLOCK & DATE
function updateClockBox() {
  const now = new Date();
  document.getElementById("clock").innerText = now.toLocaleTimeString();
  document.getElementById("date").innerText = now.toLocaleDateString();
}
setInterval(updateClockBox, 1000);
updateClockBox();

// PROJECT COUNTER
const projects = document.querySelectorAll(".project");
const count = projects.length;
const output = document.getElementById("project-count");
if (output) {
  output.innerText = `I’ve created ${count} how-to projects! 💪`;
}

// Random Quotes
let lastQuoteIndex = -1;

function showRandomQuote() {
  const quotes = [
    "One Day or Day One",
    "Discipline equals freedom.",
    "Simplicity is the ultimate sophistication.",
    "The journey of a thousand miles begins with one step.",
    "Do one thing every day that scares you.",
    "Success is walking from failure to failure with no loss of enthusiasm."
  ];

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastQuoteIndex);

  lastQuoteIndex = randomIndex;
  document.getElementById("quote").innerText = quotes[randomIndex];
}