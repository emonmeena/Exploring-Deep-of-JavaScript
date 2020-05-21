function paraTxtChange(){
    return  document.getElementById("para").innerHTML= "Para changed"    //this is simple function or non Arrow function
}

paraChange=()=> { 
    paraTxtChange();
    document.getElementById("para").style.fontSize= "24px"  //this is Arrow function
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