var x = 0;
var y = 0;
var throttle = 0;
var opa = ((100000-y)/100000);
var quart = 0;
var screenHeight = window.innerHeight;
var tick = 0;

var t = [350000,1000]; //thrust of [stage]
var f = [23800,800]; //fuel of [stage]
var m = [(f[0]+5500),(f[1]+1000)]; //mass of [stage]

var mTotal = m[0]+m[1]; //total mass

var g = 9.8; //gravity

var v = 0; //velocity

var s = 0; //stage

function draw() {
  
  if(f[s]>0){
    f[s] = f[s]-(throttle*10.88);
    if(y<0){
      v=0;
    }else{
      v = v + ((throttle*t[s])/mTotal) - g;
    }
  }else{
    f[s] = 0;
    v = v-g;
  }
  
  
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
  }

//throttle
  tick=0;
  document.addEventListener(
    "keydown",
    function(e){
      if(tick===0){
        if(e.key==='ArrowUp' && throttle<1){
          throttle=throttle+0.1;
          tick++;
        }
        if(e.key==='ArrowDown' && throttle>0){
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
  
//altitude
  if(y<0){
    y = 0;
  }else{
    y = y + v*8/125;
  }
//overlay
  document.getElementById('tContainer').style.left = 0.02*screenHeight+'px';
  document.getElementById('tContainer').style.width = 0.02*screenHeight+'px';
  document.getElementById('tContainer').style.padding = 0.02*screenHeight+'px';
  document.getElementById('tBar').style.left = 0.03*screenHeight+'px';
  document.getElementById('tBar').style.width = 0.04*screenHeight+'px';
  document.getElementById('tBar').style.height = 0.04*screenHeight+throttle*0.2275*screenHeight+'px';
  document.getElementById('yContainer').innerHTML = 'altitude: '+Math.round(y)+' m';
  document.getElementById('vContainer').innerHTML = 'velocity: '+Math.round(v)+' m/s';
  document.getElementById('fContainer').innerHTML = 'fuel: '+Math.round(f[s]/238)+'%';
}

function aoeu(){
  alert(y+','+v);
}
window.setInterval(draw, 64);
// window.setInterval(aoeu, 3000);