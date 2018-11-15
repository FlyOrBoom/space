var a = 0;
var b = 0;
var c = 0;
var n1 = 0;
var n2 = 0;
var n3 = 0;
var A = 0;
var B = 0;
var C = 0;
var d = 0;
var e = 0;
var f = 0;

var x = 0;

var z = 0;

var i = 0;

var on = [];

var vis = ["a1Ad", "a1Ae", "a1Af",
           "a1Bd", "a1Be", "a1Bf",
           "a1Cd", "a1Ce", "a1Cf",
           
           "a2Ad", "a2Ae", "a2Af",
           "a2Bd", "a2Be", "a2Bf",
           "a2Cd", "a2Ce", "a2Cf",
           
           "a3Ad", "a3Ae", "a3Af",
           "a3Bd", "a3Be", "a3Bf",
           "a3Cd", "a3Ce", "a3Cf",
           
           "b1Ad", "b1Ae", "b1Af",
           "b1Bd", "b1Be", "b1Bf",
           "b1Cd", "b1Ce", "b1Cf",
           
           "b2Ad", "b2Ae", "b2Af",
           "b2Bd", "b2Be", "b2Bf",
           "b2Cd", "b2Ce", "b2Cf",
           
           "b3Ad", "b3Ae", "b3Af",
           "b3Bd", "b3Be", "b3Bf",
           "b3Cd", "b3Ce", "b3Cf",
           
           "c1Ad", "c1Ae", "c1Af",
           "c1Bd", "c1Be", "c1Bf",
           "c1Cd", "c1Ce", "c1Cf",
           
           "c2Ad", "c2Ae", "c2Af",
           "c2Bd", "c2Be", "c2Bf",
           "c2Cd", "c2Ce", "c2Cf",
           
           "c3Ad", "c3Ae", "c3Af",
           "c3Bd", "c3Be", "c3Bf",
           "c3Cd", "c3Ce", "c3Cf"];

var r0 = 0;
var r1 = 0;
var r2 = 0;
var r3 = 0;
var r4 = 0;
var r5 = 0;
var r6 = 0;
var r7 = 0;
var r8 = 0;
var r9 = 0;
var rA = 0;
var rB = 0;

var a1Ad = 0; var a1Ae = 0; var a1Af = 0;
var a1Bd = 0; var a1Be = 0; var a1Bf = 0;
var a1Cd = 0; var a1Ce = 0; var a1Cf = 0;

var a2Ad = 0; var a2Ae = 0; var a2Af = 0;
var a2Bd = 0; var a2Be = 0; var a2Bf = 0;
var a2Cd = 0; var a2Ce = 0; var a2Cf = 0;

var a3Ad = 0; var a3Ae = 0; var a3Af = 0;
var a3Bd = 0; var a3Be = 0; var a3Bf = 0;
var a3Cd = 0; var a3Ce = 0; var a3Cf = 0;

var b1Ad = 0; var b1Ae = 0; var b1Af = 0;
var b1Bd = 0; var b1Be = 0; var b1Bf = 0;
var b1Cd = 0; var b1Ce = 0; var b1Cf = 0;

var b2Ad = 0; var b2Ae = 0; var b2Af = 0;
var b2Bd = 0; var b2Be = 0; var b2Bf = 0;
var b2Cd = 0; var b2Ce = 0; var b2Cf = 0;

var b3Ad = 0; var b3Ae = 0; var b3Af = 0;
var b3Bd = 0; var b3Be = 0; var b3Bf = 0;
var b3Cd = 0; var b3Ce = 0; var b3Cf = 0;

var c1Ad = 0; var c1Ae = 0; var c1Af = 0;
var c1Bd = 0; var c1Be = 0; var c1Bf = 0;
var c1Cd = 0; var c1Ce = 0; var c1Cf = 0;

var c2Ad = 0; var c2Ae = 0; var c2Af = 0;
var c2Bd = 0; var c2Be = 0; var c2Bf = 0;
var c2Cd = 0; var c2Ce = 0; var c2Cf = 0;

var c3Ad = 0; var c3Ae = 0; var c3Af = 0;
var c3Bd = 0; var c3Be = 0; var c3Bf = 0;
var c3Cd = 0; var c3Ce = 0; var c3Cf = 0;

function hide(idd){
    document.getElementById(idd).style.display = "none";
}
function open(idd){
    document.getElementById(idd).style.display = "inline-block";
}

function clear() {

    hide("a1Ad"); hide("a1Ae"); hide("a1Af");
    hide("a1Bd"); hide("a1Be"); hide("a1Bf");
    hide("a1Cd"); hide("a1Ce"); hide("a1Cf");

    hide("a2Ad"); hide("a2Ae"); hide("a2Af");
    hide("a2Bd"); hide("a2Be"); hide("a2Bf");
    hide("a2Cd"); hide("a2Ce"); hide("a2Cf");

    hide("a3Ad"); hide("a3Ae"); hide("a3Af");
    hide("a3Bd"); hide("a3Be"); hide("a3Bf");
    hide("a3Cd"); hide("a3Ce"); hide("a3Cf");

    hide("b1Ad"); hide("b1Ae"); hide("b1Af");
    hide("b1Bd"); hide("b1Be"); hide("b1Bf");
    hide("b1Cd"); hide("b1Ce"); hide("b1Cf");

    hide("b2Ad"); hide("b2Ae"); hide("b2Af");
    hide("b2Bd"); hide("b2Be"); hide("b2Bf");
    hide("b2Cd"); hide("b2Ce"); hide("b2Cf");

    hide("b3Ad"); hide("b3Ae"); hide("b3Af");
    hide("b3Bd"); hide("b3Be"); hide("b3Bf");
    hide("b3Cd"); hide("b3Ce"); hide("b3Cf");

    hide("c1Ad"); hide("c1Ae"); hide("c1Af");
    hide("c1Bd"); hide("c1Be"); hide("c1Bf");
    hide("c1Cd"); hide("c1Ce"); hide("c1Cf");

    hide("c2Ad"); hide("c2Ae"); hide("c2Af");
    hide("c2Bd"); hide("c2Be"); hide("c2Bf");
    hide("c2Cd"); hide("c2Ce"); hide("c2Cf");

    hide("c3Ad"); hide("c3Ae"); hide("c3Af");
    hide("c3Bd"); hide("c3Be"); hide("c3Bf");
    hide("c3Cd"); hide("c3Ce"); hide("c3Cf");
}

function r() {
    r0 = Math.floor(Math.random() * 81);
    r1 = Math.floor(Math.random() * 81);
    r2 = Math.floor(Math.random() * 81);
    r3 = Math.floor(Math.random() * 81);
    r4 = Math.floor(Math.random() * 81);
    r5 = Math.floor(Math.random() * 81);
    r6 = Math.floor(Math.random() * 81);
    r7 = Math.floor(Math.random() * 81);
    r8 = Math.floor(Math.random() * 81);
    r9 = Math.floor(Math.random() * 81);
    rA = Math.floor(Math.random() * 81);
    rB = Math.floor(Math.random() * 81);
}

function rand() {
  r();
    while(r0=== r1 || r0=== r2 || r0=== r3 || r0=== r4 || r0=== r5 || r0=== r6 || r0=== r7 || r0=== r8 || r0=== r9 || r0=== rA || r0=== rB ||
          r1=== r2 || r1=== r3 || r1=== r4 || r1=== r5 || r1=== r6 || r1=== r7 || r1=== r8 || r1=== r9 || r1=== rA || r1=== rB ||
          r2=== r3 || r2=== r4 || r2=== r5 || r2=== r6 || r2=== r7 || r2=== r8 || r2=== r9 || r2=== rA || r2=== rB ||
          r3=== r4 || r3=== r5 || r3=== r6 || r3=== r7 || r3=== r8 || r3=== r9 || r3=== rA || r3=== rB ||
          r4=== r5 || r4=== r6 || r4=== r7 || r4=== r8 || r4=== r9 || r4=== rA || r4=== rB ||
          r5=== r6 || r5=== r7 || r5=== r8 || r5=== r9 || r5=== rA || r5=== rB ||
          r6=== r7 || r6=== r8 || r6=== r9 || r6=== rA || r6=== rB ||
          r7=== r8 || r7=== r9 || r7=== rA || r7=== rB ||
          r8=== r9 || r8=== rA || r8=== rB ||
          r9=== rA || r9=== rB ||
          rA=== rB){
        r();
    }
}
function display() {
  rand();
    open(vis[r0]);
    open(vis[r1]);
    open(vis[r2]);
    open(vis[r3]);
    open(vis[r4]);
    open(vis[r5]);
    open(vis[r6]);
    open(vis[r7]);
    open(vis[r8]);
    open(vis[r9]);
    open(vis[rA]);
    open(vis[rB]);
    
    // alert(r0+" "+r1+" "+r2+" "+r3+" "+r4+" "+r5+" "+r6+" "+r7+" "+r8+" "+r9+" "+rA+" "+rB);
}

function size(idd) {
    document.getElementById(idd).style.transform = "scale(1,1)";
}

function zero() {
    a = 0;
    b = 0;
    c = 0;
    n1 = 0;
    n2 = 0;
    n3 = 0;
    A = 0;
    B = 0;
    C = 0;
    d = 0;
    e = 0;
    f = 0;

    x = 0;

    i=0;

    a1Ad = 0; a1Ae = 0; a1Af = 0;
    a1Bd = 0; a1Be = 0; a1Bf = 0;
    a1Cd = 0; a1Ce = 0; a1Cf = 0;

    a2Ad = 0; a2Ae = 0; a2Af = 0;
    a2Bd = 0; a2Be = 0; a2Bf = 0;
    a2Cd = 0; a2Ce = 0; a2Cf = 0;

    a3Ad = 0; a3Ae = 0; a3Af = 0;
    a3Bd = 0; a3Be = 0; a3Bf = 0;
    a3Cd = 0; a3Ce = 0; a3Cf = 0;

    b1Ad = 0; b1Ae = 0; b1Af = 0;
    b1Bd = 0; b1Be = 0; b1Bf = 0;
    b1Cd = 0; b1Ce = 0; b1Cf = 0;

    b2Ad = 0; b2Ae = 0; b2Af = 0;
    b2Bd = 0; b2Be = 0; b2Bf = 0;
    b2Cd = 0; b2Ce = 0; b2Cf = 0;

    b3Ad = 0; b3Ae = 0; b3Af = 0;
    b3Bd = 0; b3Be = 0; b3Bf = 0;
    b3Cd = 0; b3Ce = 0; b3Cf = 0;

    c1Ad = 0; c1Ae = 0; c1Af = 0;
    c1Bd = 0; c1Be = 0; c1Bf = 0;
    c1Cd = 0; c1Ce = 0; c1Cf = 0;

    c2Ad = 0; c2Ae = 0; c2Af = 0;
    c2Bd = 0; c2Be = 0; c2Bf = 0;
    c2Cd = 0; c2Ce = 0; c2Cf = 0;

    c3Ad = 0; c3Ae = 0; c3Af = 0;
    c3Bd = 0; c3Be = 0; c3Bf = 0;
    c3Cd = 0; c3Ce = 0; c3Cf = 0;

    size("a1Ad"); size("a1Ae"); size("a1Af");
    size("a1Bd"); size("a1Be"); size("a1Bf");
    size("a1Cd"); size("a1Ce"); size("a1Cf");

    size("a2Ad"); size("a2Ae"); size("a2Af");
    size("a2Bd"); size("a2Be"); size("a2Bf");
    size("a2Cd"); size("a2Ce"); size("a2Cf");

    size("a3Ad"); size("a3Ae"); size("a3Af");
    size("a3Bd"); size("a3Be"); size("a3Bf");
    size("a3Cd"); size("a3Ce"); size("a3Cf");

    size("b1Ad"); size("b1Ae"); size("b1Af");
    size("b1Bd"); size("b1Be"); size("b1Bf");
    size("b1Cd"); size("b1Ce"); size("b1Cf");

    size("b2Ad"); size("b2Ae"); size("b2Af");
    size("b2Bd"); size("b2Be"); size("b2Bf");
    size("b2Cd"); size("b2Ce"); size("b2Cf");

    size("b3Ad"); size("b3Ae"); size("b3Af");
    size("b3Bd"); size("b3Be"); size("b3Bf");
    size("b3Cd"); size("b3Ce"); size("b3Cf");

    size("c1Ad"); size("c1Ae"); size("c1Af");
    size("c1Bd"); size("c1Be"); size("c1Bf");
    size("c1Cd"); size("c1Ce"); size("c1Cf");

    size("c2Ad"); size("c2Ae"); size("c2Af");
    size("c2Bd"); size("c2Be"); size("c2Bf");
    size("c2Cd"); size("c2Ce"); size("c2Cf");

    size("c3Ad"); size("c3Ae"); size("c3Af");
    size("c3Bd"); size("c3Be"); size("c3Bf");
    size("c3Cd"); size("c3Ce"); size("c3Cf");
    
    on=[];
}

function yay() {
    z++;
    if (z === 1||z === -1) {
        document.getElementById("z").innerHTML = z + " point";
    } else {
        document.getElementById("z").innerHTML = z + " points";
    }
}
function oof() {
    z--;
    if (z === 1||z === -1) {
        document.getElementById("z").innerHTML = z + " point";
    } else {
        document.getElementById("z").innerHTML = z + " points";
    }
}
function color() {
    if (z < 0) {
        document.getElementById("z").style.color="#d44";
    }
    else if (z > 0) {
        document.getElementById("z").style.color="#4b4";
    }
    else {
        document.getElementById("z").style.color="#44c";
    }
}
function score(varr) {
    document.getElementById(varr).style.transform = "scale(0.9,0.9)";
    on.push(varr);
    if (x === 3) {
        if (
            ((a === 3 || b === 3 || c === 3) || ((a === b) && (b === c )))&&
            ((n1=== 3 || n2=== 3 || n3=== 3) || ((n1=== n2)&& (n2=== n3)))&&
            ((A === 3 || B === 3 || C === 3) || ((A === B) && (B === C )))&&
            ((d === 3 || e === 3 || f === 3) || ((d === e) && (e === f )))
        ){
            yay();
        } else {
            oof();
        }
        color();
        hide(on[0]);
        hide(on[1]);
        hide(on[2]);
        open(vis[r0]);
        open(vis[r1]);
        open(vis[r2]);
        zero();
    }
}

color();
clear();
display();

document.getElementById("reset").onclick = function reset() {
    z = 0;
    zero();
    color();
    document.getElementById("z").innerHTML = z + " points";
    clear();
    display();
}

/*Red megagroup*/
//1A//
document.getElementById("a1Ad").onclick = function() {
    if (a1Ad === 0) {
        a++;
        n1++;
        A++;
        d++;
        a1Ad++;
        x++;
        score("a1Ad");
    }
}
document.getElementById("a1Ae").onclick = function() {
    if (a1Ae === 0) {
        a++;
        n1++;
        A++;
        e++;
        a1Ae++;
        x++;
        score("a1Ae");
    }
}
document.getElementById("a1Af").onclick = function() {
    if (a1Af === 0) {
        a++;
        n1++;
        A++;
        f++;
        a1Af++;
        x++;
        score("a1Af");
    }
}
//1B//
document.getElementById("a1Bd").onclick = function() {
    if (a1Bd === 0) {
        a++;
        n1++;
        B++;
        d++;
        a1Bd++;
        x++;
        score("a1Bd");
    }
}
document.getElementById("a1Be").onclick = function() {
    if (a1Be === 0) {
        a++;
        n1++;
        B++;
        e++;
        a1Be++;
        x++;
        score("a1Be");
    }
}
document.getElementById("a1Bf").onclick = function() {
    if (a1Bf === 0) {
        a++;
        n1++;
        B++;
        f++;
        a1Bf++;
        x++;
        score("a1Bf");
    }
}
//1C//
document.getElementById("a1Cd").onclick = function() {
    if (a1Cd === 0) {
        a++;
        n1++;
        C++;
        d++;
        a1Cd++;
        x++;
        score("a1Cd");
    }
}
document.getElementById("a1Ce").onclick = function() {
    if (a1Ce === 0) {
        a++;
        n1++;
        C++;
        e++;
        a1Ce++;
        x++;
        score("a1Ce");
    }
}
document.getElementById("a1Cf").onclick = function() {
    if (a1Cf === 0) {
        a++;
        n1++;
        C++;
        f++;
        a1Cf++;
        x++;
        score("a1Cf");
    }
}
//2A//
document.getElementById("a2Ad").onclick = function() {
    if (a2Ad === 0) {
        a++;
        n2++;
        A++;
        d++;
        a2Ad++;
        x++;
        score("a2Ad");
    }
}
document.getElementById("a2Ae").onclick = function() {
    if (a2Ae === 0) {
        a++;
        n2++;
        A++;
        e++;
        a2Ae++;
        x++;
        score("a2Ae");
    }
}
document.getElementById("a2Af").onclick = function() {
    if (a2Af === 0) {
        a++;
        n2++;
        A++;
        f++;
        a2Af++;
        x++;
        score("a2Af");
    }
}
//2B//
document.getElementById("a2Bd").onclick = function() {
    if (a2Bd === 0) {
        a++;
        n2++;
        B++;
        d++;
        a2Bd++;
        x++;
        score("a2Bd");
    }
}
document.getElementById("a2Be").onclick = function() {
    if (a2Be === 0) {
        a++;
        n2++;
        B++;
        e++;
        a2Be++;
        x++;
        score("a2Be");
    }
}
document.getElementById("a2Bf").onclick = function() {
    if (a2Bf === 0) {
        a++;
        n2++;
        B++;
        f++;
        a2Bf++;
        x++;
        score("a2Bf");
    }
}
//2C//
document.getElementById("a2Cd").onclick = function() {
    if (a2Cd === 0) {
        a++;
        n2++;
        C++;
        d++;
        a2Cd++;
        x++;
        score("a2Cd");
    }
}
document.getElementById("a2Ce").onclick = function() {
    if (a2Ce === 0) {
        a++;
        n2++;
        C++;
        e++;
        a2Ce++;
        x++;
        score("a2Ce");
    }
}
document.getElementById("a2Cf").onclick = function() {
    if (a2Cf === 0) {
        a++;
        n2++;
        C++;
        f++;
        a2Cf++;
        x++;
        score("a2Cf");
    }
}
//3A//
document.getElementById("a3Ad").onclick = function() {
    if (a3Ad === 0) {
        a++;
        n3++;
        A++;
        d++;
        a3Ad++;
        x++;
        score("a3Ad");
    }
}
document.getElementById("a3Ae").onclick = function() {
    if (a3Ae === 0) {
        a++;
        n3++;
        A++;
        e++;
        a3Ae++;
        x++;
        score("a3Ae");
    }
}
document.getElementById("a3Af").onclick = function() {
    if (a3Af === 0) {
        a++;
        n3++;
        A++;
        f++;
        a3Af++;
        x++;
        score("a3Af");
    }
}
//3B//
document.getElementById("a3Bd").onclick = function() {
    if (a3Bd === 0) {
        a++;
        n3++;
        B++;
        d++;
        a3Bd++;
        x++;
        score("a3Bd");
    }
}
document.getElementById("a3Be").onclick = function() {
    if (a3Be === 0) {
        a++;
        n3++;
        B++;
        e++;
        a3Be++;
        x++;
        score("a3Be");
    }
}
document.getElementById("a3Bf").onclick = function() {
    if (a3Bf === 0) {
        a++;
        n3++;
        B++;
        f++;
        a3Bf++;
        x++;
        score("a3Bf");
    }
}
//3C//
document.getElementById("a3Cd").onclick = function() {
    if (a3Cd === 0) {
        a++;
        n3++;
        C++;
        d++;
        a3Cd++;
        x++;
        score("a3Cd");
    }
}
document.getElementById("a3Ce").onclick = function() {
    if (a3Ce === 0) {
        a++;
        n3++;
        C++;
        e++;
        a3Ce++;
        x++;
        score("a3Ce");
    }
}
document.getElementById("a3Cf").onclick = function() {
    if (a3Cf === 0) {
        a++;
        n3++;
        C++;
        f++;
        a3Cf++;
        x++;
        score("a3Cf");
    }
}
/*Green megagroup*/
//1A//
document.getElementById("b1Ad").onclick = function() {
    if (b1Ad === 0) {
        b++;
        n1++;
        A++;
        d++;
        b1Ad++;
        x++;
        score("b1Ad");
    }
}
document.getElementById("b1Ae").onclick = function() {
    if (b1Ae === 0) {
        b++;
        n1++;
        A++;
        e++;
        b1Ae++;
        x++;
        score("b1Ae");
    }
}
document.getElementById("b1Af").onclick = function() {
    if (b1Af === 0) {
        b++;
        n1++;
        A++;
        f++;
        b1Af++;
        x++;
        score("b1Af");
    }
}
//1B//
document.getElementById("b1Bd").onclick = function() {
    if (b1Bd === 0) {
        b++;
        n1++;
        B++;
        d++;
        b1Bd++;
        x++;
        score("b1Bd");
    }
}
document.getElementById("b1Be").onclick = function() {
    if (b1Be === 0) {
        b++;
        n1++;
        B++;
        e++;
        b1Be++;
        x++;
        score("b1Be");
    }
}
document.getElementById("b1Bf").onclick = function() {
    if (b1Bf === 0) {
        b++;
        n1++;
        B++;
        f++;
        b1Bf++;
        x++;
        score("b1Bf");
    }
}
//1C//
document.getElementById("b1Cd").onclick = function() {
    if (b1Cd === 0) {
        b++;
        n1++;
        C++;
        d++;
        b1Cd++;
        x++;
        score("b1Cd");
    }
}
document.getElementById("b1Ce").onclick = function() {
    if (b1Ce === 0) {
        b++;
        n1++;
        C++;
        e++;
        b1Ce++;
        x++;
        score("b1Ce");
    }
}
document.getElementById("b1Cf").onclick = function() {
    if (b1Cf === 0) {
        b++;
        n1++;
        C++;
        f++;
        b1Cf++;
        x++;
        score("b1Cf");
    }
}
//2A//
document.getElementById("b2Ad").onclick = function() {
    if (b2Ad === 0) {
        b++;
        n2++;
        A++;
        d++;
        b2Ad++;
        x++;
        score("b2Ad");
    }
}
document.getElementById("b2Ae").onclick = function() {
    if (b2Ae === 0) {
        b++;
        n2++;
        A++;
        e++;
        b2Ae++;
        x++;
        score("b2Ae");
    }
}
document.getElementById("b2Af").onclick = function() {
    if (b2Af === 0) {
        b++;
        n2++;
        A++;
        f++;
        b2Af++;
        x++;
        score("b2Af");
    }
}
//2B//
document.getElementById("b2Bd").onclick = function() {
    if (b2Bd === 0) {
        b++;
        n2++;
        B++;
        d++;
        b2Bd++;
        x++;
        score("b2Bd");
    }
}
document.getElementById("b2Be").onclick = function() {
    if (b2Be === 0) {
        b++;
        n2++;
        B++;
        e++;
        b2Be++;
        x++;
        score("b2Be");
    }
}
document.getElementById("b2Bf").onclick = function() {
    if (b2Bf === 0) {
        b++;
        n2++;
        B++;
        f++;
        b2Bf++;
        x++;
        score("b2Bf");
    }
}
//2C//
document.getElementById("b2Cd").onclick = function() {
    if (b2Cd === 0) {
        b++;
        n2++;
        C++;
        d++;
        b2Cd++;
        x++;
        score("b2Cd");
    }
}
document.getElementById("b2Ce").onclick = function() {
    if (b2Ce === 0) {
        b++;
        n2++;
        C++;
        e++;
        b2Ce++;
        x++;
        score("b2Ce");
    }
}
document.getElementById("b2Cf").onclick = function() {
    if (b2Cf === 0) {
        b++;
        n2++;
        C++;
        f++;
        b2Cf++;
        x++;
        score("b2Cf");
    }
}
//3A//
document.getElementById("b3Ad").onclick = function() {
    if (b3Ad === 0) {
        b++;
        n3++;
        A++;
        d++;
        b3Ad++;
        x++;
        score("b3Ad");
    }
}
document.getElementById("b3Ae").onclick = function() {
    if (b3Ae === 0) {
        b++;
        n3++;
        A++;
        e++;
        b3Ae++;
        x++;
        score("b3Ae");
    }
}
document.getElementById("b3Af").onclick = function() {
    if (b3Af === 0) {
        b++;
        n3++;
        A++;
        f++;
        b3Af++;
        x++;
        score("b3Af");
    }
}
//3B//
document.getElementById("b3Bd").onclick = function() {
    if (b3Bd === 0) {
        b++;
        n3++;
        B++;
        d++;
        b3Bd++;
        x++;
        score("b3Bd");
    }
}
document.getElementById("b3Be").onclick = function() {
    if (b3Be === 0) {
        b++;
        n3++;
        B++;
        e++;
        b3Be++;
        x++;
        score("b3Be");
    }
}
document.getElementById("b3Bf").onclick = function() {
    if (b3Bf === 0) {
        b++;
        n3++;
        B++;
        f++;
        b3Bf++;
        x++;
        score("b3Bf");
    }
}
//3C//
document.getElementById("b3Cd").onclick = function() {
    if (b3Cd === 0) {
        b++;
        n3++;
        C++;
        d++;
        b3Cd++;
        x++;
        score("b3Cd");
    }
}
document.getElementById("b3Ce").onclick = function() {
    if (b3Ce === 0) {
        b++;
        n3++;
        C++;
        e++;
        b3Ce++;
        x++;
        score("b3Ce");
    }
}
document.getElementById("b3Cf").onclick = function() {
    if (b3Cf === 0) {
        b++;
        n3++;
        C++;
        f++;
        b3Cf++;
        x++;
        score("b3Cf");
    }
}
/*Blue megagroup*/
//1A//
document.getElementById("c1Ad").onclick = function() {
    if (c1Ad === 0) {
        c++;
        n1++;
        A++;
        d++;
        c1Ad++;
        x++;
        score("c1Ad");
    }
}
document.getElementById("c1Ae").onclick = function() {
    if (c1Ae === 0) {
        c++;
        n1++;
        A++;
        e++;
        c1Ae++;
        x++;
        score("c1Ae");
    }
}
document.getElementById("c1Af").onclick = function() {
    if (c1Af === 0) {
        c++;
        n1++;
        A++;
        f++;
        c1Af++;
        x++;
        score("c1Af");
    }
}
//1B//
document.getElementById("c1Bd").onclick = function() {
    if (c1Bd === 0) {
        c++;
        n1++;
        c++;
        d++;
        c1Bd++;
        x++;
        score("c1Bd");
    }
}
document.getElementById("c1Be").onclick = function() {
    if (c1Be === 0) {
        c++;
        n1++;
        c++;
        e++;
        c1Be++;
        x++;
        score("c1Be");
    }
}
document.getElementById("c1Bf").onclick = function() {
    if (c1Bf === 0) {
        c++;
        n1++;
        c++;
        f++;
        c1Bf++;
        x++;
        score("c1Bf");
    }
}
//1C//
document.getElementById("c1Cd").onclick = function() {
    if (c1Cd === 0) {
        c++;
        n1++;
        C++;
        d++;
        c1Cd++;
        x++;
        score("c1Cd");
    }
}
document.getElementById("c1Ce").onclick = function() {
    if (c1Ce === 0) {
        c++;
        n1++;
        C++;
        e++;
        c1Ce++;
        x++;
        score("c1Ce");
    }
}
document.getElementById("c1Cf").onclick = function() {
    if (c1Cf === 0) {
        c++;
        n1++;
        C++;
        f++;
        c1Cf++;
        x++;
        score("c1Cf");
    }
}
//2A//
document.getElementById("c2Ad").onclick = function() {
    if (c2Ad === 0) {
        c++;
        n2++;
        A++;
        d++;
        c2Ad++;
        x++;
        score("c2Ad");
    }
}
document.getElementById("c2Ae").onclick = function() {
    if (c2Ae === 0) {
        c++;
        n2++;
        A++;
        e++;
        c2Ae++;
        x++;
        score("c2Ae");
    }
}
document.getElementById("c2Af").onclick = function() {
    if (c2Af === 0) {
        c++;
        n2++;
        A++;
        f++;
        c2Af++;
        x++;
        score("c2Af");
    }
}
//2B//
document.getElementById("c2Bd").onclick = function() {
    if (c2Bd === 0) {
        c++;
        n2++;
        c++;
        d++;
        c2Bd++;
        x++;
        score("c2Bd");
    }
}
document.getElementById("c2Be").onclick = function() {
    if (c2Be === 0) {
        c++;
        n2++;
        c++;
        e++;
        c2Be++;
        x++;
        score("c2Be");
    }
}
document.getElementById("c2Bf").onclick = function() {
    if (c2Bf === 0) {
        c++;
        n2++;
        c++;
        f++;
        c2Bf++;
        x++;
        score("c2Bf");
    }
}
//2C//
document.getElementById("c2Cd").onclick = function() {
    if (c2Cd === 0) {
        c++;
        n2++;
        C++;
        d++;
        c2Cd++;
        x++;
        score("c2Cd");
    }
}
document.getElementById("c2Ce").onclick = function() {
    if (c2Ce === 0) {
        c++;
        n2++;
        C++;
        e++;
        c2Ce++;
        x++;
        score("c2Ce");
    }
}
document.getElementById("c2Cf").onclick = function() {
    if (c2Cf === 0) {
        c++;
        n2++;
        C++;
        f++;
        c2Cf++;
        x++;
        score("c2Cf");
    }
}
//3A//
document.getElementById("c3Ad").onclick = function() {
    if (c3Ad === 0) {
        c++;
        n3++;
        A++;
        d++;
        c3Ad++;
        x++;
        score("c3Ad");
    }
}
document.getElementById("c3Ae").onclick = function() {
    if (c3Ae === 0) {
        c++;
        n3++;
        A++;
        e++;
        c3Ae++;
        x++;
        score("c3Ae");
    }
}
document.getElementById("c3Af").onclick = function() {
    if (c3Af === 0) {
        c++;
        n3++;
        A++;
        f++;
        c3Af++;
        x++;
        score("c3Af");
    }
}
//3B//
document.getElementById("c3Bd").onclick = function() {
    if (c3Bd === 0) {
        c++;
        n3++;
        c++;
        d++;
        c3Bd++;
        x++;
        score("c3Bd");
    }
}
document.getElementById("c3Be").onclick = function() {
    if (c3Be === 0) {
        c++;
        n3++;
        c++;
        e++;
        c3Be++;
        x++;
        score("c3Be");
    }
}
document.getElementById("c3Bf").onclick = function() {
    if (c3Bf === 0) {
        c++;
        n3++;
        c++;
        f++;
        c3Bf++;
        x++;
        score("c3Bf");
    }
}
//3C//
document.getElementById("c3Cd").onclick = function() {
    if (c3Cd === 0) {
        c++;
        n3++;
        C++;
        d++;
        c3Cd++;
        x++;
        score("c3Cd");
    }
}
document.getElementById("c3Ce").onclick = function() {
    if (c3Ce === 0) {
        c++;
        n3++;
        C++;
        e++;
        c3Ce++;
        x++;
        score("c3Ce");
    }
}
document.getElementById("c3Cf").onclick = function() {
    if (c3Cf === 0) {
        c++;
        n3++;
        C++;
        f++;
        c3Cf++;
        x++;
        score("c3Cf");
    }
}