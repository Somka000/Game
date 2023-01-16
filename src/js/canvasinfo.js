function rozmiar(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    }
    const ctx = document.getElementById("canvas").getContext("2d");
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
    getImageData(sx, sy)
    if (sx || sy > 0){
        xmapy = sx;
        ymapy = sy;
    } else {
    xmapy = clientX - offsetX;
    ymapy = clientY - offsetY;
    }
    ctx.drawImage(image, sx, sy, canvas.width, canvas.height);
}};
dostosowanie();
window.addEventListener("resize", dostosowanie);