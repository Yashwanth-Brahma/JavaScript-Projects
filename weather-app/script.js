const apikey = "3265874a2c77ae4a04bb96236a642d2f";

const search=document.querySelector("#search");
const display=document.querySelector("#display");
const form=document.querySelector("form");

let city="mysuru";

const fetchweather=async (city1=city)=>{
    const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=${apikey}`);
    const data=await res.json();
    console.log(data.name);
    displayData(data);
}

const displayData=(data)=>{
    display.innerHTML=`<h2>${data.name} <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${Math.floor(data.main.temp- 273.15)}°C 
    </h2>
    <small>${data.weather[0].main}</small>`
}
fetchweather();
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    city=search.value;
    fetchweather(city);
    search.value="";
})
