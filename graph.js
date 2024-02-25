const graph = document.getElementById("graph");
const ctx2 = graph.getContext("2d");

const volt_slider = document.getElementById("volt-slider");
volt_slider.value = 5;

draw = () => {
	ctx2.clearRect(0, 0, canvas.width, canvas.height);
	ctx2.strokeStyle="black";
	ctx2.fillStyle="black";
	ctx2.beginPath();
	ctx2.strokeRect(canvas.width/4, canvas.height/8, canvas.width/2, 3*canvas.height/8);
	ctx2.moveTo(canvas.width/2, canvas.height/8);
	ctx2.lineTo(canvas.width/2, canvas.height/2);
	ctx2.stroke();

	ctx2.fillText("-", canvas.width/2+canvas.width/32, canvas.height/8+1*canvas.height/16);
	ctx2.fillText("-", canvas.width/2+canvas.width/32, canvas.height/8+2*canvas.height/16);
	ctx2.fillText("-", canvas.width/2+canvas.width/32, canvas.height/8+3*canvas.height/16);
	ctx2.fillText("-", canvas.width/2+canvas.width/32, canvas.height/8+4*canvas.height/16);
	ctx2.fillText("-", canvas.width/2+canvas.width/32, canvas.height/8+5*canvas.height/16);
	ctx2.fillText("+", canvas.width/2-canvas.width/32, canvas.height/8+1*canvas.height/16);
	ctx2.fillText("+", canvas.width/2-canvas.width/32, canvas.height/8+2*canvas.height/16);
	ctx2.fillText("+", canvas.width/2-canvas.width/32, canvas.height/8+3*canvas.height/16);
	ctx2.fillText("+", canvas.width/2-canvas.width/32, canvas.height/8+4*canvas.height/16);
	ctx2.fillText("+", canvas.width/2-canvas.width/32, canvas.height/8+5*canvas.height/16);

	ctx2.beginPath();
	ctx2.moveTo(canvas.width/4, 5*canvas.height/16);
	ctx2.lineTo(canvas.width/8, 5*canvas.height/16);
	ctx2.lineTo(canvas.width/8, 3*canvas.height/4);
	ctx2.lineTo(31*canvas.width/64, 3*canvas.height/4);
	ctx2.moveTo(31*canvas.width/64, 5*canvas.height/8);
	ctx2.lineTo(31*canvas.width/64, 7*canvas.height/8);
	ctx2.moveTo(33*canvas.width/64, 11*canvas.height/16);
	ctx2.lineTo(33*canvas.width/64, 13*canvas.height/16);
	ctx2.moveTo(33*canvas.width/64, 3*canvas.height/4);
	ctx2.lineTo(7*canvas.width/8, 3*canvas.height/4);
	ctx2.lineTo(7*canvas.width/8, 5*canvas.height/16);
	ctx2.lineTo(3*canvas.width/4, 5*canvas.height/16);
	ctx2.stroke();

	ctx2.strokeStyle="orange";
	ctx2.beginPath();
	ctx2.lineTo(canvas.width/4, 5*canvas.height/16);
	for (let x = canvas.width/4; x < 3*canvas.width/4; ++x) {
		ctx2.lineTo(x, canvas.height/8+(1/(1+Math.exp(0.1*volt_slider.value*(canvas.width/2-x))))*3*canvas.height/8);
	}
	ctx2.stroke();
};

setInterval(draw, 100);
