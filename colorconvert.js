"use strict"
//"rgb(192, 13, 1)"


//CSS TO RGB///////////////////////////////////////////////////////////


cssToRGB("rgb(192, 13, 1)")

function cssToRGB(rgbString) {
    let r;
    let g;
    let b;
    rgbString = rgbString.substring(rgbString.indexOf(`(`)+1, rgbString.indexOf(")"));
    rgbString = rgbString.replace(" ","");
    rgbString = rgbString.split(",");
    r = parseInt(rgbString[0]);
    g = parseInt(rgbString[1]);
    b = parseInt(rgbString[2]);
    console.log(rgbString, r, g, b);
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
    hexString = hexString.substring(hexString.indexOf("#")+1);
    r = parseInt(hexString.substring(0, 2), 16);
    g = parseInt(hexString.substring(2, 4), 16);
    b = parseInt(hexString.substring(4, 6), 16);
    console.log(r, g, b);

    //BELOW FOR RBG TO CSS
    // r = r.trim();
    // g = g.trim();
    // b = b.trim();
    // rgbString = `rgb(${r}, ${g}, ${b} )`;
    // console.log(rgbString);
}

//RGB TO HEX//////////////////////////////////////////////////////////////

