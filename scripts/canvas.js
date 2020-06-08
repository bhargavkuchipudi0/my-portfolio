
var canvas;
var ctx;
var bubbles = new Array();
var speed = 2;
var opac = '0.4';
var color = [
    'rgba(103, 204, 66, ' + opac + ')',
    'rgba(22, 180, 233, ' + opac + ')',
    'rgba(211, 211, 211', + opac + ')'
]
var r = 10; // Bubble radius.
var speed = 1; // Speed of a bubble.
var dots_count = 20;

window.addEventListener('load', function() {
    canvas = document.getElementById("cnvs");
    ctx = canvas.getContext("2d");
    drawShapes();
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    for(let i = 0; i < dots_count; i++) {
        getDimensions();
    }
    setInterval(animate, 1000/60);
    requestAnimationFrame(animate);
})


function drawShapes() {
    // blue triangle
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);
    ctx.lineTo(400, canvas.height);
    ctx.lineTo(0, -150);
    ctx.fillStyle = 'rgba(22, 180, 233, ' + opac + ')';
    ctx.fill();
    ctx.closePath();
    
    // rectangle
    ctx.beginPath();
    ctx.moveTo(500, canvas.height);
    ctx.lineTo(600, canvas.height);
    ctx.lineTo(350, canvas.height-400);
    ctx.moveTo(450, canvas.height-400);
    ctx.lineTo(600, canvas.height);
    ctx.lineTo(350, canvas.height-400);
    ctx.fillStyle = 'rgba(103, 204, 66, ' + opac + ')'
    ctx.fill();
    ctx.closePath();

}

window.onresize = function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function getDimensions() {
    var x = Math.floor(Math.random()*Math.floor(canvas.width));
    var y = Math.floor(Math.random()*Math.floor(canvas.height));
    var c = Math.floor(Math.random()*Math.floor(color.length-1));
    var d = Math.floor(Math.random()*Math.floor(4))+1;
    bubbles.push(new formBubble(x, y, r, color[c], d));
}

function formBubble(x, y, r, c, d) {
    this.x = x;
    this.y = y;
    this.d = d;
    ctx.beginPath();
    ctx.arc(this.x, this.y, r, 0, 2*Math.PI);
    ctx.fillStyle = c;
    ctx.fill();
    ctx.closePath();

    this.newPosition = () => {
        
        switch (this.d) {
            case 1:
                this.x += speed;
                this.y += speed
                break;
            case 2:
                this.x -= speed;
                this.y -= speed
                break;
            case 3:
                this.x += speed;
                this.y -= speed
                break;
            case 4:
                this.x -= speed;
                this.y += speed
                break;
        
            default:
                this.x += speed;
                this.y += speed;
                break;
        }
    }

    this.checkCollision = () => {
        if (this.x+r >= canvas.width) {
            this.d = this.d == 1 ? 4 : this.d == 3 ? 2 : 'none';
        }else if (this.x-r <= 0){
            this.d = this.d == 4 ? 1 : this.d == 2 ? 3 : 'none';
        }
        
        if (this.y+r >= canvas.height) {
            this.d = this.d == 1 ? 3 : this.d == 4 ? 2 : 'none';
        }else if (this.y-r <= 0){
            this.d = this.d == 3 ? 1 : this.d == 2 ? 4 : 'none';
        }
    }

    this.update = () => {
        this.checkCollision();
        this.newPosition();
        this.draw();
    }

    this.draw = () => {
        ctx.beginPath();
        ctx.arc(this.x, this.y, r, 0, 2*Math.PI);
        ctx.fillStyle = c;
        ctx.fill();
        ctx.closePath();
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawShapes();
    bubbles.forEach(b => {
        b.update();
    })
}

