/**
 * Created by lanou on 16/9/27.
 */
var ul = document.querySelector(".pic-show ul");
var oLi = document.querySelectorAll(".pic-show ol li");
ul.innerHTML +=ul.innerHTML;
var aLi = document.querySelectorAll(".pic-show ul li");
var pre = document.querySelector(".pre");
var next = document.querySelector(".next");
var box = document.querySelector(".pic-show")
var timer=null;timer1=null;
var n=0;num=0;
ul.style.width = (aLi[0].offsetWidth+4)*aLi.length + "px";

function runLeft(){
    num++;
    if (num>5){
        num=0;
    }
    for(var i=0; i<oLi.length; i++){
        oLi[i].className="";
    }

    clearInterval(timer);
    timer = setInterval(function(){
        n++;
        if (ul.offsetLeft+ul.offsetWidth-aLi[0].offsetWidth<10){
            ul.style.left =-ul.offsetWidth/2+aLi[0].offsetWidth+"px";
            console.log( ul.style.left)
        }else{
            ul.style.left = ul.offsetLeft -(aLi[0].offsetWidth+4)/120*n + "px";
        }
        if (n ==15){
            clearInterval(timer);
            n = 0;
        }
    },30)
    oLi[num].className="active";
}
function runRight(){
    num--;
    if (num<0){
        num=5;
    }
    for(var i=0; i<oLi.length; i++){
        oLi[i].className="";
    }
    clearInterval(timer);
    timer = setInterval(function(){
        n++;
        if (Math.abs(ul.offsetLeft) < 10 ){
            ul.style.left =-ul.offsetWidth/2 +5+"px";
            num=5;
        }else{
            ul.style.left = ul.offsetLeft +(aLi[0].offsetWidth+4)/120*n + "px";
        }
        if (n ==15){
            clearInterval(timer);
            n = 0;
        }
    },30)

    oLi[num].className="active";
}
pre.onclick = function(){
    runLeft();
}
next.onclick = function(){
    runRight();
}
for(var i=0; i<oLi.length; i++){
    oLi[i].index = i;
    oLi[i].onclick =function(){
        num=this.index;
        ul.style.left = -num*(aLi[0].offsetWidth+4)+"px";
        for(var j=0; j<oLi.length; j++){
            oLi[j].className="";
        }
        this.className="active";
    }
}
box.onmouseover=function(){
    clearInterval(timer1);
    pre.style.display="block";
    next.style.display="block";
}
box.onmouseout = function(){
    timer1=setInterval(function(){
        runLeft();
    },2000)
    pre.style.display="none";
    next.style.display="none";
}
timer1=setInterval(function(){
    runLeft();
},2000)
