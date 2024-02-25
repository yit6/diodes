const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";

let mouseX = 0; let mouseY = 0;

const canvas_offset = canvas.getBoundingClientRect();

let particles = [];

const num = 250;
const forceUser = 20;
const forcePart = 0;

for (let i = 0; i < num; ++i) {
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

addEventListener("touchmove", (e) => {
	mouseX = e.clientX - canvas_offset.left;
	mouseY = e.clientY - canvas_offset.top;
});

apply = (p, x, y, force) => {
		mag = force/((p.x-x)*(p.x-x)+(p.y-y)*(p.y-y));

		p.xSpd += (p.x-x)*mag;
		p.ySpd += (p.y-y)*mag;
}

draw = () => {
	ctx.clearRect(0,0,canvas.width,canvas.height);

	ctx.fillRect(mouseX, mouseY, 10, 10);

	for (let i = 0; i < num; ++i) {
		for (let j = i+1; j < num; ++j) {
			apply(particles[i], particles[j].x, particles[j].y, forcePart);
			apply(particles[j], particles[i].x, particles[i].y, forcePart);
		}
	}

	particles.forEach((p) => {
		p.x += p.xSpd;
		p.y += p.ySpd;

		p.x = (p.x+canvas.width) % canvas.width;
		p.y = (p.y+canvas.height) % canvas.height;

		p.xSpd *= 0.94;
		p.ySpd *= 0.94;

		if (0 <= mouseX && mouseX <= canvas.width && 0 <= mouseY && mouseY <= canvas.height) {
			apply(p, mouseX, mouseY, forceUser);
		}

		ctx.beginPath()
		ctx.arc(p.x, p.y, 2, 0, 2*3.15);
		ctx.fill();
	});
}

setInterval(draw, 40);
