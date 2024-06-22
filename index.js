for(var i=0; i<document.getElementsByClassName("drum").length; i++){
  document.getElementsByClassName("drum") [i].addEventListener("click",clickEvent);
}



function clickEvent(){
 var text=this.innerHTML;
 anima(text);

 function anima(text){
 var a= document.querySelector("." + text);
 a.classList.add("pressed");

 setTimeout(function(){a.classList.toggle("pressed")},100);
}
switch (text) {
  case "w":
    var tom1= new Audio ("tom-1.mp3");
    tom1.play();
    break;

    case "a":
      var tom2= new Audio ("tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3= new Audio ("tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4= new Audio ("tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash= new Audio ("crash.mp3");
      crash.play();
      break;

    case "k":
      var kick= new Audio ("kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var snare= new Audio ("snare.mp3");
      snare.play();
      break;

  default:
    break;
}



}

document.addEventListener("keydown",function(event){
 var keyText=event.key;
 anima(keyText);

 function anima(keyText){
  var a= document.querySelector("." + keyText);
  a.classList.add("pressed");
 
  setTimeout(function(){a.classList.toggle("pressed")},100);
 }
 switch (keyText) {
  case "w":
    var tom1= new Audio ("tom-1.mp3");
    tom1.play();
    break;

    case "a":
      var tom2= new Audio ("tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3= new Audio ("tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4= new Audio ("tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash= new Audio ("crash.mp3");
      crash.play();
      break;

    case "k":
      var kick= new Audio ("kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var snare= new Audio ("snare.mp3");
      snare.play();
      break;

  default:
    break;
 }
 })




