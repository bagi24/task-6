const calculateBtn = document.querySelector(".calculateBtn");

calculateBtn.addEventListener("click", calculateAverage);

function calculateAverage() {
  const numbersInput = document.getElementById("numbersInput").value;
  const numbersArray = numbersInput.split(":");
  let sum = 0;

  for (let i = 0; i < numbersArray.length; i++) {
    let num = parseFloat(numbersArray[i]);
    if (!isNaN(num)) {
      sum += num;
    }
  }

  const average = sum / numbersArray.length;

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "Average: " + average.toFixed(2);
}
