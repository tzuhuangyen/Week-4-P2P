// Step 2 - Get the elements by id and store them in a variable with a logical name.
const countInput = document.getElementById("countInput");
const startBtn = document.getElementById("startbtn");
const countOutput = document.getElementById("countOutput");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
let countdownInterval;
let counter = 0;
// Step 4 - Create a JavaScript function (named startCounting( )) that reads the user input
// (id=“countInput”), and save its value in a variable.

const startCounting = () => {
  // 4.1 - Save the input value in the Local Storage naming their key as “lastInput”.
  const inputValue = countInput.value;
  localStorage.setItem("lastInput", inputValue);
  // 4.2 - Use the variable that stores the id=“countOutput” and insert the counter result
  countOutput.innerHTML = `Countdown Timer: ${inputValue} seconds`;

  // there as a innerHTML to be visible in the DOM tree.
  // Step 4.1 (continued): Save the input value in Local Storage
  // Step 4.2: Display the input value in the DOM

  counter = parseInt(inputValue);

  // Step 4.3: Use setInterval for countdown
  countdownInterval = setInterval(() => {
    if (counter > 0) {
      countOutput.innerHTML = `Countdown Timer: ${counter} seconds`;
      counter--;
    } else {
      countOutput.innerHTML = "Countdown complete!";
      clearInterval(countdownInterval);
    }
  }, 1000);
};

const pauseCounting = () => {
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
};

const resetCounting = () => {
  clearInterval(countdownInterval);

  countInput.value = "";
  countOutput.innerHTML = `Countdown Timer: ${countInput.value} seconds`;
};

//step3
startBtn.addEventListener("click", startCounting);
pauseBtn.addEventListener("click", pauseCounting);
resetBtn.addEventListener("click", resetCounting);
