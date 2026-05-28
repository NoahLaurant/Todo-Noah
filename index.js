import express from "express"
const app = express()
const port = 3000

//on utilise le moteur de template EJS
app.set("view engine","ejs")

//mes assets et mon style sont dans le dossier public
app.use(express.static('public'))


app.get('/', (req, res) => {
    const user = {
        nom:"Laurant",
        prenom:"Noah"
    }
  res.render("home",{"user": user})
})

//route le formulaire pour creer une tache
app.get("/ajouter",(req,rep)=>{
    rep.render("ajouter.ejs")
})
//route qui reçoit les donnee du formulaire
app.post("/ajouter",(req,res)=>{
    console.log(req)
})

app.use(express.urlencoded({extended: true}))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})