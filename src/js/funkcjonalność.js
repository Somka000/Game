let offsetX = 0;
let offsetY = 0;
let minX = 0;
let minY = 0;
let maxX = canvas.width - image.width * zoom;
let maxY = canvas.height - image.height * zoom;

let startX;
let startY;

let zoom = 1; // początkowy poziom powiększenia
let zoomFactor = 1.1; // czynnik powiększenia
let zoomX = 0; // pozycja x przybliżenia
let zoomY = 0; // pozycja y przybliżenia

canvas.addEventListener("mousedown", (event) => {
    dragging = true;
    startX = event.clientX;
    startY = event.clientY;
    dragStartOffsetX = offsetX;
    dragStartOffsetY = offsetY;
});

canvas.addEventListener("mousemove", (event) => {
    if (dragging) {
        offsetX = event.clientX - startX + dragStartOffsetX;
        offsetY = event.clientY - startY + dragStartOffsetY;

        // ustawianie granicy dla offsetX
        if (offsetX > maxX) {
            offsetX = maxX;
        } else if (offsetX < minX) {
            offsetX = minX;
        }

        // ustawianie granicy dla offsetY
        if (offsetY > maxY) {
            offsetY = maxY;
        } else if (offsetY < minY) {
            offsetY = minY;
        }

        ctx.setTransform(zoom, 0, 0, zoom, offsetX, offsetY);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0);
    }
});

canvas.addEventListener("mouseup", () => {
    dragging = false;
});

canvas.addEventListener("mouseleave", () => {
    dragging = false;
});

canvas.addEventListener("wheel", (event) => {
    event.preventDefault();
    const cursorX = event.clientX - canvas.getBoundingClientRect().left;
    const cursorY = event.clientY - canvas.getBoundingClientRect().top;
if (event.deltaY < 0) {
zoom /= zoomFactor;
} else {
zoom *= zoomFactor;
}
ctx.setTransform(zoom, 0, 0, zoom, offsetX, offsetY);
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(image, 0, 0);
});