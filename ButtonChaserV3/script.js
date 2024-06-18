const boundary = document.getElementById("blase");

boundary.addEventListener("mouseenter", (event) => {
  const buttonToMove = document.getElementById("button");
  const buttonLeft = buttonToMove.offsetLeft;
  const ykoordinatebuttonCorner = buttonToMove.offsetTop;
  const HalbexkoordinateButtonMaße = buttonToMove.offsetWidth / 2;
  const HalbeykoordinateButtonMaße = buttonToMove.offsetHeight / 2;
  const xkoordinatebuttonCenter = HalbexkoordinateButtonMaße + buttonLeft;
  const ykoordinatebuttonCenter =
    HalbeykoordinateButtonMaße + ykoordinatebuttonCorner;
  const xmausPosition = event.pageX;
  const ymausPosition = event.pageY;
  const VektorX = xkoordinatebuttonCenter - xmausPosition;
  const VektorY = ykoordinatebuttonCenter - ymausPosition;
  buttonToMove.style.left = buttonLeft + VektorX * 0.5 + "px";
  buttonToMove.style.top = ykoordinatebuttonCorner + VektorY + "px";

  boundary.style.left = buttonLeft + VektorX * 0.5 + "px";
  boundary.style.top = ykoordinatebuttonCorner + VektorY + "px";
});
button.addEventListener("click", () => {
  location.reload();
});
