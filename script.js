document.addEventListener("mousemove", (event) => {
  const grenzwert = 20;
  const Bewegung = 30;
  const diagonalBewegung = 12;
  const buttonToMove = document.getElementById("button");
  const buttonHeight = buttonToMove.offsetHeight;
  const buttonWidth = buttonToMove.offsetWidth;
  const xkoordinateButton = buttonToMove.offsetLeft;
  const ykoordinatebutton = buttonToMove.offsetTop;
  const ymausPosition = event.clientY;
  const xmausPosition = event.clientX;
  const Obergrenze = ykoordinatebutton - grenzwert;
  const LinkeGrenze = xkoordinateButton - grenzwert;
  const buttonTopWithHeight = ykoordinatebutton + buttonHeight;
  const buttonLeftWithWidth = xkoordinateButton + buttonWidth;
  const RechteGrenze = buttonLeftWithWidth + grenzwert;
  const Untergrenze = buttonTopWithHeight + grenzwert;
  const mouseXIsInRange =
    xmausPosition > xkoordinateButton && xmausPosition < buttonLeftWithWidth;
  const mouseYIsInRange =
    ymausPosition > ykoordinatebutton && ymausPosition < buttonTopWithHeight;
  const RechteGrenzeVerkleinert = buttonLeftWithWidth - 20;
  const ykoordinatebuttonVergrößert = ykoordinatebutton + 40;
  const LinkeGrenzeVergrößert = xkoordinateButton + 40;
  // if anweisungen für oben
  if (
    ymausPosition < ykoordinatebutton &&
    ymausPosition >= Obergrenze &&
    mouseXIsInRange
  ) {
    buttonToMove.style.top = ykoordinatebutton + Bewegung + "px";
  }

  // if anweisungen für unten
  if (
    ymausPosition > buttonTopWithHeight &&
    ymausPosition <= Untergrenze &&
    mouseXIsInRange
  ) {
    buttonToMove.style.top = ykoordinatebutton - Bewegung + "px";
  }

  if (
    xmausPosition < xkoordinateButton &&
    xmausPosition >= LinkeGrenze &&
    mouseYIsInRange
  ) {
    buttonToMove.style.left = xkoordinateButton + Bewegung + "px";
  }
  if (
    xmausPosition > xkoordinateButton &&
    xmausPosition <= RechteGrenze &&
    mouseYIsInRange
  ) {
    buttonToMove.style.left = xkoordinateButton - Bewegung + "px";
  }
  // if anweisungen für diagonal
  // grob:
  // oben links
  if (
    ymausPosition < ykoordinatebuttonVergrößert &&
    xmausPosition > LinkeGrenze &&
    xmausPosition < LinkeGrenzeVergrößert &&
    Obergrenze < ymausPosition
  ) {
    buttonToMove.style.left = xkoordinateButton + diagonalBewegung + "px";
    buttonToMove.style.top = ykoordinatebutton + diagonalBewegung + "px";
  }
  //gut:
  // unten rechts
  if (
    ymausPosition > buttonTopWithHeight &&
    xmausPosition < RechteGrenze &&
    xmausPosition > RechteGrenzeVerkleinert &&
    Untergrenze > ymausPosition
  ) {
    buttonToMove.style.left = xkoordinateButton - diagonalBewegung + "px";
    buttonToMove.style.top = ykoordinatebutton - diagonalBewegung + "px";
  }
  //oben rechts
  if (
    ymausPosition < ykoordinatebuttonVergrößert &&
    xmausPosition < RechteGrenze &&
    xmausPosition > buttonLeftWithWidth &&
    Obergrenze < ymausPosition
  ) {
    buttonToMove.style.left = xkoordinateButton - diagonalBewegung + "px";
    buttonToMove.style.top = ykoordinatebutton + diagonalBewegung + "px";
  }
  //unten links
  if (
    ymausPosition > buttonTopWithHeight &&
    xmausPosition > LinkeGrenze &&
    xmausPosition < xkoordinateButton &&
    Untergrenze > ymausPosition
  ) {
    buttonToMove.style.left = xkoordinateButton + diagonalBewegung + "px";
    buttonToMove.style.top = ykoordinatebutton - diagonalBewegung + "px";
  }
});
