let apikey = "7586f11155be46b3a3f93431251103";
let inp =document.querySelector("input");
let btn = document.querySelector("button");
let city = document.querySelector(".city");
let other = document.querySelector(".other");

async function getData(city){
    let res =await axios.get(`http://api.weatherapi.com/v1/current.json?key=7586f11155be46b3a3f93431251103&q=${city}&aqi=yes`)
    return res.data;
}
btn.addEventListener("click",async function weather(){
    let cityInput = inp.value;
    inp.value="";
    let allWeather= await getData(cityInput);
     city.innerText =`City:${allWeather.location.name}`;
     other.innerHTML= `Temp:${allWeather.current.temp_c}<br>
      Current Time:${allWeather.location.localtime}<br><br>
    Condition:${allWeather.current.condition.text}<br><br>
    long:${allWeather.location.lon}<br><br>
    lat:${allWeather.location.lat}`
})  