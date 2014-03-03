//-----------------------------------------------------------------------
// Olympic Rings – Sochi 2014
//
// Author: dmitry-kostin
//-----------------------------------------------------------------------


var START_TIME = new Date().getTime();
var MAX_TIME = 3000;

var k = 1; // enlarge ratio
var lineWidth = 1.5;

var INNER_RAD_MAX = 85*k;
var MIDDLE_RAD_MAX = 95*k;
var OUTER_RAD_MAX = 100*k;

var INNER_RAD_MIN = -30*k;
var MIDDLE_RAD_MIN = 35*k;
var OUTER_RAD_MIN = 50*k;

function checkCanvasIsSupported() {
    canvas = document.getElementById("canvas");
    canvas.width = 760*k;
    canvas.height = 420*k;
    if (canvas.getContext) {
        context = canvas.getContext("2d");
        render();
        setInterval(render, 100);
    } else {
        alert("Sorry, but your browser doesn't support a canvas.");
    }
}

function render() {
    var ticks = new Date().getTime() - START_TIME;
    if (ticks < MAX_TIME) {
        context.clearRect(0, 0, canvas.width , canvas.height);
        // draw rings
        draw_ring(150*k, 150*k, ticks, "#0085c7");
        draw_ring(380*k, 150*k, ticks, "#000000");
        draw_ring(600*k, 150*k, ticks * 0.05, "#df0024");
        draw_ring(270*k, 270*k, ticks, "#f4c300");
        draw_ring(490*k, 270*k, ticks, "#009f3d");
    }
}

function draw_ring(x, y, ticks, color) {
    var radIn = INNER_RAD_MIN + (ticks * ((INNER_RAD_MAX - INNER_RAD_MIN) / MAX_TIME));
    var radMid = MIDDLE_RAD_MIN + (ticks * ((MIDDLE_RAD_MAX - MIDDLE_RAD_MIN) / MAX_TIME));
    var radOut = OUTER_RAD_MIN + (ticks * ((OUTER_RAD_MAX - OUTER_RAD_MIN) / MAX_TIME));
    var rot = 0;
    var rotStep = Math.PI / 9;

    context.lineWidth = lineWidth;
    context.strokeStyle = color;
    // draw star
    for (var count = 0; count < 18; count++) {
        context.beginPath();

        x0 = x + Math.cos(rot) * radMid;
        y0 = y + Math.sin(rot) * radMid;

        // draw line /
        x1 = x + Math.cos(rot + rotStep / 2) * radOut;
        y1 = y + Math.sin(rot + rotStep / 2) * radOut;
        context.moveTo(x0, y0);
        context.lineTo(x1, y1);

        // draw line \
        x2 = x + Math.cos(rot - rotStep / 2) * radOut;
        y2 = y + Math.sin(rot - rotStep / 2) * radOut;
        context.moveTo(x0, y0);
        context.lineTo(x2, y2);

        // draw line /
        x1 = x + Math.cos(rot + rotStep) * radIn;
        y1 = y + Math.sin(rot + rotStep) * radIn;
        context.moveTo(x0, y0);
        context.lineTo(x1, y1);

        // draw line \
        x2 = x + Math.cos(rot - rotStep) * radIn;
        y2 = y + Math.sin(rot - rotStep) * radIn;
        context.moveTo(x0, y0);
        context.lineTo(x2, y2);

        rot += rotStep;
        context.stroke();
    }

    rot = 2;
    // draw rotated copy of star
    for (count = 0; count < 18; count++) {
        context.beginPath();

        x0 = x + Math.cos(rot) * radMid;
        y0 = y + Math.sin(rot) * radMid;

        // draw line /
        x1 = x + Math.cos(rot + rotStep / 2) * radOut;
        y1 = y + Math.sin(rot + rotStep / 2) * radOut;
        context.moveTo(x0, y0);
        context.lineTo(x1, y1);

        // draw line \
        x2 = x + Math.cos(rot - rotStep / 2) * radOut;
        y2 = y + Math.sin(rot - rotStep / 2) * radOut;
        context.moveTo(x0, y0);
        context.lineTo(x2, y2);

        // draw line /
        x1 = x + Math.cos(rot + rotStep) * radIn;
        y1 = y + Math.sin(rot + rotStep) * radIn;
        context.moveTo(x0, y0);
        context.lineTo(x1, y1);

        // draw line \
        x2 = x + Math.cos(rot - rotStep) * radIn;
        y2 = y + Math.sin(rot - rotStep) * radIn;
        context.moveTo(x0, y0);
        context.lineTo(x2, y2);

        rot += rotStep;
        context.stroke();
    }
}

checkCanvasIsSupported();

//-----------------------------------------------------------------------
// draw image 
//-----------------------------------------------------------------------

/*setTimeout(function(){
    var canvas = document.getElementById("canvas");
    var dataURL = canvas.toDataURL();
    var newImage = document.createElement('img');
    newImage.src = dataURL;
    document.body.appendChild(newImage);
}, 4000);*/
