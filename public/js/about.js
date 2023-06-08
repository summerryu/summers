
const menu = document.querySelectorAll(".cont_gnb .menu li");
const bg = document.querySelectorAll(".bg");
const header = document.querySelector("#header");
const conts = document.querySelectorAll("#container .center > div")
const menuwrap = document.querySelector(".cont_gnb")

console.log(conts);
let classNum = 0;
const names = ["about","contact","info"];

for(let i=0; i<conts.length; i++){
    menu[i].onclick = function(event){
        event.preventDefault();
        for(let j=0; j<names.length; j++){
            bg[j].classList.remove(names[j]);
            header.classList.remove(names[j]);
            conts[j].classList.remove("on");
            menu[j].classList.remove("on");
        }
        bg[i].classList.add(names[i]);
        header.classList.add(names[i]);
        conts[i].classList.add("on");
        menu[i].classList.add("on");
    }
}


