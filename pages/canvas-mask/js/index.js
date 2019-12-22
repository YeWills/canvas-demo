var canvasWidth=window.innerWidth;
var canvasHeight=window.innerHeight;


var canvas=document.getElementById('canvas');
var can_div=document.getElementById('can-div');
var can_img=can_div.getElementsByClassName("img-blur")[0];
var ctx=canvas.getContext('2d');
canvas.width=canvasWidth;
canvas.height=canvasHeight;

var img=new Image();
var radius=50;
var topMargin=0;
var leftMargin=0;
var clipImg={x:Math.random()*(canvas.width-2*radius)+radius, y:Math.random()*(canvas.height-2*radius)+radius, r:radius};
img.src='img/1.jpg';
img.onload=function(){
	can_div.style.width=canvasWidth+'px';
	can_div.style.height=canvasHeight+'px';
	
	can_img.style.width=img.width+'px';
	can_img.style.height=img.height+'px';
	
	topMargin=(img.height-canvas.height)/2;
	leftMargin=(img.width-canvas.width)/2;
	
	can_img.style.left=String(-leftMargin)+'px';
	can_img.style.top=String(-topMargin)+'px';
	
	iniImg();
	console.log(img.height+' '+canvas.height+' '+topMargin+' '+can_img.offsetTop);
	console.log(img.width+' '+canvas.width+' '+leftMargin+' '+can_img.offsetLeft);
	
	
}
function iniImg(){
	//当画布比图片大的时候多出来的部分
	var theLeft=leftMargin<0?-leftMargin:0;
	var theTop=topMargin<0?-topMargin:0;
	clipImg={x:Math.random()*(canvas.width-2*radius-2*theLeft)+radius+theLeft,
			 y:Math.random()*(canvas.height-2*radius-2*theTop)+radius+theTop, r:radius};
	draw(img,clipImg);
}
//剪辑区域
function setClipImg(){
	ctx.beginPath();
	ctx.arc(clipImg.x, clipImg.y, clipImg.r, 0, Math.PI*2);
	ctx.clip();
}
function draw(img,clipImg){
	ctx.clearRect(0,0,canvasWidth,canvasHeight);
	
	ctx.save();
	setClipImg(clipImg);
	ctx.drawImage(img,Math.max(leftMargin,0),Math.max(topMargin,0),
					Math.min(canvas.width,img.width),Math.min(canvas.height,img.height),
					leftMargin<0?-leftMargin:0,topMargin<0?-topMargin:0,
					Math.min(canvas.width,img.width),Math.min(canvas.height,img.height));
	ctx.restore();
}
function reset(){
	
	if(clipImg.r<=50){
		iniImg();
	}else if (clipImg.r>=1000) {
		var timer2=setInterval(function(){
			clipImg.r-=50;
			draw(img,clipImg);
			if (clipImg.r<=50) {
				clearInterval(timer2);
			}
		},30);
	}
	
	
}
function show(){
	var timer=setInterval(function(){
		clipImg.r+=50;
		draw(img,clipImg);
		if(clipImg.r>=1000){
			clearInterval(timer);
		}
	},30);
	
}



