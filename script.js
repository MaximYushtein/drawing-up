const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const color =document.getElementById("color");
let canDraw=false
ctx.canvas.width = 600;
ctx.canvas.height = 400;
ctx.fillStyle = "rgb(200 0 0)";
ctx.fillRect(10, 10, 50, 50);
// Метод fillStyle() позволяет установить цвет
ctx.fillStyle = "rgb(250 230 0)";
canvas.onmousedown=function(event){
    canDraw=true
} 
canvas.onmousemove=function(event){
    console.log(canDraw);
    // Метод fillRect() рисует прямоугольник. Принимает 4 значения: x, y, width, height
    ctx.fillRect(event.offsetX,event.offsetY,33,33)
}
canvas.onmouseup=function(event){
 canDraw=false
    console.log(canDraw);
}
color.oninput=function(event){
    console.log("error 404 not found",event.target.value)
    ctx.fillStyle=event.target.value
}