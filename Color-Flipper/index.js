function colorChange(){
    var a='#'+randomStr(6,'0123456789abcdef');
    document.getElementById('hex').innerHTML=a;
    document.getElementById('bg').style.backgroundColor=a;

}

function randomStr(len,arr){
    var ans='';
    for (var i=len;i>0;i--){
        ans+=arr[Math.floor(Math.random() * arr.length)];      
    }
    return ans;
}