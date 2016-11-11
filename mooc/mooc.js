/******头部导航******/ 
var phone=document.querySelector(".glyphicon-phone");
var APP = document.querySelector(".sp-down");
phone.onmouseover=function(){
	APP.style.display="block";
}
APP.onmouseover=function(){
	APP.style.display="block";
}
phone.onmouseout=function(){
	APP.style.display="";
}
APP.onmouseout=function(){
	APP.style.display="";
}
/******myBody部分******/ 
/*****轮播图*****/ 
var aLi = document.querySelectorAll(".top-lunbo li");
var Des = document.querySelectorAll(".description>div");
var aImg = document.querySelectorAll(".lunbo-bg img")
var aControl =document.querySelectorAll(".lunbo-right .control span")
var aDot =document.querySelectorAll(".lunbo-right .dot div");
var dotLength=aDot.length;
var liLength=aLi.length;
var n=dotLength-1;
var timer=null;
for(var i=0; i<liLength; i++){
	aLi[i].index=i;
	aLi[i].onmouseover=function(){
		this.style.background="rgba(0, 0, 0,.6)";
		Des[this.index].style.display="block";
	}
	aLi[i].onmouseout=function(){
		this.style.background="";
		Des[this.index].style.display="";
	}
	Des[i].onmouseover=function(){
		this.style.display="block";
	}
	Des[i].onmouseout=function(){
		this.style.display="";
	}
}
for(var i=0; i<dotLength; i++){
	aDot[i].index = i;
	aDot[i].onclick=function(){
		for(var j=0; j<dotLength; j++){
			aImg[j].style.opacity="0";
			aDot[j].style.opacity="0.4";
		}
		aImg[this.index].style.opacity="1";
		this.style.opacity="1";
		n=this.index;
	}
	aControl[i].onmouseover=function(){
		this.style.backgroundColor="rgba(0,0,0,0.5)";
	}
	aControl[i].onmouseout=function(){
		this.style.backgroundColor="";
	}
	aImg[i].onmouseover=function(){
		clearInterval(timer);
	}
	aImg[i].onmouseout=function(){
		timer = setInterval(function(){
			next();
		},3000)
	}
}

aControl[0].onclick=function(){
	clearInterval(timer)
	pre();
}
aControl[1].onclick=function(){
	clearInterval(timer)
	next();
}
aControl[0].onmouseout=function(){
	timer = setInterval(function(){
		next();
	},3000)
}
aControl[1].onmouseout=function(){
	timer = setInterval(function(){
		next();
	},3000)
}
function pre(){
	n--;
	if(n<0){
		n = dotLength-1;
	}
	for(var j=0; j<dotLength; j++){
		aImg[j].style.opacity="0";
		aDot[j].style.opacity="0.4";
	}
	aImg[n].style.opacity="1";
	aDot[n].style.opacity="1";
}
function next(){
	n++;
	if(n>dotLength-1){
		n = 0;
	}
	for(var j=0; j<dotLength; j++){
		aImg[j].style.opacity="0";
		aDot[j].style.opacity="0.4";
	}
	aImg[n].style.opacity="1";
	aDot[n].style.opacity="1";
}
timer = setInterval(function(){
	next();
},3000)
/******   侧边栏     *******/ 
var qusLi=document.querySelectorAll("aside li")
var qusLiMa=document.querySelectorAll("aside div")
qusLi[1].onmouseover=function(){
	qusLiMa[0].style.width="160px";
	qusLiMa[0].style.height="180px";
	qusLiMa[0].style.transition="0.5s"; // 就不需要函数了
}
qusLi[1].onmouseout=function(){
	qusLiMa[0].style.width="";
	qusLiMa[0].style.height="";
	qusLiMa[0].style.transition="";
	// qusLiMa[0].style.animation="remove .02s forwards";

}
qusLi[2].onmouseover=function(){
	qusLiMa[1].style.width="160px";
	qusLiMa[1].style.height="200px";
	qusLiMa[1].style.transition="0.5s";

}
qusLi[2].onmouseout=function(){
	qusLiMa[1].style.width="";
	qusLiMa[1].style.height="";
	qusLiMa[1].style.transition="";
}

