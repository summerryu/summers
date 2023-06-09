const products = [
    {
        image: "/img/tradition/img1.png",
        image2: "/img/tradition/img2.png",
        image3: "/img/tradition/img3.png",
    },
    {
        image: "/img/tradition/img4.png",
        image2: "/img/tradition/img5.png",
        image3: "/img/tradition/img6.png",
    },
    {
        image: "/img/tradition/img7.png",
        image2: "/img/tradition/img8.png",
        image3: "/img/tradition/img9.png",
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

itemCreate(products)


const imgboxs = document.querySelectorAll(".imgbox");
const bigimg = document.querySelector(".cont2_big");


for(let i=0; i<imgboxs.length; i++){
    imgboxs[i].onclick = function(){
        bigimg.classList.add("on");
    }
}
const closeBtn = document.querySelector(".close_btn");
closeBtn.onclick = function(event){
    event.preventDefault();
    bigimg.classList.remove("on");
}


$(function(){
    $(".imgbox").on("click", function(){
        const src = $(this).find("img").attr("src");
        $(".cont2_big img").attr("src", src);
    });
});