const express = require("express")
const MongoClient = require("mongodb").MongoClient;
//데이터베이스의 데이터 입력,출력을 위한 함수명령어 불러들이는 작업


const app = express();

//사용자가 입력한 데이터값을 주소로 통해서 전달되는 것을 변환(parsing)
app.use(express.urlencoded({extended: true}));
app.use(express.json()) 

app.set("view engine","ejs")
app.use(express.static('public'))

const port = 7000

let db; //데이터베이스 연결을 위한 변수세팅(변수의 이름은 자유롭게 지어도 됨)
 
MongoClient.connect("mongodb+srv://saunogq:dudwndi7@cluster0.xaury3g.mongodb.net/?retryWrites=true&w=majority",function(err,result){
    //에러가 발생했을경우 메세지 출력(선택사항)
    if(err) { return console.log(err); }

    //위에서 만든 db변수에 최종연결 ()안에는 mongodb atlas 사이트에서 생성한 데이터베이스 이름
    db = result.db("boggnani");

    //db연결이 제대로 됬다면 서버실행
    app.listen(port,function(){
        console.log("서버연결 성공");
    });
});


// 모바일 디자인 확인
app.get("/m_header", (req,res)=>{
    res.render("m_header.ejs");
})

// 게시판 라인

app.get("/brdlist", (req,res)=>{
    db.collection("boggnanis").find().toArray((err,result)=>{
        res.render("board_list.ejs",{data:result,menuOn:"brdlist"})
    });
})


app.get("/brdinsert", (req,res)=>{
    res.render("board_insert.ejs",{menuOn:"brdlist"})
})

app.post("/dbinsert",(req,res)=>{
    db.collection("boggnabiCount").findOne({name:"게시물 갯수"},(err,result)=>{
        db.collection("boggnanis").insertOne({
            num:result.boardCount,
            title:req.body.title,
            username:req.body.username,
            text:req.body.text
        },(err,result)=>{
            db.collection("boggnabiCount").updateOne(
                {name:"게시물 갯수"},
                {$inc:{boardCount:1}},
                (err,result)=>{res.redirect("/brdlist")
            })
        })
    })
})

app.get("/brdupdate/:num",(req,res)=>{
    db.collection("boggnanis").findOne({num:Number(req.params.num)},(err,result)=>{
        res.render("board_update.ejs",{data:result,menuOn:"brdlist"})
    })
})

app.post("/dbupdate",(req,res)=>{
    db.collection("boggnanis").updateOne({
        num:Number(req.body.num)},
        {$set:
            {
                title:req.body.title,
                username:req.body.username,
                text:req.body.text
            }
        },(err,result)=>{
        res.redirect("/brddetail/"+req.body.num) // 
    })
})


  app.get("/brddetail/:num", (req, res) => {
    db.collection("boggnanis").findOne({ num: Number(req.params.num) }, (err, result) => {
      res.render("board_detail.ejs", { data: result ,menuOn:"brdlist"});
    });
  });
////////////////////////////////



// 메뉴 연결

app.get("/",(req,res)=>{
    res.render("index.ejs")
})


app.get("/brddetail",(req,res)=>{
    res.render("board_detail.ejs",{menuOn:"brdlist"})
})


app.get("/about",(req,res)=>{
    res.render("about_re.ejs",{menuOn:"about"})
})

app.get("/design",(req,res)=>{
    res.render("design.ejs",{menuOn:"design"})
})

app.get("/collection",(req,res)=>{
    res.render("collection.ejs",{menuOn:"collection"})
})

app.get("/parents",(req,res)=>{
    res.render("parents.ejs",{menuOn:"parents"})
})

app.get("/tradition",(req,res)=>{
    res.render("tradition.ejs",{menuOn:"tradition"})
})