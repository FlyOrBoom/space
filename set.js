var a = 0;
var b = 0;
var c = 0;
var n1 = 0;
var n2 = 0;
var n3 = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var i = 0;

var w = 0;
var x = 0;

var z = 0;

var on = [];

var vis = ["a1dg", "a1dh", "a1di",
           "a1eg", "a1eh", "a1ei",
           "a1fg", "a1fh", "a1fi",
           
           "a2dg", "a2dh", "a2di",
           "a2eg", "a2eh", "a2ei",
           "a2fg", "a2fh", "a2fi",
           
           "a3dg", "a3dh", "a3di",
           "a3eg", "a3eh", "a3ei",
           "a3fg", "a3fh", "a3fi",
           
           "b1dg", "b1dh", "b1di",
           "b1eg", "b1eh", "b1ei",
           "b1fg", "b1fh", "b1fi",
           
           "b2dg", "b2dh", "b2di",
           "b2eg", "b2eh", "b2ei",
           "b2fg", "b2fh", "b2fi",
           
           "b3dg", "b3dh", "b3di",
           "b3eg", "b3eh", "b3ei",
           "b3fg", "b3fh", "b3fi",
           
           "c1dg", "c1dh", "c1di",
           "c1eg", "c1eh", "c1ei",
           "c1fg", "c1fh", "c1fi",
           
           "c2dg", "c2dh", "c2di",
           "c2eg", "c2eh", "c2ei",
           "c2fg", "c2fh", "c2fi",
           
           "c3dg", "c3dh", "c3di",
           "c3eg", "c3eh", "c3ei",
           "c3fg", "c3fh", "c3fi"];

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
var rC = 0;
var rD = 0;
var rB = 0;
var rF = 0;
var rG = 0;
var rH = 0;

var a1dg = 0; var a1dh = 0; var a1di = 0;
var a1eg = 0; var a1eh = 0; var a1ei = 0;
var a1fg = 0; var a1fh = 0; var a1fi = 0;

var a2dg = 0; var a2dh = 0; var a2di = 0;
var a2eg = 0; var a2eh = 0; var a2ei = 0;
var a2fg = 0; var a2fh = 0; var a2fi = 0;

var a3dg = 0; var a3dh = 0; var a3di = 0;
var a3eg = 0; var a3eh = 0; var a3ei = 0;
var a3fg = 0; var a3fh = 0; var a3fi = 0;

var b1dg = 0; var b1dh = 0; var b1di = 0;
var b1eg = 0; var b1eh = 0; var b1ei = 0;
var b1fg = 0; var b1fh = 0; var b1fi = 0;

var b2dg = 0; var b2dh = 0; var b2di = 0;
var b2eg = 0; var b2eh = 0; var b2ei = 0;
var b2fg = 0; var b2fh = 0; var b2fi = 0;

var b3dg = 0; var b3dh = 0; var b3di = 0;
var b3eg = 0; var b3eh = 0; var b3ei = 0;
var b3fg = 0; var b3fh = 0; var b3fi = 0;

var c1dg = 0; var c1dh = 0; var c1di = 0;
var c1eg = 0; var c1eh = 0; var c1ei = 0;
var c1fg = 0; var c1fh = 0; var c1fi = 0;

var c2dg = 0; var c2dh = 0; var c2di = 0;
var c2eg = 0; var c2eh = 0; var c2ei = 0;
var c2fg = 0; var c2fh = 0; var c2fi = 0;

var c3dg = 0; var c3dh = 0; var c3di = 0;
var c3eg = 0; var c3eh = 0; var c3ei = 0;
var c3fg = 0; var c3fh = 0; var c3fi = 0;

function hide(idd){
    document.getElementById(idd).style.display = "none";
}
function open(idd){
    document.getElementById(idd).style.display = "inline-block";
}

function clear() {

    hide("a1dg"); hide("a1dh"); hide("a1di");
    hide("a1eg"); hide("a1eh"); hide("a1ei");
    hide("a1fg"); hide("a1fh"); hide("a1fi");

    hide("a2dg"); hide("a2dh"); hide("a2di");
    hide("a2eg"); hide("a2eh"); hide("a2ei");
    hide("a2fg"); hide("a2fh"); hide("a2fi");

    hide("a3dg"); hide("a3dh"); hide("a3di");
    hide("a3eg"); hide("a3eh"); hide("a3ei");
    hide("a3fg"); hide("a3fh"); hide("a3fi");

    hide("b1dg"); hide("b1dh"); hide("b1di");
    hide("b1eg"); hide("b1eh"); hide("b1ei");
    hide("b1fg"); hide("b1fh"); hide("b1fi");

    hide("b2dg"); hide("b2dh"); hide("b2di");
    hide("b2eg"); hide("b2eh"); hide("b2ei");
    hide("b2fg"); hide("b2fh"); hide("b2fi");

    hide("b3dg"); hide("b3dh"); hide("b3di");
    hide("b3eg"); hide("b3eh"); hide("b3ei");
    hide("b3fg"); hide("b3fh"); hide("b3fi");

    hide("c1dg"); hide("c1dh"); hide("c1di");
    hide("c1eg"); hide("c1eh"); hide("c1ei");
    hide("c1fg"); hide("c1fh"); hide("c1fi");

    hide("c2dg"); hide("c2dh"); hide("c2di");
    hide("c2eg"); hide("c2eh"); hide("c2ei");
    hide("c2fg"); hide("c2fh"); hide("c2fi");

    hide("c3dg"); hide("c3dh"); hide("c3di");
    hide("c3eg"); hide("c3eh"); hide("c3ei");
    hide("c3fg"); hide("c3fh"); hide("c3fi");
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
    rC = Math.floor(Math.random() * 81);
    rD = Math.floor(Math.random() * 81);
    rE = Math.floor(Math.random() * 81);
    rF = Math.floor(Math.random() * 81);
    rG = Math.floor(Math.random() * 81);
    rH = Math.floor(Math.random() * 81);
}

function rand() {
  r();
    while(r0=== r1 || r0=== r2 || r0=== r3 || r0=== r4 || r0=== r5 || r0=== r6 || r0=== r7 || r0=== r8 || r0=== r9 || r0=== rA || r0=== rB || r0=== rC ||       r0=== rD || r0=== rE || r0=== rF || r0=== rG || r0=== rH ||
          r1=== r2 || r1=== r3 || r1=== r4 || r1=== r5 || r1=== r6 || r1=== r7 || r1=== r8 || r1=== r9 || r1=== rA || r1=== rB || r1=== rC || r1=== rD || r1=== rE || r1=== rF || r1=== rG || r1=== rH ||
          r2=== r3 || r2=== r4 || r2=== r5 || r2=== r6 || r2=== r7 || r2=== r8 || r2=== r9 || r2=== rA || r2=== rB || r2=== rC || r2=== rD || r2=== rE || r2=== rF || r2=== rG || r2=== rH ||
          r3=== r4 || r3=== r5 || r3=== r6 || r3=== r7 || r3=== r8 || r3=== r9 || r3=== rA || r3=== rB || r3=== rC || r3=== rD || r3=== rE || r3=== rF || r3=== rG || r3=== rH ||
          r4=== r5 || r4=== r6 || r4=== r7 || r4=== r8 || r4=== r9 || r4=== rA || r4=== rB || r4=== rC || r4=== rD || r4=== rE || r4=== rF || r4=== rG || r4=== rH ||
          r5=== r6 || r5=== r7 || r5=== r8 || r5=== r9 || r5=== rA || r5=== rB || r5=== rC || r5=== rD || r5=== rE || r5=== rF || r5=== rG || r5=== rH ||
          r6=== r7 || r6=== r8 || r6=== r9 || r6=== rA || r6=== rB || r6=== rC || r6=== rD || r6=== rE || r6=== rF || r6=== rG || r6=== rH ||
          r7=== r8 || r7=== r9 || r7=== rA || r7=== rB || r7=== rC || r7=== rD || r7=== rE || r7=== rF || r7=== rG || r7=== rH ||
          r8=== r9 || r8=== rA || r8=== rB || r8=== rC || r8=== rD || r8=== rE || r8=== rF || r8=== rG || r8=== rH ||
          r9=== rA || r9=== rB || r9=== rC || r9=== rD || r9=== rE || r9=== rF || r9=== rG || r9=== rH ||
          rA=== rB || rA=== rC || rA=== rD || rA=== rE || rA=== rF || rA=== rG || rA=== rH ||
          rB=== rC || rB=== rD || rB=== rE || rB=== rF || rB=== rG || rB=== rH ||
          rC=== rD || rC=== rE || rC=== rF || rC=== rG || rC=== rH ||
          rD=== rE || rD=== rF || rD=== rG || rD=== rH ||
          rE=== rF || rE=== rG || rE=== rH ||
          rF=== rG || rF=== rH ||
          rG=== rH){
        r();
    }
}

function rep() {
    rC = Math.floor(Math.random() * 81);
    rD = Math.floor(Math.random() * 81);
    rE = Math.floor(Math.random() * 81);
        while(r0=== r1 || r0=== r2 || r0=== r3 || r0=== r4 || r0=== r5 || r0=== r6 || r0=== r7 || r0=== r8 || r0=== r9 || r0=== rC || r0=== rB || r0=== rC || r0=== rD || r0=== rE || r0=== rF || r0=== rG || r0=== rH ||
          r1=== r2 || r1=== r3 || r1=== r4 || r1=== r5 || r1=== r6 || r1=== r7 || r1=== r8 || r1=== r9 || r1=== rA || r1=== rB || r1=== rC || r1=== rD || r1=== rE || r1=== rF || r1=== rG || r1=== rH ||
          r2=== r3 || r2=== r4 || r2=== r5 || r2=== r6 || r2=== r7 || r2=== r8 || r2=== r9 || r2=== rA || r2=== rB || r2=== rC || r2=== rD || r2=== rE || r2=== rF || r2=== rG || r2=== rH ||
          r3=== r4 || r3=== r5 || r3=== r6 || r3=== r7 || r3=== r8 || r3=== r9 || r3=== rA || r3=== rB || r3=== rC || r3=== rD || r3=== rE || r3=== rF || r3=== rG || r3=== rH ||
          r4=== r5 || r4=== r6 || r4=== r7 || r4=== r8 || r4=== r9 || r4=== rA || r4=== rB || r4=== rC || r4=== rD || r4=== rE || r4=== rF || r4=== rG || r4=== rH ||
          r5=== r6 || r5=== r7 || r5=== r8 || r5=== r9 || r5=== rA || r5=== rB || r5=== rC || r5=== rD || r5=== rE || r5=== rF || r5=== rG || r5=== rH ||
          r6=== r7 || r6=== r8 || r6=== r9 || r6=== rA || r6=== rB || r6=== rC || r6=== rD || r6=== rE || r6=== rF || r6=== rG || r6=== rH ||
          r7=== r8 || r7=== r9 || r7=== rA || r7=== rB || r7=== rC || r7=== rD || r7=== rE || r7=== rF || r7=== rG || r7=== rH ||
          r8=== r9 || r8=== rA || r8=== rB || r8=== rC || r8=== rD || r8=== rE || r8=== rF || r8=== rG || r8=== rH ||
          r9=== rA || r9=== rB || rA=== rC || r9=== rD || r9=== rE || r9=== rF || r9=== rG || r9=== rH ||
          rA=== rB || rA=== rC || rA=== rD || rA=== rE || rA=== rF || rA=== rG || rA=== rH ||
          rB=== rC || rB=== rD || rB=== rE || rC=== rF || rB=== rG || rB=== rH ||
          rC=== rD || rC=== rE || rC=== rF || rD=== rG || rC=== rH ||
          rD=== rE || rD=== rF || rD=== rG || rB=== rH ||
          rB=== rF || rB=== rG || rB=== rH ||
          rF=== rG || rF=== rH ||
          rG=== rH){
        rC = Math.floor(Math.random() * 81);
        rD = Math.floor(Math.random() * 81);
        rE = Math.floor(Math.random() * 81);
    }
    rF = rC;
    rG = rD;
    rH = rE;
    rC = Math.floor(Math.random() * 81);
    rD = Math.floor(Math.random() * 81);
    rE = Math.floor(Math.random() * 81);

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
    d = 0;
    e = 0;
    f = 0;
    g = 0;
    h = 0;
    i = 0;

    x = 0;

    a1dg = 0; a1dh = 0; a1di = 0;
    a1eg = 0; a1eh = 0; a1ei = 0;
    a1fg = 0; a1fh = 0; a1fi = 0;

    a2dg = 0; a2dh = 0; a2di = 0;
    a2eg = 0; a2eh = 0; a2ei = 0;
    a2fg = 0; a2fh = 0; a2fi = 0;

    a3dg = 0; a3dh = 0; a3di = 0;
    a3eg = 0; a3eh = 0; a3ei = 0;
    a3fg = 0; a3fh = 0; a3fi = 0;

    b1dg = 0; b1dh = 0; b1di = 0;
    b1eg = 0; b1eh = 0; b1ei = 0;
    b1fg = 0; b1fh = 0; b1fi = 0;

    b2dg = 0; b2dh = 0; b2di = 0;
    b2eg = 0; b2eh = 0; b2ei = 0;
    b2fg = 0; b2fh = 0; b2fi = 0;

    b3dg = 0; b3dh = 0; b3di = 0;
    b3eg = 0; b3eh = 0; b3ei = 0;
    b3fg = 0; b3fh = 0; b3fi = 0;

    c1dg = 0; c1dh = 0; c1di = 0;
    c1eg = 0; c1eh = 0; c1ei = 0;
    c1fg = 0; c1fh = 0; c1fi = 0;

    c2dg = 0; c2dh = 0; c2di = 0;
    c2eg = 0; c2eh = 0; c2ei = 0;
    c2fg = 0; c2fh = 0; c2fi = 0;

    c3dg = 0; c3dh = 0; c3di = 0;
    c3eg = 0; c3eh = 0; c3ei = 0;
    c3fg = 0; c3fh = 0; c3fi = 0;

    size("a1dg"); size("a1dh"); size("a1di");
    size("a1eg"); size("a1eh"); size("a1ei");
    size("a1fg"); size("a1fh"); size("a1fi");

    size("a2dg"); size("a2dh"); size("a2di");
    size("a2eg"); size("a2eh"); size("a2ei");
    size("a2fg"); size("a2fh"); size("a2fi");

    size("a3dg"); size("a3dh"); size("a3di");
    size("a3eg"); size("a3eh"); size("a3ei");
    size("a3fg"); size("a3fh"); size("a3fi");

    size("b1dg"); size("b1dh"); size("b1di");
    size("b1eg"); size("b1eh"); size("b1ei");
    size("b1fg"); size("b1fh"); size("b1fi");

    size("b2dg"); size("b2dh"); size("b2di");
    size("b2eg"); size("b2eh"); size("b2ei");
    size("b2fg"); size("b2fh"); size("b2fi");

    size("b3dg"); size("b3dh"); size("b3di");
    size("b3eg"); size("b3eh"); size("b3ei");
    size("b3fg"); size("b3fh"); size("b3fi");

    size("c1dg"); size("c1dh"); size("c1di");
    size("c1eg"); size("c1eh"); size("c1ei");
    size("c1fg"); size("c1fh"); size("c1fi");

    size("c2dg"); size("c2dh"); size("c2di");
    size("c2eg"); size("c2eh"); size("c2ei");
    size("c2fg"); size("c2fh"); size("c2fi");

    size("c3dg"); size("c3dh"); size("c3di");
    size("c3eg"); size("c3eh"); size("c3ei");
    size("c3fg"); size("c3fh"); size("c3fi");
    
    on=[];
}

function yay() {
    z++;
    if (z === 1||z === -1) {
        document.getElementById("z").innerHTML = z + " point";
    } else {
        document.getElementById("z").innerHTML = z + " points";
    }
    hide(on[0]);
    hide(on[1]);
    hide(on[2]);
    open(vis[rF]);
    open(vis[rG]);
    open(vis[rH]);
    rep();
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
        document.getElementById("z").style.color="#c44";
    }
    else if (z > 0) {
        document.getElementById("z").style.color="#4b4";
    }
    else {
        document.getElementById("z").style.color="#44d";
    }
}
function score(varr) {
    document.getElementById(varr).style.transform = "scale(0.9,0.9)";
    on.push(varr);
    // alert(a+" "+b+" "+c+"\n"+n1+" "+n2+" "+n3+"\n"+d+" "+e+" "+f+"\n"+g+" "+h+" "+i+"\n"+x);
    if (x === 3) {
        if (
            (a === 3 || b === 3 || c === 3 || a === b)&&
            (n1=== 3 || n2=== 3 || n3=== 3 || n1=== n2)&&
            (d === 3 || e === 3 || f === 3 || d === e)&&
            (g === 3 || h === 3 || i === 3 || g === h)
        ){
            yay();
        } else {
            oof();
        }
        color();
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

document.getElementById("add").onclick = function reset() {
    z = 0;
    zero();
    color();
    document.getElementById("z").innerHTML = z + " points";
    clear();
    display();
}

/*Rhg megagroup*/
//1d//
document.getElementById("a1dg").onclick = function() {
    if (a1dg === 0) {
        a++;
        n1++;
        d++;
        g++;
        a1dg++;
        x++;
        score("a1dg");
    }
}
document.getElementById("a1dh").onclick = function() {
    if (a1dh === 0) {
        a++;
        n1++;
        d++;
        h++;
        a1dh++;
        x++;
        score("a1dh");
    }
}
document.getElementById("a1di").onclick = function() {
    if (a1di === 0) {
        a++;
        n1++;
        d++;
        i++;
        a1di++;
        x++;
        score("a1di");
    }
}
//1e//
document.getElementById("a1eg").onclick = function() {
    if (a1eg === 0) {
        a++;
        n1++;
        e++;
        g++;
        a1eg++;
        x++;
        score("a1eg");
    }
}
document.getElementById("a1eh").onclick = function() {
    if (a1eh === 0) {
        a++;
        n1++;
        e++;
        h++;
        a1eh++;
        x++;
        score("a1eh");
    }
}
document.getElementById("a1ei").onclick = function() {
    if (a1ei === 0) {
        a++;
        n1++;
        e++;
        i++;
        a1ei++;
        x++;
        score("a1ei");
    }
}
//1f//
document.getElementById("a1fg").onclick = function() {
    if (a1fg === 0) {
        a++;
        n1++;
        f++;
        g++;
        a1fg++;
        x++;
        score("a1fg");
    }
}
document.getElementById("a1fh").onclick = function() {
    if (a1fh === 0) {
        a++;
        n1++;
        f++;
        h++;
        a1fh++;
        x++;
        score("a1fh");
    }
}
document.getElementById("a1fi").onclick = function() {
    if (a1fi === 0) {
        a++;
        n1++;
        f++;
        i++;
        a1fi++;
        x++;
        score("a1fi");
    }
}
//2d//
document.getElementById("a2dg").onclick = function() {
    if (a2dg === 0) {
        a++;
        n2++;
        d++;
        g++;
        a2dg++;
        x++;
        score("a2dg");
    }
}
document.getElementById("a2dh").onclick = function() {
    if (a2dh === 0) {
        a++;
        n2++;
        d++;
        h++;
        a2dh++;
        x++;
        score("a2dh");
    }
}
document.getElementById("a2di").onclick = function() {
    if (a2di === 0) {
        a++;
        n2++;
        d++;
        i++;
        a2di++;
        x++;
        score("a2di");
    }
}
//2e//
document.getElementById("a2eg").onclick = function() {
    if (a2eg === 0) {
        a++;
        n2++;
        e++;
        g++;
        a2eg++;
        x++;
        score("a2eg");
    }
}
document.getElementById("a2eh").onclick = function() {
    if (a2eh === 0) {
        a++;
        n2++;
        e++;
        h++;
        a2eh++;
        x++;
        score("a2eh");
    }
}
document.getElementById("a2ei").onclick = function() {
    if (a2ei === 0) {
        a++;
        n2++;
        e++;
        i++;
        a2ei++;
        x++;
        score("a2ei");
    }
}
//2f//
document.getElementById("a2fg").onclick = function() {
    if (a2fg === 0) {
        a++;
        n2++;
        f++;
        g++;
        a2fg++;
        x++;
        score("a2fg");
    }
}
document.getElementById("a2fh").onclick = function() {
    if (a2fh === 0) {
        a++;
        n2++;
        f++;
        h++;
        a2fh++;
        x++;
        score("a2fh");
    }
}
document.getElementById("a2fi").onclick = function() {
    if (a2fi === 0) {
        a++;
        n2++;
        f++;
        i++;
        a2fi++;
        x++;
        score("a2fi");
    }
}
//3d//
document.getElementById("a3dg").onclick = function() {
    if (a3dg === 0) {
        a++;
        n3++;
        d++;
        g++;
        a3dg++;
        x++;
        score("a3dg");
    }
}
document.getElementById("a3dh").onclick = function() {
    if (a3dh === 0) {
        a++;
        n3++;
        d++;
        h++;
        a3dh++;
        x++;
        score("a3dh");
    }
}
document.getElementById("a3di").onclick = function() {
    if (a3di === 0) {
        a++;
        n3++;
        d++;
        i++;
        a3di++;
        x++;
        score("a3di");
    }
}
//3e//
document.getElementById("a3eg").onclick = function() {
    if (a3eg === 0) {
        a++;
        n3++;
        e++;
        g++;
        a3eg++;
        x++;
        score("a3eg");
    }
}
document.getElementById("a3eh").onclick = function() {
    if (a3eh === 0) {
        a++;
        n3++;
        e++;
        h++;
        a3eh++;
        x++;
        score("a3eh");
    }
}
document.getElementById("a3ei").onclick = function() {
    if (a3ei === 0) {
        a++;
        n3++;
        e++;
        i++;
        a3ei++;
        x++;
        score("a3ei");
    }
}
//3f//
document.getElementById("a3fg").onclick = function() {
    if (a3fg === 0) {
        a++;
        n3++;
        f++;
        g++;
        a3fg++;
        x++;
        score("a3fg");
    }
}
document.getElementById("a3fh").onclick = function() {
    if (a3fh === 0) {
        a++;
        n3++;
        f++;
        h++;
        a3fh++;
        x++;
        score("a3fh");
    }
}
document.getElementById("a3fi").onclick = function() {
    if (a3fi === 0) {
        a++;
        n3++;
        f++;
        i++;
        a3fi++;
        x++;
        score("a3fi");
    }
}
/*Green megagroup*/
//1d//
document.getElementById("b1dg").onclick = function() {
    if (b1dg === 0) {
        b++;
        n1++;
        d++;
        g++;
        b1dg++;
        x++;
        score("b1dg");
    }
}
document.getElementById("b1dh").onclick = function() {
    if (b1dh === 0) {
        b++;
        n1++;
        d++;
        h++;
        b1dh++;
        x++;
        score("b1dh");
    }
}
document.getElementById("b1di").onclick = function() {
    if (b1di === 0) {
        b++;
        n1++;
        d++;
        i++;
        b1di++;
        x++;
        score("b1di");
    }
}
//1e//
document.getElementById("b1eg").onclick = function() {
    if (b1eg === 0) {
        b++;
        n1++;
        e++;
        g++;
        b1eg++;
        x++;
        score("b1eg");
    }
}
document.getElementById("b1eh").onclick = function() {
    if (b1eh === 0) {
        b++;
        n1++;
        e++;
        h++;
        b1eh++;
        x++;
        score("b1eh");
    }
}
document.getElementById("b1ei").onclick = function() {
    if (b1ei === 0) {
        b++;
        n1++;
        e++;
        i++;
        b1ei++;
        x++;
        score("b1ei");
    }
}
//1f//
document.getElementById("b1fg").onclick = function() {
    if (b1fg === 0) {
        b++;
        n1++;
        f++;
        g++;
        b1fg++;
        x++;
        score("b1fg");
    }
}
document.getElementById("b1fh").onclick = function() {
    if (b1fh === 0) {
        b++;
        n1++;
        f++;
        h++;
        b1fh++;
        x++;
        score("b1fh");
    }
}
document.getElementById("b1fi").onclick = function() {
    if (b1fi === 0) {
        b++;
        n1++;
        f++;
        i++;
        b1fi++;
        x++;
        score("b1fi");
    }
}
//2d//
document.getElementById("b2dg").onclick = function() {
    if (b2dg === 0) {
        b++;
        n2++;
        d++;
        g++;
        b2dg++;
        x++;
        score("b2dg");
    }
}
document.getElementById("b2dh").onclick = function() {
    if (b2dh === 0) {
        b++;
        n2++;
        d++;
        h++;
        b2dh++;
        x++;
        score("b2dh");
    }
}
document.getElementById("b2di").onclick = function() {
    if (b2di === 0) {
        b++;
        n2++;
        d++;
        i++;
        b2di++;
        x++;
        score("b2di");
    }
}
//2e//
document.getElementById("b2eg").onclick = function() {
    if (b2eg === 0) {
        b++;
        n2++;
        e++;
        g++;
        b2eg++;
        x++;
        score("b2eg");
    }
}
document.getElementById("b2eh").onclick = function() {
    if (b2eh === 0) {
        b++;
        n2++;
        e++;
        h++;
        b2eh++;
        x++;
        score("b2eh");
    }
}
document.getElementById("b2ei").onclick = function() {
    if (b2ei === 0) {
        b++;
        n2++;
        e++;
        i++;
        b2ei++;
        x++;
        score("b2ei");
    }
}
//2f//
document.getElementById("b2fg").onclick = function() {
    if (b2fg === 0) {
        b++;
        n2++;
        f++;
        g++;
        b2fg++;
        x++;
        score("b2fg");
    }
}
document.getElementById("b2fh").onclick = function() {
    if (b2fh === 0) {
        b++;
        n2++;
        f++;
        h++;
        b2fh++;
        x++;
        score("b2fh");
    }
}
document.getElementById("b2fi").onclick = function() {
    if (b2fi === 0) {
        b++;
        n2++;
        f++;
        i++;
        b2fi++;
        x++;
        score("b2fi");
    }
}
//3d//
document.getElementById("b3dg").onclick = function() {
    if (b3dg === 0) {
        b++;
        n3++;
        d++;
        g++;
        b3dg++;
        x++;
        score("b3dg");
    }
}
document.getElementById("b3dh").onclick = function() {
    if (b3dh === 0) {
        b++;
        n3++;
        d++;
        h++;
        b3dh++;
        x++;
        score("b3dh");
    }
}
document.getElementById("b3di").onclick = function() {
    if (b3di === 0) {
        b++;
        n3++;
        d++;
        i++;
        b3di++;
        x++;
        score("b3di");
    }
}
//3e//
document.getElementById("b3eg").onclick = function() {
    if (b3eg === 0) {
        b++;
        n3++;
        e++;
        g++;
        b3eg++;
        x++;
        score("b3eg");
    }
}
document.getElementById("b3eh").onclick = function() {
    if (b3eh === 0) {
        b++;
        n3++;
        e++;
        h++;
        b3eh++;
        x++;
        score("b3eh");
    }
}
document.getElementById("b3ei").onclick = function() {
    if (b3ei === 0) {
        b++;
        n3++;
        e++;
        i++;
        b3ei++;
        x++;
        score("b3ei");
    }
}
//3f//
document.getElementById("b3fg").onclick = function() {
    if (b3fg === 0) {
        b++;
        n3++;
        f++;
        g++;
        b3fg++;
        x++;
        score("b3fg");
    }
}
document.getElementById("b3fh").onclick = function() {
    if (b3fh === 0) {
        b++;
        n3++;
        f++;
        h++;
        b3fh++;
        x++;
        score("b3fh");
    }
}
document.getElementById("b3fi").onclick = function() {
    if (b3fi === 0) {
        b++;
        n3++;
        f++;
        i++;
        b3fi++;
        x++;
        score("b3fi");
    }
}
/*eluh megagroup*/
//1d//
document.getElementById("c1dg").onclick = function() {
    if (c1dg === 0) {
        c++;
        n1++;
        d++;
        g++;
        c1dg++;
        x++;
        score("c1dg");
    }
}
document.getElementById("c1dh").onclick = function() {
    if (c1dh === 0) {
        c++;
        n1++;
        d++;
        h++;
        c1dh++;
        x++;
        score("c1dh");
    }
}
document.getElementById("c1di").onclick = function() {
    if (c1di === 0) {
        c++;
        n1++;
        d++;
        i++;
        c1di++;
        x++;
        score("c1di");
    }
}
//1e//
document.getElementById("c1eg").onclick = function() {
    if (c1eg === 0) {
        c++;
        n1++;
        e++;
        g++;
        c1eg++;
        x++;
        score("c1eg");
    }
}
document.getElementById("c1eh").onclick = function() {
    if (c1eh === 0) {
        c++;
        n1++;
        e++;
        h++;
        c1eh++;
        x++;
        score("c1eh");
    }
}
document.getElementById("c1ei").onclick = function() {
    if (c1ei === 0) {
        c++;
        n1++;
        e++;
        i++;
        c1ei++;
        x++;
        score("c1ei");
    }
}
//1f//
document.getElementById("c1fg").onclick = function() {
    if (c1fg === 0) {
        c++;
        n1++;
        f++;
        g++;
        c1fg++;
        x++;
        score("c1fg");
    }
}
document.getElementById("c1fh").onclick = function() {
    if (c1fh === 0) {
        c++;
        n1++;
        f++;
        h++;
        c1fh++;
        x++;
        score("c1fh");
    }
}
document.getElementById("c1fi").onclick = function() {
    if (c1fi === 0) {
        c++;
        n1++;
        f++;
        i++;
        c1fi++;
        x++;
        score("c1fi");
    }
}
//2d//
document.getElementById("c2dg").onclick = function() {
    if (c2dg === 0) {
        c++;
        n2++;
        d++;
        g++;
        c2dg++;
        x++;
        score("c2dg");
    }
}
document.getElementById("c2dh").onclick = function() {
    if (c2dh === 0) {
        c++;
        n2++;
        d++;
        h++;
        c2dh++;
        x++;
        score("c2dh");
    }
}
document.getElementById("c2di").onclick = function() {
    if (c2di === 0) {
        c++;
        n2++;
        d++;
        i++;
        c2di++;
        x++;
        score("c2di");
    }
}
//2e//
document.getElementById("c2eg").onclick = function() {
    if (c2eg === 0) {
        c++;
        n2++;
        e++;
        g++;
        c2eg++;
        x++;
        score("c2eg");
    }
}
document.getElementById("c2eh").onclick = function() {
    if (c2eh === 0) {
        c++;
        n2++;
        e++;
        h++;
        c2eh++;
        x++;
        score("c2eh");
    }
}
document.getElementById("c2ei").onclick = function() {
    if (c2ei === 0) {
        c++;
        n2++;
        e++;
        i++;
        c2ei++;
        x++;
        score("c2ei");
    }
}
//2f//
document.getElementById("c2fg").onclick = function() {
    if (c2fg === 0) {
        c++;
        n2++;
        f++;
        g++;
        c2fg++;
        x++;
        score("c2fg");
    }
}
document.getElementById("c2fh").onclick = function() {
    if (c2fh === 0) {
        c++;
        n2++;
        f++;
        h++;
        c2fh++;
        x++;
        score("c2fh");
    }
}
document.getElementById("c2fi").onclick = function() {
    if (c2fi === 0) {
        c++;
        n2++;
        f++;
        i++;
        c2fi++;
        x++;
        score("c2fi");
    }
}
//3d//
document.getElementById("c3dg").onclick = function() {
    if (c3dg === 0) {
        c++;
        n3++;
        d++;
        g++;
        c3dg++;
        x++;
        score("c3dg");
    }
}
document.getElementById("c3dh").onclick = function() {
    if (c3dh === 0) {
        c++;
        n3++;
        d++;
        h++;
        c3dh++;
        x++;
        score("c3dh");
    }
}
document.getElementById("c3di").onclick = function() {
    if (c3di === 0) {
        c++;
        n3++;
        d++;
        i++;
        c3di++;
        x++;
        score("c3di");
    }
}
//3e//
document.getElementById("c3eg").onclick = function() {
    if (c3eg === 0) {
        c++;
        n3++;
        e++;
        g++;
        c3eg++;
        x++;
        score("c3eg");
    }
}
document.getElementById("c3eh").onclick = function() {
    if (c3eh === 0) {
        c++;
        n3++;
        e++;
        h++;
        c3eh++;
        x++;
        score("c3eh");
    }
}
document.getElementById("c3ei").onclick = function() {
    if (c3ei === 0) {
        c++;
        n3++;
        e++;
        i++;
        c3ei++;
        x++;
        score("c3ei");
    }
}
//3f//
document.getElementById("c3fg").onclick = function() {
    if (c3fg === 0) {
        c++;
        n3++;
        f++;
        g++;
        c3fg++;
        x++;
        score("c3fg");
    }
}
document.getElementById("c3fh").onclick = function() {
    if (c3fh === 0) {
        c++;
        n3++;
        f++;
        h++;
        c3fh++;
        x++;
        score("c3fh");
    }
}
document.getElementById("c3fi").onclick = function() {
    if (c3fi === 0) {
        c++;
        n3++;
        f++;
        i++;
        c3fi++;
        x++;
        score("c3fi");
    }
}