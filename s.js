var frameRate = 0.03; //frameRate

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
var scale = 5; //meters per pixel
var tBar = [0,0]; //a "memory" of the throttle a frame before to prevent instataneus throttling

/*abbreviations
t: thrust
v: velocity
f: fuel
m: mass
y: y coordinate
x: x coordinate
a: altitude (map)
met: time
*/

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
  
//throttle

  if(tBar[1]>tBar[0]){
    if(tBar[1]>(tBar[0]+4)){
      tBar[0]+=2;
    }else{
      tBar[0]+=1;
    }
  }else if(tBar[1]<tBar[0]){
    if(tBar[1]<(tBar[0]-4)){
      tBar[0]-=2;
    }else{
      tBar[0]-=1;
    }
  }else{
    tBar[1] = document.getElementById('tBar').value;
  }
  document.getElementById('tBar').value = tBar[0];
  throttle = (tBar[0])/100;
  document.getElementById('debug').innerHTML = tBar;

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
  if(x>4250){
    document.getElementById('aDot').style.display='none';
  }else{
    document.getElementById('aDot').style.display='block';
  }
  
//screen

  screenHeight = window.innerHeight;
  screenWidth = window.innerWidth;

//ground
  if(y>=0){
    document.getElementById('pad').style = 'transform:translate(0,'+scale*y+'px)';
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
    document.getElementById('tContainer').style.opacity=0.5;
  }else{
    document.getElementById('tContainer').style.opacity=1;
  }
  document.getElementById('boosterFlame0').style.opacity=throttle;
  
//rotate
  document.getElementById('rocket').style='transform:translate('+(-37.5+200*Math.cos(rotation+1.5*Math.PI))+'px,'+(screenHeight-354+200*Math.sin(rotation+1.5*Math.PI))+'px) rotate('+rotation+'rad)';
  
//overlay
  document.getElementById('aDot').style.bottom = (Math.sqrt(y/100000))*screenHeight+'px';
  document.getElementById('aDot').style.left = (x/50000)*screenWidth+'px';
  document.getElementById('tContainer').style.height = 0.15*screenWidth+'px';
  document.getElementById('tContainer').style.bottom = 0.015*screenWidth+'px';
  document.getElementById('tActualBar').style.height = (throttle*0.1285+0.014)*screenWidth+'px';
  document.getElementById('tActualBar').style.bottom = 0.003*screenWidth+'px';
  if(y>9950){
    document.getElementById('yContainer').innerHTML = Math.floor(y/1000)+'&MediumSpace;km';
  }else if(y>999.5){
    document.getElementById('yContainer').innerHTML = Number.parseFloat(y/1000).toPrecision(2)+'&MediumSpace;km';
  }else if(y>0){
    document.getElementById('yContainer').innerHTML = Math.round(y)+'&MediumSpace;m';
  }else{
    document.getElementById('yContainer').innerHTML = '0&MediumSpace;m';
  }
  if(vy>0||vy<-1){
    document.getElementById('vContainer').innerHTML = 'velocity: '+Math.round(vy)+' m/s';
  }else{
    document.getElementById('vContainer').innerHTML = 'velocity: 0 m/s';
  }
  document.getElementById('fContainer').innerHTML = 'fuel: '+Math.ceil(f[s]/238)+'%';
  
  document.getElementById('yContainer').style.marginLeft = 0.06*screenHeight+'px';
  
  if(x>95000||x<-95000){
    document.getElementById('xContainer').innerHTML = Number.parseFloat(x/1000).toPrecision(3)+'&MediumSpace;km';
  }else if(x>999.5||x<-999.5){
    document.getElementById('xContainer').innerHTML = Number.parseFloat(x/1000).toPrecision(2)+'&MediumSpace;km';
  }else{
    document.getElementById('xContainer').innerHTML = Math.round(x)+'&MediumSpace;m';
  }
  
  if(y>70000){
    for(i=1;i<10;i++){
      document.getElementById('tick'+i).classList.remove('bgIndicator');
      document.getElementById('tick'+i).classList.add('bgSpace');
    }
    document.getElementById('xContainer').classList.remove('colorAir','bgAir');
    document.getElementById('xContainer').classList.add('colorSpace','bgNone');
    document.getElementById('yContainer').classList.remove('colorAir','bgAir');
    document.getElementById('yContainer').classList.add('colorSpace','bgNone');
    document.getElementById('overlay').classList.remove('colorAir','bgAir');
    document.getElementById('overlay').classList.add('colorSpace','bgNone');
    document.getElementById('xTickSymbol').classList.remove('fillAir');
    document.getElementById('xTickSymbol').classList.add('fillSpace');
    document.getElementById('yTickSymbol').classList.remove('fillAir');
    document.getElementById('yTickSymbol').classList.add('fillSpace');
    document.getElementById('tActualBar').classList.remove('bgWhite');
    document.getElementById('tActualBar').classList.add('bgSpace');
    document.getElementById('tContainer').classList.remove('bgIndicator');
    document.getElementById('tContainer').classList.add('bgNone');
  }else{
    for(i=1;i<10;i++){
      document.getElementById('tick'+i).classList.remove('bgSpace');
      document.getElementById('tick'+i).classList.add('bgIndicator');
    }
    document.getElementById('xContainer').classList.remove('colorSpace','bgNone');
    document.getElementById('xContainer').classList.add('colorAir','bgAir');
    document.getElementById('yContainer').classList.remove('colorSpace','bgNone');
    document.getElementById('yContainer').classList.add('colorAir','bgAir');
    document.getElementById('overlay').classList.remove('colorSpace','bgNone');
    document.getElementById('overlay').classList.add('colorAir','bgAir');
    document.getElementById('xTickSymbol').classList.remove('fillSpace');
    document.getElementById('xTickSymbol').classList.add('fillAir');
    document.getElementById('yTickSymbol').classList.remove('fillSpace');
    document.getElementById('yTickSymbol').classList.add('fillAir');
    document.getElementById('tActualBar').classList.remove('bgSpace');
    document.getElementById('tActualBar').classList.add('bgWhite');
    document.getElementById('tContainer').classList.remove('bgNone');
    document.getElementById('tContainer').classList.add('bgIndicator');
  }

  document.getElementById('yScroll').style.width=0.05*screenHeight+'px';
  document.getElementById('yScroll').style.height=0.4*screenWidth+'px';
  document.getElementById('yScroll').style.top=(screenHeight-0.4*screenWidth)/2+'px';
  
  document.getElementById('xTicks').style='transform:translate('+(-0.4*(x-(Math.floor(x/1000)*1000)))+'px,0)'
  document.getElementById('yTicks').style='transform:translate(0,'+0.4*(y-(Math.floor(y/1000)*1000))+'px)'
  
  tBarTarget = 0;
  
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
      document.getElementById('tBar').value=tBar[0]+10;
    }
    if(e.key=='ArrowDown' && throttle>0){
      document.getElementById('tBar').value=tBar[0]-10;
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

document.addEventListener(
  'keydown',
  function(e){
    if(e.key==='m'){
      if(tock===0){
        document.getElementById('aContainer').classList.remove('mapOff');
        document.getElementById('aContainer').classList.add('mapOn');
        document.getElementById('yScroll').classList.remove('mapOffScroll');
        document.getElementById('yScroll').classList.add('mapOnScroll');
        document.getElementById('yContainer').classList.remove('mapOffScroll');
        document.getElementById('yContainer').classList.add('mapOnScroll');
        tock--;
      }else{
        document.getElementById('aContainer').classList.remove('mapOn');
        document.getElementById('aContainer').classList.add('mapOff');
        document.getElementById('yScroll').classList.remove('mapOnScroll');
        document.getElementById('yScroll').classList.add('mapOffScroll');
        document.getElementById('yContainer').classList.remove('mapOnScroll');
        document.getElementById('yContainer').classList.add('mapOffScroll');
        tock++;
      }
    }
  }, false
);
document.getElementById('aContainer').addEventListener(
  'click',
  function(){
    document.getElementById('aContainer').classList.remove('mapOn');
    document.getElementById('aContainer').classList.add('mapOff');
    document.getElementById('yScroll').classList.remove('mapOnScroll');
    document.getElementById('yScroll').classList.add('mapOffScroll');
    document.getElementById('yContainer').classList.remove('mapOnScroll');
    document.getElementById('yContainer').classList.add('mapOffScroll');
    tock++;
  }, false
);

window.setInterval(draw,1/frameRate);
// window.setInterval(aoeu, 3000);