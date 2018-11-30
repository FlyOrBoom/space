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

var num = 0;
var nom = 0;

var w = 0;
var x = 0;

var z = 0;

var on = [];

var rando = [];

var card = ["a1dg", "a1dh", "a1di",
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
    for (num=0; num<81; num++) {
        document.getElementById(card[num]).style.display = "none";
    }
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
    while(r0===r1 || r0===r2 || r0===r3 || r0===r4 || r0===r5 || r0===r6 || r0===r7 || r0===r8 || r0===r9 || r0===rA || r0===rB || r0===rC ||       r0===rD || r0===rE || r0===rF || r0===rG || r0===rH ||
          r1===r2 || r1===r3 || r1===r4 || r1===r5 || r1===r6 || r1===r7 || r1===r8 || r1===r9 || r1===rA || r1===rB || r1===rC || r1===rD || r1===rE || r1===rF || r1===rG || r1===rH ||
          r2===r3 || r2===r4 || r2===r5 || r2===r6 || r2===r7 || r2===r8 || r2===r9 || r2===rA || r2===rB || r2===rC || r2===rD || r2===rE || r2===rF || r2===rG || r2===rH ||
          r3===r4 || r3===r5 || r3===r6 || r3===r7 || r3===r8 || r3===r9 || r3===rA || r3===rB || r3===rC || r3===rD || r3===rE || r3===rF || r3===rG || r3===rH ||
          r4===r5 || r4===r6 || r4===r7 || r4===r8 || r4===r9 || r4===rA || r4===rB || r4===rC || r4===rD || r4===rE || r4===rF || r4===rG || r4===rH ||
          r5===r6 || r5===r7 || r5===r8 || r5===r9 || r5===rA || r5===rB || r5===rC || r5===rD || r5===rE || r5===rF || r5===rG || r5===rH ||
          r6===r7 || r6===r8 || r6===r9 || r6===rA || r6===rB || r6===rC || r6===rD || r6===rE || r6===rF || r6===rG || r6===rH ||
          r7===r8 || r7===r9 || r7===rA || r7===rB || r7===rC || r7===rD || r7===rE || r7===rF || r7===rG || r7===rH ||
          r8===r9 || r8===rA || r8===rB || r8===rC || r8===rD || r8===rE || r8===rF || r8===rG || r8===rH ||
          r9===rA || r9===rB || r9===rC || r9===rD || r9===rE || r9===rF || r9===rG || r9===rH ||
          rA===rB || rA===rC || rA===rD || rA===rE || rA===rF || rA===rG || rA===rH ||
          rB===rC || rB===rD || rB===rE || rB===rF || rB===rG || rB===rH ||
          rC===rD || rC===rE || rC===rF || rC===rG || rC===rH ||
          rD===rE || rD===rF || rD===rG || rD===rH ||
          rE===rF || rE===rG || rE===rH ||
          rF===rG || rF===rH ||
          rG===rH){
        r();
    }
}

function rep() {
    rC = Math.floor(Math.random() * 81);
    rD = Math.floor(Math.random() * 81);
    rE = Math.floor(Math.random() * 81);
    while(r0===r1 || r0===r2 || r0===r3 || r0===r4 || r0===r5 || r0===r6 || r0===r7 || r0===r8 || r0===r9 || r0===rC || r0===rB || r0===rC || r0===rD || r0===rE || r0===rF || r0===rG || r0===rH ||
          r1===r2 || r1===r3 || r1===r4 || r1===r5 || r1===r6 || r1===r7 || r1===r8 || r1===r9 || r1===rA || r1===rB || r1===rC || r1===rD || r1===rE || r1===rF || r1===rG || r1===rH ||
          r2===r3 || r2===r4 || r2===r5 || r2===r6 || r2===r7 || r2===r8 || r2===r9 || r2===rA || r2===rB || r2===rC || r2===rD || r2===rE || r2===rF || r2===rG || r2===rH ||
          r3===r4 || r3===r5 || r3===r6 || r3===r7 || r3===r8 || r3===r9 || r3===rA || r3===rB || r3===rC || r3===rD || r3===rE || r3===rF || r3===rG || r3===rH ||
          r4===r5 || r4===r6 || r4===r7 || r4===r8 || r4===r9 || r4===rA || r4===rB || r4===rC || r4===rD || r4===rE || r4===rF || r4===rG || r4===rH ||
          r5===r6 || r5===r7 || r5===r8 || r5===r9 || r5===rA || r5===rB || r5===rC || r5===rD || r5===rE || r5===rF || r5===rG || r5===rH ||
          r6===r7 || r6===r8 || r6===r9 || r6===rA || r6===rB || r6===rC || r6===rD || r6===rE || r6===rF || r6===rG || r6===rH ||
          r7===r8 || r7===r9 || r7===rA || r7===rB || r7===rC || r7===rD || r7===rE || r7===rF || r7===rG || r7===rH ||
          r8===r9 || r8===rA || r8===rB || r8===rC || r8===rD || r8===rE || r8===rF || r8===rG || r8===rH ||
          r9===rA || r9===rB || rA===rC || r9===rD || r9===rE || r9===rF || r9===rG || r9===rH ||
          rA===rB || rA===rC || rA===rD || rA===rE || rA===rF || rA===rG || rA===rH ||
          rB===rC || rB===rD || rB===rE || rC===rF || rB===rG || rB===rH ||
          rC===rD || rC===rE || rC===rF || rD===rG || rC===rH ||
          rD===rE || rD===rF || rD===rG || rB===rH ||
          rB===rF || rB===rG || rB===rH ||
          rF===rG || rF===rH ||
          rG===rH){
        rC = Math.floor(Math.random() * 81);
        rD = Math.floor(Math.random() * 81);
        rE = Math.floor(Math.random() * 81);
    }
}

function rad() {
    rF = Math.floor(Math.random() * 81);
    rG = Math.floor(Math.random() * 81);
    rH = Math.floor(Math.random() * 81);
    while(r0===r1 || r0===r2 || r0===r3 || r0===r4 || r0===r5 || r0===r6 || r0===r7 || r0===r8 || r0===r9 || r0===rC || r0===rB || r0===rC || r0===rD || r0===rE || r0===rF || r0===rG || r0===rH ||
          r1===r2 || r1===r3 || r1===r4 || r1===r5 || r1===r6 || r1===r7 || r1===r8 || r1===r9 || r1===rA || r1===rB || r1===rC || r1===rD || r1===rE || r1===rF || r1===rG || r1===rH ||
          r2===r3 || r2===r4 || r2===r5 || r2===r6 || r2===r7 || r2===r8 || r2===r9 || r2===rA || r2===rB || r2===rC || r2===rD || r2===rE || r2===rF || r2===rG || r2===rH ||
          r3===r4 || r3===r5 || r3===r6 || r3===r7 || r3===r8 || r3===r9 || r3===rA || r3===rB || r3===rC || r3===rD || r3===rE || r3===rF || r3===rG || r3===rH ||
          r4===r5 || r4===r6 || r4===r7 || r4===r8 || r4===r9 || r4===rA || r4===rB || r4===rC || r4===rD || r4===rE || r4===rF || r4===rG || r4===rH ||
          r5===r6 || r5===r7 || r5===r8 || r5===r9 || r5===rA || r5===rB || r5===rC || r5===rD || r5===rE || r5===rF || r5===rG || r5===rH ||
          r6===r7 || r6===r8 || r6===r9 || r6===rA || r6===rB || r6===rC || r6===rD || r6===rE || r6===rF || r6===rG || r6===rH ||
          r7===r8 || r7===r9 || r7===rA || r7===rB || r7===rC || r7===rD || r7===rE || r7===rF || r7===rG || r7===rH ||
          r8===r9 || r8===rA || r8===rB || r8===rC || r8===rD || r8===rE || r8===rF || r8===rG || r8===rH ||
          r9===rA || r9===rB || rA===rC || r9===rD || r9===rE || r9===rF || r9===rG || r9===rH ||
          rA===rB || rA===rC || rA===rD || rA===rE || rA===rF || rA===rG || rA===rH ||
          rB===rC || rB===rD || rB===rE || rC===rF || rB===rG || rB===rH ||
          rC===rD || rC===rE || rC===rF || rD===rG || rC===rH ||
          rD===rE || rD===rF || rD===rG || rB===rH ||
          rB===rF || rB===rG || rB===rH ||
          rF===rG || rF===rH ||
          rG===rH){
        rF = Math.floor(Math.random() * 81);
        rG = Math.floor(Math.random() * 81);
        rH = Math.floor(Math.random() * 81);
    }
}

function score(varr) {
    x++
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
            z++;
            if (z === 1||z === -1) {
                document.getElementById("z").innerHTML = z + " point";
            } else {
                document.getElementById("z").innerHTML = z + " points";
            }
            hide(on[0]);
            hide(on[1]);
            hide(on[2]);
            rep();
            if (nom === 0) {
                open(card[rC]);
                open(card[rD]);
                open(card[rE]);
            } else {
                nom--;
            }
        } else {
            z--;
            if (z === 1||z === -1) {
                document.getElementById("z").innerHTML = z + " point";
            } else {
                document.getElementById("z").innerHTML = z + " points";
            }
        }
        color();
        zero();
    }
}

function display() {
    rand();
    open(card[r0]);
    open(card[r1]);
    open(card[r2]);
    open(card[r3]);
    open(card[r4]);
    open(card[r5]);
    open(card[r6]);
    open(card[r7]);
    open(card[r8]);
    open(card[r9]);
    open(card[rA]);
    open(card[rB]);

    // alert(r0+" "+r1+" "+r2+" "+r3+" "+r4+" "+r5+" "+r6+" "+r7+" "+r8+" "+r9+" "+rA+" "+rB);
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

    num = 0;
    nom = 0;

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

    for (num=0; num<81; num++) {
        document.getElementById(card[num]).style.transform = "scale(1,1)";
        document.getElementById(card[num]).style.backgroundColor = "#fff";
    }

    num = 0;

    on=[];
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

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

function score(varr) {
    x++;
    document.getElementById(varr).style.transform = "scale(0.9,0.9)";
    document.getElementById(varr).style.backgroundColor = "#fafafa";
    on.push(varr);
    // alert(a+" "+b+" "+c+"\n"+n1+" "+n2+" "+n3+"\n"+d+" "+e+" "+f+"\n"+g+" "+h+" "+i+"\n"+x);
    if (x === 3) {
        if (
            (a === 3 || b === 3 || c === 3 || a === b)&&
            (n1=== 3 || n2=== 3 || n3=== 3 || n1=== n2)&&
            (d === 3 || e === 3 || f === 3 || d === e)&&
            (g === 3 || h === 3 || i === 3 || g === h)
        ){
            z++;
            if (z === 1||z === -1) {
                document.getElementById("z").innerHTML = z + " point";
            } else {
                document.getElementById("z").innerHTML = z + " points";
            }
            hide(on[0]);
            hide(on[1]);
            hide(on[2]);
            rep();
            if (nom === 0) {
                open(card[rC]);
                open(card[rD]);
                open(card[rE]);
            } else {
                nom--;
            }
        } else {
            z--;
            if (z === 1||z === -1) {
                document.getElementById("z").innerHTML = z + " point";
            } else {
                document.getElementById("z").innerHTML = z + " points";
            }
        }
        color();
        zero();
    }
}

function undo(varr) {
    x--;
    document.getElementById(varr).style.transform = "scale(1,1)";
    document.getElementById(varr).style.backgroundColor = "#fff";
    on.remove(varr);
    // alert(a+" "+b+" "+c+"\n"+n1+" "+n2+" "+n3+"\n"+d+" "+e+" "+f+"\n"+g+" "+h+" "+i+"\n"+x);
}

color();
clear();
rand();
display();

document.getElementById("reset").onclick = function reset() {
    z = 0;
    zero();
    color();
    document.getElementById("z").innerHTML = z + " points";
    clear();
    display();
}

document.getElementById("add").onclick = function add() {
    if (nom < 1) {
        rad();
        open(card[rF]);
        open(card[rG]);
        open(card[rH]);
        nom++;
    }
}

document.getElementById("faq").onclick = function() {
  document.getElementById("about").style = "display:fixed";
}
document.getElementById("okay").onclick = function() {
  document.getElementById("about").style = "display:none";
}

/*Red megagroup*/
//1d//
document.getElementById("a1dg").onclick = function() {
    if (a1dg === 0) {
        a++;
        n1++;
        d++;
        g++;
        a1dg++;
        score("a1dg");
    } else {
        a--;
        n1--;
        d--;
        g--;
        a1dg--;
        undo("a1dg");
    }
}
document.getElementById("a1dh").onclick = function() {
    if (a1dh === 0) {
        a++;
        n1++;
        d++;
        h++;
        a1dh++;
        score("a1dh");
    } else {
        a--;
        n1--;
        d--;
        h--;
        a1dh--;
        undo("a1dh");
    }
}
document.getElementById("a1di").onclick = function() {
    if (a1di === 0) {
        a++;
        n1++;
        d++;
        i++;
        a1di++;
        score("a1di");
    } else {
        a--;
        n1--;
        d--;
        i--;
        a1di--;
        undo("a1di");
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
        score("a1eg");
    } else {
        a--;
        n1--;
        e--;
        g--;
        a1eg--;
        undo("a1eg");
    }
}
document.getElementById("a1eh").onclick = function() {
    if (a1eh === 0) {
        a++;
        n1++;
        e++;
        h++;
        a1eh++;
        score("a1eh");
    } else {
        a--;
        n1--;
        e--;
        h--;
        a1eh--;
        undo("a1eh");
    }
}
document.getElementById("a1ei").onclick = function() {
    if (a1ei === 0) {
        a++;
        n1++;
        e++;
        i++;
        a1ei++;
        score("a1ei");
    } else {
        a--;
        n1--;
        e--;
        i--;
        a1ei--;
        undo("a1ei");
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
        score("a1fg");
    } else {
        a--;
        n1--;
        f--;
        g--;
        a1fg--;
        undo("a1fg");
    }
}
document.getElementById("a1fh").onclick = function() {
    if (a1fh === 0) {
        a++;
        n1++;
        f++;
        h++;
        a1fh++;
        score("a1fh");
    } else {
        a--;
        n1--;
        f--;
        h--;
        a1fh--;
        undo("a1fh");
    }
}
document.getElementById("a1fi").onclick = function() {
    if (a1fi === 0) {
        a++;
        n1++;
        f++;
        i++;
        a1fi++;
        score("a1fi");
    } else {
        a--;
        n1--;
        f--;
        i--;
        a1fi--;
        undo("a1fi");
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
        score("a2dg");
    } else {
        a--;
        n2--;
        d--;
        g--;
        a2dg--;
        undo("a2dg");
    }
}
document.getElementById("a2dh").onclick = function() {
    if (a2dh === 0) {
        a++;
        n2++;
        d++;
        h++;
        a2dh++;
        score("a2dh");
    } else {
        a--;
        n2--;
        d--;
        h--;
        a2dh--;
        undo("a2dh");
    }
}
document.getElementById("a2di").onclick = function() {
    if (a2di === 0) {
        a++;
        n2++;
        d++;
        i++;
        a2di++;
        score("a2di");
    } else {
        a--;
        n2--;
        d--;
        i--;
        a2di--;
        undo("a2di");
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
        score("a2eg");
    } else {
        a--;
        n2--;
        e--;
        g--;
        a2eg--;
        undo("a2eg");
    }
}
document.getElementById("a2eh").onclick = function() {
    if (a2eh === 0) {
        a++;
        n2++;
        e++;
        h++;
        a2eh++;
        score("a2eh");
    } else {
        a--;
        n2--;
        e--;
        h--;
        a2eh--;
        undo("a2eh");
    }
}
document.getElementById("a2ei").onclick = function() {
    if (a2ei === 0) {
        a++;
        n2++;
        e++;
        i++;
        a2ei++;
        score("a2ei");
    } else {
        a--;
        n2--;
        e--;
        i--;
        a2ei--;
        undo("a2ei");
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
        score("a2fg");
    } else {
        a--;
        n2--;
        f--;
        g--;
        a2fg--;
        undo("a2fg");
    }
}
document.getElementById("a2fh").onclick = function() {
    if (a2fh === 0) {
        a++;
        n2++;
        f++;
        h++;
        a2fh++;
        score("a2fh");
    } else {
        a--;
        n2--;
        f--;
        h--;
        a2fh--;
        undo("a2fh");
    }
}
document.getElementById("a2fi").onclick = function() {
    if (a2fi === 0) {
        a++;
        n2++;
        f++;
        i++;
        a2fi++;
        score("a2fi");
    } else {
        a--;
        n2--;
        f--;
        i--;
        a2fi--;
        undo("a2fi");
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
        score("a3dg");
    } else {
        a--;
        n3--;
        d--;
        g--;
        a3dg--;
        undo("a3dg");
    }
}
document.getElementById("a3dh").onclick = function() {
    if (a3dh === 0) {
        a++;
        n3++;
        d++;
        h++;
        a3dh++;
        score("a3dh");
    } else {
        a--;
        n3--;
        d--;
        h--;
        a3dh--;
        undo("a3dh");
    }
}
document.getElementById("a3di").onclick = function() {
    if (a3di === 0) {
        a++;
        n3++;
        d++;
        i++;
        a3di++;
        score("a3di");
    } else {
        a--;
        n3--;
        d--;
        i--;
        a3di--;
        undo("a3di");
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
        score("a3eg");
    } else {
        a--;
        n3--;
        e--;
        g--;
        a3eg--;
        undo("a3eg");
    }
}
document.getElementById("a3eh").onclick = function() {
    if (a3eh === 0) {
        a++;
        n3++;
        e++;
        h++;
        a3eh++;
        score("a3eh");
    } else {
        a--;
        n3--;
        e--;
        h--;
        a3eh--;
        undo("a3eh");
    }
}
document.getElementById("a3ei").onclick = function() {
    if (a3ei === 0) {
        a++;
        n3++;
        e++;
        i++;
        a3ei++;
        score("a3ei");
    } else {
        a--;
        n3--;
        e--;
        i--;
        a3ei--;
        undo("a3ei");
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
        score("a3fg");
    } else {
        a--;
        n3--;
        f--;
        g--;
        a3fg--;
        undo("a3fg");
    }
}
document.getElementById("a3fh").onclick = function() {
    if (a3fh === 0) {
        a++;
        n3++;
        f++;
        h++;
        a3fh++;
        score("a3fh");
    } else {
        a--;
        n3--;
        f--;
        h--;
        a3fh--;
        undo("a3fh");
    }
}
document.getElementById("a3fi").onclick = function() {
    if (a3fi === 0) {
        a++;
        n3++;
        f++;
        i++;
        a3fi++;
        score("a3fi");
    } else {
        a--;
        n3--;
        f--;
        i--;
        a3fi--;
        undo("a3fi");
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
        score("b1dg");
    } else {
        b--;
        n1--;
        d--;
        g--;
        b1dg--;
        undo("b1dg");
    }
}
document.getElementById("b1dh").onclick = function() {
    if (b1dh === 0) {
        b++;
        n1++;
        d++;
        h++;
        b1dh++;
        score("b1dh");
    } else {
        b--;
        n1--;
        d--;
        h--;
        b1dh--;
        undo("b1dh");
    }
}
document.getElementById("b1di").onclick = function() {
    if (b1di === 0) {
        b++;
        n1++;
        d++;
        i++;
        b1di++;
        score("b1di");
    } else {
        b--;
        n1--;
        d--;
        i--;
        b1di--;
        undo("b1di");
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
        score("b1eg");
    } else {
        b--;
        n1--;
        e--;
        g--;
        b1eg--;
        undo("b1eg");
    }
}
document.getElementById("b1eh").onclick = function() {
    if (b1eh === 0) {
        b++;
        n1++;
        e++;
        h++;
        b1eh++;
        score("b1eh");
    } else {
        b--;
        n1--;
        e--;
        h--;
        b1eh--;
        undo("b1eh");
    }
}
document.getElementById("b1ei").onclick = function() {
    if (b1ei === 0) {
        b++;
        n1++;
        e++;
        i++;
        b1ei++;
        score("b1ei");
    } else {
        a--;
        n1--;
        e--;
        i--;
        b1ei--;
        undo("b1ei");
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
        score("b1fg");
    } else {
        b--;
        n1--;
        f--;
        g--;
        b1fg--;
        undo("b1fg");
    }
}
document.getElementById("b1fh").onclick = function() {
    if (b1fh === 0) {
        b++;
        n1++;
        f++;
        h++;
        b1fh++;
        score("b1fh");
    } else {
        a--;
        n1--;
        f--;
        h--;
        b1fh--;
        undo("b1fh");
    }
}
document.getElementById("b1fi").onclick = function() {
    if (b1fi === 0) {
        b++;
        n1++;
        f++;
        i++;
        b1fi++;
        score("b1fi");
    } else {
        b--;
        n1--;
        f--;
        i--;
        b1fi--;
        undo("b1fi");
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
        score("b2dg");
    } else {
        b--;
        n2--;
        d--;
        g--;
        b2dg--;
        undo("b2dg");
    }
}
document.getElementById("b2dh").onclick = function() {
    if (b2dh === 0) {
        b++;
        n2++;
        d++;
        h++;
        b2dh++;
        score("b2dh");
    } else {
        b--;
        n2--;
        d--;
        h--;
        b2dh--;
        undo("b2dh");
    }
}
document.getElementById("b2di").onclick = function() {
    if (b2di === 0) {
        b++;
        n2++;
        d++;
        i++;
        b2di++;
        score("b2di");
    } else {
        a--;
        n2--;
        d--;
        i--;
        b2di--;
        undo("b2di");
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
        score("b2eg");
    } else {
        a--;
        n2--;
        e--;
        g--;
        b2eg--;
        undo("b2eg");
    }
}
document.getElementById("b2eh").onclick = function() {
    if (b2eh === 0) {
        b++;
        n2++;
        e++;
        h++;
        b2eh++;
        score("b2eh");
    } else {
        b--;
        n2--;
        e--;
        h--;
        b2eh--;
        undo("b2eh");
    }
}
document.getElementById("b2ei").onclick = function() {
    if (b2ei === 0) {
        b++;
        n2++;
        e++;
        i++;
        b2ei++;
        score("b2ei");
    } else {
        b--;
        n2--;
        e--;
        i--;
        b2ei--;
        undo("b2ei");
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
        score("b2fg");
    } else {
        b--;
        n2--;
        f--;
        g--;
        b2fg--;
        undo("b2fg");
    }
}
document.getElementById("b2fh").onclick = function() {
    if (b2fh === 0) {
        b++;
        n2++;
        f++;
        h++;
        b2fh++;
        score("b2fh");
    } else {
        b--;
        n2--;
        f--;
        h--;
        b2fh--;
        undo("b2fh");
    }
}
document.getElementById("b2fi").onclick = function() {
    if (b2fi === 0) {
        b++;
        n2++;
        f++;
        i++;
        b2fi++;
        score("b2fi");
    } else {
        b--;
        n2--;
        f--;
        i--;
        b2fi--;
        undo("b2fi");
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
        score("b3dg");
    } else {
        b--;
        n3--;
        d--;
        g--;
        b3dg--;
        undo("b3dg");
    }
}
document.getElementById("b3dh").onclick = function() {
    if (b3dh === 0) {
        b++;
        n3++;
        d++;
        h++;
        b3dh++;
        score("b3dh");
    } else {
        b--;
        n3--;
        d--;
        h--;
        b3dh--;
        undo("b3dh");
    }
}
document.getElementById("b3di").onclick = function() {
    if (b3di === 0) {
        b++;
        n3++;
        d++;
        i++;
        b3di++;
        score("b3di");
    } else {
        b--;
        n3--;
        d--;
        i--;
        b3di--;
        undo("b3di");
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
        score("b3eg");
    } else {
        b--;
        n3--;
        e--;
        g--;
        b3eg--;
        undo("b3eg");
    }
}
document.getElementById("b3eh").onclick = function() {
    if (b3eh === 0) {
        b++;
        n3++;
        e++;
        h++;
        b3eh++;
        score("b3eh");
    } else {
        b--;
        n3--;
        e--;
        h--;
        b3eh--;
        undo("b3eh");
    }
}
document.getElementById("b3ei").onclick = function() {
    if (b3ei === 0) {
        b++;
        n3++;
        e++;
        i++;
        b3ei++;
        score("b3ei");
    } else {
        b--;
        n3--;
        e--;
        i--;
        b3ei--;
        undo("b3ei");
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
        score("b3fg");
    } else {
        b--;
        n3--;
        f--;
        g--;
        b3fg--;
        undo("b3fg");
    }
}
document.getElementById("b3fh").onclick = function() {
    if (b3fh === 0) {
        b++;
        n3++;
        f++;
        h++;
        b3fh++;
        score("b3fh");
    } else {
        b--;
        n3--;
        f--;
        h--;
        b3fh--;
        undo("b3fh");
    }
}
document.getElementById("b3fi").onclick = function() {
    if (b3fi === 0) {
        b++;
        n3++;
        f++;
        i++;
        b3fi++;
        score("b3fi");
    } else {
        b--;
        n3--;
        f--;
        i--;
        b3fi--;
        undo("b3fi");
    }
}
/*Blue megagroup*/
//1d//
document.getElementById("c1dg").onclick = function() {
    if (c1dg === 0) {
        c++;
        n1++;
        d++;
        g++;
        c1dg++;
        score("c1dg");
    } else {
        c--;
        n1--;
        d--;
        g--;
        c1dg--;
        undo("c1dg");
    }
}
document.getElementById("c1dh").onclick = function() {
    if (c1dh === 0) {
        c++;
        n1++;
        d++;
        h++;
        c1dh++;
        score("c1dh");
    } else {
        c--;
        n1--;
        d--;
        h--;
        c1dh--;
        undo("c1dh");
    }
}
document.getElementById("c1di").onclick = function() {
    if (c1di === 0) {
        c++;
        n1++;
        d++;
        i++;
        c1di++;
        score("c1di");
    } else {
        c--;
        n1--;
        d--;
        i--;
        c1di--;
        undo("c1di");
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
        score("c1eg");
    } else {
        c--;
        n1--;
        e--;
        g--;
        c1eg--;
        undo("c1eg");
    }
}
document.getElementById("c1eh").onclick = function() {
    if (c1eh === 0) {
        c++;
        n1++;
        e++;
        h++;
        c1eh++;
        score("c1eh");
    } else {
        c--;
        n1--;
        e--;
        h--;
        c1eh--;
        undo("c1eh");
    }
}
document.getElementById("c1ei").onclick = function() {
    if (c1ei === 0) {
        c++;
        n1++;
        e++;
        i++;
        c1ei++;
        score("c1ei");
    } else {
        a--;
        n1--;
        e--;
        i--;
        c1ei--;
        undo("c1ei");
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
        score("c1fg");
    } else {
        c--;
        n1--;
        f--;
        g--;
        c1fg--;
        undo("c1fg");
    }
}
document.getElementById("c1fh").onclick = function() {
    if (c1fh === 0) {
        c++;
        n1++;
        f++;
        h++;
        c1fh++;
        score("c1fh");
    } else {
        a--;
        n1--;
        f--;
        h--;
        c1fh--;
        undo("c1fh");
    }
}
document.getElementById("c1fi").onclick = function() {
    if (c1fi === 0) {
        c++;
        n1++;
        f++;
        i++;
        c1fi++;
        score("c1fi");
    } else {
        c--;
        n1--;
        f--;
        i--;
        c1fi--;
        undo("c1fi");
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
        score("c2dg");
    } else {
        c--;
        n2--;
        d--;
        g--;
        c2dg--;
        undo("c2dg");
    }
}
document.getElementById("c2dh").onclick = function() {
    if (c2dh === 0) {
        c++;
        n2++;
        d++;
        h++;
        c2dh++;
        score("c2dh");
    } else {
        c--;
        n2--;
        d--;
        h--;
        c2dh--;
        undo("c2dh");
    }
}
document.getElementById("c2di").onclick = function() {
    if (c2di === 0) {
        c++;
        n2++;
        d++;
        i++;
        c2di++;
        score("c2di");
    } else {
        a--;
        n2--;
        d--;
        i--;
        c2di--;
        undo("c2di");
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
        score("c2eg");
    } else {
        a--;
        n2--;
        e--;
        g--;
        c2eg--;
        undo("c2eg");
    }
}
document.getElementById("c2eh").onclick = function() {
    if (c2eh === 0) {
        c++;
        n2++;
        e++;
        h++;
        c2eh++;
        score("c2eh");
    } else {
        c--;
        n2--;
        e--;
        h--;
        c2eh--;
        undo("c2eh");
    }
}
document.getElementById("c2ei").onclick = function() {
    if (c2ei === 0) {
        c++;
        n2++;
        e++;
        i++;
        c2ei++;
        score("c2ei");
    } else {
        c--;
        n2--;
        e--;
        i--;
        c2ei--;
        undo("c2ei");
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
        score("c2fg");
    } else {
        c--;
        n2--;
        f--;
        g--;
        c2fg--;
        undo("c2fg");
    }
}
document.getElementById("c2fh").onclick = function() {
    if (c2fh === 0) {
        c++;
        n2++;
        f++;
        h++;
        c2fh++;
        score("c2fh");
    } else {
        c--;
        n2--;
        f--;
        h--;
        c2fh--;
        undo("c2fh");
    }
}
document.getElementById("c2fi").onclick = function() {
    if (c2fi === 0) {
        c++;
        n2++;
        f++;
        i++;
        c2fi++;
        score("c2fi");
    } else {
        c--;
        n2--;
        f--;
        i--;
        c2fi--;
        undo("c2fi");
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
        score("c3dg");
    } else {
        c--;
        n3--;
        d--;
        g--;
        c3dg--;
        undo("c3dg");
    }
}
document.getElementById("c3dh").onclick = function() {
    if (c3dh === 0) {
        c++;
        n3++;
        d++;
        h++;
        c3dh++;
        score("c3dh");
    } else {
        c--;
        n3--;
        d--;
        h--;
        c3dh--;
        undo("c3dh");
    }
}
document.getElementById("c3di").onclick = function() {
    if (c3di === 0) {
        c++;
        n3++;
        d++;
        i++;
        c3di++;
        score("c3di");
    } else {
        c--;
        n3--;
        d--;
        i--;
        c3di--;
        undo("c3di");
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
        score("c3eg");
    } else {
        c--;
        n3--;
        e--;
        g--;
        c3eg--;
        undo("c3eg");
    }
}
document.getElementById("c3eh").onclick = function() {
    if (c3eh === 0) {
        c++;
        n3++;
        e++;
        h++;
        c3eh++;
        score("c3eh");
    } else {
        c--;
        n3--;
        e--;
        h--;
        c3eh--;
        undo("c3eh");
    }
}
document.getElementById("c3ei").onclick = function() {
    if (c3ei === 0) {
        c++;
        n3++;
        e++;
        i++;
        c3ei++;
        score("c3ei");
    } else {
        c--;
        n3--;
        e--;
        i--;
        c3ei--;
        undo("c3ei");
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
        score("c3fg");
    } else {
        c--;
        n3--;
        f--;
        g--;
        c3fg--;
        undo("c3fg");
    }
}
document.getElementById("c3fh").onclick = function() {
    if (c3fh === 0) {
        c++;
        n3++;
        f++;
        h++;
        c3fh++;
        score("c3fh");
    } else {
        c--;
        n3--;
        f--;
        h--;
        c3fh--;
        undo("c3fh");
    }
}
document.getElementById("c3fi").onclick = function() {
    if (c3fi === 0) {
        c++;
        n3++;
        f++;
        i++;
        c3fi++;
        score("c3fi");
    } else {
        c--;
        n3--;
        f--;
        i--;
        c3fi--;
        undo("c3fi");
    }
}