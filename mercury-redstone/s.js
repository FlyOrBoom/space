var x = 0;
var y = 0;
var t = 0;
var opa = ((100000-y)/100000);
var quart = 0;
var screenHeight = window.innerHeight;

function draw() {
//screen
  screenHeight = window.innerHeight;
//altitude
  
//opa
  opa = ((100000-y)/100000);
  // console.log(opa);
  document.getElementById('sky0').style.opacity = opa;
  document.getElementById('sky1').style.opacity = opa;
  document.getElementById('sky2').style.opacity = 0.1*opa;
  document.getElementById('capsule0').style.opacity = opa;
  document.getElementById('booster0').style.opacity = opa;
  
//flame
  if(quart===0){
    document.getElementById('fa').style.opacity = 1;
    document.getElementById('fb').style.opacity = 0;
    document.getElementById('fc').style.opacity = 0;
    document.getElementById('fd').style.opacity = 0;
    quart++;
  }else if(quart===1){
    document.getElementById('fa').style.opacity = 0;
    document.getElementById('fb').style.opacity = 1;
    document.getElementById('fc').style.opacity = 0;
    document.getElementById('fd').style.opacity = 0;
    quart++;
  }else if(quart===2){
    document.getElementById('fa').style.opacity = 0;
    document.getElementById('fb').style.opacity = 0;
    document.getElementById('fc').style.opacity = 1;
    document.getElementById('fd').style.opacity = 0;
    quart++;
  }else{
    document.getElementById('fa').style.opacity = 0;
    document.getElementById('fb').style.opacity = 0;
    document.getElementById('fc').style.opacity = 0;
    document.getElementById('fd').style.opacity = 1;
    quart=0;
  }
  y=y+500;
  
//throttle
  document.addEventListener(
    "keydown",
    function(e){
      if(e.key==='ArrowUp' && t<22.75){
        t=t+0.025;
      }
      if(e.key==='ArrowDown' && t>0){
        t=t-0.025;
      }
    }, false
  );
  if(t>=22.75){
    t=22.75;
  }
  if(t<0){
    t=0;
  }
  if(t===0){
    document.getElementById('tBar').style.opacity=0.5;
  }else{
    document.getElementById('tBar').style.opacity=1;
  }
  document.getElementById('boosterFlame0').style.opacity=t/22.5;
//overlay
  document.getElementById('tContainer').style.left = 0.02*screenHeight+'px';
  document.getElementById('tContainer').style.width = 0.02*screenHeight+'px';
  document.getElementById('tContainer').style.padding = 0.02*screenHeight+'px';
  document.getElementById('tBar').style.left = 0.03*screenHeight+'px';
  document.getElementById('tBar').style.width = 0.04*screenHeight+'px';
  document.getElementById('tBar').style.height = 0.04*screenHeight+t*0.01*screenHeight+'px';
}

window.setInterval(draw, 64);