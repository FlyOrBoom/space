var frameRate = 0.03; //frameRateamerate

var x = 0; //extranneous
var y = 0; //height
var rotation = 0; //rotate
var throttle = 0; //self-explanatory
var opa = ((100000-y)/100000); //opacity
var quart = 0; //quarter of thing
var screenHeight = window.innerHeight;
var tick = 0; //counter
var tock = 0;

var t = [350000,1000]; //thrust of [stage]
var f = [23800,800]; //fuel of [stage]
var m = [(f[0]+5500),(f[1]+1000)]; //mass of [stage]

var angle = 0;

var mTotal = m[0]+m[1]; //total mass

var cd = 0.47;
var rho = 1.22;

var g = 9.8; //gravity

var v = 0;
var vx = 0;
var vy = 0;

var s = 0; //stage

var met = 0;

var start = false;

function draw() {
  
  if(f[s]>0){
    f[s] = f[s]-(throttle*110*frameRate);
    m = [(f[0]+5500),(f[1]+1000)];
    mTotal = m[0]+m[1];
    if(y<0){
      vy = 0;
    }else{
      vx = vx + Math.sin(rotation)*((throttle*t[s])/mTotal)*frameRate;
      vy = vy + (Math.cos(rotation)*((throttle*t[s])/mTotal)-g)*frameRate;
    }
  }else{
    f[s] = 0;
    t[s] = 0;
    if(y<0){
      vy=0;
    }else{
      vy = vy-(g*frameRate);
    }
  }
  
//altitude
  if(y<0){
    y = 0;
  }else{
    y = y + vy*frameRate;
  }
  
//screen

  screenHeight = window.innerHeight;

//ground
  if(y>=0){
    document.getElementById('pad').style = 'transform:translate(0,'+5*y+'px)';
  }
  
  
//opa
  opa = ((100000-y)/100000);
  // console.log(opa);
  document.getElementById('sky0').style.opacity = opa;
  document.getElementById('sky1').style.opacity = opa;
  document.getElementById('sky2').style.opacity = 0.1*opa;
  document.getElementById('capsule0').style.opacity = opa;
  document.getElementById('booster0').style.opacity = opa;
  
//flame
  if(f[0]>0){
    if(quart===0){
      document.getElementById('fa').style.opacity = 1;
      document.getElementById('fb').style.opacity = 0;
      document.getElementById('fc').style.opacity = 0;
      document.getElementById('fd').style.opacity = 0;
      document.getElementById('shake0').style = 'transform:translate(0,0)';
      document.getElementById('shake1').style = 'transform:translate(0,0)';
      quart++;
    }else if(quart===1){
      document.getElementById('fa').style.opacity = 0;
      document.getElementById('fb').style.opacity = 1;
      document.getElementById('fc').style.opacity = 0;
      document.getElementById('fd').style.opacity = 0;
      document.getElementById('shake0').style = 'transform:translate('+0.5*-throttle+'px,0)';
      document.getElementById('shake1').style = 'transform:translate('+0.5*-throttle+'px,0)';
      quart++;
    }else if(quart===2){
      document.getElementById('fa').style.opacity = 0;
      document.getElementById('fb').style.opacity = 0;
      document.getElementById('fc').style.opacity = 1;
      document.getElementById('fd').style.opacity = 0;
      quart++;
      document.getElementById('shake0').style = 'transform:translate(0,0)';
      document.getElementById('shake1').style = 'transform:translate(0,0)';
    }else{
      document.getElementById('fa').style.opacity = 0;
      document.getElementById('fb').style.opacity = 0;
      document.getElementById('fc').style.opacity = 0;
      document.getElementById('fd').style.opacity = 1;
      document.getElementById('shake0').style = 'transform:translate('+0.5*throttle+'px,0)';
      document.getElementById('shake1').style = 'transform:translate('+0.5*throttle+'px,0)';
      quart=0;
    }
  }else{
    document.getElementById('fa').style.opacity = 0;
    document.getElementById('fb').style.opacity = 0;
    document.getElementById('fc').style.opacity = 0;
    document.getElementById('fd').style.opacity = 0;
    document.getElementById('shake0').style = 'transform:translate(0,0)';
    document.getElementById('shake1').style = 'transform:translate(0,0)';
  }

//throttle
  tick=0;
  document.addEventListener(
    "keydown",
    function(e){
      if(tick===0){
        if(e.key=='ArrowUp' && throttle<1){
          throttle=throttle+0.1;
          tick++;
        }
        if(e.key=='ArrowDown' && throttle>0){
          throttle=throttle-0.1;
          tick++;
        }
      }
    }, false
  );
  if(throttle>1){
    throttle=1;
  }
  if(throttle<0){
    throttle=0;
  }
  if(throttle===0){
    document.getElementById('tBar').style.opacity=0.5;
  }else{
    document.getElementById('tBar').style.opacity=1;
  }
  document.getElementById('boosterFlame0').style.opacity=throttle;
  
//rotate
  document.addEventListener(
    'keydown',
    function(e){
      if(e.key=='ArrowLeft'){
        rotation-=throttle*0.0001+0.00005;
      }else if(e.key=='ArrowRight'){
        rotation+=throttle*0.0001+0.00005;
      }
    }, false
  );
  document.getElementById('rocket').style='transform:translate(-37.5px,'+(screenHeight-605)+'px) rotate('+rotation+'rad)';
  
//overlay
  document.getElementById('tContainer').style.left = 0.02*screenHeight+'px';
  document.getElementById('tContainer').style.width = 0.02*screenHeight+'px';
  document.getElementById('tContainer').style.padding = 0.02*screenHeight+'px';
  document.getElementById('tBar').style.left = frameRate*screenHeight+'px';
  document.getElementById('tBar').style.width = 0.04*screenHeight+'px';
  document.getElementById('tBar').style.height = 0.04*screenHeight+throttle*0.2275*screenHeight+'px';
  if(y>0){
    document.getElementById('yContainer').innerHTML = 'altitude: '+Math.round(y)+' m';
  }else{
    document.getElementById('yContainer').innerHTML = 'altitude: 0 m';
  }
  if(vy>0||vy<-1){
    document.getElementById('vContainer').innerHTML = 'velocity: '+Math.round(vy)+' m/s';
  }else{
    document.getElementById('vContainer').innerHTML = 'velocity: 0 m/s';
  }
  document.getElementById('fContainer').innerHTML = 'fuel: '+Math.round(f[s]/238)+'%';
  
  if(throttle>0){
    start = true;
  }
  if(start===true){
    met=met+frameRate;
  }
  
  document.getElementById('metContainer').innerHTML = 'mission elapsed time: '+Math.round(met)+'s';
}

function aoeu(){
  alert(mouseDown);
}
window.setInterval(draw,100/3);
// window.setInterval(aoeu, 3000);