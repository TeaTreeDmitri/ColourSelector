"use strict"
//"rgb(192, 13, 1)"


//CSS TO RGB///////////////////////////////////////////////////////////


cssToRGB("rgb(192, 13, 1)")

function cssToRGB(cssString) {
    let r;
    let g;
    let b;
    cssString = cssString.substring(cssString.indexOf(`(`) + 1, cssString.indexOf(")"));
    cssString = cssString.replace(" ", "");
    cssString = cssString.split(",");

    r = parseInt(cssString[0]);
    g = parseInt(cssString[1]);
    b = parseInt(cssString[2]);
    console.log("css > rgb values: ", r, g, b);
}

//HEX TO RBG///////////////////////////////////////////////////////////////


//hex	r	g	b
//#bada55	186	218	85
//#facade	250	202	222
//#c0ffee	192	255	238
//#f00b42	240	11	66
//#c0de25	192	222	37

hexToRGB("#facade");

function hexToRGB(hexString) {
    let r;
    let g;
    let b;
    let rgbString
    hexString = hexString.substring(hexString.indexOf("#") + 1);
    r = parseInt(hexString.substring(0, 2), 16);
    g = parseInt(hexString.substring(2, 4), 16);
    b = parseInt(hexString.substring(4, 6), 16);
    console.log("hexcode > rgb values: ", r, g, b);

    //BELOW FOR RBG TO CSS
    // r = r.trim();
    // g = g.trim();
    // b = b.trim();
    // rgbString = `rgb(${r}, ${g}, ${b} )`;
    // console.log(rgbString);
}

//RGB TO HEX//////////////////////////////////////////////////////////////

// r	g	b	hex
// 186	218	85	#bada55
// 250	202	222	#facade
// 192	255	238	#c0ffee
// 240	11	66	#f00b42
// 192	222	37	#c0de25
let rgbString = {
    r: 192,
    g: 222,
    b: 37,
}

rbgToHex(rgbString);

function rbgToHex(rgbString) {
    let r = rgbString.r;
    let g = rgbString.g;
    let b = rgbString.b;

    r = r.toString(16).padStart(2, "0");
    g = g.toString(16).padStart(2, "0");
    b = b.toString(16).padStart(2, "0");
    let hexString = "#" + r + g + b;


    console.log("rgb > hexcode: ", hexString)
}