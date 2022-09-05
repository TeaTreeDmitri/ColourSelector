"use strict"
//Webpage must update the colour actively while the user scrolls through the color input element

//1 document DOMCONTENTLOAD
document.addEventListener("DOMContentLoaded", start);
//calls function loadColor();

function start() {
document.querySelector("#colorPick").addEventListener("input", loadColor);
}

const colorDisp = document.querySelector("#colorDisplay")
//2 take value continuously from input
// store in variable inside function
function loadColor() {
    let colorPick = document.querySelector("#colorPick").value;
    console.log(colorPick);
    //display image
    colorDisp.style.backgroundColor = colorPick;

    //display HEX
    document.querySelector("#hexCode").value = colorPick;

    //display RBG
        let r;
        let g;
        let b;
        let colorDispRGB;
        let colorPickRGB;
        colorPickRGB = colorPick.substring(colorPick.indexOf("#") + 1);
        r = parseInt(colorPickRGB.substring(0, 2), 16);
        g = parseInt(colorPickRGB.substring(2, 4), 16);
        b = parseInt(colorPickRGB.substring(4, 6), 16);
        console.log("rgb values: ", r, g, b);
        // r = r.trim();
        // g = g.trim();
        // b = b.trim();
        colorDispRGB = `rgb(${r}, ${g}, ${b} )`;
        document.querySelector("#rgbCode").value = colorDispRGB;

    //display HSL

    
}

//3 append value to div #colorDisplay
//


//4 loop
//if newValue !== oldValue call loadColor();





