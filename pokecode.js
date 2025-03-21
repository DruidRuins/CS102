// Benton Marcum Java Script


function RPS()

{

    var result = Math.ceil(Math.random() *2);
    // helps generate a random # between 1 and 2 and shown by the #2 referenced above
    
    

    var fireImage = "charmanderderp.png";
    var waterImage = "squirtlederp.png";
    var grassImage = "bulbasaurderp.png";


if (result == 1)
{
    document.getElementById("player1Img").src = fireImage;
}

else  
{
    document.getElementById("Player1Img").src = waterImage;
}


    

// the && helps us know that 2 conditions must be true
// the || helps us know that only 1 of the conditions needs to be true
        if (result == 1)
           { 
            document.getElementById("finalResult").innerHTML = "Tails";
           }

           else
           {
            document.getElementById("finalResult").innerHTML = "Heads";
           }

}

