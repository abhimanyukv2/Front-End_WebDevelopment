/*
Scope and the variable statement
*/

var color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = "skyblue";


function headingColor() {
    color = "blue";
    document.querySelector(".title").style.color = color;
}


headingColor()

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;