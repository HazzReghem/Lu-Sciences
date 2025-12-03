const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

document.querySelector(".burger").addEventListener("click", function() {
    this.classList.toggle("active");
    document.querySelector("nav").classList.toggle("open");
});