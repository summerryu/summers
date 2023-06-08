const products = [
    {
        image: "/img/cont3/img1.png",
        image2: "/img/cont3/img1-1.png",
        image3: "/img/cont3/img1-2.png",
        image4: "/img/cont3/img1-3.png",
    },
    {
        image: "/img/cont3/img2.png",
        image2: "/img/cont3/img2-1.png",
        image3: "/img/cont3/img2-2.png",
        image4: "/img/cont3/img2-3.png",
    },
    {
        image: "/img/cont3/img3.png",
        image2: "/img/cont3/img3-1.png",
        image3: "/img/cont3/img3-2.png",
        image4: "/img/cont3/img3-3.png",
    },
    {
        image: "/img/cont3/img4.png",
        image2: "/img/cont3/img4-1.png",
        image3: "/img/cont3/img4-2.png",
        image4: "/img/cont3/img4-3.png",
    },
    {
        image: "/img/cont3/img5.png",
        image2: "/img/cont3/img5-1.png",
        image3: "/img/cont3/img5-2.png",
        image4: "/img/cont3/img5-3.png",
    },
    {
        image: "/img/cont3/img6.png",
        image2: "/img/cont3/img6-1.png",
        image3: "/img/cont3/img6-2.png",
        image4: "/img/cont3/img6-3.png",
    }
];

function itemCreate(products) {
    const productsList = document.getElementsByClassName("cont2_box");
    for (let i = 0; i < productsList.length; i++) {

        const title = document.createElement("h1");
        const images = [products[i].image, products[i].image2, products[i].image3, products[i].image4];

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