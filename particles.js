const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";

let mouseX = 0; let mouseY = 0;

const canvas_offset = canvas.getBoundingClientRect();

let particles = [];

for (let i = 0; i < 170; ++i) {
	particles.push({
		x:canvas.width*Math.random(),
		y:canvas.height*Math.random(),
		xSpd:Math.random()*2-1,
		ySpd:Math.random()*2-1,
	});
}

addEventListener("mousemove", (e) => {
	mouseX = e.clientX - canvas_offset.left;
	mouseY = e.clientY - canvas_offset.top;
});

draw = () => {
	ctx.clearRect(0,0,canvas.width,canvas.height);

	ctx.fillRect(mouseX, mouseY, 10, 10);

	particles.forEach((p) => {
		p.x += p.xSpd;
		p.y += p.ySpd;

		p.x = (p.x+canvas.width) % canvas.width;
		p.y = (p.y+canvas.height) % canvas.height;

		p.xSpd *= 0.99;
		p.ySpd *= 0.99;

		mag = 20/((p.x-mouseX)*(p.x-mouseX)+(p.y-mouseY)*(p.y-mouseY));

		p.xSpd += (p.x-mouseX)*mag;
		p.ySpd += (p.y-mouseY)*mag;

		ctx.beginPath()
		ctx.arc(p.x, p.y, 2, 0, 2*3.15);
		ctx.fill();
	});
}

setInterval(draw, 40);
