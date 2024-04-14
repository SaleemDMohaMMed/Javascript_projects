// Accessing the DOM elements
const input=document.getElementById('location-input')
const btn=document.getElementById('Btn')
const tempin=document.getElementById('temp-info')
const sky=document.getElementById('weather-info')
const loc=document.getElementById('location-info')  
const icc=document.getElementById('icons')

// API Key for OpenWeatherMap
const apikey='069f5022b1f37dfc6ad1b30b6a4ab47d'

// Button click event listener
btn.onclick=function()
{
    if(input.value==""){
        alert('please  enter location ');
    }
    else{
        let data=input.value
        url=`https://api.openweathermap.org/data/2.5/forecast?q=${data}&appid=${apikey}`
        fetch(url).then(res=>res.json())
        .then(show=>{
            console.log(show)
            i=0;
            const{name}=show.city
            const{feels_like}=show.list[i].main
            const{description}=show.list[i].weather[i]
            const{icon}=show.list[0].weather[i]
            // Update DOM elements with weather data
            loc.innerText=name
            tempin.innerText=Math.floor(feels_like-273)
            sky.innerText=description
            icc.src=`https://openweathermap.org/img/wn/${icon}@2x.png`

            
        })

            //reject state
            .catch(()=>{
                 // Handle invalid location
                alert('invalid location')
            })
              // Clear input value
             input.value==''
    }
}

// Function to determine the day of the week
const d=new Date();
const weekday=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

function Checkday(day){
    if(day +d.getDay() > 6){
        return day +d.getDay()-7;
    }
    else{
        return day +d.getDay();
    }
}

// Update h4 elements with day names
for(i=0;i<5;i++){
    document.querySelectorAll('h4'+(i+1)).innerHTML=weekday[Checkday(i)];
}