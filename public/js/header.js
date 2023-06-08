
const header = document.querySelector("#header");

const logo = document.querySelector("#header .center .logo .logoimg");
const upfixed = document.querySelector("#container .upFixed i");
console.log(logo)

let scTop = window.scrollY;
if(scTop == 0){
    logo.setAttribute("src","img/logo2 (2).png")
}

window.addEventListener("scroll",function(){
    let scTop = window.scrollY;
    if(scTop > 0){
        header.classList.add("on");
        logo.setAttribute("src","img/logo1 (2).png")
        upfixed.style.opacity = 1;
        
    }
    else{
        header.classList.remove("on");
        logo.setAttribute("src","img/logo2 (2).png")
        upfixed.style.opacity = 0;

    }
})

upfixed.onclick = function(event){
    event.preventDefault();
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}


