//console.log('r/place')
var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c = canvas.getContext('2d');
// c.fillStyle='rgba(255,0,0,0.5)'
// c.fillRect(100,100,100,100);
// c.fillStyle='rgba(0,0,255,0.5)'
// c.fillRect(400,100,100,100);
// c.fillStyle='rgba(0,255,0,0.5)'
// c.fillRect(300,300,100,100);

//line
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.lineTo(400,300);
// c.strokeStyle="blue"
// c.stroke();

//arc
// c.beginPath();
// c.arc(300,300,30,0,Math.PI=2,false);
// c.strokeStyle='blue';
// c.stroke();


// for(var i=0;i<100;i++){
// 	var x=Math.random()*window.innerWidth;
// 	var y=Math.random()*window.innerHeight;
// 	c.beginPath();
// 	c.arc(x,y,30,90,Math.PI=2,false);
// 	var n=Math.floor(226*Math.random());
// 	var m=Math.floor(226*Math.random());
// 	var t=Math.floor(226*Math.random());

// 	c.strokeStyle='rgba('+n+','+m+','+t+',1)';

// c.stroke();
// }
	

	var mouse={
		x:undefined,
		y:undefined
	}
	var maxRadius=40;
	//var minRadius=2; 


	var colorArray=[
		'#ffaa33',
		'#aaccdd',
		'#ffeeaa',
		'#432fea',

	];


window.addEventListener('mousemove',
	function(event){
	mouse.x=event.x;
	mouse.y=event.y;
	console.log(mouse)
})



function Circle(x,y,dx,dy,radius){
	this.x=x;
	this.y=y;
	this.dx=dx;
	this.dy=dy;
	this.radius=radius;
	this.minRadius=radius;
	this.color=colorArray[Math.floor(Math.random()*colorArray.length)];

	this.draw=function(){
		c.beginPath();
	c.arc(this.x,this.y,this.radius,90,Math.PI=2,false);	
	c.fillStyle = this.color;
	c.fill();

	}
	this.update=function(){
			if(this.x+this.radius>innerWidth || this.x-this.radius<0){
			this.dx=-this.dx;
		}
		if(this.y+radius>innerWidth|| this.y-radius<0){
			this.dy=this.dy-1;
		}
		this.x+=this.dx;
		this.y+=this.dy;

        //interactivity
        if((mouse.x-this.x)<50 && mouse.x-this.x>-50&&mouse.y-this.y<50
         && mouse.y-this.y>-50)
        {
        	if(this.radius<maxRadius){
        	this.radius+=1;
        }

        }else if(this.radius>this.minRadius){
        	this.radius-=1;
        }
		this.draw()

		}
		
}	



var circleArray=[];

for(var i=0;i<700;i++){
	var radius=Math.random()*3+2;
	var x=Math.random()*(innerWidth-radius+2)+radius;
var y=Math.random()*(innerHeight-radius+2)+radius;
var dx=(Math.random()-0.5);
var dy=(Math.random()-0.5);

	circleArray.push(new Circle(x,y,dx,dy,radius));

}




function animate(){
	requestAnimationFrame(animate)
	c.clearRect(0,0,innerWidth,innerHeight);

	for(var i=0;i<circleArray.length;i++){
		circleArray[i].update();
	}

	
	//circle.update();


}
animate();

