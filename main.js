var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;

var last_position_of_x, last_position_of_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "red";
width = "2"

if(width < 992){
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow="hidden";
}

canvas.addListener("touchstart", my_touchstart)

function my_touchstart(e){
    color=document.getElementById("color").Value;
    width=document.getElementById("width").value;

    console.log("my_touchstart");
    last_position_of_x = e.touches[0].clientX - canvas.offSetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offSetTop;
}

canvas.addListener("touchmove", my_touchmove);

function my_touchmove(e){
    console.log("my_touchMove");
    current_position_x = e.touches[0].clientX - canvas.offSetLeft;
    current_position_y = e.touches[0].clientY - canvas.offSetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("X = " + current_position_x + "Y = " + current_position_y);
    ctx.stroke();

    last_position_of_x = current_position_x; 
    last_position_of_y = current_position_y;
    
    
}
function clear_area(){
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
}