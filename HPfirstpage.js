//Benton Marcum Code
function choose()
{


    document.getElementById("loginstatus").innerHTML = "Welcome!" + " " + fullName; 
    location.replace ("ChoosebroomHP.html");


    mySound = new sound("put the sound here");
    mySound.play();
    document.getElementById("playerbutton").disabled = true;
// sound for selecting, "Nice choice!"



}


function broomSelect()
{


<input type = "submit" onclick = "broomSelected();"></input>
location.replace ("snitchpage.html");

mySound = new sound("put the sound here");
mySound.play();
document.getElementById("choosebroom").disabled = true;


}