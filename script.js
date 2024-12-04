const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const color =document.getElementById("color");
let canDraw=false
const random =document.getElementById("random")
let randomOn =false
let input =document.getElementById("input")
ctx.canvas.width = 600;
ctx.canvas.height = 400;    

let brushSize=30
let clear =document.getElementById("clear")
// Свойство fillStyle позволяет установить цвет
ctx.fillStyle = "rgb(250 230 0)";
canvas.onmousedown=function(event){
    canDraw=true
} 
canvas.onmousemove=function(event){
    if(randomOn==true){
        let red=Math.floor(Math.random()*256)
        let green=Math.floor(Math.random()*256)
        let blue=Math.floor(Math.random()*256)
        ctx.fillStyle=`rgb(${red} ${green} ${blue} )`
    
    }

    console.log(canDraw);
    if(canDraw==true){
    // Метод fillRect() рисует прямоугольник. Принимает 4 значения: x, y, width, height
    ctx.fillRect(event.offsetX,event.offsetY,brushSize,brushSize)
    }

}
clear.onclick=function(event){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}
input.oninput=function(event){
brushSize=input.value
}
canvas.onmouseup=function(event){
 canDraw=false
    console.log(canDraw);
}

color.oninput=function(event){
    console.log("error 404 not found",event.target.value)
    ctx.fillStyle=event.target.value
}
random.onclick=function(event){
    if(randomOn){
        random.innerHTML="random off"
randomOn=false
    }
    else{
        randomOn=true
        random.innerHTML="random on"
    }
}
