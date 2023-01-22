const ctx = document.getElementById("canvas").getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
function rozmiar(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    }
    var image = new Image();
    image.src = "src/images/mapa.png";
    var szerokośćokna = window.screen.width;
    var wysokośćokna = window.screen.height;
    var różnicarozdzielczości = szerokośćokna / image.width;
    function dostosowanie(){
        if (szerokośćokna > image.width) {
            canvas.width = szerokośćokna * różnicarozdzielczości;
            canvas.height = wysokośćokna * różnicarozdzielczości;
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        }
    var clientX = 0;
    var clientY = 0;
    var offsetX = 0;
    var offsetY = 0;
    var getImageData = 0;
    sx = 0;
    sy = 0;
    image.onload = function(){
        canvas.addEventListener("mousedown", function(e){
        clientX = e.clientX;
        clientY = e.clientY;
        });
        canvas.addEventListener("mousemove", function(e){
        if(clientX || clientY > 0){
        offsetX = e.clientX - clientX;
        offsetY = e.clientY - clientY;
        sx += offsetX;
        sy += offsetY;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, sx, sy, canvas.width, canvas.height);
        }
        });
        canvas.addEventListener("mouseup", function(){
        clientX = 0;
        clientY = 0;
        });
        }
        }
        dostosowanie();
        window.addEventListener("resize", dostosowanie);