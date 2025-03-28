//Benton Marcum Code


// global variables listed below before the function
var change = 100;
var intervalidID = 0;



function snitchPlay()
// function set up to move the snitch picture around the page
{
// local varibale
var image = document.getElementById("snitchpic");
// referencing image for the code to be changed
document.getElementById("snitchbutton").disabled =true;
document.getElementById("snitchstopbutton").disabled =false;

// buttons to be toggled between on and off (greyed out)
intervalidID = setInterval(function() 
    {
    image.style.top    = change + "px";
    image.style.left   = change + "px";
    image.style.right  = change + "px";
    image.style.bottom = change + "px";

    // changes to intervals and direction
    change += Math.ceil(Math.random() *100); // this changes it by 5 pixels like change + five, easier way to code it.     

}, 250); //# = of miliseconds before the code will repeat. Adjustable value

// code below plays sound upon pressing button

mySound = new sound("wind-sound-301491.mp3");
mySound.play();

// plays the sound  as shown above. This gives it multiple features, but not individual buttons as shown below and referenced in snitchpage.html for their respective IDs

}

function snitchstopPlay()
{
    clearInterval(intervalidID);

    document.getElementById("snitchbutton").disabled =false;
    document.getElementById("snitchstopbutton").disabled =true;
// this allows the button to be enabled for the stop button and greyed out for the start button (toggling)
window.location.reload();
//resets page upon stopping
}





function sound (src)
{
// add play function
    this.sound = document.createElement("audio") ;//create audio
    this.sound.src = src;//define src
    this.play = function() {//music function
        this.sound.play();//play sound
    }

    // code provided to allow sound to be played. Variables sound, function play are used to reference the correct functions to play audio.
}