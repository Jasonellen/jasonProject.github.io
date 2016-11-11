
var btn =document.querySelectorAll('td');
var shuZi =document.querySelectorAll('.shuzi');
var result =document.querySelector('p');
var lastBtn=document.querySelectorAll('.last');
// 点击变色
for(var i=0; i<19; i++){
	btn[i].onmousedown=function(){
		this.style.backgroundColor='#999';
	}
	btn[i].onmouseup=function(){
		this.style.backgroundColor='#7e7e7e';
	}
	btn[i].onmouseout=function(){  // 改不同步或滑出的bug
		this.style.backgroundColor='#7e7e7e';
	}
}
for(var i=0; i<5; i++){
	lastBtn[i].onmousedown=function(){
		this.style.backgroundColor='gold';
	}
	lastBtn[i].onmouseup=function(){
		this.style.backgroundColor='#ff8d0c';
	}
	lastBtn[i].onmouseout=function(){
		this.style.backgroundColor='#ff8d0c';
	}
}
// 数字点击
var str1="";
for(var i=0; i<11; i++){
	shuZi[i].onclick = function(){
		if(onOff){   //如果按了+ - =就打开开关，再按数字键前清空结果
			result.innerHTML="";
			onOff=0;  //清空一次就关闭
		}
		btn[0].innerHTML ='C';
		str1 = result.innerHTML.toString();
		str1 += this.innerHTML;
		
		if(result.innerHTML.indexOf(".") !== -1){
			result.innerHTML=str1;   //有小数点就不用float了
		}else{
			result.innerHTML = parseFloat(str1);
		}	
		onOff1 = 1;
	}
}
// 清零操作
btn[0].onclick=function(){
	result.innerHTML='0';
	btn[0].innerHTML='AC';
	str1 = "";
}

// 运算符
// 正负
btn[1].onclick=function(){
	var str2 = result.innerHTML.toString();
	if(str2[0] == "-"){
		result.innerHTML= str2.substring(1);
	}else{
		result.innerHTML = "-"+result.innerHTML;
	}
}

var arr=[];
var onOff = 0;
var onOff1 = 0;
// 取模
btn[2].onclick=function(){
	arr[0] = result.innerHTML;
	arr[1] = "%";
	onOff=1;
}
btn[3].onclick=function(){
	arr[0] = result.innerHTML;
	arr[1] = "÷";
	onOff=1;
}
btn[7].onclick=function(){
	arr[0] = result.innerHTML;
	arr[1] = "×";
	onOff=1;
	
}
btn[11].onclick=function(){
	arr[0] = result.innerHTML;
	arr[1] = "－";
	onOff=1;
	
}
btn[15].onclick=function(){
	arr[0] = result.innerHTML;
	arr[1] = "＋";
	onOff=1;
}
btn[17].onclick=function(){
	if(result.innerHTML.indexOf(".") == -1){
		result.innerHTML += ".";
	}
	
}

// 等于
btn[18].onclick=function(){
	if(onOff1){
		if(arr[1] == "%"){
			result.innerHTML=parseFloat(arr[0])%parseFloat(result.innerHTML);
		}else if(arr[1] == "÷"){
			result.innerHTML=parseFloat(arr[0])/parseFloat(result.innerHTML);
		}else if(arr[1] == "×"){
			result.innerHTML=parseFloat(arr[0])*parseFloat(result.innerHTML);
		}else if(arr[1] == "－"){
			result.innerHTML=parseFloat(arr[0])-parseFloat(result.innerHTML);
		}else if(arr[1] == "＋"){
			result.innerHTML=parseFloat(arr[0])+parseFloat(result.innerHTML);
		}
		onOff=1;
		onOff1=0;   //运算一次就关闭=，按数字键后从新打开
	}
}
// 让文本不能被选中
document.onmousedown=function(){
	document.onmousemove=function(){
		return false;
	}
}