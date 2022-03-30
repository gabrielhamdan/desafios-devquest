document.querySelectorAll(".button").forEach(item => {
    item.addEventListener("click", toggleAnswer)
});

function toggleAnswer() {
    let toggled = document.querySelector(".toggled");
    
    if (this.parentElement.parentElement != toggled) {
        toggled.classList.remove("toggled")
        this.parentElement.parentElement.classList.add("toggled")
    }
}