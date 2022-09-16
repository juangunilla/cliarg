let card = document.querySelector('#cardsClimas')
const url = "https://api.weatherapi.com/v1/current.json?key=f71a991fba1d4760a9c164614221209&q=auto:ip"
axios.get('https://api.weatherapi.com/v1/current.json?key=f71a991fba1d4760a9c164614221209&q=buenos-aires')
    .then(function(res) {
        if(res.status===200){
            let datos=res.data
            card.innerHTML=`<div class="card"> <h2>${datos.location.name}</h2>
            <img class="icon" src="${datos.current.condition.icon}" alt="${datos.current.condition.text}">
            <h3>${datos.current.condition.text}</h3>
            <div class="temp">  
            <h3 class="temp_c">${datos.current.temp_c}º C</h3>
            <h3 class="temp_st">${datos.current.feelslike_c	}º C ST</h3>
            </div>
            <div class="wind">
            <h3>${datos.current.wind_kph} Kmph</h3>
            <h3>Wind of the: ${datos.current.wind_dir}</h3>
            </div>
            <h3 class="humedad">Humidity: ${datos.current.humidity}%</h3>
            <h3>Índice uv: ${datos.current.uv}</h3>

            
            
            
            `
        }
    })