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
        console.log(containerElement)
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

console.log(containerElement)

const galleryItems = document.querySelectorAll("img");





window.addEventListener("keydown", (event) => {
    let indexElement = 0;
    const firstElement = galleryItems[indexElement];
    firstElement.style.display = "block";
    if (event.code === "ArrowRight") {
        indexElement += 1;
    }
})