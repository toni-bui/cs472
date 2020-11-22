var stat = {
	flag: false,
	prevX: 0,
	currX: 0,
	prevY: 0,
	currY: 0,
	dotFlag: false,
};
const LINE_WIDTH = 3;
function init() {
	$(document.body).append(
		'<nav id="menu">' +
		'<div><label for="draw">Drawing</label></div>' +
		'<div><input id="drawChkbox" type="checkbox" name="draw" /></div>' +
		'<div><input id="clearBtn" type="button" name="clear" value="Clear" /></div>' +
		'<div><input id="colorBtn" type="color" name="color" value="#000000" /></div>' +
		'</nav>' +
		'<canvas id="drawingCanvas"></canvas>'
	);
	const colorPicker = $('#colorBtn');
	const canvas = $('#drawingCanvas');
	const canvasDOM = canvas[0];
	const ctx = canvasDOM.getContext("2d");
	canvasDOM.width = screen.width;
	canvasDOM.height = screen.height;
	canvas.on("mousedown", (e) => {
		stat.prevX = stat.currX;
		stat.prevY = stat.currY;
		stat.currX = e.clientX - canvasDOM.offsetLeft;
		stat.currY = e.clientY - canvasDOM.offsetTop;
		stat.flag = true;
		stat.dotFlag = true;
		if (stat.dotFlag) {
			ctx.beginPath();
			ctx.fillStyle = colorPicker.val();
			ctx.fillRect(stat.currX, stat.currY, 2, 2);
			ctx.closePath();
			stat.dotFlag = false;
		}
	});
	canvas.on("mousemove", (e) => {
		if (stat.flag) {
			stat.prevX = stat.currX;
			stat.prevY = stat.currY;
			stat.currX = e.clientX - canvasDOM.offsetLeft;
			stat.currY = e.clientY - canvasDOM.offsetTop;
			draw();
		}
	});
	canvas.on("mouseup", (e) => {
		stat.flag = false;
	});
	canvas.on("mouseout", (e) => {
		stat.flag = false;
	});
	$('#drawChkbox').click((e) => {
		ctx.clearRect(0, 0, canvasDOM.width, canvasDOM.height);
		canvas.toggle();
	});
	$('#clearBtn').click((e) => {
		ctx.clearRect(0, 0, canvasDOM.width, canvasDOM.height);
	});
	function draw() {
		ctx.beginPath();
		ctx.moveTo(stat.prevX, stat.prevY);
		ctx.lineTo(stat.currX, stat.currY);
		ctx.strokeStyle = colorPicker.val();
		ctx.lineWidth = LINE_WIDTH;
		ctx.stroke();
		ctx.closePath();
	}
}

$(function() {
	init();
})