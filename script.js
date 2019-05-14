var iframe=document.getElementById("iframe")
var inleiding=document.getElementById("inleiding")
var fullScreen=document.getElementById("fullScreen")
var uitlegFoto=document.getElementById("uitlegFoto")
var uitlegVideo=document.getElementById("uitlegVideo")
var terugKnop=document.getElementById("terugKnop")
var checkLogoInBeeld=document.getElementById("CheckLogoInBeeld")
var logo=document.getElementById("RTVLogo")
var logoSize=document.getElementById("logoSize")
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

function fullScreenSwitch(){
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
}


function setButtonFull(id){
  var IdSetButton=document.getElementById(id)
    IdSetButton.addEventListener("click",function(){
      IdSetButton.innerHTML="klik op een toets"
      document.addEventListener("keydown",function(event){
        if (IdSetButton.innerHTML=="klik op een toets"){
          IdSetButton.innerHTML= event.key}
      })
    })
    document.addEventListener("keydown",function(event){
      if (event.key==IdSetButton.innerHTML){
        fullScreenSwitch()
        //logoSize.innerHTML="Het logo is "+logo.style.property+" breed"
      }
    })
  }

fullScreen.addEventListener("click",function(){ 
  fullScreenSwitch()
})

setButtonFull("fullscreenKey")

function nieuweStream (){
  iframe.src=(invoer.value)
  iframe.style.display="";
  inleiding.style.display="none";
}

function leeg() {
  invoer.value=""
}


function importStream(){
  
}


/*
function setButton(id,property,amount){
  var IdSetButton=document.getElementById(id)
    IdSetButton.addEventListener("click",function(){
      IdSetButton.innerHTML="klik op een toets"
      document.addEventListener("keydown",function(event){
        if (IdSetButton.innerHTML=="klik op een toets"){
          IdSetButton.innerHTML= event.key}
      })
    })
    document.addEventListener("keydown",function(event){
      if (event.key==IdSetButton.innerHTML){
        console.log(window.getComputedStyle(logo)[property])
        logo.style[property] = (Number(window.getComputedStyle(logo)[property].replace("px",""))+amount).toString()+"px"
        event.preventDefault()
        //logoSize.innerHTML="Het logo is "+logo.style.property+" breed"
      }
    })
  }




setButton("groterButton","height",1)
setButton("kleinerButton","height",-1)
setButton("linksButton","left",-1)
setButton("rechtsButton","left",1)
setButton("omhoogButton","top",-1)
setButton("omlaagButton","top",1)
*/