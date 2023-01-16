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
        }
image.onload = function(){
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
}};
dostosowanie();
window.addEventListener("resize", dostosowanie);