import Constants from "./Constants.js";

const popup = document.querySelector("section .popup");
const content = document.querySelector("article.content");

getHtml();

async function getHtml(){
    content.innerHTML = Constants.getContent();
    popup.innerHTML = Constants.getPopup();
    
    document.querySelector("section .open-btn")
    .addEventListener("click", () => {
        revealPopup();
    });
}

function revealPopup(){
    popup.style.transform = "translateY(0)";
    content.style.filter = "blur(2px)";
    hidePopup();
};

function hidePopup(){
    document.addEventListener("keydown", event => {
        if(event.key === "Escape"){
            console.log("Success")
            popup.style.transform = "translateY(-100%)";
            content.style.filter = "blur(0)";
        }
    })
};