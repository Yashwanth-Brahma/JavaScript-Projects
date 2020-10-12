const days = document.querySelector("#ds");
const hr = document.querySelector("#hr");
const mi = document.querySelector("#mi");
const sc = document.querySelector("#sc");
const bt = document.querySelector("#dg");
bt.addEventListener("click", ()=>{
    clearInterval(timer);
    t();
});
var timer;
function t(){
   

const da = document.querySelector("#dt").value;

const endTime = new Date(da);
    console.log(endTime);

     timer = setInterval(function () {
        const now = new Date();
        timeLeft = (endTime - now) / 1000;

        const days1 = Math.floor(timeLeft / 3600 / 24);
        const hr1 = Math.floor((timeLeft / 3600) % 24);
        const mi1 = Math.floor((timeLeft / 60) % 60);
        const sc1 = Math.floor(timeLeft % 60);

        days.innerHTML = days1;
        hr.innerHTML = hr1;
        mi.innerHTML = mi1;
        sc.innerHTML = sc1;

        if (timeLeft < 0) {
            clearInterval(timer);
            document.querySelector("h1").innerHTML = "Time Out";
            days.innerHTML = 0;
            hr.innerHTML = 0;
            mi.innerHTML = 0;
            sc.innerHTML = 0;

        }
    }, 1000);
}