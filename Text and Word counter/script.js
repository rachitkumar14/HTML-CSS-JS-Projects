let data=document.querySelector('#input');
let characters=document.querySelector('.char');
let words=document.querySelector('.words');
data.addEventListener('input',function(){
    characters.innerHTML=data.value.length + ' Characters';
    words.innerHTML=data.value.replace(/\s+/g," ").trim().split(' ').length + ' Words';
    // console.log(data.value.split(" "));
    let splitWords=data.value.split(" ");
    if(splitWords[0]==""){
        words.innerHTML=0+' Words';
    }
})