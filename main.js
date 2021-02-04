canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=2;
ctx.arc(100,200,50,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.arc(mouse_x,mouse_y,50,0,2*Math.PI);
    ctx.stroke();
}