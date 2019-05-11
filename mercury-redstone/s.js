var frameRate = 0.03; //frameRateamerate

var x = 0;
var y = 0; //height
var rotation = 0; //rotate
var throttle = 0; //self-explanatory
var opa = ((100000-y)/100000); //opacity
var quart = 0; //quarter of thing
var screenHeight = window.innerHeight;
var screenWidth = window.innerWidth;
var tick = 0; //counter
var tock = 0;

var t = [350000,1000]; //thrust of [stage]
var f = [23800,800]; //fuel of [stage]
var m = [(f[0]+5500),(f[1]+1000)]; //mass of [stage]

var angle = 0;

var mTotal = m[0]+m[1]; //total mass

var cd = 1.5;
var rho = 1.22;

var g = 9.8; //gravity

var v = 0;
var vx = 0;
var vy = 0;

var s = 0; //stage

var met = 0;
var min;
var sec;
var finalTime = 0;

var start = false;

function draw() {
  
  if(f[s]>0){
    f[s] = f[s]-(throttle*160*frameRate);
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
  
//position
  if(y<0&&vy>-10){
    y = 0;
  }else if(y<=(-0.5*vy)&&vy<=-5){
      document.getElementById('dead').style.display='block';
      y = 0;
      vy = 0;
      frameRate = 0;
  }else{
    y = y + vy*frameRate;
  }
  x = x+vx*frameRate;
  if(x<-250){
    x=700;
  }else if(x>700){
    x=-250;
  }
  
//screen

  screenHeight = window.innerHeight;
  screenWidth = window.innerWidth;

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
  document.getElementById('rocket').style='transform:translate('+(-37.5+200*Math.cos(rotation+1.5*Math.PI))+'px,'+(screenHeight-354+200*Math.sin(rotation+1.5*Math.PI))+'px) rotate('+rotation+'rad)';
  
//overlay
  document.getElementById('aDot').style.bottom = Math.sqrt(y/100000)*screenHeight+'px';
  document.getElementById('aDot').style.left = ((x/10000)+0.020)*screenWidth+'px';
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
  document.getElementById('fContainer').innerHTML = 'fuel: '+Math.ceil(f[s]/238)+'%';
  
  if(throttle>0){
    start = true;
  }
  if(start===true){
    met=met+frameRate;
  }
  
  min = Math.floor(Math.floor(met)/60);
  sec = Math.floor(met)-min*60;
  
  function str_pad_left(string,pad,length) {
    return (new Array(length+1).join(pad)+string).slice(-length);
  }
  
  finalTime = str_pad_left(min,'0',2)+':'+str_pad_left(sec,'0',2);
  
  document.getElementById('metContainer').innerHTML = finalTime;
}

document.getElementById('dead').style.display='none';

document.addEventListener(
  'keydown',
  function(e){
    if(e.key=='ArrowUp' && throttle<1){
      throttle+=0.1;
    }
    if(e.key=='ArrowDown' && throttle>0){
      throttle-=0.1;
    }
  }, false
);

document.addEventListener(
  'keydown',
  function(e){
    if(e.key=='ArrowLeft'){
      rotation-=throttle*0.0025+0.001*((100000-y)/100000);
      rotation-=throttle*0.0025+0.001*((100000-y)/100000);
    }else if(e.key=='ArrowRight'){
      rotation+=throttle*0.0025+0.001*((100000-y)/100000);
      rotation+=throttle*0.0025+0.001*((100000-y)/100000);
    }
  }, false
);

window.setInterval(draw,100/3);
// window.setInterval(aoeu, 3000);