document.querySelectorAll(".button").forEach(item => {
    item.addEventListener("click", toggleAnswer)
});

function toggleAnswer() {
    const toggled = document.querySelector(".toggled");
    
    if (this.parentElement.parentElement != toggled) {
        toggled.classList.remove("toggled")
        this.parentElement.parentElement.classList.add("toggled")
    }
}