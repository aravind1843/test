var Level=0;
var check=1
var givenArray=[];
var userArray=[];
var ID;
var colorArray=[green,red,yellow,blue]

$(document).keypress(function(){
    if(!started){
    $("#level-title").text("Level"+Level)
    startgame();}
})

function choose(ID){
    switch(ID){
        case green:
            userArray.push(0);
            
            break
        case red:
            userArray.push(1);
            
            break
        case yellow:
            userArray.push(2);
            
            break
        case blue:
            userArray.push(3);

            break
    }
}




function checkValue(){
    for(j=0;j<=givenArray.length;j++){
        if(givenArray[j]==userArray[j])
            {Level++;
            document.getElementsByTagName("h1")[0].innerHTML="Level "+Level;}
        else
        {document.getElementsByTagName("h1")[0].innerHTML= "Game Over"
        Level=0;
        break;}
    }
}

function buttonAnimation(input) {
  $("#"+input).addClass("pressed");
  setTimeout(function(){
    $("#"+input).removeClass("pressed")
  },100)
  var audio = new Audio('sounds/'+ID+'.mp3');
  audio.play();
   
}

function userInput(){
    for(i=0;i<document.getElementsByClassName("btn").length-1;i++){
        document.getElementsByClassName("btn")[i].addEventListener("click",function(){
        ID= this.id;
        choose(ID);})
    }
    
buttonAnimation(ID);
}


function startgame(){
var random =Math.floor(Math.random()*4);
givenArray.push(random);
buttonAnimation(colorArray[random]);
while(userArray.length<givenArray.length){
userInput();
}
checkValue();
if(Level==0)
document.addEventListener("keypress", startgame);
}

 