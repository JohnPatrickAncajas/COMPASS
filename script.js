const mainImage= document.querySelector("#about");

mainImage.addEventListener("mouseover", function() {
    mainImage.src = "/assets/Unused 1.webp";
});

mainImage.addEventListener("mouseout", function() {
    mainImage.src = "/assets/About us.webp";
});