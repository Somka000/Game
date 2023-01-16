function rozmiar(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    }
    const ctx = canvas.getContext("2d");
    var image = new Image();
    image.src = "src/images/mapa.png";
    image.onload = function(){
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    }
    rozmiar();
    window.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const imageRatio = image.width / image.height;
    const canvasRatio = canvas.width / canvas.height;
    if (canvasRatio > imageRatio) {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.width / imageRatio);
    } else {
        ctx.drawImage(image, 0, 0, canvas.height * imageRatio, canvas.height);
    }
});