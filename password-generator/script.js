const alp="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number="0123456789";
const symbol="~!@#$%^&*|/*+-.[]{}";

const num=document.querySelector('#num');
const up=document.querySelector('#up');
const low=document.querySelector('#low');
const length=document.querySelector('#length');
const sym=document.querySelector('#sym');
const pwgBtn=document.querySelector('#pw');
const pwField=document.querySelector('#pwField');
const copy=document.querySelector('#copy');

function generateNum(){
    return Math.floor(Math.random(number)*number.length);
}

function generateUpper(){
    // console.log(alp[Math.floor(Math.random(alp)*alp.length)].toLowerCase());
    return alp[Math.floor(Math.random(alp)*alp.length)];
}

function generateLower(){
    return alp[Math.floor(Math.random(alp)*alp.length)].toLowerCase();
}

function generateSym(){
    return symbol[Math.floor(Math.random(symbol)*symbol.length)];
}

let randomFun=[];
function ranFun(){
    randomFun=[];
    if(up.checked){
        randomFun.push(generateUpper);
    }
    if(low.checked){
        randomFun.push(generateLower);
    }
    if(num.checked){
        randomFun.push(generateNum);
    }
    if(sym.checked){
        randomFun.push(generateSym);
    }
}

function generatePassword(){
    let pwf="";
    let lengthVal=length.value;
    for(let i=0;i<lengthVal;i++){
        if(i<randomFun.length){
            pwf+=(randomFun[randomFun.length-i-1]())
        }else{
        pwf+=(randomFun[Math.floor(Math.random()*randomFun.length)]());
        }
    }

    return pwf;
}

pwgBtn.addEventListener('click',()=>{
    ranFun();
    pwField.innerText=`${generatePassword()}`;
});

copy.addEventListener('click',(e)=>{
    const textarea = document.createElement("textarea");
    const password = pwField.innerText;
    textarea.value=password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("password copied");
})