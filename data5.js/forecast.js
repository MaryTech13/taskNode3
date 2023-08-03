const request = require("request")
const forecast = (latitude , longtitude , callback) =>{
    const url = "https://api.weatherapi.com/v1/current.json?key=28a38c7012d643dcb9f54130231005&q=" + latitude + "," + longtitude 
    request ({url, json : true} , (error , response) => {
         
            if(error) {
                 callback ("Unable to connect weather service" , undefined)
            } else if(response.body.error){
                 callback (response.body.error.message , undefined)
            } else {
                    callback (undefined , response.body.location.name + ' It Is  ' + response.body.current.condition.text
                     + " & The Temp is " + response.body.current.temp_c)
            }
        })
    }
    
    module.exports = forecast;
