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

var r = Math.floor(Math.random() * (82));

function rand(){
    r = Math.floor(Math.random() * (82));
    if(r===1){r="a1Ad";} if(r===2){r="a1Ae";} if(r===3){r="a1Af";}
    if(r===4){r="a1Bd";} if(r===5){r="a1Be";} if(r===6){r="a1Bf";}
    if(r===7){r="a1Cd";} if(r===8){r="a1Ce";} if(r===9){r="a1Cf";}

    if(r===10){r="a2Ad";} if(r===11){r="a2Ae";} if(r===12){r="a2Af";}
    if(r===13){r="a2Bd";} if(r===14){r="a2Be";} if(r===15){r="a2Bf";}
    if(r===16){r="a2Cd";} if(r===17){r="a2Ce";} if(r===18){r="a2Cf";}

    if(r===19){r="a3Ad";} if(r===20){r="a3Ae";} if(r===21){r="a3Af";}
    if(r===22){r="a3Bd";} if(r===23){r="a3Be";} if(r===24){r="a3Bf";}
    if(r===25){r="a3Cd";} if(r===26){r="a3Ce";} if(r===27){r="a3Cf";}


    if(r===28){r="b1Ad";} if(r===29){r="b1Ae";} if(r===30){r="b1Af";}
    if(r===31){r="b1Bd";} if(r===32){r="b1Be";} if(r===33){r="b1Bf";}
    if(r===34){r="b1Cd";} if(r===35){r="b1Ce";} if(r===36){r="b1Cf";}

    if(r===37){r="b2Ad";} if(r===38){r="b2Ae";} if(r===39){r="b2Af";}
    if(r===40){r="b2Bd";} if(r===41){r="b2Be";} if(r===42){r="b2Bf";}
    if(r===43){r="b2Cd";} if(r===44){r="b2Ce";} if(r===45){r="b2Cf";}

    if(r===46){r="b3Ad";} if(r===47){r="b3Ae";} if(r===48){r="b3Af";}
    if(r===49){r="b3Bd";} if(r===50){r="b3Be";} if(r===51){r="b3Bf";}
    if(r===52){r="b3Cd";} if(r===53){r="b3Ce";} if(r===54){r="b3Cf";}


    if(r===55){r="c1Ad";} if(r===56){r="c1Ae";} if(r===57){r="c1Af";}
    if(r===58){r="c1Bd";} if(r===59){r="c1Be";} if(r===60){r="c1Bf";}
    if(r===61){r="c1Cd";} if(r===62){r="c1Ce";} if(r===63){r="c1Cf";}

    if(r===64){r="c2Ad";} if(r===65){r="c2Ae";} if(r===66){r="c2Af";}
    if(r===67){r="c2Bd";} if(r===68){r="c2Be";} if(r===69){r="c2Bf";}
    if(r===70){r="c2Cd";} if(r===71){r="c2Ce";} if(r===72){r="c2Cf";}

    if(r===73){r="c3Ad";} if(r===74){r="c3Ae";} if(r===75){r="c3Af";}
    if(r===76){r="c3Bd";} if(r===77){r="c3Be";} if(r===78){r="c3Bf";}
    if(r===79){r="c3Cd";} if(r===80){r="c3Ce";} if(r===81){r="c3Cf";} 
}

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

function display() {
    rand();
    open(r);
}

clear();
display();
display();
display();
display();
display();
display();
display();
display();
display();
display();
display();
display();

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
    if (x === 3) {
        if (a+b===3 && b+c===3&&a+c===3&&
            n1+n2===3&&n2+n3===3&&n1+n3===3&&
            A+B===3&&B+C===3&&A+C===3&&
            d+e===3&&e+f===3&&d+f===3) {
            oof();
        } else {
            yay();
        }
        zero();
    }
    color();
}

color();

document.getElementById("reset").onclick = function reset() {
    z = 0;
    zero();
    color();
    document.getElementById("z").innerHTML = z + " points";
    clear();
    display();
    display();
    display();
    display();
    display();
    display();
    display();
    display();
    display();
    display();
    display();
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
        f++
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
        f++
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
        f++
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
        f++
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
        f++
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
        f++
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
        f++
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
        f++
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
        f++
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
        f++
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
        f++
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
        f++
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
        f++
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
        f++
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
        f++
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
        f++
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
        f++
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
        f++
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
        f++
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
        f++
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
        f++
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
        f++
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
        f++
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
        f++
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
        f++
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
        f++
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
        f++
        c3Cf++;
        x++;
        score("c3Cf");
    }
}