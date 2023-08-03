
let form = document.getElementById("form1");
form.addEventListener("submit" , (e) => {
    e.preventDefault()   //for avoid refresh 
    // console.log(document.getElementById("address").value)
    weatherFunction()
    form.reset() 
})
const errorF = document.getElementById("error")
const locationF = document.getElementById("location")
const forecastF =  document.getElementById("forecast")
// const lonF = document.getElementById("lon") 
// const latF = document.getElementById("lat") 

let weatherFunction = async() =>{
    try{
        const address = document.getElementById("address").value
        // const latitude = document.getElementById("lat").value
        // const longtitude = document.getElementById("lon").value
       
        const res = await fetch ('http://localhost:3000/weather?address='+address)
        const data = await res.json()
        console.log(data)
        if (data.error){
            errorF.innerText = data.error
            locationF.innerText =""
            forecastF.innerText =""
            // lonF.innerText =""
            // latF.innerText=""
        }
        else {
            locationF.innerText = data.location
            forecastF.innerText = data.forecast
            // lonF.innerText = data.lon
            // latF.innerText = data.lat
            errorF.innerText =""
        }
    }
    catch(e){
        console.log(e)
    }
}

// nav bar 
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }