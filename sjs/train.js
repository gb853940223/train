// JavaScript Document
$(function(){
	
	
	//绘制移动点
	
	var point = [{x: 10,y: 10},{x: 700,y: 400}];
	
	
	var ctx = $('#canvas').get(0).getContext('2d');
	ctx.beginPath();
	
	ctx.arc(50,50,20,0,Math.PI*2);
	
	ctx.fillStyle = "#000"
	ctx.fill();
	
	ctx.lineWidth = '2'
	ctx.strokeStyle = "red";
	ctx.stroke();
	
	ctx.closePath();
	
	
	
	
	
	
	
	
	
})


















































