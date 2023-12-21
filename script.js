"use strict"
const colors = document.querySelectorAll   (".color");
colors.forEach((color) => {


    color.addEventListener("mouseover", () => {
        color.classList.add("Active");


    });



    color.addEventListener("mouseleave", () => {
        color.classList.remove("Active");
    });

    
});
