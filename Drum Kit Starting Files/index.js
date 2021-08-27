for(i=0;i<=document.getElementsByClassName("set")[0].childElementCount-1;i++){

    document.getElementsByClassName("set")[0].children[i].addEventListener("click",function(){
        var InnerHTML=this.innerHTML;
        makesound(InnerHTML);
        animation(InnerHTML)
    });

}

document.addEventListener("keypress",function(event){
    makesound(event.key)
    animation(event.key)
}
)
    function makesound(key)
    {

        
        switch(key){
        case "w":
        var audioa = new Audio('sounds/crash.mp3');
        audioa.play();
        break;
        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;
        case "s":
            var audios = new Audio('sounds/snare.mp3');
        audios.play();
        break;
        case "d":
            var audiod = new Audio('sounds/tom-1.mp3');
        audiod.play();
        break;
        case "j":
            var audioj= new Audio('sounds/tom-2.mp3');
        audioj.play();
        break
        case "k":
            var audiok = new Audio('sounds/tom-3.mp3');
        audiok.play();
        break
        case "l":
            var audiol = new Audio('sounds/tom-4.mp3');
        audiol.play();
        break
    }
        
          

}

function animation(keypressed){
var activekey=document.querySelector("."+ keypressed)
activekey.classList.toggle("pressed")
setTimeout(function(){
    activekey.classList.remove("pressed")
},100)
}


