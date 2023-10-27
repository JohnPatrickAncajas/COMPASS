document.addEventListener("DOMContentLoaded", function() {
    let mainImageElement = document.getElementById("aboutImage");
    let missionVisionImageElement = document.getElementById("missionVisionImage");

    function changeMainImage() {
        mainImageElement.src = "/assets/About us 2.webp";

        setTimeout(function() {
            mainImageElement.src = "/assets/About us 3.webp";
        }, 1600);

        setTimeout(function() {
            mainImageElement.src = "/assets/About us.webp";
        }, 3300);
    }

    function changeMissionVisionImage() {
        missionVisionImageElement.src = "/assets/Mission and Vision 2.webp";

        setTimeout(function() {
            missionVisionImageElement.src = "/assets/Mission and Vision.webp";
        }, 2500);
    }

    function imageSwap() {
        changeMainImage();
        changeMissionVisionImage();
    }

    imageSwap();

    setInterval(imageSwap, 5000);
});