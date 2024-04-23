const express = require("express")
const app = express()

//mongodb+srv://projetodb:<password>@cluster0.7b2pbg9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

app.get('/index', (req, res)=>{
    res.render('index.ejs')
})

app.listen(3001, function(){
    console.log("o nosso servidor está rodando na porta 3000")
})

app.get("/ver", (req, res) => {
    res.send("Olá mundo!")
})

app.post('/show', (req, res) => {
    console.log(req.body)
})

