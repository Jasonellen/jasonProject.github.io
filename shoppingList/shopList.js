
function $(x){
	return document.querySelectorAll(x);
}
// 获取元素
var allCheck=$(".allCheck");
var preCheck=$(".preCheck");
var minus =$(".minus");
var plus =$(".plus");
var count=$(".count")[0];
var jianShu=$(".jianshu");
var price=$(".price");
var sum=$(".shopping-list strong");
var totalSum=$(".totalSum");
var li=$(".shopping-list li");
var num=0;
var ttsum=0;
var length=li.length;
// 全选和选择
allCheck[0].onclick=function(){
	checkAll(this,allCheck[1]);
}
allCheck[1].onclick=function(){
	checkAll(this,allCheck[0]);
}
// 单个选择按钮
for(var i=0; i<length; i++){
	preCheck[i].index=i;
	preCheck[i].onclick=function(){
		var onOff=1;
		if(this.checked=="1"){
			li[this.index].className="box-bg";
			// 判断全选开关是否打开
			for(var i=0;i<preCheck.length; i++){
				if(preCheck[i].checked==""){
					onOff=0;
				}
			}
			if(onOff){   
				for(var i=0;i<preCheck.length; i++){
					allCheck[i].checked="1";
				}	
			}
			// 选中后总金额增加
			ttsum+=parseFloat(sum[this.index].innerHTML);
			totalSum[0].innerHTML=ttsum+".00";
			totalSum[1].innerHTML=ttsum+".00";
		}else{
			li[this.index].className="";
			ttsum-=parseFloat(sum[this.index].innerHTML);
			for(var i=0;i<preCheck.length; i++){
				allCheck[i].checked="";
				totalSum[i].innerHTML=ttsum+".00";
			}
		}
	}
}
// 商品件数减少
for(var i=0; i<length; i++){
	minus[i].index=i;
	minus[i].onclick=function(){
		if(jianShu[this.index].value==1){
			this.style.color="#ddd";
			jianShu[this.index].value--;
			preCheck[this.index].checked="";
			li[this.index].className="";
			sum[this.index].innerHTML="0.00";
			ttSum();
			return;
		}else if(jianShu[this.index].value==0){
			return;
		}else{
			jianShu[this.index].value--;
			preCheck[this.index].checked="1";
			li[this.index].className="box-bg";
			sum[this.index].innerHTML=price[this.index].innerHTML*jianShu[this.index].value+".00";
			ttSum();
		}
	}
}
// 商品件数增加
for(var i=0; i<length; i++){
	plus[i].index=i;
	plus[i].onclick=function(){
		jianShu[this.index].value++;
		preCheck[this.index].checked="1";
		li[this.index].className="box-bg";
		minus[this.index].style.color="";
		sum[this.index].innerHTML=price[this.index].innerHTML*jianShu[this.index].value+".00";
		ttSum();
	}
}
// 全选函数
function checkAll(x,y){
	if(x.checked=="1"){
		y.checked="1";
		for(var i=0; i<length; i++){
			preCheck[i].checked="1";
			li[i].className="box-bg";
		}
		for(var i=0; i<length; i++){
			num+=parseInt(jianShu[i].value);
			count.innerHTML=num;
			ttSum();
		}	
	}else{
		y.checked="";
		for(var i=0; i<length; i++){
			preCheck[i].checked="";
			li[i].className="";
			totalSum[i].innerHTML="0.00";
		}
		num=0;
		ttsum=0;
		count.innerHTML=0;
	}
}
// 汇总函数
function ttSum(){
	ttsum=0;
	num=0;
	for(var i=0; i<length; i++){
		if(preCheck[i].checked=="1"){
			ttsum+=parseFloat(sum[i].innerHTML);
			num+=parseFloat(jianShu[i].value)
		}
	}
	totalSum[0].innerHTML=ttsum+".00";
	totalSum[1].innerHTML=ttsum+".00";
	count.innerHTML=num;
}
