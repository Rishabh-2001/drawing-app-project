const canvas=document.getElementById('canvas');
const ctx=canvas.getContext("2d");

const sizeel=document.getElementById("size");
const inc=document.getElementById("increase");
const dec=document.getElementById("decrease");
const colorel=document.getElementById("color");
const clearel=document.getElementById("clear");

clearel.addEventListener("click",()=>{
    ctx.clearRect (0, 0, canvas.width, canvas.height);
})

colorel.addEventListener("input", function(){
    color = colorel.value;
    console.log(color);
    console.log(theInput.value);
    // Do something with `theColor` here.
  },false);


inc.addEventListener("click",()=>{
    if(size===40)
    {
        size=40;
    }
    else{
    size=size+5;
    }
    sizeel.textContent=size;
})
dec.addEventListener("click",()=>{
    if(size===5)
    {
        size=5;
    }
    else{
    size=size-5;
    }
    sizeel.textContent=size;
})

ctx.fillStyle='green';
let size=20;
let isPressed=false;
let color='black';
let x
let y

// ctx.fillRect(10,10,150,100);
canvas.addEventListener('mousedown', (e) =>{
   isPressed=true;
   x=e.offsetX
   y=e.offsetY
//    console.log(x,y);

})

canvas.addEventListener('mouseup', (e) =>{
    isPressed=false

    x=undefined
    y=undefined
    // console.log(isPressed,x,y)
    
 })
canvas.addEventListener('mousemove', (e) =>{
    // console.log("CAme in mousemove")
    if(isPressed)
    {
        // console.log("CAme in mousemove")
        const x2=e.offsetX
        const y2=e.offsetY
        drawCircle(x2,y2)
        drawLine(x,y,x2,y2);
        x=x2;
        y=y2;
    }
    
 })
function drawCircle(x,y)
{
    ctx.beginPath();
    ctx.arc(x,y,size,0,Math.PI *2)
    ctx.fillStyle=color;
    ctx.fill()

}
function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle=color;
    ctx.lineWidth=size*2;
    ctx.stroke();


}
// drawCircle(100,200)
// drawLine(300,300,300,500);