console.log("пудж");
let container = document.querySelector(".container");




let sliders = document.querySelectorAll(".slide");
console.log(sliders);
for (let slide of sliders) {
    openSlide(slide,sliders) ;
}
function openSlide(slide,sliders) {
    slide.addEventListener("click",() => {
        sliders.forEach((slide) => {slide.style.flexGrow = "1"; slide.querySelector("h3").style.opacity = 0;});
        slide.style.flexGrow = 3;
        slide.querySelector("h3").style.opacity = 1;
    });
}