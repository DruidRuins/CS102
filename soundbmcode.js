// Benton Marcum Code

function play ()
{
    mySound = new sound("tuning-radio-7150.mp3");
    mySound.play();
    document.getElementById("startbutton").disabled = true;

    // this turns off the start button, disabling it equaling true
    document.getElementById("stopbutton").disabled = false;
    // this turns on the stop button since it starts disabled and becomes false
}


function stopPlay()
{
    document.getElementById("startbutton").disabled = false;
    document.getElementById("stopbutton").disabled  = true;
    window.location.reload();
  
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