"use strict"
//Webpage must update the colour actively while the user scrolls through the color input element

//1 document DOMCONTENTLOAD
document.addEventListener("DOMContentLoaded", start);
//calls function loadColor();

function start() {
document.querySelector("#colorPick").addEventListener("input", loadColor);
}

const colorDisp = document.querySelector("#colorDisplay")
let r;
let g;
let b;
//2 take value continuously from input
// store in variable inside function
function loadColor() {
    let colorPick = document.querySelector("#colorPick").value;
    console.log(colorPick);
    //display image
    colorDisp.style.backgroundColor = colorPick;
    displayRGB();
    displayHSL();
    //display HEX
    document.querySelector("#hexCode").value = colorPick;
}

    //display RBG
    function displayRGB() {
        let colorPick = document.querySelector("#colorPick").value;
        let colorDispRGB;
        let colorPickRGB;
        colorPickRGB = colorPick.substring(colorPick.indexOf("#")+1);
        r = parseInt(colorPickRGB.substring(0, 2), 16);
        g = parseInt(colorPickRGB.substring(2, 4), 16);
        b = parseInt(colorPickRGB.substring(4, 6), 16);
        console.log("rgb values: ", r, g, b);
        // r = r.trim();
        // g = g.trim();
        // b = b.trim();
        colorDispRGB = `rgb(${r}, ${g}, ${b} )`;
        document.querySelector("#rgbCode").value = colorDispRGB;
    }
    // display HSL
    function displayHSL() {
        r /= 255;
        g /= 255;
        b /= 255;
        let h, s, l;

        const min = Math.min(r,g,b);
        const max = Math.max(r,g,b);
       
        if( max === min ) {
          h = 0;
        } else
        if (max === r) {
          h = 60 * (0 + (g - b) / (max - min) );
        } else
        if (max === g) {
          h = 60 * (2 + (b - r) / (max - min) );
        } else
        if (max === b) {
          h = 60 * (4 + (r - g) / (max - min) );
        }
        if (h < 0) {h = h + 360; }
       
        l = (min + max) / 2;
       
        if (max === 0 || min === 1 ) {
          s = 0;
        } else {
          s = (max - l) / ( Math.min(l,1-l));
        }
        // multiply s and l by 100 to get the value in percent, rather than [0,1]
        s *= 100;
        l *= 100;      

        hslCode.value = `H:${h.toFixed(1)}, S:${s.toFixed(1)}, L:${l.toFixed(1)}`

    }






