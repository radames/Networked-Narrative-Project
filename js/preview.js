'use strict';

var Character = function(){
	this.sliders = [];
	
	this.init = function(px, py, data){
		this.px = px;
		this.py = py;
		this.thick = 3;
		this.sliders = data.sliders;
		this.charType = data.charType;
		this.creationName = data.creationName;
		this.creationInfo = data.creationInfo;
		this.locationType = data.locationType;
	};
	this.setX = function(px){
		this.px = px;	
	};
	this.draw = function(){
		if(this.charType === 'Human'){
			this.drawHumanBody(this.px, this.py);
		}else{
			this.drawRobotBody(this.px, this.py+50);
		}
	};
	this.drawRobotBody = function(px, py){	
		push();
			translate(px,py);
			rotate(atan2(mouseY-height/2, mouseX-width/2)/50);
			this.drawRobotBase(0,40, 0.5 + this.sliders[2]/100.0);
			this.drawRobotTorso(0,0, 0.5 + this.sliders[4]/500.0);
			this.drawRobotHead(0,-25, 0.5 + this.sliders[0]/100.0);
			this.drawRobotLeftArm(20,0, 0.5 + this.sliders[1]/100.0);
			this.drawRobotRightArm(-20,0, 0.5 + this.sliders[1]/100.0);
			this.drawInfo(0, -60);


		pop();
	};
	this.drawHumanBody = function(px, py){	
		push();
			translate(px,py);
			rotate(atan2(mouseY-height/2, mouseX-width/2)/50);
			this.drawTorso(0,20, 0.5 + this.sliders[4]/200.0);
			this.drawHead(0,-25, 1 + this.sliders[0]/100.0);
			this.drawLeftArm(14,0, 1 + this.sliders[1]/100.0);
			this.drawRightArm(-14,0, 1 + this.sliders[1]/100.0);
			this.drawRightLeg(-12,50, 0.5 + this.sliders[2]/100.0);
			this.drawLeftLeg(12,50, 0.5 + this.sliders[2]/100.0);
			this.drawInfo(0, -60);
		pop();
	};
	this.drawInfo = function(px,py){
		push();
			translate(px,py);
			textFont('Helvetica');
			fill(255,100);
			rect(-10,-20,150,100,10);
			fill(0,0,0);
			textSize(20);
			textStyle(BOLD);
			text(this.creationName, 0, 0);
			textStyle(NORMAL);

			textSize(15);

			text(this.creationInfo, 0, 0,100,100);

		pop();
		
	};
	this.drawRobotHead = function(px, py, s){
		push();
			strokeWeight(this.thick);

			rectMode(CENTER);
			translate(px,py);
			fill(255);
			stroke(0);
			rect(0, 0, 20*s, 30*s,1);
			push();
				translate(0,-30*s/2-15*s);
				line(0,0,0,15*s);
				fill(255);
				ellipse(0,0,4,4);
			pop();
		pop();
	};
	this.drawRobotLeftArm = function(px, py, s){
		push();	
			strokeWeight(this.thick);

			translate(px,py);
			rotate(atan2(mouseY-height/2, mouseX-width/2));
			stroke(0);
			push();
				translate(-10*s/2,0);
				beginShape();
					vertex(0,0);
					vertex(10*s,0);
					vertex(10*s, 40*s);
					vertex(0, 40*s);
				endShape(CLOSE);
				push();
					translate(0,40*s);
					beginShape();
						vertex(-3,0);
						vertex(13*s,0);
						vertex(13*s, 5*s);
						vertex(-3, 5*s);
					endShape(CLOSE);
				pop();
			pop();
		pop();
	};
	this.drawRobotRightArm = function(px, py, s){
		push();	
			strokeWeight(this.thick);

			translate(px,py);
			rotate(-atan2(mouseY-height/2, mouseX-width/2));
			stroke(0);
			push();
				translate(-10*s/2,0);
				beginShape();
					vertex(0,0);
					vertex(10*s,0);
					vertex(10*s, 40*s);
					vertex(0, 40*s);
				endShape(CLOSE);
				push();
					translate(0,40*s);
					beginShape();
						vertex(-3,0);
						vertex(13*s,0);
						vertex(13*s, 5*s);
						vertex(-3, 5*s);
					endShape(CLOSE);
				pop();
			pop();
		pop();
	};
	this.drawRobotTorso = function (px, py, s){
		push();
			strokeWeight(this.thick);

			translate(px,py);

			//scale(s);
			fill(255);
			stroke(0);
			push();
				translate(-40*s/2,0);
				beginShape();
					vertex(0*s, 70*s);
					vertex(40*s, 70*s);
					vertex(40*s, 0);
					vertex(0, 0);
				endShape(CLOSE);
			pop();
		pop();
	};
	this.drawRobotBase = function (px, py, s){
		push();
			strokeWeight(this.thick);
			translate(px,py);

			//scale(s);
			fill(255);
			stroke(0);
			push();
				translate(-80*s/2,0);
				beginShape();
					vertex(30*s, 0);
					vertex(0, 50*s);
					vertex(80*s, 50*s);
					vertex(50*s, 0);

				endShape(CLOSE);
			
			push();
				translate((80*s%20)/2,50*s);
				for(var i = 0; i <= 80*s; i+=20){
					ellipse(i, 0, 20, 20);
					ellipse(i, 0, 3, 3);
				}
			pop();
			pop();

		pop();
	};


//---------------Human --------
	
	this.drawHead = function(px, py, s){
		push();
			strokeWeight(this.thick);
			translate(px,py);
			fill(255);
			stroke(0);
			ellipse(0, 0, 20*s, 30*s);

		pop();

	};
	this.drawLeftArm = function(px, py, s){
		push();
			strokeWeight(this.thick);
			translate(px,py);
			rotate(atan2(mouseY-height/2, mouseX-width/2));
			stroke(0);
			push();
				rotate(PI/2);
				ellipseMode(CORNER);
				ellipse(0,-10*s/2, 40,10*s);
			pop();
			fill(255);
			ellipse(0,40, 10,10);
			push();
				translate(0,40);
				rotate(atan2(mouseY-height/2, mouseX-width/2));
				push();
					rotate(PI/2);
					ellipseMode(CORNER);
					ellipse(0,-5*s/2, 45,5*s);
				pop();
			pop();
		pop();
	};
	this.drawRightArm = function(px, py, s){
		push();
			strokeWeight(this.thick);
			translate(px,py);
			rotate(-atan2(mouseY-height/2, mouseX-width/2));
			stroke(0);
			push();
				rotate(PI/2);
				ellipseMode(CORNER);
				ellipse(0,-10*s/2, 40,10*s);
			pop();
			fill(255);
			ellipse(0,40, 10,10);
			push();
				translate(0,40);
				rotate(-atan2(mouseY-height/2, mouseX-width/2));
				push();
					rotate(PI/2);
					ellipseMode(CORNER);
					ellipse(0,-5*s/2, 45,5*s);
				pop();
			pop();
		pop();
	};
	this.drawRightLeg = function(px, py, s){
		push();
			strokeWeight(this.thick);
			translate(px,py);
			rotate(0);
			stroke(0);
			fill(255);
			line(6,0, 0,60*s);
			ellipse(0,60*s, 10,10);
			push();
				translate(0,60*s);
				line(0,0,0,60*s);
			pop();
		pop();
	};
	this.drawLeftLeg = function(px, py, s){
		push();
			strokeWeight(this.thick);
			translate(px,py);
			rotate(0);
			stroke(0);
			fill(255);
			line(-6,0, 0,60*s);
			ellipse(0,60*s, 10,10);
			push();
				translate(0,60*s);
				line(0,0,0,60*s);
			pop();
		pop();
	};
	this.drawTorso = function (px, py, s){
		push();
			strokeWeight(this.thick);
			translate(px,py);

			//scale(s);
			fill(255);
			stroke(0);
			//	rect(0,0,40,60);

			beginShape();
				vertex(-15*s, 30);
				vertex(15*s, 30);
				vertex(20*s, -30);
				vertex(-20*s, -30);
			endShape(CLOSE);
		pop();
	};


};


var character = [];
var backgroundImg;
var foregroundImg;
var state;

function setup() {
	// create canvas
	var c = createCanvas(1024, 768);
	textSize(15);
	noStroke();
	

	foregroundImg = loadImage('../imgs/BasementbackgroundP1.png');
	backgroundImg = loadImage('../imgs/BasementbackgroundP2.png');
	state = 'init';
	c.drop(dropFiles);
}
  
 function draw() {
	  
	background(255);
	if(state === 'init'){
		image(backgroundImg,0,0);
		character.forEach(function(c){
			c.draw();
		});
		image(foregroundImg,0, backgroundImg.height-foregroundImg.height);

	
	}else if(state === 'saved'){
		
		state = 'idle';

	}else if(state === 'idle'){
		image(backgroundImg,0,0);
		image(foregroundImg,0,100);
	}
}


function dropFiles(file) {
	
	if(file.subtype  === 'json'){
		var data = JSON.parse(atob(file.data.split(',')[1]));
		var newChar = new Character();
		newChar.init(random(width), random(250,height-250) ,data);
		character.push(newChar);
	}
}