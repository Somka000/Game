var image = new Image();
image.src = "src/images/mapa.png";

// nowe zmienne
let x = 0;
let y = 0;
let isDragging = false;
let offsetX;
let offsetY;

image.onload = function(){
    ctx.drawImage(image, x, y, canvas.width, canvas.height);
};

canvas.addEventListener("mousedown", function(e){
    isDragging = true;
    offsetX = e.clientX - x;
    offsetY = e.clientY - y;
});

canvas.addEventListener("mousemove", function(e){
    if(isDragging){
        x = e.clientX - offsetX;
        y = e.clientY - offsetY;
        ctx.clearRect(0, 0,canvas.width, canvas.height);
        ctx.drawImage(image, x, y, canvas.width, canvas.height);
        }
        });
        
        canvas.addEventListener("mouseup", function(){
        isDragging = false;
        });
        
        canvas.addEventListener("mouseleave", function(){
        isDragging = false;
        });
        
        // or you can add touch events for mobile devices
        canvas.addEventListener("touchstart", function(e){
        isDragging = true;
        offsetX = e.touches[0].clientX - x;
        offsetY = e.touches[0].clientY - y;
        });
        
        canvas.addEventListener("touchmove", function(e){
        if(isDragging){
        x = e.touches[0].clientX - offsetX;
        y = e.touches[0].clientY - offsetY;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, x, y, canvas.width, canvas.height);
        }
        });
        
        canvas.addEventListener("touchend", function(){
        isDragging = false;
        });
        
        canvas.addEventListener("touchcancel", function(){
        isDragging = false;
        });