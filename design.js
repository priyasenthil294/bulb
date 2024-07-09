var bulb =0;

function findbulb()
{
    if(bulb==0)
    {
    document.getElementById("image").src = "img.on.jpg";
    bulb=1;
    }

else{
    document.getElementById("image").src = "img.off.jpg";
    bulb=0;
}
}