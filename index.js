var n = document.querySelectorAll(".drum").length;
for(var i = 0; i<n; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click" , handleClick)

    function handleClick()
    {
        var button = this.innerHTML;
        makesound(button);
        buttonAnimation(button);
        
    }
}
document.addEventListener("keypress" , function(event)
{
    makesound(event.key);
    buttonAnimation(event.key);
});

function makesound(key)
{
    switch (key) {
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 's':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break; 
        case 'j':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
              
        default:
            break;
    }
}

function buttonAnimation(currenKey)
{
    var activButton = document.querySelector("."+currenKey);
    activButton.classList.add("pressed");
    setTimeout(function() {
        activButton.classList.remove("pressed");
    },100);
}