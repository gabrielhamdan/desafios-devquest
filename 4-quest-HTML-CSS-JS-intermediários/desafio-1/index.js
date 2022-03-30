const btnLeft = document.getElementById("btn-left");
btnLeft.addEventListener("click", changeImage);
const btnRight = document.getElementById("btn-right");
btnRight.addEventListener("click", changeImage);

const buttons = document.getElementById("buttons").children;

const images = document.getElementById("images").children;
const active = "active"
let imageIndex = 0;

function changeImage() {
    images[imageIndex].classList.remove(active);
    if (this === btnRight && (imageIndex + 1) < images.length) imageIndex++;
    if (this === btnLeft && imageIndex != 0) imageIndex--;
    images[imageIndex].classList.add(active);

    if (imageIndex > 0 && (imageIndex + 1) < images.length) {
        for (const button of buttons) {
            button.classList.remove("disabled");
        }
    } else {
        this.classList.add("disabled");
    }
}