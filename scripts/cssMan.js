
let borderRedVal = document.getElementById("borderRedVal").value;
let borderBlueVal = document.getElementById("borderBlueVal").value;
let borderGreenVal = document.getElementById("borderGreenVal").value;
let width = document.getElementById("width").value;

let redVal = document.getElementById("redVal").value;
let blueVal = document.getElementById("blueVal").value;
let greenVal = document.getElementById("greenVal").value;

let pTag = document.getElementById("Paragraph");



function rgbToHex (rgb)
{
  let hex = Number(rgb).toString(16);
    console.log(rgb);
  if(hex.length <2)
  {
    hex="0" + hex;
  }
  console.log(hex);
  return hex;
}

function convertToHex(r, g, b)
{
  let red= rgbToHex(r);
  let green = rgbToHex(g);
  let blue = rgbToHex(b);
  return red + green + blue;
}

function modify()
{
  let backColor = convertToHex(redVal, blueVal, greenVal);
  let borderColor = convertToHex(borderRedVal, borderBlueVal, borderGreenVal);
  console.log(backColor);
  pTag.style.backgroundColor = backColor;
  pTag.style.border = "width solid borderColor"
}
