//Benton Marcum Code


// global variables listed below before the function
var change = Math.ceil(Math.random() *20);
var intervalidID = 0;



function snitchPlay()
// function set up to move the snitch picture around the page
{
// local varibale
var image = document.getElementById("snitchpic");

document.getElementById("snitchbutton").disabled =true;
document.getElementById("snitchstopbutton").disabled =false;


intervalidID = setInterval(function() 
    {
    image.style.top    = change + "px";
    image.style.left   = change + "px";
    image.style.right  = change + "px";
    image.style.bottom = change + "px";

    change += Math.ceil(Math.random() *100); // this changes it by 5 pixels like change + five, easier way to code it.     

}, 100); //500 = $ of miliseconds before the code will repeat. Adjustable value

// code below plays sound upon pressing button

mySound = new sound("wind-sound-301491.mp3");
mySound.play();



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

    
}