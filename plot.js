const plot = document.getElementById("plot");
const ctx3 = plot.getContext("2d");

let t = 0;

draw = () => {
	ctx3.clearRect(0,0,plot.width, plot.height);
	t += 2;
	ctx3.strokeStyle = "black";
	ctx3.beginPath();
	ctx3.moveTo(plot.width/32, plot.height/16);
	ctx3.lineTo(plot.width/32, 15*plot.height/16);
	ctx3.moveTo(plot.width/32, plot.height/2);
	ctx3.lineTo(15*plot.width/32, plot.height/2);
	ctx3.stroke();

	ctx3.beginPath();
	ctx3.moveTo(17*plot.width/32, plot.height/16);
	ctx3.lineTo(17*plot.width/32, 15*plot.height/16);
	ctx3.moveTo(17*plot.width/32, plot.height/2);
	ctx3.lineTo(31*plot.width/32, plot.height/2);
	ctx3.stroke();

	ctx3.beginPath();
	ctx3.strokeStyle = "red";
	ctx3.moveTo(plot.width/32, plot.height/2);
	for (let x = plot.width/32; x < 15*plot.width/32; ++x) {
		ctx3.lineTo(x, plot.height/2+Math.sin((x+t)/30)*3*plot.height/8);
	}
	ctx3.stroke();

	ctx3.beginPath();
	ctx3.strokeStyle = "blue";
	ctx3.moveTo(17*plot.width/32, plot.height/2);
	for (let x = 17*plot.width/32; x < 31*plot.width/32; ++x) {
		ctx3.lineTo(x, plot.height/2-Math.abs(Math.sin((x+t)/30)*3*plot.height/8));
	}
	ctx3.stroke();
}

setInterval(draw, 50);
