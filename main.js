canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

var mouseEvent = "empty";

color = "blue";

var last_postion_of_x  ;
 var last_postion_of_y  ;


canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e) {
    mouseEvent = "mouseDown";
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
}



canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last Position Of x and y coordinates = ");
        console.log("x = " + last_postion_of_x  + "y = " + last_postion_of_y);
        ctx.moveTo(last_postion_of_x, last_postion_of_y);

        console.log("Current postion of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();

    }
    last_postion_of_x = current_position_of_mouse_x;
    last_postion_of_y = current_position_of_mouse_y;
}
