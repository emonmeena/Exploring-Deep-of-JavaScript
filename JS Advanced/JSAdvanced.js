function paraTxtChange(){
    return  document.getElementById("para").innerHTML= "Para changed"    //this is simple function or non Arrow function.
}

paraChange=()=> { 
    paraTxtChange();
    document.getElementById("para").style.fontSize= "24px"  //this is Arrow function.
    document.getElementById("paraChanger").innerHTML="Done"
}

var isOff = true;
bulbSwitch=()=> {
    if(isOff){document.getElementById("bulb").src="https://www.w3schools.com/js/pic_bulbon.gif"
              document.getElementById("switch").innerHTML="Switch OFF"  
        isOff = false;
    }
    else {
        document.getElementById("bulb").src="https://www.w3schools.com/js/pic_bulboff.gif" 
        document.getElementById("switch").innerHTML="Switch ON"  
        isOff = true;
    }
           
}

//In JS redeclaring the variable will not destroy the value stored.
//Array and Object declaration in JS.
var arr = ["This", "is", "Array"];
var object = {
    arr,
    i:10,
    string: "Beautiful"
};

/* 
accessing objects property *using .property  or *using [property].
but to access functions in an object we need either object.function() -method- or object.function -property.
Accessing a function without () will always return function definition instead of it's result.
endUptoFunctions */

/* 
Backslash before quotes accepts it as quotes
string.length
string.indexOf("text") shows first occurence of the "text"
string.match(/text/g) g stands for - global, hence it searches for text globally and returns if found
string.replace("text", "new text")
toUpperCase() and toLowerCase()
string.split("splitter") -imp- splits the string for splitter and returns an array
endUptoSrings 
*/