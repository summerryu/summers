const imgSlide = document.querySelectorAll(".conts1 .slide .slide_img");
let sNum = 0;

function nextslide(){
    if(sNum == imgSlide.length-1){
        sNum = 0;
    }
    else{
        sNum++;
    }
}

function autoslide(){
    for(let i=0; i< imgSlide.length; i++){
        imgSlide[i].style.opacity = 0;
    }
    imgSlide[sNum].style.opacity = 1;
}

let test = setInterval(function(){
    nextslide();
    autoslide();
},5000);



// conts 2

const contsTwo = document.querySelector(".conts2");
const imgOne = document.querySelector(".conts2_left > img");
const imgTwo = document.querySelector(".conts2_right > img");



const conts = document.querySelectorAll("#container .center > div");


let contsTwoTop = contsTwo.offsetTop;

window.addEventListener("scroll",function(){
    let scTop2 = window.scrollY;
    if(scTop2 >= contsTwoTop-100){
        imgOne.style.opacity = 1;
        imgTwo.style.opacity = 1;
    }
})
// conts 2-2

const contsTwoSub = document.querySelectorAll(".conts2_2_right > div");
const contsTwoSubSlideView = document.querySelectorAll(".conts2_2_left_slider > div");
const contsTwoList = document.querySelector(".conts2_2_list");
let SlideNum = 0;



let autoSlide = setInterval(function(){
    if(SlideNum >= 2){
        SlideNum = 0;
    }
    else{
        SlideNum++;
    }
    slideOnOff();
},3000)



contsTwoList.onmouseenter = function(){
    clearInterval(autoSlide);
}


contsTwoList.onmouseleave = function(){
    autoSlide = setInterval(function(){
        slideOnOff();
        nextSlide();
    },3000)
}


function nextSlide(){
    if(SlideNum == contsTwoSub.length-1){
        SlideNum =0;
    }
    else{
        SlideNum++;
    }
}
for(let j=0; j < contsTwoSub.length; j++){
    contsTwoSub[j].onclick = function(event){
        event.preventDefault();
        SlideNum = j;
        slideOnOff();
    }
}

function slideOnOff(){
    for(let i=0; i<contsTwoSub.length; i++){
        contsTwoSub[i].classList.remove("on");
        contsTwoSubSlideView[i].classList.remove("on");
    }
    contsTwoSub[SlideNum].classList.add("on");
    contsTwoSubSlideView[SlideNum].classList.add("on");
}

// conts 4

// conts 5

const lookbookDate = document.querySelectorAll(".conts5_lookbook_list > li");
const lookbookList = document.querySelectorAll(".conts5_slide .conts5_img");
const lookbookSlide = document.querySelector(".conts5_slide");

let lookbookNum = 0;

for(let i=0; i<lookbookDate.length; i++){
    
    lookbookDate[i].onclick = function(event){
        event.preventDefault();
        
        for(let j=0; j<lookbookDate.length; j++){
            lookbookDate[j].classList.remove("on");
            lookbookList[j].classList.remove("on");
        }
        lookbookDate[i].classList.add("on");
        lookbookList[i].classList.add("on");
        lookbookSlide.style.marginLeft = (i * -100) + "%";
        
    }
}
    


function lookbookClick(){
    
}
