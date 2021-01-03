var canvas=document.getElementById("mycanvas")
var ctx=canvas.getContext("2d")
var colour="red"
var penwidth=5
var mouseevent=""
var lastX,lastY,currentY,currentX
canvas.addEventListener("mousedown",MD)
function MD(e){
    colour=document.getElementById("colourinput").value  
 penwidth=document.getElementById("widthinput").value 
lastX=e.clientX-canvas.offsetLeft
lastY=e.clientY-canvas.offsetTop
mouseevent="mousedown"
}
canvas.addEventListener("mouseup",MU)
function MU(e){
mouseevent="mouseup"
}
canvas.addEventListener("mouseleave",ML)
function ML(e){
    mouseevent="mouseleave"
}
canvas.addEventListener("mousemove",MM)
function MM(e){
    currentX=e.clientX-canvas.offsetLeft
    currentY=e.clientY-canvas.offsetTop
    if(mouseevent=="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle=colour
        ctx.lineWidth=penwidth
        ctx.moveTo(lastX,lastY)
        ctx.lineTo(currentX,currentY)
        ctx.stroke()
    }
    lastX=currentX
    lastY=currentY
}

var width=screen.width
var newwidth=screen.width-100
var newheight=screen.height-200
if(width<992){
    document.getElementById("mycanvas").width=newwidth
    document.getElementById("mycanvas").height=newheight
    document.body.style.overflow="hidden"
}


canvas.addEventListener("touchstart",TS)
function TS(e){
 colour=document.getElementById("colourinput").value  
 penwidth=document.getElementById("widthinput").value 
lastX=e.touches[0].clientX-canvas.offsetLeft
lastY=e.touches[0].clientY-canvas.offsetTop
console.log("touched")
}
canvas.addEventListener("touchmove",TM)
function TM(e){
    currentX=e.touches[0].clientX-canvas.offsetLeft
    currentY=e.touches[0].clientY-canvas.offsetTop
   
        ctx.beginPath()
        ctx.strokeStyle=colour
        ctx.lineWidth=penwidth
        ctx.moveTo(lastX,lastY)
        ctx.lineTo(currentX,currentY)
        ctx.stroke()
    
    lastX=currentX
    lastY=currentY
}
function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}
