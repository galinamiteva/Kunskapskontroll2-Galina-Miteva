let appId='2ecfc50db180ec401750ac2ba23f77b6';
let units = 'metric'; //metric


function searchWeather(searchTerm) {
  
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=${appId}&units=${units}`)
        .then(function (response){
            //statuskod 200 - 299 betyder att allt har gått bra
            if(response.status >= 200 && response.status <300){
                return response.json();
            }
            //statuskod 404 "not found" betyder att staden inte kunde hittas
            else if(response.status === 404){
                
                let p =document.querySelector('p');
                p.style.visibility='visible';
                console.log('Please, write correctly the city name ');
                
                throw 'Staden inte hittas'
            }
    
            //statuskod 401 "unauthorized betyder att api nyckeln är fel
                else if(response.status === 401){
                throw response.statusText;
            }
        }       
    ).then((res) => {
        into(res);
        addTemperatureIcon(res);
        changeColor(res);
        let p =document.querySelector('p');
        p.style.visibility='hidden';
    }
    ).catch(
        
        function(error){
            console.log(error); 
        }
        
    )
}



function into(resultFromServer){    // fubction som byter backgrounden i samband med weatherIcon och sätter description i weatherDescription containern.
     switch (resultFromServer.weather[0].icon) {
        case '01d':  
        document.body.style.backgroundImage='url("clear_01d.jpg")';          
            break;
        case '01n': 
        document.body.style.backgroundImage='url("clear_01n.jpg")';       
            break;
        case '02d':
            document.body.style.backgroundImage='url("cloudy_02d.jpg")';    
            break;
        case '02n':
            document.body.style.backgroundImage='url("cloudy_02n.jpg")';      
            break;
        case '03d': 
        document.body.style.backgroundImage='url("scattered_03d.jpg")';      
            break;
        case '03n':
            document.body.style.backgroundImage='url("scattered_03n.jpg")';      
            break;
        case '04d': 
            document.body.style.backgroundImage='url("broken_04d.jpg")';      
            break;
        case '04n':
            document.body.style.backgroundImage='url("broken_04n.jpg")';      
            break;
        case '09d': 
            document.body.style.backgroundImage='url("shower_09d.jpg")';      
            break;   
        case '09n':  
            document.body.style.backgroundImage='url("shower_09n.jpg")';          
            break;
        case '10d': 
            document.body.style.backgroundImage='url("rain_10d.jpg")';       
            break;
        case '10n':
            document.body.style.backgroundImage='url("rain_10n.jpg")';    
            break;
        case '11d':
            document.body.style.backgroundImage='url("storm_11d.jpg")';      
            break;
        case '11n': 
            document.body.style.backgroundImage='url("storm_11n.jpg")';      
            break;
        case '13d':
            document.body.style.backgroundImage='url("snow_13d.jpg")';      
            break; 
        case '13n':
            document.body.style.backgroundImage='url("snow_13d.jpg")';      
            break; 
        case '50d':
            document.body.style.backgroundImage='url("mist_50d.jpg")';      
            break; 
        case '50n':
            document.body.style.backgroundImage='url("mist_50n.jpg")';      
            break;    
            
         default:
             break;
    }

     let weatherDescriptionHeader=document.getElementById('weatherDescriptionHeader');
     let temperatureElement=document. getElementById('temperature');
     let humidity =document.getElementById('humidity');
     let windSpeedElement=document.getElementById('windSpeed');
     let cityName=document.getElementById('cityName');
     let weatherIcon=document.getElementById('IconImg');
     weatherIcon.src='http://openweathermap.org/img/wn/'+ resultFromServer.weather[0].icon +'@2x.png';   
     
     let resultDescription = resultFromServer.weather[0].description ;
     weatherDescriptionHeader.innerText=resultDescription.charAt(0).toUpperCase()+resultDescription.slice(1)
     temperatureElement.innerHTML = Math.floor(resultFromServer.main.temp) + '&#176;';
     windSpeedElement.innerHTML='Winds at ' + Math.floor(resultFromServer.wind.speed) +'m/s';
     cityName.innerHTML=resultFromServer.name;
     humidity.innerHTML='Humidity levels at ' + resultFromServer.main.humidity +'%'
     setPositionForWeather()

}


function setPositionForWeather(){  // function , som sätter positionen på  weatherContainer dinamisk
    let weatherContainer = document.getElementById('weatherContainer');
    let weatherContainerHeight = weatherContainer.clientHeight;
    let weatherContainerWidth = weatherContainer.clientWidth;
    weatherContainer.style.left = `calc(50% - ${weatherContainerWidth/2}px)`;
    weatherContainer.style.top = `calc(50% - ${weatherContainerHeight/1.8}px)`;
    weatherContainer.style.visibility = 'visible';

}


function addTemperatureIcon(resultFromServer){  //functionen som sätter temperature icon i sambad med värde från servern
   let temperature=resultFromServer.main.temp
    let temperatureIcon= document.getElementById('temperature-icon');
    if(temperature>=30){
        return temperatureIcon.setAttribute('class','fas fa-thermometer-full');
    }else if (temperature>=20 && temperature<30){
        return temperatureIcon.setAttribute('class','fas fa-thermometer-three-quarters');   
    }else if(temperature>=10 && temperature<20){
        return temperatureIcon.setAttribute('class','fas fa-thermometer-half');
    }else if(temperature>=0 && temperature<10){
        return temperatureIcon.setAttribute('class','fas fa-thermometer-quarter');
    }else if (temperature>=-10 && temperature<0){
        return temperatureIcon.setAttribute('class','fas fa-thermometer-empty');        
    }else{
        return temperatureIcon.setAttribute('class','fas fa-thermometer-empty');
    }
    
}  
function changeColor(resultFromServer){  //functionen som bytar färg pa submitBtn i samband med temperature
    let temperature=resultFromServer.main.temp
    let searchBtn= document.getElementById('submitBtn');
     if(temperature>=30){
         return searchBtn.style.backgroundColor="rgba(198, 73, 1, 0.95)";
     }else if (temperature>=25 && temperature<30){
         return searchBtn.style.backgroundColor='rgba(198, 145, 1, 0.925)';   
     }else if(temperature>=10 && temperature<25){
         return searchBtn.style.backgroundColor=' rgba(23, 151, 119, 0.95)';
     }else if(temperature>=0 && temperature<10){
         return searchBtn.style.backgroundColor=' rgba(1, 136, 198, 0.95)';
     }else if (temperature>=-10 && temperature<0){
         return searchBtn.style.backgroundColor='rgba(1, 80, 198, 0.95)';        
     }else{
         return searchBtn.style.backgroundColor=' rgba(76, 1, 198, 0.95)';
     }
     
 }  
 

document.getElementById('submitBtn').addEventListener('click',()=>{
    let searchTerm=  document.getElementById('searchInput').value;
                     
    if (searchTerm)
        searchWeather(searchTerm);
})
