const amountElement = document.querySelector("input");
const buttonRender = document.querySelector(`[data-action="render"]`);
const buttonDestroy = document.querySelector(`[data-action="destroy"]`);
const containerElement = document.querySelector("#boxes");


buttonRender.addEventListener("click", (event) => {
    const amount = amountElement.value;
    createBoxes(amount)
});


function createBoxes(amount) {
    for (let i = 0; i < amount; i++) {
        const divElement = document.createElement("div");
        divElement.style.width = "50px";
        divElement.style.height = "50px";
        divElement.style.background = `rgb(${Math.random() * (255 - 0) + 0}, ${Math.random() * (255 - 0) + 0}, ${Math.random() * (255 - 0) + 0})`;
        containerElement.append(divElement)
        console.log(containerElement)
    }
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