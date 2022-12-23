/*
Scope and the variable statement
*/

let color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = "skyblue";


function headingColor() {
    let titleColor = "blue";
    document.querySelector(".title").style.color = titleColor;
    console.log('inside:',titleColor)
}


headingColor()

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;

console.log('outside:',titleColor)