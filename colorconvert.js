"use strict"
//"rgb(192, 13, 1)"

let r;
let g;
let b;

cssToRGB("rgb(192, 13, 1)")

function cssToRGB(rgbString) {
    rgbString = rgbString.substring(rgbString.indexOf(`(`)+1, rgbString.indexOf(")"));
    rgbString = rgbString.replace(" ","");
    rgbString = rgbString.split(",");
    r = parseInt(rgbString[0]);
    g = parseInt(rgbString[1]);
    b = parseInt(rgbString[2]);
    console.log(rgbString, r, g, b);
}