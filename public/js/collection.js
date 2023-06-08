
// 반복문으로 배열 안에 이미지태그들 html 에 배치

const subMen = [
       "/img/collection/coll_man3.png",
       "/img/collection/coll_man5.png",
        "/img/collection/coll_man6.png",
        "/img/collection/coll_man7.png",
       "/img/collection/coll_man9.png",
        "/img/collection/coll_man12.png",
        "/img/collection/coll_man13.png",
       "/img/collection/coll_man15.png",
        "/img/collection/coll_man16.png",
]
const subWoman = [
                "/img/collection/coll9.png",
                "/img/collection/coll11.png",
                "/img/collection/coll12.png",
                "/img/collection/coll13.png",
                "/img/collection/coll17.png",
                "/img/collection/coll16.png",
                "/img/collection/coll6.png",
                "/img/collection/coll3.png",
                "/img/collection/coll5.png",
]

// 컬렉션 탭 중 서브 이미지 스크립트로 배치
function itemCreate2(subMen) {
    const subMenimgs = document.getElementsByClassName("mens");

    for (let i = 0; i < subMenimgs.length; i++) {

        const imagetwo = document.createElement("img");
        imagetwo.src = subMen[i];
        
        subMenimgs[i].appendChild(imagetwo);
    }
}

itemCreate2(subMen)

// 컬렉션 탭 중 서브 이미지 스크립트로 배치
function itemCreate(subWoman) {
    const subWomanimgs = document.getElementsByClassName("womans");

    for (let i = 0; i < subWomanimgs.length; i++) {

        const image = document.createElement("img");
        image.src = subWoman[i];
        
        subWomanimgs[i].appendChild(image);
    }
}
itemCreate(subWoman)


function activateMenuTabs(nextBtns, listItems) {
    for (let j = 0; j < listItems.length; j++) {
        nextBtns[j].onclick = function(event) {
            event.preventDefault();
            for (let i = 0; i < listItems.length; i++) {
                listItems[i].classList.remove("on");
                nextBtns[i].classList.remove("on");
            }
            listItems[j].classList.add("on");
            nextBtns[j].classList.remove("on");
        };
    }
}

// 컬렉션 메뉴 탭 중 woman 활성화
const cont2NextBtnwoman = document.querySelectorAll(".cont2_btns_woman a");
const cont2Listwoman = document.querySelectorAll(".cont2 .cont2_woman");
activateMenuTabs(cont2NextBtnwoman, cont2Listwoman);

// 컬렉션 메뉴 탭 중 men 활성화
const cont2NextBtnmen = document.querySelectorAll(".cont2_btns_men a");
const cont2listmen = document.querySelectorAll(".cont2 .cont2_men");
activateMenuTabs(cont2NextBtnmen, cont2listmen);





const genderbtn = document.querySelectorAll(".cont2_gender_btn .gender");
const maingender = document.querySelectorAll(".cont2 > div");
const subbtnwoman = document.querySelector(".cont2_btns_woman");
const subbtnmen = document.querySelector(".cont2_btns_men");
let btnnum = [subbtnwoman, subbtnmen];

function handleClick(event, index) {
    event.preventDefault();
    for (let j = 0; j < maingender.length; j++) {
        maingender[j].classList.remove("on");
        btnnum[j].classList.remove("on");
    }
    maingender[index].classList.add("on");
    btnnum[index].classList.add("on");
}

for (let i = 0; i < genderbtn.length; i++) {
    genderbtn[i].onclick = function(event) {
        handleClick(event, i);
        for(let j=0; j<genderbtn.length; j++){
            genderbtn[j].classList.remove("on");
        }
        genderbtn[i].classList.add("on");
    };
}


$(function(){
    $(".womans img").on("click", function(event) {
        event.preventDefault();
        const src = $(this).attr("src");
        $(this).closest(".cont2_woman").find(".cont2_woman_main img").attr("src", src);
    });
});


$(function(){
    $(".mens img").on("click", function(event) {
        event.preventDefault();
        const src = $(this).attr("src");
        $(this).closest(".cont2_men").find(".cont2_men_main img").attr("src", src);
    });
});