const plot = document.getElementById("plot");
const ctx3 = graph.getContext("2d");

let t = 0;

draw = () => {
	ctx3.moveTo(plot.width/32, plot.height/16);
	ctx3.lineTo(plot.width/32, 15*plot.height/16);
	ctx3.stroke();
}

setInterval(draw, 50);
