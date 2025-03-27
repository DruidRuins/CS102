//Benton Marcum Code



function snitchPlay()
{



}

function play()
{
    mySound = new sound("soundcs102.wav");
    mySound.play();
    document.getElementById("snitchbutton").disabled = true;

    // this turns off the start button, disabling it equaling true
    document.getElementById("stopbutton").disabled = false;
    // this turns on the stop button since it starts disabled and becomes false
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