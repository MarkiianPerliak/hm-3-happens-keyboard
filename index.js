const amountElement = document.querySelector("input");
const buttonRender = document.querySelector(`[data-action="render"]`);
const buttonDestroy = document.querySelector(`[data-action="destroy"]`);
const containerElement = document.querySelector("#boxes");


buttonRender.addEventListener("click", (event) => {
    const amount = amountElement.value;
    createBoxes(amount)
});


function createBoxes(amount) {
    const baseSize = 50;
    const increment = 10;
    for (let i = 0; i < amount; i++) {
        const divElement = document.createElement("div");
        divElement.className = "created-divs";
        const widthHeight = baseSize + increment * i;
        divElement.style.width = `${widthHeight}px`;
        divElement.style.height = `${widthHeight}px`;
        divElement.style.background = `rgb(${Math.random() * (255 - 0) + 0}, ${Math.random() * (255 - 0) + 0}, ${Math.random() * (255 - 0) + 0})`;
        containerElement.append(divElement)
    }
}

buttonDestroy.addEventListener("click", (event) => {
    destroyBoxes()
})

function destroyBoxes() {
    const boxes = document.querySelectorAll(".created-divs")
    boxes.forEach(box => {
        box.remove();
    })

}


// 2

const galleryItems = document.querySelectorAll(".image");
let indexElement = 0;

galleryItems.forEach((item) => {
    item.style.display = "none";
});

if (galleryItems.length > 0) {
    galleryItems[indexElement].style.display = "block";
}

window.addEventListener("keydown", (event) => {
    if (event.code === "ArrowRight") {
        galleryItems[indexElement].style.display = "none";
        indexElement += 1;
        if (indexElement >= galleryItems.length) {
            indexElement = 0;
        }
        galleryItems[indexElement].style.display = "block";
    } else if (event.code === "ArrowLeft") {
        galleryItems[indexElement].style.display = "none";
        indexElement -= 1;
        if (indexElement < 0) {
            indexElement = galleryItems.length - 1;
        }
        galleryItems[indexElement].style.display = "block";
    }
});