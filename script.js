var iframe=document.getElementById("iframe")
var inleiding=document.getElementById("inleiding")
var fullScreen=document.getElementById("fullScreen")
var uitlegFoto=document.getElementById("uitlegFoto")
var uitlegVideo=document.getElementById("uitlegVideo")
var terugKnop=document.getElementById("terugKnop")
var checkLogoInBeeld=document.getElementById("CheckLogoInBeeld")
var logo=document.getElementById("RTVLogo")
var full=false;

checkLogoInBeeld.addEventListener("click",function(){
  if(checkLogoInBeeld.checked==true){
    logo.style.display=""
  }else{
    logo.style.display="none"
  }
})

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
    //document.getElementById("iframe").webkitRequestFullscreen();
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

document.addEventListener("keydown",function(event){
  if (event.key=="ArrowUp"){
    logo.style.height = (Number(window.getComputedStyle(logo).height.replace("px",""))+1).toString()+"px"
  }else if(event.key=="ArrowDown"){
    logo.style.height = (Number(window.getComputedStyle(logo).height.replace("px",""))-1).toString()+"px"
  }
})


function leeg() {
  invoer.value=""
}