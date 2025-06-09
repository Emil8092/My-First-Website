// ✅ JavaScript is working
console.log("JavaScript is connected!");

// ✅ Start the live clock (clock + date)
function startClock() {
  function updateTime() {
    const now = new Date();
    const clock = document.getElementById("clock");
    const date = document.getElementById("date");

    if (clock && date) {
      clock.textContent = now.toLocaleTimeString();
      date.textContent = now.toLocaleDateString();
    }
  }

  updateTime();
  setInterval(updateTime, 1000);
}

// ⏰ Start clock when page loads
window.addEventListener("DOMContentLoaded", () => {
  startClock();
});

// ✅ Project Counter
const projects = document.querySelectorAll(".project");
const count = projects.length;
const output = document.getElementById("project-count");
if (output) {
  output.innerText = `I’ve created ${count} how-to projects!`;
}



// TOOLS //

// ✅ Random Quote Generator
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
  const quoteBox = document.getElementById("quote");
  if (quoteBox) quoteBox.innerText = quotes[randomIndex];
}

// ✅ Random Number Generator
function generate() {
  const min = parseInt(document.getElementById('min').value);
  const max = parseInt(document.getElementById('max').value);

  if (isNaN(min) || isNaN(max) || min > max) {
    document.getElementById('result').innerText = "Please enter valid numbers.";
    return;
  }

  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById('result').innerText = `🎉 Result: ${result}`;
}
