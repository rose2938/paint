canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.StrokeStyle= "grey";
ctx.lineWidth = 1;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "blue";
ctx.lineWidth= 5;
ctx.arc(250, 210, 40, 0 ,2 * Math.PI);
ctx.stroke();

// Similarly, create a black circle with position 350 and 210
ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth= 5;
ctx.arc(350, 210, 40, 0 ,2 * Math.PI);
ctx.stroke();

// Similarly, create a red circle with position 210 and 40
ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth= 5;
ctx.arc(449,209, 40, 0 ,2 * Math.PI);
ctx.stroke();

// Similarly, create an orange circle with position 300 and 250
ctx.beginPath();
ctx.strokeStyle= "orange";
ctx.lineWidth= 5;
ctx.arc(300, 250, 40, 0 ,2 * Math.PI);
ctx.stroke();

// Similarly, create a green circle with position 400 and 250
ctx.beginPath();
ctx.strokeStyle= "green";
ctx.lineWidth= 5;
ctx.arc(400, 250, 40, 0 ,2 * Math.PI);
ctx.stroke();