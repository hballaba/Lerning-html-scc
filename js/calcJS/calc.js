document.getElementById("slider-left").onclick = sliderLeft;
document.getElementById("slider-right").onclick = sliderRight;
var mouse = document.getElementById('one');
var left = 0;

mouse.onmouseenter = function() {
    this.style.background("green");
}

function sliderLeft() {
    var polosa = document.getElementById('polosa');
    left -= 128;
    
    if (left < -384) {
        left = -384;
    }
    polosa.style.left = left + 'px';
}
function sliderRight() {
    var polosa = document.getElementById('polosa');
    left += 128;
    if (left > 0) {
        left = 0;
    }
    polosa.style.left = left + 'px';
}

function read() {
    var num1 = document.getElementById('n1').value;  
    num1 = parseInt(num1) || 0;
    var num2 = document.getElementById('n2').value;
    num2 = parseInt(num2) || 0;
    return [num1, num2];
}


function add() {
    var arr = read();
    var result = arr[0] + arr[1];
    result = arr[0] + " + " + arr[1] + " = " + result + "<br>";
    var p =  document.getElementById("out");
    p.insertAdjacentHTML("afterEnd", result);
}

function minus() {
    var arr = read();
    var result = arr[0] - arr[1];
    result = arr[0] + " - " + arr[1] + " = " + result + "<br>";
    var p =  document.getElementById("out");
    p.insertAdjacentHTML("afterEnd", result);
}

function devide() {
    var arr = read();
    if (arr[1] != 0) {
        var result = arr[0] / arr[1];
        result = arr[0] + " / " + arr[1] + " = " + result + "<br>";
    }
    else {
        var result = "You cannot divided by zero" + "<br>";
    }
    var p =  document.getElementById("out");
    p.insertAdjacentHTML("afterEnd", result);

}

function times() {
    var arr = read();
    var result = arr[0] * arr[1];
    result = arr[0] + " * " + arr[1] + " = " + result + "<br>";
    var p =  document.getElementById("out");
    p.insertAdjacentHTML("afterEnd", result);
}

