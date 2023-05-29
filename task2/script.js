const button = document.querySelector(".btn");

button.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  const colorInput = document.getElementById("colorInput");
  const color = colorInput.value.toLowerCase();

  const body = document.querySelector("body");
  if (
    color === "red" ||
    color === "blue" ||
    color === "green" ||
    color === "black" ||
    color === "white"
  ) {
    body.style.backgroundColor = color;
  } else {
    alert(
      "Invalid color! Please enter one of the following colors: red, blue, green, black, white."
    );
  }
}
