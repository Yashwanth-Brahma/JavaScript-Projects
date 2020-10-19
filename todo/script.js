const form=document.getElementById("form");
const add=document.getElementById("add");
const todos=document.getElementsByClassName("todoli");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    if(add){
        const li=document.createAttribute("li");
        li.innerHTML=add.Value; 
        todos.appendChild(li);           
    }
})