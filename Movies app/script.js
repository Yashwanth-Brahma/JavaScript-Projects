const container=document.querySelector("#container");
const searchVal=document.querySelector("#search");
const form=document.querySelector("form");
const tvShow=document.querySelectorAll(".thumb");
const fetchMovies=async ()=>{
    const res=await fetch("https://api.tvmaze.com/schedule/web?date=2020-05-29&country=US");
    let data=await res.json();
    console.log(data[0].name+" "+data[0]._embedded.show.image.medium+" "+data[0]._embedded.show.rating.average);
    displayTv(data)
}
fetchMovies();

const displayTv=(data)=>{
    for(data1 of data)   { 
        let rating="";
        if(data1._embedded.show.rating.average===null){
            rating=Math.floor(Math.random() * Math.floor(10))+1;
        }else{
            rating=data1._embedded.show.rating.average;
        }
    container.innerHTML+=`<div class="thumb">
                            <img src=${data1._embedded.show.image.medium} alt="${data1._embedded.show.name}" srcset=""></img>
                            <p>${data1._embedded.show.name} <span>${rating}</span></p>
                            <div class="overview">
                        ${data1._embedded.show.summary}
                        </div>
                        </div>`;
                        
    }
}

const fetchSearch=async ()=>{
    const res=await fetch(`https://api.tvmaze.com/search/shows?q=${searchVal.value}`);
    let data=await res.json();
    displaySearch(data);
}

const displaySearch=(data)=>{
    container.innerHTML="";
    for(data1 of data)   { 
        let rating="";
        if(data1.show.rating.average===null){
            rating=Math.floor(Math.random() * Math.floor(10))+1;
        }else{
            rating=data1.show.rating.average;
        }
    container.innerHTML+=`<div class="thumb">
                            <img src=${data1.show.image.medium} alt="${data1.show.name}" srcset=""></img>
                            <p>${data1.show.name} <span>${rating}</span></p>
                        </div> `;
    }
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    fetchSearch();
})
