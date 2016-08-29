// JavaScript Document
tools={
//-----------------获取style-----------------------
'getStyle':function(obj, name){
	var value=obj.currentStyle ? obj.currentStyle[name]:getComputedStyle(obj, false)[name];
	if(name=='opacity'){
		value=Math.round(parseFloat(value)*100);
	}
	else{
		value=parseInt(value);
	}
	return value;
},


//---------------运动框架-------------------------
'move':function(obj,modejson,t,callback){
	clearInterval(obj.timer);
	//d/t=v;
	var speed={'veryslow':5000,'slow':3000,'normal':1000,'fast':500,'veryfast':100};
	if(t){
		if(typeof(t)=='string'){
			//t=speed[t];
			if(speed[t]){
				t=speed[t];
			}else{
				alert('请输入正确值');
			};
		};
	}else{
		t=speed.normal;	
	};
	var start={};
	var dis={};
	for(var key in modejson){
		start[key]=tools.getStyle(obj,key);
		dis[key]=modejson[key]-start[key];	
	};
/*		console.log(dis)
	return*/
	
	var n=0;
	var count=parseInt(t/30);
	
	obj.timer=setInterval(function(){
		n++;
		for(var key in modejson){
			var a=1-n/count;
			var step_dis=start[key]+dis[key]*(1-a*a*a);
			if(key=='opacity'){
				obj.style.opacity=step_dis/100;
				obj.style.filter='alpha(opacity:'+step_dis+')';//兼容IE
			}else{
				obj.style[key]=step_dis+'px';	
			};
		};
		if(n>=count){
			clearInterval(obj.timer);
			callback && callback();
		};
	},30);
},
//---------------------放大镜--------------------------------
'zoom':function(id,zoomid){
	var oDiv=document.getElementById(id);
	var oMir=oDiv.getElementsByTagName('div')[0];
	var oBig=document.getElementById(zoomid);	
	var oPic=oBig.getElementsByTagName('img')[0];
	oDiv.onmousemove=function(ev){
		var oEv=ev || window.event;
		var l=oEv.clientX-oDiv.offsetLeft-oMir.offsetWidth/2;
		var t=oEv.clientY-oDiv.offsetTop-oMir.offsetHeight/2;
		if(l<0)l=0;
		if(t<0)t=0;
		if(l>oDiv.offsetWidth-oMir.offsetWidth)l=oDiv.offsetWidth-oMir.offsetWidth;
		if(t>oDiv.offsetHeight-oMir.offsetHeight)t=oDiv.offsetHeight-oMir.offsetHeight;
		
		oMir.style.left=l+"px";
		oMir.style.top=t+"px";
		var rate_l=oMir.offsetLeft/(oDiv.offsetWidth-oMir.offsetWidth)
		var rate_t=oMir.offsetTop/(oDiv.offsetHeight-oMir.offsetHeight)
		var l_pic=oPic.offsetWidth-oBig.offsetWidth;
		var t_pic=oPic.offsetHeight-oBig.offsetHeight;
		oPic.style.left=-rate_l*l_pic+'px';
		oPic.style.top=-rate_t*t_pic+'px';
	};
	
	
	oDiv.onmouseover=function(){
		oMir.style.display=oBig.style.display="block";
	};
	
	oDiv.onmouseout=function(){
		oMir.style.display=oBig.style.display="none";
	};
}

}