const navbar = document.querySelector(".navbar");
const skill = document.querySelector("#skill");
const about = document.querySelector("#about");
const project = document.querySelector("#project");
const contact = document.querySelector("#contact") 

const menusk = document.querySelector(".menusk");
const menuab = document.querySelector(".menuab");
const menupr = document.querySelector(".menupr");
const menuco = document.querySelector(".menuco");

const menu = document.querySelector(".menu");
const display = document.querySelector(".display");

console.log(window.scrollY)
window.addEventListener("scroll", function(){
    if(window.scrollY > skill.offsetTop - navbar.offsetHeight && window.scrollY < about.offsetTop - navbar.offsetHeight){
        navbar.classList.add("active");
        menusk.classList.add("col");
    }else if(window.scrollY > about.offsetTop - navbar.offsetHeight && window.scrollY < project.offsetTop - navbar.offsetHeight){
        navbar.classList.add("ctive");
        menuab.classList.add("col");
    }else if(window.scrollY > project.offsetTop - navbar.offsetHeight && window.scrollY < contact.offsetTop - navbar.offsetHeight){
        navbar.classList.add("tive");
        menupr.classList.add("col");
    }else if(window.scrollY > contact.offsetTop - navbar.offsetHeight && window.scrollY < 2200){
        navbar.classList.add("ive");
        menuco.classList.add("col");
    }else{
        navbar.classList.remove("active");
        menusk.classList.remove("col");
        navbar.classList.remove("ctive");
        menuab.classList.remove("col");
        navbar.classList.remove("tive");
        menupr.classList.remove("col");
        navbar.classList.remove("ive"); 
        menuco.classList.remove("col"); 
    }
} , 1000)

window.addEventListener("resize", function (){
    if(window.innerWidth < 600){
        menu.classList.add("hide");
        display.classList.add("show");
    }else{
        menu.classList.remove("hide");
        display.classList.remove("show");
    }
})