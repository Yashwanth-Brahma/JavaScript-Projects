const num=document.getElementById('num');
const b1=document.getElementById('b1');
const b2=document.querySelector('#b2');
const b3=document.querySelector('#b3');
var count=0;

b1.addEventListener("click",function(){
    num.innerHTML=--count;
    if(count<0)
    num.style.color="red";
    if(count==0)
    num.style.color="black";
});

b2.addEventListener("click",function(){
    count=0;
    num.innerHTML=count;   
    num.style.color="black";
});

b3.addEventListener("click",function(){
    num.innerHTML=++count;
    if(count==0)
    num.style.color="black";
    if(count>0)
        num.style.color="green";
});