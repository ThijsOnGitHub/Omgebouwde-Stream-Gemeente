iframe=document.getElementById("iframe")
inleiding=document.getElementById("inleiding")
fullScreen=document.getElementById("fullScreen")
uitlegFoto=document.getElementById("uitlegFoto")
uitlegVideo=document.getElementById("uitlegVideo")
terugKnop=document.getElementById("terugKnop")
var full=false;

uitlegFoto.addEventListener("click",function(){
  uitlegFoto.style.display="none";
  uitlegVideo.style.display="";
  terugKnop.style.display="block";
})
terugKnop.addEventListener("click",function(){
  uitlegFoto.style.display="";
  uitlegVideo.style.display="none";
  terugKnop.style.display="none";
})

fullScreen.addEventListener("click",function(){ 
  if(full){
    document.webkitCancelFullScreen();
    console.log("hello")
    fullScreen.innerHTML="Klik hier voor fullscreen"
    full=false
  }else{
    document.getElementById("body").webkitRequestFullscreen();
    fullScreen.innerHTML="Klik hier voor verkleinen"
    full=true
    console.log(full)
  }
})

function nieuweStream (){
  iframe.src=(invoer.value)
  iframe.style.display="";
  inleiding.style.display="none";
}
function leeg() {
  invoer.value=""
}