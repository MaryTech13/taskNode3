

const express = require("express");
const app = express();
const port = 3000 ;
        
const path = require ("path");
const x = path.join (__dirname , "./public");
app.use(express.static(x));  
//---------static pages-----------//
// app.get('/' ,(req , res) => {
//     res.send ("bismiAllah") 
// })    
app.get('/about' ,(req , res) => {
    res.send ("About Page") 
 }) 
// app.get('/service' ,(req , res) => {
//     res.send ("service Page") 
// }) 
// app.get('/team' ,(req , res) => {
//     res.send ("Team Page") 
// }) 
app.get('/data10' ,(req , res) => {
    res.send ("data10 Page") 
}) 
app.get('/data1' ,(req , res) => {
    res.send ({
        name : "mariem",
        city: "paris",
        age: 29
    }) 
}) 

app.get('/data2' ,(req , res) => {
    res.send ({
        name : "Abdussamad",
        city: "paris",
        age: 38
    }) 
}) 

 app.set('view engine', 'hbs'); 
 app.get('/' , (req , res) => {
    res.render('index',{
        title: "HOME",
        desc: "this is home page"  
    })
 })
 app.get('/service' , (req , res) => {
    res.render('service',{
        title: "SERVICE",
        name: "Mariem" ,
        city: "paris",
        age: 29 ,
        img1: "images/teacher.png"
    })
 })
 app.get('/team' , (req , res) => {
    res.render('team',{
        title: "TEAM",
        name: "Abdussamad" ,
        city: "paris",
        age: 38,
        img2 : "images/teacher1.png"
    })
 })

 var hbs = require ('hbs')
 const partialsPath =path.join(__dirname , "/partials")
 hbs.registerPartials(partialsPath)
//-------------------------------------lec8--------------------------//

app.get('/products', (req,res) =>{
console.log(req.query) 
console.log(req.query.model)
res.send({
    product :"bmw 520 i"
})
} )
///---task---//
// app.get('/weather', (req,res) =>{
//     if (!req.query.address){
//         return res.send({
//             error : "you must enter provide Address"
//         })
//     }
//     res.send({
//     location: req.query.address , 
//     forecast : 'cold'
//     })
// })

//--------------use forecast & geocode file in this app-----------//
const geocode = require ('./data5.js/geocode')
const forecast = require("./data5.js/forecast");
app.get('/weather' , (req,res) =>{
    if (!req.query.address){
        return res.send ({
            error : "You must  provide Address"
        })
    }
    geocode(req.query.address,(error,data)=>{
        if(error){
            return res.send({error})
        }
        forecast(data.latitude , data.longtitude , (error , forecastData)=>{
            if(error){
                return res.send({error})
            }
            res.send({
                forecast : forecastData,
                location :req.query.address
            })
        })
    })
})

app.get("*" , (req,res) => {
    res.send('404 page not found')
})
app.listen(port ,() => {
    console.log("everything is Okay")
}
)