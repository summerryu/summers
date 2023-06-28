const main_header = document.querySelector("#header");
const logo = document.querySelector("#header .center .logo .logoimg");
// const upfixed = document.querySelector("#container .upFixed");

let scTop = window.scrollY;
if(scTop == 0){
    logo.setAttribute("src","/img/logo2.png")
}

window.addEventListener("scroll",function(){
    let scTop = window.scrollY;
    if(scTop > 0){
        main_header.classList.add("on");
        logo.setAttribute("src","/img/logo1.png")
    }
    else{
        main_header.classList.remove("on");
        logo.setAttribute("src","/img/logo2.png")
    }
})

// upfixed.addEventListener("click",(event)=>{
//     event.preventDefault();
//     window.scrollTo({
//         top:0,
//         behavior:"smooth"
//     })
// })

const sub_gnb = document.querySelector(".sub_gnb_on");
const m_gnb = document.querySelector("#m_header")
const m_gnb_menus = document.querySelectorAll("#m_header .gnb > li");
const closeBtn = document.querySelector(".closeBtn");

console.log(closeBtn);

sub_gnb.addEventListener("click", (e) =>{
  e.preventDefault(); 
  m_gnb.classList.add("on");
  main_header.classList.add("close");
})

closeBtn.addEventListener("click", (e) =>{
  e.preventDefault(); 
  m_gnb.classList.remove("on");
  main_header.classList.remove("close");
})


for(let i=0; i<m_gnb_menus.length; i++){
    m_gnb_menus[i].addEventListener("click", () => {
        for(let j=0; j<m_gnb_menus.length; j++){
            m_gnb_menus[j].classList.remove("on");
        }
        m_gnb_menus[i].classList.add("on")
    })
}
