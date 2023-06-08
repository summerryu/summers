

const mainImg = document.querySelectorAll(".left_slide img");
const mainImgBtn = document.querySelectorAll(".cont1_left .left_btns > div");


for(let i=0; i<mainImgBtn.length; i++){
    mainImgBtn[i].onclick= function(event){
        event.preventDefault();
        for(let j=0; j<mainImgBtn.length; j++){
            mainImg[j].classList.remove("on");
            mainImgBtn[j].classList.remove("on");
        }
        mainImg[i].classList.add("on");
        mainImgBtn[i].classList.add("on");
    }
}

// 상품란

const products = [
    {
        title: "item1",
        image: "/img/design/img1.png",
        image2: "/img/design/img1-1.png",
        image3: "/img/design/img1-2.png",
    },
    {
        title: "item2",
        image: "/img/design/img2.png",
        image2: "/img/design/img2-1.png",
        image3: "/img/design/img2-2.png",
    },
    {
        title: "item3",
        image: "/img/design/img3.png",
        image2: "/img/design/img3-1.png",
        image3: "/img/design/img3-2.png",
    },
    {
        title: "item4",
        image: "/img/design/img4.png",
        image2: "/img/design/img4-1.png",
        image3: "/img/design/img4-2.png",
    },
    {
        title: "item5",
        image: "/img/design/img5.png",
        image2: "/img/design/img5-1.png",
        image3: "/img/design/img5-2.png",
    },
    
    {
        title: "item1",
        image: "/img/design/img11.png",
        image2: "/img/design/img11-1.png",
        image3: "/img/design/img11-2.png",
    },
];

function itemCreate(products) {
    const productsList = document.getElementsByClassName("cont2_box");

    for (let i = 0; i < productsList.length; i++) {
        const title = document.createElement("h1");

        const images = [products[i].image, products[i].image2, products[i].image3];
        for (let j = 0; j < images.length; j++) {
            const image = document.createElement("img");
            const div = document.createElement("div"); // 새로운 <div> 요소 생성
        
            image.src = images[j];
            div.classList.add("imgbox"); // <div> 요소에 "imgbox" 클래스 추가
        
            div.appendChild(image);
        
            // 나머지 코드는 그대로 유지
            title.textContent = products[i].title;
            div.appendChild(title);
        
            productsList[i].appendChild(div);
        }
    }
}
const products2 =[
    {
        title: "item6",
        image: "/img/design/img6.png",
        image2: "/img/design/img6-1.png",
        image3: "/img/design/img6-2.png",
    },
    {
        title: "item7",
        image: "/img/design/img7.png",
        image2: "/img/design/img7-1.png",
        image3: "/img/design/img7-2.png",
    },
    {
        title: "item8",
        image: "/img/design/img8.png",
        image2: "/img/design/img8-1.png",
        image3: "/img/design/img8-2.png",
    },
    {
        title: "item9",
        image: "/img/design/img9.png",
        image2: "/img/design/img9-1.png",
        image3: "/img/design/img9-2.png",
    },
    {
        title: "item10",
        image: "/img/design/img10.png",
        image2: "/img/design/img10-1.png",
        image3: "/img/design/img10-2.png",
    },
]

function itemCreate2(products2) {
    const productsList2 = document.getElementsByClassName("cont2_2_box");

    for (let i = 0; i < productsList2.length; i++) {
        const title = document.createElement("h1");

        const images = [products2[i].image, products2[i].image2, products2[i].image3];
        for (let j = 0; j < images.length; j++) {
            const image = document.createElement("img");
            const div = document.createElement("div"); // 새로운 <div> 요소 생성
        
            image.src = images[j];
            div.classList.add("imgbox"); // <div> 요소에 "imgbox" 클래스 추가
        
            div.appendChild(image);
        
            // 나머지 코드는 그대로 유지
            title.textContent = products2[i].title;
            div.appendChild(title);
        
            productsList2[i].appendChild(div);
        }
    }
}
itemCreate(products)
itemCreate2(products2)



const cont2Btns = document.querySelectorAll(".cont_btns_num .cont_btns");
const cont2listbox = document.querySelector(".cont2");
const cont2listbox2 = document.querySelector(".cont2-2");

let cont2List = [cont2listbox,cont2listbox2];

for(let i=0; i<cont2Btns.length; i++){
    cont2Btns[i].onclick = function(){
        for(let j=0; j<cont2Btns.length; j++){
            cont2Btns[j].classList.remove("change");
            cont2List[j].classList.remove("change");
        }
        cont2Btns[i].classList.add("change");
        cont2List[i].classList.add("change");
    }
}